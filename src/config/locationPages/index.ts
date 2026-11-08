import type { LocationPage } from './types';
import { athlone } from './athlone';

export type { LocationPage } from './types';

/** Town pages. Add one only when it has genuine local content (docs/LOCATION-PAGES.md). */
export const locationPages: LocationPage[] = [athlone];

export const locationPage = (slug: string): LocationPage => {
  const page = locationPages.find((p) => p.slug === slug);
  if (!page) throw new Error(`Unknown location page "${slug}"`);
  return page;
};
