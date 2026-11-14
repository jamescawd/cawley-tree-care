import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Foundation checks. Every future page should be added to PAGES so it
 * inherits the same accessibility, SEO and responsiveness guarantees.
 */
const SERVICE_PAGES = [
  '/tree-surgery',
  '/tree-removal',
  '/tree-pruning',
  '/stump-grinding',
  '/emergency-tree-services',
  '/hedge-cutting',
  '/site-clearance',
  '/landscaping',
  '/fencing',
];
const LOCATION_PAGES = ['/tree-surgeon-athlone'];
const PAGES = [
  '/',
  '/privacy',
  '/quote-sent',
  '/quote-error',
  '/404',
  '/styleguide',
  ...SERVICE_PAGES,
  ...LOCATION_PAGES,
];

for (const path of PAGES) {
  test.describe(path, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
    });

    test('has no WCAG 2.2 AA accessibility violations', async ({ page }) => {
      // Audit the settled design: entrance animations briefly fade elements,
      // which axe would otherwise measure mid-transition.
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.reload();
      await page.evaluate(() => document.fonts.ready);
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
      // Service pages use the short brand ("… | Cawley's") to stay within 60 characters.
      await expect(page).toHaveTitle(/Cawley's/);
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
      expect(families.some((f) => f.includes('Fraunces'))).toBe(true);
      expect(families.some((f) => f.includes('Inter'))).toBe(true);

      const heading = await page.locator('h1').evaluate((el) => getComputedStyle(el).fontFamily);
      const body = await page.locator('body').evaluate((el) => getComputedStyle(el).fontFamily);
      expect(heading).toContain('Fraunces');
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

test.describe('homepage conversion paths', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('every in-page link points at a section that exists', async ({ page }) => {
    const broken = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]')]
        .map((a) => new URL(a.href))
        .filter((u) => u.pathname === location.pathname && u.hash.length > 1)
        .map((u) => decodeURIComponent(u.hash.slice(1)))
        .filter((id) => !document.getElementById(id)),
    );
    expect(broken).toEqual([]);
  });

  test('phone links dial the confirmed number', async ({ page }) => {
    const tels = await page
      .locator('a[href^="tel:"]')
      .evaluateAll((els) => els.map((e) => e.getAttribute('href')));
    expect(tels.length).toBeGreaterThanOrEqual(3);
    for (const href of tels) expect(href).toBe('tel:+353871199816');
  });

  test('quote buttons lead to the quote form', async ({ page }) => {
    const quotes = page.getByRole('link', { name: /request a free quote/i });
    expect(await quotes.count()).toBeGreaterThanOrEqual(3);
    await expect(page.locator('#enquiry form')).toHaveCount(1);
  });

  test('quote buttons land on the form itself, not the section intro', async ({ page }) => {
    await page
      .locator('.hero__ctas')
      .getByRole('link', { name: /request a free quote/i })
      .click();
    await expect(page).toHaveURL(/#quote-form$/);
    await expect(page.locator('#quote-form').getByLabel('Your name')).toBeInViewport();
  });

  test('quote form asks only for useful information', async ({ page }) => {
    const form = page.locator('#enquiry form');
    await expect(form.getByLabel('Your name')).toHaveAttribute('required', '');
    await expect(form.getByLabel('Phone number')).toHaveAttribute('type', 'tel');
    await expect(form.getByLabel(/Email/)).not.toHaveAttribute('required', '');
    await expect(form.getByLabel('Type of work')).toHaveAttribute('required', '');
    await expect(form.getByLabel('Where is the job?')).toHaveAttribute('required', '');
    await expect(form.getByLabel(/Tell us about the job/)).not.toHaveAttribute('required', '');
    await expect(form.getByLabel(/Photos of the job/)).toHaveAttribute('type', 'file');
    await expect(form).toHaveAttribute('enctype', 'multipart/form-data');
    await expect(form).toHaveAttribute('action', '/api/quote');
    const send = form.getByRole('button', { name: /send my free quote request/i });
    await expect(send).toBeEnabled();
    // It must really submit the form (a plain type="button" does nothing).
    await expect(send).toHaveAttribute('type', 'submit');
  });

  test('portfolio filters show only the chosen category', async ({ page }) => {
    await page.locator('label[for="wf-hedges"]').click();
    const visible = await page
      .locator('.tile')
      .evaluateAll((els) =>
        els.filter((e) => (e as HTMLElement).offsetParent).map((e) => e.getAttribute('data-cat')),
      );
    expect(visible.length).toBeGreaterThan(0);
    expect(new Set(visible)).toEqual(new Set(['hedges']));
  });

  test('mobile menu opens and its links close it', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Menu button is shown on small screens only');
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.locator('#mobile-menu');
    await expect(menu).toBeVisible();
    await menu.getByRole('link', { name: 'Areas' }).click();
    await expect(menu).toBeHidden();
  });

  test('every image has descriptive alt text or is marked decorative', async ({ page }) => {
    const missing = await page.locator('img:not([alt])').count();
    expect(missing).toBe(0);
    const content = await page.locator('main img[alt=""]').count();
    expect(content).toBe(0);
  });

  test('one h1, and no heading levels skipped', async ({ page }) => {
    const levels = await page
      .locator('main :is(h1,h2,h3,h4,h5,h6)')
      .evaluateAll((els) => els.map((e) => Number(e.tagName[1])));
    expect(levels.filter((l) => l === 1)).toHaveLength(1);
    for (let i = 1; i < levels.length; i++)
      expect(levels[i]! - levels[i - 1]!).toBeLessThanOrEqual(1);
  });
});

