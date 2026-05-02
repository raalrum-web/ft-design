# FT Design — Design System

A bilingual (Arabic / English) brand and UI system for **FT Design**, an
interior-design **consultation service** based in Doha, Qatar. The brand
operates under a stacked "fF" monogram and the wordmark **FT Design ·
Design Consultation Services**.

This system codifies the look that appears on the brand's service /
pricing sheets and pulls its palette and material vocabulary from the
interior photography supplied by the studio.

---

## Sources

All inputs were provided directly by the user as image uploads — no
codebase, Figma file, or live website was supplied.

| Source | Path | Purpose |
| --- | --- | --- |
| Brand mark (color) | `design-system/assets/logo-ft-green.svg` | Primary logo lockup |
| Brand mark (mono) | `design-system/assets/logo-ft-black.svg` | Single-color variant |
| Brand mark (vector) | `design-system/assets/logo-ft.pdf` | Print master |
| Brand sample sheets | `design-system/assets/sample-services-list.jpg`, `sample-pricing.jpg`, `sample-terms.jpg`, `sample-scope.jpg` | Type, color and copy reference |
| Interior photography | `design-system/assets/interior-*.jpg`, `styled-coffee-tray-*.jpg`, `exterior-rattan-patio.jpg` | Material / mood reference |

> **The four sample sheets are the canonical reference** for layout,
> color, and tone — every spec in this document was reverse-engineered
> from them. If you have higher-fidelity originals (the studio's master
> Illustrator / InDesign file, or a brand guide PDF), please share them
> so we can refine.

---

## Suggested defaults (fill-ins)

The user asked us to suggest reasonable values for the things that
weren't provided. **These are guesses**, clearly labeled — swap them
out the moment the studio gives you the real ones.

| Field | Suggested value | Why |
| --- | --- | --- |
| Brand name (English) | **FT Design** | Matches the wordmark on every sample sheet. |
| Brand name (Arabic) | **إف تي ديزاين** | Phonetic transliteration; preferred over translating "FT" literally. |
| Tagline (EN) | *Considered interiors, by appointment.* | Hospitality register; nods to "by-appointment" model. |
| Tagline (AR) | *تصاميم مدروسة، بموعدٍ مسبق.* | Direct mirror. |
| Founder voice | *Rana Al-Thani, founder* | Placeholder name — replace with the real principal. |
| Studio location | *West Bay, Doha · by appointment* | Matches Doha-only in-person scope. |
| Email | `hello@ftdesign.qa` | Suggested .qa domain. |
| Phone | `+974 0000 0000` | Placeholder. |
| Instagram | `@ft.design` | Suggested handle. |
| Working hours | Sun–Thu 10:00–18:00 AST | Standard Qatari work-week. |
| About copy seed | *"FT Design is a small Doha-based studio offering paid consultations to homeowners building, renovating, or stuck mid-project. We don't run construction — we sit with you, walk your floor plan, and shape the decisions before they're hard to undo."* | Distills the actual service description on the sample sheets. |

### Alternate font pairing (if Cormorant feels too literary)

| Use | Primary (current) | Alternate |
| --- | --- | --- |
| Display | Cormorant Garamond | **Fraunces 400/500** — a more contemporary "old-style with attitude" cut |
| Body | Inter | **Söhne** *(licensed)* or **Manrope** *(free)* |
| Arabic | Noto Naskh Arabic | **29LT Bukra** *(licensed)* — same warmth, more architectural |

---

## What this brand actually does

FT Design sells **paid design consultations** — not full
build-out / project-management services. Two tiers:

1. **مباشرة (In-person)** — 45 min, **5,000 QAR**. Includes an on-site
   visit within Doha if the client requests it.
2. **غير مباشرة (Remote)** — 60 min, **3,000 QAR**. Available worldwide.

Scope of the consultation includes architectural/interior advice,
plan review, material/color/lighting/furniture guidance, and a
walkthrough of how spatial allocation will affect the client's
day-to-day life. The service explicitly **does not** include sketches
or design drawings — those are quoted separately, with a 5% discount
off the consultation fee credited toward design + execution work if
the client commissions follow-on work.

A consultation is paid up-front (non-refundable, by Bankak transfer);
appointments are confirmed only after payment lands. There is one
specific cultural note baked into the brand's terms: **for couples /
mixed-gender households, a female household member must be present
during the consultation** — the studio will not meet otherwise.

---

