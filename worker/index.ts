/**
 * Cloudflare Worker: serves the static site and handles quote enquiries.
 *
 * POST /api/quote  (multipart/form-data from the homepage form)
 *   → validates fields, rejects spam (honeypot + minimum fill time),
 *   → emails the enquiry, with up to 3 photos attached, via Resend,
 *   → redirects to /quote-sent on success or /quote-error on failure.
 *
 * Nothing is reported as sent unless the email provider accepted it.
 *
 * Configuration (Cloudflare → Workers & Pages → cawley-tree-care → Settings):
 *   Secret  RESEND_API_KEY   API key from resend.com (domain verified there)
 *   Var     ENQUIRY_TO       Inbox that receives enquiries
 *   Var     ENQUIRY_FROM     Sender on the verified domain, e.g.
 *                            "Cawley's Website <quotes@cawleytreecare.ie>"
 * Until all three are set, submissions go to /quote-error, which shows
 * the phone number, so no enquiry is silently lost.
 */

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  RESEND_API_KEY?: string;
  ENQUIRY_TO?: string;
  ENQUIRY_FROM?: string;
}

const MAX_PHOTOS = 3;
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
const MAX_TOTAL_BYTES = 12 * 1024 * 1024;
const MIN_FILL_MS = 3000;

const redirect = (url: URL, path: string) =>
  Response.redirect(new URL(path, url.origin).toString(), 303);

const clean = (v: FormDataEntryValue | null, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
  );

const toBase64 = (buf: ArrayBuffer) => {
  const bytes = new Uint8Array(buf);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) {
    bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  }
  return btoa(bin);
};

async function handleQuote(request: Request, env: Env, url: URL): Promise<Response> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(url, '/quote-error');
  }

  // Spam checks: hidden field must be empty; form must not be submitted instantly.
  const started = Number(clean(form.get('started'), 20));
  if (clean(form.get('website'), 200) || (started && Date.now() - started < MIN_FILL_MS)) {
    return redirect(url, '/quote-sent'); // quietly accept bots
  }

  const name = clean(form.get('name'), 120);
  const phone = clean(form.get('phone'), 40);
  const email = clean(form.get('email'), 200);
  const location = clean(form.get('location'), 120);
  const service = clean(form.get('service'), 120);
  const message = clean(form.get('message'), 5000);
  if (!name || !phone || !location || !service) return redirect(url, '/quote-error');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return redirect(url, '/quote-error');

  if (!env.RESEND_API_KEY || !env.ENQUIRY_TO || !env.ENQUIRY_FROM) {
    console.error('Quote form is not configured: set RESEND_API_KEY, ENQUIRY_TO and ENQUIRY_FROM.');
    return redirect(url, '/quote-error');
  }

  const attachments: { filename: string; content: string }[] = [];
  let total = 0;
  for (const entry of form.getAll('photos').slice(0, MAX_PHOTOS)) {
    if (typeof entry === 'string' || entry.size === 0) continue;
    if (!entry.type.startsWith('image/') || entry.size > MAX_PHOTO_BYTES) continue;
    total += entry.size;
    if (total > MAX_TOTAL_BYTES) break;
    attachments.push({
      filename: entry.name.replace(/[^\w.\-]+/g, '_').slice(0, 80) || 'photo.jpg',
      content: toBase64(await entry.arrayBuffer()),
    });
  }

  const rows: [string, string][] = [
    ['Name', name],
    ['Phone', phone],
    ['Email', email || '(not given)'],
    ['Location', location],
    ['Type of work', service],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nAbout the job:\n${message || '(no description given)'}\n\nPhotos attached: ${attachments.length}`;
  const html = `<h2>New quote request</h2><table>${rows
    .map(([k, v]) => `<tr><th align="left">${k}</th><td>${escapeHtml(v)}</td></tr>`)
    .join(
      '',
    )}</table><h3>About the job</h3><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p><p>Photos attached: ${attachments.length}</p>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.ENQUIRY_FROM,
      to: [env.ENQUIRY_TO],
      reply_to: email || undefined,
      subject: `Quote request: ${service} – ${name}, ${location}`,
      text,
      html,
      attachments,
    }),
  });

  if (!res.ok) {
    console.error('Email provider rejected the enquiry', res.status, await res.text());
    return redirect(url, '/quote-error');
  }
  return redirect(url, '/quote-sent');
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/quote') {
      if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
      return handleQuote(request, env, url);
    }
    return env.ASSETS.fetch(request);
  },
};
