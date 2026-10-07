# KINOVA – Luxury & Supercar Rental (UAE) – Demo

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · fully static (SSG) · EN (default) / AR (RTL) / RU.

## Run
```bash
npm install
npm run dev                 # http://localhost:3000
npm run build && npm start  # production
npm run typecheck
npm run audit:seo           # crawl a running server: H1, titles, canonicals, hreflang, JSON-LD, links, orphans
npm run gen:images          # regenerate demo placeholder artwork
```

## Where to change things (one place each)
| What | File |
|---|---|
| Phone, WhatsApp, email, address, social, rental terms | `src/config/business.ts` (or `NEXT_PUBLIC_*` env vars) |
| Vehicles, prices (AED, `null` = Price on Request), years | `src/data/vehicles.ts` |
| Brand / category / location / guide copy | `src/data/*.ts` |
| UI text per language | `src/i18n/{en,ar,ru}.ts` |
| Images | `public/images/cars/<slug>/1.svg…` → drop real photos, set `IMAGE_EXT` in `src/lib/images.ts` |
| Redirects | `src/config/redirects.ts` |
| Lead delivery | `src/lib/leads.ts` (`LEAD_WEBHOOK_URL` or your CRM) |
| Tracking | `src/lib/tracking.ts`, `NEXT_PUBLIC_GTM_ID` / `NEXT_PUBLIC_GA4_ID` |

## URL / SEO model
English is unprefixed (`/cars/`), `/ar/…`, `/ru/…` for the others (rewrites in `next.config.ts`, no middleware; `/en/*` 301s to `/*`).
Guides and Locations are English-only for now: they are excluded from ar/ru routes, hreflang and sitemap (`englishOnlyPrefixes`).
Legal placeholders are `noindex` and not in the sitemap until final text exists.
Set `NEXT_PUBLIC_DEMO_NOINDEX=true` on a private demo deployment.

## Deploy to Vercel
1. Push the repo, import it in Vercel (framework auto-detected, no config needed).
2. Set env vars from `.env.example` (at minimum `NEXT_PUBLIC_SITE_URL` = production domain).
3. Deploy. Then submit `/sitemap.xml` in Search Console.
