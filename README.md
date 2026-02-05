# Portfolio Website

A single-page portfolio with dark mode, animated accents, reveal-on-scroll transitions, and responsive layout.

## Version status

Initial baseline established from the first multi-section portfolio build. Use this as the starting point for future iterations.

## Cheapest hosting options

1. **GitHub Pages (free)**
   - Push this repo to GitHub.
   - In repo settings → Pages → deploy from `main` branch.
   - Custom domain supported with free HTTPS.

2. **Cloudflare Pages (free)**
   - Connect GitHub, select this repo.
   - Build command: _none_. Output: `/`.
   - Provides global CDN + free HTTPS.

3. **Netlify (free)**
   - Connect GitHub, select this repo.
   - Build command: _none_. Publish directory: `/`.
   - Includes form handling if you later add Netlify Forms.

## Update content

- Replace the experience and project bullet points in `index.html`.
- Swap `resume.pdf` with your final resume file for download.
- Update links in the contact section.
- Edit the stats in the hero section to match your metrics.
- Replace any certification images in `assets/` with official logos when available.
- The vertical sidebar navigation is controlled by the `.side-nav` styles in `styles.css`.
