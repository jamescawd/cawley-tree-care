/**
 * Service registry: the single source of truth for every service Cawley's
 * offers (confirmed by the business, Nov 2026). Drives the homepage service
 * chapters, the quote form, the footer, navigation and structured data.
 *
 * Stump grinding was added in Nov 2026, confirmed by the owner.
 *
 * SERVICE PAGES
 * Each service points at its dedicated page (`path`). Pages are built from
 * src/config/servicePages/ by src/pages/[service].astro. Several services
 * can share one page (e.g. crown reduction and deadwood under /tree-pruning).
 * `page: true` sends links to the homepage section instead.
 */

export type ServiceGroup = 'tree-care' | 'garden';

export interface Service {
  id: string;
  name: string;
  group: ServiceGroup;
  /** URL of its dedicated page. */
  path: string;
  /** True once the dedicated page is published. */
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
    page: true,
    summary: 'Pruning and remedial work to keep trees healthy, safe and well shaped.',
  },
  {
    id: 'crown-reduction',
    name: 'Crown Reduction & Tree Maintenance',
    group: 'tree-care',
    path: '/tree-pruning',
    page: true,
    summary: 'Reducing the height and spread of a tree and keeping it in good order over time.',
  },
  {
    id: 'deadwood-removal',
    name: 'Deadwood Removal',
    group: 'tree-care',
    path: '/tree-pruning',
    page: true,
    summary: 'Removing dead, dying and broken branches before they fall.',
  },
  {
    id: 'tree-removal',
    name: 'Tree Removal & Felling',
    group: 'tree-care',
    path: '/tree-removal',
    page: true,
    summary:
      'Felling trees where there is room and dismantling them in sections where there is not.',
  },
  {
    id: 'stump-grinding',
    name: 'Stump Grinding & Stump Removal',
    group: 'tree-care',
    path: '/stump-grinding',
    page: true,
    summary: 'Grinding out or removing tree stumps so the ground can be used again.',
  },
  {
    id: 'emergency',
    name: 'Emergency & Storm-Damaged Tree Work',
    group: 'tree-care',
    path: '/emergency-tree-services',
    page: true,
    summary: 'Making fallen, split and dangerous trees safe after storms.',
  },
  {
    id: 'hedge-cutting',
    name: 'Hedge Cutting, Reduction & Removal',
    group: 'garden',
    path: '/hedge-cutting',
    page: true,
    summary: 'Trimming, reducing and removing hedges of all sizes.',
  },
  {
    id: 'garden-clearance',
    name: 'Garden & Site Clearance',
    group: 'garden',
    path: '/site-clearance',
    page: true,
    summary: 'Clearing overgrown gardens, plots and sites back to a usable state.',
  },
  {
    id: 'wood-chipping',
    name: 'Wood Chipping & Green Waste Removal',
    group: 'garden',
    path: '/site-clearance',
    page: true,
    summary: 'Chipping branches and brash on site and taking green waste away.',
  },
  {
    id: 'landscaping',
    name: 'Landscaping & Garden Improvements',
    group: 'garden',
    path: '/landscaping',
    page: true,
    summary: 'Planting, lawns, paving, fencing and improvements to the wider garden.',
  },
  {
    id: 'fencing',
    name: 'Fencing',
    group: 'garden',
    path: '/fencing',
    page: true,
    summary: 'New boundary fencing and replacement of old or damaged fencing.',
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
