# Project handover: Cawley's Tree Care & Landscaping website

Last updated: 6 November 2026, at commit `4a21fde` on `main`.

This document records the actual state of the project so work can continue
in a new conversation without rebuilding or damaging anything. Where this
file and the code disagree, **the code is the truth**: check the files named
here.

Related docs: `CLAUDE.md` (rules for AI assistants), `README.md` (setup),
`docs/ARCHITECTURE.md`, `docs/DESIGN-SYSTEM.md`, `docs/CONTENT-CHECKLIST.md`,
`docs/SERVICE-PAGES.md`.

---

## 1. Business and website

| Item         | Value                                                                  | Status                                                                                              |
| ------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Trading name | Cawley's Tree Care & Landscaping (short: Cawley's)                     | Confirmed                                                                                           |
| Domain       | **cawleytreecare.ie**, registered with Blacknight                      | Registered; nameservers **not yet** pointed at Cloudflare (Blacknight .ie registration was pending) |
| Test address | https://cawley-tree-care.pages.dev (check exact address in Cloudflare) | Live, rebuilt on every push to `main`                                                               |
| Positioning  | Tree care and tree surgery first, landscaping secondary                | Confirmed                                                                                           |
| Base         | Athlone, Co. Westmeath                                                 | Confirmed                                                                                           |
| Experience   | Over 15 years in business (no founding year claimed)                   | Confirmed                                                                                           |
| Insurance    | Fully insured (no insurer, cover type or amount stated)                | Confirmed                                                                                           |

The site is **hidden from Google** until launch (see section 12, "Indexing switch").

---

## 2. Repository and structure

- GitHub: **https://github.com/jamescawd/cawley-tree-care** (private), branch `main`.
- Hosting: Cloudflare (Workers with static assets), connected to the GitHub repo.
  Every push to `main` triggers a build and deployment.
- Cloudflare build settings: build command `pnpm build`, deploy command
  `npx wrangler deploy`, root directory blank, environment variable
  `SITE_URL=https://cawleytreecare.ie`. `ALLOW_INDEXING` is deliberately **not** set.

### Stack (exact versions in `package.json` / `pnpm-lock.yaml`)

- Astro 7.4.5, static output (`dist/`), TypeScript ~6.0.3 (strictest).
- pnpm 10.28.0, Node 22.23.4 (`.node-version`).
- Fonts: `@fontsource-variable/fraunces` 5.3.0, `@fontsource-variable/inter` 5.3.0 (self-hosted).
- `@astrojs/sitemap` 3.7.4.
- Dev: ESLint 10 (+ astro + jsx-a11y), Prettier 3, `@astrojs/check`, Playwright 1.63 + axe.
- `@emnapi/runtime@1.11.3` is pinned as a dev dependency: a workaround so
  `astro check` runs (see `docs/ARCHITECTURE.md`). Do not remove it.
- About 2 KB of client JavaScript in total. No frameworks, no analytics, no cookies.

### Folder map

