import { Icon } from './Icon.jsx';

export function Button({ children, variant = 'primary', onClick, icon, type = 'button' }) {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {children}
      {icon && <Icon name={icon} size={14} />}
    </button>
  );
}
