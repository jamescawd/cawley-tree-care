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
export type Category = 'roofing' | 'building';

export type ServiceSlug =
  | 'roof-repairs'
  | 'roof-restoration'
  | 'new-roofs-and-re-roofing'
  | 'flat-roofing'
  | 'fascias-soffits-and-guttering'
  | 'extensions'
  | 'property-renovations'
  | 'general-building-work';

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
      image: 'rooferRidge',
      layout: 'split',
    },
    overview: {
      heading: 'Small problems on a roof rarely stay small',
      paragraphs: [
        'Irish weather is hard on roofs. Wind lifts slates, driving rain finds the weakest point in a valley or around a chimney, and years of freeze and thaw loosen mortar on ridges and verges. Left alone, a minor fault can soak timbers, insulation and ceilings.',
        'Pat Premier repairs pitched and flat roofs on homes and commercial buildings. We look at the whole roof, explain what we find in plain language and repair what needs repairing, nothing more.',
      ],
      pull: 'We explain what we find before any work starts, so you can make the decision.',
      image: 'slateHouseSunset',
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
    gallery: ['rooferRidge', 'slateHouseSunset', 'greyRoofStone', 'rooferShingle'],
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
      image: 'greyRoofStone',
      layout: 'full',
    },
    overview: {
      heading: 'A planned overhaul, not a patch',
      paragraphs: [
        'Restoration sits between a one-off repair and a full re-roof. Instead of fixing a single fault, we work across the whole roof and renew every weak point while the structure and most of the covering stay in place.',
        'It suits roofs where the timbers and the majority of slates or tiles are still in good order, but the details that keep the weather out have aged. We assess the roof first and only recommend restoration where it makes sense.',
      ],
      pull: 'Where restoration is not the right answer, we will say so.',
      image: 'tiledRoofHouse',
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
    gallery: ['greyRoofStone', 'tiledRoofHouse', 'brickHouseGarden', 'rooferShingle'],
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
      image: 'heroHouse',
      layout: 'framed',
    },
    overview: {
      heading: 'The biggest single job on a house, done properly',
      paragraphs: [
        'A re-roof is a significant investment, and most of what makes it last is out of sight once the job is finished: the condition of the timbers, the membrane, the battens and the detailing at every edge, valley and junction.',
        'We take care over those hidden layers as much as the finished surface, and we keep you informed from strip-off to the final ridge.',
      ],
      pull: 'Most of what makes a roof last is hidden once it is finished.',
      image: 'rooferShingle',
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
    gallery: ['heroHouse', 'rooferShingle', 'brickHouseTiled', 'rooftopsStreet'],
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
      image: 'extensionFlatRoof',
      layout: 'offset',
    },
    overview: {
      heading: 'Where flat roofs go wrong, and how we avoid it',
      paragraphs: [
        'Most flat roof failures come down to three things: water that cannot drain, poor detailing at edges and upstands, and a covering that has simply worn out. Ponding water, blistering and cracked joints are the usual symptoms.',
        'A good flat roof starts with a sound, properly falling deck and finishes with careful work at every trim, outlet and junction with the main building.',
      ],
      pull: 'The finish you see is only as good as the deck beneath it.',
      image: 'extensionRender',
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
    gallery: ['extensionFlatRoof', 'extensionRender', 'extensionTimber', 'glassHouseNight'],
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
      image: 'whiteHouseGreyRoof',
      layout: 'split',
    },
    overview: {
      heading: 'Small components, big consequences',
      paragraphs: [
        'An overflowing gutter can saturate a wall for years before damp shows inside. Rotten fascia boards stop gutters from holding their line, and damaged soffits let in birds, draughts and weather at the eaves.',
        'Renewing the roofline at the same time as other roof work is often the most economical approach, but we also take on roofline and gutter jobs on their own.',
      ],
      image: 'gablesFascia',
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
    gallery: ['whiteHouseGreyRoof', 'gablesFascia', 'ladderWork', 'brickHouseTiled'],
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
      image: 'extensionGlazed',
      layout: 'full',
    },
    overview: {
      heading: 'One team from foundations to roof',
      paragraphs: [
        'Extensions are where building and roofing meet, and the junction between the new roof and the existing house is one of the most common places for problems later. Having both trades under one company keeps that detail in the same hands.',
        'We build single-storey and two-storey extensions to the plans and permissions for your project, with pitched or flat roofs to suit.',
      ],
      pull: 'Building and roofing under one company, so the most important junction stays in one pair of hands.',
      image: 'extensionTimber',
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
    gallery: ['extensionGlazed', 'extensionTimber', 'kitchen', 'interiorOpenPlan'],
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
      image: 'interiorOpenPlan',
      layout: 'split',
    },
    overview: {
      heading: 'Roof, walls, then rooms',
      paragraphs: [
        'Many renovation projects, especially in older Irish homes, begin with the building envelope: a roof that needs attention, walls that need repair, openings that need altering. Because we are roofers and builders, we can take on that structural work as well as the renovation itself.',
        'Whether it is a family home, an older house you have just bought, or a commercial premises, we will talk through what you want to achieve and what the building needs.',
      ],
      image: 'renovationStripped',
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
    gallery: ['renovationStripped', 'interiorOpenPlan', 'interiorStairs', 'bathroom'],
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
    related: ['extensions', 'general-building-work', 'roof-restoration'],
    landing: ['building-contractors-leinster', 'building-contractors-munster'],
  },
  {
    slug: 'general-building-work',
    category: 'building',
    name: 'General Building Work',
    short: 'General Building Work',
    summary: 'Block laying, plastering, alterations and all general building work.',
    metaTitle: 'General Building Work | Block Laying & Plastering | Pat Premier',
    metaDescription:
      'All general building work undertaken: block laying, plastering, alterations and repairs for homes and businesses across Leinster, Munster and the Midlands. Call 087 365 4209.',
    hero: {
      eyebrow: 'Building · General building',
      title: 'All building work undertaken',
      intro:
        'Not every job is a roof or an extension. From block laying and plastering to alterations and repairs, we take on general building work for homes and businesses, large or small.',
      image: 'carpentry',
      layout: 'offset',
    },
    overview: {
      heading: 'One call for the jobs in between',
      paragraphs: [
        'Plenty of building jobs fall between trades: a wall to build, a ceiling to re-plaster, an opening to form, a repair after other work. Rather than coordinating several contractors, you can bring it to one company.',
        'Tell us what you need and we will tell you plainly whether it is work we can take on.',
      ],
      image: 'buildingSite',
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
        { title: 'Outbuildings', text: 'Garages, sheds and outbuildings built or repaired.' },
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
        { title: 'Alterations', items: ['New openings', 'Removing walls', 'Small structures'] },
      ],
    },
    gallery: ['carpentry', 'buildingSite', 'timberFrame', 'insulation'],
    faqs: [
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
];

export const roofingServices = services.filter((s) => s.category === 'roofing');
export const buildingServices = services.filter((s) => s.category === 'building');

export const serviceUrl = (s: Pick<Service, 'category' | 'slug'>) => `/${s.category}/${s.slug}`;

export const getService = (slug: ServiceSlug): Service => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
};
