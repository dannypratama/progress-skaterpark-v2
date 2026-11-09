# AGENTS.md

- For UI work: read `DESIGN.md` first as the visual direction, then apply the `antislop` skill suite as a quality filter.
- Stack: Astro + plain CSS + GSAP (`gsap`, `ScrollTrigger`, `SplitText`). No CSS frameworks, no jQuery. Assets in `public/assets/` must not have files added or deleted.
- All internal paths and assets must go through `base()` in `src/lib/urls.js` for GitHub Pages subpath compatibility (`/progress-skaterpark-v2/`).
- Copy: English, following `antislop-copywriting`. Zero em dashes (`\u2014`) or en dashes (`\u2013`), and all portfolio booking/order interactions must state that no external message is sent.
