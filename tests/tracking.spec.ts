import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Consent and conversion tracking. Runs against a second build made with
 * sample (fake) IDs (see playwright.config.ts). Google and Meta are never
 * contacted: their scripts are replaced with empty stubs, and the calls the
 * site makes are read from window.dataLayer and the fbq queue.
 */

type Calls = { google: string[]; meta: string[]; other: string[] };

async function stubThirdParties(page: Page, baseURL: string): Promise<Calls> {
  const calls: Calls = { google: [], meta: [], other: [] };
  await page.route(
    (url) => !url.href.startsWith(baseURL),
    async (route) => {
      const url = route.request().url();
      if (url.includes('googletagmanager.com')) calls.google.push(url);
      else if (url.includes('connect.facebook.net')) calls.meta.push(url);
      else calls.other.push(url);
      await route.fulfill({ status: 200, contentType: 'text/javascript', body: '' });
    },
  );
  // The quote endpoint is a Cloudflare Pages Function, not part of the
  // static preview: answer as it does on success.
  await page.route('**/api/quote', (route) =>
    route.fulfill({ status: 303, headers: { location: '/quote-sent' } }),
  );
  return calls;
}

/** gtag calls as plain arrays, e.g. ['event', 'conversion', {...}]. */
const gtagCalls = (page: Page) =>
  page.evaluate(() =>
    ((window as unknown as { dataLayer?: unknown[] }).dataLayer ?? []).map((a) =>
      Array.from(a as ArrayLike<unknown>),
    ),
  );
const fbqCalls = (page: Page) =>
  page.evaluate(() => (window as unknown as { fbq?: { queue?: unknown[][] } }).fbq?.queue ?? []);

const banner = (page: Page) => page.getByRole('region', { name: 'Cookie consent' });

