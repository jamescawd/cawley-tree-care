/**
 * Site navigation.
 *
 * Stage 1 has only the homepage, so each item links to its homepage section
 * (`anchor`). When a page is built, set `ready: true` and the item switches
 * to the page URL everywhere (header, mobile menu, footer).
 * Tree care is listed first to reflect the business positioning.
 */
export interface NavItem {
  label: string;
  /** Future page URL. */
  href: string;
  /** Homepage section used until the page exists. */
  anchor: string;
  ready: boolean;
  /** Only shown when this collection has published entries (or in previews). */
  requires?: 'projects';
}

export const primaryNav: NavItem[] = [
  { label: 'Tree Care', href: '/tree-care', anchor: '/#tree-care', ready: false },
  { label: 'Landscaping', href: '/landscaping', anchor: '/#landscaping', ready: false },
  { label: 'Our Work', href: '/projects', anchor: '/#work', ready: false, requires: 'projects' },
  { label: 'About', href: '/about', anchor: '/#about', ready: false },
  { label: 'Areas', href: '/areas', anchor: '/#areas', ready: false },
  { label: 'Contact', href: '/contact', anchor: '/#enquiry', ready: false },
];

export const navHref = (item: NavItem): string => (item.ready ? item.href : item.anchor);

/** Where every "Request a quote" button points. */
export const quoteHref = '/#enquiry';
