import type { LocationPage } from './types';
import hero from '@/assets/images/work/climber-in-mature-tree-by-stone-wall.jpg';
import pruning from '@/assets/images/work/arborist-pruning-at-height.jpg';
import before from '@/assets/images/work/mature-tree-before-removal.jpg';
import stacked from '@/assets/images/work/timber-stacked-after-dismantling.jpg';

/**
 * Birr: DRAFT (not in live.json) until the owner supplies a real local job,
 * photo or review.
 *
 * RESEARCH NOTES (checked Nov 2026; sources in brackets):
 * - Birr stands where the Camcor meets the Little Brosna. [Birr Public Realm
 *   Report 2009]
 * - Oxmantown Mall: houses of 1810-1830, laid out as a promenade from the
 *   castle gates to the Church of Ireland, lined with mature trees. John's
 *   Mall c. 1833. [askaboutireland.ie; Wikipedia]
 * - Birr Castle demesne: over 40 champion trees; box hedges over 300 years
 *   old, listed as the tallest in the world. [birrcastle.com; Wikipedia]
 * - A grey poplar that had stood about 200 years by the Camcor in the demesne
 *   fell in the storms of early 2014. [Irish Times]
 * - Storm Éowyn, 24 Jan 2025: trees down at Hillside, Military Road, Bulfin
 *   Park and Gallows Hill, where a large beech damaged an old stone wall.
 *   [Midland Tribune / Offaly Express]
 * - The owner asked for no council content on town pages.
 * - No Cawley's job in Birr is claimed anywhere.
 */