```
astro.config.mjs        site URL, fonts (Fraunces/Inter), env schema, sitemap filter, image defaults
wrangler.jsonc          Cloudflare: worker/index.ts + static ./dist, /api/* goes to the worker
worker/index.ts         Quote form handler (POST /api/quote → email via Resend)
public/                 _headers (security/caching/noindex previews), favicons, icons,
                        og-image.jpg (social share), site.webmanifest
scripts/
  placeholders.mjs, report-placeholders.mjs, placeholder-report-integration.mjs
                        "launch blocker" system (see section 12)
  brand/                logo variant + icon/share-image generators (Python, Pillow+NumPy)
  maps/                 builds src/data/ireland-map.json from public boundary data
  photos/               blurs signage + tones the work photos
src/
  config/
    business.ts         ALL business facts (name, phone, email, address, about text, links)
    services.ts         SERVICE REGISTRY: the nine services + reserved future URLs
    homeServices.ts     the six homepage service "chapters" (copy + photo per chapter)
    gallery.ts          portfolio items (photos, captions, categories, tile sizes)
    areas.ts            five counties + 34 towns
    media.ts            hero + About photos register
    navigation.ts       menu items (link to homepage sections until pages exist)
    site.ts             lang en-IE, indexing switch, preview-content switch
  content.config.ts     content collection schemas
  content/testimonials/ one YAML file per review
  content/{services,projects,guides}/_template.*   templates only (no entries yet)
  data/ireland-map.json generated map paths + town coordinates
  components/
    home/               one component per homepage section
    layout/             SiteHeader, SiteFooter, MobileActionBar, MessagePage
    sections/           AreaGrid, AreaMap, EnquiryForm, WorkGallery
    seo/                SEO (meta tags), JsonLd
    ui/                 Button, SectionHeader, PhotoFrame, Pending, Wordmark, PhoneLink, …
  layouts/              BaseLayout (<head>, fonts, SEO, JSON-LD), PageLayout (+header/footer/bar),
                        ServicePageLayout (template for future service pages, unused yet)
  lib/                  placeholder.ts, schema.ts (JSON-LD builders), seo.ts, navigation.ts
  pages/                index, privacy, quote-sent, quote-error, 404, styleguide, robots.txt.ts
  styles/               tokens.css (design tokens), base, layout, forms, utilities, reset, global
  assets/brand/         logo-original.webp (as supplied) + derived transparent PNGs
  assets/images/work/   30 genuine job photos (descriptive filenames)
tests/
  foundation.spec.ts    accessibility, SEO, layout, links, form, mobile, structured data
  worker.spec.ts        quote handler unit tests
docs/                   architecture, design system, content checklist, service-page guide
.github/workflows/ci.yml  runs format, lint, type check, build, tests, placeholder report
```

---

## 3. Design, branding, colours, typography

Direction: premium, established, editorial; dark charcoal with ivory and
orange; photography does most of the work. Not a template look.

### Colours (`src/styles/tokens.css`)

| Token                        | Hex                                               | Use                                                       |
| ---------------------------- | ------------------------------------------------- | --------------------------------------------------------- |
| `--orange-500`               | `#F58216`                                         | **Brand orange**: accents, primary buttons on dark, focus |
| `--orange-400` / `-600`      | `#FF9433` / `#E5730A`                             | hover / pressed                                           |
| `--charcoal-900`             | `#171717`                                         | **Brand charcoal**: main dark surface, text on light      |
| `--charcoal-800/700/600`     | `#242322` `#2B2928` `#3A3734`                     | raised surfaces, borders                                  |
| `--charcoal-300/400`         | `#B3ACA1` `#8F887D`                               | secondary/muted text on dark                              |
| `--ivory-100`                | `#F2EEE6`                                         | **Brand ivory**: light surface, text on dark              |
| `--ivory-50/200/300/600/700` | `#F8F6F1` `#E6E0D5` `#D9D2C6` `#6B655C` `#5C574F` | light-side neutrals                                       |

**Contrast rule:** orange on ivory is 2.2:1, so it is **never** used for text or
essential UI on light backgrounds. Orange on charcoal (6.9:1) is fine.
Components use semantic tokens and surface classes `surface-light`,
`surface-dark`, `surface-accent` (orange); never raw hex in components.

### Typography

- **Fraunces** (variable, self-hosted) for display, h1–h3 and large figures.
  It replaced Instrument Serif, which the owner found hard to read.
- **Inter** (variable) for everything else: body, navigation, buttons, forms, labels.
- Signature device: one italic orange word in serif headings (`<em>`).
- Fluid type scale 360px → 1440px (e.g. body 16→18px, h1 44→76px, display 52→100px).

### Logo

- Supplied as `src/assets/brand/logo-original.webp` (raster, black background).
- Transparent versions derived: `logo-horizontal.png` (header, menu) and
  `logo-stacked.png` (footer); `logo-tree.png` for icons.
- Use only via the `Wordmark` component. The logo is ivory/orange, so use it on
  **dark surfaces only**.
- A vector (SVG/PDF) version has been requested from the designer for print/vans.

### Motion

CSS-only: hero image settle + headline rise, scroll-reveal (`.reveal`),
reading-progress line under the header, photo hover zoom, town marquee. All
disabled for `prefers-reduced-motion`. Scroll-timeline CSS must be in a
separate, more specific rule (minifier bug, see `docs/ARCHITECTURE.md`).

