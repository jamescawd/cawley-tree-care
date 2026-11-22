import type { ImageMetadata } from 'astro';

/**
 * Image registry
 * --------------
 * Every photograph on the site is referenced by key from here, so replacing a
 * demonstration image with a real Pat Premier photograph is a one-line change:
 *
 *   1. Put the photo in src/assets/work/ (e.g. src/assets/work/kildare-reroof.jpg)
 *   2. Point the key's `src` at it, write a factual `alt`, set `demo: false`.
 *
 * `demo: true` images are royalty-free demonstration photographs (Unsplash
 * licence) used ONLY until real project photography is supplied. They are
 * labelled "Demonstration image" wherever they appear and must never be
 * described as Pat Premier’s work.
 */
export interface MediaItem {
  src: ImageMetadata;
  alt: string;
  demo: boolean;
  /** Where the file came from (licence audit trail). */
  source: string;
  /** Optional focal point for object-position, e.g. '50% 30%'. */
  focus?: string;
}

const demoFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/demo/*.jpg', {
  eager: true,
});
const work = (name: string): ImageMetadata => {
  const file = demoFiles[`../assets/demo/${name}.jpg`];
  if (!file) throw new Error(`Missing image: src/assets/demo/${name}.jpg`);
  return file.default;
};
const unsplash = (id: string) => `Unsplash (photo-${id}), Unsplash Licence`;

export const media = {
  heroHouse: {
    src: work('hero-slate-house-dusk'),
    alt: 'Detached house at dusk with a steep dark slate roof and warmly lit gable windows',
    demo: true,
    source: unsplash('1568605114967-8130f3a36994'),
    focus: '50% 40%',
  },
  slateHouseSunset: {
    src: work('slate-roof-brick-house-sunset'),
    alt: 'Brick house with a slate roof and dormer windows in low evening sun',
    demo: true,
    source: unsplash('1449844908441-8829872d2607'),
    focus: '70% 50%',
  },
  greyRoofStone: {
    src: work('grey-roof-stone-house'),
    alt: 'Two-storey house with a grey pitched roof, stone chimney breast and covered porch',
    demo: true,
    source: unsplash('1583608205776-bfd35f0d9f83'),
  },
  whiteHouseGreyRoof: {
    src: work('white-house-grey-roof'),
    alt: 'White house with grey roof, dormers, fascias and gutters running along the eaves',
    demo: true,
    source: unsplash('1570129477492-45c003edd2be'),
  },
  brickHouseTiled: {
    src: work('brick-house-tiled-roof'),
    alt: 'Brick family home with a hipped tiled roof and double garage',
    demo: true,
    source: unsplash('1605276374104-dee2a0ed3cd6'),
  },
  brickHouseGarden: {
    src: work('brick-house-garden'),
    alt: 'Red-brick house with a steep tiled roof set back behind a lawn',
    demo: true,
    source: unsplash('1598228723793-52759bba239c'),
  },
  tiledRoofHouse: {
    src: work('tiled-roof-house'),
    alt: 'Large house with a terracotta tiled roof, gables and timber detailing',
    demo: true,
    source: unsplash('1475855581690-80accde3ae2b'),
  },
  rooferRidge: {
    src: work('roofer-on-roof-ridge'),
    alt: 'Roofer standing on the ridge of a house roof with a ladder against the eaves',
    demo: true,
    source: unsplash('1632759145351-1d592919f522'),
    focus: '50% 25%',
  },
  rooferShingle: {
    src: work('roofer-on-shingle-roof'),
    alt: 'Roofer working across a pitched roof on a sunny day',
    demo: true,
    source: unsplash('1635424710928-0544e8512eae'),
  },
  rooferToolBelt: {
    src: work('roofer-tool-belt'),
    alt: 'Tradesman with a tool belt working at roof level against a bright sky',
    demo: true,
    source: unsplash('1595844730298-b960ff98fee0'),
  },
  gablesFascia: {
    src: work('white-gables-fascia'),
    alt: 'Close view of white gables showing the fascia boards and roof edge',
    demo: true,
    source: unsplash('1503594384566-461fe158e797'),
  },
  rooftopsStreet: {
    src: work('rooftops-street'),
    alt: 'Row of suburban houses with pitched roofs and gables',
    demo: true,
    source: unsplash('1605146769289-440113cc3d00'),
  },
  extensionGlazed: {
    src: work('extension-glazed-dusk'),
    alt: 'Contemporary home with large glazed rooms lit at dusk',
    demo: true,
    source: unsplash('1600585154340-be6161a56a0c'),
  },
  extensionFlatRoof: {
    src: work('extension-flat-roof-dark'),
    alt: 'Modern flat-roofed building with dark cladding and tall lit windows at dusk',
    demo: true,
    source: unsplash('1600585153490-76fb20a32601'),
  },
  extensionTimber: {
    src: work('extension-timber-clad'),
    alt: 'Modern house with a timber-clad entrance block and flat roofs',
    demo: true,
    source: unsplash('1600566753190-17f0baa2a6c3'),
  },
  extensionRender: {
    src: work('extension-render-timber'),
    alt: 'Rendered two-storey home with timber cladding and flat-roof sections',
    demo: true,
    source: unsplash('1600047509807-ba8f99d2cdde'),
  },
  renovationStripped: {
    src: work('renovation-stripped-walls'),
    alt: 'Room mid-renovation with walls stripped back to the structure',
    demo: true,
    source: unsplash('1517581177682-a085bb7ffb15'),
  },
  interiorOpenPlan: {
    src: work('interior-open-plan'),
    alt: 'Bright, finished open-plan living space with timber feature wall',
    demo: true,
    source: unsplash('1600607687939-ce8a6c25118c'),
  },
  interiorStairs: {
    src: work('interior-living-stairs'),
    alt: 'Finished living room with a timber staircase and large windows',
    demo: true,
    source: unsplash('1600566753086-00f18fb6b3ea'),
  },
  kitchen: {
    src: work('kitchen-island'),
    alt: 'Finished kitchen with an island, pendant lights and timber floor',
    demo: true,
    source: unsplash('1600585152220-90363fe7e115'),
  },
  bathroom: {
    src: work('bathroom-renovated'),
    alt: 'Renovated bathroom with a freestanding bath and dark tiled walls',
    demo: true,
    source: unsplash('1600566752355-35792bedcfea'),
  },
  carpentry: {
    src: work('carpentry-on-site'),
    alt: 'Builder measuring and cutting timber on site',
    demo: true,
    source: unsplash('1589939705384-5185137a7f0f'),
  },
  timberFrame: {
    src: work('timber-frame-builder'),
    alt: 'Builder working on a timber frame against a blue sky',
    demo: true,
    source: unsplash('1587582423116-ec07293f0395'),
  },
  buildingSite: {
    src: work('building-site-team'),
    alt: 'Builders reviewing work inside a building site with scaffolding',
    demo: true,
    source: unsplash('1591588582259-e675bd2e6088'),
  },
  insulation: {
    src: work('insulation-install'),
    alt: 'Insulation being fitted between timber studs',
    demo: true,
    source: unsplash('1607400201889-565b1ee75f8e'),
  },
  ladderWork: {
    src: work('exterior-ladder-work'),
    alt: 'Tradesmen on ladders working on the outside of a house',
    demo: true,
    source: unsplash('1574359411659-15573a27fd0c'),
  },
  glassHouseNight: {
    src: work('glass-house-night'),
    alt: 'Modern home with full-height glazing illuminated at night',
    demo: true,
    source: unsplash('1513584684374-8bab748fbf90'),
  },
} satisfies Record<string, MediaItem>;

export type MediaKey = keyof typeof media;
export const getMedia = (key: MediaKey): MediaItem => media[key];
