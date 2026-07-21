import { useCallback, useEffect, useRef, useState } from 'react';

type BlendMsg = { max: number; word: string; text: string };

const MESSAGES: BlendMsg[] = [
  { max: 15, word: 'Marketing-led', text: 'Campaigns and storytelling drive the strategy; development supports it.' },
  { max: 35, word: 'Mostly Marketing', text: 'Growth, content, and brand strategy lead — with solid technical execution underneath.' },
  { max: 65, word: 'Blend', text: 'An even mix of creative storytelling and technical execution.' },
  { max: 85, word: 'Mostly Development', text: 'Engineering and performance lead — wrapped in marketing that actually converts.' },
  { max: 101, word: 'Development-led', text: 'Custom software and web platforms drive the strategy; marketing supports it.' },
];

export function useBlendSlider(initial = 50) {
  const [value, setValue] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
      setDragging(false);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [setFromClientX]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      draggingRef.current = true;
      setDragging(true);
      setFromClientX(e.clientX);
    },
    [setFromClientX]
  );

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = 5;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      setValue((v) => Math.max(0, v - step));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      setValue((v) => Math.min(100, v + step));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setValue(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setValue(100);
    }
  }, []);

  const msg = MESSAGES.find((m) => value <= m.max) ?? MESSAGES[MESSAGES.length - 1];
  const leftOpacity = 0.4 + (1 - value / 100) * 0.6;
  const rightOpacity = 0.4 + (value / 100) * 0.6;

  return {
    value,
    dragging,
    trackRef,
    onPointerDown,
    onKeyDown,
    msg,
    leftOpacity,
    rightOpacity,
  };
}
