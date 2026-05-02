---
name: ft-design-design
description: Use this skill to generate well-branded interfaces and assets for FT Design (a Doha-based interior-design consultation studio), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick start

- Tokens & semantic classes live in `design-system/tokens/colors_and_type.css` — `@import` it from any new HTML.
- Logos: `design-system/assets/logo-ft-green.svg` (on cream), `design-system/assets/logo-ft-black.svg` (on imagery).
- Reference UI: run `npm run dev` at the repo root; source lives in `src/` (`App.jsx`, `components/`, `screens/`).
- Photography: canonical files under `design-system/assets/`; the React app imports copies from **`src/assets/`** (`npm run sync-assets`). Warm-modern interiors, never desaturate, never crop tight.
- Bilingual: Arabic is RTL, set in Noto Naskh Arabic; mirror entire rows, never just text. Numbers stay Western digits.
- Voice: hospitality register, no exclamation marks, no emoji, "we" + "you", direct about money and rules.

## Font substitutions (flagged)

Cormorant Garamond stands in for the brand serif; Inter for the English sans; Noto Naskh Arabic for Arabic body. Originals were not provided — ask the user for `.woff2` / `.otf` files if pixel fidelity matters.
