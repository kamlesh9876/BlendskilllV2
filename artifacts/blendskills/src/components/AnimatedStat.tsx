import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface AnimatedStatProps {
  value: number | string;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  isVisible?: boolean;
}

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StatValue = styled.div`
  font-family: var(--font-mono);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, #00f5d4 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
`;

const StatLabel = styled.p`
  font-family: var(--font-headings);
  font-size: 0.95rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const AnimatedStat = React.forwardRef<
  HTMLDivElement,
  AnimatedStatProps
>(
  (
    {
      value,
      label,
      suffix = '',
      prefix = '',
      duration = 1500,
      delay = 0,
      isVisible = true,
    },
    ref
  ) => {
    const [displayValue, setDisplayValue] = useState<number | string>(0);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
      if (!isVisible || typeof value !== 'number') {
        setDisplayValue(typeof value === 'number' ? value : 0);
        return;
      }

      const startTime = Date.now() + delay;
      let currentValue = 0;

      const animate = () => {
        const now = Date.now();
        const elapsed = Math.max(0, now - startTime);
        const progress = Math.min(elapsed / duration, 1);

        // Easing function: cubic-out
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        currentValue = Math.floor(value * easeProgress);

        setDisplayValue(currentValue);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [value, duration, delay, isVisible]);

    return (
      <StatContainer ref={ref}>
        <StatValue>
          {prefix}
          {displayValue}
          {suffix}
        </StatValue>
        <StatLabel>{label}</StatLabel>
      </StatContainer>
    );
  }
);

AnimatedStat.displayName = 'AnimatedStat';
export default AnimatedStat;
