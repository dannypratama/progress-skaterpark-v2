# DESIGN.md v2 // Progress Skaterpark Tegal

## 1. Brand Identity & Spatial Concept
- **Name:** Progress Skaterpark
- **Location (Real, Locked):** Jl. Pancasila 66, Mangkukusuman, Tegal, Central Java, Indonesia
- **Operating Hours & Entry (Real, Locked):** Open 08.00 to 22.00 daily / Entry Rp 50.000 per person per day
- **Official Contacts (Real, Locked):** WhatsApp +62 882 3254 8569 (displayed as plain text on fictional catalog pages to prevent accidental real orders), Instagram `@dannypratamaf`, Email `info@progressskatepark.com`
- **Visual Direction (Owner-Selected Mix of Moodboard v3 Direction 01 + Direction 03):** `Coping Horizon x Sideways Zine Map`
  - **Rationale:** Combines the floodlit night-session spatial theatre, circular bowl portal scrub, 8-deck radial fan arc, and horizontal scroll-scrub filmstrip of Direction 01 with the cursor-tracking googly skate-eyes, pausable announcement ticker, and 11-waypoint interactive SVG park floor blueprint of Direction 03.
- **Borrowed Motion Mechanics (Mapped to GSAP Showcase):**
  1. **The Whoopsies (`thewhoopsies.co.uk`):** Top announcement ticker with pause toggle, dual cursor-tracking googly skate-eyes in the header (`Math.atan2` pupil tracking), and a pinned circular portal mask (`clip-path: circle(18% -> 100%)`) that expands on scroll.
  2. **Nocturnal Dream (`nocturnaldream.com`):** 8-deck curved radial fan arc where selecting or cycling a skateboard deck lifts it out of the arc with GSAP and updates a live monospace telemetry bar (`Prev`, `Next`, `Toggle Spread`, `9.0 in+ Vert Filter`).
  3. **Mike Fernandez Portfolio (`mike-fernandez.dev`):** 11-waypoint interactive SVG floor blueprint of Progress Skaterpark (Zones A, B, C, D) where clicking any waypoint (`WP 01` to `WP 11`) animates the radar pulse on the map and loads the corresponding station photo and field notes.
  4. **Guillaume Colombel (`guillaumecolombel.fr`):** Pinned horizontal scroll-scrub park reel (`11` wide frames scrubbed by vertical scroll) and a `gsap.quickTo` custom cursor spotlight ring that changes context labels across stages.
  5. **Liubomyr Ulytskyi (`unbelievablycrap.com`):** Full-width 6-dispatch zine ledger with hover-projected backdrop and floating cursor photo preview.

## 2. Color Palette & Contrast Locks (WCAG AA Verified)
- **`--bg-void`: `#070709`** (Obsidian floodlit night asphalt; primary viewport canvas)
- **`--bg-surface`: `#101116`** (Carbon deck surface for HUD consoles, telemetry bars, and waypoint drawers)
- **`--bg-elevated`: `#181A22`** (Elevated hardware station and active ledger row background)
- **`--text-primary`: `#F5F3EE`** (Raw chalk ink; `17.8:1` contrast against `#070709` and `15.9:1` against `#101116`)
- **`--text-muted`: `#B2AEA4`** (Weathered concrete grey; `8.6:1` contrast against `#070709` and `7.7:1` against `#101116`)
- **`--brand-red`: `#D61920`** (Progress stencil crimson for high-impact button fills, active borders, and ticker bar; `#FFFFFF` text on `#D61920` achieves `5.6:1` contrast)
- **`--brand-red-hi`: `#FF5258`** (High-luminance signal red for small monospace kickers and telemetry labels on dark surfaces; `5.6:1` contrast against `#070709`)
- **`--border-strong`: `#78746A`** (Structural steel coping border; `4.1:1` non-text contrast against `#101116`)
- **Banned Colors Lock (`R-03`):** Zero use of `#6366f1`, `#8b5cf6`, `#a855f7`, `#3b82f6`, `#ec4899`, `#14b8a6`, or `#f97316`.

