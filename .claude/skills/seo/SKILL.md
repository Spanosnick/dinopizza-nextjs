---
name: seo
description: DinoPizza SEO conventions — bilingual metadata, hreflang, JSON-LD, sitemap. Use when adding or editing pages, metadata, menu items, or structured data.
---

# SEO conventions (DinoPizza)

Bilingual site: `el` (default) + `en`. Domain: https://dinopizza.gr. App Router under `src/app/[locale]/`.

## When adding or editing a page
- Export metadata through `getPageMetadata(locale, pageSlug)` from `lib/generateMetadata.js` — do not
  hand-roll a `metadata` object per page.
- Add `metaTitle` and `metaDescription` for the page slug in **both** `messages/el.json` and
  `messages/en.json`. Never add one locale without the other.
- Titles: keep under ~60 chars, include "Dino Pizza" and a location cue (Βασιλικό Ευβοίας / Evia).
  Descriptions: 120–155 chars, action-oriented, localized (not machine-translated).

## Canonical & hreflang
- `canonical` must be the locale-correct self-referencing path.
- `alternates.languages` must always include both `el` and `en` pointing at the matching translated slug
  (use the slug helpers in `lib/dataHelpers.js` — `getLocalizedCategorySlug`, `getLocalizedProductSlug`).

## Structured data (JSON-LD)
Add via a `<script type="application/ld+json">` in the relevant layout/page:
- Homepage: `Restaurant` (name, address, geo, telephone, openingHours, priceRange, servesCuisine, hasMenu, image).
- `menu/[category]/[product]`: `Product` + `Offer` (price in EUR, availability), sourced from `data/products.json`.
- Menu routes: `BreadcrumbList`.
Keep both-locale name/description in sync with `products.json`.

## Sitemap & robots
- Maintain `src/app/sitemap.js` — enumerate every category/product combo in both locales, mirroring the
  `generateStaticParams` in the menu routes so new `products.json` entries appear automatically.
- Maintain `src/app/robots.js` referencing the sitemap; keep staging/preview noindex.

## Images
- Use `next/image` with descriptive, **localized** `alt` text for every menu/product image.

## Don't
- Don't ship placeholder `verification` codes to production (`generateMetadata.js` currently has dummy
  'google'/'yandex'/'yahoo' values — replace with real ones or remove).
- Don't hardcode `openGraph.url`/`locale` to the homepage on inner pages.
