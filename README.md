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

## Production build preview

1. Create an optimized build:
   ```bash
   npm run build
   ```
2. Run the production server:
   ```bash
   npm run start
   ```
3. Visit:
   - http://localhost:3000

## Hosting instructions

### Vercel (recommended)
1. Import the GitHub repo into Vercel.
2. Framework preset: **Next.js**
3. Build command: `npm run build`
4. Output: **Default** (handled by Next.js)
5. Deploy.

### Netlify
1. Connect the repo.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add the Next.js Runtime (Netlify will prompt automatically).

### Cloudflare Pages
1. Connect the repo.
2. Build command: `npm run build`
3. Build output directory: `.next`
4. Add the `@cloudflare/next-on-pages` adapter if prompted by Cloudflare.

## Asset downloads & placement

Place custom assets in `public/images/` so Next.js can serve them with the `<Image />` component:

| Asset | File name | Location | Notes |
| --- | --- | --- | --- |
| Headshot | `headshot-placeholder.svg` | `public/images/` | Update `app/page.js` if the filename changes. |
| Project diagrams | `project-topology.svg`, `project-cloud.svg` | `public/images/` | Used in the Projects section. |
| Company logos | `sports-excitement-logo.svg`, `dreamstudio-logo.svg` | `public/images/` | Used in Experience timeline. |
| Certification badges | `osep-badge.svg`, `crte-badge.svg`, `aws-security-badge.svg` | `public/images/` | Used in Certifications section. |

If you download official logos or badges, place them in `public/images/` and update the corresponding `src` paths in `app/page.js` and data files.

## Docs

- `EDITING.md` — update content (projects, experience, certifications, assets).
- `DEPLOYMENT.md` — deployment and domain setup.
