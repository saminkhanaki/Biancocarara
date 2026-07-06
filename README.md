# Bianco Carrara — Website

Static site for **biancocarara.com** — marble, travertine, onyx and granite
quarried and exported from Iran and Turkey. No build step: plain HTML/CSS/JS,
ready to publish on GitHub Pages.

## Structure

```
index.html              Home — hero (Marble) + 3 featured stones + origin/about strip
about.html               About — story, sourcing, process
contact.html             Contact — quote request form + direct contact details
products/
  index.html             Products landing — all 4 categories
  marble.html
  travertine.html
  onyx.html
  granite.html
assets/
  css/style.css          All styling (design tokens at the top)
  js/main.js              Mobile nav, dropdown, scroll reveals, form placeholder
  images/                 Placeholder SVG stone textures — see images/README.md
CNAME                     Custom domain config for GitHub Pages
```

## Publish to GitHub Pages with your custom domain

1. **Create the repo** (if you haven't already) and push these files to the
   `main` branch, at the repository root:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. **Enable Pages**: on GitHub, go to *Settings → Pages*, set
   **Source: Deploy from a branch**, branch **main**, folder **/ (root)**, then Save.

3. **Custom domain**: the `CNAME` file already contains `biancocarara.com`, so
   GitHub will pick it up automatically once Pages is enabled. In the same
   *Settings → Pages* screen, confirm the custom domain field shows
   `biancocarara.com` and check **Enforce HTTPS** once the certificate is issued
   (can take up to ~24h after DNS is set).

4. **DNS at your domain registrar**: point `biancocarara.com` at GitHub Pages —
   add these four `A` records for the apex domain:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   Add a `CNAME` record for `www` pointing to `<your-username>.github.io` if you
   also want `www.biancocarara.com` to work.

5. Wait for DNS to propagate (minutes to a few hours), then the site is live at
   `https://biancocarara.com`.

## Before launch

- Replace the placeholder stone textures in `assets/images/` with real product
  photography — see `assets/images/README.md` for filenames and aspect ratios.
- Wire the contact form (`contact.html`) to a real endpoint (e.g. Formspree,
  Netlify Forms, or your own backend) — it currently only simulates a submit.
- Update the phone number, email, and office details in the footer and
  `contact.html` with your real contact information.
- Consider adding an Arabic and/or Turkish translation if your buyers are
  concentrated in those markets — the current site is English-only.
