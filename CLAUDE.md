# Project rules: Cawley's Tree Care & Landscaping website

## Non-negotiables

- **Never invent business facts**: qualifications, insurance, years in business,
  reviews/testimonials, contact details, prices, team members, completed projects,
  locations served. Use `placeholder('…')` from `src/lib/placeholder.ts`.
- Positioning: **tree care / tree surgery first**, landscaping secondary.
- Bespoke premium design: no generic template patterns or stock "tree service" tropes.
- Irish English spelling and conventions (`en-IE`): colour, centre, organise, Co. Kildare, Eircode.

## Design system

- Fonts: **Instrument Serif** for display/h1–h3/large figures only (single weight:
  never bold it); **Inter** for everything else (h4–h6, body, nav, buttons, forms).
- Colours: use semantic tokens (`--color-*`) and surface classes
  (`surface-light|dark|accent`), never raw hex in components.
- **Orange is never text or essential UI on ivory** (2.2:1). On charcoal it is fine.
- Mobile-first; fluid tokens from `src/styles/tokens.css`. No horizontal scroll at 360px.

## Engineering

- Static output; ship zero client JS unless a feature needs it.
- Images go in `src/assets/` and render through `astro:assets` `<Image>`/`<Picture>`.
- Every new page: uses `BaseLayout` with a unique `description`, has one `<h1>`,
  and is added to `PAGES` in `tests/foundation.spec.ts`.
- Run `pnpm verify` before committing.