test.describe('cookie consent', () => {
  test('nothing loads before a choice, and the banner is shown', async ({ page, baseURL }) => {
    const calls = await stubThirdParties(page, baseURL!);
    await page.goto('/');
    await expect(banner(page)).toBeVisible();
    // The detailed settings stay closed until "Cookie settings" is pressed.
    await expect(page.getByRole('dialog', { name: 'Cookie settings' })).toBeHidden();
    await page.waitForLoadState('networkidle');
    expect(calls.google).toEqual([]);
    expect(calls.meta).toEqual([]);
    expect(await page.context().cookies()).toEqual([]);
  });

  test('accept and reject are equally prominent', async ({ page }) => {
    await page.goto('/');
    const accept = banner(page).getByRole('button', { name: 'Accept all' });
    const reject = banner(page).getByRole('button', { name: 'Reject all' });
    const [a, r] = [await accept.boundingBox(), await reject.boundingBox()];
    expect(a && r).toBeTruthy();
    expect(Math.abs(a!.width - r!.width)).toBeLessThan(2);
    expect(Math.abs(a!.height - r!.height)).toBeLessThan(2);
    const style = (el: Element) => {
      const s = getComputedStyle(el);
      return [s.color, s.backgroundColor, s.borderColor, s.fontSize, s.fontWeight].join();
    };
    expect(await accept.evaluate(style)).toBe(await reject.evaluate(style));
  });

  test('the banner is accessible and fits a small phone', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await expect(banner(page)).toBeVisible();
    const results = await new AxeBuilder({ page })
      .include('#consent')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(results.violations).toEqual([]);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test('reject all: nothing loads, now or on later pages', async ({ page, baseURL }) => {
    const calls = await stubThirdParties(page, baseURL!);
    await page.goto('/');
    await banner(page).getByRole('button', { name: 'Reject all' }).click();
    await expect(banner(page)).toBeHidden();
    await page.goto('/tree-surgeon-athlone');
    await expect(banner(page)).toBeHidden();
    await page.locator('a[href^="tel:"]').first().dispatchEvent('click');
    await page.waitForLoadState('networkidle');
    expect(calls.google).toEqual([]);
    expect(calls.meta).toEqual([]);
    expect(await gtagCalls(page)).toEqual([]);
  });

  test('accept all: Google and Meta load with consent granted', async ({ page, baseURL }) => {
    const calls = await stubThirdParties(page, baseURL!);
    await page.goto('/');
    await banner(page).getByRole('button', { name: 'Accept all' }).click();
    await expect(banner(page)).toBeHidden();
    await expect.poll(() => calls.google.length).toBe(1);
    await expect.poll(() => calls.meta.length).toBe(1);
    const g = await gtagCalls(page);
    expect(g).toContainEqual([
      'consent',
      'default',
      {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      },
    ]);
    expect(g).toContainEqual(['config', 'G-TEST000001']);
    expect(g).toContainEqual(['config', 'AW-123456789']);
    expect(await fbqCalls(page)).toContainEqual(['init', '1234567890123456']);
    // Remembered on the next page, without asking again.
    await page.goto('/tree-removal');
    await expect(banner(page)).toBeHidden();
    await expect.poll(() => calls.google.length).toBe(2);
  });

  test('analytics only: GA4 loads, advertising does not', async ({ page, baseURL }) => {
    const calls = await stubThirdParties(page, baseURL!);
    await page.goto('/');
    await banner(page).getByRole('button', { name: 'Cookie settings' }).click();
    const dialog = page.getByRole('dialog', { name: 'Cookie settings' });
    await expect(dialog).toBeVisible();
    await dialog.getByRole('checkbox', { name: /Analytics/ }).check();
    await page.getByRole('button', { name: 'Save my choices' }).click();
    await expect.poll(() => calls.google.length).toBe(1);
    const g = await gtagCalls(page);
    expect(g).toContainEqual(['config', 'G-TEST000001']);
    expect(g).not.toContainEqual(['config', 'AW-123456789']);
    expect(calls.meta).toEqual([]);
    await page.locator('a[href^="tel:"]').first().dispatchEvent('click');
    const after = await gtagCalls(page);
    expect(after.some((c) => c[0] === 'event' && c[1] === 'click_to_call')).toBe(true);
    expect(after.some((c) => c[1] === 'conversion')).toBe(false);
  });

  test('a phone tap is counted as a call conversion', async ({ page, baseURL }) => {
    await stubThirdParties(page, baseURL!);
    await page.goto('/');
    await banner(page).getByRole('button', { name: 'Accept all' }).click();
    await page.locator('a[href^="tel:"]').first().dispatchEvent('click');
    expect(await gtagCalls(page)).toContainEqual([
      'event',
      'conversion',
      { send_to: 'AW-123456789/callLabel01' },
    ]);
    expect(await fbqCalls(page)).toContainEqual(['track', 'Contact']);
  });

  test('a sent quote is counted once', async ({ page, baseURL }) => {
    await stubThirdParties(page, baseURL!);
    await page.goto('/');
    await banner(page).getByRole('button', { name: 'Accept all' }).click();
    // Submit the real form (validation is skipped: only the tracking is under test).
    await page.evaluate(() => {
      const form = document.querySelector<HTMLFormElement>('form[action="/api/quote"]')!;
      form.noValidate = true;
      form.requestSubmit();
    });
    await page.waitForURL('**/quote-sent');
    const conversion = ['event', 'conversion', { send_to: 'AW-123456789/quoteLabel01' }];
    expect(await gtagCalls(page)).toContainEqual(conversion);
    expect(await gtagCalls(page)).toContainEqual(['event', 'generate_lead', { form: 'quote' }]);
    expect(await fbqCalls(page)).toContainEqual(['track', 'Lead']);
    // A refresh does not count a second quote.
    await page.reload();
    expect(await gtagCalls(page)).not.toContainEqual(conversion);
  });

  test('visiting /quote-sent directly is not a conversion', async ({ page, baseURL }) => {
    await stubThirdParties(page, baseURL!);
    await page.goto('/');
    await banner(page).getByRole('button', { name: 'Accept all' }).click();
    await page.goto('/quote-sent');
    const g = await gtagCalls(page);
    expect(g.some((c) => c[1] === 'conversion' || c[1] === 'generate_lead')).toBe(false);
  });

  test('consent can be withdrawn from the footer', async ({ page, baseURL }) => {
    const calls = await stubThirdParties(page, baseURL!);
    await page.goto('/');
    await banner(page).getByRole('button', { name: 'Accept all' }).click();
    await expect.poll(() => calls.google.length).toBe(1);
    await page.locator('footer').getByRole('button', { name: 'Cookie settings' }).click();
    const dialog = page.getByRole('dialog', { name: 'Cookie settings' });
    await expect(dialog).toBeVisible();
    await Promise.all([
      page.waitForEvent('load'),
      dialog.getByRole('button', { name: 'Reject all' }).click(),
    ]);
    await expect(banner(page)).toBeHidden();
    await page.waitForLoadState('networkidle');
    expect(calls.google.length).toBe(1); // nothing new after withdrawing
    expect(await gtagCalls(page)).toEqual([]);
  });

  test('the bar is slim and never covers the Call / Quote bar', async ({ page }, info) => {
    await page.goto('/tree-surgery');
    await page.mouse.wheel(0, 1500); // past the hero, so the phone bar shows
    await expect(banner(page)).toBeVisible();
    const viewport = page.viewportSize()!;
    const bar = (await banner(page).boundingBox())!;
    expect(bar.height / viewport.height).toBeLessThan(
      info.project.name.includes('mobile') ? 0.22 : 0.12,
    );
    const quick = page.getByRole('region', { name: 'Quick contact' });
    if (await quick.isVisible()) {
      await page.waitForTimeout(400); // let the bar finish sliding in
      const q = (await quick.boundingBox())!;
      expect(bar.y + bar.height).toBeLessThanOrEqual(q.y + 1);
      await expect(quick.getByRole('link', { name: /Call now/ })).toBeInViewport();
      await expect(quick.getByRole('link', { name: /Request a free quote/ })).toBeInViewport();
    }
  });

  test('settings panel: necessary always on, the rest off until chosen', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await banner(page).getByRole('button', { name: 'Cookie settings' }).click();
    const dialog = page.getByRole('dialog', { name: 'Cookie settings' });
    await expect(dialog).toBeVisible();
    const necessary = dialog.getByRole('checkbox', { name: /Necessary/ });
    await expect(necessary).toBeChecked();
    await expect(necessary).toBeDisabled();
    await expect(dialog.getByRole('checkbox', { name: /Analytics/ })).not.toBeChecked();
    await expect(dialog.getByRole('checkbox', { name: /Marketing/ })).not.toBeChecked();
    const results = await new AxeBuilder({ page })
      .include('#consent-prefs')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(results.violations).toEqual([]);
    // Closing without choosing keeps the bar, so nothing is assumed.
    await dialog.getByRole('button', { name: 'Close' }).click();
    await expect(dialog).toBeHidden();
    await expect(banner(page)).toBeVisible();
  });

  test('asks again when a new kind of tracking is added', async ({ page, baseURL }) => {
    const calls = await stubThirdParties(page, baseURL!);
    // A choice saved when only Analytics existed (no `asked` list).
    await page.addInitScript(() => {
      if (!sessionStorage.getItem('seeded')) {
        localStorage.setItem(
          'cawley-consent',
          JSON.stringify({ v: 1, analytics: true, marketing: false, ts: Date.now() }),
        );
        sessionStorage.setItem('seeded', '1');
      }
    });
    await page.goto('/');
    // Analytics keeps working, but the visitor is asked about advertising.
    await expect(banner(page)).toBeVisible();
    await expect.poll(() => calls.google.length).toBe(1);
    expect(await gtagCalls(page)).not.toContainEqual(['config', 'AW-123456789']);
    expect(calls.meta).toEqual([]);
    // Accepting loads advertising too, and the bar stays away afterwards.
    await Promise.all([
      page.waitForEvent('load'),
      banner(page).getByRole('button', { name: 'Accept all' }).click(),
    ]);
    await expect(banner(page)).toBeHidden();
    await expect.poll(() => calls.meta.length).toBe(1);
    expect(await gtagCalls(page)).toContainEqual(['config', 'AW-123456789']);
    await page.goto('/tree-removal');
    await expect(banner(page)).toBeHidden();
  });

  test('a choice covering everything is not asked again', async ({ page }) => {
    await page.goto('/');
    await banner(page).getByRole('button', { name: 'Reject all' }).click();
    await page.goto('/tree-pruning');
    await expect(banner(page)).toBeHidden();
  });

  test('no third parties other than Google and Meta are contacted', async ({ page, baseURL }) => {
    const calls = await stubThirdParties(page, baseURL!);
    await page.goto('/');
    await banner(page).getByRole('button', { name: 'Accept all' }).click();
    await page.waitForLoadState('networkidle');
    expect(calls.other).toEqual([]);
  });
});