## 3. Typography & One-Sentence Rationales
- **Primary Display (`--font-display`): `Big Shoulders Stencil Display` (`900`, Google Fonts OFL)**
  - *Rationale:* Echoes the spray-cut stencil geometry of the Progress Skaterpark pyramid logo at monumental architectural scale.
- **Secondary Wide Display (`--font-wide`): `Unbounded` (`700`, `900`, Google Fonts OFL)**
  - *Rationale:* Gives zone headers, blueprint waypoints, and hardware deck titles the wide stance of a skateboard truck axle.
- **Editorial & UI Body (`--font-body`): `Darker Grotesque` (`500`, `700`, Google Fonts OFL)**
  - *Rationale:* Provides clean, high-x-height legibility for coaching descriptions and park rules without resorting to generic system grotesques.
- **Telemetry & HUD Monospace (`--font-mono`): `JetBrains Mono` (`500`, `700`, Google Fonts OFL)**
  - *Rationale:* Renders deck dimensions (`7.5 in` to `8.5 in`), Rupiah prices (`Rp 750.000` to `Rp 1.350.000`), and map coordinates with tabular precision.
- **Banned Fonts Lock (`R-01`):** Zero use of `Inter`, `Geist`, `Space Grotesk`, `Oswald`, or `Montserrat`.

## 4. Motifs & Spatial Architecture
- **No Card Grids Lock:** Main layouts forbid 3-column card grids, 2x2 photo grids, equal-height card rows, and stacked news cards.
- **Full-Bleed Spatial Stages (`100vw`):** Each section operates as an interactive apparatus (Pinned Portal Hero, 8-Deck Radial Fan, 11-Waypoint SVG Park Blueprint + Horizontal Scroll-Scrub Filmstrip, 6-Dispatch Hover-Projected Ledger, Coaching Preview Console, and a dedicated `/checkout/` Catalog & Booking Preview Drawer page).
- **Inline SVG Grain & Blueprint Geometry:** Uses lightweight self-contained SVG `<feTurbulence>` surface grain (`opacity: 0.035`) and vector coping rings without external texture dependencies.
- **Native Deck Resolution Lock:** Keeps all 8 `deck-*.png` files (`165 x 491 px`) within `115px` to `240px` display width inside the radial fan and catalog inspector so they never blur from full-bleed upscaling.

## 5. Motion Dials & Accessibility Fallbacks
- **ENERGY:** `9 / 10` (Monumental stencil display scale, hard crimson offset shadows, cursor-tracking skate-eyes, and radial fan dealing).
- **RHYTHM:** `8 / 10` (Alternates between pinned vertical scroll-scrub stages and interactive click/hover spatial explorers).
- **MOTION:** `9 / 10` (GSAP 3.13.0 Core + `ScrollTrigger` + `SplitText` inside `document.fonts.ready`, paired with `gsap.quickTo` cursor spotlight).
- **Reduced-Motion Contract (`R-08`, `R-19`):** When `prefers-reduced-motion: reduce` is active, all `ScrollTrigger` pins/scrubs, `SplitText` character flips, marquee tickers, and custom cursor followers are disabled; the hero portal opens to `100%` immediately and the 8-deck fan and 11-frame filmstrip reflow into static, accessible flex tracks.

## 6. Override Documentation (`R-37` Portfolio Fiction Lock)
- **Owner Override:** Per locked owner instruction (`PROGRESS.md` Section 6), this repository is a portfolio redesign. Skateboard deck prices (`Rp 750.000` to `Rp 1.350.000`) and the 6 park dispatch articles are plausible fiction written with `antislop-copywriting` (zero em dashes, zero buzzwords).
- **Safety Guardrail:** Real park facts (`Jl. Pancasila 66, Mangkukusuman, Tegal`, `08.00-22.00 daily`, `Rp 50.000 per person per day`, `WhatsApp +62 882 3254 8569`, `Instagram @dannypratamaf`) remain strictly accurate. All lesson booking and deck reservation forms are explicitly labelled `PORTFOLIO PREVIEW ONLY - No external message is sent` and never trigger live WhatsApp orders for fictional stock.
