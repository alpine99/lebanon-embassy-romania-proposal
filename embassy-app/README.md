# Embassy of Lebanon in Romania — Full Concept Build

A design concept / working frontend prototype for the official website of
the Embassy of the Republic of Lebanon in Bucharest. **This is not the
official embassy website.** Built with Next.js 14 (App Router), TypeScript,
and Tailwind CSS.

Full scope: homepage with cinematic hero, 13 individual service pages
(all data-driven from a shared, typed, verification-status-aware schema),
9 core centres (Emergency, Community Registration, Forms & Downloads,
Appointment Hub, Anti-Fraud, Opening Hours, Student Centre, Media/Press
Room, Lebanon–Romania editorial), and real multilingual site search —
all in Arabic (RTL), Romanian, English, and French. **96 total rendered
pages** (24 distinct routes × 4 locales). No backend, no database, no
payments, no document uploads, no authentication, no real personal-data
storage anywhere — see `REGISTERS.md` for exactly what's demo-only vs.
what needs real data.

See `AUDIT.md` for the full technical/accessibility/search audit,
`VERIFICATION.md` for exactly what was and wasn't verified (no network
access in this build environment), `REGISTERS.md` for the complete route
list plus source/approval/translation-review registers, and
`IMAGE_MANIFEST.md` for every image placeholder's exact specification.

## Running it

Requires Node.js 18.18+ and a network connection (to install packages and
fetch the Google Fonts used at build time).

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — it will redirect to `/en`, `/ar`, `/ro`,
or `/fr` depending on your browser's language settings.

```bash
npm run build   # production build
npm run start   # serve the production build
```

### Deployment

This is a standard Next.js 14 App Router project — it deploys the same way
any Next.js app does:

- **Vercel** (simplest): connect the repo, no config needed — `next build`
  is detected automatically.
- **Any Node host** (e.g. a VPS, Docker): `npm run build` then
  `npm run start`, behind a reverse proxy (nginx/Caddy) terminating TLS.
- **Static export is not used here** — the middleware (locale detection)
  requires a Node runtime, not static hosting.

Before deploying for real: replace the placeholder `baseUrl` constant in
`app/[locale]/layout.tsx` (metadata/hreflang) and `app/sitemap.ts` with the
real production domain, and remove `robots: { index: false, follow: false }`
/ loosen `app/robots.ts` once the embassy approves the content for public
indexing.

## What's here

- **`/en`, `/ro`, `/ar`, `/fr`** — the same homepage in English, Romanian,
  Arabic, and French. Language is a real URL segment (not a client-side-only
  toggle), handled by `middleware.ts`, which redirects unprefixed paths to
  the visitor's preferred language.
- **Full RTL support for Arabic** — `<html dir="rtl">` is set per-locale,
  and every direction-sensitive style (paddings, borders, decorative
  positioning, reading-direction arrows) uses Tailwind's logical
  properties (`ps-`, `border-e`, `start-`, `end-`, `rtl:`) rather than
  hardcoded left/right, so the layout genuinely mirrors instead of just
  flipping text alignment.
- **The cinematic hero** (`components/home/HeroCinematic.tsx`) — a
  three-slide image sequence (Ken Burns zoom, cross-fade, desktop-only
  pointer parallax) using clearly labelled placeholders instead of stock
  photography, a Beirut→Bucharest diplomatic route line, play/pause/prev/
  next controls, and full `prefers-reduced-motion` support (verified with
  real automated tests — see `AUDIT.md` §4).
- **The guilloché pattern** (`components/ui/GuillochePattern.tsx`) — the
  site's signature visual element: the fine engraved-line motif seen on
  official documents/passports/currency, generated procedurally rather
  than pasted in as a large SVG asset.
- **Real multilingual search** (`components/search/SearchDialog.tsx`) —
  accessible modal (focus trap, Escape-to-close, `<mark>` highlighting,
  content-type filters), indexing all 13 services, all 9 centres, forms,
  FAQs, emergency situations, and news — strictly scoped to the active
  locale, verified with real Arabic-script search execution (see AUDIT.md §4).
