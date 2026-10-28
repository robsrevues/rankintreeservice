# Rankin Tree Service — rankintreeservice.com

A rank-and-rent lead site for tree service across Rankin County, MS. It ranks for
"[town] tree service / tree removal" searches, and calls go through a tracking
number to whichever local crew is renting the leads.

Built with [Astro](https://astro.build) as a static site and deployed to GitHub
Pages on every push to `main`.

## Working on it

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
```

## Before pointing the domain here

All of these live in `src/config.ts`:

1. **Phone numbers.** Replace the placeholder `(601) 000-0000` with the CallRail
   main number. Brandon, Pearl, and Flowood can each get their own number; the
   city pages fall back to the main number when theirs is `null`.
2. **Quote form.** Create a free Formspree form and paste its endpoint into
   `formEndpoint`. Until then the contact page asks people to call.
3. **Trust claims.** `licensedInsured` and `anyHourStormCalls` stay `false` until
   a partner crew can honor them.

## Site structure

| Page | File | Target search |
| --- | --- | --- |
| Home | `src/pages/index.astro` | tree service rankin county |
| Tree removal | `src/pages/tree-removal.astro` | tree removal brandon ms / rankin county |
| Emergency removal | `src/pages/emergency-tree-removal.astro` | emergency / storm tree removal |
| Trimming | `src/pages/tree-trimming.astro` | tree trimming brandon ms |
| Stump grinding | `src/pages/stump-grinding.astro` | stump grinding brandon ms |
| Land clearing | `src/pages/land-clearing.astro` | land clearing rankin county |
| Cost guide | `src/pages/tree-removal-cost.astro` | tree removal cost |
| About | `src/pages/about.astro` | — |
| Contact | `src/pages/contact.astro` | — |
| Brandon | `src/pages/brandon-ms.astro` | tree service brandon ms |
| Pearl | `src/pages/pearl-ms.astro` | tree service pearl ms |
| Flowood | `src/pages/flowood-ms.astro` | tree service flowood ms |

## Adding the next city pages (waves 2 and 3)

Richland and Florence are wave 2; Pelahatchie, Puckett, Star, and Sandhill are
wave 3. For each:

1. Copy one of the existing city pages to `src/pages/<town>-ms.astro`.
2. **Rewrite all of it.** Near-identical city pages with the name swapped are
   doorway pages to Google and can hurt the whole site. Each page needs its own
   intro, real neighborhood and road names (sourced), the local lot and tree
   character, and town-specific FAQs: 400–700 original words.
3. Set `live: true` for that town in `cities` in `src/config.ts` so it's linked
   site-wide and included in the sitemap.

## Content rules

- No fake street address, staff names, reviews, or "licensed and insured" claims
  until they're true.
- Every neighborhood or landmark named on a page should come from a real source.
- The cost guide cites third-party averages. Replace them with the partner crew's
  real ranges once one signs.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push
to `main`. `public/CNAME` sets the custom domain to `rankintreeservice.com`.
