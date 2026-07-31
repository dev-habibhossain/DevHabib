# AI_PROMPT.md
## Master Build Prompt — Habib Hossain Portfolio (Next.js)

> Use this file as the primary instruction prompt when handing this project to an AI coding assistant (Claude Code, Cursor, etc.). It consolidates `PRD.md`, `project_requirement.md`, and `Design_guideline.md` into a single actionable brief. Paste this whole file as the first message/system prompt when starting the build.

---

## 0. How to Use This Prompt

1. Place `PRD.md`, `project_requirement.md`, `Design_guideline.md`, and the original `index.html` in the project root (or repo docs folder).
2. Feed this `AI_PROMPT.md` to the AI assistant first — it tells the AI what to build, in what order, and which reference doc to consult for which detail.
3. Build **incrementally, section by section** (see §5 build order) — do not attempt the entire site in one shot.
4. After each phase, the AI should pause and confirm before proceeding to the next.

---

## 1. Role & Context

You are acting as a senior Next.js/TypeScript frontend engineer. You are converting an already-approved static HTML/Tailwind CDN design (`index.html`) into a production-grade **Next.js portfolio website** for Habib Hossain, a Full Stack Developer (MERN Stack & PHP Laravel) based in Lakshmipur, Bangladesh.

The visual design is **final and approved** — your job is not to redesign it, but to:
- Rebuild it as clean, typed, componentized Next.js code.
- Make it genuinely fast, responsive, and accessible (the static prototype used CDN scripts and is not production-ready).
- Fill in the functional gaps the static prototype left as visual-only (contact form, mobile nav, resume modal logic).

