# saleem-maini-website

Personal portfolio of **Saleem Maini — Senior Frontend Engineer (React Native & Expo)**.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and `next-themes` (light / dark / system).
The site is statically exported to `out/`.

## Editing content

All text lives in [`src/content/site.ts`](src/content/site.ts): hero, metrics, experience,
case studies, skills, about, education and contact. Components only render that data.

- **CV download:** add your PDF as `public/saleem-maini-cv.pdf`. The "Download CV" buttons appear
  automatically on the next build.
- **Store links:** add `links: [{ label: "App Store", href: "..." }]` to a case study.
- **Domain:** `NEXT_PUBLIC_SITE_URL` sets the address used for SEO, sitemap and Open Graph.

## Scripts

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static export to out/
```

## Deploy

Live at **https://saleemmaini.github.io/saleem-maini-website/**.

Every push to `main` builds and deploys the site via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

For a root domain (Vercel or a custom domain), build without `NEXT_PUBLIC_BASE_PATH`
and set `NEXT_PUBLIC_SITE_URL` to the new address.
