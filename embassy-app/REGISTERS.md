# Registers

Generated at the end of Phase 5. Covers every route, every factual content
record's verification status, and the translation-review queue.

## 1. Complete route list

Every route below exists in all 4 locales: `ar`, `ro`, `en`, `fr`.

**Core pages**
```
/{locale}                          Homepage
/{locale}/accessibility            Accessibility statement
```

**9 core centres**
```
/{locale}/emergency
/{locale}/community
/{locale}/forms
/{locale}/appointment
/{locale}/anti-fraud
/{locale}/opening-hours
/{locale}/students
/{locale}/media
/{locale}/relations
```

**13 service pages** (`/{locale}/services/{slug}`)
```
passport-renewal
lost-stolen-passport
birth-registration
marriage-registration
divorce-registration
death-registration
power-of-attorney
document-legalisation
nationality-information
repatriation-of-remains
consular-certificates
visa-to-lebanon
unregistered-citizen-services
```

**Metadata routes** (locale-independent)
```
/sitemap.xml
/robots.txt
```

**Total real, distinct pages:** 24 per locale × 4 locales = **96 rendered routes**, plus the 2 metadata routes.

## 2. Source register (verification-status summary)

| Content area | Status | Count |
|---|---|---|
| All 13 service pages | `ROMANIA_EMBASSY_APPROVAL_REQUIRED` | 13/13 |
| All 5 document registry entries | `ROMANIA_EMBASSY_APPROVAL_REQUIRED` | 5/5 |
| Opening hours (all 8 fields) | Pending — `PendingTag`, no status field yet assigned since no source exists at all | 8/8 |
| News items | `DEMO_ONLY` (explicitly labelled) | 3/3 |
| Media/Press demo cards | `DEMO_ONLY` | 5/5 |
| Lebanon–Romania timeline | Empty — zero entries published (correctly hidden per "no source, no display" rule) | 0 |
| Ambassador name/message/portrait | Pending, no status field (structurally "content pending," same governance intent) | — |
| Relations page content (diplomacy/culture/education/trade) | Pending embassy approval | 4/4 |

**Zero content records currently hold `VERIFIED_LEBANESE_OFFICIAL` or
`VERIFIED_ROMANIAN_OFFICIAL` status** — this is accurate, not an oversight:
no real source has been supplied to this project at any point. Every
`internalEditorialNotes` field on every service explains what the correct
source *would* be (e.g. Lebanese General Security for passport matters,
Romanian MFA for Romania-specific procedure) so an editor knows where to
look first, without this project ever having invented or asserted the
content of that source.

## 3. Embassy-approval register

Everything below requires explicit embassy sign-off before publication —
this list is the practical checklist for that review:

- Official Lebanese state emblem (placeholder only, never rendered as real)
- All 13 services' quick facts (appointment/attendance/processing time/fees) — **52 individual pending values** (13 services × 4 facts)
- All 13 services' required-document lists and 5-step processes (as a starting point for embassy review, not as final procedure)
- Ambassador's name, portrait, and welcome message
- Opening hours (8 fields) and holiday calendars
- Emergency contact numbers (during and outside hours)
- General contact details (address, phone, email)
- All 5 illustrative form/document records (real files + real metadata)
- Anti-Fraud page's stated payment-verification process (currently generic; needs the Embassy's actual approved payment methods, if any, stated explicitly)
- Lebanon–Romania relations content (all 4 topic areas) and any timeline entries
- Official social media channel links
- Production domain (currently a placeholder constant in 3 files — see README)

## 4. Translation-review list

Every Romanian, Arabic, and French string in this project is marked
**`TRANSLATION_REVIEW_REQUIRED`** at the project level (see README) —
none of it is certified. In practice, prioritise review in this order
before anything goes live:

1. **Highest priority — legal/consular meaning-critical:** the 13 service pages' required-documents and steps (RO/AR/FR), the Anti-Fraud page (RO/AR/FR), nationality-information page (RO/AR/FR — flagged internally as highest-stakes content on the whole site)
2. **Medium priority — user-facing UI copy:** navigation, buttons, form labels, search interface (RO/AR/FR)
3. **Lower priority — demonstration content:** news items, media demo cards, community-registration prototype copy (all clearly marked demo, lower real-world consequence if imperfect)

Arabic in particular should be reviewed by a native speaker familiar with
Lebanese consular terminology specifically (not just Arabic generally) —
e.g. «إخراج قيد فردي» (civil registry extract) is Lebanese-specific
phrasing that a generic Arabic reviewer might not recognise as the
correct term of art.

## 5. Image manifest

See `IMAGE_MANIFEST.md` for the full table (7 image slots, each with
subject, placement, desktop/mobile crop, alt-text draft, licence status,
embassy-approval status, and credit field). Summary: **zero real
photographs exist anywhere in this project** — every visual is either
the procedurally-generated guilloché pattern, an on-brand CSS gradient,
or a clearly-labelled text placeholder. The one asset this project will
never auto-generate a stand-in for is the official Lebanese state emblem.

## 6. Search test report

Real execution of the actual `buildSearchIndex`/`searchIndex` functions
(Node, not a description):

```
EN index size: 42 items          AR index size: 42 items
All EN hrefs locale-prefixed /en: true
All AR hrefs locale-prefixed /ar: true
Search "passport" (EN): 14 results across [service, form, emergency]
Search "passport" + type=service filter: 12/12 correctly typed
Empty query: 0 results (matches required empty/start-typing state)
Arabic-script search: 13 real results
Content types represented: contact, emergency, faq, form, news, page, service, student
```

Dialog-level behaviour (Playwright, real clicks/keypresses, not visual
inspection): opens on click, auto-focuses input, Escape closes and
restores focus correctly on **both** desktop and mobile (the mobile case
required a real fix this round — see AUDIT.md §2).

## 7. Final regression suite (this delivery)

72/72 checks passed in the final pre-delivery run:
- Overflow: 0px at 320/375/390/768/1024/1440 across EN/RO/AR/FR homepages **and** 5 sub-pages (service page, Emergency, Appointment, Forms, Relations) — 54 checks
- Console errors: 0 across all 4 homepages + all 5 sub-pages — 9 checks
- Anchor integrity: all in-page anchors resolve on all 4 homepages — 4 checks
- Interactivity: finder tabs, hero carousel, announcement dismiss — 3 checks
- Search focus-restoration: desktop and mobile, both correct — 2 checks
