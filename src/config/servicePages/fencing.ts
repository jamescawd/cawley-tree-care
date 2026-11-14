/**
 * Fencing is on the owner's confirmed landscaping list ("fencing"; new
 * boundary fencing and replacement of old or damaged fencing). Fence types,
 * materials and heights are NOT confirmed, so none are claimed here.
 *
 * PHOTOS: no fencing photos exist yet. The hero uses a genuine photo of a
 * boundary cleared of hedging, captioned as exactly that. The before/after
 * pairs below are empty slots for the owner's photos: add each file to
 * src/assets/images/work/, import it here, set `src` and `alt`, and update
 * the pair's title/summary to describe the real job. Empty pairs show as
 * "Photo to come" in previews and are hidden on the launched site.
 */
import type { ServicePage } from './types';
import boundary from '@/assets/images/work/beech-hedge-after-reduction.jpg';

export const fencing: ServicePage = {
  slug: 'fencing',
  navLabel: 'Fencing',
  teaser: 'New boundary fencing and replacement of old or damaged fences.',
  services: ['fencing'],
  seoTitle: "Fencing & Boundary Fences in Athlone & Westmeath | Cawley's",
  description:
    'New boundary fencing and replacement of old or damaged fences across Westmeath, Roscommon, Longford, Offaly and Galway. Hedges cleared first if needed.',

  hero: {
    eyebrow: 'Fencing',
    title: 'Fencing that finishes the',
    accent: 'boundary',
    end: 'properly.',
    intro:
      'New boundary fencing and replacement of old or damaged fences, from the team that can also clear the hedge or trees in the way first. Across Westmeath, Roscommon, Longford, Offaly and Galway, with a free quotation first.',
    image: {
      src: boundary,
      alt: 'A gravel driveway after an overgrown beech hedge was cleared, opening the boundary to the road.',
      caption: 'A boundary cleared of overgrown hedging',
      focus: '45% 60%',
    },
  },

  overview: {
    title: 'A boundary you can',
    accent: 'rely on',
    paragraphs: [
      'A fence marks your boundary, keeps children and pets in, and gives the garden privacy and a finished look. When it is leaning, broken or simply old, it lets the whole garden down.',
      'We put up new boundary fencing and replace fences that are past repair. Because we also cut and remove hedges and trees, the whole job can be done by one team: an old hedge or a fallen tree cleared first, then the new fence put in, and the site left tidy.',
    ],
    situationsTitle: 'Fencing jobs we are asked about',
    situations: [
      'An old fence that is leaning, rotten or broken',
      'Fencing damaged by a storm or a fallen tree',
      'A new boundary after an overgrown hedge is removed',
      'A new garden or site that needs its boundary finished',
      'More privacy for a garden or patio area',
      'Fencing as part of a wider landscaping job',
    ],
  },

  work: {
    title: 'Fencing',
    accent: 'work we undertake',
    intro: 'Fencing on its own, or as part of hedge, tree or landscaping work in the same garden.',
    items: [
      {
        title: 'New boundary fencing',
        text: 'New fences along garden and property boundaries.',
      },
      {
        title: 'Replacing old fencing',
        text: 'Old, rotten or broken fencing taken down and replaced.',
      },
      {
        title: 'Storm-damaged fencing',
        text: 'Fallen trees cleared first, then the damaged fencing replaced.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Hedge removed, fence put in',
        text: 'An unwanted hedge taken out and the boundary fenced, quoted as one job.',
        href: '/hedge-cutting',
      },
      {
        title: 'Part of a landscaping job',
        text: 'Fencing alongside planting, lawns and paving for a finished garden.',
        href: '/landscaping',
      },
      {
        title: 'Residential & commercial',
        text: 'Fencing for homes as well as business premises and sites.',
      },
    ],
  },

  why: 'A fence is only as good as the work that goes into it. You get an experienced, fully insured team, a clear price up front and a site left clean.',

  photos: {
    title: 'Fencing',
    accent: 'before and after',
    intro:
      'Before and after photos of fencing jobs by the Cawley’s team. More photos are being added.',
    items: [],
  },

  beforeAfter: {
    pairs: [
      { title: 'New boundary fence', before: {}, after: {} },
      { title: 'Old fencing replaced', before: {}, after: {} },
      { title: 'Hedge removed and fenced', before: {}, after: {} },
      { title: 'Storm-damaged fencing replaced', before: {}, after: {} },
    ],
  },

  process: {
    title: 'How a fencing job',
    accent: 'works',
    steps: [
      {
        title: 'Tell us about the boundary',
        text: 'Roughly how long it is, what is there now, and a photo or two.',
      },
      {
        title: 'We look at the site',
        text: 'Where needed we visit to measure up and check what needs clearing first.',
      },
      {
        title: 'Free quotation',
        text: 'One clear price, including any hedge or tree removal and taking the old fence away.',
      },
      {
        title: 'Fence put in',
        text: 'The new fencing goes in on the agreed day and the site is left tidy.',
      },
    ],
  },

  areas:
    'From our base in Athlone we put up and replace fencing throughout Westmeath, Roscommon, Longford, Offaly and Galway',

  faqs: [
    {
      question: 'Can you remove an old hedge and put up a fence instead?',
      answer:
        'Yes. The hedge is cut and removed, the ground cleared, and the new fence put in, all quoted as one job by the same team.',
    },
    {
      question: 'Can you replace fencing damaged by a fallen tree?',
      answer:
        'Yes. We make the tree safe and clear it first, then quote for replacing the damaged fencing. If your home insurance may cover the damage, check with your insurer and take photos before work starts.',
    },
    {
      question: 'Will you take the old fence away?',
      answer:
        'Removing and taking away the old fencing can be included in the quotation, so you are left with a clean site.',
    },
    {
      question: 'Do I need planning permission for a fence?',
      answer:
        'Many garden fences do not, but it depends on the height, where the fence is (front or rear) and the property, and some properties have extra restrictions. If you are unsure, check with your county council before work is booked. We cannot give legal or planning advice.',
    },
    {
      question: 'How much does fencing cost?',
      answer:
        'It depends mainly on the length of the boundary, what has to be cleared or removed first and the access. Quotations are free, so send us a few photos and a rough length, or ask us to come and look.',
    },
    {
      question: 'Which areas do you cover?',
      answer:
        'We are based in Athlone, Co. Westmeath, and put up fencing throughout Westmeath, Roscommon, Longford, Offaly and Galway. If you are unsure whether we reach you, just ask.',
    },
  ],

  cta: {
    title: 'Need a new',
    accent: 'fence?',
    text: 'Tell us about the boundary, with a photo or two. We cover Westmeath, Roscommon, Longford, Offaly and Galway, and every quotation is free.',
  },

  related: ['landscaping', 'hedge-cutting', 'site-clearance', 'tree-removal'],
};
