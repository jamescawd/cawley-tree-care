/**
 * No response times or 24/7 cover are promised: none have been confirmed.
 */
import type { ServicePage } from './types';
import roof from '@/assets/images/work/storm-tree-fallen-on-house-roof.jpg';
import crane from '@/assets/images/work/crane-lifting-fallen-conifer-off-house.jpg';
import uprooted from '@/assets/images/work/uprooted-tree-across-garden.jpg';
import snapped from '@/assets/images/work/storm-snapped-beech-over-lane.jpg';
import lane from '@/assets/images/work/lane-cleared-of-storm-fallen-trees.jpg';

export const emergencyTreeServices: ServicePage = {
  slug: 'emergency-tree-services',
  navLabel: 'Emergency Tree Services',
  teaser: 'Storm-damaged, fallen and dangerous trees made safe and cleared.',
  services: ['emergency'],
  seoTitle: "Emergency Tree Services & Storm Damage, Athlone | Cawley's",
  description:
    'Storm-damaged, fallen and dangerous trees made safe and cleared across Westmeath, Roscommon, Longford, Offaly and Galway. Call 087 119 9816. Fully insured.',

  hero: {
    eyebrow: 'Emergency & storm damage',
    callFirst: true,
    title: 'A tree down or',
    accent: 'dangerous?',
    end: 'Call us.',
    intro:
      'Storms leave trees split, leaning or lying across lanes, driveways and roofs. Keep people clear, then ring us: we will tell you honestly how quickly we can get to you, make the tree safe first and then clear it.',
    image: {
      src: roof,
      alt: 'A storm-felled tree leaning across a wet driveway and onto the roof of a white house.',
      caption: 'A storm-felled tree resting on a house roof',
      focus: '50% 45%',
    },
  },

  overview: {
    title: 'Storm-damaged trees need',
    accent: 'careful handling',
    paragraphs: [
      'A fallen or broken tree is not like one standing normally. Timber that has twisted, split or come down across something is often under tension and can move without warning when it is cut. That is why these jobs need to be approached carefully and in the right order.',
      'Our first job is to make the situation safe: taking weight off a roof, freeing a blocked lane or driveway, or bringing down a hanging limb. Then the tree is cut up and cleared so access and repairs can get back on track.',
    ],
    situationsTitle: 'Call us if',
    situations: [
      'A tree or large limb is down across a lane, driveway or garden',
      'A tree is resting on a roof, shed, wall or fence',
      'A tree has split, cracked or started leaning after a storm',
      'Branches are hanging over a house, road or footpath',
      'A tree has been uprooted and its root plate has lifted',
      'You are worried a damaged tree could fall',
    ],
  },

  work: {
    title: 'Emergency tree',
    accent: 'work we undertake',
    intro:
      'Urgent tree problems at homes, businesses and on access routes, made safe first and then cleared.',
    items: [
      {
        title: 'Storm-damaged trees',
        text: 'Split, snapped and twisted trees dealt with in a controlled way, piece by piece.',
      },
      {
        title: 'Dangerous branches',
        text: 'Hanging or cracked limbs over houses, cars, paths and roads brought down safely.',
      },
      {
        title: 'Fallen trees',
        text: 'Trees down across gardens, lanes and driveways cut up and cleared to restore access.',
      },
      {
        title: 'Trees on buildings',
        text: 'Trees resting on roofs, sheds, walls and fences taken off with care to avoid further damage.',
      },
      {
        title: 'Urgent property concerns',
        text: 'Trees that suddenly look unsafe after wind or heavy rain, checked and made safe.',
      },
      {
        title: 'Clear-up afterwards',
        text: 'Timber and brash chipped, stacked or taken away so the site is left tidy.',
      },
    ],
  },

  why: 'When a tree comes down, you need people who know how to handle damaged timber. You get an experienced, fully insured team and a straight answer about when we can be there.',

  photos: {
    title: 'Storm work from',
    accent: 'our own jobs',
    intro: 'Genuine photographs of storm-damaged and fallen trees dealt with by the Cawley’s team.',
    items: [
      {
        src: crane,
        alt: 'A tractor-mounted crane and grab lifting a large storm-felled conifer off the front of a white house.',
        caption: 'A storm-felled conifer lifted clear of a house',
      },
      {
        src: snapped,
        alt: 'A large beech limb snapped in a storm and hanging low across a rural lane.',
        caption: 'A storm-snapped beech over a lane',
      },
      {
        src: uprooted,
        alt: 'An uprooted tree lying across a garden and a broken fence after a storm.',
        caption: 'An uprooted tree across a garden',
      },
      {
        src: lane,
        alt: 'A worker in orange protective kit walking along a lane cleared through storm-fallen conifers.',
        caption: 'A lane cleared through fallen trees',
        focus: '50% 55%',
      },
    ],
  },

  process: {
    title: 'What happens',
    accent: 'when you call',
    steps: [
      {
        title: 'Keep clear & call',
        text: 'Keep people and cars away from the tree, then ring us on the number below.',
      },
      {
        title: 'Tell us what has happened',
        text: 'Where the tree is, what it has hit or blocked, and photos if it is safe to take them.',
      },
      {
        title: 'An honest answer',
        text: 'We tell you straight how soon we can get to you and what the work is likely to involve.',
      },
      {
        title: 'Made safe, then cleared',
        text: 'The tree is made safe first, then cut up and cleared away as agreed.',
      },
    ],
  },

  areas:
    'From our base in Athlone we deal with storm-damaged and fallen trees across five counties.',

  faqs: [
    {
      question: 'How quickly can you come out?',
      answer:
        'It depends on where you are and how many trees are down at the time, especially after a big storm. Call us and we will give you an honest answer about when we can get to you.',
    },
    {
      question: 'What should I do while I wait?',
      answer:
        'Keep everyone, including children and pets, well away from the tree and anything it is resting on. Do not try to cut or move it yourself, and stay well clear of any lines it may have touched. If a tree is on overhead electricity lines, contact the network operator straight away.',
    },
    {
      question: 'Can you remove a tree that has fallen on my house?',
      answer:
        'Yes. Trees resting on buildings are taken off carefully in sections so that no more damage is done. Once the weight is off, the rest of the tree is cut up and cleared.',
    },
    {
      question: 'Will my insurance cover storm damage?',
      answer:
        'That depends on your own policy, so check with your insurer. Taking photos of the damage before work starts, where it is safe to do so, is usually helpful.',
    },
    {
      question: 'Is a damaged tree always taken down?',
      answer:
        'Not always. Sometimes removing the broken limbs and reducing the crown is enough to make a tree safe. We will tell you honestly whether it can be kept or needs to come down.',
    },
  ],

  cta: {
    title: 'Tree down or',
    accent: 'unsafe?',
    end: 'Call now.',
    text: 'Ring us and tell us what has happened. We will tell you honestly how quickly we can get to you and what needs doing.',
  },

  related: ['tree-removal', 'tree-surgery', 'site-clearance', 'stump-grinding'],
};
