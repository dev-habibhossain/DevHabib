# PRD.md
## Product Requirements Document — Habib Hossain Portfolio Website

| | |
|---|---|
| **Product** | Habib.dev — Personal Developer Portfolio |
| **Author** | Habib Hossain |
| **Status** | Draft v1.0 |
| **Last Updated** | 2026-08-01 |
| **Related Docs** | `project_requirement.md` (technical requirements), `Design_guideline.md` (design system) |

---

## 1. Summary

Habib Hossain, a Full Stack Developer (MERN Stack & PHP Laravel) based in Lakshmipur, Bangladesh, needs a personal portfolio website to showcase his skills, projects, and availability to potential employers and clients. A complete visual design already exists as a static HTML/Tailwind prototype. This PRD defines **what the product must do and why** — rebuilt on Next.js for production-grade performance, SEO, and maintainability.

---

## 2. Problem Statement

Habib is a fresher actively seeking his first professional role (remote or on-site). Without a polished, fast, credible online presence:
- Recruiters/clients have no single place to evaluate his real projects, skills, and stack depth.
- A resume PDF alone doesn't demonstrate front-end/full-stack craftsmanship the way a live, well-built site does.
- A slow or poorly built portfolio can actively hurt credibility for a developer — the site itself is part of the "proof of skill."

**The portfolio is both a showcase and a demonstration of ability.** It must load fast, work flawlessly on mobile (where many recruiters browse), and reflect genuine engineering quality.

---

## 3. Goals

### Primary Goals
1. Present Habib's skills, projects, and experience clearly and credibly to recruiters/clients.
2. Generate qualified contact/inquiries (messages, resume downloads, "Hire Me" clicks).
3. Demonstrate technical competency through the build quality of the site itself (fast, responsive, accessible).

### Secondary Goals
1. Rank in search results for name + relevant stack keywords ("Habib Hossain developer", "MERN Laravel developer Bangladesh").
2. Serve as a living project Habib can keep extending (new projects, blog, etc. in future phases).

### Non-Goals (out of scope for v1)
- Blog / CMS-driven content.
- Multi-language support.
- User accounts, authentication, or any backend beyond the contact form.
- E-commerce or payment functionality.

---

## 4. Target Users / Audience

| Persona | Description | What they need from the site |
|---|---|---|
| **Hiring Manager / Recruiter** | Screening candidates quickly, often on mobile, limited time per profile | Fast load, clear stack summary, real project proof, easy way to contact or get resume |
| **Technical Interviewer / CTO** | Wants to judge actual code quality and project depth | Working GitHub/live demo links, accurate tech tags, clean code architecture (reflects in site itself) |
| **Freelance Client** | Non-technical, evaluating trust and professionalism | Clear services list, easy contact form, professional visual design |
| **Habib (site owner)** | Needs to maintain/update content over time | Data-driven content (not hardcoded HTML), simple to add new projects |

---

## 5. Success Metrics

| Metric | Target |
|---|---|
| Lighthouse Performance score | ≥ 90 |
| Lighthouse Accessibility score | ≥ 90 |
| Lighthouse SEO score | ≥ 95 |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Mobile usability | 100% (no horizontal scroll, no overlap, tap targets ≥ 44px) |
| Contact form success rate | Submissions reliably delivered (0 silent failures) |
| Cross-browser support | Latest Chrome, Firefox, Safari, Edge (desktop + mobile) |

*(These are engineering/quality proxies — since this is a personal portfolio, there are no live traffic/conversion analytics targets defined yet; can be added once analytics are wired up.)*

---

## 6. Scope — Feature List (Functional Requirements)

### Must-Have (v1 launch blockers)
- [ ] Responsive multi-section one-page layout: Home/Hero, About, Tech Stack, Services, Projects, Education & Experience, Testimonial/Status, FAQ, Contact, Footer.
- [ ] Working dark/light theme toggle with persisted preference.
- [ ] Functional, filterable Projects grid (All / Laravel / MERN-Next).
- [ ] Functional Resume Download modal (2 resume variants: MERN, Laravel).
- [ ] Functional Contact form that actually delivers messages (email service integration).
- [ ] Accessible mobile navigation menu (new — not in original static prototype).
- [ ] SEO metadata (title, description, keywords, Open Graph) migrated to Next.js metadata API.
- [ ] All images optimized via `next/image`.
- [ ] Smooth scroll-based animations (respecting reduced-motion preference).
- [ ] Deployed live on Vercel with custom/portfolio domain.

