# Andrew's Corner Website

Live site: **[AndrewsCorner.org](https://AndrewsCorner.org)** *(domain purchased — awaiting DNS connection to Netlify)*

Community library & café in Thessaloniki, Greece. Built with React + TypeScript + Vite, deployed on Netlify.

---

## Remaining Steps to Go Live

1. **Confirm Formspree email** — A partner set up the Formspree account (`xpqovoba`). Log in at [formspree.io](https://formspree.io) to verify the contact form submissions go to the right inbox, then send a test message through the site.
2. **Connect domain to Netlify** — Daniel purchased `AndrewsCorner.org`. In the domain registrar (wherever it was bought), point the nameservers to Netlify's, or add a CNAME record pointing to the Netlify site URL. Then add the custom domain inside Netlify → Site Settings → Domain Management.
3. **Greek translation** — The Greek side currently shows a "coming soon" screen. Full translation is a future phase.
4. **GiveButter embed** — Daniel is working on a GiveButter link for the Donate page. Once received, replace the placeholder in `src/pages/DonatePage.tsx`.
5. **Staff bios** — Daniel will write bios for Daniel & Karly, Vasilea, Mixalis, and Myrto. Update `src/components/FamiliarFaces.tsx` when ready.

---

## Updating Content (No Code Required)

Edit the JSON files in `src/data/`:

| File | What it controls |
|---|---|
| `src/data/hours.json` | Opening hours displayed on the home page |
| `src/data/events.json` | Upcoming events list |
| `src/data/about.json` | Mission statement, vision, FAQ answers |
| `src/data/retreat.json` | Retreat & Sabbatical page text |

### Adding photos
Drop new images into `public/photos/`. They're served at `/photos/your-file.jpg`.

---

## Deploying to Netlify

The site auto-deploys on every push to `main`.

To set up from scratch:
1. Create a free account at [netlify.com](https://www.netlify.com)
2. **Add new site → Import an existing project → GitHub**
3. Select this repo
4. Build command: `npm run build` | Publish directory: `dist`
5. Click **Deploy**

The `public/_redirects` file handles SPA routing so page refreshes work correctly.

---

## Developer Reference

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Vanilla CSS with design tokens in `src/styles/variables.css`
- **Routing:** react-router-dom (7 routes)
- **Language:** `src/context/LanguageContext.tsx` — English default, Greek "coming soon" screen
- **Contact form:** Formspree (`xpqovoba`) — verify destination email at formspree.io
- **Photos:** `public/photos/` — staff, gallery, apartment (retreat page)
- **SEO:** Full Open Graph, Twitter card, JSON-LD LocalBusiness schema, sitemap, robots.txt in `public/`

### Project structure
```
src/
  components/   # Navbar, Footer, sections (AboutSection, FamiliarFaces, etc.)
  pages/        # One file per route (OurStoryPage, LibraryPage, RetreatPage, etc.)
  data/         # JSON content files (edit these to update text)
  styles/       # App.css + variables.css
  context/      # LanguageContext (EN/EL switcher)
public/
  photos/       # All site images
  _redirects    # Netlify SPA routing
  sitemap.xml
  robots.txt
```
