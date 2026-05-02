import { useState } from 'react';
import { Button, EyebrowRule } from '../components';
import { TIER_DATA_AR, TIER_DATA_EN } from '../data/siteContent.js';

export function BookScreen({ lang, initialTier, onSubmit }) {
  const [tier, setTier] = useState(initialTier ?? 1);
  const tiers = lang === 'en' ? TIER_DATA_EN : TIER_DATA_AR;

  return (
    <main>
      <section className="section section-cream">
        <div className="container-narrow">
          <div className="section-head" style={{ marginBottom: 48 }}>
            <EyebrowRule>{lang === 'en' ? 'Booking request' : 'طلب حجز'}</EyebrowRule>
            <h2 className="section-title">{lang === 'en' ? 'Tell us about your project.' : 'حدثنا عن مشروعكم.'}</h2>
            <p className="section-lede">
              {lang === 'en'
                ? 'We\u2019ll respond within one working day with payment instructions and three available time slots.'
                : 'سنرد خلال يوم عمل واحد بتعليمات الدفع وثلاثة مواعيد متاحة.'}
            </p>
          </div>

          <div style={{ background: 'var(--ft-paper)', padding: '44px 48px', borderRadius: 10, boxShadow: 'var(--shadow-2)' }}>
            <form className="form" onSubmit={(e) => { e.preventDefault(); onSubmit({ tier }); }}>
              <div className="field">
                <label className="field-label">{lang === 'en' ? 'Consultation tier' : 'نوع الاستشارة'}</label>
                <div className="tier-select">
                  {tiers.map((t) => (
                    <div key={t.num} className={`tier-option ${tier === t.num ? 'selected' : ''}`} onClick={() => setTier(t.num)}>
                      <div className="tier-option-title">{t.num}. {t.title}</div>
                      <div className="tier-option-meta">{t.duration} · {t.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label className="field-label">{lang === 'en' ? 'Full name' : 'الاسم الكامل'}</label>
                  <input className="field-input" required placeholder={lang === 'en' ? 'Jane Al-Thani' : 'جين آل ثاني'} />
                </div>
                <div className="field">
                  <label className="field-label">{lang === 'en' ? 'Phone' : 'الهاتف'}</label>
                  <input className="field-input" required placeholder="+974" />
                </div>
              </div>

              <div className="field">
                <label className="field-label">{lang === 'en' ? 'Email' : 'البريد الإلكتروني'}</label>
                <input type="email" className="field-input" required placeholder="you@example.com" />
              </div>

              <div className="field">
                <label className="field-label">{lang === 'en' ? 'Tell us about the space' : 'صف لنا المساحة'}</label>
                <textarea className="field-textarea" placeholder={lang === 'en' ? 'A few sentences about the project, where it is, and where you\u2019re stuck.' : 'بضع جمل عن المشروع، موقعه، وأين تتعثرون.'} />
                <span className="field-help">{lang === 'en' ? 'Optional, but helpful.' : 'اختياري، يساعدنا.'}</span>
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 8, alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="field-help">{lang === 'en' ? 'By submitting you agree to the consultation terms.' : 'بإرسالكم الطلب، توافقون على شروط الاستشارة.'}</span>
                <Button type="submit" icon="arrow-right">{lang === 'en' ? 'Send request' : 'إرسال الطلب'}</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
