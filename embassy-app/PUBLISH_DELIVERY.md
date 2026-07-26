# Publication Delivery — OUTCOME 2 (environment blocked)

**This sandbox has no network access.** Confirmed at the start of this
task and re-confirmed just now: `github.com` and `vercel.com` both
return `403 host_not_allowed`, and `npm install` fails with the same
error hitting `registry.npmjs.org` (exact output captured below). I
cannot create a GitHub repository, cannot push code, cannot install
dependencies, and cannot deploy to Vercel from here. No publication has
happened. What follows is real preparation work, not a substitute for it.

```
$ npm install
npm error code E403
npm error 403 403 Forbidden - GET https://registry.npmjs.org/@types%2fnode
npm error 403 In most cases, you or one of your dependencies are requesting
npm error 403 a package version that is forbidden by your security policy, or
npm error 403 on a server you do not have access to.
```

## A. Local verification — what was actually done instead

**Could not run:** `npm install`, `npm run build`, `npm run dev` (all
require network access this sandbox doesn't have).

**Did run, as the real substitute used throughout this entire build:**
- `tsc` 6.0.3, strict mode, hand-written ambient type stubs for the
  packages that can't be installed offline — **0 errors, 68/68 project
  files**
- The full Playwright regression suite against a static HTML/CSS mirror
  of the real design (built from the actual dictionary content, not
  retyped) — **71/71 checks passing**, covering all 4 languages, mobile
  nav, Arabic RTL, search, Service Finder, Emergency Centre, the
  Raouché hero, reduced motion, and zero horizontal overflow at every
  breakpoint

None of this is `next build` itself. See `VERIFICATION.md` for the full,
repeated-honest account of exactly what this does and doesn't prove.

## B. Git — genuinely done, not just prepared

Unlike the npm/network steps, **git itself works locally** in this
sandbox, so this part is real, not simulated:

- Repository initialized: `git init -b main`
- `.gitignore` created and **verified working** (staged 83 files;
  confirmed zero `node_modules`, zero `.env*` files staged)
- Real commit made:
  - **Commit hash:** `2d89bf733675a31a180adde267cb2d1bc3976761`
  - **Message:** `Initial Embassy of Lebanon in Romania digital platform proposal`
  - **Branch:** `main`
  - **Files:** 83 files, 7,934 insertions
  - **Timestamp:** 2026-07-26 04:13:56 +0000
- Verified clean: `git grep` across the full committed tree for
  API keys / secret keys / passwords → zero matches
- Working tree status: clean (0 pending changes)

**This repository is not on GitHub — it exists only in this sandbox.**
The ZIP delivered with this message includes the real `.git` folder, so
unzipping it gives you the actual commit history intact, ready to push.

### Exact commands to actually publish it (run these yourself)

```bash
# 1. Unzip the delivered project (already git-initialized, already committed)
unzip embassy-lebanon-romania-GIT-READY.zip
cd embassy-app

# 2. Create the private repo on GitHub (requires GitHub CLI + auth, or use the web UI)
gh repo create lebanon-embassy-romania-proposal --private --source=. --remote=origin

# --- OR, without gh CLI: ---
# Create an empty private repo named "lebanon-embassy-romania-proposal" via
# github.com/new (private, no README/gitignore/license — this project
# already has all of those), then:
git remote add origin git@github.com:YOUR_USERNAME/lebanon-embassy-romania-proposal.git

# 3. Push the existing commit
git push -u origin main

# 4. Verify
git remote -v
git log --oneline -1
```

## C. Vercel — exact deployment steps and settings

Cannot be done from here (no network access, no Vercel account access
of any kind). Steps to do it yourself once the GitHub repo above exists:

1. Go to vercel.com → **Add New... → Project**
2. **Import** the `lebanon-embassy-romania-proposal` GitHub repository
   (Vercel will prompt to connect your GitHub account if not already
   linked — grant access to this one repo, not your whole account, if
   offered that choice)
3. **Framework Preset:** Next.js (Vercel auto-detects this from
   `package.json`/`next.config.mjs` — confirm it says "Next.js", don't
   need to select manually)
4. **Root Directory:** `.` (the repository root — `package.json` lives
   there directly, no monorepo subfolder)
5. **Build Command:** leave as the framework default (`next build`) —
   already correct in `package.json`'s `"build"` script
6. **Output Directory:** leave as the framework default — Next.js App
   Router manages this automatically, no override needed
7. **Node.js Version:** 18.x or 20.x (either works; this project has no
   Node-version-specific dependencies) — set under Project Settings →
   General if you want to pin it explicitly, otherwise Vercel's current
   default LTS is fine
8. **Environment Variables:** none required — this project has zero
   `.env` usage, zero API keys, zero external service credentials
9. Click **Deploy**

`vercel.json` is deliberately not included and is **not needed** for
this project: no custom headers, no rewrites/redirects beyond what
`middleware.ts` already handles natively (Vercel supports Next.js
middleware out of the box), no monorepo routing, no non-default output
directory. Adding one would be unjustified complexity for a project this
straightforward to deploy.

Once deployed, Vercel gives you both a permanent production URL and a
unique preview URL per deployment — either is shareable privately (the
project itself isn't public just because it's on Vercel; only people
with the link, or people you explicitly invite as Vercel project
collaborators, can access it, and you can additionally enable Vercel's
"Password Protection" or "Deployment Protection" feature under Project
Settings for an extra layer before sharing with the Embassy).

## D. Security and privacy checks — all run for real, all clean

| Check | Result |
|---|---|
| API keys / secret keys / tokens | Clean — zero matches, checked in both working directory and committed git tree |
| Passwords | Clean — zero matches |
| `.env` files of any kind | Clean — zero files found |
| Real/personal email addresses in source | Clean — zero matches (the only "email" concept in the app is the *label* "General email" with value `PendingTag`) |
| Analytics/tracking scripts (GA, gtag, Mixpanel, Hotjar, Meta Pixel, PostHog, Plausible) | Clean — zero matches, re-checked with corrected word-boundary regex after an initial false-positive (`gtag` matching inside the unrelated word "Pending**Tag**") |
| Database connection strings | Clean — zero matches |
| File-upload endpoints / `type="file"` inputs | Clean — zero matches anywhere in the project |
| Real user submissions / stored personal data | Clean — Community Registration and Appointment Hub forms use in-memory React state only; nothing is sent anywhere or persisted |
| `robots.ts` | Confirmed: `disallow: "/"` for all user agents |

## E. Final delivery — Outcome 2, stated plainly

- Publication did **not** happen. No GitHub repo exists on github.com.
  No Vercel deployment exists.
- What's real: a genuine local git repository with a real commit
  (hash `2d89bf733675a31a180adde267cb2d1bc3976761`), a verified-clean
  `.gitignore`, a full security audit, and exact commands/settings for
  you to complete both the GitHub push and the Vercel deploy yourself,
  in a few minutes, once you're on a machine with network access.
- Local build evidence provided is `tsc` (0 errors, 68/68 files) and the
  71/71 regression suite — not `next build` itself, which needs the
  network access this sandbox doesn't have.
