import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/** Every page. Add new pages here so they inherit the same checks. */
const SERVICES = [
  '/roofing/roof-repairs',
  '/roofing/roof-restoration',
  '/roofing/new-roofs-and-re-roofing',
  '/roofing/flat-roofing',
  '/roofing/fascias-soffits-and-guttering',
  '/building/extensions',
  '/building/property-renovations',
  '/building/general-building-work',
  '/interiors/media-walls',
  '/interiors/flooring',
  '/interiors/knock-throughs',
];
const LANDING = [
  '/roofing-contractors-leinster',
  '/roofing-contractors-munster',
  '/roofing-contractors-midlands',
  '/building-contractors-leinster',
  '/building-contractors-munster',
];
export const PAGES = [
  '/',
  '/roofing',
  '/building',
  '/interiors',
  ...SERVICES,
  '/projects',
  '/projects/sagging-roof-re-slated',
  '/projects/media-wall-and-laminate-floor',
  '/projects/kitchen-living-room-knock-through',
  '/projects/fascia-and-rafter-ends-rebuilt',
  '/quote',
  '/about',
  '/areas',
  ...LANDING,
  '/contact',
  '/privacy',
  '/enquiry-sent',
  '/enquiry-error',
  '/404',
];

for (const path of PAGES) {
  test.describe(path, () => {
    test('meets WCAG 2.2 AA (axe)', async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      const summary = results.violations.map(
        (v) => `${v.id}: ${v.help}\n  ${v.nodes.map((n) => n.target.join(' ')).slice(0, 5).join('\n  ')}`,
      );
      expect(summary, summary.join('\n')).toEqual([]);
    });

    test('has one h1, title, description and canonical', async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('h1')).toHaveCount(1);
      expect((await page.title()).length).toBeGreaterThan(10);
      const desc = await page.locator('meta[name="description"]').getAttribute('content');
      expect(desc?.length ?? 0).toBeGreaterThan(50);
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
      await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
      await expect(page.locator('html')).toHaveAttribute('lang', 'en-IE');
    });

    test('never scrolls horizontally', async ({ page }) => {
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    });
  });
}

test('meta descriptions are unique', async ({ page }) => {
  const seen = new Map<string, string>();
  for (const path of PAGES) {
    await page.goto(path);
    const d = (await page.locator('meta[name="description"]').getAttribute('content')) ?? '';
    expect(seen.get(d), `${path} repeats the description of ${seen.get(d)}`).toBeUndefined();
    seen.set(d, path);
  }
});

test('phone and email links are correct everywhere', async ({ page }) => {
  await page.goto('/');
  const tels = await page.locator('a[href^="tel:"]').evaluateAll((as) => as.map((a) => a.getAttribute('href')));
  expect(tels.length).toBeGreaterThan(2);
  for (const t of tels) expect(t).toBe('tel:+353873654209');
  const mails = await page.locator('a[href^="mailto:"]').evaluateAll((as) => as.map((a) => a.getAttribute('href')));
  for (const m of mails) expect(m).toMatch(/^mailto:pcandson84@outlook\.ie/);
});

test('quote form has every required field', async ({ page }) => {
  await page.goto('/contact');
  const form = page.locator('#quote form');
  for (const name of ['name', 'phone', 'email', 'location', 'service', 'message']) {
    await expect(form.locator(`[name="${name}"]`)).toHaveAttribute('required', '');
  }
  await expect(form.locator('input[type="file"][name="photos"]')).toHaveCount(1);
  await expect(form).toHaveAttribute('action', '/api/quote');
});

test('quote page lists every service and preselects from service pages', async ({ page }) => {
  await page.goto('/roofing/flat-roofing');
  await page.locator('main a[href^="/quote?service="]').first().click();
  const select = page.locator('#quote-page-form select[name="service"]');
  await expect(select).toHaveValue('Flat roofing (GRP)');
  for (const label of ['Media wall', 'Hardwood flooring', 'Laminate flooring', 'Extension', 'Metal roof sheeting']) {
    await expect(select.locator('option', { hasText: label }).first()).toBeAttached();
  }
  await expect(page.locator('#quote-page-form input[name="propertyType"]')).toHaveCount(3);
});

test('no stock or demonstration photos remain', async ({ page }) => {
  for (const path of ['/', '/projects', '/roofing/roof-repairs', '/interiors']) {
    await page.goto(path);
    await expect(page.locator('.demo-tag')).toHaveCount(0);
  }
});

test('TikTok and Facebook links are present', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('footer a[href="https://www.tiktok.com/@premier.roofing.b"]')).toHaveCount(1);
  await expect(page.locator('footer a[href="https://www.facebook.com/share/1AYy9uFgGR/"]')).toHaveCount(1);
});

test('videos load nothing until played', async ({ page }) => {
  await page.goto('/');
  const videos = page.locator('video');
  await expect(videos).toHaveCount(2);
  for (const v of await videos.all()) await expect(v).toHaveAttribute('preload', 'none');
});

test('robots.txt blocks crawling until launch is approved', async ({ request }) => {
  const res = await request.get('/robots.txt');
  expect(await res.text()).toContain('Disallow: /');
});

test.describe('mobile navigation', () => {
  test.skip(({ viewport }) => (viewport?.width ?? 0) >= 1024, 'mobile only');
  test('menu opens, shows services and closes', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.locator('#mobile-menu');
    await expect(menu).toBeVisible();
    await menu.getByText('Roofing', { exact: true }).click();
    await expect(menu.getByRole('link', { name: 'Flat Roofing' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(menu).toBeHidden();
  });
  test('call bar is fixed at the bottom', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('.mobile-bar a[href^="tel:"]')).toBeVisible();
  });
});

test.describe('desktop navigation', () => {
  test.skip(({ viewport }) => (viewport?.width ?? 0) < 1024, 'desktop only');
  test('roofing dropdown lists every roofing service', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'Roofing', exact: true }).hover();
    for (const label of ['Roof Repairs', 'Roof Restoration', 'New Roofs & Re-Roofing', 'Flat Roofing', 'Fascias, Soffits & Guttering']) {
      await expect(page.locator('.mega').first().getByRole('link', { name: new RegExp(label.replace(/[&,]/g, '.')) })).toBeVisible();
    }
  });
  test('dropdown opens with the keyboard and closes on Escape', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByRole('button', { name: 'Building services' });
    await toggle.focus();
    await page.keyboard.press('Enter');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
  test('mobile call bar is hidden', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.mobile-bar')).toBeHidden();
  });
});

test('before/after slider responds to the keyboard', async ({ page }) => {
  await page.goto('/projects/sagging-roof-re-slated');
  const range = page.locator('[data-ba-range]').first();
  await range.focus();
  await page.keyboard.press('ArrowLeft');
  const pos = await page.locator('.ba-stage').first().evaluate((el) => (el as HTMLElement).style.getPropertyValue('--pos'));
  expect(pos).toBe('49%');
});
