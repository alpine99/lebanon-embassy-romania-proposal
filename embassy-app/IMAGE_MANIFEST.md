# Image Manifest

Every image slot in the project, documented so real assets can be dropped
in later without design guesswork.

## 1. Hero image (current — single image, real file, in the project)

**A real image file now exists in the project**, superseding the earlier
three-slide concept (that version's record is preserved in git/rollback
history if a multi-image hero is wanted again later).

| Field | Value |
|---|---|
| Local filename | `public/images/hero/raouche-beirut-hero.jpg` |
| Description | Aerial view of the Raouché rock formations, Beirut skyline, and Mediterranean coast |
| Dimensions | 1280×814 (JPEG) |
| Source status | **User-supplied** — provided directly by the requester via chat upload on 2026-07-26. Not sourced, searched, or verified by this project. |
| Photographer | **Not recorded — not claimed.** No photographer or authorship information was supplied with the upload, and none has been invented. |
| Licence status | **Pending verification.** No licence information was supplied with the upload. This image must not be treated as cleared for use until its rights status is confirmed by whoever supplied it. |
| Embassy approval status | **Required** — not granted. This remains a concept image only. |
| Alt text (EN) | "Aerial view of Raouché rock formations, the Beirut skyline, and the Mediterranean coast — photograph pending embassy approval." |
| Alt text (RO) | "Vedere aeriană a formațiunilor stâncoase Raouché, a orizontului Beirutului și a coastei mediteraneene — fotografie în așteptarea aprobării ambasadei." |
| Alt text (AR) | "منظر جوي لصخور الروشة وأفق بيروت والساحل المتوسطي — صورة بانتظار موافقة السفارة." |
| Alt text (FR) | "Vue aérienne des rochers de Raouché, de l'horizon de Beyrouth et de la côte méditerranéenne — photographie en attente d'approbation de l'ambassade." |

**Do not publish this image publicly or represent it as officially
approved.** It is a concept placeholder for internal review only, exactly
as the source material for this whole project has been treated throughout.

**Superseded 3-slide record (kept for reference only, not in use):**
the earlier concept referenced three separate Wikimedia/Unsplash/Pexels
source URLs supplied by the requester, none of which were ever
downloaded (no network access in this build environment). See prior
project history/rollback for that record if needed again.
are already wired into `HeroCinematic.tsx`.

## 2. Other image slots

| # | Subject | Placement | Desktop size/crop | Mobile size/crop | Alt-text draft | Licence status | Embassy approval | Credit |
|---|---|---|---|---|---|---|---|---|
| 4 | Official Lebanese state emblem | Header (all pages), footer | 92×92 min, transparent background, vector preferred (SVG) | Same asset, rendered at 46×46 | "Emblem of the Republic of Lebanon" (exact wording pending embassy confirmation) | **Never to be approximated or redrawn by this project — must come directly from the Embassy** | Pending | N/A (official government asset) |
| 5 | Ambassador portrait | Ambassador section (homepage) | 440×540, portrait, professional headshot crop | 100vw × 440, same crop | "[Ambassador's name] — Ambassador of the Republic of Lebanon to Romania" (pending name confirmation) | Not sourced | Pending | Pending |
| 6 | Lebanon–Romania gallery (×3 slots) | `/relations` gallery section | 800×600 (4:3), editorial crop | 2-column grid, same crop | Per-image, pending actual photo content | Not sourced | Pending | Pending |
| 7 | Media/Press category cards (×5) | `/media` | No image currently — text-only demo cards | Same | N/A | N/A | N/A | N/A |

## Technical notes for whoever adds real assets

- The hero (`components/home/HeroCinematic.tsx`) has an explicit
  **"REAL-ASSET INTEGRATION POINT"** comment showing exactly what
  `next/image` code to write once slides 1–3 exist — it documents the
  `fill`, `sizes`, and `priority` props expected, so integration doesn't
  require re-reading the whole component.
- Use `next/image` for every real photo (not raw `<img>`) — it handles
  AVIF → WebP → fallback negotiation automatically from one source file;
  no manual `<picture>` markup needed, and it prevents layout shift by
  design as long as `width`/`height` or `fill` + a sized parent are used
  (the hero's parent is already fixed-height for exactly this reason).
- The official emblem (row 4) is the one asset this project will **never**
  generate a placeholder-turned-real version of automatically — it must
  be manually swapped in as a real file by someone with the authority to
  confirm it's the correct, current, approved version.
