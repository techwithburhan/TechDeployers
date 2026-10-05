# TechDeployers WordPress Theme

WordPress version of the TechDeployers React site
(https://github.com/techwithburhan/TechDeployers). Same design, same pages,
but every text, service, testimonial and card is editable from the WordPress admin.

- No page builder, no ACF, no required plugins.
- No GSAP / React: animations are plain CSS + ~250 lines of vanilla JS.
- Tailwind is pre-compiled into `assets/css/main.css` (Node.js is NOT needed to use the theme).

---

## 1. Requirements

- WordPress 6.0 or newer (tested on 6.8)
- PHP 7.4 or newer

## 2. Install (5 minutes)

1. **Back up your site** if it already has content.
2. WordPress admin → **Appearance → Themes → Add New → Upload Theme**.
3. Choose `techdeployers.zip` → **Install Now** → **Activate**.
4. Click **TechDeployers** in the left admin menu (or the blue notice at the top).
5. Keep the boxes ticked and click **Import now**. This creates:
   - Pages: Home (set as front page), About Us, Contact Us, Blog (set as posts page)
   - 6 services with full details and pricing plans
   - 4 video testimonials, 8 capability cards in 2 groups
   - 6 blog posts with categories, tags and authors
   - Header menu + 2 footer menus
   - Blog URLs like `/blog/post-name/` (same as the React site)

   It is safe to run again; existing items are skipped.
   **Already have blog posts with other URLs?** Untick the permalinks box so your old links keep working.
6. Visit your site. Done.

## 3. Where to edit what

| What you want to change | Where |
|---|---|
| Hero text, buttons, stats, section titles, About page, contact details, footer, show/hide home sections | **Appearance → Customize → TechDeployers** (live preview) |
| Logo image | **Customize → Site Identity → Logo** (otherwise the text logo is used) |
| Services (list page, detail pages, pricing) | **Services** menu |
| Home page video reviews | **Testimonials** menu |
| Home page capability cards | **Capabilities** menu (groups under *Capability groups*) |
| Blog articles | **Posts** (normal WordPress) |
| Blog category badge colour | **Posts → Categories → edit category → Badge colour** |
| Header & footer links | **Appearance → Menus** |
| Contact-form messages & newsletter sign-ups | **Leads** menu |
| About page paragraphs / image | **Pages → About Us** (editor text + Featured Image) |

### Adding a service
**Services → Add New**
- **Title** – service name
- **Editor** – "Service Overview" text on the detail page
- **Excerpt** – short description on the Services page (enable it via the editor's *Post* sidebar if hidden)
- **Service details** box – hero text, icon, colour, and lists (one item per line)
- **Pricing plans** box – up to 4 plans; tick one as "Most Popular"; leave all empty to hide pricing
- **Order** (Page attributes) – sorting; lower numbers first

The URL is `/services/your-service-name/`.

### Adding a testimonial
**Testimonials → Add New**: title = client name, paste the YouTube link, quote, role, company,
tag + colour. Add a photo as Featured Image (or paste a photo URL).

### Writing blog posts
Write normally. Styling is automatic:
- **H2 headings** get the blue numbered badges (1, 2, 3…)
- **Bullet lists** get blue check marks
- The **Excerpt** becomes the highlighted intro box
- **Featured Image** is the cover (falls back to the *Cover image URL* field)
- Tick **Stick to the top of the blog** to show a post under *Featured Articles*
- *Article details* box (optional): author name/role override, manual read time

### Text fields with several items
Some Customizer fields take one item per line with parts separated by `|`, e.g.

```
shield|High Availability|Architecting systems with 99.9% uptime guarantees.
98%|Client Retention
```

The field description tells you the exact format. Icon names are listed under each field.
Empty a badge/heading field to hide it.

## 4. Contact form email

Messages are emailed to the address in **Customize → TechDeployers → Contact Details & Form**
(empty = the site admin email) **and** always saved under **Leads**, so nothing is lost.

Many hosts block PHP mail. If emails don't arrive, install **WP Mail SMTP** (free) and connect your
email provider. Pricing-plan buttons open the contact form with the chosen plan pre-filled.

## 5. Troubleshooting

| Problem | Fix |
|---|---|
| A service or blog page shows "Not found" | **Settings → Permalinks → Save Changes** (no changes needed) |
| Home page shows a list of posts | **Settings → Reading → A static page**, Homepage = Home, Posts page = Blog |
| About/Contact page looks plain | Edit the page → Page settings → **Template** → *About (TechDeployers)* / *Contact (TechDeployers)* |
| Text changes don't appear | Clear your caching plugin / host cache |
| Blog shows 9 posts per page | **Settings → Reading → Blog pages show at most** |

## 6. File structure

```
techdeployers/
├── style.css                 Theme info
├── functions.php             Setup, scripts, includes
├── header.php / footer.php   Navbar + footer (with newsletter form)
├── front-page.php            Home
├── archive-td_service.php    /services/
├── single-td_service.php     /services/{name}/
├── home.php archive.php search.php index.php → template-parts/blog-listing.php
├── single.php                Blog article
├── template-about.php        Page template "About (TechDeployers)"
├── template-contact.php      Page template "Contact (TechDeployers)"
├── page.php 404.php comments.php
├── template-parts/
│   ├── home/                 hero, testimonials, capabilities, why, latest-posts, cta
│   ├── components/           post-card, cta-band, dark-bg
│   └── blog-listing.php
├── inc/
│   ├── customizer.php        All editable texts + defaults
│   ├── post-types.php        Services, Testimonials, Capabilities, Leads
│   ├── meta-boxes.php        Admin fields (incl. pricing plans)
│   ├── term-meta.php         Category colour, group order
│   ├── forms.php             Contact + newsletter handlers
│   ├── demo-data.php + demo/ One-click importer (original React content)
│   ├── admin.php             TechDeployers setup screen
│   ├── helpers.php           Shared functions
│   └── icons.php             Lucide icons (same set as the React app)
├── assets/css/main.css       Compiled Tailwind – don't edit by hand
├── assets/js/main.js         Menu, carousel, counters, reveal, tilt, search
└── src/input.css             Tailwind source (only for rebuilding)
```

## 7. Changing the design (developers only)

Normal content editing never needs this. If you edit PHP templates and add **new** Tailwind
classes, rebuild the CSS (requires Node.js 18+):

```bash
cd wp-content/themes/techdeployers
npm install
npm run build      # or: npm run watch
```

Custom CSS (animations, article styling) is in `src/input.css` below the Tailwind import.
For small tweaks without Node, use **Customize → Additional CSS**.

## 8. Keeping it in your GitHub repo

Suggested layout:

```
TechDeployers/
├── src/ …                   (existing React app)
└── wordpress-theme/
    └── techdeployers/       (this folder)
```

To install from GitHub: zip the `techdeployers` folder itself (so the zip contains
`techdeployers/style.css`) and upload it as in step 2.

## 9. Differences from the React version

- Forms really work (email + saved as Leads), with spam honeypot and nonces.
- Blog category pills link to category pages; search uses WordPress search
  (typing still filters the visible cards instantly).
- Capability cards can link to a page (optional field).
- Footer "Cloud Solutions" link now points to an existing service (it was broken).
- Animations respect the visitor's "reduce motion" setting.
- Small mobile fixes (no sideways scrolling).
