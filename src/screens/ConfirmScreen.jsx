import { EyebrowRule, Icon } from '../components';
import { TIER_DATA_AR, TIER_DATA_EN } from '../data/siteContent.js';

export function ConfirmScreen({ lang, tier, onHome }) {
  const list = lang === 'en' ? TIER_DATA_EN : TIER_DATA_AR;
  const tierData = list.find((t) => t.num === tier);

  return (
    <main>
      <section className="section section-cream">
        <div className="container-narrow">
          <div className="confirm-card">
            <div className="confirm-icon"><Icon name="check" size={26} /></div>
            <EyebrowRule>{lang === 'en' ? 'Request received' : 'تم استلام الطلب'}</EyebrowRule>
            <h2 className="section-title" style={{ margin: '20px auto 16px', fontSize: 42 }}>
              {lang === 'en' ? 'Thank you.' : 'شاكرين لكم تواصلكم.'}
            </h2>
            <p className="section-lede" style={{ marginInline: 'auto' }}>
              {lang === 'en'
                ? 'We\u2019ll review and reply within one working day. Below are the payment details — your appointment is held once the transfer arrives.'
                : 'سنراجع طلبكم ونرد خلال يوم عمل. تجدون أدناه تفاصيل الدفع — يُحجَز موعدكم بمجرد وصول التحويل.'}
            </p>

            {tierData && (
              <div className="payment-box">
                <div className="payment-row"><span className="k">{lang === 'en' ? 'Tier' : 'الباقة'}</span><span className="v">{tierData.num}. {tierData.title}</span></div>
                <div className="payment-row"><span className="k">{lang === 'en' ? 'Duration' : 'المدة'}</span><span className="v">{tierData.duration}</span></div>
                <div className="payment-row"><span className="k">{lang === 'en' ? 'Amount' : 'المبلغ'}</span><span className="v">{tierData.price}</span></div>
                <hr style={{ border: 0, borderTop: '1px solid var(--line)', margin: '4px 0' }} />
                <div className="payment-row"><span className="k">{lang === 'en' ? 'Method' : 'الوسيلة'}</span><span className="v">Bankak</span></div>
                <div className="payment-row"><span className="k">{lang === 'en' ? 'Reference' : 'المرجع'}</span><span className="v" style={{ fontFamily: 'var(--font-mono, monospace)' }}>FT-2026-{String(Math.floor(Math.random() * 9000) + 1000)}</span></div>
              </div>
            )}

            <div style={{ marginTop: 32 }}>
              <button type="button" className="btn btn-ghost" onClick={onHome}>{lang === 'en' ? '← Back to home' : '→ الرجوع للرئيسية'}</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
