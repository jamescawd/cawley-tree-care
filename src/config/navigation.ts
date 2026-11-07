/**
 * Site navigation.
 *
 * Stage 1 has only the homepage, so each item links to its homepage section
 * (`anchor`). When a page is built, set `ready: true` and the item switches
 * to the page URL everywhere (header, mobile menu, footer).
 * Individual service links come from the service registry (config/services.ts).
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
  { label: 'Services', href: '/services', anchor: '/#services', ready: false },
  { label: 'Our Work', href: '/projects', anchor: '/#work', ready: false },
  { label: 'About', href: '/about', anchor: '/#about', ready: false },
  { label: 'Reviews', href: '/reviews', anchor: '/#reviews', ready: false },
  { label: 'Areas', href: '/areas', anchor: '/#areas', ready: false },
  { label: 'Contact', href: '/contact', anchor: '/#enquiry', ready: false },
];

export const navHref = (item: NavItem): string => (item.ready ? item.href : item.anchor);

/** Where every "Request a quote" button points. */
/** Quote buttons go straight to the form (the Contact link goes to the whole section). */
export const quoteHref = '/#quote-form';
