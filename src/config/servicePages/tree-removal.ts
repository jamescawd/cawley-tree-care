import type { ServicePage } from './types';
import garageBefore from '@/assets/images/work/tree-beside-garage-and-fence-before-removal.jpg';
import garageAfter from '@/assets/images/work/garden-corner-clear-after-tree-removal.jpg';
import boundaryBefore from '@/assets/images/work/trees-along-rural-boundary-fence-before.jpg';
import boundaryAfter from '@/assets/images/work/boundary-opened-up-after-tree-removal.jpg';
import rowBefore from '@/assets/images/work/ballinasloe-row-of-tall-conifers-by-wall-before.jpg';
import rowAfter from '@/assets/images/work/ballinasloe-conifers-removed-wall-clear.jpg';
import tallBefore from '@/assets/images/work/longford-tall-trees-among-conifers-before.jpg';
import tallAfter from '@/assets/images/work/longford-tall-trees-removed-timber-in-rounds.jpg';
import pairBefore from '@/assets/images/work/longford-two-conifers-in-back-garden-before.jpg';
import pairAfter from '@/assets/images/work/longford-taller-conifer-removed-one-kept.jpg';
import cornerBefore from '@/assets/images/work/longford-tall-conifer-in-garden-before.jpg';
import cornerAfter from '@/assets/images/work/longford-conifer-down-logs-stacked.jpg';
import houseBefore from '@/assets/images/work/longford-climber-in-tall-tree-beside-house.jpg';
import houseAfter from '@/assets/images/work/longford-tall-tree-gone-garden-clear.jpg';
import fallenBefore from '@/assets/images/work/fallen-tree-across-garden-path.jpg';
import fallenAfter from '@/assets/images/work/garden-path-clear-after-fallen-tree-removed.jpg';
import dismantling from '@/assets/images/work/sectional-dismantling-beside-building.jpg';
import before from '@/assets/images/work/mature-tree-before-removal.jpg';
import reduced from '@/assets/images/work/mature-tree-reduced-to-trunk.jpg';
import timber from '@/assets/images/work/timber-stacked-after-dismantling.jpg';
import tidy from '@/assets/images/work/garden-tidy-after-tree-removal.jpg';

