---
name: performance
description: DinoPizza performance conventions — Core Web Vitals, next/image, the legacy Bootstrap/jQuery load, server/client boundaries. Use when adding UI, images, scripts, or doing a perf pass.
---

# Performance conventions (DinoPizza)

Next.js 15 App Router + React 19. The site carries **legacy Bootstrap + jQuery** (`public/css/`,
`public/js/`) loaded globally from the root layout — the dominant perf cost. Don't add to it.

## Targets (Core Web Vitals)
- LCP < 2.5s, CLS < 0.1, INP < 200ms on mobile.

## Images
- Always `next/image`, never raw `<img>`, for product/menu/hero images.
- Provide explicit `width`/`height` (or `fill` + a sized container) to avoid CLS.
- `priority` only on the above-the-fold hero; everything else lazy-loads by default.

## Scripts & CSS
- Do not add new jQuery/Bootstrap plugins. Prefer React/CSS solutions.
- Load any non-critical third-party or legacy script with `next/script` and
  `strategy="lazyOnload"` (or `afterInteractive`), scoped to the route that needs it — not the root layout.
- Injected/overlay UI (e.g. the price-increase popup) must reserve space or animate transform/opacity
  only, to avoid layout shift (CLS).

## Component boundaries
- Keep `"use client"` at the leaves. Static menu content stays as Server Components; only truly
  interactive pieces (e.g. the `yourpizza` builder) are client.
- Keep `data/products.json` server-side via `lib/dataHelpers.js`; never pull the whole JSON into a
  client bundle.

## Fonts
- Use `next/font` (self-hosted, no layout shift) rather than blocking external font links.

## Verifying
- Run `npm run build` and read the First Load JS table to catch route regressions before shipping.
- Treat any legacy jQuery/Bootstrap removal as a separate, higher-effort task — flag it, don't sneak it in.
