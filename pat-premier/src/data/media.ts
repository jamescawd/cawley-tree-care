import type { ImageMetadata } from 'astro';

/**
 * Image registry
 * --------------
 * Every photograph on the site is referenced by key from here. All photos are
 * Pat Premier's own job photos (src/assets/work/), resized to 1600px and with
 * location data removed. To swap or add one:
 *
 *   1. Put the photo in src/assets/work/ (e.g. src/assets/work/naas-reroof.jpg)
 *   2. Add or update a key below with a factual `alt` describing what is shown.
 *
 * `demo: true` would mark a stock placeholder (labelled on the site). None are
 * in use now; keep the flag for any future placeholder.
 */
export interface MediaItem {
  src: ImageMetadata;
  alt: string;
  demo: boolean;
  /** Where the file came from (audit trail). */
  source: string;
  /** Optional focal point for object-position, e.g. '50% 30%'. */
  focus?: string;
}

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/work/*.jpg', { eager: true });
const work = (name: string): ImageMetadata => {
  const file = files[`../assets/work/${name}.jpg`];
  if (!file) throw new Error(`Missing image: src/assets/work/${name}.jpg`);
  return file.default;
};
const own = (file: string, alt: string, focus?: string): MediaItem => ({
  src: work(file),
  alt,
  demo: false,
  source: 'Pat Premier job photo',
  ...(focus ? { focus } : {}),
});

export const media = {
  // ── Roofing ──────────────────────────────────────────────────────────
  slateReroof: own(
    'slate-reroof-old-and-new',
    'Roof being re-slated: rows of new slates fitted over fresh underlay and battens beside the old mossy slates still to come off',
    '60% 55%',
  ),
  slateFixing: own('slate-roof-being-fixed', 'New slates being fixed over green roofing membrane and battens', '60% 55%'),
  videoReroofBefore: own(
    'video-reroof-before',
    'Old sagging roof stripped back to the battens, with broken slates on the old felt',
  ),
  videoReroofAfter: own('video-reroof-after', 'The same roof finished in new slate'),
  flatRoofFinished: own(
    'flat-roof-grp-finished',
    'Finished light-grey GRP flat roof on an extension, with new trims, fascia and gutter',
    '50% 55%',
  ),
  flatRoofDeck: own(
    'flat-roof-grp-deck-joints',
    'Flat roof deck of new boards with every joint reinforced before the GRP top coat',
  ),
  tiledRoofBefore: own(
    'tiled-roof-before',
    'Two-storey house with a mossy, weathered concrete tiled roof before work began',
    '50% 40%',
  ),
  rooferStrippingTiles: own(
    'roofer-stripping-tiles',
    'Pat Premier roofer in hi-vis working on a tiled roof beside the chimney, ladder to the eaves',
    '45% 30%',
  ),
  reroofMembraneChimney: own(
    'reroof-membrane-chimney',
    'Tiled roof part-stripped, with new breathable membrane and battens around the chimney and its lead flashing',
    '50% 45%',
  ),
  reroofMembraneBattens: own(
    'reroof-membrane-battens',
    'New breathable roofing membrane and timber battens fixed across a roof ready for the new covering',
  ),
  reroofBattensBrown: own(
    'reroof-battens-brown-membrane',
    'Roof re-battened over new membrane, with the old tiles stacked at the ridge',
  ),
  fasciaBefore: own(
    'fascia-rotten-before',
    'Rotten timber fascia and rafter ends at the corner of a pebble-dashed house before repair',
    '60% 40%',
  ),
  fasciaNewTimber: own(
    'fascia-new-timber',
    'Rotten rafter ends cut back and rebuilt in new timber at the eaves corner',
    '50% 35%',
  ),
  fasciaFitting: own(
    'fascia-fitting',
    'Roofer on a ladder fixing a new fascia board, protective film still on, along the eaves',
    '40% 45%',
  ),
  metalRoofSheets: own('metal-roof-sheets', 'New corrugated metal roof sheets fixed down, with tools on the roof'),
  feltRoofBefore: own(
    'felt-roof-before',
    'Old failing felt roof on a block outbuilding, edges perished and timbers exposed',
  ),

  // ── Building ─────────────────────────────────────────────────────────
  extensionBlockwork: own(
    'extension-blockwork-door-window',
    'New block-built rear extension with a fitted window and glazed door, fascia and gutter in place',
    '50% 55%',
  ),
  extensionJoistsSteel: own(
    'extension-flat-roof-joists-steel',
    'Extension under construction: new flat roof joists over a steel beam above a new composite door',
    '50% 40%',
  ),
  extensionFlatRoofFascia: own(
    'extension-flat-roof-fascia',
    'Block extension with its flat roof and fascia on, ladders in place for the next stage',
    '50% 45%',
  ),
  extensionWallPlate: own(
    'extension-wall-plate',
    'New blockwork walls topped with a timber wall plate, tying in to the existing roof',
    '40% 40%',
  ),
  extensionRafters: own('extension-rafters', 'New roof rafters going up over block walls, timber being cut on site', '45% 30%'),
  foundations: own(
    'foundations-block-delivery',
    'Concrete strip foundations poured, with pallets of blocks delivered by crane lorry',
    '45% 55%',
  ),
  floorSlab: own(
    'floor-slab-poured',
    'Freshly poured concrete floor slab laid over a damp-proof membrane inside new blockwork',
  ),
  dpmLaid: own('dpm-laid', 'Damp-proof membrane laid out on site, with pallets of blocks ready', '45% 45%'),
  concreteScreeding: own('concrete-screeding', 'Fresh concrete being finished with a bull float outside a back door'),
  patioBase: own('patio-base-compacting', 'Back garden area dug out, with a compacted stone base and plate compactor'),
  drivewayBase: own('driveway-stone-base', 'Front driveway dug out and laid with a compacted stone base'),
  gardenWallDemolished: own(
    'garden-wall-demolished',
    'Old brick front garden wall taken down, with the rubble cleared to one side',
  ),

  // ── Interiors ────────────────────────────────────────────────────────
  mediaWallFrame: own(
    'media-wall-timber-frame',
    'Timber stud frame for a media wall built across a living room wall, with the niches marked out',
  ),
  mediaWallBoarded: own(
    'media-wall-boarded',
    'Media wall boarded in plasterboard, with recessed niches, corner beads and cables run in',
  ),
  flooringUnderlay: own('flooring-underlay', 'Foil-faced underlay being rolled out on a clean concrete floor'),
  laminateFlooring: own(
    'laminate-flooring-laying',
    'Grey oak-effect water-resistant laminate flooring being laid over underlay',
    '50% 45%',
  ),
  knockThroughBefore: own(
    'knock-through-before',
    'Kitchen wall marked and chased before being opened up into the living room',
  ),
  knockThroughPropped: own(
    'knock-through-propped',
    'Wall opened up between kitchen and living room, with temporary support in place',
    '50% 45%',
  ),
  knockThroughOpening: own(
    'knock-through-opening',
    'New opening formed between living room and kitchen, ready for finishing',
    '55% 50%',
  ),
  knockThroughOpeningKitchen: own(
    'knock-through-opening-kitchen',
    'Wide new opening looking through into the kitchen from the living room',
    '55% 50%',
  ),
  plasteredRoom: own('plastered-room', 'Room freshly plastered from floor to ceiling, with new downlights'),
} satisfies Record<string, MediaItem>;

export type MediaKey = keyof typeof media;
export const getMedia = (key: MediaKey): MediaItem => media[key];
