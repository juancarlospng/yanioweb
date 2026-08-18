# Yanio Concepción Jr. — V2 Founder Platform

A premium editorial website presenting Yanio’s core ecosystem: HOMW, LOCK CITY and BLUEETHER.

## Development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Contact

The static contact form uses `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` when configured. Without a key, it opens a prefilled Gmail draft addressed to `NEXT_PUBLIC_CONTACT_EMAIL` and keeps the site fully static.

## Static deployment to Hostinger

Run `npm run build`. Next.js exports the complete static site to `out/`. Upload the **contents** of `out/` into Hostinger’s `public_html/` directory.

The export uses trailing slashes and does not need Node.js on the server. Environment variables are embedded at build time, so configure them before building.

## Content map

- Site identity and current focus: `src/content/site.ts`
- Three core ventures: `src/content/ventures.ts`
- Selected work: `src/content/projects.ts`
- English, Spanish and German translations: `src/content/translations.ts`
- Optimized V2 media: `public/images/v2/optimized/`
