import type { MediaKey } from './media';

/**
 * Service pages
 * -------------
 * One entry per service = one page at /{category}/{slug}. Each page is built
 * from shared sections, but every service chooses its own hero layout, its
 * own "types of work" layout and its own feature section, so no two pages
 * read as the same template with a new heading.
 *
 * Copy rules: describe the work honestly and in general terms. Do not add
 * guarantees, timescales, prices, certifications or years of experience
 * unless Pat Premier has confirmed them (see src/config/business.ts).
 */
export type Category = 'roofing' | 'building' | 'interiors';

export type ServiceSlug =
  | 'roof-repairs'
  | 'roof-restoration'
  | 'new-roofs-and-re-roofing'
  | 'flat-roofing'
  | 'fascias-soffits-and-guttering'
  | 'extensions'
  | 'property-renovations'
  | 'general-building-work'
  | 'media-walls'
  | 'flooring'
  | 'knock-throughs';

export type LandingSlug =
  | 'roofing-contractors-leinster'
  | 'roofing-contractors-munster'
  | 'roofing-contractors-midlands'
  | 'building-contractors-leinster'
  | 'building-contractors-munster';

export type Feature =
  | { kind: 'signs'; heading: string; intro: string; items: { title: string; text: string }[] }
  | {
      kind: 'compare';
      heading: string;
      intro: string;
      columns: { title: string; when: string; points: string[] }[];
    }
  | { kind: 'steps'; heading: string; intro: string; steps: { title: string; text: string }[] }
  | {
      kind: 'systems';
      heading: string;
      intro: string;
      items: { title: string; text: string; confirmed: boolean }[];
    }
  | { kind: 'anatomy'; heading: string; intro: string; parts: { title: string; text: string }[] }
  | { kind: 'scope'; heading: string; intro: string; groups: { title: string; items: string[] }[] };

export interface Service {
  slug: ServiceSlug;
  category: Category;
  name: string;
  /** Short label for menus and cards. */
  short: string;
  /** One-line summary for cards and menus. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image: MediaKey;
    /** Three photos for the 'framed' layout (portrait triptych). */
    images?: MediaKey[];
    layout: 'split' | 'full' | 'framed' | 'offset';
  };
  overview: { heading: string; paragraphs: string[]; pull?: string; image: MediaKey };
  work: {
    heading: string;
    intro: string;
    layout: 'rows' | 'grid' | 'columns';
    items: { title: string; text: string }[];
  };
  feature: Feature;
  gallery: MediaKey[];
  faqs: { q: string; a: string }[];
  related: ServiceSlug[];
  landing: LandingSlug[];
}

