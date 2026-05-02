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
  gallery01: 'gallery-01.jpg',
  gallery02: 'gallery-02.jpg',
  gallery03: 'gallery-03.jpg',
  gallery04: 'gallery-04.jpg',
  gallery05: 'gallery-05.jpg',
  gallery06: 'gallery-06.jpg',
  gallery07: 'gallery-07.jpg',
  gallery08: 'gallery-08.jpg',
};

/**
 * Treadmill slide order (not filename order): keeps similar shots apart, including loop wrap.
 * Separates 13-37-28 / 13-37-52 (gallery02 / gallery03) and 13-50-43 / “43 2” (gallery06 / gallery07).
 */
export const HOME_GALLERY_MEDIA_KEYS = [
  'gallery01',
  'gallery02',
  'gallery04',
  'gallery03',
  'gallery05',
  'gallery06',
  'gallery08',
  'gallery07',
];

function assetHref(filename) {
  return new URL(`./${filename}`, import.meta.url).href;
}

/** Resolved URLs for components — use these in `src` / `backgroundImage`. */
export const media = {
  logoBlack: assetHref(MEDIA_FILES.logoBlack),
  hero: assetHref(MEDIA_FILES.hero),
  gallery01: assetHref(MEDIA_FILES.gallery01),
  gallery02: assetHref(MEDIA_FILES.gallery02),
  gallery03: assetHref(MEDIA_FILES.gallery03),
  gallery04: assetHref(MEDIA_FILES.gallery04),
  gallery05: assetHref(MEDIA_FILES.gallery05),
  gallery06: assetHref(MEDIA_FILES.gallery06),
  gallery07: assetHref(MEDIA_FILES.gallery07),
  gallery08: assetHref(MEDIA_FILES.gallery08),
};
