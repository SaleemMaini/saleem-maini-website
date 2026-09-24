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
- **Domain:** set `NEXT_PUBLIC_SITE_URL` (used for SEO, sitemap and Open Graph) when deploying.

## Scripts

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static export to out/
```

## Deploy

Import the repo in Vercel (zero config), or upload `out/` to any static host.
