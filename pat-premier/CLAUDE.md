# Project rules: Pat Premier Roofing and Building website

This folder is a self-contained site. It is separate from the Cawley's Tree Care
site in the repository root; that site's rules do not apply here, and vice versa.

## Non-negotiables

- **Never invent business facts**: years in business, qualifications, insurance,
  guarantees, reviews, prices, team members, addresses, completed projects.
  Confirmed facts live only in `src/config/business.ts`; anything else stays
  `null` and shows a `<Pending>` marker. Keep `docs/CONTENT-NEEDED.md` current.
- All photos are Pat Premier’s own job photos. Describe only what a photo shows;
  never invent a project location or detail. Any stock placeholder must be `demo: true`.
- Do not claim the quote form works until the email service is configured
  and a live test submission has been received (see `docs/FORMS.md`).
- Irish English (`en-IE`): colour, centre, organise, Co. Kildare, Eircode.
- Do not publish to a live domain or enable indexing without the owner’s approval.

## Brand & design system

- Colours: navy, royal blue, white only (tokens in `src/styles/global.css`).
  No orange, gold or other brand colours. No raw hex in components.
- Logo: `src/components/ui/Logo.astro` (`on="light"` / `on="dark"`), vector-traced
  from the supplied artwork. Replace `public/brand/*.svg` if a master vector is supplied.
- Type: Archivo (semi-expanded) for display headings; Instrument Sans for everything else.
- Photos are portrait (phone): prefer 4:5 frames; avoid wide crops.
- Look: white-led, editorial, large photography, 1px rules, square-ish corners,
  restrained motion (respect `prefers-reduced-motion`).
- Component `<style>` blocks are unlayered and beat Tailwind utilities: never
  set `display` in a scoped style on an element whose visibility a utility controls.

## Engineering

- Astro 7 + TypeScript (strictest) + Tailwind 4. Static output; minimal client JS.
- Images go in `src/assets/` and render through `Photo.astro` / `astro:assets`.
- Every new page: `BaseLayout` with a unique `description`, exactly one `<h1>`,
  and an entry in `PAGES` in `tests/site.spec.ts`.
- Run `pnpm verify` (check + build + Playwright/axe tests) before committing.
