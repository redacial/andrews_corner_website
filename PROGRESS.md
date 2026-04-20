## Andrew's Corner — Restructure Progress

### Completed

#### Foundation & Architecture
- [x] **Component restructure**: All sections extracted into src/components/
- [x] **CSS consolidation**: All inline styles moved to src/styles/App.css
- [x] **App.tsx ~30 lines**: Clean routing shell
- [x] **Contact form**: Wired to Formspree (success/error state, controlled inputs)
- [x] **Mobile hamburger menu**: Navbar rewrite with React state
- [x] **Routing**: react-router-dom multi-page SPA (8 routes)
- [x] **Netlify _redirects**: SPA fallback configured
- [x] **Logo path bug**: Fixed — Vite asset import, works in production build

#### Design & Visual Polish (Session 2 — Apr 20)
- [x] **Blue color scheme**: Full redesign with CSS variables (primary blue, walnut text, warm cream)
- [x] **Walnut navbar**: Text, logo, and border all updated to walnut (`#4a3728`)
- [x] **Warm cream borders**: Applied to photos, hours, FAQ, and about sections
- [x] **Font colors**: All body/heading text updated to walnut tones
- [x] **FAQ links**: Styled with blue italic underline for visibility
- [x] **Photo carousel**: Built with prev/next arrows, thumbnail sidebar, counter
- [x] **FamiliarFaces component**: Staff photo grid (Vasilea, Mixalis, Myrto)
- [x] **Staff names corrected**: Myrto2 photo, correct names throughout
- [x] **Owner names**: Andrew & Karly set correctly on OurStoryPage
- [x] **HoursSection**: Warm border added, owner names updated
- [x] **OurStoryPage**: Created with staff bios section
- [x] **MenuPage**: Created (placeholder for menu photo)
- [x] **FAQ links**: Internal anchor links from FAQ answers to relevant pages
- [x] **Navbar restructure**: "More" dropdown, all 8 routes linked
- [x] **variables.css**: Full design token system (colors, spacing, typography)

#### SEO & Launch Readiness (Session 3 — Apr 20)
- [x] **Meta description**: Descriptive sentence for Google search snippets
- [x] **Meta keywords**: English + Greek terms for library, café, Thessaloniki
- [x] **Canonical tag**: Points to production domain
- [x] **Open Graph tags**: og:title, og:description, og:image, og:url, og:locale for social sharing
- [x] **Twitter card tags**: summary_large_image card for Twitter/X link previews
- [x] **hreflang tags**: Greek and English alternates declared for bilingual SEO
- [x] **JSON-LD structured data**: Full LocalBusiness schema (CafeOrCoffeeShop + Library) with address, hours, phone, email, geo coordinates, amenities
- [x] **Favicon**: Fixed to use `/favicon.svg` (was incorrectly pointing to Vite default)
- [x] **Page title**: Updated to more descriptive "Community Café & Library Thessaloniki"
- [x] **robots.txt**: Created in public/ — allows all crawlers, points to sitemap
- [x] **sitemap.xml**: Created in public/ — all 8 routes with priorities and changefreq
- [x] **RetreatPage Greek fix**: Was returning null (blank page) for Greek users — now shows Greek summary + contact email
- [x] **Gallery alt text**: All 20 carousel images have descriptive, SEO-friendly alt attributes mentioning Andrew's Corner and Thessaloniki
- [x] **Footer links**: Address links to Google Maps; Instagram and email added as clickable links
- [x] **ContactSection directions**: Address now links to Google Maps with "Get Directions" / "Οδηγίες" label
- [x] **Build errors fixed**: Removed unused `React` and `HoursSection` imports in App.tsx — production build now clean

### Post-Launch Steps (manual — no code needed)
- [ ] **Google Search Console**: Add domain, verify ownership, submit sitemap.xml
- [ ] **Google Analytics**: Add GA4 script tag (or Plausible for privacy-friendly alternative)
- [ ] **Google Business Profile**: Get admin access, link website, add photos
- [ ] **Update domain in index.html**: Replace `andrewscorner.org` placeholder with actual live domain in canonical/og/sitemap URLs once confirmed

### Known Content Gaps (still needed)
- [ ] Greek FAQ content (3 placeholders in FAQSection.tsx)
- [ ] GiveButter embed code (DonatePage is placeholder)
- [ ] Menu photo/PDF (MenuPage is placeholder)
- [ ] Staff bios — Andrew, Karly, Vasilea, Mixalis, Myrto (all say "coming soon")
- [ ] Greek translations for About and Our Story sections (partial placeholders)
