/**
 * Service registry: the single source of truth for every service Cawley's
 * offers (confirmed by the business, Nov 2026). Drives the homepage service
 * chapters, the quote form, the footer, navigation and structured data.
 *
 * Stump grinding is NOT offered and must not be added.
 *
 * FUTURE SERVICE PAGES
 * Each service has a reserved URL (`path`). Set `page: true` once its page
 * exists at src/pages/<path>.astro (built with ServicePageLayout); every
 * link on the site then switches from the homepage section to that page.
 * Do not publish thin or unfinished pages.
 */

export type ServiceGroup = 'tree-care' | 'garden';

export interface Service {
  id: string;
  name: string;
  group: ServiceGroup;
  /** Reserved URL for its future dedicated page. */
  path: string;
  /** Set true only once the dedicated page is published. */
  page: boolean;
  /** One plain sentence: what the service is. */
  summary: string;
}

export const services: Service[] = [
  {
    id: 'tree-surgery',
    name: 'Tree Surgery & Pruning',
    group: 'tree-care',
    path: '/tree-surgery',
    page: false,
    summary: 'Pruning and remedial work to keep trees healthy, safe and well shaped.',
  },
  {
    id: 'crown-reduction',
    name: 'Crown Reduction & Tree Maintenance',
    group: 'tree-care',
    path: '/crown-reduction',
    page: false,
    summary: 'Reducing the height and spread of a tree and keeping it in good order over time.',
  },
  {
    id: 'deadwood-removal',
    name: 'Deadwood Removal',
    group: 'tree-care',
    path: '/tree-surgery',
    page: false,
    summary: 'Removing dead, dying and broken branches before they fall.',
  },
  {
    id: 'tree-removal',
    name: 'Tree Removal & Felling',
    group: 'tree-care',
    path: '/tree-removal',
    page: false,
    summary:
      'Felling trees where there is room and dismantling them in sections where there is not.',
  },
  {
    id: 'emergency',
    name: 'Emergency & Storm-Damaged Tree Work',
    group: 'tree-care',
    path: '/emergency-tree-services',
    page: false,
    summary: 'Making fallen, split and dangerous trees safe after storms.',
  },
  {
    id: 'hedge-cutting',
    name: 'Hedge Cutting, Reduction & Removal',
    group: 'garden',
    path: '/hedge-cutting',
    page: false,
    summary: 'Trimming, reducing and removing hedges of all sizes.',
  },
  {
    id: 'garden-clearance',
    name: 'Garden & Site Clearance',
    group: 'garden',
    path: '/garden-clearance',
    page: false,
    summary: 'Clearing overgrown gardens, plots and sites back to a usable state.',
  },
  {
    id: 'wood-chipping',
    name: 'Wood Chipping & Green Waste Removal',
    group: 'garden',
    path: '/wood-chipping',
    page: false,
    summary: 'Chipping branches and brash on site and taking green waste away.',
  },
  {
    id: 'landscaping',
    name: 'Landscaping & Garden Improvements',
    group: 'garden',
    path: '/landscaping',
    page: false,
    summary: 'Planting, lawns, paving, fencing and improvements to the wider garden.',
  },
];

export const serviceById = (id: string): Service => {
  const s = services.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown service: ${id}`);
  return s;
};

/** Where a service link should point today. */
export const serviceHref = (s: Service, homeAnchor: string): string =>
  s.page ? s.path : homeAnchor;
