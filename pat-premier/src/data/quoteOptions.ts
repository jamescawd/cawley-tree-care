import type { ServiceSlug } from './services';

/**
 * Everything a customer can ask a quote for. `service` links an option to a
 * service page so links like /quote?service=Flat%20Roofing preselect it.
 * Add new work here and it appears in every quote form.
 */
export interface QuoteOption {
  label: string;
  /** Service page this option belongs to (for preselection). */
  service?: ServiceSlug;
  /** Name used in ?service= links from that page. */
  serviceName?: string;
}

export const quoteOptions: { group: string; options: QuoteOption[] }[] = [
  {
    group: 'Roofing',
    options: [
      { label: 'Roof repairs (leaks, slipped slates or tiles, storm damage)', service: 'roof-repairs', serviceName: 'Roof Repairs' },
      { label: 'Roof restoration', service: 'roof-restoration', serviceName: 'Roof Restoration' },
      { label: 'New roof or re-roof', service: 'new-roofs-and-re-roofing', serviceName: 'New Roofs and Re-Roofing' },
      { label: 'Slate roofing' },
      { label: 'Tiled roofing' },
      { label: 'Flat roofing (GRP)', service: 'flat-roofing', serviceName: 'Flat Roofing' },
      { label: 'Fascias, soffits and guttering', service: 'fascias-soffits-and-guttering', serviceName: 'Fascias, Soffits and Guttering' },
      { label: 'Chimney and lead flashing' },
      { label: 'Metal roof sheeting' },
    ],
  },
  {
    group: 'Building',
    options: [
      { label: 'Extension', service: 'extensions', serviceName: 'Extensions' },
      { label: 'Property renovation', service: 'property-renovations', serviceName: 'Property Renovations' },
      { label: 'General building work', service: 'general-building-work', serviceName: 'General Building Work' },
      { label: 'Foundations' },
      { label: 'Concrete floors, yards and paths' },
      { label: 'Driveway or patio base' },
      { label: 'Block laying and walls' },
      { label: 'Plastering' },
    ],
  },
  {
    group: 'Interiors',
    options: [
      { label: 'Media wall', service: 'media-walls', serviceName: 'Media Walls' },
      { label: 'Hardwood flooring', service: 'flooring', serviceName: 'Hardwood & Laminate Flooring' },
      { label: 'Laminate flooring' },
      { label: 'Knock-through / wall removal', service: 'knock-throughs', serviceName: 'Knock-Throughs & Open-Plan Living' },
    ],
  },
];

export const timescales = ['As soon as possible', 'Within 1–3 months', 'In 3 months or more', 'Just getting prices'];
export const propertyTypes = ['Home', 'Business / commercial', 'Other'];
