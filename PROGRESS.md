## Andrew's Corner — Restructure Progress

### Completed

#### Foundation & Architecture
- [x] **Component restructure**: All sections extracted into src/components/
- [x] **CSS consolidation**: All inline styles moved to src/styles/App.css
- [x] **App.tsx ~30 lines**: Clean routing shell
- [x] **Contact form**: Wired to Formspree (success/error state, controlled inputs)
- [x] **Mobile hamburger menu**: Navbar rewrite with React state
- [x] **Routing**: react-router-dom multi-page SPA (7 routes)
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
- [x] **Owner names**: Initially set to Andrew & Karly on OurStoryPage (later corrected to Daniel & Karly)
- [x] **HoursSection**: Warm border added, owner names updated
- [x] **OurStoryPage**: Created with staff bios section
- [x] **FAQ links**: Internal anchor links from FAQ answers to relevant pages
- [x] **Navbar restructure**: "More" dropdown, all routes linked
- [x] **variables.css**: Full design token system (colors, spacing, typography)

#### SEO & Launch Readiness (Session 3 — Apr 20)
- [x] **Meta description**: Descriptive sentence for Google search snippets
- [x] **Meta keywords**: English + Greek terms for library, café, Thessaloniki
- [x] **Canonical tag**: Points to andrewscorner.org
- [x] **Open Graph tags**: og:title, og:description, og:image, og:url, og:locale for social sharing
- [x] **Twitter card tags**: summary_large_image card for Twitter/X link previews
- [x] **hreflang tags**: Greek and English alternates declared for bilingual SEO
- [x] **JSON-LD structured data**: Full LocalBusiness schema (CafeOrCoffeeShop + Library) with address, hours, phone, email, geo coordinates, amenities
- [x] **Favicon**: Fixed to use `/favicon.svg`
- [x] **Page title**: Updated to "Community Café & Library Thessaloniki"
- [x] **robots.txt**: Created in public/ — allows all crawlers, points to sitemap
- [x] **sitemap.xml**: Created in public/ — all routes with priorities and changefreq
- [x] **Gallery alt text**: All 20 carousel images have descriptive alt attributes
- [x] **Footer links**: Address links to Google Maps; Instagram and email clickable
- [x] **ContactSection directions**: Address links to Google Maps

#### Content & Polish (Session 4 — Apr 20)
- [x] **Owner names**: Changed from Andrew & Karly to Daniel & Karly on OurStoryPage
- [x] **Familiar Faces order**: Reordered to Vasilea, Myrto (center), Mixalis (right)
- [x] **Gallery cream background**: Full-width cream band matching About section style
- [x] **FAQ photo links**: Stacks room → photo 5/20, Sinai Room → photo 19/20, Quiet Zone → photo 2/20
- [x] **Phone number**: Reformatted to +30 2310 832 265 in ContactSection
- [x] **John 12:20 reference**: Removed trailing "ff" in about.json
- [x] **Bible verse tooltips**: Hover tooltips on John 12:20 and John 12:28 — fetches live verse from bible-api.com (WEB, public domain)

#### Launch Session (Session 5 — Jun 20)
- [x] **Menu page removed**: Andrew requested café be de-emphasized — MenuPage.tsx deleted, all nav links removed
- [x] **Our Story promoted**: Moved from "More" dropdown to main navbar
- [x] **Our Story content**: Full story text from Daniel's email added to OurStoryPage.tsx
- [x] **Daniel & Karly photo**: Added to Our Story page and Familiar Faces (first card)
- [x] **Apartment photos**: 9 photos added to Retreat page as a carousel (apt-1.jpg through apt-9.jpg)
- [x] **Greek side**: Global "coming soon" screen replaces all partial Greek content — clean and intentional
- [x] **Default language**: Changed from Greek to English — site opens in EN
- [x] **Netlify connected**: Site live at andrewcornerwebsite.netlify.app, deploying from GitHub main
- [x] **Domain added in Netlify**: andrewscorner.org added, pending DNS verification
- [x] **README overhauled**: All external services documented, Netlify + DNS instructions included
- [x] **Repo pushed**: GitHub fully up to date

### Waiting On (as of Jun 20)

- [ ] **Daniel — Namecheap DNS**: Must log into namecheap.com and set custom nameservers to:
  - `dns1.p06.nsone.net`
  - `dns2.p06.nsone.net`
  - `dns3.p06.nsone.net`
  - `dns4.p06.nsone.net`
  - Once done, site goes live at andrewscorner.org and HTTPS activates automatically
- [ ] **Formspree test**: Send a test message through the contact form on the live site and confirm it arrives at Ella's inbox. Form ID is `xpqovoba`, managed at formspree.io under Ella's account.
- [ ] **GiveButter embed**: Daniel is working on a GiveButter campaign link. When received, replace placeholder in `src/components/DonationSection.tsx`
- [ ] **Staff bios**: Daniel will write bios for Daniel & Karly, Vasilea, Mixalis, Myrto. Update `src/components/FamiliarFaces.tsx` — the `bio` field on each staff object.

### Future Work (next session)

- [ ] **Greek translation**: Full Greek version — currently shows a "coming soon" screen. All components already have `language === 'el'` branches ready for content.
- [ ] **Google Search Console**: Add andrewscorner.org, verify ownership, submit `/sitemap.xml` so Google indexes the site
- [ ] **Google Analytics**: Add GA4 script tag to index.html for visitor tracking
- [ ] **Google Business Profile**: Link website, add photos, manage reviews
- [ ] **Staff bios**: Once Daniel writes them, update FamiliarFaces.tsx bio fields and remove "coming soon" text

### External Services Reference

| Service | Purpose | Account | Notes |
|---|---|---|---|
| Netlify | Hosting + auto-deploy | davidmele123@yahoo.com | Connected to GitHub main branch |
| AndrewsCorner.org | Domain | Daniel Napier — Namecheap | Needs nameservers updated |
| Formspree `xpqovoba` | Contact form emails | ellamcmillan2005@gmail.com | Verify destination email |
| Ashrei LibraryASP | Library catalog | Daniel manages | `ashrei.libertyasp.co.uk/library/libraryHome.do` |
| GiveButter | Donations | Daniel setting up | Embed code pending |
| Instagram | Social | `@andrewscorner.skg` | Linked in footer + contact |