---

## 4. Homepage: completed sections (in order, `src/pages/index.astro`)

1. **Header** (`SiteHeader`): sticky, logo, menu (Services, Our Work, About,
   Reviews, Areas, Contact), phone, "Request a free quote". Under 1200px:
   logo + Menu (full-screen Popover menu). Orange reading-progress line.
2. **Hero** (`HomeHero`): genuine photo `storm-fallen-beech-chainsaw-clearance.jpg`,
   headline **"Specialist tree care, rooted in experience."**, supporting line
   naming services + five counties, buttons "Request a free quote" and
   "Call 087 119 9816", trust points (Over 15 Years of Experience · Fully
   Insured · Based in Athlone, Co. Westmeath).
3. **Trust band** (`HomeTrust`): 15+ Years in Business / Fully Insured /
   Professional & Reliable, with the owner's own descriptions and orange line icons.
4. **Services** (`HomeServices`, data in `config/homeServices.ts`): six
   alternating photo chapters + an "All services" index of all nine.
5. **Customer reviews** (`HomeTestimonials`): genuine reviews, column layout,
   five-star graphics; phones show 4 + "Read more reviews"; quote + call buttons.
6. **Featured work** (`HomeWork` + `WorkGallery`, data in `config/gallery.ts`):
   mosaic of 13 genuine jobs, before/during/after pairs, CSS-only filters
   (Tree surgery, Tree removal, Storm clearance, Hedges, Clearance & landscaping).
7. **Why choose Cawley's** (`HomeWhy`, orange): 15+ and Insured figures, five principles.
8. **About** (`HomeAbout`): real text from `business.about`, facts list, crew photo.
9. **Town marquee** (decorative, hidden from screen readers).
10. **Areas we serve** (`HomeAreas`): SVG map (five counties, 34 towns, each
    links to Google Maps, Athlone marked as base) + county/town index.
11. **What happens next** (`HomeProcess`): 01 Get in touch, 02 Receive your
    quotation, 03 Professional workmanship (timeline), directly above the form.
12. **Quote enquiry** (`HomeEnquiry` + `EnquiryForm`): large orange call card,
    reassurance copy, form (see section 8).
13. **Footer** (`SiteFooter`): stacked logo, credentials, Services (all nine),
    Explore (Home, menu items, Request a free quote), Areas, Contact, Privacy.
14. **Mobile action bar** (`MobileActionBar`, under 1200px): "Request a free
    quote" + "Call now"; slides away while the form is on screen.

Photos are never repeated across hero, chapters, About and gallery.

---

## 5. Services

### Offered (registry: `src/config/services.ts`)

| id               | Name                                | Reserved URL             | Homepage chapter                |
| ---------------- | ----------------------------------- | ------------------------ | ------------------------------- |
| tree-surgery     | Tree Surgery & Pruning              | /tree-surgery            | 01 Tree surgery                 |
| crown-reduction  | Crown Reduction & Tree Maintenance  | /crown-reduction         | 01                              |
| deadwood-removal | Deadwood Removal                    | /tree-surgery            | 01                              |
| tree-removal     | Tree Removal & Felling              | /tree-removal            | 02 Tree removal                 |
| emergency        | Emergency & Storm-Damaged Tree Work | /emergency-tree-services | 03 Emergency (link dials phone) |
| hedge-cutting    | Hedge Cutting, Reduction & Removal  | /hedge-cutting           | 04 Hedges                       |
| garden-clearance | Garden & Site Clearance             | /garden-clearance        | 05 Clearance                    |
| wood-chipping    | Wood Chipping & Green Waste Removal | /wood-chipping           | 05                              |
| landscaping      | Landscaping & Garden Improvements   | /landscaping             | 06 Landscaping                  |

Landscaping details (earlier confirmed list): garden design & planting,
lawns & turfing, patios & paving, fencing, garden maintenance, garden clearance.

### NOT offered

- **Stump grinding.** Removed everywhere (copy, form, data). A test fails if
  the word "stump" appears on `/` or `/privacy`. Do not add it back.
- No 24/7 emergency promise, response times or guarantees have been stated.

