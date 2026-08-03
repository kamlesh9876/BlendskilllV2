import { useRef, useCallback, CSSProperties } from 'react';

interface GlassHoverOptions {
  elevate?: number;
  blurIncrease?: number;
}

export const useGlassHover = (options: GlassHoverOptions = {}) => {
  const { elevate = 8, blurIncrease = 4 } = options;
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = `translateY(-${elevate}px)`;
      ref.current.style.backdropFilter = `blur(${20 + blurIncrease}px)`;
      ref.current.style.boxShadow = `
        0 12px 48px rgba(0, 0, 0, 0.15),
        inset 0 1px 2px rgba(255, 255, 255, 0.2)
      `;
    }
  }, [elevate, blurIncrease]);

  const handleMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = 'translateY(0)';
      ref.current.style.backdropFilter = 'blur(16px)';
      ref.current.style.boxShadow = `
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 2px rgba(255, 255, 255, 0.15)
      `;
    }
  }, []);

  return {
    ref,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
};
