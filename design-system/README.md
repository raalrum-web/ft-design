# FT Design — design system (reference only)

Static reference assets for the brand — **not** part of the Vite/React runtime beyond imports.

| Path | Contents |
|------|-----------|
| `tokens/colors_and_type.css` | CSS variables + semantic utilities (`ft-body`, etc.) |
| `assets/` | Canonical library (logos, photography, samples). Run **`npm run sync-assets`** to copy into **`src/assets/`** for the React app. |
| `preview/` | Standalone HTML cards (open in browser or via any static server) |
| `uploads/` | Original uploads archive |

Preview pages load tokens via `preview/_card.css` → `../tokens/colors_and_type.css` and images via `../assets/`.