---

## 6. SEO

### Done

- Homepage title: `Cawley's Tree Care & Landscaping | Tree Surgeons, Athlone` (57 chars).
- Meta description: "Tree surgery, tree removal, hedge cutting, storm damage, garden
  clearance and landscaping in Westmeath, Roscommon, Longford, Offaly and
  Galway. Fully insured." (≤160).
- One `<h1>`, no skipped heading levels (tested). `lang="en-IE"`.
- Canonical URLs without `.html` or trailing slash; Open Graph + Twitter tags;
  share image `public/og-image.jpg` (logo over the hero photo).
- Structured data (`src/lib/schema.ts`): `WebSite` + `HomeAndConstructionBusiness`
  (name, url, telephone, address locality/region/country, areaServed = five
  counties containing their towns, logo, image, knowsAbout, OfferCatalog of
  the nine services). **No** ratings, review counts or invented details.
  Placeholder values are stripped automatically. schema.org has no
  "TreeService" type, so it is not used. `Service`, `BreadcrumbList` and
  `FAQPage` builders are ready for service pages.
- Sitemap (`/sitemap-index.xml`) excludes styleguide, quote-sent, quote-error, 404.
- `robots.txt` (`src/pages/robots.txt.ts`): blocks everything while indexing is
  off; when on, disallows `/styleguide`, `/api/`, `/quote-sent`, `/quote-error`.
- Photos have descriptive filenames and specific alt text; responsive AVIF/WebP;
  the hero is preloaded, the rest lazy-load. Self-hosted fonts with size-matched fallbacks.
- `*.pages.dev` previews send `X-Robots-Tag: noindex` (`public/_headers`).

### Remaining

- Point the domain at Cloudflare, confirm `SITE_URL`, then set `ALLOW_INDEXING=true` at launch.
- Create/claim the **Google Business Profile** with identical name, phone,
  service area; add its URL to `business.links.googleBusinessProfile`.
- Submit the sitemap in Google Search Console after launch.
- Write genuine, specific service pages (section 7); later, location pages
  only where there is genuinely local content (e.g. real jobs in that town).
- Optional: business description placeholder (used in schema), street address/Eircode/geo.

---

## 7. Pages

### Existing

| Path                                | File                                                          | Indexed?           |
| ----------------------------------- | ------------------------------------------------------------- | ------------------ |
| `/`                                 | `src/pages/index.astro`                                       | Yes (after launch) |
| `/privacy`                          | `src/pages/privacy.astro` (drafted, needs owner review)       | Yes                |
| `/quote-sent`                       | `src/pages/quote-sent.astro`                                  | noindex            |
| `/quote-error`                      | `src/pages/quote-error.astro` (shows phone number)            | noindex            |
| `/404`                              | `src/pages/404.astro` (Cloudflare serves it for missing URLs) | noindex            |
| `/styleguide`                       | internal design-system reference                              | noindex            |
| `/robots.txt`, `/sitemap-index.xml` | generated                                                     | n/a                |

### Planned (reserved, NOT built; do not create thin pages)

`/tree-surgery`, `/tree-removal`, `/crown-reduction`, `/emergency-tree-services`,
`/hedge-cutting`, `/garden-clearance`, `/wood-chipping`, `/landscaping`.
How to add one: `docs/SERVICE-PAGES.md` (uses `ServicePageLayout`, then set
`page: true` in `services.ts`; links switch over automatically). Navigation
items also have reserved paths (`/services`, `/projects`, `/about`,
`/reviews`, `/areas`, `/contact`) with `ready: false`.

---

## 8. Contact details and business information (`src/config/business.ts`)