- **13 service pages**, all built from one reusable, typed template
  (`components/services/ServicePageTemplate.tsx`) and a shared
  verification-status schema (`lib/content/schema.ts`) — every fact that
  needs embassy sign-off carries `ROMANIA_EMBASSY_APPROVAL_REQUIRED`
  status and renders "Pending confirmation" rather than a guess.
- **9 core centres** — Emergency, Community Registration (demo-only, no
  submission/storage), Forms & Downloads (real filtering, zero fake
  PDFs), Appointment Hub (6-step demo flow, no real booking), Anti-Fraud,
  Opening Hours, Student Centre, Media/Press Room, and an upgraded
  Lebanon–Romania editorial page.
- **The guilloché pattern** (`components/ui/GuillochePattern.tsx`) — the
  site's signature visual element: the fine engraved-line motif seen on
  official documents/passports/currency, generated procedurally rather
  than pasted in as a large SVG asset.
- **`PendingTag`** — used everywhere a fact needs embassy sign-off (fees,
  hours, staff names, legal requirements). Nothing plausible-sounding was
  invented; see `REGISTERS.md` for the full embassy-approval checklist.

## File structure

```
app/
  layout.tsx                    Minimal root layout (no <html>; see note below)
  globals.css                   Tailwind directives + base/skip-link styles
  sitemap.ts                    Sitemap route (all 4 locales × 2 pages)
  robots.ts                     Robots route (currently disallows all indexing)
  [locale]/
    layout.tsx                  Real <html>/<body>, fonts, dir/lang, hreflang, OG, site chrome
    page.tsx                    Homepage — assembles all 11 sections
    accessibility/page.tsx      Accessibility statement stub
components/
  ui/                           Button, PendingTag, SectionHeading,
                                 GuillochePattern, SectionDivider
  layout/                       UtilityBar, SiteHeader, SiteFooter
  home/                         HeroCinematic, ServiceCards, ServiceFinder,
                                 AnnouncementBar, NewsGrid, RelationsSection,
                                 AmbassadorSection, VisitContact
lib/
  i18n/
    config.ts                   locales (ar/ro/en/fr), default locale, dir per locale
    dictionary.ts                TypeScript shape shared by all locales
    dictionaries/{en,ro,ar,fr}.ts   the actual copy, per locale
    getDictionary.ts            locale -> dictionary lookup
middleware.ts                   locale detection + redirect
tailwind.config.ts               design tokens (color, type, radius, spacing)
AUDIT.md                        full accessibility/technical/visual audit
VERIFICATION.md                 what was verified and how, given no network access
```

### Why `app/layout.tsx` looks empty

Next.js requires a root `app/layout.tsx`, but locale (and therefore the
`<html lang>`/`<html dir>` values) is only known one segment down, in
`app/[locale]/layout.tsx`. The root layout is a deliberate pass-through;
`app/[locale]/layout.tsx` owns the actual `<html>`/`<body>` tags. This is
the same pattern used in Next.js's own i18n-routing reference example.

## Design tokens

Defined once in `tailwind.config.ts`, referenced everywhere as named
classes (`bg-cedar-950`, `text-burgundy-700`, `border-line`, etc.) rather
than repeated hex values:

| Token | Hex | Use |
|---|---|---|
| `cedar-950` | `#0F2A22` | Primary — nav, header, authority |
| `cedar-800` / `700` | `#1C4636` / `#25573F` | Hover/secondary |
| `burgundy-700` | `#6E1F2A` | Accent — emphasis, emergency only |
| `ivory-50` | `#FAF6EE` | Base background |
| `ivory-100` | `#F3ECDD` | Section alternation |
| `gold-400` | `#C9A659` | Fine dividers/focus rings only — never a fill |
| `charcoal-900` / `600` | `#241F1C` / `#55504A` | Body text |

Type: **Source Serif 4** for headings only (loaded via `next/font/google`),
**Source Sans 3** for Latin UI/body, **IBM Plex Sans Arabic** for Arabic —
all self-hosted by Next.js at build time, no runtime font-loading JS.

