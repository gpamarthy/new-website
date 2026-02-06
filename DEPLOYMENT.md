# Deployment Guide

## Environment variables
Set these in your hosting provider:

- `NEXT_PUBLIC_SITE_URL` — canonical URL (e.g., `https://gouthampamarthy.com`)
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — (optional) enable analytics via Plausible
- `ENABLE_RUNTIME_HEADERS` — `true` only on hosts that support runtime headers (set `false` for GitHub Pages)

## Option A — GitHub Pages (preview, manual publish)
1. Set env vars locally (or in CI):
   - `NEXT_PUBLIC_SITE_URL=https://<user>.github.io/new-website/` (or your custom domain)
2. Build static output:
   ```bash
   npm run build
   ```
3. Publish the generated `out/` directory to GitHub Pages.
4. If using a custom domain, add `public/CNAME` with your domain before building.

### GitHub Pages DNS for custom domain
For apex domain:
- `A 185.199.108.153`
- `A 185.199.109.153`
- `A 185.199.110.153`
- `A 185.199.111.153`

For `www`:
- `CNAME www -> <your-github-username>.github.io`

Enable **Enforce HTTPS** in GitHub Pages settings.

## Option B — Cloudflare Pages
1. Connect the GitHub repo in Cloudflare Pages.
2. Build command: `npm run build`
3. Build output directory: `out`
4. Add custom domain in Cloudflare Pages → **Custom domains**.

### DNS records (Cloudflare-managed DNS)
| Type | Name | Target |
| --- | --- | --- |
| CNAME | `www` | `<your-cloudflare-pages-subdomain>.pages.dev` |
| CNAME | `@` | `<your-cloudflare-pages-subdomain>.pages.dev` |

Enable **HTTP → HTTPS** and **www → apex** (or apex → www) in Cloudflare redirect rules.

## Security headers note
This repo defines security headers in `next.config.js` for platforms that support runtime headers (Vercel/Cloudflare Workers).
GitHub Pages is static hosting and does not apply custom response headers.

## Verification checklist
- [ ] `NEXT_PUBLIC_SITE_URL` points to the live domain
- [ ] DNS records propagate
- [ ] `https://yourdomain.com/robots.txt` resolves
- [ ] `https://yourdomain.com/sitemap.xml` resolves
- [ ] HTTPS is enforced
