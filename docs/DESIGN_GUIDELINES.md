# Design Guideline
## Habib Hossain — Portfolio Design System

This document defines the visual design system extracted from the approved HTML prototype, so the Next.js rebuild stays pixel-consistent across light and dark modes.

---

## 1. Brand Identity

- **Logo mark:** Text logo `Habib.dev` — "Habib." in default text color, ".dev" in brand mint.
- **Tone:** Clean, modern, professional-but-approachable developer portfolio. Rounded shapes, soft shadows, glassmorphism, asymmetric organic accents (blobs, skewed section dividers).
- **Default theme:** Dark mode (loads dark by default, toggle switches to light, preference persisted).

---

## 2. Color Palette

### Brand Colors
| Token | Hex / Value | Usage |
|---|---|---|
| `brand-mint` | `#3EB489` | Primary accent — CTAs, links, highlights, icons |
| `brand-mint-dark` | `#2E946F` | Primary hover state |
| `brand-mint-light` | `rgba(62,180,137,0.12)` | Soft backgrounds, icon chips, badges |
| `brand-coral` | `#FF7070` | Secondary accent — contrast CTAs, alternating icons |
| `brand-coral-light` | `rgba(255,112,112,0.12)` | Soft backgrounds, icon chips (alternating with mint) |

### Dark Mode Surface Colors
| Token | Hex | Usage |
|---|---|---|
| `brand-darkBg` | `#0b0f17` | Page background |
| `brand-darkCard` | `#111827` | Card/surface background |
| `brand-darkBorder` | `#1f2937` | Borders/dividers |
| `brand-muted` | `#9ca3af` | Muted/secondary text (both modes) |

### Light Mode Surfaces
- Background: `#FFFFFF` → `#F5FBF8` gradient (skewed sections)
- Card borders: `gray-100` / `gray-200`
- Body text: `gray-900` (headings), `gray-600–700` (body)

### Color Usage Rules
- **Mint and coral alternate** across repeating elements (service cards, tech categories, project badges) — never use the same accent twice in a row within a grid.
- Mint = primary/trust actions (Hire Me, primary buttons, active nav state).
- Coral = secondary/energetic actions (My Projects, Send Message button, alternate icon chips).
- Icon chips always use the **-light** tint of their accent as background with the solid color as icon/text color.

---

## 3. Typography

- **Font family:** `Plus Jakarta Sans` (weights: 300, 400, 500, 600, 700, 800, italic 400) via Google Fonts → implement with `next/font/google` for self-hosting/performance.
- **Type scale:**

| Element | Size (approx) | Weight | Notes |
|---|---|---|---|
| Hero H1 | `text-4xl` → `text-[54px]` (responsive) | `font-extrabold` | line-height 1.12, tight tracking |
| Section H2 | `text-3xl` → `text-4xl` | `font-extrabold` | |
| Card/Sub H3 | `text-base` → `text-lg` | `font-bold` | |
| Eyebrow label | `text-xs` | `font-bold`, uppercase, letter-spacing wide | Always brand-mint or brand-coral color |
| Body/paragraph | `text-sm` → `text-base` | `font-normal` | color: `brand-muted` |
| Small/meta text | `text-[10px]`–`text-xs` | `font-medium`/`font-semibold` | tags, badges, captions |

- **Rule:** Every major section has an eyebrow label (small uppercase colored tag) above its H2, e.g. "Skillset", "Portfolio", "Got Questions?", "Background".

---

## 4. Spacing & Layout

- **Container:** `max-w-7xl` centered, `px-8` horizontal padding (site-wide standard).
- **Section vertical rhythm:** `py-16` to `py-28` depending on section weight; `my-10` between skewed sections.
- **Grid system:** 12-column grid (`lg:grid-cols-12`) for hero/about; explicit `md:grid-cols-2 lg:grid-cols-3/4` for card grids.
- **Gap standard:** `gap-6` to `gap-8` between cards; `gap-12` between major hero columns.
- **Border radius scale:**
  - Small elements (tags/pills): `rounded-md` / `rounded-full`
  - Cards: `rounded-2xl` / `rounded-3xl`
  - Hero image containers: `rounded-[40px]` to `rounded-[50px]` (organic/soft)
- Use **consistent radius per component type** — don't mix radii within the same card family.

---

## 5. Components

### 5.1 Cards ("gcard" + "glass")
- Semi-transparent glass background (`backdrop-blur`), 1px border, subtle shadow.
- Gradient border effect on hover (mint→coral gradient outline fading in).
- Border color shifts to accent color on hover (`hover:border-brand-mint` or `hover:border-brand-coral`, alternating).
- Padding: `p-6` to `p-10` depending on card size.

### 5.2 Buttons
| Variant | Style |
|---|---|
| Primary (mint) | Solid `brand-mint` bg, white text, `rounded-md`, `font-semibold`, hover → `brand-mint-dark`, subtle shadow |
| Secondary (coral outline) | `brand-coral-light` bg, `brand-coral` text/border, hover → deeper coral tint |
| Ghost (in glass panels) | `bg-white/10`, white border/text, hover `bg-white/20` |
| Icon-only (social/nav) | Circular, `w-8 h-8`–`w-10 h-10`, bordered, fill/color shift to mint on hover |

