# Haulivo

**Better dispatch decisions for difficult delivery routes.**

Haulivo gives fleet teams a clearer view of delivery risk. Its AI predicts delays and helps dispatchers adjust plans using the operating history of their own routes.

> Haulivo is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype uses fictional data. Named organisation types are prospective customers with no implied affiliation. The domain `www.haulivo.com` and email `hello@haulivo.com` are placeholders — check availability with a registrar before use.

Categories: AI · Logistics · Fleet Management

## What's here

- **Marketing site** (`/`): hero, purpose and stakes (with sourced statistics), problem, solution, how it works, customers, public-sector angle, AI safeguards, principles, founders' letter, vision, pricing, proposed AWS architecture, team, FAQ and an early-access form.
- **Interactive prototype** (`/app`): a review workspace on fictional trips. Switch roles with *Demo as*, open a record to see AI flags with evidence and confidence, assign reviewers, add notes and record decisions (a reason is required). Every change is written to an audit log you can export as CSV. A grounded assistant answers only from the records and refuses decisions that belong to people. Changes persist in `localStorage`.
- **Legal drafts**: `/privacy` and `/terms` (review drafts; operator details to be confirmed).

## Team

- **Tunde Arowolo** — Founder/CEO. Fleet operations manager with intercity distribution experience.
- **Aisha Gidado** — Co-founder. Transport economist focused on freight efficiency.
- **Chidinma Ezeani** — CTO. ML engineer specialising in geospatial prediction.

## Sources for the statistics

- ~90% — Share of Nigeria’s freight moved by road. ([The Guardian Nigeria](https://guardian.ng/?p=2580432))
- ~4% — Share of GDP lost to fragmented, unreliable and costly transport, according to the World Bank. ([The Guardian Nigeria, citing the World Bank](https://guardian.ng/?p=2861796))
- ₦3.2trn — Estimated annual loss to transport inefficiencies in Nigeria. ([AllAfrica](https://allafrica.com/stories/202606230257.html))

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build   # Vite build, server render, and static prerender of /, /app, /privacy, /terms and 404.html
npm test        # Engine and content tests (node --test)
npm run preview
```

The build output in `dist/` is fully static. `public/_headers` and `public/_redirects` cover Netlify/Cloudflare Pages; `vercel.json` covers Vercel.

### Early-access form

Without configuration the form saves the request in the browser and offers a pre-filled email to hello@haulivo.com. To send submissions to HubSpot, set `VITE_HUBSPOT_PORTAL_ID` and `VITE_HUBSPOT_FORM_GUID` at build time, and update the privacy notice first.

### Motion

Scroll reveals, word-by-word manifesto lighting, count-up statistics, timeline and step lines, card tilt and magnetic buttons live in `src/motion.js`. Content is server-rendered and fully visible without JavaScript; motion is skipped when the visitor prefers reduced motion.

## Structure

```
src/content.js        all site copy (edit here)
src/seed.js           fictional prototype records
src/theme.css         colours and fonts
src/App.jsx           marketing pages
src/Purpose.jsx       purpose, stakes, principles, letter, vision
src/app/engine.js     prototype rules (permissions, decisions, audit, assistant)
src/app/Prototype.jsx prototype UI
scripts/prerender.mjs static HTML for every route
```
