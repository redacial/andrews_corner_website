# Andrew's Corner Website

**Live domain:** AndrewsCorner.org *(purchased — awaiting DNS connection to Netlify)*
**GitHub repo:** github.com/redacial/andrews_corner_website
**Hosting:** Netlify (free tier)
**Built with:** React 18 + TypeScript + Vite

---

## What This Project Is

Website for Andrew's Corner — a community library, café, and cultural space at Spartis 12, Thessaloniki, Greece. Founded by Daniel & Karly Napier.

---

## External Services (Things Not In This Repo)

Every service the site depends on that lives outside this codebase:

### 1. Netlify — Hosting
- **What it does:** Builds and serves the site. Auto-deploys every time code is pushed to the `main` branch on GitHub.
- **Account:** Whoever connected the GitHub repo to Netlify holds the account. Check netlify.com.
- **Build settings:** Build command `npm run build` · Publish directory `dist`
- **SPA routing:** `public/_redirects` handles this automatically — do not delete that file.
- **To add the custom domain:** Netlify → Site Settings → Domain Management → Add custom domain → `andrewscorner.org`
- **Status:** Not yet connected to the custom domain.

### 2. AndrewsCorner.org — Domain
- **What it does:** The public-facing address of the website.
- **Who owns it:** Daniel Napier purchased it.
- **Where it was bought:** Unknown — Daniel needs to log into wherever he bought it (common registrars: GoDaddy, Namecheap, Google Domains/Squarespace).
- **What needs to happen:** Point the domain's DNS to Netlify (instructions below for Daniel).
- **Status:** Purchased but not yet connected.

### 3. Formspree — Contact Form
- **What it does:** Receives contact form submissions from the site and forwards them as emails.
- **Form ID:** `xpqovoba` (this is hardcoded in `src/components/ContactSection.tsx`)
- **Who set it up:** A project partner (Ella). Log in at formspree.io to check/change the destination email.
- **To test:** Fill out the contact form on the live site and confirm an email arrives.
- **To update the destination email:** formspree.io → log in → find form `xpqovoba` → Settings → Notification Email.
- **Status:** Set up, destination email unconfirmed.

### 4. Library Catalog — Ashrei/LibraryAsp
- **What it does:** The "Browse the Catalog" button on the Library page links here.
- **URL:** `https://ashrei.libertyasp.co.uk/library/libraryHome.do`
- **What it is:** A hosted library catalog service that holds the 28,000+ volume index donated from Austin Graduate School of Theology.
- **Who manages it:** Daniel / Andrew's Corner manages the catalog content on that platform.
- **Code location:** `src/components/LibrarySection.tsx` line 17
- **Status:** Live and working.

### 5. GiveButter — Donations
- **What it does:** Will provide the donation widget/button on the Give page.
- **Current state:** The Donate page (`/donate`) shows a placeholder — GiveButter embed code has not been received yet.
- **When Daniel provides it:** Replace the placeholder in `src/components/DonationSection.tsx` with the GiveButter embed snippet.
- **Status:** Pending — Daniel is working on it.

### 6. Google Fonts
- **What it does:** Loads Playfair Display (headings) and Lora (body text).
- **Where it lives:** `index.html` lines 79–81. Loads from Google's CDN at page load.
- **No account needed** — public free service.

### 7. Instagram
- **Handle:** `@andrewscorner.skg`
- **Where it appears:** Footer link and Contact section.
- **Code location:** `src/components/Footer.tsx` and `src/components/ContactSection.tsx`

### 8. Google Maps
- **What it does:** Address links open Google Maps directions to Spartis 12.
- **No account needed** — uses a plain Google Maps search URL.

---

## Remaining Steps Before Site Is Fully Live

- [ ] **Netlify ↔ GitHub:** Connect repo to Netlify if not already done (see instructions below)
- [ ] **Custom domain:** Daniel points AndrewsCorner.org DNS to Netlify (instructions below)
- [ ] **SSL:** Netlify auto-provisions HTTPS once the domain is connected — no action needed
- [ ] **Formspree:** Confirm destination email at formspree.io, send a test message
- [ ] **GiveButter:** Add embed code to `src/components/DonationSection.tsx` when Daniel sends it
- [ ] **Staff bios:** Daniel will write bios for Daniel & Karly, Vasilea, Mixalis, Myrto — update `src/components/FamiliarFaces.tsx`
- [ ] **Greek translation:** Full Greek version is a future phase — currently shows a "coming soon" screen

---

## How to Update Content (No Code Needed)

Edit JSON files in `src/data/` then push to GitHub — Netlify redeploys automatically.

| File | Controls |
|---|---|
| `src/data/hours.json` | Opening hours on the home page |
| `src/data/events.json` | Events list |
| `src/data/about.json` | Mission statement, vision, FAQ answers |
| `src/data/retreat.json` | Retreat & Sabbatical page text |

### Adding photos
Drop images into `public/photos/`. They're served at `/photos/filename.jpg`.

---

## Developer Setup

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build into dist/
```

### Project structure
```
src/
  components/     Navbar, Footer, AboutSection, FamiliarFaces, RetreatSection, etc.
  pages/          One file per route: OurStoryPage, LibraryPage, RetreatPage, etc.
  data/           JSON content files — edit these to update text without touching code
  styles/         App.css + variables.css (design tokens: colors, spacing, fonts)
  context/        LanguageContext.tsx — EN default, EL shows "coming soon" screen
public/
  photos/         All site images (staff, gallery, apartment)
  _redirects      Netlify SPA routing — required, do not delete
  sitemap.xml     All 7 routes listed for Google
  robots.txt      Allows all crawlers
index.html        SEO tags, Open Graph, JSON-LD schema, font imports
```

### Routes
| Path | Page |
|---|---|
| `/` | Home (Hero, About, FAQ, Contact) |
| `/our-story` | The Story of Andrew's Corner |
| `/library` | Library catalog link |
| `/gallery` | Photo carousel (20 images) |
| `/events` | Events & hours |
| `/donate` | GiveButter placeholder |
| `/retreat` | Retreat & Sabbatical + apartment photos |

---

## Netlify Setup Instructions

**If the repo is not yet connected to Netlify:**

1. Go to [netlify.com](https://netlify.com) and log in (or create a free account)
2. Click **Add new site → Import an existing project**
3. Choose **GitHub** and authorize Netlify
4. Select the repo `redacial/andrews_corner_website`
5. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy site**
7. Netlify gives you a temporary URL like `random-name-123.netlify.app` — the site is live there immediately
8. Go to **Site Settings → Domain Management → Add custom domain** → type `andrewscorner.org`
9. Netlify will show you the DNS instructions to give Daniel

**Every future push to `main` on GitHub triggers an automatic redeploy.**

---

## Instructions for Daniel (Domain DNS)

*(Give Daniel these exact steps)*

You purchased `AndrewsCorner.org`. To connect it to the website:

1. Log into wherever you bought the domain (GoDaddy, Namecheap, Google Domains, etc.)
2. Find the **DNS settings** for `andrewscorner.org`
3. You'll receive two nameserver addresses from us (from Netlify) that look like:
   ```
   dns1.p0X.nsone.net
   dns2.p0X.nsone.net
   ```
4. Replace the current nameservers with those two addresses
5. Save — DNS changes take up to 24 hours but usually under an hour
6. Netlify will automatically provision a free SSL certificate (HTTPS) once it detects the domain

**Alternatively** (if you don't want to change nameservers):
- Add a **CNAME record**: `www` → `[netlify-site-name].netlify.app`
- Add an **A record**: `@` → Netlify's load balancer IP (Netlify provides this in their dashboard)
