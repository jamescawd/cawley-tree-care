/**
 * Cloudflare Worker: serves the static site and handles quote requests.
 *
 * POST /api/quote  (multipart/form-data from the quote form)
 *   → validates the fields and rejects obvious spam (honeypot + fill time),
 *   → emails the enquiry, with up to 3 photographs attached, via Resend,
 *   → redirects to /enquiry-sent only if the email provider accepted it,
 *     otherwise to /enquiry-error (which shows the phone number and email).
 *
 * NOT YET CONFIGURED. Until these are set in Cloudflare (Workers & Pages →
 * this project → Settings → Variables and Secrets), every submission goes to
 * /enquiry-error so that no enquiry is silently lost:
 *   Secret  RESEND_API_KEY   API key from resend.com (sending domain verified)
 *   Var     ENQUIRY_TO       Inbox that receives enquiries (e.g. pcandson84@outlook.ie)
 *   Var     ENQUIRY_FROM     Sender on the verified domain, e.g.
 *                            "Pat Premier Website <quotes@yourdomain.ie>"
 * See docs/FORMS.md for the full set-up and test checklist.
 */

export interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  RESEND_API_KEY?: string;
  ENQUIRY_TO?: string;
  ENQUIRY_FROM?: string;
}

const MAX_PHOTOS = 3;
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
const MAX_TOTAL_BYTES = 12 * 1024 * 1024;
const MIN_FILL_MS = 3000;

const redirect = (url: URL, path: string) => Response.redirect(new URL(path, url.origin).toString(), 303);

const clean = (v: FormDataEntryValue | null, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const toBase64 = (buf: ArrayBuffer) => {
  const bytes = new Uint8Array(buf);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
};

async function handleQuote(request: Request, env: Env, url: URL): Promise<Response> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(url, '/enquiry-error');
  }

  const started = Number(clean(form.get('started'), 20));
  if (clean(form.get('website'), 200) || (started && Date.now() - started < MIN_FILL_MS)) {
    return redirect(url, '/enquiry-sent'); // quietly accept bots
  }

  const name = clean(form.get('name'), 120);
  const phone = clean(form.get('phone'), 40);
  const email = clean(form.get('email'), 200);
  const location = clean(form.get('location'), 120);
  const service = clean(form.get('service'), 120);
  const message = clean(form.get('message'), 5000);
  const propertyType = clean(form.get('propertyType'), 60);
  const timescale = clean(form.get('timescale'), 60);
  if (!name || !phone || !email || !location || !service || !message) return redirect(url, '/enquiry-error');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return redirect(url, '/enquiry-error');

  if (!env.RESEND_API_KEY || !env.ENQUIRY_TO || !env.ENQUIRY_FROM) {
    console.error('Quote form is not configured: set RESEND_API_KEY, ENQUIRY_TO and ENQUIRY_FROM.');
    return redirect(url, '/enquiry-error');
  }

  const attachments: { filename: string; content: string }[] = [];
  let total = 0;
  for (const f of form.getAll('photos').slice(0, MAX_PHOTOS)) {
    if (typeof f === 'string' || !f.size) continue;
    if (f.size > MAX_PHOTO_BYTES || !f.type.startsWith('image/')) continue;
    total += f.size;
    if (total > MAX_TOTAL_BYTES) break;
    attachments.push({ filename: f.name || `photo-${attachments.length + 1}.jpg`, content: toBase64(await f.arrayBuffer()) });
  }

  const rows = [
    ['Name', name],
    ['Telephone', phone],
    ['Email', email],
    ['Location', location],
    ['Service', service],
    ['Property', propertyType || 'Not given'],
    ['Timescale', timescale || 'Not given'],
  ];
  const html = `<h2>New quote request</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><th align="left">${k}</th><td>${escapeHtml(v!)}</td></tr>`)
    .join('')}</table><h3>Description of work</h3><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p><p>${attachments.length} photograph(s) attached.</p>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.ENQUIRY_FROM,
      to: [env.ENQUIRY_TO],
      reply_to: email,
      subject: `Quote request: ${service} in ${location} (${name})`,
      html,
      attachments,
    }),
  });
  if (!res.ok) {
    console.error('Email provider rejected the enquiry', res.status, await res.text());
    return redirect(url, '/enquiry-error');
  }
  return redirect(url, '/enquiry-sent');
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/quote') {
      if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
      return handleQuote(request, env, url);
    }
    return env.ASSETS.fetch(request);
  },
};
