export type TopicId = 'woodworking' | 'energy' | 'gardening';

export type Topic = {
  id: TopicId;
  name: string;
  tagline: string;
  description: string;
  href: string;
  affiliate: {
    label: string;
    name: string;
    url: string;
    image?: string;
    headline?: string;
    summary?: string;
    button?: string;
  };
  image: string;
  accent: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  topic: TopicId;
  date: string;
  readMinutes: number;
  image: string;
  body: string[];
};

export const site = {
  name: 'Smart DIY Home Projects',
  tagline: 'Hands-on projects for self-reliant living',
  description:
    'Smart DIY Home Projects shares practical, field-tested guides on woodworking, home energy, and backyard gardening so you can build, grow, and power more of your own life.',
  url: 'https://smartdiyhomeprojects.com',
  topics: ['woodworking', 'energy', 'gardening'] as const,
};

export const topics: Topic[] = [
  {
    id: 'woodworking',
    name: 'Woodworking',
    tagline: 'Build furniture, fixtures, and gifts with your own hands',
    description:
      'Plans, techniques, and project walkthroughs for every skill level — from a first cutting board to a full workshop of jigs and joinery. Every woodworking guide links to Ted’s Woodworking for the complete plan library.',
    href: '/woodworking',
    affiliate: {
      label: 'Featured resource',
      name: 'Ted’s Woodworking',
      url: 'https://f2e1e7gcpef0fmdih16ey3pr9c.hop.clickbank.net',
      headline: 'Thousands of step-by-step woodworking plans',
      summary:
        'A large plan library for backyard furniture, beginner builds, and workshop projects.',
      button: 'Visit Ted’s Woodworking',
    },
    image:
      'https://images.pexels.com/photos/6790088/pexels-photo-6790088.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#9a6a3c',
  },
  {
    id: 'energy',
    name: 'Energy',
    tagline: 'Generate, store, and manage your own power',
    description:
      'Solar, battery, and off-grid energy projects you can actually build at home. Every energy guide links to the Energy Revolution System for full system plans and sizing tools.',
    href: '/energy',
    affiliate: {
      label: 'Featured resource',
      name: 'Energy Revolution System',
      url: 'https://0ec0d7ngzkf5fo80ohln3sds6t.hop.clickbank.net',
      headline: 'Practical off-grid electricity planning',
      summary:
        'Load sizing, battery bank planning, and off-grid energy concepts for homeowners.',
      button: 'Visit Energy Revolution System',
    },
    image:
      'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#2563eb',
  },
  {
    id: 'gardening',
    name: 'Gardening',
    tagline: 'Grow more food with less effort and less water',
    description:
      'Raised beds, composting, and aquaponic systems that turn a backyard into a productive kitchen garden. Every gardening guide links to Aquaponics 4 You for step-by-step system plans.',
    href: '/gardening',
    affiliate: {
      label: 'Featured resource',
      name: 'Aquaponics 4 You',
      url: 'https://085dead53gjwro051tkj1ax0u3.hop.clickbank.net',
      image: 'https://www.aquaponics4you.com/images/header.jpg',
      headline: 'Backyard aquaponics made practical',
      summary:
        'System plans and garden concepts for growing food efficiently with less water.',
      button: 'Visit Aquaponics 4 You',
    },
    image:
      'https://images.pexels.com/photos/7728869/pexels-photo-7728869.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#3d7a4b',
  },
];

