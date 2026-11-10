# Cinematic Portfolio Builder: Master Spec for AI Coding Assistants

> **How to use this file:** give this whole file to an AI coding assistant (Claude, Cursor, Codex, Lovable, Bolt, etc.) and say: *"Follow PORTFOLIO_BUILDER.md and build my portfolio."* The assistant interviews you (Section 2), then builds a complete, deployable, single-page portfolio in the style of the live reference.

**Live reference (design and behavior only):** https://atifsportfolio.netlify.app/

The reference belongs to a real person. Use it **only** to study layout, typography, motion and interaction patterns. **Never copy its name, photo, bio, employer, projects, videos, documents, links or any other personal content** into a new site. Every word and asset on the new site must come from the new owner.

---

## 0. Instructions to the AI assistant (read first)

You are a senior creative front-end developer and UX writer. Your job:

1. **Interview** the owner using Section 2. Ask in small, friendly batches (3 to 6 questions at a time). Offer sensible defaults and skip anything optional they don't have.
2. **Study the live reference on your own:** open https://atifsportfolio.netlify.app/ (desktop and mobile widths) before designing, and use Section 1 as the summary of it. The owner does not need to supply or mention this link. Separate what you observed from what you infer; if you cannot browse, follow this spec and say so.
3. **Build** the site described in Sections 3 to 8, with the owner's content only.
4. **Verify** with the checklist in Section 10, then hand over the code with clear "where to edit" notes.

Hard rules:

- **No fabrication.** Never invent employers, dates, metrics, awards, testimonials, clients, videos, follower counts or quotes. If data is missing, hide that section cleanly. No empty cards and no dead buttons.
- **No personal data from the reference** or from this file's examples.
- **Never claim a feature works unless you tested it.** Report what was and was not verified.
- **Writing style:** short, confident, specific. Prefer the owner's own words. Unless the owner asks otherwise, avoid long dashes (em/en dashes) in on-page copy.

---

## 1. What the reference does (design summary)

A dark, editorial, single-page portfolio: near-black background, warm off-white text, one strong accent (red in the reference), a huge condensed display font for headlines and a clean sans for body text, plus a handwritten accent font for small notes. The layout is generous and grid-based, with thin separator lines, numbered section labels (`01 / Project portfolio`) and a red dot ending each big heading (`Built to be used.`).

Signature features to reproduce (adapted to the new owner):

| # | Feature | What it does |
|---|---|---|
| 1 | **Hero** | Small role line and availability pill on top. Giant faded background word ("PORTFOLIO"). Left: handwritten "Hello, I'm", huge two-line name, tagline, intro, two CTAs, location. Centre: portrait in a circular frame with an orbit ring, status chips ("BUILDING", "ACTIVE") and a "Currently building" card. Right: a motto badge and a column of large stat numbers with labels. Bottom bar: play-demo link, "Scroll to discover", career range. |
| 2 | **Two ways to know me** | Two numbered cards: one for recruiters/clients, one for learners/followers. |
| 3 | **Project portfolio** | Filter tabs with counts (All, two groups, Public, R&D), search, 6 cards then "See all". Cards have generated pattern thumbnails (no fake screenshots), category tag, status badge, tool chips, big title, hover description, and play/open/private icons. Auto-adds new public GitHub repos. |
| 4 | **Tools marquee** | "The tools I trust": an endless scrolling row of tool names with pause and "See all". |
| 5 | **Lab / showcase** | Big two-line heading, a **before/after drag slider** that shows the owner's work transforming something (the reference turns a raw error log into an AI root-cause summary), a typing console, three capability cards, a system diagram and a grid of product cards with status badges and video links. |
| 6 | **Experience & craft** | Bio paragraph, then three columns: education and animated skill bars, a numbered "process" timeline, and an accent-coloured quote card. Two detail cards below. |
| 7 | **Journey** | Accordion timeline of roles (one open at a time), a "milestones" side list of shipped work, an achievements grid with one highlighted summary tile, and a "credential vault" of downloadable documents. |
| 8 | **Creator & community** | Heading, CTA buttons, platform cards (icon, handle, one line, action) and "What I teach" topic cards. |
| 9 | **Videos** | Featured video with "Latest uploads" list and counts, topic tabs, search, video grid with "See all", horizontal Shorts row, Playlists grid. Everything opens in an in-page privacy-enhanced player. Optional auto-sync of new uploads. |
| 10 | **Contact** | Big heading, contact rows (email, socials, booking link, location), a tilted "demo reel" card, and accordions for a 30-second brief and a **job-description matcher** that runs locally. |
| 11 | **Footer** | Giant outlined name, wordmark, copyright holder, **live visitor counter**, social icons, back to top. |
| 12 | **Builder Swarm** | The showpiece. Auto-plays on the first visit (no loading screen before it) and from a header button: the page blanks, a swarm of labeled cursors rebuilds it live at 1.5× speed while auto-scrolling, then shows "Agents finished" and returns to the top. No on-screen control bar. Full spec in Section 6. |
| 13 | **Toggles** | Light/Dark theme, Motion on/off (both remembered), scroll progress bar, active-section highlight in the nav, mobile full-screen menu. |

---

## 2. Intake: questions to ask the owner

Ask in this order. Mark what is required. Accept "skip" for anything optional and hide that section.

### A. Identity (required)
1. Full name, and the short display name for the logo.
2. Profession / title (one line) and a secondary line (e.g. specialties).
3. Location (city, country). Should it be shown?
4. Availability line (e.g. "Open to roles, collabs & mentorship") or hide.
5. Headline: two short punchy lines (reference pattern: "X depth. / Y momentum.").
6. Two-sentence intro. One-sentence "years / scope" line (only if true).
7. Portrait photo (square, at least 900 px). Optional: a "Currently building" one-liner and up to three status chips.
8. Résumé or CV file (optional).

### B. Proof (only real data)
9. Up to 4 hero stats (e.g. years of experience, employer, number of public projects). Each must be true.
10. Projects. For each: title, category, group (e.g. Career / Personal), status (Public, Private, R&D, Free app), one-line description, tools, and any links (live, source, video). Which 3 to 6 are the strongest?
11. Tools and technologies you actually use (for the marquee).
12. Experience: roles with dates, organisation, summary, and tags.
13. Education, skills with an honest self-rating (0 to 100) and short note, process steps (how you work, 4 to 6 steps).
14. Achievements / awards, and documents you are happy to make public (certificates etc.).

### C. Showcase (optional, high impact)
15. A "before → after" that represents your work (code before/after refactor, raw data → dashboard, sketch → final design, bug log → fix summary). Provide both sides as text or two images.
16. Products or systems you built (name, status, description, tags, links) and, if useful, a simple diagram of how they connect.
17. A short console script: 3 or 4 "command → result" pairs that describe what you do.

### D. Content and community (optional)
18. Social links: YouTube, Instagram, LinkedIn, GitHub, X, Facebook, Behance, Dribbble, booking page (Topmate, Calendly), newsletter, website.
19. Topics you teach or write about (3 cards: title, line, tags).
20. Videos: YouTube channel URL and channel ID (starts with `UC`), a featured "start here" video, a list of videos (ID, title, duration, topic, age), Shorts (ID, title) and playlists (ID, title, count). Or say "auto" and you will sync from the channel feed.

### E. Contact
21. Public email. Any other contact rows (booking, mentorship site).
22. A 30-second brief for recruiters/clients (3 or 4 lines and tags).
23. Keywords for the job-description matcher (your real skills, lower case).

### F. Look and behaviour
24. Accent colour (default `#e5323e`), theme default (dark), fonts (default Anton + Manrope + Caveat).
25. Swarm: auto-play on first visit (yes/no), cursor names (themed list of 8 to 14 short names, e.g. developers: `LINTER, COMPILER, RUNNER, DEBUGGER, BUNDLER`; designers: `PEN_TOOL, GRID, KERNING, LAYER`), finale message (default "Agents finished.").
26. Copyright holder name for the footer (person or brand), and whether to show a live visitor counter.
27. Final domain (for canonical URL and SEO) and site language.

After the interview, **summarise the collected data back** in a compact table and ask for confirmation before building.

---

## 3. Tech stack and project structure

- **React 19** with JSX, bundled by **esbuild** (Vite is fine if preferred). Static output, deployable on Netlify, Vercel, GitHub Pages or Cloudflare Pages.
- **Plain CSS** with custom properties (one stylesheet). No UI framework.
- **Self-hosted fonts** via Fontsource (`@fontsource/anton`, `@fontsource/manrope`, `@fontsource/caveat`, `@fontsource/jetbrains-mono` for the swarm labels). No third-party font requests.
- Icons: inline SVG (brand icons) and `lucide-react` for UI icons.
- **No personal data in components.** All identity, contact and preference values live in `src/config/site.js`; lists live in `src/data/profile.js`.

