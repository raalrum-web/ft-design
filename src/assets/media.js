/**
 * Real photography & logos — files live in this same folder (`src/assets/`).
 *
 * 1. Drop your furniture / interior JPGs (or WebP) here.
 * 2. Set each value below to that filename, e.g. hero: 'my-wide-shot.webp'
 *
 * Vite resolves these via `import.meta.url` so paths stay correct in dev and production.
 */
export const MEDIA_FILES = {
  logoBlack: 'logo-ft-black.svg',
  hero: 'interior-livingroom-fireplace.jpg',
  gridLiving: 'styled-coffee-tray-1.jpg',
  gridTray: 'interior-staircase.jpg',
  gridCurtains: 'styled-coffee-tray-3.jpg',
  gridPatio: 'styled-coffee-tray-1.jpg',
};

function assetHref(filename) {
  return new URL(`./${filename}`, import.meta.url).href;
}

/** Resolved URLs for components — use these in `src` / `backgroundImage`. */
export const media = {
  logoBlack: assetHref(MEDIA_FILES.logoBlack),
  hero: assetHref(MEDIA_FILES.hero),
  gridLiving: assetHref(MEDIA_FILES.gridLiving),
  gridTray: assetHref(MEDIA_FILES.gridTray),
  gridCurtains: assetHref(MEDIA_FILES.gridCurtains),
  gridPatio: assetHref(MEDIA_FILES.gridPatio),
};
