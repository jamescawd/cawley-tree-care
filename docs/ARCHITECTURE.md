# Architecture & decisions

Short records of each significant decision and the reason for it, so future
changes can be made deliberately.

## 1. Astro, static output

A tree-care business site is content: services, local areas, projects, guides.
Astro renders it to plain HTML at build time and ships no JavaScript unless a
component needs it ("islands"). Result: excellent Core Web Vitals, fully
crawlable HTML, cheap and secure hosting.
_Rejected:_ Next.js (ships a framework runtime for content pages; more to
maintain), WordPress (slower, plugin/security upkeep, pushes towards templates).

## 2. Hand-written CSS with tokens, not a CSS framework

A bespoke editorial design is clearer as deliberate CSS than utility classes.
Tokens (`src/styles/tokens.css`) are the single source of truth; components use
semantic tokens only, scoped per component. Cascade layers make global
precedence explicit.

## 3. Self-hosted fonts via the Astro Fonts API

Instrument Serif + Inter from pinned `@fontsource` packages. Astro copies the
files into the build, generates `@font-face`, size-adjusted fallbacks (less
layout shift) and preloads. No request to Google: avoids the EU GDPR issue
with remotely loaded Google Fonts and removes a third-party connection.
Inter uses the weight-only variable file (48 KB); the optical-size version
(73 KB) was not worth the extra weight at body sizes.

## 4. Typed placeholders for unconfirmed facts

`placeholder('…')` marks every missing business detail. They are typed (code
must handle them), stripped from structured data, listed after every build,
and **block a production build**. Nothing invented can reach the live site.

## 5. Indexing master switch

`ALLOW_INDEXING` (default `false`) controls the robots meta tag and
`robots.txt`. `*.pages.dev` previews also send `X-Robots-Tag: noindex`.
Prevents Google indexing an unfinished site or duplicate preview URLs.

## 6. Clean URLs

`build.format: 'file'` + `trailingSlash: 'never'` → `/tree-care` (no trailing
slash, no `.html`). Canonical URLs follow the same form.

## 7. Configuration over hard-coding

Business facts (`config/business.ts`), service areas (`config/areas.ts`) and
navigation (`config/navigation.ts`) are data. One change updates copy, footer,
contact links and JSON-LD together, keeping name/address/phone consistent with
the Google Business Profile.

## 8. Content collections

Services, projects, guides and testimonials are Markdown/YAML validated by
schemas (`src/content.config.ts`). Projects require `clientPermission: true`
and testimonials `verified: true`, so the schema itself refuses fabricated or
unapproved entries. Git-based, so a CMS (Keystatic / Decap) can be added later
without migrating content.

## 9. Location pages: data now, pages later

Six counties and their towns live in `config/areas.ts`. Future county/town
pages will be generated from it. They must each carry genuinely local
content (real projects, local tree considerations); thin "doorway" pages are
penalised by Google.

## 10. Quality gates

`pnpm verify` = Prettier, ESLint (+ jsx-a11y), `astro check`, build, Playwright.
Tests run against the production build on phone (360px), tablet and desktop:
axe WCAG 2.2 AA, no horizontal scroll, SEO metadata, fonts, no third-party
requests, skip link, noindex safeguards. CI runs the same on every push.

## 11. Preview vs production content

`site.showPreviewContent` (true whenever `ALLOW_INDEXING` is not `"true"`)
shows clearly labelled placeholder sections (review cards, gallery frames) so
designs can be judged in previews. In production, the reviews and gallery
sections render only genuine entries from their collections and disappear
otherwise; navigation drops "Our Work" until projects exist.

## Planned, not yet built

- Quote / contact form: Cloudflare Pages Function → email (e.g. Resend),
  Cloudflare Turnstile for spam. Adds `functions/`.
- Content-Security-Policy header, once third-party needs (forms, maps) are known.
- Cookie-free analytics (Cloudflare Web Analytics or Plausible EU).
- Default social share image, favicon set, web manifest (need the logo).

## Known workaround

`@emnapi/runtime@1.11.3` is a direct dev dependency so `astro check` resolves a
stable runtime instead of a pre-release one pulled in by rolldown (crash in
`@astrojs/astro2tsx`). Remove once upstream resolves it.

## Known workaround: scroll-driven animations and the CSS minifier

The build's CSS minifier folds `animation-timeline` into the `animation`
shorthand, which browsers reject, silently dropping the whole declaration.
Always set `animation-timeline` / `animation-range` in a **separate, more
specific rule** (see `.reveal` in `utilities.css` and `.scroll-progress` in
`SiteHeader.astro`), and confirm in `dist/` that the timeline survives.
