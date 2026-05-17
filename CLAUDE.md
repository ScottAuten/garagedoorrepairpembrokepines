# Garage Door Repair Pembroke Pines — Deployment Notes

## Stack
- Next.js 15, App Router, TypeScript, Tailwind CSS
- Deployed to Coolify on Server 1 (51.222.138.8) as a static site via nginx:alpine
- GitHub: ScottAuten/garagedoorrepairpembrokepines

## CRITICAL: Static Export Configuration

This site uses `output: 'export'` (static HTML generation). **Do not change to `'standalone'`.**

`next.config.ts` must have:
```ts
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
}
```

`app/robots.ts` and `app/sitemap.ts` must both export:
```ts
export const dynamic = 'force-static'
```
Without this, the build fails with:
> "Route /robots.txt with `output: export` requires `export const dynamic = 'force-static'`"

Coolify `publish_directory` must be set to `/out` (the static export output folder). If it is null or missing, Coolify copies the source tree to nginx root and the site serves the default nginx welcome page instead of any HTML.

## Tailwind Color Configuration

`tailwind.config.ts` extends only `navy`. Do NOT add `orange` to `theme.extend.colors` — even as a single hex string. Assigning a string instead of a shade object removes Tailwind's entire built-in orange palette, breaking `bg-orange-500` in `@apply` directives.

Correct:
```ts
theme: {
  extend: {
    colors: {
      navy: '#1e3a5f',
      // orange intentionally omitted — Tailwind default orange-500 = #f97316
    },
  },
}
```

## Site Structure
- 8 service pages: `/services/[slug]`
- 6 neighborhood area pages: `/areas/[slug]`
- Static pages: home, /services, /areas, /about, /contact, /privacy, /terms
- 21 pages total in sitemap
