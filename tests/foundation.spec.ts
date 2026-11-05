import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Foundation checks. Every future page should be added to PAGES so it
 * inherits the same accessibility, SEO and responsiveness guarantees.
 */
const PAGES = ['/', '/styleguide'];

for (const path of PAGES) {
  test.describe(path, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
    });

    test('has no WCAG 2.2 AA accessibility violations', async ({ page }) => {
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      // Report each failing element so problems are quick to locate.
      const failures = results.violations.flatMap((v) =>
        v.nodes.map((n) => `${v.id}: ${n.target.join(' ')}: ${n.failureSummary ?? v.help}`),
      );
      expect(failures).toEqual([]);
    });

    test('does not scroll horizontally', async ({ page }) => {
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });

    test('has essential SEO metadata', async ({ page }) => {
      await expect(page.locator('html')).toHaveAttribute('lang', 'en-IE');
      await expect(page).toHaveTitle(/Cawley's Tree Care & Landscaping/);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.{50,}/);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      // One canonical form: no ".html", no trailing slash (except the root "/").
      expect(new URL(canonical!).pathname).toBe(path);
      await expect(page.locator('h1')).toHaveCount(1);
    });

    test('loads only the two brand typefaces, self-hosted', async ({ page }) => {
      const families = await page.evaluate(() =>
        [...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family),
      );
      expect(families.some((f) => f.includes('Instrument Serif'))).toBe(true);
      expect(families.some((f) => f.includes('Inter'))).toBe(true);

      const heading = await page.locator('h1').evaluate((el) => getComputedStyle(el).fontFamily);
      const body = await page.locator('body').evaluate((el) => getComputedStyle(el).fontFamily);
      expect(heading).toContain('Instrument Serif');
      expect(body).toContain('Inter');
    });

    test('makes no third-party requests', async ({ page, baseURL }) => {
      const external: string[] = [];
      page.on('request', (req) => {
        if (!req.url().startsWith(baseURL!)) external.push(req.url());
      });
      await page.reload();
      await page.waitForLoadState('networkidle');
      expect(external).toEqual([]);
    });

    test('skip link moves focus to main content', async ({ page }) => {
      await page.keyboard.press('Tab');
      const skip = page.getByRole('link', { name: 'Skip to main content' });
      await expect(skip).toBeFocused();
      await page.keyboard.press('Enter');
      await expect(page.locator('main')).toBeFocused();
    });
  });
}

test('layout spacing does not leak into nested primitives', async ({ page }) => {
  await page.goto('/styleguide');
  const { outer, inner } = await page.evaluate(() => {
    const outerStack = document.querySelector<HTMLElement>('main .stack')!;
    const innerStack = outerStack.querySelector<HTMLElement>('.stack')!;
    return {
      outer: getComputedStyle(outerStack).rowGap,
      inner: getComputedStyle(innerStack).rowGap,
    };
  });
  expect(inner).not.toBe(outer);
});

test('internal styleguide is never indexable', async ({ page }) => {
  await page.goto('/styleguide');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
});

test('robots.txt blocks crawling while indexing is disabled', async ({ request }) => {
  const res = await request.get('/robots.txt');
  expect(res.ok()).toBe(true);
  expect(await res.text()).toContain('Disallow: /');
});

test('structured data never contains placeholder values', async ({ page }) => {
  await page.goto('/styleguide');
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(blocks.length).toBeGreaterThan(0);
  for (const block of blocks) {
    expect(() => JSON.parse(block)).not.toThrow();
    expect(block).not.toContain('__placeholder');
  }
});
