import { Icon } from './Icon.jsx';

export function Footer({ lang }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-block" style={{ flex: '1.4' }}>
          <h4>FT Design</h4>
          <p>{lang === 'en'
            ? 'Interior design consultation for residential villas and private projects in Doha and worldwide.'
            : 'استشارات تصميم داخلي للفلل السكنية والمشاريع الخاصة في الدوحة وحول العالم.'}</p>
        </div>
        <div className="footer-block">
          <h4>{lang === 'en' ? 'Contact' : 'تواصل'}</h4>
          <a href="mailto:hello@ftdesign.qa">hello@ftdesign.qa</a>
          <a href="tel:+97400000000">+974 0000 0000</a>
          <a href="#"><Icon name="instagram" size={14} /> &nbsp;@ft.design</a>
        </div>
        <div className="footer-block">
          <h4>{lang === 'en' ? 'Studio' : 'الاستوديو'}</h4>
          <p>{lang === 'en' ? 'West Bay, Doha' : 'الخليج الغربي، الدوحة'}</p>
          <p>{lang === 'en' ? 'By appointment' : 'بموعد مسبق'}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 FT Design</span>
        <span>{lang === 'en' ? 'Doha · Qatar' : 'الدوحة · قطر'}</span>
      </div>
    </footer>
  );
}