export const birr: LocationPage = {
  slug: 'tree-surgeon-birr',
  town: 'Birr',
  seoTitle: "Tree Surgeons in Birr, Co. Offaly | Cawley's Tree Care",
  description:
    'Careful tree surgery in Birr: mature trees in walled gardens, crown reductions, removals in tight spaces, hedges and storm damage. Ask for a free quote.',

  hero: {
    eyebrow: 'Birr, Co. Offaly',
    title: 'Careful tree work for',
    accent: 'Birr',
    intro:
      'Birr has some of the finest old trees in the Midlands, and a lot of them stand a few feet from a Georgian house or a stone wall. We prune, reduce and, when there is no other way, remove them, without damaging what is underneath.',
    image: {
      src: hero,
      alt: 'A climber high in a large mature tree beside a stone wall, with a ground worker below.',
      caption: 'Climbing a mature tree beside a stone wall',
      focus: '50% 35%',
    },
  },

  intro: {
    title: 'A town that',
    accent: 'notices its trees',
    paragraphs: [
      'You cannot live in Birr and be indifferent to trees. The demesne at the end of the town holds more than forty champion trees and box hedges that have been growing for over three hundred years. The limes and chestnuts along the malls are part of what the town looks like. People here tend to want a tree kept if it can be kept, and that suits the way we work.',
      'Most of the time a big tree that is worrying you does not need to come down. Taking weight out of the crown, shortening the limbs over the roof and clearing out the dead wood will often buy it another twenty years. We will always tell you if that is an option before we talk about felling.',
      'We are an Athlone firm and we come down the N62 through Ferbane and Cloghan, so west and south Offaly are well within our reach.',
    ],
    facts: [
      'Pruning first, removal when needed',
      'More than 15 years climbing trees',
      'Full insurance cover',
      'Quotations cost nothing',
      'A tree down? Ring at any hour',
    ],
  },

  local: {
    title: 'Old trees,',
    accent: 'old walls',
    end: 'and not much room',
    paragraphs: [
      'The houses on Oxmantown Mall went up between 1810 and 1830, and John’s Mall followed a few years later. The gardens behind houses like these are long, narrow and walled, and the trees in them were planted by people who never expected to see them fully grown. Two centuries on, a beech or a lime at the end of one of those gardens can be twenty metres tall, with its branches over three properties and its roots under a wall that was built before the Famine.',
      'That is the typical Birr job: a big tree, no way to drop anything, and a lot that must not be broken. It is done by climbing, cutting small and lowering each piece on a rope. It is slower than felling a tree in a field, and it is the only right way to do it here.',
      'The storms have made the point for us. When Éowyn came through in January 2025, a large beech on Gallows Hill brought down part of an old stone wall, and trees fell at Hillside, on Military Road and in Bulfin Park. Even the demesne is not spared: a grey poplar that had stood by the Camcor for about two hundred years went over in the storms of 2014. Age catches up with every tree, and the ones beside buildings are the ones to keep an eye on.',
    ],
    points: [
      {
        title: 'By the rivers',
        text: 'Birr sits where the Camcor runs into the Little Brosna. Alder and willow along the banks grow quickly, rot quietly and shed limbs. Ground that floods also loosens roots, so riverside trees need checking more often than most.',
      },
      {
        title: 'Walled gardens',
        text: 'A tree hard against an old wall will push it over in time. Sometimes careful pruning slows that down; sometimes the choice is between the tree and the wall. We will tell you which we think it is.',
      },
      {
        title: 'Trees over wires',
        text: 'Much of the storm damage around Birr in 2025 was trees and branches falling on power lines. If a tree in your garden is growing into the wires, do not touch it yourself. Ring ESB Networks, and ring us about the rest of the tree.',
      },
    ],
  },

  services: {
    title: 'How we can',
    accent: 'help in Birr',
    intro: 'In the order we would usually consider them.',
    items: [
      {
        title: 'An honest look first',
        text: 'Before any saw comes out: how healthy the tree is, what it is leaning towards, and whether it needs work at all.',
        href: '/tree-surgery',
      },
      {
        title: 'Reducing the crown',
        text: 'The first choice for a good tree in a tight garden. Height and spread brought in, dead wood out, branches lifted clear of roofs and walls.',
        href: '/tree-pruning',
      },
      {
        title: 'Removal in sections',
        text: 'When a tree is dead, unsafe or wrecking a wall, it is dismantled from the top down and lowered piece by piece.',
        href: '/tree-removal',
      },
      {
        title: 'Storm damage, day or night',
        text: 'A tree or heavy limb down on a house, wall or road. Ring us at any hour and we will tell you honestly how soon we can get there.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Hedges',
        text: 'Beech, laurel and conifer hedges trimmed, reduced or removed. Old overgrown boundaries brought back into shape.',
        href: '/hedge-cutting',
      },
      {
        title: 'Clearing an overgrown garden',
        text: 'For a house that has been empty a while: brambles, self-seeded sycamore and ivy cleared so you can see what you have.',
        href: '/site-clearance',
      },
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
      {
        src: pruning,
        alt: 'An arborist in a harness and helmet working among the upper branches of a tree.',
        caption: 'Working through the crown on ropes',
        focus: '50% 40%',
      },
      {
        src: stacked,
        alt: 'Cut timber stacked neatly after a tree was dismantled.',
        caption: 'Timber stacked, site left clean',
      },
    ],
  },

  advice: {
    title: 'Worth knowing',
    accent: 'in Birr',
    intro: 'What people here most often ask before booking.',
    faqs: [
      {
        question: 'Can a large old tree be made safe without cutting it down?',
        answer:
          'Very often, yes. Reducing the crown takes weight and wind load off the tree, and removing dead or cracked limbs deals with what is most likely to fall. It will not fix a tree that is hollow at the base or dying, and we will say so if that is what we find. But for a sound tree that has simply got too big, a careful reduction is usually the better answer.',
      },
      {
        question:
          'There is no access to my back garden except through the house. Can you still do the job?',
        answer:
          'Usually. A lot of gardens in the middle of Birr are like that. The work is done by climbing, so no machinery has to come in, and the branches are cut small enough to carry out. It takes longer, and we allow for that in the quotation. Tell us about the access when you get in touch, with a photo if you can.',
      },
      {
        question: 'A tree is leaning on, or cracking, my garden wall. What should I do?',
        answer:
          'Take a few photos showing the tree and the wall and send them to us. If the wall is already moving, keep people away from the far side of it. Sometimes reducing the tree takes enough weight off to stop things getting worse; where the trunk itself is against the wall, removing the tree may be the only way to save it.',
      },
      {
        question: 'Do you cover the villages around Birr?',
        answer:
          'Yes: Banagher, Kinnitty, Shinrone, Cloghan, Kilcormac and the country between them.',
      },
      {
        question: 'What do you do with the timber?',
        answer:
          'Whatever you prefer. Hardwood such as beech and ash makes good firewood, and we can cut it to stove lengths and stack it for you. Otherwise it is taken away, and the branches are chipped.',
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
    title: 'An old tree you would like',
    accent: 'an honest opinion on?',
    text: 'A few photos on WhatsApp is the quickest way to start, or ring for a chat. There is no charge for an opinion or a price. For a fallen tree, the phone is answered 24/7.',
  },
};