export const articles: Article[] = [
  {
    slug: 'first-cutting-board',
    title: 'Your First Cutting Board: A Weekend Project',
    excerpt:
      'A beginner-friendly end-grain cutting board that teaches grain direction, glue-ups, and finishing without specialty tools.',
    topic: 'woodworking',
    date: '2026-06-12',
    readMinutes: 7,
    image: 'https://images.pexels.com/photos/18289011/pexels-photo-18289011.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: [
      'A cutting board is the best first project in woodworking because it teaches grain direction, a clean glue-up, and a food-safe finish, and you end up with something you use every day.',
      'Start with a single hardwood board — maple or walnut are forgiving and look great. Mill it to roughly 1½ inches thick, then rip strips about 1½ inches wide.',
      'For an end-grain board, crosscut the long strip into 1½-inch blocks, then flip every other block so the growth rings alternate. That is what makes the board stable and gives you the checkerboard pattern.',
      'Dry-fit first. Lay the blocks in order, square the row against a fence, and only then mix the glue. Titebond III gives a little more open time and is waterproof once cured.',
      'Clamp evenly until a thin bead of glue squeezes out across the whole seam. Wait 24 hours, then plane or sand the faces flat. A chamfer on every edge hides small imperfections and feels better in the hand.',
      'Finish with food-grade mineral oil — three thin coats the first day, then once a month. That finish is the difference between a board that lasts a decade and one that cracks in winter.',
      'When you want to move past a single board, Ted’s Woodworking has thousands of step-by-step plans with cut lists and diagrams. It is the resource we point every new woodworker to.',
    ],
  },
  {
    slug: 'workshop-jigs',
    title: 'Five Jigs That Make Your Workshop Safer',
    excerpt:
      'A crosscut sled, a taper jig, and three more simple builds that turn a basic saw into a precision tool.',
    topic: 'woodworking',
    date: '2026-05-28',
    readMinutes: 9,
    image: 'https://images.pexels.com/photos/4491869/pexels-photo-4491869.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: [
      'A jig is a small shop-built guide that lets a basic tool do the work of a fancy one. These five pay back the hour it takes to build them within the first month.',
      'The crosscut sled is the first one to build. Two runners, a flat plywood base, and a tall fence at the front and back. Once the sled is square, you get repeatable 90-degree cuts without fighting the miter gauge.',
      'A taper jig slides in the miter slot and lets you rip a controlled angle for legs and trim. A simple hinged version handles most tapers; mark the angle, set the jig, and run the stock through.',
      'A thin-rip jig keeps your hands clear of the blade when ripping narrow stock. It rides the fence and uses a stop block, so the offcut is consistent and your fingers are never near the cut.',
      'A circle-cutting jig for the router turns a square blank into a perfect tabletop or clock face. A pivot pin in a strip of plywood is all it takes.',
      'Finally, a box-joint sled cuts interlocking fingers that are stronger than dovetails for most shop projects. The key is a single spacer pin the width of your dado stack.',
      'Plans for all of these and hundreds more are in Ted’s Woodworking, the plan library we recommend for anyone building out a home shop.',
    ],
  },
  {
    slug: 'backyard-furniture-plans',
    title: 'Best Backyard Furniture Plans for Beginners',
    excerpt:
      'Simple benches, stools, and outdoor tables that fit a small workshop and a small budget.',
    topic: 'woodworking',
    date: '2026-04-18',
    readMinutes: 6,
    image: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: [
      'Backyard furniture is ideal for beginners because the projects are useful, visible, and easy to finish in a weekend.',
      'Start with a bench or potting table. Both use straight cuts, minimal joinery, and inexpensive lumber.',
      'The best plans show material lists, cut diagrams, and a simple finishing sequence, which is exactly why plan libraries convert well for woodworking audiences.',
      'If you want a larger catalogue of step-by-step builds, the woodworking resource linked on the topic page is the fastest next step.',
    ],
  },
  {
    slug: 'woodworking-tool-basics',
    title: 'The Tool Basics Every DIY Woodworker Needs',
    excerpt:
      'A practical checklist for saws, drills, measuring tools, and clamping that keeps the first build from stalling.',
    topic: 'woodworking',
    date: '2026-03-22',
    readMinutes: 5,
    image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: [
      'You do not need a giant shop to get started. A circular saw or handsaw, drill, square, tape, clamp set, and sanding block cover most early projects.',
      'A good layout tool matters more than a fancy saw. Accurate lines save material and reduce frustration.',
      'Once the basics are in place, plan-based projects help you move from random cuts to real finished builds.',
    ],
  },
  {
    slug: 'first-solar-panel',
    title: 'Your First Solar Panel: A Safe Starter Setup',
    excerpt:
      'A 100-watt panel, a charge controller, and a small battery — enough to run lights and charge devices off-grid.',
    topic: 'energy',
    date: '2026-06-20',
    readMinutes: 8,
    image: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: [
      'A starter solar setup does not need to power a whole house. A single 100-watt panel, a small charge controller, and a 12-volt battery will run LED lighting and charge phones for a shed or a camper.',
      'Size the panel to your battery. A 100-watt panel pushes roughly 5 amps in full sun, so a 35 amp-hour battery charges from empty in about a day of good sun.',
      'The charge controller is the brain of the system. A cheap PWM controller is fine for a 12-volt starter; a MPPT controller is worth it once you add a second panel.',
      'Use the right wire. 10 AWG is the minimum for a short panel-to-controller run; longer runs need thicker cable to avoid voltage drop.',
      'Mount the panel true south (in the northern hemisphere) at your latitude angle, clear of shade between 9am and 3pm.',
      'For full system sizing, battery bank planning, and whole-home math, the Energy Revolution System walks through the load calculations step by step.',
    ],
  },
  {
    slug: 'battery-bank-basics',
    title: 'Battery Bank Basics: Lead-Acid vs. Lithium',
    excerpt:
      'A plain-English comparison of the two chemistries home energy builders actually choose between.',
    topic: 'energy',
    date: '2026-05-15',
    readMinutes: 6,
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: [
      'Your battery bank decides how much of your solar production you actually get to use. The two chemistries home builders choose between are flooded or sealed lead-acid, and lithium iron phosphate.',
      'Lead-acid is cheap up front and forgiving of over-discharge if you watch it. The trade-off is usable capacity: you only get about half the rated amp-hours before sulfation starts.',
      'Lithium iron phosphate costs more per amp-hour but lets you use 80 to 90 percent of the rated capacity, weighs a third as much, and lasts far longer in daily cycling.',
      'Match the chemistry to the charge controller. Lithium needs a controller with a lithium profile; a lead-acid setting will undercharge it and shorten its life.',
      'Temperature matters. Lead-acid survives freezing; lithium should not be charged below freezing without a heater.',
      'For a full bank sizing worksheet and parts lists sized to your loads, the Energy Revolution System is the guide we recommend.',
    ],
  },
  {
    slug: 'portable-solar-setup',
    title: 'Portable Solar Setup for Weekend Projects',
    excerpt:
      'A compact power setup for camping, tool charging, and backyard use.',
    topic: 'energy',
    date: '2026-04-04',
    readMinutes: 6,
    image: 'https://images.pexels.com/photos/35647782/pexels-photo-35647782.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: [
      'Portable solar is a practical entry point because it solves a clear problem: power where the grid does not reach.',
      'A folding panel, charge controller, and small battery can keep phones, lights, and a laptop running for a weekend.',
      'Once you understand portable sizing, it becomes much easier to scale to a shed or backup system.',
    ],
  },
  {
    slug: 'off-grid-power-planning',
    title: 'Off-Grid Power Planning Without the Guesswork',
    excerpt:
      'How to think about loads, storage, and backup capacity before buying hardware.',
    topic: 'energy',
    date: '2026-03-08',
    readMinutes: 7,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: [
      'The biggest off-grid mistake is buying components before calculating the load.',
      'Start with your daily watt-hours, then work backward into battery and panel size.',
      'Good planning saves money and makes the final system easier to maintain.',
    ],
  },
  {
    slug: 'raised-bed-gardening-beginners',
    title: 'Raised Bed Gardening for Beginners',
    excerpt:
      'How to plan, fill, and plant a raised bed that actually produces food.',
    topic: 'gardening',
    date: '2026-06-30',
    readMinutes: 6,
    image: 'https://images.pexels.com/photos/37487180/pexels-photo-37487180.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: [
      'A raised bed gives you control over soil, drainage, and spacing, which is why it is such a strong starter project.',
      'Use a simple mix of compost, aeration, and moisture-retaining material. Fill the bed to the top and water it in before planting.',
      'Start with crops you actually eat: lettuce, herbs, beans, tomatoes, and peppers are dependable beginner choices.',
      'If you want a more advanced system that blends fish and vegetables, Aquaponics 4 You is the resource linked from the gardening hub.',
    ],
  },
  {
    slug: 'composting-small-backyards',
    title: 'Composting Tips for Small Backyards',
    excerpt:
      'Low-odor composting strategies for limited space and limited time.',
    topic: 'gardening',
    date: '2026-05-02',
    readMinutes: 5,
    image: 'https://images.pexels.com/photos/5987470/pexels-photo-5987470.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: [
      'Composting is one of the cheapest ways to build better soil.',
      'In a small backyard, the key is balancing greens, browns, moisture, and air so the pile does not smell and does not stall.',
      'Turn the pile regularly and keep it about as damp as a wrung-out sponge.',
      'Once the pile becomes dark, crumbly, and earthy, it is ready to use in beds or containers.',
    ],
  },
  {
    slug: 'aquaponics-basics',
    title: 'Aquaponics Basics for Backyard Growers',
    excerpt:
      'A practical introduction to fish-and-plant systems for efficient backyard growing.',
    topic: 'gardening',
    date: '2026-04-12',
    readMinutes: 7,
    image: 'https://images.pexels.com/photos/11343818/pexels-photo-11343818.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: [
      'Aquaponics combines fish, plants, and water circulation into one productive growing loop.',
      'The system works best when you keep the water clean, the plants balanced, and the fish load realistic.',
      'It is a strong fit for readers who want a more advanced backyard food system than a simple raised bed.',
      'The gardening hub points to Aquaponics 4 You for people who want complete plans and practical system guidance.',
    ],
  },
];

export function getTopic(id: TopicId): Topic {
  const t = topics.find((t) => t.id === id);
  if (!t) throw new Error(`Unknown topic: ${id}`);
  return t;
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function articlesByTopic(id: TopicId): Article[] {
  return articles.filter((a) => a.topic === id);
}
