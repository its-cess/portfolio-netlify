# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server at http://localhost:3000
npm run build    # Production build (output: build/)
npm test         # Jest + React Testing Library
```

## Architecture

React 18 SPA built with Create React App, React Router v6, React-Bootstrap, and SASS/SCSS.

**Routing** — defined in `src/App.js`, 5 routes: `/`, `/about-me`, `/experience`, `/projects`, `/contact-me`.

**Data** — all content is static, hardcoded in two source-of-truth files:
- `src/projectData.js` — array of project objects rendered on the Projects page
- `src/ticketData.js` — array of experience/ticket objects rendered on the Experience page

These are passed as props to item components (`ProjectItem`, `TicketItem`).

**Component structure:**
- `src/navigation/` — responsive navbar
- `src/components/pages/` — one file per route
- `src/components/items/` — reusable card components consumed by page components
- `src/components/base/` — shared primitives (e.g., `Header`)

Each component has a co-located `.styles.scss` file. Global styles are in `src/index.scss`.

**Images** are stored in `public/images/` and referenced via `process.env.PUBLIC_URL`.

**Deployment** — Netlify with `public/_redirects` (`/* /index.html 200`) for SPA routing. No `netlify.toml`; Netlify uses default CRA settings (build command: `npm run build`, publish dir: `build/`).
