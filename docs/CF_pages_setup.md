CF Pages deployment guide for Dental Sonrisa Norte landing

Overview
- This document describes how to deploy the landing pages to Cloudflare Pages using Astro 6 + Tailwind 4 with static output. It covers repository state, build commands, and verification steps.

Prerequisites
- Node.js 16+ (tested with v22 in CI)
- npm or bun
- GitHub repo: weiadigital/dental-sonrisa-norte-landing
- Cloudflare account configured to deploy from GitHub

Deployment steps
1) Ensure main is up to date
2) Install dependencies
- npm install
3) Build
- npm run build
4) Preview
- npm run preview
5) Deploy via Cloudflare Pages
- In Cloudflare Pages, connect the repo and select main as production branch
- The build output should be static (through Astro) and CF Pages will host it
- Optional: configure a custom domain or subdomain in CF Pages

Verification
- Access the deployed URL and navigate to /index-v1, /index-v2, /index-v3
- Run Lighthouse mobile score target >= 95
- Confirm WCAG 2.2 AA accessibility: contrast, keyboard navigation, aria labels
- Validate /aviso-de-privacidad is accessible
- Validate the WhatsApp CTA is visible and responsive

Notes
- The 3 variants share the same client data; the differences are copy and layout per variant
- Assets in public/ are already optimized (WebP) to support fast loads
- If you want an automated CF Pages workflow, we can add a GitHub Actions (or PM) script in the repo.
