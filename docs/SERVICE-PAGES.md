# Adding a service page

Every service is listed once, in `src/config/services.ts`, with a reserved
URL (`path`). Nothing is published at those URLs until a page is written.

Reserved URLs: `/tree-surgery`, `/tree-removal`, `/crown-reduction`,
`/emergency-tree-services`, `/hedge-cutting`, `/garden-clearance`,
`/wood-chipping`, `/landscaping`.

## Steps

1. Create `src/pages/<path>.astro`, e.g. `src/pages/tree-surgery.astro`:

   ```astro
   ---
   import ServicePageLayout from '@/layouts/ServicePageLayout.astro';
   import { serviceById } from '@/config/services';
   import heroImg from '@/assets/images/work/arborist-cutting-trunk-section.jpg';
   ---

   <ServicePageLayout
     service={serviceById('tree-surgery')}
     seoTitle="Tree Surgery in Athlone & Westmeath | Cawley's"
     description="…unique, specific, 50–160 characters…"
     heading="Tree surgery & pruning"
     intro="…"
     image={{ src: heroImg, alt: '…what the photo shows…' }}
     faqs={[{ question: '…', answer: '…' }]}
   >
     <h2>…</h2>
     <p>…genuinely useful, specific content…</p>
   </ServicePageLayout>
   ```

2. In `src/config/services.ts`, set `page: true` for that service (and any
   other service sharing the same `path`). Homepage, footer and
   structured-data links switch to the new page automatically.
3. Add the path to `PAGES` in `tests/foundation.spec.ts`.
4. Run `pnpm verify`.

## Quality bar (Google people-first content)

Only publish a page when it says something specific and useful: what the
work involves, when it is needed, how Cawley's approaches it, real photos of
that service, and genuine FAQs. No thin pages, no copies of the homepage.

## Location pages

The same rule applies. Do not generate a page per town. A location page is
only worth adding when it has genuinely local content, such as real jobs
completed in that area.
