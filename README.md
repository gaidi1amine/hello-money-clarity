# Hello Money Clarity

A fast, static Astro blog for a calm personal finance brand focused on debt payoff and financial clarity.

## Local development

Install dependencies:

```bash
npm install
```

Run the site:

```bash
npm run dev
```

Run Decap CMS locally in a second terminal:

```bash
npm run cms
```

Then open `/admin` from the local site. The CMS config uses `local_backend: true` for local testing and the GitHub backend for production.

## Deploying to Cloudflare Pages

Use GitHub as the source repository and Cloudflare Pages as the host.

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `24` or current LTS

Before going live, update `public/admin/config.yml` with the real GitHub `repo`, production `site_url`, and the OAuth bridge URL for the invite-only admin flow.