- Buttons always `text-xs`–`text-sm`, `font-semibold`/`font-bold`, generous horizontal padding (`px-6`–`px-8`), vertical `py-2.5`–`py-3.5`.

### 5.3 Badges / Tags / Pills
- Skill tags: `bg-gray-50 dark:bg-gray-800`, `text-xs font-medium`, bordered, `rounded-md`.
- Category/status badges (e.g. "Laravel / Vue"): solid accent bg, white text, `rounded-full`, uppercase, `text-[10px] font-bold`.
- Eyebrow badges (e.g. "Full Stack Developer" in hero): accent-light bg, accent text, bordered, `rounded-full`, uppercase.

### 5.4 Icon Chips
- Fixed size `w-10 h-10` to `w-14 h-14`, `rounded-xl`/`rounded-2xl`, accent-light background, accent-colored icon centered — used consistently across services, tech stack, education, contact info cards.

### 5.5 Marquee
- Infinite horizontal scroll of tech pills, duplicated content set for seamless loop, `25s linear infinite`, pauses on hover.

### 5.6 Modal (Resume Download)
- Centered, `max-w-xl`, dark backdrop with blur, rounded `3xl`, two-column split (divider line) on desktop, stacked on mobile, close button top-right.

### 5.7 Accordion (FAQ)
- Card-style rows, chevron icon rotates 180° on open, summary bold, answer text muted, smooth expand.

### 5.8 Floating Elements
- Small glass badges (e.g., "React", "Node.js") float near hero image with a gentle `float` keyframe animation (6s ease-in-out, translateY ±10px), staggered animation-delay for asynchronous movement.

---

## 6. Imagery Style

- Portrait photos: cropped into soft rounded rectangles (`rounded-[40px]`–`[50px]`), offset background color blocks behind/beside them (mint or coral solid shape peeking out) for depth.
- Project screenshots: `h-48`, `object-cover`, slight zoom (`scale-105`) on card hover.
- All images require descriptive `alt` text; use `next/image` with explicit width/height or `fill` + `sizes`.

---

## 7. Motion & Interaction Guidelines

| Interaction | Behavior |
|---|---|
| Scroll-reveal | Fade-up / fade-left / fade-right on section entry (staggered `delay` for grids) — 800ms duration, triggers once |
| Hover on cards | Border color shift + shadow lift + gradient border fade-in |
| Hover on project image | Slight scale-up (105%) within overflow-hidden frame |
| Counters | Count from 0 to target when scrolled into view (~1.2s) |
| Theme toggle | Instant icon swap (sun/moon), no jarring flash — persisted via storage |
| Marquee | Continuous linear scroll, pause on hover |
| Preloader | Logo + spinning ring, fades out ~400–900ms after load |
| Buttons | Smooth color transition (~200–300ms ease) on hover, subtle scale on icon buttons (105%) |

- Keep all transitions between **200–350ms**, easing `ease`/`ease-in-out` — nothing abrupt, nothing sluggish.
- Respect `prefers-reduced-motion`: disable float/marquee/scroll-reveal animations for users who request reduced motion.

---

## 8. Dark / Light Mode Rules

- Every surface, border, and text color must have an explicit dark-mode counterpart (no relying on default browser rendering).
- Glass effect changes opacity/tint between modes (lighter blur-white in light mode, dark-tinted blur in dark mode).
- Skewed section backgrounds invert gradient direction/tone between modes (light: white→mint-tinted; dark: card-dark→bg-dark).
- Icon accent colors (mint/coral) remain constant across both modes — only backgrounds/text/borders adapt.

---

## 9. Iconography

- Icon set: **Lucide** (`lucide-react` in Next.js).
- Consistent stroke-based, minimal, geometric line icons.
- Icon sizing convention: `w-4 h-4` (inline/small), `w-5 h-5`–`w-6 h-6` (chips), `w-7 h-7` (feature/status).

---

## 10. Responsive Behavior

- **Mobile-first**: all grids collapse to single column below `md`.
- Hero: stacks text above graphic on mobile; graphic scales down (`w-[310px]` → `sm:w-[380px]`).
- Nav links hidden below `md` — **replace with an accessible slide-in/drawer mobile menu** (not present in static prototype, required addition).
- Font sizes scale down one step on mobile (e.g., H1 `text-4xl` mobile → `text-[54px]` desktop).
- Section padding reduces on mobile (`py-16` vs `py-28` desktop) to avoid excessive scroll length on small screens.

---

## 11. Do's and Don'ts

**Do:**
- Reuse the same card/badge/button primitives everywhere — no one-off styles.
- Keep accent color alternation (mint/coral) consistent and intentional.
- Maintain generous whitespace; this design relies on breathing room, not density.

**Don't:**
- Don't introduce new colors outside the mint/coral/gray palette.
- Don't mix border-radius styles within the same component family.
- Don't use sharp/hard shadows — shadows should always be soft (`shadow-sm`/`shadow-md`/`shadow-xl`, low opacity).
- Don't let animations block interactivity or run when `prefers-reduced-motion` is set.
