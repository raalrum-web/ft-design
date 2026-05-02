import { EyebrowRule, Hero, HomeGallery, ServiceTier } from '../components';
import { TIER_DATA_AR, TIER_DATA_EN } from '../data/siteContent.js';

export function HomeScreen({ lang, onBook, onSelectTier }) {
  const tiers = lang === 'en' ? TIER_DATA_EN : TIER_DATA_AR;

  return (
    <main>
      <Hero onBook={onBook} lang={lang} />

      <section className="section section-cream home-section-about-gallery">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <EyebrowRule>{lang === 'en' ? 'About the studio' : 'عن الاستوديو'}</EyebrowRule>
          <h2 className="section-title" style={{ marginTop: 24, marginInline: 'auto' }}>
            {lang === 'en'
              ? 'A consultation, not a sales pitch.'
              : 'استشارة، لا عرضاً تجارياً.'}
          </h2>
          <p className="section-lede" style={{ marginTop: 24, marginInline: 'auto' }}>
            {lang === 'en'
              ? 'FT Design is a Doha-based interior design practice. We offer paid consultations for clients who are early in a project — or stuck in the middle of one — and want a quiet, experienced second opinion before they commit.'
              : 'إف تي ديزاين استوديو تصميم داخلي في الدوحة. نقدّم استشاراتٍ مدفوعةً للعملاء في بداية المشروع — أو الواقعين في منتصفه — ممن يطلبون رأياً ثانياً هادئاً ومُجرِّباً قبل اتخاذ القرار.'}
          </p>
        </div>
        <div className="home-gallery-strip">
          <div className="home-merged-gallery">
            <HomeGallery lang={lang} />
          </div>
        </div>
      </section>

      <section className="section section-paper home-section-tiers" id="tiers">
        <div className="container home-tiers-inner">
          <div className="section-head">
            <EyebrowRule>{lang === 'en' ? 'Two tiers' : 'باقتان'}</EyebrowRule>
            <h2 className="section-title">{lang === 'en' ? 'Choose how we meet.' : 'اختر طريقة اللقاء.'}</h2>
          </div>
          <div className="home-tiers-grid">
            {tiers.map((t, i) => (
              <ServiceTier key={i} {...t} lang={lang} onSelect={() => onSelectTier(t.num)} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
