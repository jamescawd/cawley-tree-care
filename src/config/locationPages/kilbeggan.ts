import type { LocationPage } from './types';
import { cutting, uprooted, laurel, tidy } from './photos';
import kbBefore from '@/assets/images/work/tree-beside-garage-and-fence-before-removal.jpg';
import kbAfter from '@/assets/images/work/garden-corner-clear-after-tree-removal.jpg';

/**
 * Kilbeggan: has a genuine local job (see jobsDone).
 *
 * Local notes are kept to what affects tree work: the River Brosna and the
 * old canal branch beside the town (riverside willow and alder). Distance
 * (about 32 km on the M6) to be confirmed by the owner. No council content.
 */
export const kilbeggan: LocationPage = {
  slug: 'tree-surgeon-kilbeggan',
  town: 'Kilbeggan',
  seoTitle: "Tree Surgeons in Kilbeggan | Cawley's Tree Care",
  description:
    'Tree work in Kilbeggan: tree removal, pruning and pollarding, hedges, stump grinding and storm clear-ups. Fully insured, with free quotations.',

  hero: {
    eyebrow: 'Kilbeggan, Co. Westmeath',
    title: 'Tree work in',
    accent: 'Kilbeggan',
    intro:
      'Tree removal, pruning and pollarding, hedge cutting, stump grinding and storm clear-ups for Kilbeggan and the surrounding area. Fully insured, with a clear price before any work begins.',
    image: cutting,
  },

  intro: {
    title: 'Straightforward',
    accent: 'tree surgery',
    paragraphs: [
      'Tell us what is bothering you about a tree and send a photo or two. We will explain what we recommend and why, and give you a price. Most garden jobs can be quoted from photos; for bigger ones we will come and look.',
      'Our team has more than fifteen years of experience, and every job is covered by our insurance. Branches are chipped, timber is left or taken away as you prefer, and the garden is left tidy.',
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

  services: {
    title: 'What we are',
    accent: 'asked to do',
    intro: 'Each links to more detail.',
    items: [
      {
        title: 'Removing a tree',
        text: 'Dead, dangerous or in the wrong place. Near a house, bank or boundary it is taken down in sections.',
        href: '/tree-removal',
      },
      {
        title: 'Cutting back and pollarding',
        text: 'Willow, alder and other fast growers reduced or pollarded so they stay a sensible size.',
        href: '/tree-pruning',
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
        title: 'Storm damage cleared',
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

  local: {
    title: 'Trees by',
    accent: 'the water',
    paragraphs: [
      'Gardens near the River Brosna and the old canal line often have willow and alder along the bank. They grow quickly, and in wet ground they can split or drop limbs, so they are best cut back every few years instead of being left until they become a problem.',
    ],
  },

  // Genuine job in Kilbeggan (photos supplied and location confirmed by the
  // owner, Nov 2026).
  jobsDone: {
    title: 'Jobs',
    accent: 'in Kilbeggan',
    intro: 'A tall tree taken down in a back garden in Kilbeggan.',
    slots: [
      {
        title: 'Before: tight against the garage',
        summary:
          'A tall tree growing in the corner of the garden, right beside a garage and a new timber fence, and overhanging both.',
        photo: {
          src: kbBefore,
          alt: 'A tall bare tree in the corner of a back garden, beside a white garage and a new timber fence, with houses behind.',
          focus: '50% 40%',
        },
      },
      {
        title: 'After: the corner cleared',
        summary:
          'The tree taken down without touching the garage or the fence, and the corner of the garden left clear.',
        photo: {
          src: kbAfter,
          alt: 'The same corner of the garden after the tree was removed, clear beside the garage and the timber fence.',
          focus: '50% 60%',
        },
      },
    ],
  },

  proof: {
    title: 'What our work',
    accent: 'looks like',
    intro: 'A few of our own photos showing the sort of jobs listed above.',
    photos: [uprooted, laurel, tidy],
  },

  advice: {
    title: 'Before you',
    accent: 'ring us',
    intro: 'A few things worth knowing.',
    faqs: [
      {
        question: 'A tree on my river bank is leaning over the water. Should I be worried?',
        answer:
          'Willow and alder lean towards light and water naturally, so a lean on its own is not alarming. What matters is change: fresh cracks in the soil behind the tree, roots exposed on the bank, or a lean that is clearly worse than last year. A photo taken from the side tells us a lot.',
      },
      {
        question: 'What is pollarding, and would it suit my willow?',
        answer:
          'Pollarding means cutting a tree back to the same points on the trunk every few years, so it regrows as a compact head instead of a tall, heavy crown. Willow takes it very well, and it keeps a riverside tree manageable for decades.',
      },
      {
        question: 'How do I get a price?',
        answer:
          'Send two or three photos on WhatsApp showing the whole tree and what is around it. For most jobs we can give a firm price from that; for bigger ones we will come and look. Either way it costs nothing.',
      },
      {
        question: 'Do you cover the area around Kilbeggan?',
        answer:
          'Yes: Tyrrellspass, Rochfortbridge, Milltownpass, Ballymore, and across into Offaly at Clara and Tullamore.',
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
    title: 'Get a price for',
    accent: 'your tree',
    text: 'Two or three photos on WhatsApp will usually get you a price as reliably as a visit. Asking is free, and for emergencies the phone is on 24/7.',
  },
};
