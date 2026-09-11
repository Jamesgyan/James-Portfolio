
# Futuristic Portfolio — James Gyan Prakash H

A single-page, dark-only, cyberpunk-glassmorphism portfolio inspired by Apple / Tesla / Vercel, built on the existing TanStack Start + Tailwind v4 stack (no React Router / Vite bootstrapping changes required).

## Stack reconciliation (important)

Your list mentions React Router + Vite bootstrap. The project is already on **TanStack Start (React 19 + Vite + TS + Tailwind v4)**, which is the modern replacement. I will use TanStack Router (not react-router-dom) — everything else from your list stays.

Included: Framer Motion, GSAP + ScrollTrigger, React Three Fiber + drei (particles / animated grid), Lenis smooth scroll, react-icons, EmailJS contact form, SEO head tags + JSON-LD, lazy-loaded 3D scenes.

Skipped by default (say the word to add): Supabase backend, dark/light toggle (spec says "Dark Theme only" — I'll honor that and drop the toggle). Lottie is optional; I'll only add if you have a specific JSON.

## Structure

Single scrolling page at `/` with in-page anchor nav (Home, About, Skills, Experience, Projects, Education, Certifications, Services, Contact). SEO metadata set on `/` head().

```text
src/
  routes/
    __root.tsx           (update title/description/OG, load Space Grotesk + Inter via <link>)
    index.tsx            (assembles all sections + Lenis + cursor glow)
  components/
    portfolio/
      Nav.tsx
      Hero.tsx           (R3F particles + glow grid, typing effect, CTAs, socials)
      About.tsx          (animated stat counters, bio)
      TechStack.tsx      (grouped glowing skill cards)
      Experience.tsx     (vertical animated timeline)
      Projects.tsx       (3D-tilt premium cards, live/github buttons)
      Education.tsx
      Certifications.tsx (neon badges)
      Achievements.tsx
      Services.tsx
      WhyHireMe.tsx
      Contact.tsx        (EmailJS form + info)
      Footer.tsx
      fx/
        ParticleField.tsx     (R3F, lazy)
        GridFloor.tsx         (R3F, lazy)
        CursorGlow.tsx
        MagneticButton.tsx
        TiltCard.tsx
        GradientText.tsx
        SectionReveal.tsx     (framer-motion in-view)
        StatCounter.tsx
  hooks/
    useLenis.ts
    useMagnetic.ts
  lib/
    portfolio-data.ts    (all content from CV + spec)
  assets/
    resume.pdf           (uploaded CV, exposed via lovable-assets)
    avatar.jpg           (generated glowing portrait placeholder)
```

## Design system

Update `src/styles.css`:
- Dark-only tokens: background `#05060f`, foreground near-white, primary cyan `oklch(~0.85 0.15 210)`, accent purple `oklch(~0.65 0.25 300)`, deep-blue surfaces.
- Add tokens: `--neon-cyan`, `--neon-purple`, `--neon-blue`, `--glass-bg`, `--glass-border`, gradient tokens (`--gradient-hero`, `--gradient-text`), neon shadow tokens.
- `@utility` classes: `.glass`, `.neon-border`, `.gradient-text`, `.glow-cyan`, `.glow-purple`, custom scrollbar via `::-webkit-scrollbar`.
- Fonts loaded via `<link>` in `__root.tsx` head: Space Grotesk (display) + Inter (body); registered under `@theme` `--font-display` / `--font-sans`.
- Force `<html class="dark">` in root shell so shadcn dark tokens apply.

## Content (from your CV + spec)

- Name / roles / socials / phone / email / location: pulled verbatim from CV.
- Experience: Kristu Jayanti SDC (Jun–Jul 2023) + Vorcas Tech Lab (Nov 2025 – Feb 2026) with full bullet lists.
- Projects: INDISARA, Mar Thoma Church, Rainfall Analysis, Sign Language Recognition — each with tech badges, live link where available, GitHub link to `github.com/Jamesgyan`.
- Education, Certifications, Services, Why-Hire-Me: as listed.
- Resume download: uploaded PDF served through Lovable Assets and linked from Hero + Nav.

## Interaction / effects

- Lenis smooth scroll wrapper mounted once in `index.tsx`.
- Custom cursor glow (pointer-follow radial gradient), hidden on touch.
- Hero: R3F canvas with instanced particle field + shader-ish animated grid floor (drei `Grid`), lazy-loaded via `React.lazy` + `<Suspense>` so SSR stays clean.
- Typing effect for role list (custom hook, no extra dep).
- Framer Motion `whileInView` reveals + stagger for every section.
- GSAP + ScrollTrigger for the vertical timeline draw-in and the projects horizontal parallax.
- Tilt cards (custom, pointer-based) for Projects; magnetic buttons for CTAs.
- Stat counters animate on scroll into view.
- Reduced-motion: respect `prefers-reduced-motion` — skip particles + heavy GSAP.

## Contact form (EmailJS)

- `@emailjs/browser` client-side send.
- Requires 3 public IDs: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`. I'll wire the form with clear placeholders and a friendly "not configured yet" toast until you provide them. Zod validation on all fields.

## SEO

- `/` head(): title "James Gyan Prakash H — Data Scientist & Full-Stack Developer", description, canonical `/`, og:title/description/type=website, og:image (generated hero cover), twitter:card=summary_large_image, JSON-LD `Person` schema with sameAs socials.
- Sitewide defaults + Organization/WebSite JSON-LD stay in `__root.tsx`.
- Semantic HTML (`<header> <nav> <main> <section id> <footer>`), single H1 in Hero, alt text on all images, lazy-loaded images, `<html lang="en">`.

## Dependencies to add

`framer-motion`, `gsap`, `three`, `@react-three/fiber`, `@react-three/drei`, `lenis`, `react-icons`, `@emailjs/browser`, `zod` (already likely present), `react-intersection-observer` (stat counters).

## Performance

- Three.js scene split into `React.lazy` chunk, only mounted client-side after hydration (`<ClientOnly>` pattern via `useHydrated`).
- All section components code-split with `React.lazy` where heavy.
- Images generated at reasonable sizes; avatar via `imagegen` (transparent glow portrait).
- No layout shift: fixed hero height, skeleton placeholders for lazy 3D.

## Out of scope for this build

- Supabase (nothing to persist — contact goes via EmailJS). Enable later if you want form submissions stored.
- Light theme toggle (spec: dark-only).
- Multi-page routing (single-page site with hash anchors is the right shape for this content).

## Deliverable

A production-ready `/` page with all sections above, real CV content, working resume download, working EmailJS form (pending your keys), SEO tags, and the futuristic dark-neon aesthetic.
