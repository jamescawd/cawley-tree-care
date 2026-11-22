import type { MediaKey } from './media';
import type { LandingSlug, ServiceSlug } from './services';

/**
 * Location pages
 * --------------
 * Two levels, deliberately kept small and useful (no thin doorway pages):
 *
 * 1. Regional landing pages (`landingPages`): live now, each with content
 *    written for that region and that trade.
 * 2. County / town pages (`counties`): a ready framework. A county page is
 *    ONLY generated when `published: true` AND it has genuinely local content
 *    (`intro`, `notes`, ideally local projects). Until then the county is
 *    listed on the regional page and the Areas page without its own URL.
 *
 * To publish a county page: fill in `intro` and `notes` with real local
 * detail (projects completed there, local building types), set
 * `published: true`. The page appears at /areas/{slug} and in the sitemap.
 */
export type Province = 'Leinster' | 'Munster';

export interface County {
  slug: string;
  name: string;
  province: Province;
  midlands?: boolean;
  /** Towns to mention once there is local work to show (future town pages). */
  towns?: string[];
  published: boolean;
  intro?: string;
  notes?: string[];
}

export const counties: County[] = [
  // Leinster
  { slug: 'carlow', name: 'Carlow', province: 'Leinster', published: false },
  { slug: 'dublin', name: 'Dublin', province: 'Leinster', published: false },
  { slug: 'kildare', name: 'Kildare', province: 'Leinster', published: false },
  { slug: 'kilkenny', name: 'Kilkenny', province: 'Leinster', published: false },
  { slug: 'laois', name: 'Laois', province: 'Leinster', midlands: true, published: false },
  { slug: 'longford', name: 'Longford', province: 'Leinster', midlands: true, published: false },
  { slug: 'louth', name: 'Louth', province: 'Leinster', published: false },
  { slug: 'meath', name: 'Meath', province: 'Leinster', published: false },
  { slug: 'offaly', name: 'Offaly', province: 'Leinster', midlands: true, published: false },
  { slug: 'westmeath', name: 'Westmeath', province: 'Leinster', midlands: true, published: false },
  { slug: 'wexford', name: 'Wexford', province: 'Leinster', published: false },
  { slug: 'wicklow', name: 'Wicklow', province: 'Leinster', published: false },
  // Munster
  { slug: 'clare', name: 'Clare', province: 'Munster', published: false },
  { slug: 'cork', name: 'Cork', province: 'Munster', published: false },
  { slug: 'kerry', name: 'Kerry', province: 'Munster', published: false },
  { slug: 'limerick', name: 'Limerick', province: 'Munster', published: false },
  { slug: 'tipperary', name: 'Tipperary', province: 'Munster', published: false },
  { slug: 'waterford', name: 'Waterford', province: 'Munster', published: false },
];

export const leinsterCounties = counties.filter((c) => c.province === 'Leinster');
export const munsterCounties = counties.filter((c) => c.province === 'Munster');
export const midlandsCounties = counties.filter((c) => c.midlands);
export const publishedCounties = counties.filter((c) => c.published && c.intro);

export interface LandingPage {
  slug: LandingSlug;
  trade: 'roofing' | 'building';
  region: 'Leinster' | 'Munster' | 'the Midlands';
  /** Short label, e.g. "Roofing · Leinster". */
  label: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  image: MediaKey;
  secondaryImage: MediaKey;
  counties: County[];
  /** Region-specific context: the reason this page exists. */
  context: { heading: string; paragraphs: string[] };
  /** Considerations particular to this region and trade. */
  considerations: { title: string; text: string }[];
  services: ServiceSlug[];
  faqs: { q: string; a: string }[];
}

