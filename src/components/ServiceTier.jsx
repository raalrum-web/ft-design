import { Button } from './Button.jsx';
import { Icon } from './Icon.jsx';

export function ServiceTier({
  num, title, duration, price, lede, items, onSelect, lang,
}) {
  return (
    <article className="tier">
      <header className="tier-ribbon">
        <div className="tier-ribbon-title">
          <span className="tier-num">{num}</span>
          {title}
        </div>
        <div className="tier-meta">
          <span><Icon name="clock" size={14} />{duration}</span>
        </div>
      </header>
      <div className="tier-body">
        <div className="tier-body-intro">
          <p className="tier-price">{price}</p>
          <p className="tier-price-note">{lang === 'en' ? 'Paid in advance, non-refundable.' : 'يُدفع مقدماً وغير مسترد.'}</p>
          <hr className="tier-divider" />
          <p className="tier-lede">{lede}</p>
        </div>
        <ul className="tier-list">
          {items.map((it, i) => (
            <li key={i} className="check-row">
              <Icon name="check" size={18} />
              <div><strong>{it.lead}</strong> {it.body}</div>
            </li>
          ))}
        </ul>
        <div className="tier-footer">
          <Button onClick={onSelect} icon="arrow-right">{lang === 'en' ? 'Select this tier' : 'اختر هذه الباقة'}</Button>
        </div>
      </div>
    </article>
  );
}
