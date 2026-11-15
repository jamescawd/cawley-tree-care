import type { LocationPage } from './types';
import { wall, climbing, tidy, conifer } from './photos';
import bigBefore from '@/assets/images/work/large-ivy-covered-tree-beside-garage-before.jpg';
import bigPlatform from '@/assets/images/work/crown-reduced-from-access-platform.jpg';
import bigRounds from '@/assets/images/work/large-tree-rounds-cut-on-site.jpg';

/**
 * Tullamore: has a genuine local job (see jobsDone).
 *
 * Local notes are kept to what affects tree work: mature oak, beech and lime
 * in older gardens and estates; canal-side willow and alder. No distance
 * given (owner's instruction for far towns). No council content.
 */
export const tullamore: LocationPage = {
  slug: 'tree-surgeon-tullamore',
  town: 'Tullamore',
  seoTitle: "Tree Surgeons in Tullamore, Co. Offaly | Cawley's Tree Care",
  description:
    'Tree surgeons for Tullamore: pruning and crown reduction done properly, tree removal, hedges, stump grinding and storm damage. Quotes are free.',

  hero: {
    eyebrow: 'Tullamore, Co. Offaly',
    title: 'Tree surgery and pruning in',
    accent: 'Tullamore',
    intro:
      'Pruning, crown reduction and tree removal for oak, beech, lime and conifers, plus hedge cutting and stump grinding, in Tullamore and across Offaly. Fully insured, with a free quotation.',
    image: wall,
  },

  intro: {
    title: 'Pruning done',
    accent: 'properly',
    paragraphs: [
      'Good pruning keeps a tree healthy and in shape. We shorten branches back to suitable side branches instead of topping, so the tree keeps its form and recovers well.',
      'Where removal is the right answer, the tree is taken down in sections and the site cleared. Our team has over fifteen years of experience, and every job is insured.',
    ],
    facts: [
      'Careful pruning of oak, beech and lime',
      'More than fifteen years of experience',
      'An insured team',
      'Quotes free of charge',
      'Mon to Sat, 8am to 6pm',
      'Storm emergencies: phone 24/7',
    ],
  },

  services: {
    title: 'Our work',
    accent: 'in Tullamore',
    intro: 'Pruning where a tree can be kept, removal where it cannot.',
    items: [
      {
        title: 'Pruning and crown reduction',
        text: 'Oak, beech, lime and sycamore reduced, thinned and cleared of dead wood by climbers.',
        href: '/tree-pruning',
      },
      {
        title: 'Removal, when it has to be',
        text: 'Dead, diseased and unsafe trees taken down in sections and cleared.',
        href: '/tree-removal',
      },
      {
        title: 'Hedge reduction and trimming',
        text: 'Leylandii, laurel and beech hedges trimmed or brought back down in height.',
        href: '/hedge-cutting',
      },
      {
        title: 'Grinding out stumps',
        text: 'The stump ground below the surface where the site suits it.',
        href: '/stump-grinding',
      },
      {
        title: 'Emergency call-outs',
        text: 'Storm-damaged trees on houses, roads and driveways. Call 24/7.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Landscaping and fencing',
        text: 'The garden finished after the tree work, by the same team.',
        href: '/landscaping',
      },
    ],
  },

  local: {
    title: 'Mature trees',
    accent: 'around the town',
    paragraphs: [
      'Tullamore has a lot of mature oak, beech and lime, in older gardens and kept as features in newer estates. Trees in estates often had their roots disturbed when houses, services and driveways went in, so an older tree that is thinning at the top is worth having checked. Gardens backing onto the Grand Canal tend to have fast-growing willow and alder on the bank that need cutting back every few years.',
    ],
  },

  // Genuine job in Tullamore (photos supplied and location confirmed by
  // the owner, Nov 2026).
  jobsDone: {
    title: 'Jobs we have done',
    accent: 'in Tullamore',
    intro: 'A large tree beside a timber garage in Tullamore, taken down from an access platform.',
    slots: [
      {
        title: 'Before the work',
        summary:
          'A big, ivy-covered tree right beside a timber garage, with a house and fences close by.',
        photo: {
          src: bigBefore,
          alt: 'A large mature tree with ivy on its trunk standing beside a timber garage and a fence, before work started.',
          focus: '50% 40%',
        },
      },
      {
        title: 'Working from the platform',
        summary:
          'The crown was taken down limb by limb from an access platform, so every cut could be controlled.',
        photo: {
          src: bigPlatform,
          alt: 'An arborist in the basket of an access platform cutting back the bare limbs of the large tree.',
          focus: '50% 40%',
        },
      },
      {
        title: 'Timber cut on site',
        summary:
          'The trunk and big limbs were cut into rounds on site, ready to be split for firewood or taken away.',
        photo: {
          src: bigRounds,
          alt: 'Large rounds of the felled tree on the ground, with a chainsaw resting on the biggest one.',
          focus: '40% 55%',
        },
      },
    ],
  },

  proof: {
    title: 'Careful work,',
    accent: 'shown honestly',
    intro: 'Photographs of jobs we carried out ourselves.',
    photos: [climbing, conifer, tidy],
  },

  advice: {
    title: 'Tullamore',
    accent: 'asks about trees',
    intro: 'Answers to what we are asked.',
    faqs: [
      {
        question: 'Why should a tree not be topped?',
        answer:
          'Topping cuts the main stems straight across. It leaves large wounds that rot, and the tree answers with a burst of weak shoots that break more easily than the branches they replaced. A proper crown reduction shortens each branch back to a side branch, so the tree keeps its shape and heals.',
      },
      {
        question: 'When is the best time to prune?',
        answer:
          'Most trees can be pruned through late autumn and winter, when they are dormant and the structure is easy to see. Cherry and plum are better done in summer. Dead or dangerous wood can come out at any time.',
      },
      {
        question: 'Can you reduce my leylandii hedge by half?',
        answer:
          'In height, usually yes. In width, only as far as there is green growth, because leylandii does not regrow from bare brown wood. If the hedge is too wide to reduce, taking it out and putting up a fence is often better value.',
      },
      {
        question: 'My oak has dead branches. Is it on its way out?',
        answer:
          'Probably not. Oaks shed branches they no longer need and can carry dead wood for years while healthy. Have it removed if it is over a path, a road or a seating area. Be more concerned if the leaves are sparse and small all over the crown.',
      },
    ],
  },

  nearby: {
    title: 'Around',
    accent: 'Tullamore',
    intro: 'We work throughout Co. Offaly.',
    groups: [
      {
        county: 'Offaly',
        towns: ['Clara', 'Mucklagh', 'Killeigh', 'Geashill', 'Daingean', 'Kilcormac', 'Birr'],
      },
      { county: 'Westmeath', towns: ['Kilbeggan', 'Tyrrellspass'] },
    ],
  },

  cta: {
    title: 'Book a tree surgeon',
    accent: 'in Tullamore',
    text: 'Show us the tree with a few photos by WhatsApp, or give us a call. You will get an honest opinion and a price without charge. Fallen tree? Ring at any time.',
  },
};