## Index of this folder

```
.
├── README.md                       ← you are here
├── SKILL.md                        ← entry point for Claude Skills
├── package.json                    ← Vite + React
├── vite.config.js
├── index.html                      ← Vite entry
├── public/                         ← static files copied as-is to dist (optional favicon, etc.)
├── src/                            ← React app (main.jsx, App.jsx, assets/, components/, screens/, data/)
├── design-system/                  ← reference only (tokens, assets, preview HTML, uploads)
│   ├── README.md
│   ├── tokens/colors_and_type.css  ← design tokens
│   ├── assets/                     ← brand library (sync → src/assets for the app)
│   ├── preview/                    ← static design cards
│   └── uploads/
```

The live marketing site is **Vite + React** (`src/`). From the repo root:

```bash
npm install
npm run dev
```

Site photography lives in **`src/assets/`**. **Edit `src/assets/media.js`** — the `MEDIA_FILES` map points each screen slot (hero, four grid images, logo) at a **filename in that folder**. Drop in your real furniture photos, set the filenames there, then run **`npm run dev`**.

After refreshing **`design-system/assets/`**, run **`npm run sync-assets`** to copy into **`src/assets/`**, then update **`media.js`** if your real files use different names.

Open **http://127.0.0.1:5173** (Vite’s dev server). Plain `http://127.0.0.1` has **no port** and will not reach Vite.

After `npm run build`, test the production bundle with `npm run preview` → **http://127.0.0.1:4173**.

Do **not** open `dist/index.html` directly from the Finder (`file://`). Scripts load from `/assets/...`, which only works when a server serves the **`dist`** folder (e.g. `npm run preview`).

Quick links:

