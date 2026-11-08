import type { ServicePage } from './types';
import cutting from '@/assets/images/work/arborist-cutting-trunk-section.jpg';
import pruning from '@/assets/images/work/arborist-pruning-at-height.jpg';
import dismantling from '@/assets/images/work/sectional-dismantling-beside-building.jpg';
import reduced from '@/assets/images/work/mature-tree-reduced-to-trunk.jpg';
import climber from '@/assets/images/work/climber-in-mature-tree-by-stone-wall.jpg';

export const treeSurgery: ServicePage = {
  slug: 'tree-surgery',
  navLabel: 'Tree Surgery',
  teaser: 'All-round tree care, from pruning and deadwood to removal.',
  services: ['tree-surgery'],
  seoTitle: "Tree Surgery in Westmeath & the Midlands | Cawley's",
  description:
    'Tree surgery across Westmeath, Roscommon, Longford, Offaly and Galway: pruning, crown reduction, deadwood and removal. 15+ years, fully insured. Free quotes.',

  hero: {
    eyebrow: 'Tree surgery',
    title: 'Experienced tree surgeons,',
    accent: 'based in Athlone',
    intro:
      'Pruning, crown reduction, deadwood and tree removal for homes and businesses across Westmeath, Roscommon, Longford, Offaly and Galway. One experienced team, honest advice and a free quotation before any work starts.',
    image: {
      src: cutting,
      alt: "A Cawley's arborist in a harness and visor cutting a section from a tree trunk, sawdust drifting against a clear blue sky.",
      caption: 'Working at height in harness and visor',
      focus: '50% 28%',
    },
  },

  overview: {
    title: 'Care for the tree,',
    accent: 'and for what is around it',
    paragraphs: [
      'Trees add a great deal to a home or property, but they grow, age and get damaged by weather. Tree surgery covers the work that keeps them in good order: reducing and thinning crowns, taking out dead or dangerous wood, and, when there is no better option, removing a tree completely.',
      'Every job starts with the tree itself: its condition, what it is close to and what you want from it. We will give you an honest view, including when a tree is best left alone, and a clear quotation before any work begins.',
    ],
    situationsTitle: 'People ask us about',
    situations: [
      'Trees that have grown too large for their space',
      'Dead branches or a tree that looks unwell',
      'Overhanging limbs above roofs, roads or footpaths',
      'Storm damage, splits or a tree starting to lean',
      'Trees affecting light, gutters or overhead lines',
      'A tree that needs to come down altogether',
    ],
  },

  work: {
    title: 'Tree surgery',
    accent: 'services',
    intro:
      'One team for the full range of tree work, with dedicated pages for the most common jobs.',
    items: [
      {
        title: 'General tree care',
        text: 'An honest look at your trees and practical advice on what, if anything, they need.',
      },
      {
        title: 'Pruning & crown reduction',
        href: '/tree-pruning',
        text: 'Reducing, thinning and shaping crowns so trees are smaller, lighter and safer.',
      },
      {
        title: 'Deadwood removal',
        href: '/tree-pruning',
        text: 'Taking out dead and broken branches before they fall on people, cars or roofs.',
      },
      {
        title: 'Tree removal',
        href: '/tree-removal',
        text: 'Felling or sectional dismantling where a tree has to go, with timber dealt with as agreed. Stumps can be ground out too.',
      },
      {
        title: 'Storm-damaged trees',
        href: '/emergency-tree-services',
        text: 'Making split, leaning and fallen trees safe, then clearing them away.',
      },
      {
        title: 'Ongoing tree maintenance',
        text: 'Regular work to keep trees on a property in good order and clear of buildings and lines.',
      },
    ],
  },

  why: 'Trees near homes and buildings deserve careful, experienced hands. You get a team that has been doing this for over fifteen years, fully insured, with a clear price up front.',

  photos: {
    title: 'Tree surgery from',
    accent: 'our own jobs',
    intro: 'Genuine photographs of tree surgery carried out by the Cawley’s team.',
    items: [
      {
        src: dismantling,
        alt: 'A climber roped high in a large sycamore, dismantling it in sections directly beside a timber building.',
        caption: 'Dismantling a tree beside a building',
        focus: '50% 35%',
      },
      {
        src: pruning,
        alt: 'An arborist in a harness and helmet pruning among the upper branches of a tree.',
        caption: 'Pruning in the upper crown',
        focus: '50% 40%',
      },
      {
        src: reduced,
        alt: 'A tree reduced to its main trunk with rigging ropes in place and logs cut on the ground.',
        caption: 'A large tree reduced in sections',
        focus: '50% 40%',
      },
      {
        src: climber,
        alt: 'A climber high in a large mature tree beside a stone wall, with a ground worker below.',
        caption: 'Climbing a mature tree beside a stone wall',
        focus: '50% 35%',
      },
    ],
  },

  process: {
    title: 'How it',
    accent: 'works',
    steps: [
      {
        title: 'Get in touch',
        text: 'Call us or send a quote request. Photos of the tree help us understand the job.',
      },
      {
        title: 'Assessment',
        text: 'Where needed we look at the tree and talk you through the options, including whether less work would do.',
      },
      {
        title: 'Clear quotation',
        text: 'A free, clear quotation for the agreed work, so you know exactly what to expect.',
      },
      {
        title: 'Work completed',
        text: 'The work is done carefully on the agreed day and the site is left clean.',
      },
    ],
  },

  areas:
    'From our base in Athlone we carry out tree surgery throughout Westmeath, Roscommon, Longford, Offaly and Galway',

  faqs: [
    {
      question: 'What does a tree surgeon actually do?',
      answer:
        'A tree surgeon looks after trees: pruning, reducing and thinning crowns, removing dead or dangerous wood, dealing with storm damage and, where necessary, taking trees down safely. Much of the work is done by climbing into the tree.',
    },
    {
      question: 'Will you tell me if a tree does not need any work?',
      answer:
        'Yes. Not every tree needs work, and sometimes a light prune is all that is required instead of removal. We will give you an honest view of what the tree needs.',
    },
    {
      question: 'How much does tree surgery cost?',
      answer:
        'It depends on the tree: its size, condition, what it is close to and how easy it is to reach. Quotations are free, so the quickest way to find out is to send us a few photos of the tree or ask us to come and look.',
    },
    {
      question: 'Which areas do you cover?',
      answer:
        'We are based in Athlone, Co. Westmeath, and carry out tree surgery across Westmeath, Roscommon, Longford, Offaly and Galway, including towns such as Mullingar, Moate, Roscommon Town, Boyle, Longford Town, Tullamore, Birr, Ballinasloe and Galway City. If your town is not listed, ask us: we may still be able to help.',
    },
    {
      question: 'Do I need permission for tree work?',
      answer:
        'It depends on the tree and where it is. Some trees are protected, for example by a Tree Preservation Order or planning condition, or because the property is in an Architectural Conservation Area. If you are unsure, check with your county council before work is booked. We cannot give legal or planning advice.',
    },
    {
      question: 'Do you clear up afterwards?',
      answer:
        'Yes. Branches can be chipped on site, timber cut into logs and stacked, or everything taken away, as agreed in the quotation. The site is left clean and tidy.',
    },
  ],

  cta: {
    title: 'Talk to a',
    accent: 'tree surgeon',
    end: 'about your trees',
    text: 'Call us, or send a few photos with a quote request. We cover Westmeath, Roscommon, Longford, Offaly and Galway, and every quotation is free.',
  },

  localPage: { href: '/tree-surgeon-athlone', label: 'Tree surgeons in Athlone' },
  related: ['tree-pruning', 'tree-removal', 'stump-grinding', 'emergency-tree-services'],
};
