# Project Requirements Document (PRD)
## Habib Hossain — Full Stack Developer Portfolio (Next.js)

---

## 1. Project Overview

| Field | Detail |
|---|---|
| **Project Name** | Habib.dev — Personal Portfolio |
| **Owner** | Habib Hossain |
| **Role** | Full Stack Developer (MERN Stack & PHP Laravel) |
| **Location** | Lakshmipur, Bangladesh |
| **Goal** | Convert the provided static HTML/Tailwind design into a production-grade, super-fast, fully responsive Next.js portfolio website |
| **Source Design** | `index.html` (Tailwind CDN + vanilla JS prototype) |
| **Target Output** | Next.js (App Router) + TypeScript + Tailwind CSS project |

---

## 2. Objectives

- Rebuild the existing static design 1:1 (visually) as a component-based Next.js application.
- Achieve **high performance** (Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms).
- Ensure **full responsiveness** across mobile, tablet, and desktop breakpoints.
- Preserve **SEO metadata**, Open Graph tags, and semantic HTML structure.
- Support **Dark/Light theme** with persistence (no flash of wrong theme).
- Keep animations (AOS, marquee, float, counters) but replace heavy CDN libraries with optimized, tree-shakeable alternatives where possible.
- Make content **easily editable** (data-driven components, not hardcoded).

---

## 3. Tech Stack (Recommended)

| Layer | Technology |
|---|---|
| Framework | **Next.js 15** (App Router, React Server Components) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS 3** (configured, not CDN) |
| Icons | `lucide-react` (replaces `unpkg.com/lucide`) |
| Scroll Animations | `framer-motion` or `AOS` via npm (replace CDN AOS) |
| Carousel/Slider | `swiper/react` (if slider is used) or removed if unused |
| Fonts | `next/font/google` — Plus Jakarta Sans |
| Images | `next/image` (replace all Unsplash `<img>` tags) |
| Forms | React state + API route (or Formspree/Resend for email) |
| Deployment | Vercel |
| Icons/Assets | Local SVGs where possible instead of external CDN |

---

## 4. Site Structure / Pages

Single-page portfolio (`/`) with anchor-linked sections. Suggested component breakdown:

```
app/
 ├─ layout.tsx          (theme provider, fonts, metadata, preloader)
 ├─ page.tsx            (composes all sections)
 └─ api/contact/route.ts (handles contact form submission)

components/
 ├─ Preloader.tsx
 ├─ Header/Navbar.tsx
 ├─ ThemeToggle.tsx
 ├─ Hero.tsx
 ├─ StatsCounter.tsx
 ├─ About.tsx
 ├─ TechStack/
 │   ├─ Marquee.tsx
 │   └─ TechCategoryCard.tsx
 ├─ Services.tsx
 ├─ Projects/
 │   ├─ ProjectFilterTabs.tsx
 │   └─ ProjectCard.tsx
 ├─ EducationExperience.tsx
 ├─ ProfessionalStatus.tsx
 ├─ FAQAccordion.tsx
 ├─ Contact/
 │   ├─ ContactInfoCard.tsx
 │   └─ ContactForm.tsx
 ├─ ResumeModal.tsx
 └─ Footer.tsx

lib/
 └─ data.ts   (projects, services, techStack, faqs, education — as typed arrays/objects)
```

---

## 5. Section-by-Section Requirements

### 5.1 Global
- Sticky/top header with logo `Habib.dev`, nav links (Home, About, Tech Stack, Services, Projects, Education & Exp, FAQ, Contact), theme toggle, and "Hire Me" CTA.
- Mobile hamburger menu (not present in current static design — **add responsive nav drawer**).
- Preloader shown on first load, fades out after page load.
- Dark mode as default, toggle persists via `localStorage`, applied without flash (use `next-themes` or manual script in `<head>`).
- Decorative background SVG blobs / dot-grid patterns (non-critical, can lazy-render).

### 5.2 Hero Section (`#home`)
- Two-column layout: intro text (badge, name, title, tagline, 2 CTAs) + image stack graphic.
- Floating "tech badges" (React, Node.js) with float animation.
- "Get My Resume" speech bubble + play/download button that opens **Resume Modal**.
- Fully responsive stacking to single column on mobile.

### 5.3 Achievements Counter Bar
- 4 stat cards with animated count-up (6+ Projects, 12+ Skills, 2 Stacks, 100% Remote-ready).
- Count-up triggered on scroll into view (IntersectionObserver / `react-countup`).

### 5.4 About Section (`#about`)
- Image card (cutout style) + narrative text (2 paragraphs) + CTA button to Services.

### 5.5 Tech Stack Section (`#tech-stack`)
- Infinite horizontal marquee of tech badges (pause on hover).
- 4 category cards: Frontend, Backend, Database, Tools — each with icon + tag pills.
- Content should come from a typed data array (`techStack.ts`) for easy updates.