```
portfolio/
├── index.html                 # template; build injects title, meta, OG, JSON-LD
├── package.json               # scripts: dev, build, check
├── scripts/
│   ├── build.mjs              # esbuild bundle + copy public/ + write dist/index.html + favicon
│   └── check.mjs              # sanity checks (see Section 10)
├── public/
│   ├── assets/portrait.webp   # owner's photo (resize to ~900 px webp)
│   └── docs/*.pdf             # owner's public documents
└── src/
    ├── main.jsx               # App: theme, motion, reveal observer, swarm auto-play, YT modal
    ├── context.js             # React context (site, theme, motion, playSwarm, openYT)
    ├── styles.css             # all styles (tokens, sections, responsive, nomo)
    ├── config/site.js         # identity, contact, appearance, preferences, counter, copyright
    ├── data/profile.js        # projects, tools, console lines, keywords, videos, shorts, playlists
    ├── motion/swarm.js        # Builder Swarm engine (Appendix A)
    └── components/
        Header, Hero, Ways, Work, Lab, About, Journey,
        Creator, Videos, Contact, Footer, YTModal, VisitorCounter (Appendix B)
```

Commands: `npm install`, `npm run dev` (watch + local server), `npm run build` (writes `dist/`), `npm run check`.

### `site.js` shape (fill from the interview)

```js
export const site = {
  websiteUrl: '',                       // final domain; enables canonical + og:url
  identity: { fullName: '', displayName: '', profession: '', roleLine2: '', location: '',
              availability: '', headline: ['', ''], intro: '', portrait: 'assets/portrait.webp',
              portraitAlt: '', resume: '' },
  contact: { email: '', linkedin: '', github: '', youtube: '', instagram: '', facebook: '',
             x: '', booking: '', mentorship: '' },        // empty string = hidden everywhere
  appearance: { theme: 'dark', accent: '#e5323e' },
  preferences: { autoSwarmOnFirstVisit: true, swarmFinaleDelayMs: 0 },
  copyrightHolder: '',
  visitorCounter: { enabled: true, api: 'https://abacus.jasoncameron.dev',
                    namespace: '<your-domain>', key: 'visits', refreshMs: 15000 },
  seo: { description: '', ogImage: 'assets/portrait.webp' },
  storageKey: '<short-unique-key>'      // prefix for localStorage/sessionStorage keys
};
```

### `profile.js` shapes

```js
// project: s = 'pub' | 'priv' | 'wip'; l = badge label; link = public URL or null; vid = YouTube id; short = 1 if a Short
{ cat: 'Developer Tool', s: 'pub', l: 'Public', t: 'Project name', d: 'One line.', stack: ['Tool'], link: null, vid: '', short: 0 }
export const TOOLS = ['Tool A', 'Tool B'];
export const CP = [['command typed', 'Result line. Next action: ...']];   // console
export const SKS = ['keyword', 'another keyword'];                        // JD matcher
export const YT_CHANNEL_ID = '';                                          // 'UC...' enables auto-sync
export const GH_USER = '';                                                // GitHub username for auto repos
export const V = [['videoId', 'Title', '12:34', 'topicKey', '3mo']];      // videos
export const S = [['shortId', 'Title']];                                  // shorts
export const PL = [['playlistId', 'Playlist title', 12]];                 // playlists
export const TOPICS = { all: 'All', topicKey: 'Topic label' };
```

---

## 4. Design system

```css
:root{
  --bg:#0a0a0a; --bg2:#101010; --bg3:#151515;
  --ink:#f2efe9; --ink2:#cfcac2; --muted:#8a8784;
  --line:rgba(255,255,255,.09); --line2:rgba(255,255,255,.16);
  --red:#e5323e; --red2:#b5141f; --red-soft:rgba(229,50,62,.12);   /* accent (rename freely) */
  --head:72px; --gut:clamp(16px,4vw,58px);
  --disp:'Anton',Impact,sans-serif; --body:'Manrope',system-ui,sans-serif; --script:'Caveat',cursive;
  --ease:cubic-bezier(.2,.8,.2,1);
}
[data-theme="light"]{
  --bg:#f3f0eb; --bg2:#ebe7e0; --bg3:#e4dfd7; --ink:#121110; --ink2:#2f2c29; --muted:#6f6a64;
  --line:rgba(0,0,0,.1); --line2:rgba(0,0,0,.18);
}
```

- **Container:** `max-width:1440px`, side padding `var(--gut)`.
- **Type:** display headings in `--disp`, uppercase, line-height about .92, sizes via `clamp()` (section headings roughly `clamp(42px,7vw,110px)`; hero name larger). Kicker labels: 11px, 700, letter-spacing .12em, uppercase, muted. Body 15 to 17px.
- **Signature details:** red dot at the end of every big heading; section kicker `NN / Label`; thin 1px borders between cards rather than heavy shadows; subtle film-grain overlay on `body::before`; buttons square-cornered (solid accent and ghost outline) with an arrow glyph that nudges on hover.
- **Reveal:** elements with `.rv` start at `opacity:0; transform:translateY(24px)` and get `.vis` from an IntersectionObserver (threshold .12). Stagger with `.d1`, `.d2`, `.d3` delays. A MutationObserver re-scans so cards rendered later (filters, "See all") also reveal.
- **Motion off:** a `.nomo` class on `<html>` disables animations and transitions and shows everything immediately. Respect `prefers-reduced-motion` by default.
- **Breakpoints:** about 1180, 1020 (nav collapses to a menu button), 720 and 370 px. No horizontal scroll at any width. Tap targets at least 44 px.
- **Header fit rule:** the nav is absolutely centred; the right-side controls must never overlap it. Measure at 1024, 1100, 1280, 1366, 1440 and 1920 px; when space is tight, hide control labels (icons only) before hiding controls.

---

## 5. Section-by-section build notes

Use semantic landmarks, one `<h1>` (the hero name), meaningful `alt` text, `aria-expanded` on accordions, `aria-pressed` on toggles and filter tabs.

1. **Header:** wordmark with accent dot, centred nav links, then controls: **Swarm** button (accent outline pill), Motion on/off, Theme, primary CTA. Scroll progress bar on top. Mobile: full-screen menu with numbered links, Escape closes, body scroll locked while open.
2. **Hero:** as described in Section 1. Stats count up when visible (skip when motion off). The big background word is decorative (`aria-hidden`).
3. **Ways:** two cards with numbers, title, text, underlined link.
4. **Work:** order public projects first. Card thumbnail is a CSS pattern chosen by hashing the category (radial red glow, grid lines, diagonal stripes, dot matrix, conic sweep). Title appears big inside the thumbnail; description fades in on hover/focus. Filters: All, two groups, Public, R&D; search over title, category, description and stack; show 6, then "See all (N)". Optional: fetch `https://api.github.com/users/<GH_USER>/repos?per_page=100&sort=pushed`, skip forks/archived/known links, append as Public cards. Fail silently.
5. **Tools marquee:** duplicate the list for a seamless CSS loop; pause button; "See all" reveals a wrapped list.
6. **Lab:** the before/after slider is a `role="slider"` element with a CSS variable `--x` that clips the "after" pane. Drag with pointer events, arrow keys move 5%, and until the visitor touches it, the split follows scroll position. Console rotates through `CP` every ~3 s. Then capability cards, an optional system diagram (root node → bus → three leaves), and product cards with status badges (Working, Active dev, R&D) and video links.
7. **Experience & craft:** bio, education list, skill bars that animate when visible (`--lv` percentage), tag chips, numbered process steps with a vertical pin line, and an accent quote card.
8. **Journey:** accordion (one open), milestones list with external links, achievements grid plus one highlighted total tile, credential vault of PDFs (`target="_blank"`).
9. **Creator:** buttons for the main platforms, platform cards filtered to links that exist, three topic cards.
10. **Videos:** featured player (prefers `maxresdefault` thumbnail, falls back to `hqdefault`), latest-uploads list, counts, topic tabs with counts, search, 9 then "See all", Shorts horizontal scroll, Playlists grid. Any element with `data-yt="<id>"` (and `data-short="1"` for Shorts) opens the modal via one delegated click listener; Cmd/Ctrl-click still opens YouTube.
    - **Optional auto-sync:** fetch `https://api.rss2json.com/v1/api.json?rss_url=` + encoded `https://www.youtube.com/feeds/videos.xml?channel_id=<ID>`. Prepend unknown IDs marked "New", route `/shorts/` links to Shorts, refresh ages, show a "Live · synced from YouTube" badge. Fail silently.