- [Visual foundations](#visual-foundations) — colors, type, motion, materials
- [Content fundamentals](#content-fundamentals) — voice, tone, bilingual rules
- [Iconography](#iconography) — what we use and why
- [Font substitutions](#font-substitutions) — flagged for review

---

## Visual foundations

### Color

The brand lives in a tightly bounded warm-neutral world. Three things
do all the work: a **cream-paper background**, a **deep forest green**
that stamps the most important info, and **dark warm ink** for
typography. Wood and brass arrive only as photographic accents, never
as UI fills.

| Role | Hex | Where it shows up |
| --- | --- | --- |
| `--ft-cream` | `#ECE4D2` | Page background on every brand sheet |
| `--ft-cream-soft` | `#F4EEDF` | Lighter cream for nested cards |
| `--ft-paper` | `#FBF8F0` | Near-white card fill, form fields |
| `--ft-forest` | `#4F6B3F` | Service-tier ribbons, primary buttons |
| `--ft-forest-deep` | `#3D5530` | Hover / pressed |
| `--ft-sage` | `#B8C2A8` | Hairlines, disabled bg, badges |
| `--ft-ink` | `#1F1B17` | Body text, headlines |
| `--ft-walnut` | `#6B4A2B` | Wood-grain accent (sparingly) |
| `--ft-brass` | `#B88B4A` | Iconography callouts (sparingly) |

**Rules of thumb**

- Cream is the page; never use pure white as a surface, only as ink-on-ink relief.
- Use **only one** accent color in a composition. Don't mix forest + brass + walnut UI fills.
- Drop tints (sage, cream-deep) handle hierarchy — saturated greens are reserved for *primary* actions and *primary* labels.
- Imagery is allowed to be warm and earthy or cool steel-and-cream; never desaturate to b&w, never over-saturate.

### Type

Pairing: a refined display serif + a quiet humanist sans + Arabic
naskh. The pairing matches the cap-height + weight of the original
"FT Design" wordmark.

| Style | Family | Weight | Size | Tracking |
| --- | --- | --- | --- | --- |
| Display | Cormorant Garamond | 500 | 88 / 64 / 48 | -2% |
| H2–H3 | Cormorant Garamond | 500 | 36 / 28 | -1% |
| H4 | Cormorant Garamond | 600 | 22 | 0 |
| Eyebrow | Inter | 500 | 12 | +18% (UPPER) |
| Body | Inter | 400 | 16 | 0 |
| Caption | Inter | 400 | 14 | 0 |
| Label | Inter | 500 | 12 | +8% (UPPER) |
| Arabic body | Noto Naskh Arabic | 400 | 18 | 0 |
| Arabic heading | Noto Naskh Arabic | 600–700 | 28–36 | 0 |

The brand sheet uses `DESIGN CONSULTATION SERVICES` as a centered,
horizontally ruled eyebrow above and below — keep that pattern for any
"section identifier" treatment.

### Layout

- Sample sheets are **9:16 portrait** with thick interior padding (≈ 8% of width).
- Cards are gently rounded (`--r-md`, 6px) — never pill, never sharp.
- Section blocks separated by a hairline rule, not by extra whitespace alone.
- Long Arabic blocks are right-aligned and the checkmarks flip to the right side; always mirror the entire row, never just the text.

### Backgrounds

- Plain cream for documents and most marketing surfaces.
- **Full-bleed photography** is the secondary background, used to introduce a section. Photos are warm interiors — black steel doors, rattan furniture, neutral textiles, brass details. *Avoid* pure-white-room or showroom photography.
- No gradients. No repeating patterns. No textures other than what comes through in the photos.

### Motion

Slow and confident. Furniture moves; UI shouldn't bounce.

- Default duration **240ms**, slow surfaces **420ms**.
- Easing is `cubic-bezier(0.22, 0.61, 0.36, 1)` (out-quart-ish) for entrances; `cubic-bezier(0.65, 0, 0.35, 1)` for state changes.
- Page transitions are **fades + small Y-translates** (≤ 12px). Never slide in from the side, never bounce.

### Hover & press states

- **Hover (forest button)**: shift to `--ft-forest-deep`, retain shadow.
- **Hover (text link)**: deeper green + the underline thickens.
- **Hover (card)**: `transform: translateY(-2px)` + shadow steps up `--shadow-1` → `--shadow-2`. No scale.
- **Press**: `transform: translateY(0)` + shadow drops to `--shadow-1`. No color change beyond the press-darker tone on the active surface.

### Borders & shadows

- Borders are always color-mixed against ink (`color-mix(... 14%)`) so they sit *on* cream rather than punching through it. Don't use pure black or pure gray.
- Shadows are warm-tinted (rgba with a slight ink shift) and never larger than 32px blur. **Never use a cool-blue shadow.**
- Inner shadows (`--shadow-inset`) are used to outline form fields and inert containers without committing to a heavier border.

### Transparency & blur

- Used **rarely**. The most common case is a 70% cream wash over a hero photo to keep type legible.
- No frosted-glass dialog chrome. Modals sit on a plain semi-opaque ink overlay (`rgba(31, 27, 23, 0.55)`).

### Corner radii

- 0px — section dividers, photo frames inside documents.
- 4px (`--r-sm`) — input fields, tight chips.
- 6px (`--r-md`) — most cards, buttons.
- 10px (`--r-lg`) — feature cards, the elevated hero card.
- Pill (`--r-pill`) — only for badges that hold one short word.

### Cards

- Fill `--ft-paper` (warmest near-white).
- Border `1px solid var(--line)` OR `--shadow-2` — pick one, never both heavy.
- Internal padding **24px (compact) / 32px (default) / 48px (feature)**.
- Header rows use the eyebrow style; body uses `.ft-body`.

---

## Content fundamentals

The brand voice is **calm, precise, hospitality-first, and bilingual
by default**. Arabic leads, English follows.

### Voice and tone

- **Service-led, not salesy.** No exclamation marks. No "transform your space!" copy. We *advise*, *consult*, *recommend* — we don't *unlock* or *empower*.
- **Hospitality register.** Sentences like "شاكرين لكم تواصلكم ونامل ان نكون جديرين بثقتكم" ("thank you for reaching out — we hope to be worthy of your trust") are not boilerplate; they're how the brand actually closes a document. Carry that warmth into English.
- **Specific, not aspirational.** "45 minutes" instead of "a focused session." "5,000 QAR" instead of "starting at." Real numbers, real durations, real rules.
- **You-and-we, not you-only.** "We'll review the floor plan with you" — collaborative. The brand never positions itself as the omniscient authority.
- **Direct about money and rules.** Payment, refund policy, and the female-presence requirement are stated plainly, without softening or burying.

### Casing and punctuation

- English headlines: **sentence case** (or display-title case for short phrases like "Design Consultation Services").
- Avoid ALL CAPS except for the eyebrow lockup style.
- Use the en-dash (–) for ranges, em-dash (—) for asides, never `--`.
- Use the dirham symbol form **`5,000 ر.ق`** in Arabic and **`QAR 5,000`** in English. Never mix.

### Bilingual rules

- Arabic and English coexist on the same surface but **never share a sentence**. Translate, don't transliterate.
- Arabic blocks are **always RTL** and right-aligned; checkmarks and bullets sit on the **right** edge.
- The English wordmark "FT Design" stays Latin even in Arabic compositions — it's a logotype, not text.
- Numbers stay in Western digits in both languages on this brand (matches the sample sheets).

### Vibe

Aged-paper warmth. A woman handing you a hand-printed services card
across a walnut desk while a small forest-green stamp dries in the
corner. Restrained, considered, expensive-feeling without being loud.

### Examples (lifted / adapted from the sample sheets)

- ✅ "Includes a site visit upon request, within Doha only."
- ✅ "Non-refundable. Payment confirms the appointment."
- ✅ "Does not include sketches or design drawings."
- ❌ "Book your dream consultation today!"
- ❌ "Our award-winning designers will transform your space ✨"
- ❌ "Limited slots — don't miss out!"

### Emoji

**Never.** The brand uses checkmarks (✓ / ✔) drawn as small icons —
not the emoji versions — and that's the only icon-as-punctuation
treatment.

---

## Iconography

The brand's actual icon vocabulary on the sample sheets is **deliberately
small**: a clock (duration), a price-tag (price), and a checkmark (list
items). Everything is monoline, brass-brown, ~14–16px.

**Approach:**

- Single-stroke linear icons. No filled icons, no two-tone, no gradient.
- 1.5–1.75px stroke at 24px size; round caps and joins.
- Color: `--ft-ink` for default, `--ft-forest` for active, `--ft-walnut` or `--ft-brass` for the document-style "tagged-list" treatment.
- Size: **16 / 20 / 24** — keep to those three. Inline icons match cap-height of the line they sit in.

**Library substitution.** The studio does not ship its own icon set
or font. We use **[Lucide](https://lucide.dev)** (CDN) — a
permissively-licensed monoline set whose stroke weight and round
corners match the brand's hand-drawn checkmarks/tags closely. This is
a substitution; flag it for the user if pixel-precise originals exist.

```html
<!-- Drop into <head> -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
<script>lucide.createIcons();</script>
```

The handful of icons we actually use across the kit:
`clock`, `tag`, `check`, `arrow-right`, `arrow-up-right`, `phone`,
`mail-line` (`mail`), `map-pin`, `calendar`, `chevron-down`,
`chevron-left`, `chevron-right`, `x` (close), `menu`, `instagram`.

**Emoji** — never. **Unicode arrows / glyphs** — never as standalone
icons; OK inside body copy (e.g. en-dashes, ✓ in checklists *only* if
you are deliberately avoiding the SVG dependency).

The logo is a true SVG — see `design-system/assets/logo-ft-green.svg` and
`design-system/assets/logo-ft-black.svg`. Use the green version on cream
backgrounds, the black version on imagery, and never a white-on-color
inverse (the geometry was not designed for it).

---

## Font substitutions

> ⚠️ **Flag for review.** No master font files were supplied; the
> wordmark on the sample sheets is set in a transitional / Garaldic
> serif we don't have rights to. The substitutions below are nearest
> matches from Google Fonts — they are very close but not identical.

| Brand artifact | Substitution | Notes |
| --- | --- | --- |
| Wordmark serif ("FT Design", document headings) | **Cormorant Garamond** 500 | Slightly more contrast than the original; if you have the master font, drop the .woff2 in `fonts/` and replace `--font-display`. |
| English body / numerals on sheets | **Inter** 400 / 500 | Reasonable fit; the sheets appear to use a quiet geometric sans. |
| Arabic body | **Noto Naskh Arabic** 400 / 600 / 700 | The samples use a traditional naskh; Noto's Naskh cut is a faithful substitute. |

If you can share the original `.otf` / `.ttf` / `.woff2` files (or even
a high-resolution PDF with embedded fonts), we'll match exactly.

---

## Using this system

```html
<link rel="stylesheet" href="/design-system/tokens/colors_and_type.css">
<!-- now use semantic classes -->
<p class="ft-eyebrow">Design Consultation Services</p>
<h1 class="ft-h1">A studio for considered interiors.</h1>
<p class="ft-body">…</p>
```

For the production React app, see **`src/App.jsx`**, **`src/components/`**, and
**`src/screens/`** — tokens are imported from `design-system/tokens/colors_and_type.css`.
