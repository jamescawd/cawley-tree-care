import type { LocationPage } from './types';
import { wall, pruning, stacked } from './photos';
import before from '@/assets/images/work/mature-tree-before-removal.jpg';

/**
 * Birr: DRAFT (not in live.json) until the owner supplies a real local job,
 * photo or review.
 *
 * Local notes are kept to what affects tree work. Sources (checked Nov 2026):
 * long walled gardens in the town centre (askaboutireland.ie); trees down
 * around Birr in Storm Éowyn, including a beech that damaged an old stone
 * wall (Midland Tribune). No council content. No Cawley's job in Birr is
 * claimed.
 */
export const birr: LocationPage = {
  slug: 'tree-surgeon-birr',
  town: 'Birr',
  seoTitle: "Tree Surgeons in Birr, Co. Offaly | Cawley's Tree Care",
  description:
    'Tree surgery in Birr: crown reductions, pruning, careful removal of mature trees in tight gardens, hedge work and storm damage. Insured. Free quotes.',

  hero: {
    eyebrow: 'Birr, Co. Offaly',
    title: 'Tree surgery in',
    accent: 'Birr',
    intro:
      'Pruning, crown reduction, tree removal and hedge work in Birr and south Offaly, by an experienced and fully insured team. Mature trees close to houses and walls are handled with care.',
    image: wall,
  },

  intro: {
    title: 'Keep the tree',
    accent: 'where you can',
    paragraphs: [
      'A large tree that worries you does not always need to come down. Reducing the crown, taking out dead wood and lifting branches clear of the roof can often make it safe for years. We will tell you honestly whether that is an option before any talk of removal.',
      'When a tree does have to go, it is climbed and taken down piece by piece, with each section lowered on a rope. We have over fifteen years of experience and full insurance, and the garden is left clean when we finish.',
    ],
    facts: [
      'Pruning first, removal when needed',
      'More than 15 years climbing trees',
      'Full insurance cover',
      'Quotations cost nothing',
      'A tree down? Ring at any hour',
    ],
  },

  services: {
    title: 'How we can',
    accent: 'help in Birr',
    intro: 'In the order we would usually consider them.',
    items: [
      {
        title: 'An honest look first',
        text: 'How healthy the tree is, what it leans towards, and whether it needs work at all.',
        href: '/tree-surgery',
      },
      {
        title: 'Reducing the crown',
        text: 'The first choice for a good tree in a tight garden: height and spread brought in, dead wood out, branches lifted clear of roofs and walls.',
        href: '/tree-pruning',
      },
      {
        title: 'Removal in sections',
        text: 'When a tree is dead, unsafe or damaging a wall, it is dismantled from the top down and lowered piece by piece.',
        href: '/tree-removal',
      },
      {
        title: 'Storm damage, day or night',
        text: 'A tree or heavy limb down on a house, wall or road. Ring us at any hour.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Hedges',
        text: 'Beech, laurel and conifer hedges trimmed, reduced or removed.',
        href: '/hedge-cutting',
      },
      {
        title: 'Clearing an overgrown garden',
        text: 'Brambles, self-seeded sycamore and ivy cleared from a garden that has been let go.',
        href: '/site-clearance',
      },
    ],
  },

  local: {
    title: 'Mature trees in',
    accent: 'walled gardens',
    paragraphs: [
      'Many gardens in the centre of Birr are long, narrow and walled, with a mature beech or lime close to the house and no way in for machinery. That work is done by climbing, with branches cut small enough to carry out.',
      'Trees pushing against old stone walls, or ones that lost limbs in Storm Éowyn, are worth having looked at sooner rather than later.',
    ],
  },

  jobsDone: {
    title: 'Our work',
    accent: 'in Birr',
    intro: 'Photos and short accounts of real jobs in and around Birr will be added here.',
    slots: [
      { title: 'Birr job to be added', photo: {} },
      { title: 'Birr job to be added', photo: {} },
      { title: 'Birr job to be added', photo: {} },
    ],
  },

  proof: {
    title: 'How a big tree',
    accent: 'comes down safely',
    intro: 'What working in a tight garden looks like, in photographs we took ourselves.',
    photos: [
      {
        src: before,
        alt: 'A large mature tree standing between a stone wall and a timber cabin before work began.',
        caption: 'A mature tree between a wall and a cabin',
        focus: '50% 40%',
      },
      { ...pruning, caption: 'Working through the crown on ropes' },
      stacked,
    ],
  },

  advice: {
    title: 'Worth knowing',
    accent: 'before work starts',
    intro: 'What people most often ask us.',
    faqs: [
      {
        question: 'Can a large old tree be made safe without cutting it down?',
        answer:
          'Very often, yes. Reducing the crown takes weight and wind load off the tree, and removing dead or cracked limbs deals with what is most likely to fall. It will not fix a tree that is hollow at the base or dying, and we will say so if that is what we find.',
      },
      {
        question:
          'There is no access to my back garden except through the house. Can you still do the job?',
        answer:
          'Usually. The work is done by climbing, so no machinery has to come in, and branches are cut small enough to carry out. It takes longer, and we allow for that in the quotation. Tell us about the access when you get in touch.',
      },
      {
        question: 'A tree is leaning on, or cracking, my garden wall. What should I do?',
        answer:
          'Send us photos showing the tree and the wall. If the wall is already moving, keep people away from the far side of it. Reducing the tree sometimes takes enough weight off; where the trunk itself is against the wall, removal may be the only way to save the wall.',
      },
      {
        question: 'Do you cover the villages around Birr?',
        answer:
          'Yes: Banagher, Kinnitty, Shinrone, Cloghan, Kilcormac and the country between them.',
      },
    ],
  },

  nearby: {
    title: 'Around',
    accent: 'Birr',
    intro: 'We also work across south and west Offaly.',
    groups: [
      {
        county: 'Offaly',
        towns: ['Banagher', 'Kinnitty', 'Shinrone', 'Cloghan', 'Kilcormac', 'Ferbane'],
      },
    ],
  },

  cta: {
    title: 'Want an honest opinion',
    accent: 'on a tree?',
    text: 'A few photos on WhatsApp is the quickest way to start, or ring for a chat. There is no charge for an opinion or a price, and for a fallen tree the phone is answered 24/7.',
  },
};
