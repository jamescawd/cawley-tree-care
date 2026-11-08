# Town pages

Athlone (`/tree-surgeon-athlone`) is the master template. Its content lives in
`src/config/locationPages/athlone.ts` and its design in
`src/layouts/LocationPageLayout.astro`.

## Before adding another town

A town page is only worth having if it says something true and useful about
that town. Do **not** copy `athlone.ts` and change the name: that is a doorway
page, it reads badly to customers and search engines treat it as thin content.

Each new town needs, as a minimum:

- Genuine local proof: a real review from the town, or photos or a short
  write-up of real jobs there (supplied by the owner).
- Its own introduction, written for that town (e.g. how far it is from the
  Athlone base, which county council covers it).
- Its own advice section: questions that genuinely matter there.
- Nearby towns that are in `src/config/areas.ts` (the build fails otherwise).

## Adding one

1. Create `src/config/locationPages/<town>.ts` (shape: `types.ts`) and add it
   to `locationPages` in `index.ts`.
2. Create `src/pages/tree-surgeon-<town>.astro` like the Athlone page.
3. Add the path to `LOCATION_PAGES` in `tests/foundation.spec.ts`.
4. Run `pnpm verify`. The footer link and sitemap entry are automatic.