test('the WhatsApp button opens a chat with the pre-filled enquiry', async ({ page }) => {
  for (const path of ['/', '/tree-removal']) {
    await page.goto(path);
    // Located directly: it may be stepped aside (hidden) over a call button.
    const wa = page.locator('a.wa-button');
    await expect(wa).toHaveAttribute('aria-label', /chat with us on whatsapp/i);
    await expect(wa).toHaveCount(1);
    const href = new URL((await wa.getAttribute('href'))!);
    expect(href.origin + href.pathname).toBe('https://wa.me/353871199816');
    expect(href.searchParams.get('text')).toBe(
      "Hi Cawley's, I'd like to enquire about some tree work and request a free quotation.",
    );
  }
});

test('before/after slots show "photo to come" frames until photos are added', async ({ page }) => {
  // Previews (ALLOW_INDEXING unset) show empty slots; the launch build hides
  // incomplete pairs (checked by building with ALLOW_INDEXING=true).
  for (const [path, pairs] of [
    ['/landscaping', 4],
    ['/fencing', 4],
  ] as const) {
    await page.goto(path);
    await expect(page.locator('.svc-ba__pair')).toHaveCount(pairs);
    await expect(page.getByRole('img', { name: /photo to come/i })).toHaveCount(pairs * 2);
  }
});

