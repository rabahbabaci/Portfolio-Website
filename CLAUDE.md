# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint (next lint)

## Architecture

Next.js 13 portfolio site using the **Pages Router** (`src/pages/`), Tailwind CSS, and Framer Motion.

**Routing:** `src/pages/` — index (home), about, projects, articles, 404. `_app.js` wraps all pages with Navbar, Footer, and Framer Motion's AnimatePresence for page transitions. `_document.js` includes a dark-mode initialization script.

**Components:** `src/components/` — all reusable UI. Key ones: Navbar (responsive with mobile menu), Experience/Education (scroll-animated timelines), Skills (circular animated layout), TransitionEffect (page transition overlays), AnimatedText (staggered word animations).

**Styling:** Tailwind with class-based dark mode. Custom theme colors defined in `tailwind.config.js`: `dark`, `light`, `primary`, `primaryDark`. Custom breakpoints for responsive design (xs through 2xl). No CSS modules in active use.

**Content:** All data (projects, experience, education, articles, skills) is hardcoded directly in page/component files — no CMS or external data source.

**Path alias:** `@/*` maps to `./src/*` (configured in `jsconfig.json`).

**Theme:** Dark/light mode via `useThemeSwitch` hook in `src/components/Hooks/`, persisted in localStorage.