export const services: Service[] = [
  // ───────────────────────────── ROOFING ─────────────────────────────
  {
    slug: 'roof-repairs',
    category: 'roofing',
    name: 'Roof Repairs',
    short: 'Roof Repairs',
    summary: 'Leaks, slipped slates, storm damage and worn flashing put right.',
    metaTitle: 'Roof Repairs | Leaks, Slates & Storm Damage | Pat Premier',
    metaDescription:
      'Roof repairs across Leinster, Munster and the Midlands: leaks, slipped or broken slates and tiles, storm damage, ridges, valleys and flashing. Call 087 365 4209.',
    hero: {
      eyebrow: 'Roofing · Repairs',
      title: 'Roof repairs that find the cause, not just the drip',
      intro:
        'A stain on the ceiling is rarely where the water got in. We trace leaks back to their source and repair slates, tiles, ridges, valleys and flashing properly, so the problem stays fixed.',
      image: 'rooferStrippingTiles',
      layout: 'split',
    },
    overview: {
      heading: 'Small problems on a roof rarely stay small',
      paragraphs: [
        'Irish weather is hard on roofs. Wind lifts slates, driving rain finds the weakest point in a valley or around a chimney, and years of freeze and thaw loosen mortar on ridges and verges. Left alone, a minor fault can soak timbers, insulation and ceilings.',
        'Pat Premier repairs pitched and flat roofs on homes and commercial buildings. We look at the whole roof, explain what we find in plain language and repair what needs repairing, nothing more.',
      ],
      pull: 'We explain what we find before any work starts, so you can make the decision.',
      image: 'tiledRoofBefore',
    },
    work: {
      heading: 'Repairs we carry out',
      intro: 'From a single slipped slate to a full section of roof.',
      layout: 'rows',
      items: [
        {
          title: 'Leak detection and repair',
          text: 'Tracing water back to where it enters, then repairing the fault at its source.',
        },
        {
          title: 'Slipped, cracked and missing slates or tiles',
          text: 'Replacing damaged slates and tiles and securing loose ones before they fall.',
        },
        {
          title: 'Storm damage',
          text: 'Making a roof safe and weathertight after high winds, then completing the permanent repair.',
        },
        {
          title: 'Ridge and hip repairs',
          text: 'Re-bedding or re-fixing loose ridge and hip tiles and renewing failed mortar.',
        },
        {
          title: 'Valleys and flashing',
          text: 'Repairing or renewing valleys and the flashing around chimneys, walls and roof windows.',
        },
        {
          title: 'Chimney repairs',
          text: 'Repointing, flaunching and flashing work where chimneys meet the roof.',
        },
      ],
    },
    feature: {
      kind: 'signs',
      heading: 'Signs your roof needs attention',
      intro: 'If you notice any of these, it is worth having the roof looked at before the next spell of bad weather.',
      items: [
        { title: 'Damp patches or stains', text: 'On ceilings, upstairs walls or around the chimney breast.' },
        { title: 'Slates or tiles on the ground', text: 'Or visibly out of line when you look up from the garden.' },
        { title: 'Daylight in the attic', text: 'Light showing through the roof covering or around the eaves.' },
        { title: 'Loose or cracked ridge tiles', text: 'Often after storms, or where mortar has weathered away.' },
        { title: 'Lifted or split flashing', text: 'Around chimneys, roof windows and where roofs meet walls.' },
        { title: 'Water marks in the attic', text: 'On rafters, felt or insulation after heavy rain.' },
      ],
    },
    gallery: ['tiledRoofBefore', 'rooferStrippingTiles', 'reroofMembraneChimney', 'fasciaNewTimber'],
    faqs: [
      {
        q: 'How do I know whether my roof needs repairing or replacing?',
        a: 'Most roofs with isolated faults (a few slipped slates, a failed flashing, a loose ridge) can be repaired. Replacement is worth considering when problems are widespread: many slates failing at once, sagging, or a roof covering that has simply reached the end of its life. We will tell you honestly which applies.',
      },
      {
        q: 'Can you repair storm damage?',
        a: 'Yes. Storm damage is one of the most common reasons people call us. Where needed, the first step is to make the roof safe and weathertight, followed by the permanent repair.',
      },
      {
        q: 'Do you repair flat roofs as well as slate and tile roofs?',
        a: 'Yes. We repair pitched and flat roofs. See our flat roofing page for more on flat roof systems.',
      },
      {
        q: 'Do you give free quotations?',
        a: 'Yes. Call 087 365 4209 or send us the details and photographs through the quote form, and we will arrange a free quotation.',
      },
      {
        q: 'Which areas do you cover for roof repairs?',
        a: 'All of Leinster, all of Munster and the Midlands. Nationwide enquiries are also welcome.',
      },
    ],
    related: ['roof-restoration', 'flat-roofing', 'fascias-soffits-and-guttering'],
    landing: [
      'roofing-contractors-leinster',
      'roofing-contractors-munster',
      'roofing-contractors-midlands',
    ],
  },
  {
    slug: 'roof-restoration',
    category: 'roofing',
    name: 'Roof Restoration',
    short: 'Roof Restoration',
    summary: 'Bringing a tired but sound roof back to good condition.',
    metaTitle: 'Roof Restoration | Extend the Life of Your Roof | Pat Premier',
    metaDescription:
      'Roof restoration for homes and commercial buildings in Leinster, Munster and the Midlands. Ridges, verges, valleys, flashing and slates or tiles renewed. Free quotes.',
    hero: {
      eyebrow: 'Roofing · Restoration',
      title: 'Restore the roof you have before you replace it',
      intro:
        'Many roofs that look tired are structurally sound. A thorough restoration renews the parts that wear out first, such as ridges, verges, valleys, flashing and damaged slates or tiles, and can add years to the life of the roof.',
      image: 'reroofMembraneChimney',
      layout: 'full',
    },
    overview: {
      heading: 'A planned overhaul, not a patch',
      paragraphs: [
        'Restoration sits between a one-off repair and a full re-roof. Instead of fixing a single fault, we work across the whole roof and renew every weak point while the structure and most of the covering stay in place.',
        'It suits roofs where the timbers and the majority of slates or tiles are still in good order, but the details that keep the weather out have aged. We assess the roof first and only recommend restoration where it makes sense.',
      ],
      pull: 'Where restoration is not the right answer, we will say so.',
      image: 'reroofMembraneBattens',
    },
    work: {
      heading: 'What a restoration can include',
      intro: 'Every roof is different; the scope is agreed after we have inspected it.',
      layout: 'grid',
      items: [
        { title: 'Ridge, hip and verge renewal', text: 'Re-bedding or mechanically fixing ridges, hips and verges.' },
        { title: 'Slate and tile replacement', text: 'Replacing cracked, slipped or missing slates and tiles to match.' },
        { title: 'Valley renewal', text: 'Renewing worn valleys, one of the most common leak points.' },
        { title: 'Flashing', text: 'New flashing at chimneys, abutments and roof windows.' },
        { title: 'Roof cleaning', text: 'Removing moss and debris that hold moisture against the roof.' },
        { title: 'Gutters and roofline', text: 'Overhauling gutters, fascias and soffits at the same time.' },
      ],
    },
    feature: {
      kind: 'compare',
      heading: 'Repair, restore or replace?',
      intro: 'A simple way to think about the three options. We confirm which one fits after inspecting your roof.',
      columns: [
        {
          title: 'Repair',
          when: 'A single fault on an otherwise healthy roof.',
          points: ['Targets one problem', 'Quickest option', 'Leaves the rest of the roof as it is'],
        },
        {
          title: 'Restore',
          when: 'Sound structure, but several details have aged.',
          points: [
            'Works across the whole roof',
            'Renews ridges, valleys, flashing and damaged coverings',
            'Keeps the existing structure and most of the covering',
          ],
        },
        {
          title: 'Replace',
          when: 'Widespread failure or a covering at the end of its life.',
          points: ['Strip to the rafters', 'New membrane, battens and covering', 'A completely new roof surface'],
        },
      ],
    },
    gallery: ['tiledRoofBefore', 'reroofMembraneChimney', 'reroofMembraneBattens', 'fasciaFitting'],
    faqs: [
      {
        q: 'What is the difference between roof restoration and a new roof?',
        a: 'A restoration keeps the existing structure and most of the roof covering, renewing the parts that have worn out. A new roof, or re-roof, strips the covering back to the rafters and replaces it entirely.',
      },
      {
        q: 'Is my roof suitable for restoration?',
        a: 'Restoration suits roofs whose timbers and most of whose slates or tiles are still sound. If inspection shows widespread failure, we will recommend re-roofing instead and explain why.',
      },
      {
        q: 'Do you restore tiled roofs as well as slate roofs?',
        a: 'Yes, we work on tile roofs and slate roofs.',
      },
      {
        q: 'Can gutters and fascias be done at the same time?',
        a: 'Yes, and it often makes sense to, as access is already in place. See our fascias, soffits and guttering page.',
      },
    ],
    related: ['roof-repairs', 'new-roofs-and-re-roofing', 'fascias-soffits-and-guttering'],
    landing: [
      'roofing-contractors-leinster',
      'roofing-contractors-munster',
      'roofing-contractors-midlands',
    ],
  },
  {
    slug: 'new-roofs-and-re-roofing',
    category: 'roofing',
    name: 'New Roofs and Re-Roofing',
    short: 'New Roofs & Re-Roofing',
    summary: 'Complete roof replacement and new roofs for new builds and extensions.',
    metaTitle: 'New Roofs & Re-Roofing | Slate and Tile Roofs | Pat Premier',
    metaDescription:
      'New roofs and complete re-roofing for homes and commercial buildings across Leinster, Munster and the Midlands. Slate and tile roofs. Call 087 365 4209 for a free quote.',
    hero: {
      eyebrow: 'Roofing · New roofs',
      title: 'New roofs and re-roofs, built to last',
      intro:
        'When a roof has reached the end of its life, patching only delays the inevitable. We strip, prepare and re-roof homes and commercial buildings, and build new roofs for new builds and extensions.',
      image: 'slateReroof',
      images: ['reroofBattensBrown', 'slateReroof', 'slateFixing'],
      layout: 'framed',
    },
    overview: {
      heading: 'The biggest single job on a house, done properly',
      paragraphs: [
        'A re-roof is a significant investment, and most of what makes it last is out of sight once the job is finished: the condition of the timbers, the membrane, the battens and the detailing at every edge, valley and junction.',
        'We take care over those hidden layers as much as the finished surface, and we keep you informed from strip-off to the final ridge.',
      ],
      pull: 'Most of what makes a roof last is hidden once it is finished.',
      image: 'reroofMembraneBattens',
    },
    work: {
      heading: 'New roof and re-roofing work',
      intro: 'For existing homes, new builds and extensions.',
      layout: 'columns',
      items: [
        { title: 'Complete re-roofing', text: 'Stripping the old covering and re-roofing from the rafters up.' },
        { title: 'Slate roofs', text: 'New slate roofs and slate re-roofs.' },
        { title: 'Tile roofs', text: 'New tile roofs and tile re-roofs.' },
        { title: 'Roofs for extensions', text: 'Pitched and flat roofs for new extensions, tied in neatly to the existing roof.' },
        { title: 'New-build roofs', text: 'Roofing for new homes and buildings.' },
        { title: 'Metal roof sheeting', text: 'Corrugated and profiled metal sheet roofs for sheds, garages and outbuildings.' },
        { title: 'Roofline included', text: 'Fascias, soffits and guttering renewed as part of the job where required.' },
      ],
    },
    feature: {
      kind: 'steps',
      heading: 'What a re-roof involves',
      intro: 'The typical sequence for replacing a pitched roof. Every project is planned around the building and the weather.',
      steps: [
        { title: 'Survey and quotation', text: 'We inspect the roof and structure and provide a clear quotation.' },
        { title: 'Access and protection', text: 'Safe access is set up and the property is protected before work begins.' },
        { title: 'Strip-off', text: 'The old covering, battens and membrane are removed and cleared from site.' },
        { title: 'Timber check', text: 'Rafters and timbers are checked, with any defects raised with you.' },
        { title: 'Membrane and battens', text: 'A new breathable membrane and battens are installed.' },
        { title: 'New covering and details', text: 'Slates or tiles go on, followed by ridges, verges, valleys and flashing.' },
        { title: 'Finish and clear-up', text: 'Roofline and gutters completed, site cleared and the job walked through with you.' },
      ],
    },
    gallery: ['slateReroof', 'reroofBattensBrown', 'metalRoofSheets', 'extensionRafters'],
    faqs: [
      {
        q: 'How do I know if I need a new roof?',
        a: 'Common signs are widespread slipping or cracked slates or tiles, repeated leaks in different places, sagging, or a roof that has needed frequent repairs. An inspection will show whether repair, restoration or replacement is the sensible option.',
      },
      {
        q: 'Do you build roofs for extensions?',
        a: 'Yes. We build pitched and flat roofs for extensions, and we also build the extensions themselves. See our extensions page.',
      },
      {
        q: 'Will my home be exposed to the weather during a re-roof?',
        a: 'Work is planned around the forecast and the roof is protected while it is open. We will talk you through how your particular job will be managed.',
      },
      {
        q: 'Do you give free quotations for new roofs?',
        a: 'Yes. Call 087 365 4209 or request a quote online.',
      },
    ],
    related: ['roof-restoration', 'flat-roofing', 'extensions'],
    landing: [
      'roofing-contractors-leinster',
      'roofing-contractors-munster',
      'roofing-contractors-midlands',
    ],
  },
  {
    slug: 'flat-roofing',
    category: 'roofing',
    name: 'Flat Roofing',
    short: 'Flat Roofing',
    summary: 'GRP rubber-coated flat roofs for extensions, garages and dormers.',
    metaTitle: 'Flat Roofing | GRP Rubber-Coated Flat Roofs | Pat Premier',
    metaDescription:
      'Flat roof installation, replacement and repair, including GRP rubber-coated roofs, for extensions, garages, dormers and commercial buildings in Leinster, Munster and the Midlands.',
    hero: {
      eyebrow: 'Roofing · Flat roofs',
      title: 'Flat roofs that shed water, not leak it',
      intro:
        'Flat roofs on extensions, garages, dormers and commercial buildings need the right system and careful detailing at every edge and upstand. We install, replace and repair flat roofs, including GRP rubber-coated roofs.',
      image: 'flatRoofFinished',
      layout: 'offset',
    },
    overview: {
      heading: 'Where flat roofs go wrong, and how we avoid it',
      paragraphs: [
        'Most flat roof failures come down to three things: water that cannot drain, poor detailing at edges and upstands, and a covering that has simply worn out. Ponding water, blistering and cracked joints are the usual symptoms.',
        'A good flat roof starts with a sound, properly falling deck and finishes with careful work at every trim, outlet and junction with the main building.',
      ],
      pull: 'The finish you see is only as good as the deck beneath it.',
      image: 'flatRoofDeck',
    },
    work: {
      heading: 'Flat roofing work',
      intro: 'Domestic and commercial flat roofs.',
      layout: 'rows',
      items: [
        { title: 'New flat roofs', text: 'Complete flat roofs for extensions, garages, dormers and outbuildings.' },
        { title: 'Flat roof replacement', text: 'Stripping failed coverings and replacing with a new system.' },
        { title: 'GRP rubber-coated roofs', text: 'Seamless GRP roofs finished with edge trims and detailing.' },
        { title: 'Flat roof repairs', text: 'Repairing leaks, splits, blisters and failed joints.' },
        { title: 'Edges, upstands and outlets', text: 'Trims, drips, upstands and outlets that keep water moving off the roof.' },
      ],
    },
    feature: {
      kind: 'systems',
      heading: 'Flat roof systems',
      intro: 'The right system depends on the roof, its use and the budget. We will recommend one after seeing the roof.',
      items: [
        {
          title: 'GRP rubber-coated roofing',
          text: 'Glass-reinforced plastic laid as a single, seamless surface and finished with matching trims. Well suited to extensions, dormers and garages.',
          confirmed: true,
        },
        {
          title: 'Other flat roof systems',
          text: 'Details of any additional systems offered (for example EPDM rubber membrane or torch-on felt) are to be confirmed by Pat Premier.',
          confirmed: false,
        },
      ],
    },
    gallery: ['feltRoofBefore', 'flatRoofDeck', 'flatRoofFinished', 'extensionFlatRoofFascia'],
    faqs: [
      {
        q: 'What is a GRP roof?',
        a: 'GRP stands for glass-reinforced plastic, often called fibreglass. It is laid as a single seamless layer over a prepared deck and finished with trims at the edges, which makes it a popular choice for extensions, dormers and garages.',
      },
      {
        q: 'Why is water pooling on my flat roof?',
        a: 'Ponding usually means the roof does not fall enough towards its outlets, or the deck has sagged. It shortens the life of most coverings, so it is worth correcting when the roof is next repaired or replaced.',
      },
      {
        q: 'Can you repair my flat roof rather than replacing it?',
        a: 'Often, yes. Isolated splits, blisters and failed joints can be repaired. If the covering has failed across the roof, or the deck is damaged, replacement is usually the better long-term option.',
      },
      {
        q: 'Do you do flat roofs on commercial buildings?',
        a: 'Yes. We carry out roofing work on residential and commercial properties.',
      },
    ],
    related: ['roof-repairs', 'extensions', 'fascias-soffits-and-guttering'],
    landing: [
      'roofing-contractors-leinster',
      'roofing-contractors-munster',
      'roofing-contractors-midlands',
    ],
  },
  {
    slug: 'fascias-soffits-and-guttering',
    category: 'roofing',
    name: 'Fascias, Soffits and Guttering',
    short: 'Fascias, Soffits & Guttering',
    summary: 'Roofline renewal and gutter work that protects walls and foundations.',
    metaTitle: 'Fascias, Soffits & Guttering | Roofline Work | Pat Premier',
    metaDescription:
      'Fascias, soffits, gutters and downpipes replaced, repaired and cleared across Leinster, Munster and the Midlands. Free quotes from Pat Premier Roofing and Building.',
    hero: {
      eyebrow: 'Roofing · Roofline',
      title: 'The roofline: where the roof hands water to the ground',
      intro:
        'Fascias, soffits and gutters carry every drop that lands on your roof safely away from walls and foundations. When they fail, water ends up where it does real damage. We repair and renew the full roofline.',
      image: 'fasciaFitting',
      layout: 'split',
    },
    overview: {
      heading: 'Small components, big consequences',
      paragraphs: [
        'An overflowing gutter can saturate a wall for years before damp shows inside. Rotten fascia boards stop gutters from holding their line, and damaged soffits let in birds, draughts and weather at the eaves.',
        'Renewing the roofline at the same time as other roof work is often the most economical approach, but we also take on roofline and gutter jobs on their own.',
      ],
      image: 'fasciaNewTimber',
    },
    work: {
      heading: 'Roofline and gutter work',
      intro: 'Repairs, replacements and complete roofline renewal.',
      layout: 'grid',
      items: [
        { title: 'Fascia replacement', text: 'Replacing rotten or damaged fascia boards along the eaves.' },
        { title: 'Soffit replacement', text: 'New soffits to close the underside of the eaves.' },
        { title: 'New guttering', text: 'Gutters fitted to the correct fall so water reaches the outlets.' },
        { title: 'Downpipes', text: 'New and replacement downpipes, connected to the drainage.' },
        { title: 'Gutter repairs', text: 'Fixing leaking joints, sagging runs and broken brackets.' },
        { title: 'Gutter clearing', text: 'Clearing blocked gutters and downpipes.' },
      ],
    },
    feature: {
      kind: 'anatomy',
      heading: 'Anatomy of the roofline',
      intro: 'What each part does, and what happens when it fails.',
      parts: [
        { title: 'Fascia', text: 'The board along the eaves that carries the gutter. When it rots, gutters drop and leak.' },
        { title: 'Soffit', text: 'Closes the underside of the eaves. Damage lets in birds, draughts and weather.' },
        { title: 'Gutter', text: 'Collects water from the roof. Blockages and poor falls cause overflowing.' },
        { title: 'Downpipe', text: 'Carries water to the drains. Leaks here soak walls and foundations.' },
      ],
    },
    gallery: ['fasciaBefore', 'fasciaNewTimber', 'fasciaFitting', 'flatRoofFinished'],
    faqs: [
      {
        q: 'Why are my gutters overflowing?',
        a: 'Usually because of a blockage (leaves, moss, debris), a gutter that has lost its fall, or downpipes too small for the roof area. We find the cause and put it right.',
      },
      {
        q: 'Can fascias and soffits be replaced without replacing the roof?',
        a: 'Yes. Roofline work can be done on its own. Where a roof is being repaired or replaced at the same time, it is often efficient to do both together.',
      },
      {
        q: 'Do you clear gutters?',
        a: 'Yes, we clear gutters and downpipes, and we will let you know if we see anything else that needs attention while we are up there.',
      },
    ],
    related: ['roof-repairs', 'roof-restoration', 'new-roofs-and-re-roofing'],
    landing: [
      'roofing-contractors-leinster',
      'roofing-contractors-munster',
      'roofing-contractors-midlands',
    ],
  },

  // ───────────────────────────── BUILDING ─────────────────────────────
  {
    slug: 'extensions',
    category: 'building',
    name: 'Extensions',
    short: 'Extensions',
    summary: 'More space without moving: single and two-storey extensions, built and roofed.',
    metaTitle: 'House Extensions | Builders in Leinster & Munster | Pat Premier',
    metaDescription:
      'House extensions built from the ground up, including the roof, by Pat Premier Roofing and Building. Covering Leinster, Munster and the Midlands. Call 087 365 4209.',
    hero: {
      eyebrow: 'Building · Extensions',
      title: 'Don’t move. Extend.',
      intro:
        'An extension can give you the kitchen, living space or bedroom you need without leaving the home and the area you love. We build extensions from the ground up, and because we are roofers too, the roof is built by the same team.',
      image: 'extensionBlockwork',
      images: ['extensionJoistsSteel', 'extensionBlockwork', 'extensionFlatRoofFascia'],
      layout: 'framed',
    },
    overview: {
      heading: 'One team from foundations to roof',
      paragraphs: [
        'Extensions are where building and roofing meet, and the junction between the new roof and the existing house is one of the most common places for problems later. Having both trades under one company keeps that detail in the same hands.',
        'We build single-storey and two-storey extensions to the plans and permissions for your project, with pitched or flat roofs to suit.',
      ],
      pull: 'Building and roofing under one company, so the most important junction stays in one pair of hands.',
      image: 'extensionRafters',
    },
    work: {
      heading: 'Extension work',
      intro: 'Built to your drawings and permissions.',
      layout: 'columns',
      items: [
        { title: 'Single-storey extensions', text: 'Kitchen, living and utility extensions to the rear or side.' },
        { title: 'Two-storey extensions', text: 'Extra bedrooms and living space over two floors.' },
        { title: 'Pitched or flat roofs', text: 'Built by our own roofing team and tied in to the existing house.' },
        { title: 'Block laying', text: 'Blockwork for walls, from foundations upwards.' },
        { title: 'Plastering', text: 'Internal and external plastering to finish the structure.' },
        { title: 'Opening up', text: 'Forming openings into the existing house to connect the new space.' },
      ],
    },
    feature: {
      kind: 'steps',
      heading: 'How an extension comes together',
      intro: 'A typical sequence. Your project will be planned around your drawings, permissions and timeline.',
      steps: [
        { title: 'Plans and permissions', text: 'Your drawings and any planning permission are in place before work starts.' },
        { title: 'Quotation', text: 'We price the work from the drawings and a site visit.' },
        { title: 'Groundworks and foundations', text: 'The site is prepared and foundations laid.' },
        { title: 'Walls and structure', text: 'Block walls rise and openings are formed.' },
        { title: 'Roof', text: 'Our roofing team builds the roof and ties it in to the house.' },
        { title: 'Finishing', text: 'Plastering and finishing work, then the new space is opened up to the house.' },
      ],
    },
    gallery: ['foundations', 'extensionWallPlate', 'extensionRafters', 'extensionBlockwork'],
    faqs: [
      {
        q: 'Do I need planning permission for an extension?',
        a: 'In Ireland, some smaller rear extensions to houses are exempted development, subject to conditions on size, height and the amount of garden left. Larger extensions, and most to the front or side, need permission. Always check with your local authority or an architect before work starts.',
      },
      {
        q: 'Do you build the roof on the extension too?',
        a: 'Yes. As a roofing and building company, our own team builds the roof and ties it in to the existing house.',
      },
      {
        q: 'Do you provide architectural drawings?',
        a: 'Please ask when you get in touch. We build to the drawings and permissions for your project.',
      },
      {
        q: 'Do you build extensions on commercial properties?',
        a: 'We work on residential and commercial properties. Tell us about your project and we will discuss it with you.',
      },
    ],
    related: ['property-renovations', 'general-building-work', 'flat-roofing'],
    landing: ['building-contractors-leinster', 'building-contractors-munster'],
  },
  {
    slug: 'property-renovations',
    category: 'building',
    name: 'Property Renovations',
    short: 'Property Renovations',
    summary: 'Older homes and commercial buildings brought back to life, inside and out.',
    metaTitle: 'Property Renovations | Home & Commercial | Pat Premier',
    metaDescription:
      'Property renovations by Pat Premier Roofing and Building: older homes, refurbishments and commercial premises across Leinster, Munster and the Midlands. Free quotes.',
    hero: {
      eyebrow: 'Building · Renovations',
      title: 'Renovations that start with a sound building',
      intro:
        'A beautiful finish means little if the roof leaks or the walls are damp. We renovate homes and commercial properties from the outside in, putting the structure right first and then transforming the spaces within.',
      image: 'knockThroughOpening',
      layout: 'split',
    },
    overview: {
      heading: 'Roof, walls, then rooms',
      paragraphs: [
        'Many renovation projects, especially in older Irish homes, begin with the building envelope: a roof that needs attention, walls that need repair, openings that need altering. Because we are roofers and builders, we can take on that structural work as well as the renovation itself.',
        'Whether it is a family home, an older house you have just bought, or a commercial premises, we will talk through what you want to achieve and what the building needs.',
      ],
      image: 'knockThroughPropped',
    },
    work: {
      heading: 'Renovation work',
      intro: 'Residential and commercial.',
      layout: 'rows',
      items: [
        { title: 'Whole-house renovations', text: 'Taking an older or tired property back to a sound, modern home.' },
        { title: 'Structural alterations', text: 'Forming new openings and reconfiguring layouts.' },
        { title: 'Roof work as part of a renovation', text: 'Repairs, restoration or a new roof alongside the renovation.' },
        { title: 'Plastering', text: 'Re-plastering walls and ceilings inside and out.' },
        { title: 'Commercial refurbishment', text: 'Renovation work on shops, offices and commercial premises.' },
      ],
    },
    feature: {
      kind: 'scope',
      heading: 'Where renovation projects usually start',
      intro: 'A useful way to plan: deal with the building first, then the spaces inside it.',
      groups: [
        { title: 'Outside', items: ['Roof condition', 'Gutters and roofline', 'External walls and render', 'Openings for doors and windows'] },
        { title: 'Structure', items: ['Internal walls and openings', 'Floors and ceilings', 'Chimneys', 'Damp and drainage issues'] },
        { title: 'Inside', items: ['Plastering', 'Reconfigured rooms', 'Kitchens and living spaces', 'Final finishes'] },
      ],
    },
    gallery: ['knockThroughBefore', 'knockThroughPropped', 'plasteredRoom', 'mediaWallBoarded'],
    faqs: [
      {
        q: 'Do you renovate older houses?',
        a: 'Yes. Older homes often need roof and structural work as part of a renovation, which is where a roofing and building company is especially useful.',
      },
      {
        q: 'Can you handle the roof as part of a renovation?',
        a: 'Yes. We can repair, restore or replace the roof as part of the same project.',
      },
      {
        q: 'Do you renovate commercial properties?',
        a: 'Yes. We work on residential and commercial properties.',
      },
      {
        q: 'How do I get a quote for a renovation?',
        a: 'Call 087 365 4209 or use the quote form. Photographs and any drawings you have help us understand the project from the start.',
      },
    ],
    related: ['knock-throughs', 'extensions', 'flooring'],
    landing: ['building-contractors-leinster', 'building-contractors-munster'],
  },
  {
    slug: 'general-building-work',
    category: 'building',
    name: 'General Building Work',
    short: 'General Building Work',
    summary: 'Foundations, concrete, block laying, groundworks, plastering and alterations.',
    metaTitle: 'General Building Work | Block Laying & Plastering | Pat Premier',
    metaDescription:
      'All general building work undertaken: block laying, plastering, alterations and repairs for homes and businesses across Leinster, Munster and the Midlands. Call 087 365 4209.',
    hero: {
      eyebrow: 'Building · General building',
      title: 'All building work undertaken',
      intro:
        'Not every job is a roof or an extension. From block laying and plastering to alterations and repairs, we take on general building work for homes and businesses, large or small.',
      image: 'foundations',
      layout: 'offset',
    },
    overview: {
      heading: 'One call for the jobs in between',
      paragraphs: [
        'Plenty of building jobs fall between trades: a wall to build, a ceiling to re-plaster, an opening to form, a repair after other work. Rather than coordinating several contractors, you can bring it to one company.',
        'Tell us what you need and we will tell you plainly whether it is work we can take on.',
      ],
      image: 'floorSlab',
    },
    work: {
      heading: 'General building work',
      intro: 'Residential and commercial.',
      layout: 'columns',
      items: [
        { title: 'Block laying', text: 'Walls, boundary walls and structural blockwork.' },
        { title: 'Plastering', text: 'Internal and external plastering and repairs.' },
        { title: 'Alterations', text: 'Forming openings and reconfiguring spaces.' },
        { title: 'Building repairs', text: 'Repairs to walls, chimneys and structures.' },
        { title: 'Foundations and floor slabs', text: 'Strip foundations, damp-proof membranes and concrete floor slabs.' },
        { title: 'Concrete and groundworks', text: 'Concrete yards, paths and bases, dug out and finished properly.' },
        { title: 'Driveway bases', text: 'Driveways dug out and laid with a compacted stone base.' },
        { title: 'Garden walls', text: 'Old walls taken down safely and new ones built.' },
        { title: 'Commercial work', text: 'Building work for shops, offices and premises.' },
      ],
    },
    feature: {
      kind: 'scope',
      heading: 'Typical jobs',
      intro: 'If your job is not listed, ask. "All building work undertaken" means exactly that.',
      groups: [
        { title: 'Walls', items: ['Block walls', 'Boundary walls', 'Wall repairs'] },
        { title: 'Finishes', items: ['Internal plastering', 'External plastering', 'Patch repairs'] },
        { title: 'Groundworks', items: ['Foundations', 'Concrete floors and yards', 'Driveway and patio bases'] },
      ],
    },
    gallery: ['gardenWallDemolished', 'drivewayBase', 'concreteScreeding', 'floorSlab'],
    faqs: [
      {
        q: 'Do you do concrete work and groundworks?',
        a: 'Yes, including foundations, floor slabs, concrete yards and paths, and stone bases for driveways and patios.',
      },
      {
        q: 'Do you take on small building jobs?',
        a: 'Yes. Get in touch with the details and we will let you know.',
      },
      {
        q: 'Do you do plastering?',
        a: 'Yes, internal and external plastering.',
      },
      {
        q: 'Do you do block laying?',
        a: 'Yes, including walls, boundary walls and structural blockwork.',
      },
    ],
    related: ['extensions', 'property-renovations', 'roof-repairs'],
    landing: ['building-contractors-leinster', 'building-contractors-munster'],
  },
  // ───────────────────────────── INTERIORS ─────────────────────────────
  {
    slug: 'media-walls',
    category: 'interiors',
    name: 'Media Walls',
    short: 'Media Walls',
    summary: 'Built-in media walls with recesses for your TV, shelving and display.',
    metaTitle: 'Media Walls | Built-In TV & Feature Walls | Pat Premier',
    metaDescription:
      'Bespoke media walls built in timber and plasterboard, with recessed niches for your TV, shelving and display, across Leinster, Munster and the Midlands. Call 087 365 4209.',
    hero: {
      eyebrow: 'Interiors · Media walls',
      title: 'A media wall built around the way you live',
      intro:
        'A media wall turns a plain living room wall into a built-in feature: a recess for the TV, niches for shelving and display, and cables kept out of sight. We frame, board and finish media walls to suit your room.',
      image: 'mediaWallBoarded',
      layout: 'split',
    },
    overview: {
      heading: 'Built properly behind the finish',
      paragraphs: [
        'A good media wall starts with a straight, solid frame. We build a timber stud frame across the wall, set out every recess and shelf to your measurements, and plan where cables need to run before anything is closed in.',
        'The frame is then boarded, the edges of every niche are finished with corner beads for crisp lines, and the wall is ready for plastering and decoration.',
      ],
      pull: 'Every recess is set out to your TV, your shelving and your room before a single board goes on.',
      image: 'mediaWallFrame',
    },
    work: {
      heading: 'What we build',
      intro: 'Designed around your room and what you want on display.',
      layout: 'grid',
      items: [
        { title: 'TV recesses', text: 'A recess sized for your TV, so it sits neatly into the wall.' },
        { title: 'Display niches', text: 'Recessed niches and shelves either side for books, ornaments and lighting.' },
        { title: 'Timber stud frames', text: 'A solid, level frame fixed to the wall to carry the boards.' },
        { title: 'Plasterboard and beads', text: 'Boarded and finished with corner beads for sharp, straight edges.' },
        { title: 'Hidden cable routes', text: 'Cable routes planned in the frame so wires are kept out of sight.' },
        { title: 'Ready to decorate', text: 'Finished for plastering and painting to match the room.' },
      ],
    },
    feature: {
      kind: 'steps',
      heading: 'How a media wall comes together',
      intro: 'The stages you can see in our own photographs, from bare wall to boarded media wall.',
      steps: [
        { title: 'Measure and design', text: 'We agree the layout: TV size, niches, shelves and any fire or speaker space.' },
        { title: 'Timber frame', text: 'A stud frame is built and fixed across the wall, level and square.' },
        { title: 'Cable routes', text: 'Cable runs are planned into the frame before it is closed in.' },
        { title: 'Boarding', text: 'The frame is boarded and every recess formed.' },
        { title: 'Beads and finishing', text: 'Corner beads go on every edge, ready for plastering and decorating.' },
      ],
    },
    gallery: ['mediaWallFrame', 'mediaWallBoarded', 'laminateFlooring', 'plasteredRoom'],
    faqs: [
      {
        q: 'Can you build a media wall around my existing TV?',
        a: 'Yes. Tell us the size of your TV (and anything else you want built in) and the recess is set out to suit.',
      },
      {
        q: 'Do you do the electrics for a media wall?',
        a: 'Please ask when you get in touch and we will talk you through how sockets and lighting will be handled for your wall.',
      },
      {
        q: 'Can you do the flooring at the same time?',
        a: 'Yes. We also fit hardwood and laminate flooring, so the whole room can be done together.',
      },
      {
        q: 'Do you give free quotations for media walls?',
        a: 'Yes. Call 087 365 4209 or request a quote online, with a photo of the wall if you can.',
      },
    ],
    related: ['flooring', 'knock-throughs', 'property-renovations'],
    landing: ['building-contractors-leinster', 'building-contractors-munster'],
  },
  {
    slug: 'flooring',
    category: 'interiors',
    name: 'Hardwood & Laminate Flooring',
    short: 'Hardwood & Laminate Flooring',
    summary: 'Hardwood and laminate floors, fitted over the right underlay.',
    metaTitle: 'Hardwood & Laminate Flooring Fitted | Pat Premier',
    metaDescription:
      'Hardwood and laminate flooring supplied and fitted by Pat Premier, including water-resistant laminate, over the right underlay. Leinster, Munster and the Midlands. Free quotes.',
    hero: {
      eyebrow: 'Interiors · Flooring',
      title: 'Hardwood and laminate floors, laid right',
      intro:
        'A floor is only as good as what is under it. We prepare the subfloor, lay the correct underlay and fit hardwood and laminate flooring neatly from wall to wall.',
      image: 'laminateFlooring',
      layout: 'offset',
    },
    overview: {
      heading: 'Preparation first, then the floor',
      paragraphs: [
        'Most floor problems, such as creaks, gaps, lifting and damp, come from what is underneath. Before any boards go down, the subfloor is cleared and checked, and the right underlay is laid for the room and the floor being fitted.',
        'Then the boards are laid in straight, staggered rows, with expansion gaps at the walls and tidy finishing at doorways and edges.',
      ],
      pull: 'Clean subfloor, correct underlay, straight rows: the difference you feel every day.',
      image: 'flooringUnderlay',
    },
    work: {
      heading: 'Flooring we fit',
      intro: 'For living rooms, kitchens, hallways and bedrooms.',
      layout: 'rows',
      items: [
        { title: 'Hardwood flooring', text: 'Real wood floors with natural grain and character, fitted with care.' },
        { title: 'Laminate flooring', text: 'Hard-wearing laminate in a wide range of wood-effect finishes.' },
        { title: 'Water-resistant laminate', text: 'Laminate designed for kitchens, hallways and busy family rooms.' },
        { title: 'Underlay', text: 'The right underlay for the floor and subfloor, laid before the boards.' },
        { title: 'Subfloor preparation', text: 'Old coverings lifted and the floor cleared and checked before fitting.' },
        { title: 'Whole-room finishing', text: 'Floors fitted as part of a media wall, knock-through or full renovation.' },
      ],
    },
    feature: {
      kind: 'compare',
      heading: 'Hardwood or laminate?',
      intro: 'Both look superb when fitted well. Here is how they differ. We are happy to talk it through for your room.',
      columns: [
        {
          title: 'Hardwood',
          when: 'Real timber, for warmth and character that lasts.',
          points: ['Natural grain, every board different', 'Can often be sanded and refinished', 'A premium finish for living spaces'],
        },
        {
          title: 'Laminate',
          when: 'Practical, hard-wearing and great value.',
          points: ['Wide choice of wood-effect finishes', 'Water-resistant ranges for kitchens and halls', 'Quick to fit with minimal disruption'],
        },
      ],
    },
    gallery: ['flooringUnderlay', 'laminateFlooring', 'mediaWallFrame', 'plasteredRoom'],
    faqs: [
      {
        q: 'Do you fit both hardwood and laminate flooring?',
        a: 'Yes, we fit both. Tell us the rooms and the look you are after and we will advise on what suits.',
      },
      {
        q: 'Is laminate suitable for a kitchen?',
        a: 'Water-resistant laminate ranges are designed for kitchens, hallways and other busy areas. We can talk you through the options.',
      },
      {
        q: 'Do I need new underlay?',
        a: 'In most cases, yes. The right underlay helps with comfort, sound and levelling, and some floors require a specific type.',
      },
      {
        q: 'Can you lift my old floor first?',
        a: 'Yes. Old coverings can be lifted and the subfloor prepared as part of the job.',
      },
    ],
    related: ['media-walls', 'knock-throughs', 'property-renovations'],
    landing: ['building-contractors-leinster', 'building-contractors-munster'],
  },
  {
    slug: 'knock-throughs',
    category: 'interiors',
    name: 'Knock-Throughs & Open-Plan Living',
    short: 'Knock-Throughs & Open-Plan',
    summary: 'Walls opened up to join kitchens and living rooms into brighter spaces.',
    metaTitle: 'Knock-Throughs & Wall Removal | Open-Plan Living | Pat Premier',
    metaDescription:
      'Walls opened up and knocked through to create open-plan kitchens and living rooms, with temporary support, making good and plastering. Pat Premier, call 087 365 4209.',
    hero: {
      eyebrow: 'Interiors · Knock-throughs',
      title: 'Open up your home without moving',
      intro:
        'Joining a kitchen and living room, or widening a doorway, can transform how a house feels. We open up walls safely, support them while the work is done, and leave the opening ready to finish.',
      image: 'knockThroughOpeningKitchen',
      images: ['knockThroughBefore', 'knockThroughPropped', 'knockThroughOpeningKitchen'],
      layout: 'framed',
    },
    overview: {
      heading: 'Careful work on the walls that hold your house up',
      paragraphs: [
        'Many internal walls carry load from the floors and roof above. Before an opening is formed, the wall above is supported temporarily, and a correctly sized lintel or beam goes in to carry the load permanently. Where a wall is load-bearing, a structural engineer’s specification is usually needed, and we will talk you through it.',
        'Once the opening is formed, the edges are made good and the walls plastered, ready for flooring and decorating to tie the two rooms together.',
      ],
      pull: 'Support first, opening second, finish last.',
      image: 'plasteredRoom',
    },
    work: {
      heading: 'Knock-through work',
      intro: 'From a wider doorway to a fully open-plan ground floor.',
      layout: 'columns',
      items: [
        { title: 'Kitchen to living room', text: 'Opening the wall between kitchen and living space.' },
        { title: 'Wider openings', text: 'Widening doorways and openings between rooms.' },
        { title: 'Temporary support', text: 'The wall above supported while the opening is formed.' },
        { title: 'Lintels and beams', text: 'A lintel or beam installed to carry the load permanently.' },
        { title: 'Making good', text: 'Edges, reveals and floors made good after the opening.' },
        { title: 'Plastering', text: 'Walls and ceilings plastered, ready to decorate.' },
      ],
    },
    feature: {
      kind: 'steps',
      heading: 'From wall to open plan',
      intro: 'The sequence shown in our own photographs of a kitchen–living room knock-through.',
      steps: [
        { title: 'Plan and check', text: 'We check what the wall carries and what runs through it.' },
        { title: 'Prepare', text: 'Floors and furniture protected; the opening marked out.' },
        { title: 'Support', text: 'The wall above is supported temporarily.' },
        { title: 'Open up', text: 'The opening is formed and the lintel or beam installed.' },
        { title: 'Make good', text: 'Edges and reveals made good, then plastered.' },
      ],
    },
    gallery: ['knockThroughBefore', 'knockThroughPropped', 'knockThroughOpening', 'plasteredRoom'],
    faqs: [
      {
        q: 'Can any wall be knocked through?',
        a: 'Most walls can be opened up, but load-bearing walls need a properly sized lintel or beam and temporary support while the work is done. We will check the wall with you first.',
      },
      {
        q: 'Do I need an engineer?',
        a: 'For a load-bearing wall, a structural engineer’s specification for the beam is usually needed. We will talk you through what applies to your wall.',
      },
      {
        q: 'Can you finish the room afterwards?',
        a: 'Yes. We plaster the walls and can fit new flooring and build media walls, so the new space is finished as one.',
      },
    ],
    related: ['property-renovations', 'flooring', 'media-walls'],
    landing: ['building-contractors-leinster', 'building-contractors-munster'],
  },
];

export const roofingServices = services.filter((s) => s.category === 'roofing');
export const buildingServices = services.filter((s) => s.category === 'building');
export const interiorServices = services.filter((s) => s.category === 'interiors');

export const serviceUrl = (s: Pick<Service, 'category' | 'slug'>) => `/${s.category}/${s.slug}`;

export const getService = (slug: ServiceSlug): Service => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
};