## Content governance (important)

- The official Lebanese state emblem is **never redrawn** — every
  reference is a clearly labelled placeholder (`EMBLEM PENDING`).
- Every fact that needs embassy authority (fees, processing times, hours,
  address, staff/ambassador names, legal requirements) is rendered via
  the `PendingTag` component with the text "Content pending embassy
  approval" — never invented.
- News items and the announcement banner are explicitly labelled demo
  content.
- **Romanian, Arabic, and French copy is functional scaffolding, not
  certified translation.** It was written to be structurally correct and complete
  so every locale renders properly, but per the product spec it must be
  human-verified by embassy staff before anything goes live — especially
  any consular/legal text.

## Known limitations / honest notes

- **This prototype was built and audited in a sandboxed environment with
  no network access**, so `npm install`/`next dev`/`next build` could not
  actually be run here at any point across multiple revision passes. Every
  file was written carefully and reviewed by hand, and repeatedly
  re-verified with the real TypeScript compiler (`tsc`, strict mode, 0
  errors across all 30 project files as of the latest change) using
  hand-written ambient type stubs for the packages that can't be installed
  offline. The exact visual design and every interaction (hero carousel,
  Service Finder tabs, language switching, announcement dismissal,
  responsive nav) was separately validated as a static HTML/CSS mirror —
  screenshotted, and checked with real Playwright automation for
  horizontal overflow (320–1440px, all 4 languages), WCAG AA contrast,
  keyboard focus order, RTL mirroring, zero console errors, zero layout
  shift, and zero broken links (a real bug — three broken CTA anchors,
  including "Book an Appointment" — was found and fixed this way; see
  `AUDIT.md` §1). None of this is a substitute for `npm run build`, but it
  is real, executed evidence, not a description of what should work. Run
  `npm run build` first thing and treat any compiler error as a quick fix,
  not a sign of a deeper problem.
- The tab-panel pattern in the Service Finder implements `role="tab"` /
  `role="tabpanel"` with proper `aria-controls`/`aria-labelledby`, but
  does not yet implement full WAI-ARIA arrow-key navigation between tabs
  — worth adding before shipping.
- The language switcher preserves the current page when switching
  locales (via `usePathname`), but hash fragments (e.g. `#services`)
  are not preserved across a switch — minor, worth polishing later.
- No real map, images, or embassy-approved photography are included
  anywhere — only labelled placeholders, per the brief. The hero's three
  "slides" are on-brand gradient placeholders, not photography.
- The Beirut→Bucharest route line in the hero is illustrative (an eased
  curve between two marker points), not a geographically accurate
  projection — treat it as a diplomatic-connection motif, not a map.

## Final delivery status

- `tsc`: 0 errors, 68/68 files (strict mode)
- 72/72 real Playwright checks passing (see VERIFICATION.md)
- Explicit confirmation, verified by direct source search (see AUDIT.md §5): no payment interface, no document upload, no backend/database, no personal data submitted or stored anywhere, `robots.ts` disallows all indexing, no invented fees/times/contacts/names/numbers/hours/payment-methods/legal-requirements anywhere on the site
- See REGISTERS.md for the complete 96-route list and every register (source, verification-status, embassy-approval, translation-review, image manifest)

## Next steps (not in this phase)

- Real backend for the appointment system (this phase is UI-only, demo
  data, explicitly no real personal-data storage — see product spec §12).
  Until it exists, every "Book an Appointment" CTA points to the Service
  Finder section (`#finder`) rather than a non-existent page.
- CMS integration so embassy staff can edit announcements, hours, fees,
  and the Ambassador's message without a developer (see product spec §11).
- Human-verified Arabic, Romanian, and French translations of all
  consular content.
- Real, approved photography for the hero and the official emblem asset.
- Replace the placeholder domain (`example-embassy-lebanon-romania.pending`)
  in `app/[locale]/layout.tsx` and `app/sitemap.ts` with the real one, and
  loosen `app/robots.ts` once the embassy approves public indexing.