11. **YouTube modal:** `role="dialog"`, `aria-modal`, iframe from `https://www.youtube-nocookie.com/embed/<id>?autoplay=1&rel=0` created only when opened, focus trap, Escape and backdrop close, focus returns to the opener, vertical layout for Shorts.
12. **Contact:** heading, ring-link "Email <first name>", contact rows (only those provided), demo-reel card (owner's portrait + a demo video, only if they have one), accordions: brief, and JD matcher. Matcher: lower-case the pasted text, test each keyword with word-boundary regex `(^|[^a-z0-9+])kw($|[^a-z0-9+])`, show `matches / total` as a percent plus the first 12 matches. Everything runs locally; say so on screen.
13. **Footer:** giant outlined name (accent on the final dot), wordmark, `© <year> <copyrightHolder>. All rights reserved`, visitor counter, socials, back-to-top.
14. **SEO:** the build script writes `<title>`, description, canonical (if domain set), Open Graph and Twitter tags, and a JSON-LD `Person` built only from provided data. Generate an initials favicon in the accent colour.

---

## 6. Builder Swarm (the showpiece)

The complete reference engine is in **Appendix A**. It is dependency-free and works on any page. Summary of behaviour:

**Trigger.** The header **Swarm** button, a mobile-menu item, or `Alt+Shift+S`. Auto-plays once per browser session on desktop (fine pointer, width at least 900 px) as soon as the page loads. There is no loading or boot screen before it.

**Markup contract.** Tag elements in the components:

| Attribute | Builder |
|---|---|
| `data-sw="box"` | Cursor drags a crosshair from top-left to bottom-right over a grey placeholder with a live `W × H` badge, then the real element fades in. |
| `data-sw="text"` | I-beam cursor and blinking caret; text is revealed line by line with a clip-path polygon (no DOM text mutation, so React stays in control). |
| `data-sw="media"` | Image sweeps in top to bottom with a scan line. |
| `data-sw="line"` | Pen tool: anchor, dashed rubber band, end anchor, then the real line appears. |
| `data-sw-dup="group"` | Repeated items: the first is built as a master; the rest are Alt-drag copies with a ghost box and a red spacing measurement. |
| `data-sw-guide` | A red ruler guide is dragged from the left ruler to the element's left edge and the text snaps onto it. |
| `data-logo` | The element the cursors orbit at the start (the wordmark). |

Tag headings, kickers and key paragraphs as `text`; cards, panels, buttons and inputs as `box`; images and video posters as `media`; separators as `line`; card grids with `data-sw-dup`. Children of a tagged element wait for their parent; children of a duplicate arrive with it.

**Sequence.**
1. Scroll to top; all tagged elements fade out (blank canvas); top and left rulers appear.
2. 9 cursors (5 on phones) orbit the logo for ~1.3 s, then fan out.
3. Each cursor picks the nearest ready task top-down. Tasks are ready when visible, parent done, and master done.
4. **Auto-scroll is always on:** when nothing on screen is left to build, the page scrolls ~60% of a viewport. Fast scrolling recruits extra cursors (up to 14). Tasks scrolled past are revealed instantly. At the bottom, anything still pending after 0.7 s is revealed so the run never stalls.
5. **Finale (immediately when done, configurable delay):** all cursors circle the screen centre with "done ✓" labels, a large "Agents finished." message with a check badge and "N layers built by M agents" appears for 2 s, the page smooth-scrolls to the top, cursors fly back to the logo and the live page is restored.

**No control bar.** Nothing is drawn at the bottom of the screen during the run. Speed is fixed at **1.5×**. Keyboard only: `Esc` ends the run early and reveals the page; `M` toggles sound (off by default; Web Audio keyboard clicks and pentatonic notes, stereo-panned to the cursor). To replay, the visitor presses the header **Swarm** button again.

**Safety.** Content never depends on the swarm: Esc, errors or leaving the page reveal everything. Do not autoplay sound. Disable auto-play when motion is off or reduced motion is preferred.

**Customise:** `NAMES` (themed cursor labels), `COLORS`, the starting `speed` (1.5), `FINALE_DELAY_MS` / `finaleDelay`, and the finale text in `finale()`.

---

## 7. Live visitor counter

Uses the free **Abacus** counting API (`GET /hit/<ns>/<key>` increments, `GET /get/<ns>/<key>` reads; returns `{ "value": N }`; CORS enabled; 30 requests per 10 s per IP; counters expire after 6 months of no access). Count one hit per page load, refresh the total every 15 s while the tab is visible and on tab focus, animate the number when it rises, cache the last value in localStorage, and **hide the badge if no real number was ever received** (never show a fake count). Use the site's domain as the namespace. Reference component in **Appendix B**. Tell the owner it counts page loads, not unique people.

---

## 8. Content and privacy rules

1. Every name, date, number, logo, document, video and link comes from the owner.
2. Do not reuse the reference owner's portrait, projects, videos, IDs, PDFs, copy or social handles.
3. Empty config value = the related link, card or section is not rendered.
4. Synthetic portraits only if the owner asks, and never labelled as a real photo.
5. Public documents only with explicit consent (marksheets and certificates can be sensitive).
6. External links: `target="_blank" rel="noopener noreferrer"`.
7. Third-party calls are limited to: GitHub API, rss2json/YouTube feed, YouTube thumbnails and embeds, Abacus. Each must fail silently.

---

## 9. Deployment

- Netlify: drag `dist/` into the dashboard or connect the repo with build command `npm run build` and publish directory `dist`.
- Vercel / Cloudflare Pages: same build command and output folder.
- After going live: set `websiteUrl` and the counter namespace to the real domain, rebuild, redeploy.

---

## 10. Verification checklist (run before handing over)

- [ ] `npm run build` succeeds; `npm run check` passes (no reference-owner strings, referenced files exist, links are https).
- [ ] Screenshots at 1440, 768, 390 and 320 px: no horizontal scroll, header never overlaps, hero readable.
- [ ] Filters, search, "See all", accordions, before/after slider (mouse and keyboard), console, tools marquee pause.
- [ ] Video modal opens, plays, closes with Esc/backdrop, focus returns to the opener.
- [ ] Theme and Motion toggles work and persist.
- [ ] Swarm: auto-plays on first load with no boot screen and no bottom control bar; full run with auto-scroll at 1.5×, finale message, scroll to top, live page restored; Esc mid-run reveals everything; zero hidden elements afterwards; no console errors.
- [ ] Visitor counter shows a real number (or stays hidden offline).
- [ ] No fabricated data anywhere; every hidden section was intentionally empty.
- [ ] Report what was tested and what could not be verified (e.g. third-party APIs blocked in a sandbox).

---

## Appendix A: `src/motion/swarm.js` (reference engine)

Drop-in module. Usage:

```js
import { createSwarm } from './motion/swarm.js';
const swarm = createSwarm({ logo: '[data-logo]', finaleDelay: 0 });
// header button: onClick={() => swarm.start()}   cleanup: swarm.destroy()
```

Replace `NAMES` with labels themed to the owner's profession. The HUD element is kept off-DOM on purpose (internal status only), so no control bar is rendered.

```js
/*  Swarm Rebuild: a standalone "builder swarm" for this site.
    Inspired by the open source Swarm Rebuild idea (github.com/imperfec-t/swarm-Antigravity),
    re-implemented here from scratch so no third-party script runs on the page.

    Mark elements in markup:
      data-sw="box"    → crosshair drag, live W × H badge over a grey placeholder, then the real fill fades in
      data-sw="text"   → I-beam + blinking caret, typed line by line
      data-sw="media"  → images sweep in top to bottom
      data-sw="line"   → pen tool: anchor, rubber band, anchor
      data-sw-dup="g"  → repeated items: the first is built as a master, the rest are ⌥-dragged copies with red spacing
      data-sw-guide    → a red ruler guide is dragged out and the text snaps onto it

    Controls: Swarm button / Alt+Shift+S to start · Esc to end early · M = sound (off by default)
    No on-screen control bar; speed is fixed at 1.5×; auto-scroll is always on.
    The page never depends on this: Esc (or any failure) simply reveals everything.  */

const NAMES = ['BUILDER', 'DESIGNER', 'LAYOUT', 'TYPESETTER', 'GRID', 'PIXEL', 'RENDER', 'STYLIST', 'LAYER', 'ALIGN', 'CHECKER', 'REVIEWER', 'SHIPPER', 'DEPLOY']; // theme these to the owner's field
const COLORS = ['#e32b3c', '#f2efeb', '#ff8a5c', '#ffd166', '#7cc6ff', '#9b8cff', '#5fe39a', '#ff6b9a'];
// After everything is built: wait this long, then the finale (circle + message + scroll to top + go live)
const FINALE_DELAY_MS = 0;
const PENTA = [329.63, 369.99, 415.3, 493.88, 554.37, 659.25, 739.99, 830.61];

const CSS = `
.sw-h{opacity:0!important;transition:none!important}
.sw-fade{opacity:0!important;transition:opacity .45s ease!important}
.sw-show{transition:opacity .38s ease!important}
#sw{position:fixed;inset:0;z-index:500;pointer-events:none;overflow:hidden;font-family:'JetBrains Mono',ui-monospace,monospace;transition:opacity .5s}
#sw.out{opacity:0}
.sw-ruler{position:absolute;background:rgba(14,13,13,.92);color:rgba(242,239,235,.45);font-size:9px;z-index:3;opacity:0;transition:opacity .6s}
#sw.ready .sw-ruler{opacity:1}
.sw-rt{left:0;right:0;top:0;height:18px;border-bottom:1px solid rgba(242,239,235,.14);background-image:repeating-linear-gradient(90deg,rgba(242,239,235,.28) 0 1px,transparent 1px 10px);background-size:100% 5px;background-repeat:repeat-x;background-position:0 100%}
.sw-rl{left:0;top:0;bottom:0;width:18px;border-right:1px solid rgba(242,239,235,.14);background-image:repeating-linear-gradient(180deg,rgba(242,239,235,.28) 0 1px,transparent 1px 10px);background-size:5px 100%;background-repeat:repeat-y;background-position:100% 0}
.sw-rt span{position:absolute;top:2px;transform:translateX(3px)}
.sw-corner{position:absolute;left:0;top:0;width:18px;height:18px;background:#0e0d0d;z-index:4;border-right:1px solid rgba(242,239,235,.14);border-bottom:1px solid rgba(242,239,235,.14)}
.sw-ag{position:absolute;left:0;top:0;will-change:transform;z-index:6;transition:opacity .4s}
.sw-ag svg{position:absolute;max-width:none;filter:drop-shadow(0 2px 4px rgba(0,0,0,.5));transition:transform .12s}
.sw-ag .m{display:none}
.sw-ag[data-m="arrow"] .m-arrow,.sw-ag[data-m="cross"] .m-cross,.sw-ag[data-m="ibeam"] .m-ibeam,.sw-ag[data-m="pen"] .m-pen{display:block}
.sw-ag .m-arrow{left:-2px;top:-2px}.sw-ag .m-cross{left:-11px;top:-11px}.sw-ag .m-ibeam{left:-6px;top:-12px}.sw-ag .m-pen{left:-3px;top:-21px}
.sw-ag.press svg{transform:scale(.82)}
.sw-tag{position:absolute;left:15px;top:19px;white-space:nowrap;padding:3px 7px;border-radius:2px 8px 8px 8px;background:var(--c);color:var(--ct);font:700 9px/1.2 'JetBrains Mono',monospace;letter-spacing:.04em;transition:opacity .3s,transform .3s;transform-origin:0 0}
.sw-tag em{font-style:normal;font-weight:400;opacity:.8}
.sw-ag.flip .sw-tag{left:auto;right:8px;border-radius:8px 2px 8px 8px;transform-origin:100% 0}
.sw-ag.idle .sw-tag{opacity:0;transform:scale(.6)}
.sw-alt{position:absolute;left:-26px;top:-4px;padding:1px 5px;border-radius:4px;background:#f2efeb;color:#0b0b0b;font:700 11px/1.3 system-ui,sans-serif;opacity:0;transition:opacity .2s}
.sw-ag.alt .sw-alt{opacity:1}
.sw-ph{position:absolute;left:0;top:0;background:rgba(242,239,235,.055);border:1px solid var(--c);z-index:2}
.sw-ph i{position:absolute;width:7px;height:7px;background:#0b0b0b;border:1px solid var(--c);opacity:0;transition:opacity .15s}
.sw-ph i:nth-child(1){left:-4px;top:-4px}.sw-ph i:nth-child(2){right:-4px;top:-4px}.sw-ph i:nth-child(3){left:-4px;bottom:-4px}.sw-ph i:nth-child(4){right:-4px;bottom:-4px}
.sw-ph.set i{opacity:1}
.sw-ph.ghost{border-style:dashed;background:rgba(242,239,235,.04)}
.sw-ph.out{opacity:0;transition:opacity .4s}
.sw-wh{position:absolute;left:0;top:0;padding:2px 6px;border-radius:3px;background:var(--c);color:var(--ct);font:700 10px/1.3 'JetBrains Mono',monospace;white-space:nowrap;z-index:7}
.sw-caret{position:absolute;left:0;top:0;width:2px;background:var(--c);z-index:5;animation:swblink .9s steps(1) infinite}
@keyframes swblink{50%{opacity:0}}
.sw-scan{position:absolute;left:0;top:0;height:2px;background:var(--c);box-shadow:0 0 14px 2px var(--c);z-index:5}
.sw-guide{position:absolute;top:0;bottom:0;width:0;border-left:1px solid #ff2d4a;z-index:1;box-shadow:0 0 6px rgba(255,45,74,.5)}
.sw-guide b{position:absolute;top:auto;bottom:84px;left:4px;padding:1px 5px;background:#ff2d4a;color:#fff;font:700 9px/1.4 'JetBrains Mono',monospace;border-radius:2px}
.sw-measure{position:absolute;left:0;top:0;background:#ff2d4a;z-index:6}
.sw-measure b{position:absolute;padding:1px 5px;background:#ff2d4a;color:#fff;font:700 9px/1.4 'JetBrains Mono',monospace;border-radius:2px;white-space:nowrap}
.sw-anchor{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;background:#0b0b0b;border:1.5px solid var(--c);z-index:6}
.sw-pen{position:absolute;left:0;top:0;overflow:visible;z-index:5}
.sw-rip{position:absolute;width:34px;height:34px;margin:-17px 0 0 -17px;border-radius:50%;border:1.5px solid var(--c);animation:swrip .55s ease-out forwards;z-index:4}
@keyframes swrip{from{transform:scale(.2);opacity:1}to{transform:scale(1.5);opacity:0}}
.sw-orbit{position:absolute;border:1px dashed rgba(227,43,60,.5);border-radius:50%;z-index:1;transition:opacity .5s}
.sw-hud{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);display:flex;align-items:center;gap:6px;padding:6px;border-radius:999px;background:rgba(14,13,13,.94);border:1px solid rgba(242,239,235,.16);box-shadow:0 20px 50px -10px rgba(0,0,0,.8);pointer-events:auto;z-index:8;color:#f2efeb;font:600 12px 'Manrope',system-ui,sans-serif;max-width:calc(100vw - 24px);flex-wrap:wrap;justify-content:center}
.sw-hud button{min-height:34px;min-width:34px;padding:0 12px;border-radius:999px;border:1px solid transparent;background:none;color:inherit;font:inherit;cursor:pointer}
.sw-hud button:hover{border-color:rgba(242,239,235,.3)}
.sw-hud button:focus-visible{outline:2px solid #e32b3c;outline-offset:2px}
.sw-hud .on{background:#f2efeb;color:#0b0b0b}
.sw-hud .live{background:#e32b3c;color:#fff}
.sw-hud .sw-st{display:flex;align-items:center;gap:8px;padding:0 10px 0 8px;font-family:'JetBrains Mono',monospace;font-size:11.5px;white-space:nowrap}
.sw-hud .sw-st i{width:8px;height:8px;border-radius:50%;background:#e32b3c;box-shadow:0 0 10px #e32b3c;animation:swblink 1.2s steps(1) infinite}
.sw-hud .sw-st.done i{background:#5fe39a;box-shadow:0 0 10px #5fe39a;animation:none}
.sw-hud .sep{width:1px;height:18px;background:rgba(242,239,235,.16)}
.sw-hint{position:absolute;left:50%;bottom:74px;transform:translateX(-50%);font:600 11px 'JetBrains Mono',monospace;color:rgba(242,239,235,.7);letter-spacing:.08em;text-transform:uppercase;opacity:0;transition:opacity .4s;z-index:8;white-space:nowrap}
.sw-hint.on{opacity:1}
.sw-done{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scale(.86);text-align:center;opacity:0;transition:opacity .6s,transform .8s cubic-bezier(.22,1,.36,1);z-index:5;pointer-events:none;width:min(92vw,900px)}
.sw-done::before{content:'';position:absolute;inset:-40% -10%;background:radial-gradient(ellipse at center,rgba(9,9,9,.92) 30%,transparent 70%);z-index:-1}
.sw-done.on{opacity:1;transform:translate(-50%,-50%) scale(1)}
.sw-done h3{margin:0;font:400 clamp(44px,8.5vw,128px)/.9 'Anton',Impact,sans-serif;text-transform:uppercase;color:#f2efeb;letter-spacing:.01em}
.sw-done h3 em{font-style:normal;color:#e32b3c}
.sw-done p{margin:14px 0 0;font:600 12px 'JetBrains Mono',monospace;letter-spacing:.16em;text-transform:uppercase;color:rgba(242,239,235,.7)}
.sw-done .ok{display:inline-grid;place-items:center;width:54px;height:54px;margin-bottom:14px;border-radius:50%;background:#5fe39a;color:#0b0b0b;font:800 26px system-ui,sans-serif;box-shadow:0 0 40px rgba(95,227,154,.5)}
@media (max-width:560px){.sw-hud{border-radius:16px;bottom:10px;gap:2px;padding:5px}.sw-hud .sep{display:none}.sw-hud .sw-st{width:100%;justify-content:center;padding:4px 0}.sw-hud button{padding:0 9px}.sw-hint{bottom:118px}.sw-rl{display:none}}
`;

const SVG = {
  arrow: '<svg class="m m-arrow" width="20" height="24" viewBox="0 0 20 24"><path d="M2 2v18l5-4.8 3.4 7.6 3.1-1.4-3.3-7.4H17z" fill="var(--c)" stroke="#0b0b0b" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  cross: '<svg class="m m-cross" width="22" height="22" viewBox="0 0 22 22"><path d="M11 1v20M1 11h20" stroke="#0b0b0b" stroke-width="3.4"/><path d="M11 1v20M1 11h20" stroke="var(--c)" stroke-width="1.5"/></svg>',
  ibeam: '<svg class="m m-ibeam" width="12" height="24" viewBox="0 0 12 24"><path d="M2 2h8M2 22h8M6 2v20" stroke="#0b0b0b" stroke-width="3.6" stroke-linecap="round"/><path d="M2 2h8M2 22h8M6 2v20" stroke="var(--c)" stroke-width="1.7" stroke-linecap="round"/></svg>',
  pen: '<svg class="m m-pen" width="22" height="24" viewBox="0 0 22 24"><path d="M3 21 5 12l8-9 6 6-9 8z" fill="var(--c)" stroke="#0b0b0b" stroke-width="1.4" stroke-linejoin="round"/><circle cx="8.5" cy="14.5" r="1.6" fill="#0b0b0b"/></svg>'
};

export function createSwarm({ logo = '[data-logo]', finaleDelay = FINALE_DELAY_MS } = {}) {
  const fine = () => typeof matchMedia !== 'undefined';
  let style = null, L = null, hud = null, hint = null;
  let active = false, EP = 0, tasks = [], agents = [], speed = 1.5, sound = false, tour = false, done = 0, total = 0;
  let mouse = null, raf = 0, readyT = 0, anyReady = false, ac = null, lastScroll = { y: 0, t: 0 }, guides = [], tourT = 0, allDone = false, phase = 'build', finaleAt = 0, stuckT = 0;
  const off = [];

  const on = (t, ev, fn, o) => { t.addEventListener(ev, fn, o); off.push(() => t.removeEventListener(ev, fn, o)); };
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const ez = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const rc = (el) => el.getBoundingClientRect();
  const D = (ms) => ms / speed;
  const div = (cls, parent = L) => { const d = document.createElement('div'); d.className = cls; parent.appendChild(d); return d; };
  const alive = (ep) => active && ep === EP;
  const tween = (dur, fn, ep) => new Promise((res) => {
    const t0 = performance.now();
    const f = (now) => { if (!alive(ep)) return res(false); const t = Math.min(1, (now - t0) / dur); fn(t); t < 1 ? requestAnimationFrame(f) : res(true); };
    f(t0);
  });

  // ── sound (off by default; M toggles) ──
  function audio() { if (!ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch { ac = null; } } if (ac && ac.state === 'suspended') ac.resume(); return ac; }
  let lastClick = 0;
  function sfx(type, x = innerWidth / 2, i = 0) {
    if (!sound) return; const a = audio(); if (!a) return;
    const now = a.currentTime, pan = a.createStereoPanner ? a.createStereoPanner() : null, g = a.createGain();
    if (pan) { pan.pan.value = Math.max(-1, Math.min(1, (x / innerWidth) * 2 - 1)); g.connect(pan); pan.connect(a.destination); } else g.connect(a.destination);
    if (type === 'key') {
      if (performance.now() - lastClick < 38) return; lastClick = performance.now();
      const b = a.createBuffer(1, a.sampleRate * 0.02, a.sampleRate), d = b.getChannelData(0);
      for (let k = 0; k < d.length; k++) d[k] = (Math.random() * 2 - 1) * Math.pow(1 - k / d.length, 3);
      const s = a.createBufferSource(), hp = a.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 2400 + Math.random() * 1200;
      s.buffer = b; s.connect(hp); hp.connect(g); g.gain.value = 0.05; s.start(now);
    } else {
      const o = a.createOscillator(); o.type = 'triangle'; o.frequency.value = PENTA[i % PENTA.length] * (type === 'media' ? 0.5 : 1);
      g.gain.setValueAtTime(0.0001, now); g.gain.exponentialRampToValueAtTime(0.05, now + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
      o.connect(g); o.start(now); o.stop(now + 0.52);
    }
  }

  // ── agents ──
  function mkAgent(i, x, y) {
    const e = div('sw-ag'); const c = COLORS[i % COLORS.length];
    e.style.setProperty('--c', c); e.style.setProperty('--ct', ['#f2efeb', '#ffd166', '#5fe39a', '#7cc6ff'].includes(c) ? '#0b0b0b' : '#fff');
    e.dataset.m = 'arrow';
    e.innerHTML = SVG.arrow + SVG.cross + SVG.ibeam + SVG.pen + '<span class="sw-alt">⌥</span><span class="sw-tag"><b></b><em></em></span>';
    e.querySelector('b').textContent = NAMES[i % NAMES.length];
    const a = { i, e, c, x, y, busy: false, wx: x, wy: y, wt: 0, em: e.querySelector('em'), f: false };
    a.set = (nx, ny) => { a.x = nx; a.y = ny; e.style.transform = `translate3d(${nx}px,${ny}px,0)`; const f = nx > innerWidth - 170; if (f !== a.f) { a.f = f; e.classList.toggle('flip', f); } };
    a.mode = (m) => { e.dataset.m = m; };
    a.say = (s) => { a.em.textContent = s ? ' · ' + s : ''; };
    a.press = () => { e.classList.add('press'); setTimeout(() => e.classList.remove('press'), 150); const r = div('sw-rip'); r.style.cssText = `left:${a.x}px;top:${a.y}px;--c:${c}`; setTimeout(() => r.remove(), 600); };
    a.set(x, y); agents.push(a); return a;
  }
  function moveTo(a, pt, ep, dur) {
    const sx = a.x, sy = a.y, p0 = pt(), dist = Math.hypot(p0.x - sx, p0.y - sy);
    dur = dur || D(Math.min(900, Math.max(240, dist * 0.7)));
    const bend = (Math.random() - 0.5) * 0.3;
    return tween(dur, (t) => { const e = ez(t), p = pt(), dx = p.x - sx, dy = p.y - sy, s = Math.sin(Math.PI * e) * bend; a.set(sx + dx * e - dy * s, sy + dy * e + dx * s); }, ep);
  }

  // ── tasks ──
  function collect() {
    const els = [...document.querySelectorAll('[data-sw]')].filter((el) => el.getClientRects().length && !el.closest('#sw'));
    const map = new Map(); tasks = [];
    els.forEach((el) => { const t = { el, kind: el.dataset.sw, state: 'wait', parent: null, master: null, kids: [], guide: el.hasAttribute('data-sw-guide') }; map.set(el, t); tasks.push(t); });
    tasks.forEach((t) => { for (let p = t.el.parentElement; p; p = p.parentElement) if (map.has(p)) { t.parent = map.get(p); t.parent.kids.push(t); break; } });
    const groups = {};
    tasks.forEach((t) => { const g = t.el.dataset.swDup; if (g) (groups[g] = groups[g] || []).push(t); });
    Object.values(groups).forEach((list) => list.slice(1).forEach((t) => { t.kind = 'dup'; t.master = list[0]; }));
    // descendants of a duplicate arrive with it
    tasks.forEach((t) => { for (let p = t.parent; p; p = p.parent) if (p.kind === 'dup') { t.inherit = true; break; } });
    total = tasks.length; done = 0;
  }
  const visible = (r) => r.width > 0 && r.bottom > 0 && r.top < innerHeight * 0.94 && r.right > 0 && r.left < innerWidth;
  function reveal(t, animate) {
    if (t.state === 'done') return;
    t.state = 'done'; done++;
    const el = t.el; el.style.clipPath = '';
    if (animate) { el.classList.add('sw-show'); el.classList.remove('sw-h'); setTimeout(() => el.classList.remove('sw-show'), 420); }
    else el.classList.remove('sw-h', 'sw-fade');
    if (t.kind === 'dup' || animate === 'tree') t.kids.forEach((k) => revealTree(k, !!animate));
    hudUpdate();
  }
  function revealTree(t, animate) { reveal(t, animate); t.kids.forEach((k) => revealTree(k, animate)); }
  function ready(t) {
    if (t.state !== 'wait' || t.inherit) return false;
    if (t.parent && t.parent.state !== 'done') return false;
    if (t.master && t.master.state !== 'done') return false;
    return visible(rc(t.el));
  }
  function pick(a) {
    let best = null, bs = Infinity;
    for (const t of tasks) {
      if (!ready(t)) continue;
      const r = rc(t.el); const s = r.top * 1.2 + Math.hypot(r.left - a.x, r.top - a.y) * 0.35 + (t.kind === 'text' ? 0 : -30);
      if (s < bs) { bs = s; best = t; }
    }
    if (best) best.state = 'claimed';
    return best;
  }
  function passBy() {
    if (!active) return;
    for (const t of tasks) if (t.state === 'wait' && !t.inherit) { const r = rc(t.el); if (r.bottom < 0 || (r.width === 0 && r.height === 0)) revealTree(t, false); }
  }

  // ── builders ──
  const B = {
    async box(a, t, ep) {
      const el = t.el;
      await moveTo(a, () => { const r = rc(el); return { x: r.left, y: r.top }; }, ep); if (!alive(ep)) return;
      a.mode('cross'); a.press(); sfx('note', a.x, a.i);
      const ph = div('sw-ph'); ph.style.setProperty('--c', a.c); ph.innerHTML = '<i></i><i></i><i></i><i></i>';
      ph.style.borderRadius = getComputedStyle(el).borderRadius;
      const wh = div('sw-wh'); wh.style.setProperty('--c', a.c); wh.style.setProperty('--ct', a.e.style.getPropertyValue('--ct'));
      const r0 = rc(el), dur = D(Math.min(1050, Math.max(420, (r0.width + r0.height) * 0.75)));
      await tween(dur, (k) => {
        const e = ez(k), r = rc(el), w = Math.max(1, r.width * e), h = Math.max(1, r.height * e);
        a.set(r.left + w, r.top + h);
        ph.style.transform = `translate(${r.left}px,${r.top}px)`; ph.style.width = w + 'px'; ph.style.height = h + 'px';
        wh.textContent = `${Math.round(w)} × ${Math.round(h)}`; wh.style.transform = `translate(${r.left + w + 10}px,${r.top + h + 8}px)`;
      }, ep);
      ph.classList.add('set'); a.mode('arrow');
      await sleep(D(120)); reveal(t, true); wh.remove();
      const fr = rc(el); ph.style.transform = `translate(${fr.left}px,${fr.top}px)`;
      setTimeout(() => { ph.classList.add('out'); setTimeout(() => ph.remove(), 420); }, D(260));
    },

    async text(a, t, ep) {
      const el = t.el;
      const lines = textLines(el);
      if (!lines.length) { reveal(t, true); return; }
      if (t.guide) await guide(a, el, ep);
      if (!alive(ep)) return;
      await moveTo(a, () => { const r = rc(el); return { x: r.left + lines[0].l - 2, y: r.top + lines[0].t + (lines[0].b - lines[0].t) / 2 }; }, ep); if (!alive(ep)) return;
      a.mode('ibeam'); a.press();
      const caret = div('sw-caret'); caret.style.setProperty('--c', a.c);
      el.classList.remove('sw-h'); el.style.clipPath = 'polygon(0 0,0 0,0 0)';
      const totalW = lines.reduce((s, l) => s + (l.r - l.l), 0), chars = Math.max(1, (el.textContent || '').length);
      const big = parseFloat(getComputedStyle(el).fontSize) > 40;
      const dur = D(Math.min(big ? 1200 : 1500, Math.max(260, chars * (big ? 70 : 16))));
      let lastP = 0;
      await tween(dur, (k) => {
        const r = rc(el); let rem = k * totalW, li = 0;
        while (li < lines.length - 1 && rem > lines[li].r - lines[li].l) { rem -= lines[li].r - lines[li].l; li++; }
        const L0 = lines[li], x = Math.min(L0.r, L0.l + rem);
        el.style.clipPath = `polygon(-20px -20px,${r.width + 20}px -20px,${r.width + 20}px ${L0.t}px,${x}px ${L0.t}px,${x}px ${L0.b + 6}px,-20px ${L0.b + 6}px)`;
        caret.style.transform = `translate(${r.left + x + 1}px,${r.top + L0.t}px)`; caret.style.height = (L0.b - L0.t) + 'px';
        a.set(r.left + x + 8, r.top + L0.b - 2);
        if (k - lastP > 0.02) { lastP = k; sfx('key', a.x); }
      }, ep);
      caret.remove(); reveal(t, false); a.mode('arrow');
    },

    async media(a, t, ep) {
      const el = t.el;
      await moveTo(a, () => { const r = rc(el); return { x: r.right - 6, y: r.top }; }, ep); if (!alive(ep)) return;
      a.press(); sfx('media', a.x, a.i);
      el.classList.remove('sw-h'); el.style.clipPath = 'inset(0 0 100% 0)';
      const sc = div('sw-scan'); sc.style.setProperty('--c', a.c);
      await tween(D(Math.min(900, Math.max(420, rc(el).height * 1.6))), (k) => {
        const e = ez(k), r = rc(el), y = r.top + r.height * e;
        el.style.clipPath = `inset(0 0 ${(100 - e * 100).toFixed(2)}% 0)`;
        sc.style.transform = `translate(${r.left}px,${y}px)`; sc.style.width = r.width + 'px'; a.set(r.right - 6, y);
      }, ep);
      sc.remove(); reveal(t, false);
    },

    async line(a, t, ep) {
      const el = t.el, vert = () => { const r = rc(el); return r.height > r.width; };
      const A = () => { const r = rc(el); return vert() ? { x: r.left + r.width / 2, y: r.top } : { x: r.left, y: r.top + r.height / 2 }; };
      const Bp = () => { const r = rc(el); return vert() ? { x: r.left + r.width / 2, y: r.bottom } : { x: r.right, y: r.top + r.height / 2 }; };
      await moveTo(a, A, ep); if (!alive(ep)) return;
      a.mode('pen'); a.press(); sfx('note', a.x, a.i + 2);
      const an1 = div('sw-anchor'), an2 = div('sw-anchor'); an1.style.setProperty('--c', a.c); an2.style.setProperty('--c', a.c); an2.style.opacity = '0';
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class', 'sw-pen'); svg.setAttribute('width', innerWidth); svg.setAttribute('height', innerHeight);
      const ln = document.createElementNS('http://www.w3.org/2000/svg', 'line'); ln.setAttribute('stroke', a.c); ln.setAttribute('stroke-width', '1.5'); ln.setAttribute('stroke-dasharray', '5 4');
      svg.appendChild(ln); L.appendChild(svg);
      const s0 = A(); a.set(s0.x, s0.y);
      await tween(D(Math.min(1000, Math.max(380, Math.hypot(Bp().x - s0.x, Bp().y - s0.y) * 0.8))), (k) => {
        const e = ez(k), p = A(), q = Bp(), x = p.x + (q.x - p.x) * e, y = p.y + (q.y - p.y) * e;
        an1.style.left = p.x + 'px'; an1.style.top = p.y + 'px';
        ln.setAttribute('x1', p.x); ln.setAttribute('y1', p.y); ln.setAttribute('x2', x); ln.setAttribute('y2', y);
        a.set(x, y + (vert() ? 0 : Math.sin(e * Math.PI) * -10));
      }, ep);
      const q = Bp(); an2.style.left = q.x + 'px'; an2.style.top = q.y + 'px'; an2.style.opacity = '1'; a.press();
      ln.removeAttribute('stroke-dasharray');
      reveal(t, true); a.mode('arrow');
      setTimeout(() => { [an1, an2, svg].forEach((n) => { n.style.transition = 'opacity .4s'; n.style.opacity = '0'; setTimeout(() => n.remove(), 420); }); }, D(320));
    },

    async dup(a, t, ep) {
      const el = t.el, m = t.master.el;
      if (!visible(rc(m))) { await B.box(a, t, ep); reveal(t, 'tree'); return; }
      await moveTo(a, () => { const r = rc(m); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }, ep); if (!alive(ep)) return;
      a.e.classList.add('alt'); a.press(); sfx('note', a.x, a.i + 4);
      const ph = div('sw-ph ghost'); ph.style.setProperty('--c', a.c); ph.style.borderRadius = getComputedStyle(m).borderRadius;
      const ms = div('sw-measure'), mb = document.createElement('b'); ms.appendChild(mb);
      const off0 = (() => { const r = rc(m); return { dx: a.x - r.left, dy: a.y - r.top }; })();
      const tr0 = rc(el), mr0 = rc(m);
      const dur = D(Math.min(950, Math.max(380, Math.hypot(tr0.left - mr0.left, tr0.top - mr0.top) * 0.6)));
      await tween(dur, (k) => {
        const e = ez(k), mr = rc(m), tr = rc(el);
        const x = mr.left + (tr.left - mr.left) * e, y = mr.top + (tr.top - mr.top) * e, w = mr.width + (tr.width - mr.width) * e, h = mr.height + (tr.height - mr.height) * e;
        ph.style.transform = `translate(${x}px,${y}px)`; ph.style.width = w + 'px'; ph.style.height = h + 'px';
        a.set(x + off0.dx, y + off0.dy);
        const sameRow = Math.abs(tr.top - mr.top) < 12;
        if (sameRow) {
          const g = x >= mr.right ? x - mr.right : mr.left - (x + w), x0 = x >= mr.right ? mr.right : x + w;
          ms.style.cssText = `transform:translate(${x0}px,${y + h / 2}px);width:${Math.max(0, g)}px;height:1px`; mb.textContent = Math.round(Math.max(0, g)) + 'px'; mb.style.cssText = 'left:50%;top:6px;transform:translateX(-50%)';
        } else {
          const g = y >= mr.bottom ? y - mr.bottom : mr.top - (y + h), y0 = y >= mr.bottom ? mr.bottom : y + h;
          ms.style.cssText = `transform:translate(${x + w / 2}px,${y0}px);width:1px;height:${Math.max(0, g)}px`; mb.textContent = Math.round(Math.max(0, g)) + 'px'; mb.style.cssText = 'left:6px;top:50%;transform:translateY(-50%)';
        }
      }, ep);
      a.e.classList.remove('alt'); a.press();
      reveal(t, 'tree');
      setTimeout(() => { ms.remove(); ph.classList.add('out'); setTimeout(() => ph.remove(), 420); }, D(240));
    }
  };

  function textLines(el) {
    const R = rc(el), range = document.createRange(); range.selectNodeContents(el);
    const rects = [...range.getClientRects()].filter((r) => r.width > 1 && r.height > 1);
    const lines = [];
    rects.forEach((r) => {
      const cy = (r.top + r.bottom) / 2; let ln = lines.find((l) => Math.abs(l.cy - cy) < Math.max(4, r.height * 0.3));
      if (!ln) { ln = { cy, t: r.top, b: r.bottom, l: r.left, r: r.right }; lines.push(ln); }
      ln.t = Math.min(ln.t, r.top); ln.b = Math.max(ln.b, r.bottom); ln.l = Math.min(ln.l, r.left); ln.r = Math.max(ln.r, r.right);
    });
    return lines.sort((a, b) => a.t - b.t).map((l) => ({ t: l.t - R.top, b: l.b - R.top, l: l.l - R.left, r: l.r - R.left }));
  }

  async function guide(a, el, ep) {
    const x = Math.round(rc(el).left);
    if (guides.some((g) => Math.abs(g.x - x) < 3)) return;
    await moveTo(a, () => ({ x: 9, y: Math.max(40, rc(el).top) }), ep); if (!alive(ep)) return;
    a.press(); a.mode('arrow');
    const g = div('sw-guide'); const lab = document.createElement('b'); g.appendChild(lab); const rec = { x, n: g }; guides.push(rec);
    if (guides.length > 5) guides.shift().n.remove();
    await tween(D(520), (k) => { const gx = 9 + (x - 9) * ez(k); g.style.left = gx + 'px'; lab.textContent = Math.round(gx) + 'px'; a.set(gx, a.y); }, ep);
    el.animate([{ transform: 'translateX(-7px)' }, { transform: 'translateX(0)' }], { duration: D(240), easing: 'cubic-bezier(.2,1.6,.4,1)' });
  }

  async function run(a, t) {
    const ep = EP; a.busy = true; a.e.classList.remove('idle');
    a.say({ box: 'box', text: 'type', media: 'image', line: 'pen', dup: '⌥ copy' }[t.kind] || '');
    try { await (B[t.kind] || B.box)(a, t, ep); } catch { /* never block content */ }
    if (alive(ep)) reveal(t, t.kind === 'dup' ? 'tree' : true);
    a.mode('arrow'); a.e.classList.remove('alt'); a.say(''); a.busy = false;
  }
  async function loop(a, ep) {
    while (alive(ep)) {
      const t = pick(a);
      if (t) await run(a, t); else { if (phase !== 'finale' && phase !== 'home') a.e.classList.add('idle'); await sleep(140); }
    }
  }

  // ── idle flocking + tour + agent boost ──
  function tick() {
    if (!active) return;
    const now = performance.now();
    const pending = tasks.some((t) => t.state !== 'done');
    allDone = !pending;
    agents.forEach((a, i) => {
      if (a.busy || phase === 'home') return;
      let tx, ty;
      if (phase === 'finale') { const R = Math.min(innerWidth, innerHeight) * (innerWidth < 600 ? 0.36 : 0.3), ang = now / 650 + (i / agents.length) * Math.PI * 2; tx = innerWidth / 2 + Math.cos(ang) * R; ty = innerHeight / 2 + Math.sin(ang) * R * 0.78; a.set(a.x + (tx - a.x) * 0.12, a.y + (ty - a.y) * 0.12); return; }
      if (allDone && mouse) { const ang = now / 1600 + (i / agents.length) * Math.PI * 2, rad = 46 + (i % 3) * 22; tx = mouse.x + Math.cos(ang) * rad; ty = mouse.y + Math.sin(ang) * rad * 0.7; }
      else { if (now > a.wt) { a.wx = 60 + Math.random() * (innerWidth - 120); a.wy = innerHeight * (0.55 + Math.random() * 0.35); a.wt = now + 1600 + Math.random() * 2200; } tx = a.wx; ty = a.wy; }
      a.set(a.x + (tx - a.x) * 0.06, a.y + (ty - a.y) * 0.06);
    });
    const idle = agents.every((a) => !a.busy);
    if (now - readyT > 300) { readyT = now; anyReady = tasks.some(ready); }
    hint.classList.toggle('on', phase === 'build' && pending && idle && !anyReady && !tour);
    const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
    if (tour && pending && idle && !anyReady && now > tourT) {
      if (!atBottom) { tourT = now + D(1100); scrollBy({ top: innerHeight * 0.6, behavior: 'smooth' }); }
    }
    // never get stuck: at the bottom with nothing buildable for a while, reveal what is left
    if (pending && idle && !anyReady && atBottom) { if (!stuckT) stuckT = now; else if (now - stuckT > 700) tasks.forEach((t) => t.state !== 'done' && reveal(t, true)); } else stuckT = 0;
    if (!pending && phase === 'build') { phase = 'rest'; finaleAt = now + finaleDelay; hudUpdate(); }
    if (phase === 'rest') {
      const left = Math.max(0, Math.ceil((finaleAt - now) / 1000));
      const txt = hud.querySelector('.sw-txt'), want = `Built ${total} layers · finale in ${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
      if (txt.textContent !== want) txt.textContent = want;
      if (now >= finaleAt) finale(EP);
    }
    raf = requestAnimationFrame(tick);
  }
  async function finale(ep) {
    phase = 'finale'; tour = false; hudUpdate();
    hud.querySelector('.sw-txt').textContent = 'Agents finished';
    agents.forEach((a) => { a.e.classList.remove('idle'); a.mode('arrow'); a.say('done ✓'); });
    sfx('note', innerWidth / 2, 0); setTimeout(() => sfx('note', innerWidth / 2, 2), 160); setTimeout(() => sfx('note', innerWidth / 2, 5), 320);
    const msg = div('sw-done'); msg.setAttribute('role', 'status');
    msg.innerHTML = `<span class="ok">✓</span><h3>Agents <em>finished.</em></h3><p>${total} layers built by ${agents.length} agents</p>`;
    requestAnimationFrame(() => requestAnimationFrame(() => msg.classList.add('on')));
    await sleep(2000); if (!alive(ep)) return;
    // circle keeps spinning while the page glides back to the top
    scrollTo({ top: 0, behavior: 'smooth' });
    const t0 = performance.now(); while (alive(ep) && scrollY > 4 && performance.now() - t0 < 6000) await sleep(100);
    if (!alive(ep)) return;
    await sleep(300); if (!alive(ep)) return;
    msg.classList.remove('on');
    // fly home to the logo, then go live
    phase = 'home';
    const lg = document.querySelector(logo), r = lg ? rc(lg) : { left: 40, top: 20, width: 80, height: 30 };
    await Promise.all(agents.map((a, i) => new Promise((res) => setTimeout(() => moveTo(a, () => ({ x: r.left + r.width / 2, y: r.top + r.height / 2 }), ep, 700).then(() => { a.e.style.opacity = '0'; res(); }), i * 60))));
    if (alive(ep)) stop();
  }
  function onScroll() {
    const now = performance.now(), v = Math.abs(scrollY - lastScroll.y) / Math.max(16, now - lastScroll.t);
    lastScroll = { y: scrollY, t: now };
    if (v > 1.4 && agents.length < NAMES.length) { const a = mkAgent(agents.length, Math.random() * innerWidth, innerHeight + 20); loop(a, EP); }
    requestAnimationFrame(passBy);
  }

  // ── HUD ──
  function buildHud() {
    hud = document.createElement('div'); hud.className = 'sw-hud'; // control bar removed from the page (kept off-DOM for internal state)
    hud.setAttribute('role', 'toolbar'); hud.setAttribute('aria-label', 'Swarm rebuild controls');
    hud.innerHTML = `<span class="sw-st" aria-live="polite"><i></i><span class="sw-txt">Building</span></span><span class="sep"></span>
      <button data-a="tour" title="Auto-scroll at the swarm's pace (on by default)">Auto-scroll</button>
      <button data-a="s1" aria-label="Speed 1x">1×</button><button data-a="s2" aria-label="Speed 2x">2×</button><button data-a="s3" aria-label="Speed 3x">3×</button>
      <button data-a="snd" aria-label="Toggle sound (M)" title="Sound (M)">♪ off</button><span class="sep"></span>
      <button data-a="replay" title="Rebuild again">Replay</button><button data-a="live" class="live" title="Esc">Go live</button>`;
    hud.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return; const k = b.dataset.a;
      if (k === 'live') stop(); else if (k === 'replay') start(); else if (k === 'tour') { tour = !tour; tourT = 0; hudUpdate(); }
      else if (k === 'snd') toggleSound(); else if (k[0] === 's') { speed = +k[1]; hudUpdate(); }
    });
    hint = document.createElement('div'); hint.className = 'sw-hint'; // not shown
    hint.textContent = 'Scroll to keep building ↓';
  }
  function toggleSound() { sound = !sound; if (sound) audio(); hudUpdate(); }
  function hudUpdate() {
    if (!hud) return;
    const fin = done >= total;
    hud.querySelector('.sw-st').classList.toggle('done', fin);
    if (phase === 'build') hud.querySelector('.sw-txt').textContent = fin ? `Built ${total} layers` : `Building ${done}/${total}`;
    hud.querySelectorAll('[data-a^="s"]').forEach((b) => b.dataset.a !== 'snd' && b.classList.toggle('on', +b.dataset.a[1] === speed));
    hud.querySelector('[data-a="tour"]').classList.toggle('on', tour);
    hud.querySelector('[data-a="snd"]').textContent = sound ? '♪ on' : '♪ off';
  }

  function rulers() {
    div('sw-ruler sw-rt'); div('sw-ruler sw-rl'); div('sw-ruler sw-corner');
    const rt = L.querySelector('.sw-rt'); for (let x = 100; x < innerWidth; x += 100) { const s = document.createElement('span'); s.style.left = x + 'px'; s.textContent = x; rt.appendChild(s); }
  }

  // ── lifecycle ──
  async function start() {
    if (active) teardown(false);
    if (!style) { style = document.createElement('style'); style.id = 'sw-css'; style.textContent = CSS; document.head.appendChild(style); }
    active = true; EP++; const ep = EP; tour = true; tourT = 0; allDone = false; guides = []; phase = 'build'; stuckT = 0;
    scrollTo({ top: 0, behavior: 'instant' });
    L = document.createElement('div'); L.id = 'sw'; L.setAttribute('aria-hidden', 'false'); document.body.appendChild(L);
    collect();
    rulers(); buildHud(); hudUpdate();
    // 1. blank the canvas
    tasks.forEach((t) => t.el.classList.add('sw-fade'));
    await sleep(480); if (!alive(ep)) return;
    tasks.forEach((t) => { t.el.classList.remove('sw-fade'); t.el.classList.add('sw-h'); });
    L.classList.add('ready');
    // 2. orbit the logo, then fan out
    const lg = document.querySelector(logo); const lr = lg ? rc(lg) : { left: innerWidth / 2 - 40, top: innerHeight / 2 - 20, width: 80, height: 40 };
    const cx = lr.left + Math.min(lr.width, 60) / 2 + 6, cy = lr.top + lr.height / 2 + 26;
    const n = innerWidth < 700 ? 5 : 9;
    for (let i = 0; i < n; i++) mkAgent(i, cx, cy);
    const ring = div('sw-orbit');
    await tween(D(1300), (k) => {
      const rad = 18 + 46 * ez(Math.min(1, k * 1.6));
      ring.style.cssText = `left:${cx - rad}px;top:${cy - rad * 0.7}px;width:${rad * 2}px;height:${rad * 1.4}px;opacity:${1 - k}`;
      agents.forEach((a, i) => { const ang = k * Math.PI * 2.2 + (i / n) * Math.PI * 2; a.set(cx + Math.cos(ang) * rad, cy + Math.sin(ang) * rad * 0.7); });
    }, ep);
    ring.remove(); if (!alive(ep)) return;
    // 3. build
    lastScroll = { y: scrollY, t: performance.now() };
    agents.forEach((a, i) => setTimeout(() => loop(a, ep), i * 70));
    raf = requestAnimationFrame(tick);
  }
  function teardown(fade) {
    active = false; EP++; cancelAnimationFrame(raf);
    tasks.forEach((t) => { t.el.classList.remove('sw-h', 'sw-fade', 'sw-show'); t.el.style.clipPath = ''; t.state = 'done'; });
    tasks = []; agents = [];
    const layer = L; L = null; hud = null; hint = null;
    if (layer) { if (fade) { layer.classList.add('out'); setTimeout(() => layer.remove(), 520); } else layer.remove(); }
  }
  function stop() { if (active) teardown(true); }

  on(window, 'keydown', (e) => {
    if (e.altKey && e.shiftKey && (e.key === 'S' || e.key === 's' || e.code === 'KeyS')) { e.preventDefault(); active ? stop() : start(); return; }
    if (!active) return;
    if (e.key === 'Escape') stop();
    else if ((e.key === 'm' || e.key === 'M') && !/input|textarea|select/i.test(document.activeElement?.tagName || '')) toggleSound();
  });
  on(window, 'pointermove', (e) => { if (e.pointerType === 'mouse') mouse = { x: e.clientX, y: e.clientY }; }, { passive: true });
  on(window, 'scroll', () => active && onScroll(), { passive: true });
  on(window, 'resize', () => active && passBy());

  return {
    start, stop,
    get active() { return active; },
    destroy() { stop(); off.forEach((f) => f()); style?.remove(); style = null; }
  };
}
```

---

## Appendix B: `src/components/VisitorCounter.jsx`

Reads `site.visitorCounter` and `site.storageKey` from context.

```jsx
import React, { useEffect, useRef, useState } from 'react';
import { Eye } from 'lucide-react';
import { useApp } from '../context.js';

// Live total-visits counter. Each page load counts as one visit; while the page is open
// the total is re-fetched every `refreshMs` (and when the tab becomes visible again).
// If the service cannot be reached, the last known total is shown; with no data it stays hidden.
export default function VisitorCounter() {
  const { site } = useApp();
  const cfg = site.visitorCounter;
  const cacheKey = `${site.storageKey}-visits`;
  const [count, setCount] = useState(() => { try { const v = +localStorage.getItem(cacheKey); return v > 0 ? v : null; } catch { return null; } });
  const [bump, setBump] = useState(false);
  const last = useRef(count);

  useEffect(() => {
    if (!cfg?.enabled) return;
    const base = `${cfg.api}/%s/${encodeURIComponent(cfg.namespace)}/${encodeURIComponent(cfg.key)}`;
    let stop = false;
    const show = (v) => {
      if (stop || typeof v !== 'number') return;
      if (last.current != null && v > last.current) { setBump(true); setTimeout(() => setBump(false), 900); }
      last.current = v; setCount(v);
      try { localStorage.setItem(cacheKey, String(v)); } catch { /* storage blocked */ }
    };
    const call = (op) => fetch(base.replace('%s', op), { cache: 'no-store' }).then((r) => (r.ok ? r.json() : null)).then((j) => j && show(j.value)).catch(() => {});
    call('hit');
    const refresh = () => { if (document.visibilityState === 'visible') call('get'); };
    const t = setInterval(refresh, Math.max(10000, cfg.refreshMs || 30000));
    document.addEventListener('visibilitychange', refresh);
    return () => { stop = true; clearInterval(t); document.removeEventListener('visibilitychange', refresh); };
  }, []);

  if (!cfg?.enabled || count == null) return null;
  return (
    <p className={'visits' + (bump ? ' bump' : '')} aria-live="polite">
      <span className="visits-dot" aria-hidden="true" />
      <Eye size={14} aria-hidden="true" />
      <b>{count.toLocaleString('en-IN')}</b> visitors
    </p>
  );
}
```

---

*End of spec. Build something that is unmistakably the new owner's.*
