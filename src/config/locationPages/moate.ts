import type { LocationPage } from './types';
import { snapped, drive, tripod, stacked } from './photos';

/**
 * Moate: DRAFT (not in live.json) until the owner supplies a real local job,
 * photo or review.
 *
 * RESEARCH NOTES (checked Nov 2026):
 * - Named for a Norman motte; the earthwork is still visible behind the main
 *   street. Quaker market town; Moate Castle stands back from Main Street.
 *   [Wikipedia; Lisney; Buildings of Ireland]
 * - Dún na Sí: 27-acre park reached directly from the Old Rail Trail.
 *   [dunnasi.ie; visitwestmeath.ie]
 * - Storm Éowyn, 24 Jan 2025: at least 15 trees down on the R446 between
 *   Kilbeggan and Moate; a large tree at the old Snowcream factory blocked
 *   the road. [Midlands 103 live blog, quoting Gardaí]
 * - Distance from Athlone (about 16 km) is approximate: owner to confirm.
 * - No council content (owner's instruction). No Cawley's job in Moate is claimed.
 */
export const moate: LocationPage = {
  slug: 'tree-surgeon-moate',
  town: 'Moate',
  seoTitle: "Tree Surgeons in Moate, Co. Westmeath | Cawley's Tree Care",
  description:
    'Tree surgeons for Moate, from next door in Athlone: roadside trees, ash dieback, hedges, removals and storm call-outs. Quotes cost nothing.',

  hero: {
    eyebrow: 'Moate, Co. Westmeath',
    title: 'Your nearest tree surgeons,',
    accent: 'one town over',
    intro:
      'Moate is the next town out the road from us. Trees along the old Dublin road, farm boundaries full of ash, hedges around the estates: it is all the kind of work we do, a short drive from home.',
    image: snapped,
  },

  intro: {
    title: 'Neighbours,',
    accent: 'near enough',
    paragraphs: [
      'From our base in Athlone, Moate is about 16 km east. That matters more than it sounds. When a tree is half down across your gate after a windy night, the firm that can actually get to you is the one down the road, and for Moate that is us.',
      'It also means we can call out to look at a job without making a production of it. So do not wait until it is urgent: ring, send a photo, or ask us to drop out.',
    ],
    facts: [
      'About 16 km from our Athlone base',
      '15+ years of tree work',
      'Insured',
      'Householders, farmers and businesses',
      'Free to quote',
      'Emergency calls taken 24/7',
    ],
  },

  local: {
    title: 'A town on',
    accent: 'the old road',
    paragraphs: [
      'Moate grew up along one long main street on the road from Dublin to Galway, and the old road, now the R446, still shapes the trees around it. For miles on either side it is lined with mature roadside ash, sycamore and beech, most of them standing on a farm ditch with their heads out over the tarmac.',
      'The morning Storm Éowyn passed, 24 January 2025, at least fifteen of those trees were lying across the R446 between Moate and Kilbeggan, and a big one at the old Snowcream factory shut the road at the edge of town. Nobody was surprised. Roadside trees take the wind side-on, their roots are cut on one side by the road, and a great many of the ash among them are dying.',
      'If you own the field, you own the trees on its ditch, and what they fall on is your concern. That is the conversation we have most often around Moate: which of the roadside trees are sound, which want weight taken off them, and which should come down before the wind decides.',
    ],
    points: [
      {
        title: 'Ash on the ditches',
        text: 'Ash dieback has gone through the hedgerows here like everywhere else in the Midlands. A dead ash is brittle and unpredictable to cut. Deal with the ones over roads, yards and wires first.',
      },
      {
        title: 'Along the greenway',
        text: 'The Old Rail Trail runs through the town past Dún na Sí. Gardens backing onto the old railway line often have self-seeded sycamore and willow on the bank that have never been touched.',
      },
      {
        title: 'Behind the main street',
        text: 'The old motte that gave the town its name still rises behind the buildings on the street. Trees in the gardens back there usually have to be climbed and brought out in pieces.',
      },
    ],
  },

  services: {
    title: 'The work we do',
    accent: 'around Moate',
    intro: 'For householders, farmers and businesses.',
    items: [
      {
        title: 'Roadside and boundary trees',
        text: 'Dead, leaning or overhanging trees along a road or lane taken down safely, in sections where they hang over the road.',
        href: '/tree-removal',
      },
      {
        title: 'When a tree comes down',
        text: 'A tree across a gateway, lane or shed. We are close; ring at any hour and we will tell you honestly how soon we can be there.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Hedges and ditches',
        text: 'Garden hedges trimmed and overgrown ones reduced. Tall conifer hedges brought down to a height you can manage.',
        href: '/hedge-cutting',
      },
      {
        title: 'Pruning',
        text: 'Branches lifted off a roof or clear of a driveway, crowns thinned to let light back into the garden.',
        href: '/tree-pruning',
      },
      {
        title: 'Clearing a site or an overgrown plot',
        text: 'Scrub, brambles and old hedging cleared and chipped, ready for building, fencing or grass.',
        href: '/site-clearance',
      },
    ],
  },

  jobsDone: {
    title: 'Recent work',
    accent: 'in Moate',
    intro: 'Real jobs from in and around the town will be shown here as we add them.',
    slots: [
      { title: 'Moate job to be added', photo: {} },
      { title: 'Moate job to be added', photo: {} },
      { title: 'Moate job to be added', photo: {} },
    ],
  },

  proof: {
    title: 'Our own',
    accent: 'photos',
    intro: 'Taken on our own jobs, not bought from a picture library.',
    photos: [drive, tripod, stacked],
  },

  advice: {
    title: 'Asked',
    accent: 'around Moate',
    intro: 'The questions that come up again and again.',
    faqs: [
      {
        question: 'Who is responsible for a tree that overhangs the public road?',
        answer:
          'The owner of the land it grows on. Under the Roads Act, landowners have to take reasonable care that their trees and hedges are not a danger to people using the road. If one of yours looks dead, is leaning out, or has a heavy limb over the carriageway, have it looked at.',
      },
      {
        question: 'I have a row of dying ash along a field. Do they all have to go at once?',
        answer:
          'No. We would walk the row with you and sort them: the ones over a road, wires or buildings first, the ones in the middle of nowhere last, or never. Doing a run of them in one visit is cheaper per tree than coming back for each.',
      },
      {
        question: 'Will you keep the timber for me?',
        answer:
          'Yes. Ash and beech are good firewood and it is yours. We can leave it in lengths, ring it up for splitting, or take it away if you have no use for it.',
      },
      {
        question: 'Can I have a field hedge cut in summer?',
        answer:
          'Generally not. Hedges and ditches are off limits by law between 1 March and 31 August because of nesting birds, unless there is a genuine road-safety reason. Book ordinary hedge cutting for the months from September to February.',
      },
    ],
  },

  nearby: {
    title: 'Around',
    accent: 'Moate',
    intro: 'We cover the villages and country all around the town.',
    groups: [
      { county: 'Westmeath', towns: ['Athlone', 'Kilbeggan', 'Ballymore', 'Glasson'] },
      { county: 'Offaly', towns: ['Clara', 'Ferbane'] },
    ],
  },

  cta: {
    title: 'Something leaning',
    accent: 'out over the road?',
    text: 'Give us a ring or WhatsApp a photo. We are only out the road and a price costs you nothing. If a tree is down, phone at any hour.',
  },
};