### 5.6 Services Section (`#services`)
- 6 service cards (icon, title, description) in responsive grid (1/2/3 columns).
- Alternating mint/coral accent colors.

### 5.7 Projects Section (`#projects`)
- Filter tabs: All / Laravel / MERN-Next (functional filtering, client component).
- 6 project cards, each with: screenshot image, stack badge, title, subtitle, description, feature line, tech tags, GitHub link, live-demo link.
- Hover effects: image zoom, border color, title color shift.
- Data-driven from `projects.ts` (id, title, category, image, tags, links, etc.).

### 5.8 Education & Experience Section (`#education`)
- 2-column badge cards: Experience (Full Stack Developer, Fresher) and Education (BA Honours in Economics, Lakshmipur Govt. College, Grad 2026).

### 5.9 Professional Status / Testimonial Section
- Single centered quote card — current availability statement.

### 5.10 FAQ Section (`#faq`)
- Accordion (3 Q&As shown, expandable). Recreate `<details>` behavior accessibly (keyboard + ARIA) using a React accordion component.

### 5.11 Contact Section (`#contact`)
- Left: 3 info cards (Phone/WhatsApp, Email, Location).
- Right: contact form (Name, Email, Message) + Send Message button + Download Resume button (opens modal).
- Form must actually submit (API route → email service, e.g., Resend/Nodemailer) — **not just static markup**.

### 5.12 Resume Modal
- Two options: MERN Stack Resume PDF, PHP Laravel Resume PDF — each downloadable.
- Accessible modal (focus trap, ESC to close, backdrop click to close).

### 5.13 Footer
- Logo, copyright, quick nav links, social icons (GitHub, LinkedIn, Email).

---

## 6. Non-Functional Requirements

### Performance
- Lighthouse score target: **90+** across Performance, Accessibility, Best Practices, SEO.
- Use `next/image` with proper `sizes`/`priority` for above-the-fold images.
- Self-host or optimize Google Fonts via `next/font` (no external font request blocking render).
- Remove/replace CDN scripts (Tailwind CDN, Lucide CDN, AOS CDN, Swiper CDN) with npm packages, tree-shaken and bundled.
- Code-split non-critical components (e.g., Resume Modal, FAQ) with dynamic imports where useful.
- Lazy-load below-the-fold images.

### Responsiveness
- Breakpoints: mobile (<640px), sm, md, lg, xl — matching existing Tailwind classes.
- Add a **mobile navigation menu** (missing in original static markup — nav is `hidden md:flex`).
- Test on common device widths: 375px, 768px, 1024px, 1440px.

### SEO
- Migrate `<meta>` tags into Next.js `generateMetadata` / `metadata` export (title, description, keywords, OG tags, canonical URL).
- Add `sitemap.xml`, `robots.txt`.
- Semantic HTML: proper heading hierarchy, `alt` text on all images.

### Accessibility
- Keyboard-navigable nav, accordion, and modal.
- Sufficient color contrast in both light/dark themes.
- ARIA labels on icon-only buttons (theme toggle, social icons, close modal).

### Code Quality
- TypeScript strict mode.
- ESLint + Prettier configured.
- Content (projects, services, tech stack, FAQs) stored in typed data files, not inline JSX — for maintainability.
- Reusable UI primitives (Card, Badge, Button, SectionHeading).

---

## 7. Content Placeholders to Finalize Before Build
The static design contains placeholder values that need real data before/at launch:

- [ ] Real profile photos (hero + about) — replace Unsplash placeholders
- [ ] Real project screenshots for all 6 projects
- [ ] GitHub repo links and live demo URLs per project
- [ ] Phone/WhatsApp number
- [ ] Real email address
- [ ] GitHub, LinkedIn profile URLs
- [ ] MERN resume PDF + Laravel resume PDF files
- [ ] Domain name for `og:url` and canonical metadata
- [ ] Contact form backend/email delivery method decision

---

## 8. Out of Scope (for this phase)
- CMS integration (content is static/data-file driven for now).
- Blog section.
- Multi-language support.
- Authentication.

---

## 9. Deliverables
1. Next.js project scaffold (TypeScript + Tailwind configured).
2. All sections implemented as components matching the provided design pixel-for-pixel (light + dark mode).
3. Functional contact form with backend handling.
4. Deployed preview link (Vercel).
5. Lighthouse performance report.

---

## 10. Open Questions (to confirm with Habib before development starts)
1. Do you want the contact form to send emails via a service (Resend/EmailJS) or just log submissions for now?
2. Should the mobile menu be a slide-in drawer or a full-screen overlay?
3. Do you have final project screenshots/images, or should placeholders remain until ready?
4. Any analytics requirement (Google Analytics / Vercel Analytics)?
