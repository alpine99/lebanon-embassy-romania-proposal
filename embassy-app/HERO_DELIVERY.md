# Hero Enhancement — Final Delivery

## 0. The one thing that could not be done, stated plainly

**Real photographs were not downloaded.** This sandbox has zero network
access — confirmed again at the start of this task (Wikimedia, Unsplash
both return `403 host_not_allowed`). Per your own documented fallback
instructions, no file, photographer name, or licence detail was
fabricated. What exists instead:

- `HeroCinematic.tsx` is fully wired to load the three real files from
  exact local paths, with a safe `onError` fallback to the existing
  labelled placeholder for any slide whose file is missing
- `public/images/hero/README.md` — exact filenames and specs required
- `IMAGE_MANIFEST.md` §1 — the three real source URLs and licence types
  you supplied, with photographer/attribution fields explicitly marked
  "pending — read from the live source page at upload time" (not guessed)

**To finish this**: download the three source images yourself and drop
them into `public/images/hero/` using the exact filenames in the README.
No code change is required — the hero will pick them up automatically.

## 1. Backup / rollback

- `embassy-lebanon-romania-ROLLBACK.zip` — exact project state
  immediately before this task's edits (110 files)
- Rollback instructions: unzip and replace the project directory
  entirely, or manually: `git checkout` equivalent — just restore
  `components/home/HeroCinematic.tsx` and `IMAGE_MANIFEST.md` from the
  rollback zip, and delete the `public/images/hero/` directory, to
  undo exactly and only this task's changes.

## 2. Changed-files list (confirmed by `diff -rq` against the pre-edit backup, not assumed)

```
Files differ:
  components/home/HeroCinematic.tsx
  IMAGE_MANIFEST.md
New:
  public/images/hero/  (README.md only — no image files, see §0)
```
**Nothing else changed.** No service, centre, route, nav item, search
logic, Service Finder, appointment/community prototypes, schema,
translation (beyond hero alt/control text, which already existed),
SEO/hreflang, robots config, RTL behaviour, design token, or footer was
touched — confirmed by direct `diff`, not by memory of what was edited.

## 3. Motion parameters implemented (exact values, in code)

| Parameter | Spec | Implemented |
|---|---|---|
| Ken Burns scale | ~1.00 → 1.07 | `1.0 → 1.06–1.07` per slide |
| Rotation | max ~0.35° | `±0.35°` (and `0.21°` on slide 3), never more |
| Cross-fade | 1.6–2s | `1.8s` exactly |
| Slide duration | 10s | `10000ms` exactly |
| Parallax | max 8px, desktop-only | `8px` horizontal, `4.8px` vertical, gated by `(pointer: fine)` **and** explicit touch-capability check |
| Reduced motion | static Cedars image, all motion off | confirmed — see test results below |
| Mobile art direction | per-slide focal point, not center-crop | `mobileObjectPosition` authored per subject (canopy for cedars, off-centre rocks for Raouché, structure-not-sky for Byblos castle) |
| Preload/lazy | first slide only preloaded | `priority={i === 0}`, `loading="lazy"` on slides 2–3 |

## 4. Test results

**Full regression suite: 71/71 passed** (overflow × 6 breakpoints × 4
languages × 5 sub-pages, console errors, anchor integrity, interactivity,
search focus-restoration).

**New hero-specific tests: 17/17 passed**, including the two that matter
most for this task:
- Automatic transition genuinely advances after ~10s — timed, not assumed
- **Touch-vs-desktop parallax control pair**: parallax event listener
  confirmed **not attached** on a real touch-emulated mobile context,
  and confirmed **attached** on desktop — proving the touch exclusion
  actually works rather than just existing in unreachable code
- Reduced-motion: play/pause control hidden, zero autoplay after a full
  10.6s wait

**TypeScript**: real `tsc`, strict mode, **0 errors, 68/68 files**.

**Production build**: still not run — same reason as every prior phase,
no network access.

## 5. Screenshots

All 10 captured and pixel-verified to contain real, non-blank content:
3 desktop slides, 3 mobile slides, Arabic RTL desktop, Arabic RTL mobile,
paused state, reduced-motion state.

**Honest note on "before/after"**: because no real photograph could be
loaded, the *visual* placeholder appearance is essentially unchanged
between the prior delivery and this one — what changed is the motion
*parameters* (timing, rotation, parallax clamp, touch exclusion), which
are verified in code and by the test results above, not something a
static screenshot can meaningfully show as a "before/after" difference.
I'm not presenting near-identical placeholder screenshots as if they
demonstrate a visual transformation that hasn't happened yet.
