import { useEffect, useState } from 'react';
import { media } from '@/assets/media.js';

export function Header({
  current, onNav, lang, onLang, transparent, heroText = 'light', scrolledBg = 'blur', trigger = 40,
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > trigger);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [trigger]);
  const overHero = transparent && !scrolled;
  const cls = overHero
    ? `over-hero hero-${heroText}`
    : `scrolled bg-${scrolledBg}`;
  const navLabel = lang === 'en' ? 'Main menu' : 'القائمة الرئيسية';
  const langLabel = lang === 'en' ? 'Language' : 'اللغة';

  return (
    <header className={`site-header ${cls}`}>
      <div className="site-header-inner">
        <button type="button" className="brand" onClick={() => onNav('home')} aria-label="FT Design — Home">
          <img src={media.logoBlack} alt="" width={28} decoding="async" />
          <div className="brand-text">
            <div className="brand-name">FT Design</div>
            <div className="brand-tag">Design Consultation</div>
          </div>
        </button>
        <nav className="nav" aria-label={navLabel}>
          <div className="nav-links">
            {['home', 'services', 'book'].map((k) => (
              <button
                key={k}
                type="button"
                className={`nav-link ${current === k ? 'active' : ''}`}
                onClick={() => onNav(k)}
                aria-current={current === k ? 'page' : undefined}
              >
                {lang === 'en'
                  ? ({ home: 'Home', services: 'Services', book: 'Book' })[k]
                  : ({ home: 'الرئيسية', services: 'الخدمات', book: 'احجز' })[k]}
              </button>
            ))}
          </div>
          <div className="lang-toggle" role="group" aria-label={langLabel}>
            <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => onLang('en')}>EN</button>
            <button type="button" className={lang === 'ar' ? 'active' : ''} onClick={() => onLang('ar')}>ع</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