| Field                                               | Value                                                                                               | Status                                                                                                                                                     |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phone                                               | `+353871199816`, shown as **087 119 9816**                                                          | Confirmed; used in header, hero, bar, footer, form area, schema                                                                                            |
| Email                                               | **Unconfirmed.** Owner suggested info@qualitytreecare.com or .ie; neither matches cawleytreecare.ie | Placeholder; hidden from customers                                                                                                                         |
| Town / county                                       | Athlone, Co. Westmeath                                                                              | Confirmed                                                                                                                                                  |
| Street address, Eircode, map coordinates            | not supplied                                                                                        | Placeholders                                                                                                                                               |
| Opening hours                                       | not supplied                                                                                        | Placeholder, hidden. **Not caught by the launch check** (written as `placeholder<string[]>(`); fix the regex in `scripts/placeholders.mjs` or supply hours |
| Registered (legal) name, tagline, short description | not supplied                                                                                        | Placeholders                                                                                                                                               |
| Google Business Profile, Facebook, Instagram        | not supplied                                                                                        | Placeholders                                                                                                                                               |
| Privacy notice                                      | `/privacy`                                                                                          | Drafted; owner review pending                                                                                                                              |

Service area (`src/config/areas.ts`, confirmed, complete):

- **Westmeath:** Mullingar, Athlone, Moate, Kinnegad, Castlepollard, Kilbeggan, Rochfortbridge
- **Roscommon:** Roscommon Town, Boyle, Castlerea, Ballaghaderreen, Strokestown, Elphin
- **Longford:** Longford Town, Edgeworthstown, Granard, Ballymahon, Lanesborough
- **Offaly:** Tullamore, Birr, Edenderry, Clara, Kilcormac, Banagher, Ferbane
- **Galway:** Galway City, Tuam, Ballinasloe, Loughrea, Athenry, Oranmore, Gort, Portumna, Clifden

### Quote form and handler

- Form (`src/components/sections/EnquiryForm.astro`): name*, phone*, email
  (optional), town* (grouped by county + "elsewhere"), type of work* (the nine
  services + "Not sure yet"), description (optional), up to 3 photos (optional),
  honeypot, hidden `started` timestamp. Posts `multipart/form-data` to `/api/quote`.
- Handler (`worker/index.ts`): validates; spam = honeypot filled or under 3 s
  (silently accepted, not emailed); sends via **Resend** API with photos
  attached (≤5 MB each, ≤12 MB total); redirects to `/quote-sent` **only**
  when Resend accepts, otherwise `/quote-error`.
- **Not yet delivering**: needs `RESEND_API_KEY` (secret), `ENQUIRY_TO`,
  `ENQUIRY_FROM` set in Cloudflare → Workers & Pages → cawley-tree-care →
  Settings, and a domain verified at resend.com. Until then every submission
  goes to `/quote-error`.

---

## 9. Customer reviews

- Ten reviews supplied by the owner (Nov 2026), who confirmed they were
  **texted directly by customers for use on the website**. Recorded as
  `reviewsConfirmed: true` in `business.ts`. Owner advised to keep the original texts.
- Stored one per file in `src/content/testimonials/NN-name.yaml` (fields:
  name, optional location, quote, source `direct`, rating 5, verified, order).
- Displayed: Seán Murphy (Athlone), Anna Kowalska (Roscommon), Patrick Kelly
  (Boyle), Tomas Petrauskas, Andrei Popescu (Roscommon), Michael O'Connor,
  Ewa Nowak (Boyle), Darius Jankauskas, Ciara Doyle (Roscommon).
- **Hidden:** `_hidden-05-darragh-walsh.yaml` (mentions stump grinding, which
  is not offered). Files starting with `_` are not displayed. Owner decision pending.
- No Google badges, review counts or rating structured data (deliberate).
- To add one: copy `_template.yaml`; to remove: delete the file; order by the
  number prefix / `order` field.

---

## 10. Outstanding problems and unfinished work

**Blocking launch** (the production build fails until resolved; run
`pnpm placeholders` to see the live list):

1. Confirm the **enquiry email address** (domain mismatch above).
2. Configure **Resend + three Cloudflare settings** so the form delivers.
3. Owner to **review the privacy notice** at `/privacy`.
4. Registered business name, tagline, short description.
5. Street address + Eircode + coordinates, or decide to show town only (then remove those placeholders).
6. Google Business Profile, Facebook, Instagram URLs (or remove if not used).
7. Point **cawleytreecare.ie** nameservers (Blacknight) to Cloudflare, add the custom domain.

**Other open items**

