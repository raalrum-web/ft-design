import { Button, EyebrowRule, Icon } from '../components';
import { SCOPE_AR, SCOPE_EN } from '../data/siteContent.js';

export function ServicesScreen({ lang, onBook }) {
  const items = lang === 'en' ? SCOPE_EN : SCOPE_AR;
  return (
    <main>
      <section className="section section-cream">
        <div className="container-narrow">
          <div className="section-head" style={{ marginBottom: 48 }}>
            <EyebrowRule>{lang === 'en' ? 'Scope of consultation' : 'نطاق الاستشارة'}</EyebrowRule>
            <h2 className="section-title">{lang === 'en' ? 'What\u2019s included.' : 'ما الذي تشتمل عليه؟'}</h2>
            <p className="section-lede">
              {lang === 'en'
                ? 'A consultation is for direction and decision-making. It does not include sketches, renders, or drawings — those are quoted separately, with 5% credited toward the design fee if you commission us for execution.'
                : 'الاستشارة للتوجيه واتخاذ القرار. لا تشمل سكتشات أو رندرات أو مخططات تصميم — تُسعَّر هذه بشكل منفصل، مع خصم ٥٪ يُحتسب من تكلفة الاستشارة عند تكليفنا بالتصميم والتنفيذ.'}
            </p>
          </div>

          <div style={{ background: 'var(--ft-paper)', padding: '40px 48px', borderRadius: 8, boxShadow: 'var(--shadow-1)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {items.map((it, i) => (
                <div key={i} className="check-row">
                  <Icon name="check" size={18} />
                  <div><strong>{it.lead}</strong> — {it.body}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <Button onClick={onBook} icon="arrow-right">{lang === 'en' ? 'Book a consultation' : 'احجز استشارة'}</Button>
          </div>
        </div>
      </section>

      <section className="section-tight section-paper">
        <div className="container-narrow">
          <EyebrowRule>{lang === 'en' ? 'Before you book' : 'قبل الحجز'}</EyebrowRule>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}>
            <div className="check-row">
              <Icon name="check" size={18} />
              <div><strong>{lang === 'en' ? 'Payment by Bankak transfer.' : 'الدفع عبر تحويل بنكك.'}</strong> {lang === 'en' ? 'The appointment is confirmed once payment lands.' : 'يُعتمد الموعد بمجرد التحويل.'}</div>
            </div>
            <div className="check-row">
              <Icon name="check" size={18} />
              <div><strong>{lang === 'en' ? '5% credited forward.' : 'خصم ٥٪ مُحتسَب.'}</strong> {lang === 'en' ? 'Toward design + execution if you commission us.' : 'يُخصم من قيمة التصميم والتنفيذ عند تكليفنا.'}</div>
            </div>
            <div className="check-row">
              <Icon name="check" size={18} />
              <div><strong>{lang === 'en' ? 'Couples & mixed households.' : 'الأزواج والأسر.'}</strong> {lang === 'en' ? 'A female household member must be present during the consultation.' : 'يُشترط حضور فردٍ من الإناث ضمن الموعد.'}</div>
            </div>
            <div className="check-row">
              <Icon name="check" size={18} />
              <div><strong>{lang === 'en' ? 'Non-refundable.' : 'غير مسترد.'}</strong> {lang === 'en' ? 'Reschedule once at no cost.' : 'يمكن إعادة الجدولة مرةً واحدة دون تكلفة.'}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
