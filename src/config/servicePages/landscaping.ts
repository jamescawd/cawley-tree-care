/**
 * Landscaping services are the owner's confirmed list: garden design and
 * planting, lawns and turfing, patios and paving, fencing, garden
 * maintenance and garden clearance. No photographs of finished
 * landscaping projects exist yet, so this page uses genuine photos of
 * finished garden work, plus empty before/after slots (below) for the
 * owner's landscaping photos.
 */
import type { ServicePage } from './types';
import lawn from '@/assets/images/work/conifer-hedge-trimmed-beside-lawn.jpg';
import gravelled from '@/assets/images/work/border-cleared-and-gravelled.jpg';
import tidy from '@/assets/images/work/garden-tidy-after-tree-removal.jpg';
import laurel from '@/assets/images/work/laurel-hedge-after-cutting.jpg';

export const landscaping: ServicePage = {
  slug: 'landscaping',
  navLabel: 'Landscaping',
  teaser: 'Planting, lawns, paving, fencing and garden improvements.',
  services: ['landscaping'],
  seoTitle: "Landscaping & Garden Improvements in Athlone | Cawley's",
  description:
    'Garden design and planting, lawns, patios, paving, fencing and garden maintenance across Westmeath, Roscommon, Longford, Offaly and Galway. Free quotes.',

  hero: {
    eyebrow: 'Landscaping services',
    title: 'Landscaping, from the',
    accent: 'treeline',
    end: 'to the lawn.',
    intro:
      'Planting, lawns and turfing, patios and paving, fencing and garden maintenance, from the same team that looks after your trees. Across Westmeath, Roscommon, Longford, Offaly and Galway, with a free quotation first.',
    image: {
      src: lawn,
      alt: 'A sunlit lawn running alongside a long, neatly trimmed conifer hedge beside a white bungalow.',
      caption: 'A finished lawn and hedge line',
      focus: '50% 60%',
    },
  },

  overview: {
    title: 'One team for the',
    accent: 'whole garden',
    paragraphs: [
      'Landscaping often follows tree or hedge work: a tree comes out, a hedge is brought back, and suddenly there is space and light to do something with. When the same team has already worked in the garden, the landscaping follows on naturally.',
      'Whether it is a new lawn, a patio, planting, fencing or keeping the garden in order through the year, the work is done to the same standard as our tree care, with a clear price agreed before we start.',
    ],
    situationsTitle: 'Landscaping often follows',
    situations: [
      'A tree or hedge being removed, opening up the garden',
      'A garden or site clearance',
      'A new home with a garden that needs finishing',
      'An old lawn or patio that has seen better days',
      'Boundaries that need new fencing',
      'A garden that needs regular upkeep',
    ],
  },

  work: {
    title: 'Landscaping',
    accent: 'work we undertake',
    intro: 'Practical improvements that make a garden easier to use and enjoy.',
    items: [
      {
        title: 'Garden design & planting',
        text: 'Planning and planting beds, borders and new trees and shrubs.',
      },
      {
        title: 'Lawns & turfing',
        text: 'New lawns laid and tired ones brought back to life.',
      },
      {
        title: 'Patios & paving',
        text: 'Patios, paths and paved areas for a garden you can use all year.',
      },
      {
        title: 'Fencing',
        href: '/fencing',
        text: 'New boundary fencing and replacement of old or damaged panels.',
      },
      {
        title: 'Garden maintenance',
        text: 'Ongoing care to keep lawns, borders and hedges in order.',
      },
      {
        title: 'Garden clearance',
        href: '/site-clearance',
        text: 'Overgrown areas cleared first, ready for the new work.',
      },
    ],
  },

  why: 'Good landscaping starts with good ground, and that is where our tree and clearance work comes in. You get one experienced team from start to finish and a clear price up front.',

  photos: {
    title: 'Landscaping',
    accent: 'before and after',
    intro:
      'Before and after photos of landscaping jobs, followed by more finished garden work by the Cawley’s team.',
    items: [
      {
        src: gravelled,
        alt: 'A cleared border finished with fresh decorative gravel and a neat timber edge.',
        caption: 'A border finished with gravel and a timber edge',
        focus: '50% 60%',
      },
      {
        src: tidy,
        alt: 'A garden with a clear lawn, a pond and a tidy seating area under a blue sky.',
        caption: 'An open, tidy garden after tree work',
        focus: '50% 70%',
      },
      {
        src: laurel,
        alt: 'A laurel hedge cut back to a tidy, even shape.',
        caption: 'A tidy hedge line framing the garden',
      },
    ],
  },

  /**
   * Empty slots for the owner's landscaping photos. For each pair: add the
   * files to src/assets/images/work/, import them at the top, set `src` and
   * `alt`, and update the title/summary to describe the real job. Empty
   * pairs show as "Photo to come" in previews and are hidden at launch.
   */
  beforeAfter: {
    pairs: [
      { title: 'Patio and paving', before: {}, after: {} },
      { title: 'New lawn and turf', before: {}, after: {} },
      { title: 'Planting and borders', before: {}, after: {} },
      { title: 'Full garden makeover', before: {}, after: {} },
    ],
  },

  process: {
    title: 'How a landscaping job',
    accent: 'comes together',
    steps: [
      {
        title: 'Tell us your plans',
        text: 'What you would like the garden to be, even if it is only a rough idea.',
      },
      {
        title: 'Look at the space',
        text: 'Where needed we visit to see the garden and talk through what will work there.',
      },
      {
        title: 'Free quotation',
        text: 'A clear price for the agreed work, including any clearance or tree work first.',
      },
      {
        title: 'Garden transformed',
        text: 'The work is carried out to the agreed plan and the garden left clean and ready to enjoy.',
      },
    ],
  },

  areas:
    'Based in Athlone, we take on landscaping and garden work throughout Westmeath, Roscommon, Longford, Offaly and Galway',

  faqs: [
    {
      question: 'Can you do the tree work and the landscaping together?',
      answer:
        'Yes, and that is often the easiest way. Trees and hedges are dealt with first, then the garden is cleared and the landscaping carried out by the same team.',
    },
    {
      question: 'Do I need a full garden design before contacting you?',
      answer:
        'No. Many people start with a rough idea of what they want. We can talk it through with you and suggest what will work in the space.',
    },
    {
      question: 'Do you offer ongoing garden maintenance?',
      answer:
        'Yes. We can look after lawns, borders and hedges through the year to keep the garden in good order.',
    },
    {
      question: 'Can you put up fencing after a hedge is removed?',
      answer:
        'Yes. Removing an old hedge and fencing the boundary can be quoted as one job. See our fencing page for more.',
    },
    {
      question: 'How much does landscaping cost?',
      answer:
        'Every garden and plan is different, so there is no set price. Tell us what you have in mind, with a few photos of the space, and we will give you a free quotation.',
    },
    {
      question: 'Do you work in my area?',
      answer:
        'We take on landscaping and garden work throughout Westmeath, Roscommon, Longford, Offaly and Galway from our base in Athlone. If you are unsure whether we reach you, just ask.',
    },
  ],

  cta: {
    title: 'Let’s make the most of',
    accent: 'your garden',
    text: 'Tell us what you have in mind. We cover Westmeath, Roscommon, Longford, Offaly and Galway, and we will talk it through and give you a free, clear quotation.',
  },

  related: ['fencing', 'site-clearance', 'hedge-cutting', 'tree-removal'],
};
