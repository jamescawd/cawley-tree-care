# Pat Premier Roofing and Building: website

Premium, conversion-focused website for **Pat Premier Roofing and Building**
(087 365 4209 · pcandson84@outlook.ie), covering all of Leinster, all of
Munster and the Midlands. Tagline: *Built on Trust, Covered in Quality.*

All photos and videos are Pat Premier's own work. Social: TikTok
@premier.roofing.b and Facebook.

**Status:** complete build, **not deployed**. Search indexing is off
(`noindex`, `robots.txt: Disallow`) until launch is approved. The quote form is
**not yet connected** to an email service (see `docs/FORMS.md`).

## Stack

| Concern   | Choice                                                              |
| --------- | ------------------------------------------------------------------- |
| Framework | Astro 7, static output                                              |
| Language  | TypeScript (strictest)                                              |
| Styling   | Tailwind CSS 4 + design tokens (`src/styles/global.css`)           |
| Fonts     | Archivo (display) + Instrument Sans (body), self-hosted             |
| Content   | Typed data files + a Markdown content collection for projects       |
| Forms     | Cloudflare Worker (`worker/index.ts`) → Resend email, once set up   |
| Quality   | `astro check`, Playwright + axe (WCAG 2.2 AA) at 360px and 1440px    |

## Commands

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static site in dist/
pnpm verify     # type check + build + all tests
```

## Site map

| Section       | URL(s)                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------ |
| Home          | `/`                                                                                        |
| Roofing       | `/roofing`, `/roofing/roof-repairs`, `/roofing/roof-restoration`, `/roofing/new-roofs-and-re-roofing`, `/roofing/flat-roofing`, `/roofing/fascias-soffits-and-guttering` |
| Building      | `/building`, `/building/extensions`, `/building/property-renovations`, `/building/general-building-work` |
| Interiors     | `/interiors`, `/interiors/media-walls`, `/interiors/flooring`, `/interiors/knock-throughs`   |
| Quote         | `/quote` (all services; every “Request a Quote” button links here)                        |
| Projects      | `/projects`, `/projects/{slug}`                                                            |
| Areas         | `/areas`, `/roofing-contractors-leinster`, `/roofing-contractors-munster`, `/roofing-contractors-midlands`, `/building-contractors-leinster`, `/building-contractors-munster`, `/areas/{county}` (only when published) |
| Company       | `/about`, `/contact` (quote form at `/contact#quote`), `/privacy`                          |
| Utility       | `/enquiry-sent`, `/enquiry-error`, `/404` (noindex)                                        |

## Where things live

```
src/config/business.ts     confirmed business facts (single source of truth)
src/data/services.ts       the 8 service pages: copy, FAQs, layout choices
src/data/regions.ts        regional landing pages + county page framework
src/data/media.ts          image registry (demo images flagged)
src/data/reviews.ts        genuine reviews only (empty for now)
src/content/projects/      one Markdown file per project
src/components/            layout/, home/, service/, sections/, ui/, seo/
worker/index.ts            quote form handler (Cloudflare)
tests/site.spec.ts         accessibility, SEO and responsive tests
docs/                      content still needed, forms, credits
```

## Common updates

**Add or swap a photo.** Put it in `src/assets/work/` (around 1600px, no
location data), then add or change a key in `src/data/media.ts` with a factual
`alt`. Every page using that key updates.

**Add a video.** Put a compressed `.mp4` and a `.webp` poster with the same name
in `public/video/`, then list it in `src/data/videos.ts` or set `video:` on a project.

**Add a project.** Copy `src/content/projects/_template.md.example` to
`src/content/projects/<name>.md`, add photos under `src/assets/projects/<name>/`
(before / during / after), fill in the frontmatter and description.
Set `featured: true` to show it on the homepage. Projects with both before and
after photos from the same viewpoint can set `compare: true` to get the
drag-to-compare slider.

**Add a review.** Add it word for word to `src/data/reviews.ts`. The homepage
switches from "coming soon" to a review grid automatically.

**Publish a county page.** In `src/data/regions.ts`, give the county a real
`intro` and `notes` (local projects, local building types) and set
`published: true`. Do not publish counties without genuinely local content.

**Fill a pending detail.** Set it in `src/config/business.ts` (e.g. `established`,
`credentials`, `social`, `reviewLink`) and remove it from `docs/CONTENT-NEEDED.md`.

## Deployment (when approved)

Designed for Cloudflare Workers with static assets (`wrangler.jsonc`), like the
existing Cawley's site. Set `SITE_URL` to the real domain and `ALLOW_INDEXING=true`
only on the approved production deployment. Nothing has been deployed.
