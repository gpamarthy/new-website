# Deployment Guide

## Environment variables
Set these in your hosting provider:

- `NEXT_PUBLIC_SITE_URL` — canonical URL (e.g., `https://gouthampamarthy.com`)
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — (optional) enable analytics via Plausible

## Option A — Cloudflare Pages (recommended)
1. Connect the GitHub repo in Cloudflare Pages.
2. Build command: `npm run build`
3. Build output directory: `.next`
4. If prompted, install the `@cloudflare/next-on-pages` adapter and follow Cloudflare’s setup wizard.
5. Add the custom domain in Cloudflare Pages → **Custom domains**.

### DNS records (Cloudflare-managed DNS)
If your domain is on Cloudflare, add:

| Type | Name | Target |
| --- | --- | --- |
| CNAME | `www` | `<your-cloudflare-pages-subdomain>.pages.dev` |
| CNAME | `@` | `<your-cloudflare-pages-subdomain>.pages.dev` |

Enable **HTTP → HTTPS** and **www → apex** (or apex → www) in Cloudflare’s redirect rules.

## Option B — Vercel (implemented)
1. Import the GitHub repo into Vercel.
2. Framework preset: **Next.js** (auto-detected)
3. Build command: `npm run build`
4. Output: default (handled by Next.js)
5. Add environment variables listed above.
6. Deploy.

### DNS records (Vercel)
In your DNS provider, add the following:

| Type | Name | Target |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

### Redirects
- Enable **www → apex** (or apex → www) in Vercel Domains settings.
- Vercel automatically enforces **HTTP → HTTPS**.

## Security headers
Security headers are configured in `next.config.js` and will apply at the edge in both Vercel and Cloudflare:
- CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy

## Verification checklist
- [ ] `NEXT_PUBLIC_SITE_URL` points to your new domain
- [ ] DNS records propagate
- [ ] `https://yourdomain.com/robots.txt` resolves
- [ ] `https://yourdomain.com/sitemap.xml` resolves
- [ ] Lighthouse scores meet targets
