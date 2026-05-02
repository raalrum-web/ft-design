import { useEffect } from 'react';

export function ImageLightbox({ src, alt = '', labelClose, onClose }) {
  useEffect(() => {
    if (!src) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="image-lightbox-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="image-lightbox-sheet"
        role="dialog"
        aria-modal="true"
        aria-label={alt || 'Image'}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="image-lightbox-close"
          onClick={onClose}
          aria-label={labelClose}
        >
          <span className="image-lightbox-close-mark" aria-hidden="true">×</span>
        </button>
        <img className="image-lightbox-img" src={src} alt={alt} decoding="async" />
      </div>
    </div>
  );
}
