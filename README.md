# Portfolio Website (Next.js 15)

A single-page, data-driven portfolio with dark/light theming and a declassified enterprise aesthetic.

## Local preview instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the preview:
   - http://localhost:3000

## GitHub Pages preview (manual deploy)

This project is configured for static export (`output: "export"`) so you can deploy it to GitHub Pages manually.

1. Build static output:
   ```bash
   npm run build
   ```
2. The generated site will be in:
   - `out/`
3. Deploy the `out/` folder to GitHub Pages (for example, publish to `gh-pages` branch root).

4. (Optional) for non-GitHub hosting that supports runtime headers, enable:
   - `ENABLE_RUNTIME_HEADERS=true`

### Repo path support (`/new-website/`)
If deploying to `https://<user>.github.io/new-website/`, set:
- `NEXT_PUBLIC_SITE_URL=https://<user>.github.io/new-website/`
- `NEXT_PUBLIC_BASE_PATH=/new-website`

## Custom domain hosting (GitHub Pages)

If you want a custom domain (e.g., `gouthampamarthy.com`):

1. Create a file at:
   - `public/CNAME`
2. Put your domain in that file (single line), for example:
   ```
   gouthampamarthy.com
   ```
3. Build again:
   ```bash
   npm run build
   ```
4. Deploy `out/` to GitHub Pages.
5. In GitHub repo settings → Pages:
   - Set Custom domain to your domain.
   - Enable **Enforce HTTPS**.

### DNS records for GitHub Pages

At your DNS provider:

- For apex domain (`gouthampamarthy.com`), add **A** records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- For `www`, add **CNAME**:
  - `www` → `<your-github-username>.github.io`

## Asset downloads & placement

Place custom assets in `public/images/` so Next.js can serve them with the `<Image />` component:

| Asset | File name | Location | Notes |
| --- | --- | --- | --- |
| Headshot | `headshot-placeholder.svg` | `public/images/` | Update `app/page.js` if the filename changes. |
| Project diagrams | `project-topology.svg`, `project-cloud.svg` | `public/images/` | Used in the Projects section. |
| Company logos | `sports-excitement-logo.svg`, `dreamstudio-logo.svg` | `public/images/` | Used in Experience timeline. |
| Certification badges | `osep-badge.svg`, `crte-badge.svg`, `aws-security-badge.svg` | `public/images/` | Used in Certifications section. |
| Resume | `resume.pdf` | `public/` | Replace placeholder with your actual resume. |

If you download official logos or badges, place them in `public/images/` and update the corresponding `src` paths in `app/page.js` and data files.

## Docs

- `EDITING.md` — update content (projects, experience, certifications, assets).
- `DEPLOYMENT.md` — deployment and domain setup.
- `THEMING.md` — theme tokens and contrast-safe color customization.
