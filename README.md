# Progress Skaterpark v2

Redesign of the landing page and catalog for **Progress Skaterpark**, a public concrete skatepark and private skate school at Jl. Pancasila 66, Mangkukusuman, Tegal, Central Java. Visual direction and architecture are documented in [DESIGN.md](DESIGN.md).

**Stack:** [Astro](https://astro.build) + plain CSS + GSAP (`gsap`, `ScrollTrigger`, `SplitText`). No CSS framework, no jQuery. Image assets in `public/assets/` preserve the exact file inventory from the original repository with web-optimized file weights (`< 250 KB`).

**Pages:**

- `/`: Spatial floodlit stage (cursor-tracking skate-eyes, pausable announcement ticker, pinned circular bowl portal hero with `SplitText`, 8-deck radial fan arc, 11-waypoint interactive SVG park floor blueprint, horizontal scroll-scrub park reel, 6-dispatch hover-projected ledger, and private lesson preview console).
- `/checkout/`: Hardware catalog & reservation preview desk (all 8 maple decks with full specs, interactive reservation preview builder, coaching tier breakdown, and official Tegal park visit telemetry).

## Commands

```sh
npm install
npm run dev      # http://localhost:4321/progress-skaterpark-v2/
npm run build    # static output in dist/
npm run preview  # preview production build
```

## Deploy

Static build (`dist/`) deployed to GitHub Pages (`/progress-skaterpark-v2/`) via [`withastro/action`](https://github.com/withastro/action) on push to `main`.

## Structure

```
├── public/assets/        # original asset tree (optimized web weights)
├── src/
│   ├── components/       # SiteHeader, SiteFooter, CustomCursor
│   ├── data/parkData.js  # locked Tegal park facts, 8 decks, 11 waypoints, 6 dispatches
│   ├── layouts/Base.astro
│   ├── lib/urls.js       # base() helper for GitHub Pages subpath
│   ├── pages/            # index.astro, checkout.astro
│   └── styles/global.css
├── astro.config.mjs
└── DESIGN.md             # locked visual & interaction specification
```
