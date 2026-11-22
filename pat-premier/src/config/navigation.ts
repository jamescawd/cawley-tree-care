import { buildingServices, roofingServices, serviceUrl } from '@/data/services';

export interface NavLink {
  label: string;
  href: string;
  summary?: string;
}
export interface NavItem extends NavLink {
  children?: NavLink[];
}

const toLinks = (list: typeof roofingServices): NavLink[] =>
  list.map((s) => ({ label: s.short, href: serviceUrl(s), summary: s.summary }));

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Roofing', href: '/roofing', children: toLinks(roofingServices) },
  { label: 'Building', href: '/building', children: toLinks(buildingServices) },
  { label: 'Our Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Areas We Cover', href: '/areas' },
  { label: 'Contact', href: '/contact' },
];

export const QUOTE_HREF = '/contact#quote';
