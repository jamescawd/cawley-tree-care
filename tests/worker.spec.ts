import { expect, test } from '@playwright/test';
import worker from '../worker/index';

/** Unit tests for the quote-form handler (worker/index.ts). */
test.describe.configure({ mode: 'serial' });
test.beforeEach(({}, info) => test.skip(info.project.name !== 'desktop', 'Runs once'));

const assets = { fetch: async () => new Response('static') };

function quote(fields: Record<string, string>, photo?: Blob) {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) fd.set(k, v);
  if (photo) fd.append('photos', photo, 'tree.jpg');
  return new Request('https://cawleytreecare.ie/api/quote', { method: 'POST', body: fd });
}

const valid = {
  name: 'Test Customer',
  phone: '087 000 0000',
  location: 'Athlone',
  service: 'Tree Removal & Felling',
  message: 'Large ash beside the house.',
  started: String(Date.now() - 60_000),
};

test('unconfigured handler never reports success', async () => {
  const res = await worker.fetch(quote(valid), { ASSETS: assets });
  expect(res.status).toBe(303);
  expect(res.headers.get('location')).toMatch(/\/quote-error$/);
});

test('missing required fields go to the error page', async () => {
  const res = await worker.fetch(quote({ ...valid, phone: '' }), {
    ASSETS: assets,
    RESEND_API_KEY: 'k',
    ENQUIRY_TO: 'a@b.ie',
    ENQUIRY_FROM: 'c@d.ie',
  });
  expect(res.headers.get('location')).toMatch(/\/quote-error$/);
});

test('a valid enquiry is emailed with its photo and then confirmed', async () => {
  const original = globalThis.fetch;
  let sent: Record<string, unknown> | undefined;
  globalThis.fetch = (async (_url: string, init: RequestInit) => {
    sent = JSON.parse(String(init.body));
    return new Response('{"id":"1"}', { status: 200 });
  }) as typeof fetch;
  try {
    const photo = new Blob([new Uint8Array([255, 216, 255])], { type: 'image/jpeg' });
    const res = await worker.fetch(quote(valid, photo), {
      ASSETS: assets,
      RESEND_API_KEY: 'k',
      ENQUIRY_TO: 'inbox@example.ie',
      ENQUIRY_FROM: 'site@example.ie',
    });
    expect(res.headers.get('location')).toMatch(/\/quote-sent$/);
    expect(sent?.to).toEqual(['inbox@example.ie']);
    expect(String(sent?.subject)).toContain('Tree Removal & Felling');
    expect((sent?.attachments as unknown[]).length).toBe(1);
  } finally {
    globalThis.fetch = original;
  }
});

test('provider failure is reported as not sent', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = (async () => new Response('bad', { status: 500 })) as typeof fetch;
  try {
    const res = await worker.fetch(quote(valid), {
      ASSETS: assets,
      RESEND_API_KEY: 'k',
      ENQUIRY_TO: 'a@b.ie',
      ENQUIRY_FROM: 'c@d.ie',
    });
    expect(res.headers.get('location')).toMatch(/\/quote-error$/);
  } finally {
    globalThis.fetch = original;
  }
});

test('spam (filled honeypot) is not emailed', async () => {
  let called = false;
  const original = globalThis.fetch;
  globalThis.fetch = (async () => ((called = true), new Response('{}'))) as typeof fetch;
  try {
    await worker.fetch(quote({ ...valid, website: 'spam' }), {
      ASSETS: assets,
      RESEND_API_KEY: 'k',
      ENQUIRY_TO: 'a@b.ie',
      ENQUIRY_FROM: 'c@d.ie',
    });
    expect(called).toBe(false);
  } finally {
    globalThis.fetch = original;
  }
});

test('other requests are served as static files', async () => {
  const res = await worker.fetch(new Request('https://cawleytreecare.ie/'), { ASSETS: assets });
  expect(await res.text()).toBe('static');
});