### Should-Have
- [ ] Animated stat counters on scroll (projects built, skills, stacks, availability %).
- [ ] Infinite tech-stack marquee.
- [ ] FAQ accordion.
- [ ] Basic analytics (Vercel Analytics or GA4) to track visits and contact form conversions.

### Could-Have (future phases)
- [ ] Blog/articles section.
- [ ] CMS integration (e.g., Sanity/Contentful) so projects/services can be edited without code changes.
- [ ] Testimonials from real clients/employers (once available).
- [ ] Case-study detail pages per project (currently only cards).

### Won't-Have (this phase)
- Multi-language i18n.
- User login/dashboard.
- Payment/e-commerce features.

---

## 7. User Stories

1. **As a recruiter**, I want to quickly see Habib's core stack and years/type of experience above the fold, so I can decide in seconds whether to keep reading.
2. **As a recruiter**, I want to filter projects by stack (Laravel vs MERN/Next), so I can see relevant work matching my open role.
3. **As a technical reviewer**, I want working GitHub and live-demo links on every project, so I can verify real code and running applications.
4. **As a client**, I want a simple contact form, so I can reach out without needing to find an email address manually.
5. **As any visitor**, I want the site to load instantly and look correct on my phone, so I don't bounce before seeing the content.
6. **As a visitor interested in hiring**, I want to download a role-specific resume (MERN or Laravel) directly, so I don't have to ask for it separately.
7. **As Habib**, I want to add a new project or update my skills by editing a data file, not rewriting HTML, so maintenance is fast and low-risk.

---

## 8. Assumptions & Dependencies

- Final content assets (real photos, project screenshots, resume PDFs, live links) will be supplied by Habib before final launch (tracked in `project_requirement.md` §7).
- Contact form requires a decision on email delivery provider (e.g., Resend, Nodemailer + SMTP, or a form service like Formspree) — **open decision, see §10**.
- Hosting/deployment target: Vercel (aligns with Next.js).
- No existing backend/database — this remains a static/server-rendered site with one API route (contact form).

---

## 9. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Placeholder content ships to production (Unsplash images, fake links) | Undermines credibility with recruiters | Content checklist (§7 of requirements doc) must be fully resolved before go-live |
| Heavy CDN libraries carried over from prototype (Tailwind CDN, AOS CDN, Swiper CDN) | Hurts performance goals | Migrate all to npm/bundled equivalents during build |
| No mobile nav in original design | Broken UX for majority of recruiter traffic (mobile-heavy) | Explicitly required in scope (§6) |
| Contact form has no backend yet | Missed inquiries, silent failures | Must select and implement an email delivery method before launch |
| Animation-heavy prototype could hurt performance/accessibility if ported naively | Fails Lighthouse/CLS targets, accessibility issues | Use lightweight animation libs, respect `prefers-reduced-motion`, lazy-load non-critical animation code |

---

## 10. Open Decisions (need Habib's input before/at build start)

1. **Contact form backend:** Resend / Nodemailer+SMTP / Formspree / other?
2. **Mobile menu style:** slide-in drawer vs full-screen overlay?
3. **Analytics:** Vercel Analytics, Google Analytics, or none for v1?
4. **Domain name:** what's the production URL (for OG tags, sitemap, canonical)?
5. **Content readiness:** are real project screenshots/links/resume PDFs ready now, or should the build proceed with clearly-marked placeholders?

---

## 11. Milestones (Suggested)

| Phase | Deliverable |
|---|---|
| **Phase 1 — Setup** | Next.js + TypeScript + Tailwind scaffold, fonts, theme system, base layout |
| **Phase 2 — Core Sections** | Hero, About, Tech Stack, Services built and responsive |
| **Phase 3 — Dynamic Sections** | Projects (with filtering), Education/Experience, FAQ, Testimonial |
| **Phase 4 — Interactions** | Resume modal, Contact form + backend, mobile nav, theme toggle polish |
| **Phase 5 — Optimization** | Image optimization, Lighthouse pass, accessibility audit, SEO metadata |
| **Phase 6 — Launch** | Real content swapped in, deployed to Vercel, final QA across devices |

---

## 12. Appendix

- Full technical/implementation requirements: see **`project_requirement.md`**
- Visual design system (colors, typography, components, motion): see **`Design_guideline.md`**
