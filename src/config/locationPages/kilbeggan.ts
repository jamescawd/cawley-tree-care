import type { LocationPage } from './types';
import { cutting, uprooted, laurel, tidy } from './photos';

/**
 * Kilbeggan: DRAFT (not in live.json) until the owner supplies a real local
 * job, photo or review.
 *
 * RESEARCH NOTES (checked Nov 2026):
 * - The River Brosna runs through the town and still turns the waterwheel at
 *   the distillery (1757). [tourism sources; distillery]
 * - The Kilbeggan branch of the Grand Canal is disused; the harbour basin
 *   beside the town is restored and a greenway walk follows the old line.
 *   [gps-routes; canalplan]
 * - Kilbeggan Racecourse is just outside the town (general knowledge).
 * - Storm Éowyn, 24 Jan 2025: at least 15 trees down on the R446 between
 *   Kilbeggan and Moate. [Midlands 103, quoting Gardaí]
 * - Distance from Athlone (about 32 km, M6 junction 5) is approximate: owner
 *   to confirm.
 * - No council content. No Cawley's job in Kilbeggan is claimed.
 */
export const kilbeggan: LocationPage = {
  slug: 'tree-surgeon-kilbeggan',
  town: 'Kilbeggan',
  seoTitle: "Tree Surgeons in Kilbeggan | Cawley's Tree Care",
  description:
    'Tree work in Kilbeggan: riverside and canal-bank trees, big boundary trees, hedges, stumps and storm damage. Fully insured, with free quotations.',

  hero: {
    eyebrow: 'Kilbeggan, Co. Westmeath',
    title: 'Tree work in',
    accent: 'Kilbeggan',
    end: 'done properly',
    intro:
      'A small town with a river through the middle, an old canal at its side and big trees all round it. We look after the lot, from a willow hanging over the Brosna to a row of leylandii at the back of an estate.',
    image: cutting,
  },

  intro: {
    title: 'Straight down',
    accent: 'the motorway',
    paragraphs: [
      'Kilbeggan sits where the M6 meets the road to Mullingar and Tullamore, about 32 km from our base in Athlone. It is a quick run on the motorway, so coming to look at a tree is no trouble.',
      'We have been at this for over fifteen years and we are fully insured. You will get a plain opinion on what the tree needs, a clear price before any work, and a garden left cleaner than we found it.',
    ],
    facts: [
      'About 32 km from Athlone on the M6',
      'Over fifteen years at it',
      'A fully insured team',
      'A clear price first, at no cost',
      'Open Monday to Saturday, 8am to 6pm',
      '24/7 number for fallen trees',
    ],
  },

  local: {
    title: 'Water on two sides,',
    accent: 'and what grows beside it',
    paragraphs: [
      'The Brosna comes through Kilbeggan with enough force that it still turns the waterwheel at the distillery, as it has since the 1750s. Just east of the town is the harbour at the end of the old Grand Canal branch, restored now, with the dry canal line running away from it as a walk. Rivers and canals mean the same thing to us: alder, willow and poplar.',
      'Those are fast, thirsty, short-lived trees. A willow can put on two metres in a year and split under its own weight in a breeze. Alder along a bank looks solid until the river has undercut it. If your garden runs down to the water or backs onto the old canal, the trees on that side want cutting back on a cycle, every few years, well before they are a problem. Left alone they end up in the river, on the fence or on the shed.',
      'Out the Moate road it is a different story: tall roadside beech and ash on farm boundaries. Fifteen or more of them were down across the R446 between here and Moate after Storm Éowyn in January 2025. The ones still standing took the same wind.',
    ],
  },

  services: {
    title: 'What we are',
    accent: 'asked to do',
    intro: 'Each links to more detail.',
    items: [
      {
        title: 'Cutting back riverside trees',
        text: 'Willow and alder reduced or pollarded so they stay a sensible size and stop shedding limbs.',
        href: '/tree-pruning',
      },
      {
        title: 'Removing a tree',
        text: 'Dead, dangerous or in the wrong place. Near a house, bank or boundary it is taken down in sections.',
        href: '/tree-removal',
      },
      {
        title: 'Getting rid of the stump',
        text: 'Old stumps ground out where the site suits it, so the ground can be used again.',
        href: '/stump-grinding',
      },
      {
        title: 'Hedges',
        text: 'Annual trims, and overgrown laurel and conifer hedges brought back down.',
        href: '/hedge-cutting',
      },
      {
        title: 'After a storm',
        text: 'Fallen and hanging trees made safe and cleared. Ring any time.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Fencing and garden work',
        text: 'A new fence where a hedge came out, or the garden put right after the tree work.',
        href: '/landscaping',
      },
    ],
  },

  jobsDone: {
    title: 'Jobs',
    accent: 'in Kilbeggan',
    intro: 'We will add photos and notes from real jobs around the town here.',
    slots: [
      { title: 'Kilbeggan job to be added', photo: {} },
      { title: 'Kilbeggan job to be added', photo: {} },
    ],
  },

  proof: {
    title: 'What our work',
    accent: 'looks like',
    intro: 'A few of our own photos showing the sort of job described on this page.',
    photos: [uprooted, laurel, tidy],
  },

  advice: {
    title: 'Before you',
    accent: 'ring us',
    intro: 'A few things worth knowing.',
    faqs: [
      {
        question: 'A tree on my river bank is leaning over the water. Is that a problem?',
        answer:
          'Willows and alders lean towards light and water naturally, so a lean on its own is not alarming. What matters is change: fresh cracks in the soil behind the tree, exposed roots on the bank side, or a lean that is clearly worse than last year. Send us a photo taken from the side and we can usually tell you a lot from that.',
      },
      {
        question: 'What is pollarding, and would it suit my willow?',
        answer:
          'Pollarding means cutting a tree back to the same points on the trunk every few years, so it regrows as a compact head instead of a tall, heavy crown. Willow takes it very well. It is the traditional way to keep a riverside willow for decades without it falling apart.',
      },
      {
        question: 'Can you work in a garden with no vehicle access?',
        answer:
          'Yes. Most tree work is done by climbing, and the branches are carried or dragged out. Tell us about the access when you ring so we can allow for it in the price.',
      },
      {
        question: 'Do you cover the country around Kilbeggan?',
        answer:
          'Yes: Tyrrellspass, Rochfortbridge, Milltownpass, Ballymore, and across into Offaly at Clara and Tullamore.',
      },
      {
        question: 'How do I get a price?',
        answer:
          'Send two or three photos on WhatsApp showing the whole tree and what is around it. For most jobs we can give a firm price from that; for bigger ones we will come and look. Either way it costs nothing.',
      },
    ],
  },

  nearby: {
    title: 'Around',
    accent: 'Kilbeggan',
    intro: 'Also covered from the same road.',
    groups: [
      {
        county: 'Westmeath',
        towns: ['Tyrrellspass', 'Rochfortbridge', 'Milltownpass', 'Moate', 'Mullingar'],
      },
      { county: 'Offaly', towns: ['Clara', 'Tullamore'] },
    ],
  },

  cta: {
    title: 'Got a tree by the',
    accent: 'river or the road?',
    text: 'Two or three photos on WhatsApp will usually get you a price the same way a visit would. Asking is free, and for emergencies the phone is on 24/7.',
  },
};
