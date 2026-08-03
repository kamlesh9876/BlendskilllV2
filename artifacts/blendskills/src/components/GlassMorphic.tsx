import React from 'react';
import styled from 'styled-components';

interface GlassMorphicProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
  hover?: boolean;
  onClick?: () => void;
}

const GlassBase = styled.div<{ $intensity: 'subtle' | 'medium' | 'strong'; $hover: boolean }>`
  background: ${({ $intensity }) => {
    switch ($intensity) {
      case 'subtle':
        return 'rgba(255, 255, 255, 0.05)';
      case 'medium':
        return 'rgba(255, 255, 255, 0.08)';
      case 'strong':
        return 'rgba(255, 255, 255, 0.12)';
      default:
        return 'rgba(255, 255, 255, 0.08)';
    }
  }};
  backdrop-filter: blur(${({ $intensity }) => {
    switch ($intensity) {
      case 'subtle':
        return '12px';
      case 'medium':
        return '16px';
      case 'strong':
        return '20px';
      default:
        return '16px';
    }
  }});
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(255, 255, 255, 0.15),
    inset 0 -1px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $hover }) =>
    $hover &&
    `
    &:hover {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(20px);
      border-color: rgba(255, 255, 255, 0.2);
      box-shadow: 
        0 12px 48px rgba(0, 0, 0, 0.15),
        inset 0 1px 2px rgba(255, 255, 255, 0.2),
        inset 0 -1px 2px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
  `}
`;

export const GlassMorphic = React.forwardRef<HTMLDivElement, GlassMorphicProps>(
  ({ children, className, intensity = 'medium', hover = false, onClick }, ref) => {
    return (
      <GlassBase
        ref={ref}
        $intensity={intensity}
        $hover={hover}
        className={className}
        onClick={onClick}
      >
        {children}
      </GlassBase>
    );
  }
);

GlassMorphic.displayName = 'GlassMorphic';
export default GlassMorphic;