export const treeRemoval: ServicePage = {
  slug: 'tree-removal',
  navLabel: 'Tree Removal',
  teaser: 'Felling where there is room, dismantling in sections where there is not.',
  services: ['tree-removal'],
  seoTitle: "Tree Removal & Felling in Athlone & Westmeath | Cawley's",
  description:
    'Controlled tree removal across Westmeath, Roscommon, Longford, Offaly and Galway. Felling or sectional dismantling, timber dealt with as agreed. Free quotes.',

  hero: {
    eyebrow: 'Tree removal & felling',
    title: 'Tree removal, done',
    accent: 'safely',
    end: 'and tidily.',
    intro:
      'Dead, dangerous or in the wrong place? We take trees down under control: felled whole where there is room, dismantled in sections where there is not. Across Westmeath, Roscommon, Longford, Offaly and Galway, with a free quotation first.',
    image: {
      src: dismantling,
      alt: 'A climber roped high in a large sycamore, dismantling it in sections directly beside a timber building.',
      caption: 'Dismantling a large tree beside a building',
      focus: '50% 35%',
    },
  },

  overview: {
    title: 'Taking a tree down is',
    accent: 'more than a cut',
    end: 'at the base.',
    paragraphs: [
      'Most trees we remove are close to something that matters: a house, a garage, a boundary wall, a road or overhead lines. Where there is open ground and a clear drop zone, a tree can be felled in one piece. Where there is not, it is taken down from the top in manageable sections, each one cut and lowered under control.',
      'Before any work starts we look at the tree, what is around it and how we will get in and out, then explain what we propose and what it will cost. On the day, the work area is kept clear, and once the tree is down the timber and brash are dealt with exactly as agreed.',
    ],
    situationsTitle: 'When people call us',
    situations: [
      'The tree is dead, dying or has started to drop branches',
      'It has been damaged by a storm, split or is leaning',
      'Roots or branches are close to the house, drains or a boundary',
      'It blocks light, a view or space you want to use',
      'It has outgrown the garden or was planted in the wrong place',
      'You are clearing ground for building or landscaping',
    ],
  },

  work: {
    title: 'Tree removal',
    accent: 'work we undertake',
    intro:
      'From a single garden tree to several on a site, every removal is planned around the tree and what is next to it.',
    items: [
      {
        title: 'Unwanted trees',
        text: 'Trees that have outgrown the space, block light or stand where you want to build, extend or landscape.',
      },
      {
        title: 'Dead & dying trees',
        text: 'Dead timber becomes brittle and unpredictable. We take these trees down before they shed limbs or fall.',
      },
      {
        title: 'Dangerous & damaged trees',
        href: '/emergency-tree-services',
        text: 'Split, leaning or storm-damaged trees are made safe first, then removed in a controlled way.',
      },
      {
        title: 'Overgrown trees',
        text: 'Trees that have got too big for a garden or boundary, removed in sections where space is tight.',
      },
      {
        title: 'Sectional dismantling',
        text: 'Where a tree cannot be felled whole, it is climbed and taken down piece by piece beside buildings and wires.',
      },
      {
        title: 'Residential & commercial',
        text: 'Gardens, driveways and boundaries at home, as well as business premises and sites.',
      },
    ],
  },

  why: 'A tree coming down near your home is not the place for guesswork. You get an experienced team, a clear price and a site left the way it was agreed.',

  photos: {
    title: 'Tree removal from',
    accent: 'our own jobs',
    intro:
      'Genuine photographs of tree removal and dismantling work carried out by the Cawley’s team.',
    items: [
      {
        src: before,
        alt: 'A large mature tree beside a stone wall and timber cabin, before work began.',
        caption: 'A mature tree beside a wall and cabin, before work',
        focus: '50% 40%',
      },
      {
        src: reduced,
        alt: 'A tree reduced to its main trunk with rigging ropes in place and logs cut on the ground.',
        caption: 'Reduced in sections on rigging ropes',
        focus: '50% 40%',
      },
      {
        src: timber,
        alt: 'Logs stacked neatly on decking beside a timber building after a tree was dismantled.',
        caption: 'Timber cut and stacked after dismantling',
      },
      {
        src: tidy,
        alt: 'A garden after tree removal: lawn clear, logs stacked by a pond and the seating area tidy under a blue sky.',
        caption: 'The garden left clear after removal',
        focus: '50% 70%',
      },
    ],
  },

  beforeAfter: {
    pairs: [
      {
        title: 'Tree tight against a garage and fence',
        summary:
          'Taken down without touching the garage roof or the new fence beside it, and the corner left clear.',
        before: {
          src: garageBefore,
          alt: 'A tall bare tree in the corner of a back garden, beside a white garage and a new timber fence, with houses behind.',
        },
        after: {
          src: garageAfter,
          alt: 'The same corner of the garden after the tree was removed, clear beside the garage and the timber fence.',
        },
      },
      {
        title: 'Boundary trees beside a lane',
        summary:
          'A line of tall trees along a boundary fence taken out, opening the garden up to the fields.',
        before: {
          src: boundaryBefore,
          alt: 'Tall bare trees growing along a black timber boundary fence beside a lawn and a lane, before the work.',
        },
        after: {
          src: boundaryAfter,
          alt: 'The same corner of the garden after the trees were removed, open to the fields beyond.',
        },
      },
      {
        title: 'A row of tall conifers along a wall',
        summary: 'The whole row removed, leaving the wall clear and the lawn open to the light.',
        before: {
          src: rowBefore,
          alt: 'A row of tall conifers along a garden wall behind a lawn and a shed.',
        },
        after: {
          src: rowAfter,
          alt: 'The same garden with the conifers gone, the wall clear and the lawn open.',
        },
      },
      {
        title: 'Tall trees among the conifers',
        summary:
          'The tall trees taken down and the timber cut into rounds, with the conifers around them left standing.',
        before: {
          src: tallBefore,
          alt: 'Tall broadleaf trees standing among dark conifers at the edge of a sunny lawn.',
        },
        after: {
          src: tallAfter,
          alt: 'The same edge of the garden with the tall trees gone and cut timber stacked in rounds on the ground.',
        },
      },
      {
        title: 'One conifer removed, one kept',
        summary:
          'The taller conifer taken out and the rounded one beside the path kept, as the owner wanted.',
        before: {
          src: pairBefore,
          alt: 'Two large conifers in a back garden beside a stepping-stone path, with a climber getting ready below.',
        },
        after: {
          src: pairAfter,
          alt: 'The same garden with the taller conifer gone and the rounded conifer kept beside the path.',
        },
      },
      {
        title: 'A tall conifer in the corner',
        summary:
          'Taken down beside the fence, with the timber cut into logs and stacked on the lawn.',
        before: {
          src: cornerBefore,
          alt: 'A tall, dense conifer in the corner of a back garden beside a timber fence.',
        },
        after: {
          src: cornerAfter,
          alt: 'A neat stack of cut logs on a lawn, with the corner of the garden now clear.',
        },
      },
      {
        title: 'A tall tree beside a house',
        summary:
          'Climbed and taken down piece by piece right beside the house, without harming the shrubs and flower beds below.',
        before: {
          src: houseBefore,
          label: 'During',
          alt: 'A climber in orange high in a tall tree beside a house, above a garden full of shrubs and flowers.',
        },
        after: {
          src: houseAfter,
          alt: 'The same garden corner after the tall tree was removed, with the shrubs and flowers left in place.',
        },
      },
      {
        title: 'A fallen tree across the garden',
        summary: 'A tree brought down across the lawn and path cut up and cleared away.',
        before: {
          src: fallenBefore,
          alt: 'A fallen tree lying across a lawn and garden path beside a white house.',
        },
        after: {
          src: fallenAfter,
          alt: 'The same garden after the fallen tree was removed, with the path, lawn and bench clear.',
        },
      },
    ],
  },

  process: {
    title: 'How tree removal',
    accent: 'works',
    steps: [
      {
        title: 'Get in touch',
        text: 'Call us or send a quote request. A photo or two of the tree and its surroundings helps.',
      },
      {
        title: 'We look at the tree',
        text: 'Where needed we visit to see the tree, access and anything close by, and talk through the options.',
      },
      {
        title: 'You get a clear quote',
        text: 'A free quotation setting out what will be done, how, and what happens to the timber.',
      },
      {
        title: 'The tree comes down',
        text: 'On the agreed day the tree is removed under control and the site is left clean and tidy.',
      },
    ],
  },

  areas:
    'From our base in Athlone we remove trees for homes and businesses throughout Westmeath, Roscommon, Longford, Offaly and Galway',

  faqs: [
    {
      question: 'Do I need permission to remove a tree?',
      answer:
        'It depends on the tree and where it is. Some trees are protected, for example by a Tree Preservation Order, a planning condition or because the property is in an Architectural Conservation Area, and some felling requires a licence. If you are unsure, check with your county council before work is booked. We are happy to talk through what we see on site, but we cannot give legal or planning advice.',
    },
    {
      question: 'Can you remove a tree that is very close to my house?',
      answer:
        'Yes. Where there is no room to fell a tree in one piece, it is dismantled from the top in sections, with each piece cut and lowered under control so it does not land on the house, roof or boundary.',
    },
    {
      question: 'What happens to the timber and branches?',
      answer:
        'That is agreed before we start. Branches can be chipped on site, the timber cut into logs and stacked for you, or everything taken away. The quotation says which.',
    },
    {
      question: 'Will you remove the stump as well?',
      answer:
        'We can. Stump grinding or stump removal can be quoted at the same time as the tree, or the stump can be left cut low if you prefer. See our stump grinding page for more.',
    },
    {
      question: 'How much does tree removal cost?',
      answer:
        'Every tree is different: its size, condition, what is around it and the access all affect the work involved. Quotations are free, so the simplest way to find out is to send us a few photos or ask us to come and look.',
    },
    {
      question: 'Do you remove trees in my area?',
      answer:
        'We remove trees throughout Westmeath, Roscommon, Longford, Offaly and Galway from our base in Athlone, including towns such as Mullingar, Moate, Roscommon Town, Longford Town, Tullamore and Ballinasloe. If your town is not listed on this page, ask us: we may still be able to help.',
    },
  ],

  cta: {
    title: 'Have a tree that',
    accent: 'needs to come down?',
    text: 'Tell us about the tree and where it is, or send a few photos. We cover Westmeath, Roscommon, Longford, Offaly and Galway, and every quotation is free.',
  },

  related: ['stump-grinding', 'tree-surgery', 'emergency-tree-services', 'site-clearance'],
};
