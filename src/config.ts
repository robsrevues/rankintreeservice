// Everything you'll want to change lives in this file.

export const site = {
  name: 'Rankin Tree Service',
  domain: 'rankintreeservice.com',
  url: 'https://rankintreeservice.com',
  region: 'Rankin County, MS',

  // TODO: replace with your CallRail numbers before pointing the domain here.
  // `main` is used site-wide; city pages use their own number when set.
  phones: {
    main: { display: '(601) 000-0000', tel: '+16010000000' },
    brandon: null as null | { display: string; tel: string },
    pearl: null as null | { display: string; tel: string },
    flowood: null as null | { display: string; tel: string },
  },

  // TODO: create a free Formspree form and paste its endpoint here,
  // e.g. 'https://formspree.io/f/abcdwxyz'. Until then the form is hidden
  // and visitors are asked to call instead.
  formEndpoint: '',

  // Only turn these on once a partner crew can honor them.
  trust: {
    licensedInsured: false,
    anyHourStormCalls: false,
  },
};

export const services = [
  { href: '/tree-removal/', name: 'Tree removal', blurb: 'Dead, leaning, or unwanted trees taken down and hauled off.' },
  { href: '/emergency-tree-removal/', name: 'Storm and emergency removal', blurb: 'Trees on roofs, cars, fences, and driveways after a storm.' },
  { href: '/tree-trimming/', name: 'Tree trimming', blurb: 'Limbs off the roof, dead wood out, clearance over drives and lines.' },
  { href: '/stump-grinding/', name: 'Stump grinding', blurb: 'Stumps ground below grade so you can mow, plant, or build.' },
  { href: '/land-clearing/', name: 'Lot and land clearing', blurb: 'Brush, small timber, and overgrowth cleared for building or pasture.' },
];

export const cities = [
  { slug: 'brandon-ms', name: 'Brandon', live: true },
  { slug: 'pearl-ms', name: 'Pearl', live: true },
  { slug: 'flowood-ms', name: 'Flowood', live: true },
  { slug: 'richland-ms', name: 'Richland', live: false },
  { slug: 'florence-ms', name: 'Florence', live: false },
  { slug: 'pelahatchie-ms', name: 'Pelahatchie', live: false },
  { slug: 'puckett-ms', name: 'Puckett', live: false },
  { slug: 'star-ms', name: 'Star', live: false },
  { slug: 'sandhill-ms', name: 'Sandhill', live: false },
];
