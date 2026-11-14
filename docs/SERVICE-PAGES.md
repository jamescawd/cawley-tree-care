# Service pages

Eight dedicated service pages are published, one per file in
`src/config/servicePages/`, all rendered by `src/layouts/ServicePageLayout.astro`
through the route `src/pages/[service].astro`.

| URL                        | Content file                 | Registry services covered         |
| -------------------------- | ---------------------------- | --------------------------------- |
| `/tree-surgery`            | `tree-surgery.ts`            | tree-surgery                      |
| `/tree-removal`            | `tree-removal.ts`            | tree-removal                      |
| `/tree-pruning`            | `tree-pruning.ts`            | crown-reduction, deadwood-removal |
| `/stump-grinding`          | `stump-grinding.ts`          | stump-grinding                    |
| `/emergency-tree-services` | `emergency-tree-services.ts` | emergency                         |
| `/hedge-cutting`           | `hedge-cutting.ts`           | hedge-cutting                     |
| `/site-clearance`          | `site-clearance.ts`          | garden-clearance, wood-chipping   |
| `/landscaping`             | `landscaping.ts`             | landscaping                       |

## Page structure (same order on every page)

A hero (H1, intro, photo, quote + call buttons, trust strip) → B introduction
and "when people call us" → C work we undertake → D why Cawley's (shared
points, page-specific opening line) → E photos → F how it works → G areas
(map + counties, reused from the homepage) → H FAQs + related services →
I final call to action → quote form with the service pre-selected.

Every quote button on a service page targets that page's own form
(`#quote-form`). Structured data: `Service`, `BreadcrumbList`, `FAQPage`.

## Editing a page

Edit its file in `src/config/servicePages/`. To swap a photo, change the
import at the top and update its `alt` and `caption`. Captions describe the
kind of work shown, never a named client or location.

## Adding a page

1. Create `src/config/servicePages/<slug>.ts` (copy an existing one).
2. Add it to the list in `src/config/servicePages/index.ts` (menu order).
3. In `src/config/services.ts`, point the relevant services' `path` at
   `/<slug>` with `page: true`.
4. Add the path to `SERVICE_PAGES` in `tests/foundation.spec.ts`.
5. Run `pnpm verify`.

## Quality bar (Google people-first content)

Only publish a page when it says something specific and useful: what the
work involves, when it is needed, how Cawley's approaches it, real photos of
that service, and genuine FAQs. Never claim equipment, qualifications,
response times or guarantees that the owner has not confirmed. Legal and
planning answers point people to their county council; they never promise
that permission is not needed.

## Location pages

The same rule applies. Do not generate a page per town. A location page is
only worth adding when it has genuinely local content, such as real jobs
completed in that area.

## Before/after photo slots (Landscaping and Fencing)

`beforeAfter.pairs` in a page's content file lists before/after pairs.
Each side (`before`, `after`) is a slot: leave `src` out until the owner's
photo arrives. Previews (ALLOW_INDEXING unset) show empty slots as
"Photo to come" frames; the launched site shows only complete pairs, and
hides the whole photo section if a page has nothing to show.

To fill a slot: put the photo in `src/assets/images/work/` with a
descriptive file name, import it at the top of the content file, set
`src` and `alt` (what the photo shows), and update the pair's `title` and
optional `summary` to describe the real job. Remove pairs that won't be used.
