/**
 * Planned information architecture. Routes listed here are NOT built yet;
 * `ready: false` items are hidden from navigation until their page exists.
 * Tree care is listed first to reflect the business positioning.
 */
export interface NavItem {
  label: string;
  href: string;
  ready: boolean;
  children?: NavItem[];
}

export const primaryNav: NavItem[] = [
  { label: 'Tree Care', href: '/tree-care', ready: false },
  { label: 'Landscaping', href: '/landscaping', ready: false },
  { label: 'Projects', href: '/projects', ready: false },
  { label: 'Areas We Cover', href: '/areas', ready: false },
  { label: 'About', href: '/about', ready: false },
  { label: 'Contact', href: '/contact', ready: false },
];

export const visibleNav = (items: NavItem[] = primaryNav): NavItem[] =>
  items.filter((item) => item.ready);
