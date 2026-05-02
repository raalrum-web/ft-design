import { media } from '@/assets/media.js';
import { Button } from './Button.jsx';

function getHeaderOffsetPx() {
  if (typeof window === 'undefined') return 0;
  const root = document.documentElement;
  const raw = getComputedStyle(root).getPropertyValue('--site-header-height').trim();
  if (!raw) return 0;
  if (raw.endsWith('px')) return parseFloat(raw);
  if (raw.endsWith('rem')) {
    const rootFs = parseFloat(getComputedStyle(root).fontSize) || 16;
    return parseFloat(raw) * rootFs;
  }
  return parseFloat(raw) || 0;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = el.getBoundingClientRect().top + window.scrollY - getHeaderOffsetPx();
  window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
}

export function Hero({ onBook, lang }) {
  return (
    <section className="hero">
      <img className="hero-img" src={media.hero} alt="" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-eyebrow">{lang === 'en' ? 'Design Consultation Services · Doha' : 'استشارات تصميم، الدوحة'}</div>
        <h1 className={lang === 'ar' ? 'hero-title hero-title--stacked-ar' : 'hero-title'}>
          {lang === 'en' ? (
            'A studio for considered interiors.'
          ) : (
            <>
              <span className="hero-title-line">استوديوٌ للتصاميم</span>
              <span className="hero-title-line">المدروسة.</span>
            </>
          )}
        </h1>
        <p className="hero-sub">{lang === 'en'
          ? 'We sit with you, walk your floor plan, and quietly shape the decisions — material, light, and layout — that make a home feel resolved.'
          : 'نجلس معكم، نطوف بالمخطط، ونصوغ بهدوءٍ القرارات الجوهرية — من خاماتٍ وإضاءةٍ وتوزيعٍ — التي تمنح المنزل اكتمالَه.'}</p>
        <div className="hero-cta">
          <Button onClick={onBook} icon="arrow-right">{lang === 'en' ? 'Book a consultation' : 'احجز استشارة'}</Button>
          <button
            type="button"
            className="btn btn-on-dark"
            onClick={() => scrollToSection('tiers')}
          >
            {lang === 'en' ? 'See services' : 'الخدمات'}
          </button>
        </div>
      </div>
    </section>
  );
}
