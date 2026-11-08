# HANDOVER: Cawley's Tree Care & Landscaping website

Written 8 November 2026 to move work into a new Claude Code session. **Read this
first, then `CLAUDE.md`.** `PROJECT-HANDOVER.md` is an older handover; where it
disagrees with this file, trust this file, and trust the code over both.

State at the time of writing: `main` is at **`c65e3a7`** (merge of PR #12). The
working branch `ccr-2aca2675-o4qyai` is at `310872d`, the same content as `main`
apart from the merge commit. **Nothing is uncommitted except this file**, which
has not been committed or pushed.

---

## 1. The project in one paragraph

A static marketing website for **Cawley's Tree Care & Landscaping**, a tree
surgery business (tree care first, landscaping second) **based in Athlone,
Co. Westmeath**, serving **Westmeath, Roscommon, Longford, Offaly and Galway**.
The goal is a premium, trustworthy site that turns local Google searches and
Google Ads visitors into **phone calls, WhatsApp messages and quote requests**,
and competes locally, for example with _Midlands Tree Surgeons_
(midlandstreesurgeons.ie). Built with Astro 7, Irish English (`en-IE`),
deployed on **Cloudflare Pages**.

- Repository: https://github.com/jamescawd/cawley-tree-care (private). Live
  site: https://cawley-tree-care.pages.dev (builds from `main`).
- Domain **cawleytreecare.ie**: bought at Blacknight on 6 Nov 2026. **Status:
  "Pending"** (.ie registry checking documents, which the owner has supplied).
  Not connected to Cloudflare yet.
- Owner: James Cawley. Temporary enquiry inbox: **jamescawley2022@gmail.com**.
  This address **must never appear publicly** on the site.

---

## 2. How the owner wants us to work (follow exactly)

1. **Never push to GitHub without the owner's explicit permission**, such as
   "push and merge" or "push it", given **for that change**. Permission does not
   carry over to the next change.
   - A "Stop hook" message saying _"There are N unpushed commit(s)…"_ appears
     after most turns. It is **not** permission. Reply briefly that you're
     waiting for permission, and mention which commits are new (one of the N is
     usually just the last merge commit from `main`).
2. **The workflow the owner expects when they say "push and merge":**
   1. Push the branch: `git push -u origin ccr-2aca2675-o4qyai`. Use a plain
      push only; force-push is blocked by the permission classifier.
   2. Open a PR to `main` with `mcp__github__create_pull_request`.
   3. `subscribe_pr_activity` for the PR, and schedule a `send_later` safety
      check after about 8–10 minutes. GitHub's "checks finished" event often
      arrives late.
   4. When **both** checks are green (`verify`, the GitHub Actions run of
      `pnpm verify`, and `Cloudflare Pages`), merge with
      `mcp__github__merge_pull_request`, `merge_method: merge`, and
      `expectedHeadSha` set to the **full 40-character SHA**.
   5. Then `unsubscribe_pr_activity`, `delete_trigger` the safety check, and tell
      the owner it's merged and live in a few minutes.
3. **Before the next change after a merge:** `git fetch origin main && git
checkout -B ccr-2aca2675-o4qyai origin/main`. A merged PR is finished and is
   never reused.
4. **Run `pnpm verify` before every commit.** Last result: **328 passed, 20
   skipped**. Commit messages end with the attribution lines the session gives
   you.
5. **Ask before** changing the form backend, rebuilding anything or redesigning
   anything. The owner said "Do not redesign", "Do not change the established
   branding", "Keep the existing customer journey" and "Avoid unnecessary
   changes", repeatedly.
6. **Never claim something was tested unless it actually was.** This session
   cannot reach `*.pages.dev`, the custom domain or most outside sites (see
   section 9), so live checks need the owner.
7. The owner writes informally on a phone. Keep replies plain and practical,
   give exact click-paths for Cloudflare, Blacknight and Resend, and give links.

### Content rules (from CLAUDE.md and the owner)

- **Never invent business facts**: qualifications, reviews, prices, projects,
  addresses, response times, guarantees or equipment ownership. Use
  `placeholder()` from `src/lib/placeholder.ts` for anything unconfirmed.
- **Do not claim** Cawley's owns or routinely uses **cranes or tracked
  machinery**. Access platforms and cranes are described as "arranged when a job
  needs it". The genuine photos that show them stay.
- **Emergencies:** "customers can **call** 24/7". Never promise 24/7 attendance
  or any response time.
- **Testimonials are genuine** customer texts. Never edit, rewrite or delete
  them.
- Planning and legal FAQ answers point to the county council; never say
  permission isn't needed. The Wildlife Acts' 1 March to 31 August hedge-cutting
  restriction is mentioned carefully.
- Orange is never used as text or essential UI on ivory (contrast 2.2:1). The
  logo appears only on dark backgrounds, via the `Wordmark` component. No raw hex
  colours in components; colours are tokens in `src/styles/tokens.css`. The
  WhatsApp colours are tokens too.
- Fonts: Fraunces for display and h1–h3, Inter for everything else. No new
  fonts.
- Mobile-first; no horizontal scroll at 360px.
- **Do not create location pages per town** (doorway pages). Add a county or
  town page only when there are genuine local jobs and photos.

---

## 3. Confirmed business facts (in `src/config/business.ts`)

| Fact                           | Value                                                                                                                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Trading name / registered name | Cawley's Tree Care & Landscaping (registered under the trading name)                                                                                                            |
| Tagline                        | "Expert Tree Care. Quality You Can Trust." (structured data `slogan` only; not shown on pages)                                                                                  |
| Phone                          | +353 87 119 9816, shown as **087 119 9816**                                                                                                                                     |
| WhatsApp                       | Same number: `353871199816`. Pre-filled message: "Hi Cawley's, I'd like to enquire about some tree work and request a free quotation."                                          |
| Location                       | Town only: "Based in Athlone, Co. Westmeath \| Serving surrounding counties" (footer). No street address, Eircode or geo, by the owner's choice.                                |
| Hours                          | Mon–Sat 8am–6pm (`Mo-Sa 08:00-18:00`); "Emergencies: call us 24/7"                                                                                                              |
| Experience / insurance         | "Over 15 years" (never a founding year); "Fully insured" (no insurer details)                                                                                                   |
| Customers                      | Domestic **and commercial** (confirmed through the owner's GBP description)                                                                                                     |
| Description                    | The owner's Google Business Profile text, verbatim (used in structured data)                                                                                                    |
| Google Business Profile        | https://maps.app.goo.gl/R4FtkTmv1xhLis16A. **0 reviews** so far, so the button reads "Find us on Google"; set `googleHasReviews: true` once there are some.                     |
| Facebook                       | https://www.facebook.com/share/1CZ7hHgcMq/ (a share link; a canonical facebook.com/pagename URL would be better if the owner supplies one)                                      |
| Instagram                      | None (removed)                                                                                                                                                                  |
| Privacy notice                 | `/privacy`, approved by the owner                                                                                                                                               |
| Stump grinding                 | **Now offered** (re-added 7 Nov 2026 after earlier removal)                                                                                                                     |
| Service area                   | 5 counties, **74 towns and villages** in `src/config/areas.ts` (34 original + 40 added). **Ballygar is listed under Galway** (the owner confirmed). All 74 are dots on the map. |

**Remaining launch placeholder (1):** the public enquiry email (`contact.email`).
Wait until the domain is live, then use something like info@cawleytreecare.ie,
forwarded to the Gmail with Cloudflare Email Routing. Do **not** show the Gmail.

---

## 4. What exists (verified in the repository)

**Pages (14 built):**

- `/`
- 8 service pages: `/tree-surgery`, `/tree-removal`, `/tree-pruning`,
  `/stump-grinding`, `/emergency-tree-services`, `/hedge-cutting`,
  `/site-clearance`, `/landscaping`
- `/privacy`, `/quote-sent`, `/quote-error`, `/404`
- `/styleguide` (internal, noindex)
- Generated: `/robots.txt` and `/sitemap-index.xml`

**Homepage order:**

1. Hero
2. Trust band
3. Services (5 chapters with "More about…" links)
4. Emergency section
5. Featured work gallery (13 jobs, filters, before/after descriptions)
6. Equipment & methods (`HomeCapability`)
7. About
8. Why choose us
9. Reviews (9 shown, phone shows 4 plus "Read more")
10. Town marquee
11. Areas (map + 74 towns)
12. Process
13. Quote form
14. Footer

**Service pages:**

- Data in `src/config/servicePages/<slug>.ts` (`types.ts` for the shape), menu
  order in `index.ts`.
- Design in `src/layouts/ServicePageLayout.astro`; route `src/pages/[service].astro`.
- Section order: hero (split photo; Emergency has Call as the primary button) →
  intro and "when people call us" → work items (optional `href` links) → Why
  (orange) → photos → process → areas (reuses `HomeAreas`) → 6 FAQs plus related
  services → orange CTA → quote form (service pre-selected).
- Structured data: Service (with `serviceType`), BreadcrumbList
  (Home / Services / page) and FAQPage.
- Each page has its own link-preview image: its hero photo cropped to 1.91:1, up
  to 1200×630, never enlarged.
- Quote buttons on service pages target the page's own `#quote-form`.
- Stand-in photos: **stump grinding and landscaping have no genuine photos of
  that work**; they use related photos with honest captions.

**Navigation:**

- Desktop: a Services dropdown (CSS hover and focus-within, no JS) listing all 8
  pages.
- Phone: a popover menu with the service list.
- Fixed bottom "Request a free quote / Call now" bar below 1200px. It hides while
  the hero buttons or the form are on screen.
- WhatsApp button (`src/components/layout/WhatsAppButton.astro`): bottom-right,
  above the phone bar under 1200px. It hides when a call link, quote button,
  `.call-card`, the form or the footer is underneath it (a rAF scroll check).

**Quote form, working end to end:**

- `EnquiryForm.astro` posts `multipart/form-data` to `/api/quote`.
- On **Cloudflare Pages** (not Workers) that runs through
  **`functions/api/quote.ts`**, which calls the original handler
  **`worker/index.ts`**: validation, honeypot plus a 3-second minimum fill time,
  up to 3 photos, sending via the **Resend** API.
- Success goes to `/quote-sent`; any failure, including Resend being unreachable,
  goes to `/quote-error`, which shows the phone number.
- `functions/api/quote.ts` defaults (server-side only):
  `ENQUIRY_TO=jamescawley2022@gmail.com`,
  `ENQUIRY_FROM="Cawley's Website <onboarding@resend.dev>"`. Cloudflare variables
  override them.
- The **`RESEND_API_KEY` secret is set by the owner** in Cloudflare Pages →
  Settings → Variables and Secrets (Production). The owner **confirmed a test
  enquiry arrived** on 7 Nov 2026 (it needed a fix first: see section 7).
- Resend's test sender only delivers to the Resend account owner's own email,
  and that account uses the Gmail.
- `wrangler.jsonc` is an old Workers-style config that Pages ignores. Left as is.

**Key files:**

- `src/config/business.ts`: business facts
- `src/config/services.ts`: registry of 10 services and their page paths
- `src/config/areas.ts`: towns
- `src/data/ireland-map.json`: map, generated by
  `scripts/maps/build-ireland-map.py` (towns plus coordinates in `TOWNS`)
- `src/config/gallery.ts`, `homeServices.ts`, `media.ts`
- `src/lib/schema.ts`: structured data
- `src/components/home/*`, `src/components/layout/*`
  (`SiteHeader`, `SiteFooter`, `MobileActionBar`, `WhatsAppButton`)
- `tests/foundation.spec.ts`: accessibility, SEO, layout, links and form;
  `SERVICE_PAGES` and `PAGES` lists
- `tests/worker.spec.ts`: form handler and Pages Function unit tests
- `docs/SERVICE-PAGES.md`, `PROJECT-HANDOVER.md`, `CLAUDE.md`

**Launch switch:**

- With `ALLOW_INDEXING` unset, every page is `noindex` and robots.txt says
  `Disallow: /`.
- A build with `ALLOW_INDEXING=true` **fails while any placeholder remains**;
  there is currently 1, the email.
- `SITE_URL=https://cawleytreecare.ie` is set in Cloudflare (per the old handover).

---

## 5. Commands

```bash
pnpm install
pnpm verify          # format check, lint, astro check, build, Playwright (≈2 min). Must pass.
pnpm format          # fix formatting (CI fails on unformatted files, including .md)
pnpm placeholders    # list unconfirmed business details
pnpm build && pnpm astro preview --ignore-lock --port 4322    # local static preview
npx -y wrangler@4 pages dev dist --port 8788 --binding RESEND_API_KEY=re_dummy
                     # runs the Pages Function locally; Resend unreachable here,
                     # so a valid POST lands on /quote-error. That's expected.
SITE_URL=https://cawleytreecare.ie pnpm build    # check canonicals and sitemap use the domain
python3 -I scripts/maps/build-ireland-map.py <counties.geojson> <countries-10m.json> src/data/ireland-map.json
                     # inputs: click_that_hood ireland-counties.geojson (GitHub raw)
                     # and world-atlas@2.0.2 countries-10m.json (npm pack); the
                     # output for the existing towns was verified identical
```

---

## 6. Completed this session (merged to `main`; PR numbers on GitHub)

- **#1:** homepage review. Emergency section, equipment section, gallery
  descriptions, journey order, phone hero, mobile bar logic.
- **#2:** quote buttons jump to the form (`#quote-form`).
- **#3:** 8 service pages, Services menu, stump grinding re-added, duplicate
  form ID fixed.
- **#4:** coverage, FAQ and conversion improvements on all service pages; the
  crane photo was removed from the Emergency page.
- **#5, #6:** 40 new towns; map regenerated with 74 dots; Ballygar moved to
  Galway.
- **#7:** hours, 24/7 emergency calling, equipment wording softened.
- **#8:** Google Business Profile link and "Find us on Google" button.
- **#9:** Pages Function connecting the form; business name, tagline, location
  line, privacy approval, description, Facebook link.
- **#10:** **Send button fix.** `Button.astro` rendered a duplicate `type`
  attribute, so Send never submitted.
- **#11:** WhatsApp button; quote form marked confirmed; Instagram removed.
- **#12:** faster homepage hero (AVIF quality 40, largest size 1180px, logo
  quality 80; throttled-phone lab LCP **3.2 s → 2.55 s**), per-page share
  images, breadcrumb and `serviceType` structured data.

Also verified in this session, but not on the live site:

- A full button and link check of all 13 public pages at phone and desktop
  sizes, under `wrangler pages dev`: 1,034 internal links fine; menu, dropdown,
  filters, FAQs and "read more" all work; nothing is covered.

---

## 7. Known problems, risks and unverified items

- **UNVERIFIED (this session can't reach the live site):** whether PR #12 has
  deployed. The owner did confirm earlier merges reached the live site, and
  confirmed the form works.
- **UNVERIFIED:** the GBP and Facebook share links open the right profiles (the
  owner should tap them); the WhatsApp button on a real phone; how link previews
  actually look on WhatsApp and Facebook.
- **Lab LCP of 2.55 s** is just over the 2.5 s target on harsh throttling.
  Further gains would mean visibly harsher photo compression; not pursued.
- **Resend uses the test sender.** Spam-folder delivery is possible. Once the
  domain is live: verify cawleytreecare.ie in Resend, then set Cloudflare
  variables `ENQUIRY_FROM` (e.g. "Cawley's Website <quotes@cawleytreecare.ie>")
  and `ENQUIRY_TO` (the business inbox), then **retry the deployment**.
  Cloudflare applies variable and secret changes only to new deployments.
- **Darragh Walsh's review is hidden**
  (`src/content/testimonials/_hidden-05-darragh-walsh.yaml`) because it mentions
  stump grinding, which is now offered. It's the owner's decision whether to show
  it; never edit its text.
- `PROJECT-HANDOVER.md` has some outdated sections (Workers vs Pages, an old
  homepage order and placeholder counts). Low priority to tidy.
- `/styleguide` has no WhatsApp button or footer link (internal page; fine).
- The claude-seo toolkit was installed only in this session's temporary machine
  (`~/.claude/skills/seo`), and its Chromium download was blocked. The SEO audit
  report files were in a temporary scratchpad and **will not carry over**. The
  findings are summarised in section 8.

---

## 8. SEO audit summary (7 Nov 2026, local build of `main`; score 78/100 before later fixes)

- **Fixed since the audit:** GBP linked (`sameAs`); description, tagline and
  legal name added; quote form working; homepage LCP improved; per-page share
  images; breadcrumb and serviceType structured data; 11 of 12 placeholders
  cleared.
- **Still open, owner actions:**
  - Domain, then connect to Cloudflare, then switch on indexing and set up
    Search Console.
  - Google reviews (they send the GBP review link to customers).
  - Directory listings with identical name and phone: Golden Pages,
    onlinetradesmen.ie, Bark.
  - Real stump grinding and landscaping photos.
  - Optional owner name, bio or photo for trust.
- **Still open, code, once the domain is live:**
  - Redirect `cawley-tree-care.pages.dev` to `cawleytreecare.ie`.
  - Re-run the audit on the live domain, including the agent-readiness check.
  - Optional: `llms.txt`, sitemap `<lastmod>`.
- **Competitor (Midlands Tree Surgeons):** they use templated per-town pages,
  some showing a visible "{towns(town)}" placeholder bug; their public contact
  is a Gmail address; they advertise "tree topping"; they don't cover Roscommon.
  Advice given: do **not** copy their page-per-town approach. Add a few genuine
  local pages later (Mullingar, Tullamore, Roscommon) built around real jobs.
- No FAQ rich results are expected (Google limits them for commercial sites).
  The FAQ markup is kept for machine and AI understanding. "TreeService" isn't a
  schema.org type; the site uses `HomeAndConstructionBusiness`.

---

## 9. Environment limits of the cloud session

- **The network blocks `*.pages.dev`, cawleytreecare.ie, midlandstreesurgeons.ie
  and resend.com.** An attempt to create a "cawley-tree-care" environment
  allowing them failed: the owner's mobile app is too old to show the approval
  prompt. It needs a newer app, or the session opened at claude.ai on a computer.
- `npx wrangler@4` and npm packages work, and so do GitHub MCP tools and
  WebSearch.
- Playwright and Chromium are preinstalled, so `require('playwright')` works.

---

## 10. Exactly where we stopped

The last completed task was **PR #12**: the audit items 8–10 (hero speed,
per-page share images, structured-data tidy-up). It's merged and nothing is
pending. The next steps depend on the owner, starting with the domain going
active at Blacknight.

### Prioritised roadmap

1. **Domain** (waiting on the .ie registry; the owner will say when it's
   active). Then guide them through:
   1. Cloudflare → Add a site → cawleytreecare.ie (Free plan).
   2. Blacknight: replace the nameservers with Cloudflare's two.
   3. Cloudflare Pages → cawley-tree-care → Custom domains: add
      `cawleytreecare.ie` and `www.cawleytreecare.ie`.

   Tell them not to buy SSL from Blacknight; Cloudflare provides it free.

2. **Code (needs permission):** redirect pages.dev to the domain. A
   `public/_redirects` or a Cloudflare Bulk Redirect; `*.pages.dev` already
   sends `X-Robots-Tag: noindex` from `public/_headers`.
3. **Business email:** Cloudflare Email Routing, info@cawleytreecare.ie
   forwarded to the Gmail. Then set `contact.email` in `business.ts` (clears the
   last placeholder) and switch Resend to the domain sender (section 7).
4. **Launch:** the owner adds `ALLOW_INDEXING=true` in Cloudflare Pages
   (Production) and retries the deployment. Then Google Search Console: verify
   the domain and submit `/sitemap-index.xml`. Then re-run the SEO audit on the
   live domain.
5. **Owner:** Google reviews, directory listings, real stump grinding and
   landscaping photos (swap into `src/config/servicePages/stump-grinding.ts` and
   `landscaping.ts`), a decision on Darragh Walsh's review, optionally a
   canonical Facebook URL.
6. **Later:** `googleHasReviews: true` once reviews exist; genuine location pages
   only with real local jobs; per-service photos as they arrive.
