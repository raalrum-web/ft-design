import { useEffect, useRef, useState } from 'react';
import { media } from '@/assets/media.js';
import { ImageLightbox } from './ImageLightbox.jsx';

const MEDIA_KEYS = ['gridLiving', 'gridTray', 'gridCurtains', 'gridPatio'];
/** Intrinsic pixels of `styled-coffee-tray-1.jpg` (see MEDIA_FILES.gridLiving). */
const REFERENCE_FRAME_W = 900;
const REFERENCE_FRAME_H = 1600;
/** Minimum repeated sequences (see stripCopies math — 2 is often too short vs viewport) */
const MIN_STRIP_COPIES = 3;
/** One full pass across all slides (slow treadmill) */
const TREADMILL_DURATION_MS = 88_000;

/**
 * Repeat `slides` end-to-end `numCopies` times so the flex track is always at least
 * viewport + one copy wide: visible window [t, t+V] stays inside [0, numCopies * C] for t ∈ [0, C].
 */
function stripEntries(slides, numCopies) {
  const out = [];
  let k = 0;
  for (let d = 0; d < numCopies; d += 1) {
    for (let i = 0; i < slides.length; i += 1) {
      out.push({ slide: slides[i], key: `${slides[i].id}__${d}__${k}` });
      k += 1;
    }
  }
  return out;
}

/** Integer copies so C + viewportWidth <= numCopies * copyWidth (no gap at the loop seam). */
function copiesNeeded(viewportWidthPx, copyWidthPx) {
  if (copyWidthPx <= 0) return MIN_STRIP_COPIES;
  return Math.max(MIN_STRIP_COPIES, Math.ceil(1 + viewportWidthPx / copyWidthPx));
}

export function HomeGallery({ lang }) {
  const copy = lang === 'en'
    ? {
        close: 'Close',
        enlarge: 'Enlarge',
        region: 'Project photography',
        slides: ['Living space', 'Stair and architecture', 'Styling detail', 'Interior moment'],
      }
    : {
        close: 'إغلاق',
        enlarge: 'تكبير',
        region: 'صور المشاريع',
        slides: ['صالة المعيشة', 'درج وتفاصيل معمارية', 'تفاصيل تنسيق', 'لقطة داخلية'],
      };

  const slides = MEDIA_KEYS.map((key, i) => ({
    id: `${key}-${i}`,
    src: media[key],
    title: copy.slides[i],
  }));

  const n = slides.length;

  const [index, setIndex] = useState(0);
  const [cellWidth, setCellWidth] = useState(0);
  const [gapPx, setGapPx] = useState(0);
  const [stripCopies, setStripCopies] = useState(MIN_STRIP_COPIES);
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [lightbox, setLightbox] = useState(null);
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [tabHidden, setTabHidden] = useState(() =>
    typeof document !== 'undefined' ? document.hidden : false,
  );

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const indexSyncRef = useRef(0);

  const rtl = lang === 'ar';

  const copyWidthPx =
    cellWidth > 0 && n > 0 ? n * cellWidth + (n - 1) * gapPx : 0;

  const strip = stripEntries(slides, stripCopies);

  const paused = Boolean(
    lightbox || userPaused || hoverPaused || tabHidden || reduceMotion,
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const measure = () => {
      const cs = getComputedStyle(el);
      const gapRaw = cs.getPropertyValue('--gallery-track-gap').trim();
      const gap =
        Number.parseFloat(gapRaw) ||
        Number.parseFloat(cs.columnGap) ||
        Number.parseFloat(cs.gap) ||
        0;
      const w = el.clientWidth;
      const h = el.clientHeight;
      const cw = h > 0 ? (h * REFERENCE_FRAME_W) / REFERENCE_FRAME_H : 0;
      setGapPx(gap);
      setCellWidth(cw > 0 ? cw : 0);
      if (cw > 0 && n > 0) {
        const copyW = n * cw + (n - 1) * gap;
        setStripCopies(copiesNeeded(w, copyW));
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [n]);

  useEffect(() => {
    if (reduceMotion || cellWidth <= 0 || paused) return;

    let id = 0;
    const tick = () => {
      const track = trackRef.current;
      if (track) {
        const anim = track.getAnimations()[0];
        if (anim?.effect && typeof anim.currentTime === 'number') {
          const timing = anim.effect.getTiming();
          const duration =
            typeof timing.duration === 'number' && timing.duration > 0
              ? timing.duration
              : TREADMILL_DURATION_MS;
          const ct = ((Number(anim.currentTime) % duration) + duration) % duration;
          let p = ct / duration;
          if (rtl) p = 1 - p;
          const next = Math.min(n - 1, Math.max(0, Math.floor(p * n)));
          if (next !== indexSyncRef.current) {
            indexSyncRef.current = next;
            setIndex(next);
          }
        }
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [cellWidth, n, paused, reduceMotion, rtl]);

  const onKeyDown = (e) => {
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      setUserPaused((p) => !p);
    }
  };

  const treadmillReady = copyWidthPx > 0 && !reduceMotion;

  return (
    <>
      <div
        className={`home-gallery${rtl ? ' home-gallery--rtl' : ''}`}
        role="region"
        aria-roledescription="carousel"
        aria-label={
          lang === 'en'
            ? `${copy.region}. Hover to pause. Space bar pauses or resumes motion.`
            : `${copy.region}. مرّر المؤشر للإيقاف المؤقت. المسافة توقف أو تستأنف الحركة.`
        }
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        <div className="home-gallery-row">
          <div
            className={`home-gallery-strip-viewport${paused ? ' home-gallery-strip-viewport--paused' : ''}`}
            ref={viewportRef}
            onMouseEnter={() => setHoverPaused(true)}
            onMouseLeave={() => setHoverPaused(false)}
            style={{
              ...(treadmillReady
                ? {
                    '--treadmill-shift': `${copyWidthPx}px`,
                    '--treadmill-duration': `${TREADMILL_DURATION_MS}ms`,
                  }
                : {}),
            }}
          >
            <div
              ref={trackRef}
              className={`home-gallery-track${treadmillReady ? ' home-gallery-track--treadmill' : ''}`}
            >
              {strip.map((entry) => (
                <div
                  key={entry.key}
                  className="home-gallery-track-cell"
                  style={
                    cellWidth > 0
                      ? { flex: `0 0 ${cellWidth}px`, width: `${cellWidth}px` }
                      : undefined
                  }
                >
                  <button
                    type="button"
                    className="home-gallery-track-hit"
                    aria-label={`${entry.slide.title} — ${copy.enlarge}`}
                    onClick={() =>
                      setLightbox({ src: entry.slide.src, alt: entry.slide.title })
                    }
                  >
                    <img
                      src={entry.slide.src}
                      alt=""
                      draggable={false}
                      decoding="async"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="home-gallery-bar">
          <span className="home-gallery-counter" aria-live="polite">
            <span className="home-gallery-counter-num">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="home-gallery-counter-sep" aria-hidden="true">
              —
            </span>
            <span className="home-gallery-counter-num">{String(n).padStart(2, '0')}</span>
          </span>
        </div>
      </div>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          labelClose={copy.close}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
