import type { ServicePage } from './types';
import pruning from '@/assets/images/work/arborist-pruning-at-height.jpg';
import reduced from '@/assets/images/work/arborist-climbing-reduced-tree.jpg';
import climber from '@/assets/images/work/climber-in-mature-tree-by-stone-wall.jpg';
import cutting from '@/assets/images/work/arborist-cutting-trunk-section.jpg';

export const treePruning: ServicePage = {
  slug: 'tree-pruning',
  navLabel: 'Tree Pruning & Crown Reduction',
  teaser: 'Crown reduction, thinning and deadwood removal that keeps the tree.',
  services: ['crown-reduction', 'deadwood-removal'],
  seoTitle: "Tree Pruning & Crown Reduction in Athlone | Cawley's",
  description:
    'Crown reduction, crown thinning, deadwood removal and shaping for trees across Westmeath, Roscommon, Longford, Offaly and Galway. Fully insured. Free quotes.',

  hero: {
    eyebrow: 'Tree pruning & crown reduction',
    title: 'Pruning that keeps the',
    accent: 'tree',
    end: 'and fixes the problem.',
    intro:
      'Most trees do not need to come down. Careful pruning can make a tree smaller, lighter and safer, let light back into the garden and take weight off branches over roofs, roads and neighbours.',
    image: {
      src: pruning,
      alt: 'An arborist in a harness and helmet pruning among the upper branches of a tree.',
      caption: 'Pruning in the upper crown',
      focus: '50% 40%',
    },
  },

  overview: {
    title: 'The right cuts, in the',
    accent: 'right places',
    paragraphs: [
      'Pruning is about choosing which branches to take and which to leave. Cut well, a tree recovers, keeps a natural shape and stays healthy for years. Cut badly, or simply topped, it can throw out weak regrowth, decay or become more of a problem than it was.',
      'We climb into the tree and work from within the crown, reducing its height and spread, thinning where it is too dense and removing dead, broken or rubbing branches. Before we start you will know exactly what is being taken off and why.',
    ],
    situationsTitle: 'Pruning can help when',
    situations: [
      'A tree has grown too tall or wide for the garden',
      'Branches overhang a roof, gutter, driveway or road',
      'The garden or house has become dark and shaded',
      'There is dead or broken wood in the crown',
      'Limbs are rubbing, crossing or growing towards wires',
      'A neighbour has raised concerns about overhanging branches',
    ],
  },

  work: {
    title: 'Pruning',
    accent: 'work we undertake',
    intro: 'Each tree is pruned to suit its species, condition and where it stands.',
    items: [
      {
        title: 'Crown reduction',
        text: 'Reducing the overall height and spread of a tree while keeping its natural outline.',
      },
      {
        title: 'Crown thinning',
        text: 'Selectively removing branches inside the crown so more light and wind pass through it.',
      },
      {
        title: 'Deadwood removal',
        text: 'Taking out dead, dying and broken branches before they come down on their own.',
      },
      {
        title: 'Tree shaping',
        text: 'Balancing a lopsided crown or bringing a tree back into proportion with its surroundings.',
      },
      {
        title: 'General tree maintenance',
        text: 'Routine pruning to keep trees tidy, healthy and clear of buildings, paths and lines.',
      },
    ],
  },

  why: 'Pruning is skilled work at height, and the results last for years. You get an experienced climber, an honest view of what the tree needs and a clean, tidy finish.',

  photos: {
    title: 'Pruning at',
    accent: 'height',
    intro: 'Genuine photographs of the Cawley’s team climbing and pruning trees.',
    items: [
      {
        src: reduced,
        alt: 'An arborist in orange chainsaw trousers climbing a tall tree that has been carefully reduced.',
        caption: 'Climbing a tree after reduction',
        focus: '50% 35%',
      },
      {
        src: climber,
        alt: 'A climber high in a large mature tree beside a stone wall, with a ground worker below.',
        caption: 'Working in the crown of a mature tree',
        focus: '50% 35%',
      },
      {
        src: cutting,
        alt: 'An arborist in a harness and visor cutting a section from a tree, sawdust drifting against a clear blue sky.',
        caption: 'Cutting at height in harness and visor',
        focus: '50% 30%',
      },
    ],
  },

  process: {
    title: 'How pruning',
    accent: 'is arranged',
    steps: [
      {
        title: 'Tell us about the tree',
        text: 'Call or send a quote request with photos and what is bothering you about it.',
      },
      {
        title: 'We agree what to take',
        text: 'Where needed we look at the tree with you and agree how much to reduce, thin or remove.',
      },
      {
        title: 'Free quotation',
        text: 'A clear price for the agreed pruning, including what happens to the branches.',
      },
      {
        title: 'Pruned and tidied',
        text: 'The work is carried out from within the tree and the cuttings are cleared away.',
      },
    ],
  },

  areas:
    'Based in Athlone, we prune and reduce trees for gardens and properties across five counties.',

  faqs: [
    {
      question: 'What is the difference between crown reduction and crown thinning?',
      answer:
        'Crown reduction makes the whole tree smaller by shortening branches back to suitable growth points, reducing height and spread. Crown thinning keeps the size but removes some inner branches so the crown is less dense, lets more light through and catches less wind.',
    },
    {
      question: 'Is it not easier just to top the tree?',
      answer:
        'Topping, cutting straight across the top of a tree, usually causes more problems than it solves: fast, weakly attached regrowth and wounds that can decay. A proper reduction takes branches back to points where the tree can recover, so it stays healthy and keeps a natural shape.',
    },
    {
      question: 'When is the best time of year to prune?',
      answer:
        'Many trees can be pruned for much of the year, but the best timing depends on the species and on wildlife, as nesting birds are protected. We will tell you if your tree is better left until a different season.',
    },
    {
      question: 'Can I cut branches that overhang from my neighbour’s tree?',
      answer:
        'This is a common question, but the answer depends on your circumstances and we cannot give legal advice. It is always best to talk to your neighbour first; if the tree may be protected, check with your county council before any work is done.',
    },
    {
      question: 'How often does a tree need pruning?',
      answer:
        'It varies with the species, its age and where it is growing. Some trees need attention every few years to stay clear of buildings or lines, others very rarely. After the work we can tell you what to expect for your tree.',
    },
  ],

  cta: {
    title: 'Tree too big,',
    accent: 'too dark',
    end: 'or too close?',
    text: 'Send us a photo or give us a call. We will tell you honestly what pruning can do and give you a free quotation.',
  },

  related: ['tree-surgery', 'hedge-cutting', 'tree-removal', 'emergency-tree-services'],
};