Do not invent new visual styles. Do not skip the reference docs. If something in `index.html` conflicts with `Design_guideline.md`, the guideline wins (it's the distilled system).

---

## 2. Required Reading Before Writing Code

Read, in this order:
1. `PRD.md` — understand **why** this site exists, who it's for, and what "done" means (success metrics in §5).
2. `Design_guideline.md` — the exact color tokens, typography scale, spacing rules, component patterns, and motion rules to follow.
3. `project_requirement.md` — the technical stack, folder structure, and section-by-section functional requirements.
4. `index.html` — the ground-truth visual reference for exact layout, copy, and structure per section.

Do not guess at colors, spacing, or copy — pull them from these sources.

---

## 3. Tech Stack (non-negotiable defaults)

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** (configured via `tailwind.config.ts`, NOT the CDN script)
- **lucide-react** for icons (replaces the Lucide CDN)
- **next/font/google** for Plus Jakarta Sans (replaces Google Fonts `<link>`)
- **next/image** for all images (replaces raw `<img>` tags, including Unsplash placeholders)
- Animation: `framer-motion` or npm `AOS` (replaces AOS CDN) — respect `prefers-reduced-motion`
- Theme: `next-themes` (or equivalent manual implementation) for dark/light persistence without flash
- Contact form: React state + a Next.js API route (`app/api/contact/route.ts`) — email delivery method to be confirmed (see PRD §10, open decision #1); scaffold the route so it's swappable
- Deployment target: Vercel

Do not introduce a UI kit (e.g., shadcn) unless asked — this design uses fully custom Tailwind components as defined in `Design_guideline.md`.

---

## 4. Non-Negotiable Requirements

- **Data-driven content**: Projects, services, tech stack categories, FAQs, and education/experience entries must live in typed data files under `lib/data.ts` (or split per-domain files) — never hardcoded directly in JSX.
- **Mobile navigation**: The static prototype hides nav links below `md` with no alternative — you MUST add an accessible mobile menu (drawer or overlay; confirm style per PRD §10 open decision #2, default to slide-in drawer if unspecified).
- **Dark mode default**, toggle-able, persisted, no flash of incorrect theme on load.
- **Accessibility**: keyboard-navigable accordion, modal (focus trap + ESC to close), nav, and all icon-only buttons must have `aria-label`s.
- **Performance targets** (from PRD §5): Lighthouse Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 95, LCP < 2.5s, CLS < 0.1.
- **SEO metadata**: migrate all `<meta>`/OG tags from `index.html` `<head>` into the Next.js `metadata` export in `app/layout.tsx` (or `generateMetadata`).
- All content marked as placeholder in `project_requirement.md` §7 (photos, project links, phone/email, resume PDFs) should remain **clearly marked placeholders** in code (e.g., `// TODO: replace with real asset`) — do not fabricate fake-but-realistic data that could accidentally ship.

---

## 5. Build Order (work in this sequence, confirm after each phase)

**Phase 1 — Foundation**
- Scaffold Next.js + TypeScript + Tailwind project.
- Configure `tailwind.config.ts` with the full color palette, font, and radius tokens from `Design_guideline.md` §2–4.
- Set up `next/font` for Plus Jakarta Sans.
- Set up theme provider (dark default) with no-flash script.
- Build base `layout.tsx` with metadata, global providers, Preloader.

**Phase 2 — Static Core Sections**
- Header/Navbar (desktop nav + new mobile drawer) + ThemeToggle.
- Hero section.
- Achievements/Stats counter bar (with scroll-triggered count-up).
- About section.

**Phase 3 — Content-Driven Sections**
- Tech Stack section (marquee + category cards) — data from `lib/data.ts`.
- Services section — data-driven grid.
- Projects section — data-driven grid + working category filter (client component).
- Education & Experience section.
- Professional Status/testimonial block.

**Phase 4 — Interactive Elements**
- FAQ accordion (accessible, keyboard operable).
- Resume Download modal (focus-trapped, ESC/backdrop close).
- Contact section: info cards + working form wired to `app/api/contact/route.ts`.
- Footer.

**Phase 5 — Polish & Performance**
- Replace all images with `next/image`, correct `sizes`/`priority` on above-the-fold images.
- Audit motion for `prefers-reduced-motion` compliance.
- Run Lighthouse; fix any gaps against §4 targets.
- Verify responsive behavior at 375px / 768px / 1024px / 1440px.
- Verify dark/light parity for every component per `Design_guideline.md` §8.

**Phase 6 — Launch Readiness**
- Confirm all placeholders from `project_requirement.md` §7 are either filled or clearly flagged.
- Add `sitemap.xml`, `robots.txt`.
- Final QA pass, then prepare for Vercel deployment.

---

## 6. Component Naming & Structure (follow exactly)

```
app/
 ├─ layout.tsx
 ├─ page.tsx
 └─ api/contact/route.ts

components/
 ├─ Preloader.tsx
 ├─ Header/Navbar.tsx
 ├─ Header/MobileMenu.tsx
 ├─ ThemeToggle.tsx
 ├─ Hero.tsx
 ├─ StatsCounter.tsx
 ├─ About.tsx
 ├─ TechStack/Marquee.tsx
 ├─ TechStack/TechCategoryCard.tsx
 ├─ Services.tsx
 ├─ Projects/ProjectFilterTabs.tsx
 ├─ Projects/ProjectCard.tsx
 ├─ EducationExperience.tsx
 ├─ ProfessionalStatus.tsx
 ├─ FAQAccordion.tsx
 ├─ Contact/ContactInfoCard.tsx
 ├─ Contact/ContactForm.tsx
 ├─ ResumeModal.tsx
 └─ Footer.tsx

lib/
 └─ data.ts   (or data/projects.ts, data/services.ts, data/techStack.ts, data/faqs.ts)
```

Match this structure unless there's a strong technical reason to deviate — flag any deviation before making it.

---

## 7. Definition of Done (per section and overall)

A section is "done" when:
- [ ] It visually matches `index.html` + `Design_guideline.md` in both light and dark mode.
- [ ] It's fully responsive at all breakpoints in §5 of `Design_guideline.md`.
- [ ] Content is pulled from `lib/data.ts`, not hardcoded.
- [ ] It's keyboard-accessible and has no Lighthouse accessibility violations.
- [ ] Any interaction (filter, modal, accordion, form) is fully functional, not just styled.

The overall project is "done" when every item in `PRD.md` §6 "Must-Have" is checked off and Lighthouse targets in §5 are met.

---

## 8. Things to Explicitly Ask the User (do not assume)

Per `PRD.md` §10, confirm before/at the relevant build phase:
1. Contact form email delivery method (Resend / SMTP+Nodemailer / Formspree / other).
2. Mobile menu style (drawer vs full-screen overlay).
3. Analytics tool (Vercel Analytics / GA4 / none).
4. Production domain name (for metadata/canonical/sitemap).
5. Whether real content assets (photos, project links, resumes) are ready now or placeholders should remain.

If these aren't answered yet, proceed with sensible defaults noted in this file, but flag clearly in code comments and in your response that a decision is still pending.