- Opening hours not supplied (and not caught by the launch check, see section 8).
- Darragh Walsh review: keep hidden, or edit with the customer's permission.
- No genuine stump-free photo exists for every service; stump grinding has no
  photo (not needed now that it is not offered).
- Vector logo requested from the designer.
- Claude.ai preview link (private artifact) is not updated for the latest
  conversion changes; Cloudflare is the up-to-date version.
- Some homepage copy (service descriptions, Why principles, About) was
  written by the assistant from confirmed facts; owner to proofread.

---

## 11. Future improvements discussed

- Dedicated service pages (section 7) with unique copy, FAQs and real photos.
- Location pages only with genuinely local content; no doorway pages.
- Google Business Profile, then a "Read our reviews on Google" button
  (appears automatically once the URL is set).
- Business email (Cloudflare Email Routing for free forwarding, or Google
  Workspace / Microsoft 365 for a full mailbox on cawleytreecare.ie).
- More genuine photography: team/owner portrait, finished landscaping,
  before/after pairs with locations, if the owner is happy to share them.
- Cookie-free analytics (Cloudflare Web Analytics or Plausible EU) if wanted.
- Cloudflare Turnstile for stronger spam protection if spam appears.
- Content-Security-Policy header once third-party needs are known.

---

## 12. Technical instructions for continuing safely

### Golden rules

- **Never invent business facts** (qualifications, insurance details, reviews,
  ratings, addresses, hours, projects, guarantees). Use `placeholder('…')`
  from `src/lib/placeholder.ts` for anything unconfirmed.
- **Never re-add stump grinding.**
- Edit data, not markup: services → `config/services.ts` / `homeServices.ts`;
  facts → `config/business.ts`; gallery → `config/gallery.ts`; areas →
  `config/areas.ts`; reviews → `content/testimonials/`.
- Keep the design tokens and surface classes; no raw hex in components;
  orange never as text on ivory; logo only on dark surfaces.
- Do not delete the `_hidden-…` review, `logo-original.webp` or the
  `@emnapi/runtime` dev dependency.
- Do not force-push or reset `main`. Work on `main` with normal commits (or a
  branch + PR). Every push to `main` deploys.

### Commands

```bash
pnpm install          # first time
pnpm dev              # http://localhost:4321
pnpm verify           # format check, lint, type check, build, all tests (must pass before committing)
pnpm placeholders     # list unconfirmed business details
pnpm format           # auto-format
```

Tests run against the production build (`astro preview --ignore-lock` on port 4322) on phone 360px, tablet 820px and desktop 1440px. Currently **161 pass,
16 skipped** (skips are tests that run on one screen size only).

### Launch-blocker system

- Every `placeholder('label')` in `src/` is reported after each build.
- With `ALLOW_INDEXING=true` the build **fails** if any placeholder remains
  or `SITE_URL` is missing, so an unfinished site cannot go live.
- Preview builds (`ALLOW_INDEXING` unset) show placeholders, add `noindex`
  to every page and serve `Disallow: /` in robots.txt.

### Indexing switch (launch)

In Cloudflare build variables: `SITE_URL=https://cawleytreecare.ie` (set) and,
**only at launch**, `ALLOW_INDEXING=true`.

### Adding things

- New page: use `PageLayout` (or `ServicePageLayout`), unique `title` and
  `description`, exactly one `<h1>`, add the path to `PAGES` in `tests/foundation.spec.ts`.
- New photo: put it in `src/assets/images/work/` with a descriptive filename,
  reference it from config, render through `astro:assets` (`Picture`/`Image`).
  Use only genuine photos for work/gallery; any stock/AI image must be
  `illustrative: true` in `config/media.ts` (shows an "Illustrative image" note).
- New service page: follow `docs/SERVICE-PAGES.md`.

### Known gotchas

- The CSS minifier folds `animation-timeline` into the `animation`
  shorthand; keep timelines in a separate, more specific rule.
- Astro 7 `astro preview` runs in the background by default; use `--ignore-lock`
  when running it in the foreground (tests do this).
- Photo blur/tone script originally used raw names (`storm-1.jpg` …); outputs
  were renamed descriptively. Map names before re-running it.
- The map data is generated (`scripts/maps/README.md`); the script fails if a
  town falls outside its county.
