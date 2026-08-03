import React from 'react';
import styled from 'styled-components';

// Heading component
interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'display-lg' | 'display-md' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const HeadingBase = styled.h1<{ $size?: string }>`
  && {
    font-family: var(--font-headings);
    font-weight: 700;
    margin: 0;
    line-height: 1.2;

    ${({ $size }) => {
      switch ($size) {
        case 'display-lg':
          return `
            font-size: 3.5rem;
            font-weight: 300;
            font-family: var(--font-display);
            letter-spacing: -0.02em;
            line-height: 1.1;
          `;
        case 'display-md':
          return `
            font-size: 2.75rem;
            font-weight: 300;
            font-family: var(--font-display);
            letter-spacing: -0.015em;
            line-height: 1.2;
          `;
        case 'xl':
          return `font-size: 3rem; letter-spacing: -0.01em;`;
        case 'lg':
          return `font-size: 2.25rem; letter-spacing: -0.01em;`;
        case 'md':
          return `font-size: 1.875rem; font-weight: 600;`;
        case 'sm':
          return `font-size: 1.5rem; font-weight: 600;`;
        case 'xs':
          return `font-size: 1.25rem; font-weight: 600;`;
        default:
          return `font-size: 2rem;`;
      }
    }}
  }
`;

export const Heading = React.forwardRef<
  HTMLHeadingElement,
  HeadingProps
>(({ level = 1, size, children, className, id }, ref) => {
  const Component = HeadingBase.withComponent(`h${level}` as keyof JSX.IntrinsicElements);
  return (
    <Component ref={ref} $size={size} className={className} id={id}>
      {children}
    </Component>
  );
});

Heading.displayName = 'Heading';

// Paragraph component
interface ParagraphProps {
  size?: 'lg' | 'md' | 'sm';
  muted?: boolean;
  children: React.ReactNode;
  className?: string;
}

const ParagraphBase = styled.p<{ $size?: string; $muted?: boolean }>`
  font-family: var(--font-body);
  margin: 0;
  ${({ $muted }) => $muted && 'color: rgba(255, 255, 255, 0.6);'}

  ${({ $size }) => {
    switch ($size) {
      case 'lg':
        return `
          font-size: 1.125rem;
          line-height: 1.6;
          letter-spacing: -0.005em;
        `;
      case 'md':
        return `
          font-size: 1rem;
          line-height: 1.6;
        `;
      case 'sm':
        return `
          font-size: 0.875rem;
          line-height: 1.5;
        `;
      default:
        return `font-size: 1rem; line-height: 1.6;`;
    }
  }}
`;

export const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  ParagraphProps
>(({ size = 'md', muted = false, children, className }, ref) => {
  return (
    <ParagraphBase ref={ref} $size={size} $muted={muted} className={className}>
      {children}
    </ParagraphBase>
  );
});

Paragraph.displayName = 'Paragraph';

// Caption component
interface CaptionProps {
  children: React.ReactNode;
  className?: string;
  uppercase?: boolean;
}

const CaptionBase = styled.span<{ $uppercase?: boolean }>`
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.4;
  ${({ $uppercase }) => $uppercase && 'text-transform: uppercase; letter-spacing: 0.05em;'}
  color: rgba(255, 255, 255, 0.7);
`;

export const Caption = React.forwardRef<
  HTMLSpanElement,
  CaptionProps
>(({ children, className, uppercase = true }, ref) => {
  return (
    <CaptionBase ref={ref} $uppercase={uppercase} className={className}>
      {children}
    </CaptionBase>
  );
});

Caption.displayName = 'Caption';

// Code/Mono component
interface MonoProps {
  children: React.ReactNode;
  className?: string;
}

const MonoBase = styled.code`
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(0, 245, 212, 0.9);
  background: rgba(0, 245, 212, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
`;

export const Mono = React.forwardRef<
  HTMLElement,
  MonoProps
>(({ children, className }, ref) => {
  return (
    <MonoBase ref={ref} className={className}>
      {children}
    </MonoBase>
  );
});

Mono.displayName = 'Mono';
