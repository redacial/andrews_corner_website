## Andrew's Corner — Restructure Progress

### Completed
- [x] **Issue 1 — Component restructure**: All sections extracted into src/components/
- [x] **Issue 2 — CSS consolidation**: All inline styles moved to src/styles/App.css
- [x] **Issue 3 — App.tsx ~30 lines**: Done
- [x] **Issue 4 — Contact form**: Wired to Formspree (success/error state, controlled inputs)
- [x] **Issue 5 — Mobile hamburger menu**: Done (Navbar rewrite with React state)
- [x] **Routing**: Converted to react-router-dom multi-page SPA (6 routes)
- [x] **Navbar**: Full rewrite — router Links, hamburger, "More" dropdown, logo
- [x] **Hero**: Full-screen background video (hero.mp4) with overlay
- [x] **FAQ section**: Accordion with 13 real English Q&As
- [x] **Gallery page**: 5 YouTube embeds + photos placeholder
- [x] **Hours**: Split into HoursSection.tsx, lives on Events page
- [x] **Netlify _redirects**: SPA fallback configured

### Must Fix Before Launch
- [ ] **Logo path bug**: Navbar loads logo via `/src/assets/logo.png` — will break in production build. Must use Vite import instead.
- [ ] **RetreatPage**: RetreatSection returns null when language === 'el' — whole page is blank for Greek users. Needs a fallback message or redirect.

### Known Gaps (content still needed)
- Greek FAQ content (3 placeholders in FAQSection.tsx)
- Photos (GallerySection has placeholder)
- GiveButter embed code (DonatePage placeholder)

### Remaining Issues (lower priority)
- [ ] Fix contact form (Netlify Forms) — currently using Formspree instead, works fine