export const landingPages: LandingPage[] = [
  {
    slug: 'roofing-contractors-leinster',
    trade: 'roofing',
    region: 'Leinster',
    label: 'Roofing · Leinster',
    metaTitle: 'Roofing Contractors in Leinster | Pat Premier Roofing',
    metaDescription:
      'Roofing contractors covering all 12 counties of Leinster, from Dublin and Kildare to Wexford and Louth. Roof repairs, restoration, new roofs and flat roofs. Call 087 365 4209.',
    title: 'Roofing contractors covering all of Leinster',
    intro:
      'From the Dublin commuter belt to the Wexford coast, Pat Premier repairs, restores and replaces roofs on homes and commercial buildings in every county of Leinster.',
    image: 'tiledRoofBefore',
    secondaryImage: 'extensionFlatRoofFascia',
    counties: leinsterCounties,
    context: {
      heading: 'Roofing across Leinster',
      paragraphs: [
        'Leinster’s housing is hugely varied. Estates built in Dublin and the surrounding counties from the 1970s onwards are largely roofed in concrete tile, many now reaching the age where ridges, valleys and underlay need attention. Town centres from Kilkenny to Drogheda have older terraces and period homes roofed in natural slate, where careful repair matters more than speed.',
        'Along the east coast, in Wicklow, Wexford and Louth, roofs take wind and salt off the Irish Sea, which is hard on fixings, flashing and gutters. Inland, in Kildare, Meath, Carlow and the Midlands counties, the work is just as likely to be a bungalow, a farmhouse or a commercial unit.',
      ],
    },
    considerations: [
      { title: 'Ageing estate roofs', text: 'Concrete tile roofs from the 1970s to 1990s often need ridge, valley and underlay work.' },
      { title: 'Period slate roofs', text: 'Older town houses need slates matched and repaired with care.' },
      { title: 'Coastal exposure', text: 'East-coast wind and salt are hard on fixings, flashing and gutters.' },
      { title: 'Extensions', text: 'Flat and pitched roofs on extensions, tied in to the existing house.' },
    ],
    services: ['roof-repairs', 'roof-restoration', 'new-roofs-and-re-roofing', 'flat-roofing', 'fascias-soffits-and-guttering'],
    faqs: [
      {
        q: 'Do you cover Dublin?',
        a: 'Yes. We cover all of Leinster, including Dublin and every surrounding county.',
      },
      {
        q: 'Which Leinster counties do you cover?',
        a: 'All twelve: Carlow, Dublin, Kildare, Kilkenny, Laois, Longford, Louth, Meath, Offaly, Westmeath, Wexford and Wicklow.',
      },
      {
        q: 'Do you work on commercial roofs in Leinster?',
        a: 'Yes. We carry out roofing work on residential and commercial properties.',
      },
    ],
  },
  {
    slug: 'roofing-contractors-munster',
    trade: 'roofing',
    region: 'Munster',
    label: 'Roofing · Munster',
    metaTitle: 'Roofing Contractors in Munster | Pat Premier Roofing',
    metaDescription:
      'Roofing contractors covering Cork, Kerry, Clare, Limerick, Tipperary and Waterford. Storm damage, roof repairs, restoration, new roofs and flat roofs. Call 087 365 4209.',
    title: 'Roofing contractors covering all of Munster',
    intro:
      'Munster’s roofs face the full force of the Atlantic. Pat Premier repairs, restores and replaces roofs on homes and commercial buildings across Cork, Kerry, Clare, Limerick, Tipperary and Waterford.',
    image: 'flatRoofFinished',
    secondaryImage: 'rooferStrippingTiles',
    counties: munsterCounties,
    context: {
      heading: 'Roofing across Munster',
      paragraphs: [
        'In west Cork, Kerry and Clare, roofs take wind-driven rain off the Atlantic for much of the year. Storms test every fixing, verge and ridge, and water that would run off a sheltered roof is pushed sideways under slates and into flashing. Detailing and fixing matter as much as the covering itself.',
        'Further east, in Limerick, Tipperary and Waterford, and in and around Cork city, the work ranges from suburban homes and commercial premises to traditional farmhouses and older slate roofs that deserve to be repaired rather than replaced.',
      ],
    },
    considerations: [
      { title: 'Storm damage', text: 'Making roofs safe and weathertight after Atlantic storms, then repairing properly.' },
      { title: 'Wind-driven rain', text: 'Verges, ridges and flashing detailed for exposed sites.' },
      { title: 'Traditional farmhouses', text: 'Older slate roofs repaired and restored with care.' },
      { title: 'Towns and cities', text: 'Homes and commercial buildings from Cork to Limerick.' },
    ],
    services: ['roof-repairs', 'roof-restoration', 'new-roofs-and-re-roofing', 'flat-roofing', 'fascias-soffits-and-guttering'],
    faqs: [
      {
        q: 'Do you repair storm-damaged roofs in Munster?',
        a: 'Yes. Storm damage is one of the most common roofing jobs in the region. Call 087 365 4209.',
      },
      {
        q: 'Which Munster counties do you cover?',
        a: 'All six: Clare, Cork, Kerry, Limerick, Tipperary and Waterford.',
      },
      {
        q: 'Do you work on older slate roofs?',
        a: 'Yes. We repair, restore and replace slate and tile roofs.',
      },
    ],
  },
  {
    slug: 'roofing-contractors-midlands',
    trade: 'roofing',
    region: 'the Midlands',
    label: 'Roofing · Midlands',
    metaTitle: 'Roofing Contractors in the Midlands | Pat Premier Roofing',
    metaDescription:
      'Roofing contractors in the Midlands: Westmeath, Offaly, Laois and Longford. Roof repairs, restoration, new roofs, flat roofs and guttering. Free quotes on 087 365 4209.',
    title: 'Roofing contractors in the heart of the Midlands',
    intro:
      'Bungalows, farmhouses, town homes and commercial buildings: Pat Premier carries out roofing work across Westmeath, Offaly, Laois, Longford and the surrounding Midlands.',
    image: 'reroofMembraneChimney',
    secondaryImage: 'fasciaFitting',
    counties: midlandsCounties,
    context: {
      heading: 'Roofing across the Midlands',
      paragraphs: [
        'Much of the Midlands is rural, and its housing reflects that: detached bungalows and dormer bungalows with large roof areas, two-storey farmhouses and a great many farm and commercial buildings. Long roof spans and roof windows on dormer homes mean plenty of valleys, flashing and ridge work.',
        'Mature trees and damp, sheltered sites encourage moss and blocked gutters, so roofline work and clearing often go hand in hand with roof repairs. In towns such as Athlone, Mullingar, Tullamore, Portlaoise and Longford, the work is as likely to be a terrace or a shopfront as a family home.',
      ],
    },
    considerations: [
      { title: 'Bungalows and dormers', text: 'Large roof areas and roof windows with plenty of flashing to maintain.' },
      { title: 'Farmhouses', text: 'Older two-storey farmhouses repaired, restored or re-roofed.' },
      { title: 'Moss and gutters', text: 'Sheltered, tree-lined sites need regular roof and gutter care.' },
      { title: 'Town properties', text: 'Terraces, shops and commercial premises in Midlands towns.' },
    ],
    services: ['roof-repairs', 'roof-restoration', 'new-roofs-and-re-roofing', 'flat-roofing', 'fascias-soffits-and-guttering'],
    faqs: [
      {
        q: 'Which counties do you mean by the Midlands?',
        a: 'Westmeath, Offaly, Laois and Longford, and neighbouring areas. As we cover all of Leinster and Munster, nearby counties are covered too.',
      },
      {
        q: 'Do you repair dormer bungalow roofs?',
        a: 'Yes, including the flashing around dormers and roof windows, which is a common source of leaks.',
      },
    ],
  },
  {
    slug: 'building-contractors-leinster',
    trade: 'building',
    region: 'Leinster',
    label: 'Building · Leinster',
    metaTitle: 'Building Contractors in Leinster | Extensions & Renovations | Pat Premier',
    metaDescription:
      'Building contractors covering all of Leinster: extensions, renovations, block laying, plastering and general building work, with roofing under the same company. Call 087 365 4209.',
    title: 'Building contractors covering all of Leinster',
    intro:
      'Extensions, renovations and general building work across Dublin, the commuter counties and the rest of Leinster, with roofing handled by the same company.',
    image: 'extensionBlockwork',
    secondaryImage: 'knockThroughOpeningKitchen',
    counties: leinsterCounties,
    context: {
      heading: 'Building across Leinster',
      paragraphs: [
        'For many families in Dublin and the commuter counties of Kildare, Meath, Wicklow and Louth, extending makes more sense than moving. Estate homes built in recent decades are often ideal for a rear kitchen and living extension, while period homes in Leinster’s towns tend to need careful renovation as much as extra space.',
        'Because Pat Premier is a roofing and building company, the roof on your extension and the junction with the existing house are built by the same team that builds the walls.',
      ],
    },
    considerations: [
      { title: 'Rear extensions', text: 'Kitchen and living extensions for estate homes across the commuter belt.' },
      { title: 'Period renovations', text: 'Older town houses renovated with the structure put right first.' },
      { title: 'Roof included', text: 'Pitched or flat extension roofs built by our own roofers.' },
      { title: 'General building', text: 'Block laying, plastering and alterations.' },
    ],
    services: ['extensions', 'property-renovations', 'general-building-work'],
    faqs: [
      {
        q: 'Do you build extensions in Dublin?',
        a: 'Yes. We cover all of Leinster, including Dublin.',
      },
      {
        q: 'Do I need planning permission?',
        a: 'Some smaller rear extensions are exempted development, subject to conditions; many others need permission. Check with your local authority or an architect before work starts.',
      },
    ],
  },
  {
    slug: 'building-contractors-munster',
    trade: 'building',
    region: 'Munster',
    label: 'Building · Munster',
    metaTitle: 'Building Contractors in Munster | Extensions & Renovations | Pat Premier',
    metaDescription:
      'Building contractors covering Cork, Kerry, Clare, Limerick, Tipperary and Waterford: extensions, renovations and general building work, roofing included. Call 087 365 4209.',
    title: 'Building contractors covering all of Munster',
    intro:
      'From renovating traditional farmhouses to extending family homes in Cork and Limerick, Pat Premier carries out building work across all six Munster counties.',
    image: 'knockThroughPropped',
    secondaryImage: 'plasteredRoom',
    counties: munsterCounties,
    context: {
      heading: 'Building across Munster',
      paragraphs: [
        'Munster has a great many older rural homes, farmhouses and cottages that are full of character but need real work to be comfortable and sound. Renovations here often start with the roof and the walls before anything inside can be touched.',
        'Around Cork, Limerick and Waterford, extensions to suburban homes are just as common. Whichever it is, having building and roofing under one company keeps the whole project, and the weather-tightness of the finished building, in one pair of hands.',
      ],
    },
    considerations: [
      { title: 'Farmhouse renovations', text: 'Older rural homes brought back to life, roof and walls first.' },
      { title: 'Suburban extensions', text: 'Extensions for family homes around Munster’s cities and towns.' },
      { title: 'Exposed sites', text: 'Building and roofing detailed for Atlantic weather.' },
      { title: 'General building', text: 'Block laying, plastering and alterations.' },
    ],
    services: ['extensions', 'property-renovations', 'general-building-work'],
    faqs: [
      {
        q: 'Do you renovate farmhouses and older rural homes?',
        a: 'Yes. Older homes often need roof and structural work as part of the renovation, and we can take on both.',
      },
      {
        q: 'Which Munster counties do you cover?',
        a: 'All six: Clare, Cork, Kerry, Limerick, Tipperary and Waterford.',
      },
    ],
  },
];

export const landingUrl = (slug: LandingSlug) => `/${slug}`;
export const getLanding = (slug: LandingSlug): LandingPage => {
  const p = landingPages.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown landing page: ${slug}`);
  return p;
};