test.describe('service pages', () => {
  test('every page has a unique title and description', async ({ page }) => {
    const titles = new Set<string>();
    const descriptions = new Set<string>();
    for (const path of [...SERVICE_PAGES, ...LOCATION_PAGES]) {
      await page.goto(path);
      const title = await page.title();
      const description = await page.locator('meta[name="description"]').getAttribute('content');
      expect(title.length, `${path} title`).toBeLessThanOrEqual(60);
      expect(description!.length, `${path} description`).toBeLessThanOrEqual(160);
      titles.add(title);
      descriptions.add(description!);
    }
    expect(titles.size).toBe(SERVICE_PAGES.length + LOCATION_PAGES.length);
    expect(descriptions.size).toBe(SERVICE_PAGES.length + LOCATION_PAGES.length);
  });

  test('each page is linked from the Services menu', async ({ page }) => {
    await page.goto('/');
    const links = await page
      .locator('.site-nav__sub a, .mobile-menu__sub a')
      .evaluateAll((els) => els.map((e) => e.getAttribute('href')));
    for (const path of SERVICE_PAGES) expect(links).toContain(path);
  });

  test('quote and call buttons work without leaving the page', async ({ page }) => {
    for (const path of SERVICE_PAGES) {
      await page.goto(path);
      await expect(page.locator('#quote-form form')).toHaveCount(1);
      const quotes = await page
        .getByRole('link', { name: /request a free quote/i })
        .evaluateAll((els) => els.map((e) => e.getAttribute('href')));
      for (const href of quotes) expect(href, path).toBe('#quote-form');
      const tels = await page
        .locator('a[href^="tel:"]')
        .evaluateAll((els) => els.map((e) => e.getAttribute('href')));
      expect(tels.length).toBeGreaterThanOrEqual(3);
      for (const href of tels) expect(href).toBe('tel:+353871199816');
    }
  });

  test('the quote form starts with the page’s service selected', async ({ page }) => {
    await page.goto('/hedge-cutting');
    await expect(page.locator('#quote-form').getByLabel('Type of work')).toHaveValue(
      'Hedge Cutting, Reduction & Removal',
    );
  });

  test('every internal link leads to a page that exists', async ({ page, request }) => {
    const seen = new Set<string>();
    for (const path of SERVICE_PAGES) {
      await page.goto(path);
      const hrefs = await page
        .locator('main a[href^="/"]')
        .evaluateAll((els) => els.map((e) => e.getAttribute('href')!.split('#')[0]!));
      for (const href of hrefs) {
        if (!href || seen.has(href)) continue;
        seen.add(href);
        expect((await request.get(href)).status(), `${path} → ${href}`).toBe(200);
      }
    }
  });

  test('structured data describes the service and its FAQs', async ({ page }) => {
    await page.goto('/tree-removal');
    const blocks = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(
      (b) => JSON.parse(b),
    );
    const types = blocks.map((b) => b['@type']);
    expect(types).toEqual(expect.arrayContaining(['Service', 'BreadcrumbList', 'FAQPage']));
    expect(JSON.stringify(blocks)).not.toMatch(/aggregateRating|"review"/);
  });
});

test('structured data lists the business and its services accurately', async ({ page }) => {
  await page.goto('/');
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
  const biz = blocks
    .map((b) => JSON.parse(b))
    .find((d) => d['@type'] === 'HomeAndConstructionBusiness');
  expect(biz.telephone).toBe('+353871199816');
  expect(biz.address.addressLocality).toBe('Athlone');
  expect(biz.hasOfferCatalog.itemListElement).toHaveLength(11);
  expect(JSON.stringify(blocks)).not.toMatch(/aggregateRating|"review"/);
});

test.describe('mobile conversion', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('call and quote are always one tap away on phones', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Phone layout only');
    // First screen: the hero's own buttons are visible.
    await expect(page.locator('.hero__ctas a[href^="tel:"]')).toBeInViewport();
    await expect(page.locator('.hero__ctas a[href="/#quote-form"]')).toBeInViewport();
    // Further down, the fixed bar takes over.
    await page.locator('#work').scrollIntoViewIfNeeded();
    const bar = page.getByRole('region', { name: 'Quick contact' });
    await expect(bar).toBeInViewport();
    await expect(bar.getByRole('link', { name: /call now/i })).toHaveAttribute(
      'href',
      'tel:+353871199816',
    );
    await expect(bar.getByRole('link', { name: /request a free quote/i })).toHaveAttribute(
      'href',
      '/#quote-form',
    );
  });

  test('the page follows the customer journey, and next steps sit beside the form', async ({
    page,
  }) => {
    const order = await page
      .locator('main > section[id]')
      .evaluateAll((els) => els.map((e) => e.id));
    const at = (id: string) => {
      expect(order).toContain(id);
      return order.indexOf(id);
    };
    // Services → urgent work → proof → trust → feedback → contact.
    expect(at('services')).toBeLessThan(at('emergency'));
    expect(at('emergency')).toBeLessThan(at('work'));
    expect(at('work')).toBeLessThan(at('about'));
    expect(at('about')).toBeLessThan(at('reviews'));
    expect(at('reviews')).toBeLessThan(at('enquiry'));
    expect(at('process')).toBe(at('enquiry') - 1);
  });

  test('no unfinished placeholders are shown in the contact area', async ({ page }) => {
    await expect(page.locator('#enquiry [data-placeholder]')).toHaveCount(0);
  });
});
