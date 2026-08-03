import React from 'react';
import styled from 'styled-components';
import { Heading, Paragraph, Caption } from './Text';

interface PremiumSectionHeaderProps {
  caption?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'lg' | 'md' | 'sm';
  className?: string;
}

const HeaderContainer = styled.div<{ $align?: string; $size?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $size }) => {
    switch ($size) {
      case 'lg':
        return '24px';
      case 'sm':
        return '12px';
      default:
        return '16px';
    }
  }};
  text-align: ${({ $align }) => $align || 'center'};
  ${({ $align }) => $align !== 'center' && `align-items: flex-${$align === 'right' ? 'end' : 'start'};`}

  max-width: ${({ $align, $size }) => {
    if ($align && $align !== 'center') return '100%';
    switch ($size) {
      case 'lg':
        return '800px';
      case 'sm':
        return '500px';
      default:
        return '600px';
    }
  }};

  ${({ $align }) => $align === 'center' && 'margin: 0 auto;'}
`;

const CaptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #00f5d4, #0066cc);
    border-radius: 50%;
  }
`;

const TitleWrapper = styled.div<{ $size?: string }>`
  ${({ $size }) => {
    switch ($size) {
      case 'lg':
        return `
          h1, h2, h3, h4, h5, h6 {
            font-size: 3rem;
            line-height: 1.2;
          }
        `;
      case 'sm':
        return `
          h1, h2, h3, h4, h5, h6 {
            font-size: 1.875rem;
            line-height: 1.3;
          }
        `;
      default:
        return `
          h1, h2, h3, h4, h5, h6 {
            font-size: 2.25rem;
            line-height: 1.25;
          }
        `;
    }
  }}
`;

const DescriptionWrapper = styled.div<{ $size?: string }>`
  p {
    ${({ $size }) => {
      switch ($size) {
        case 'lg':
          return 'font-size: 1.125rem;';
        case 'sm':
          return 'font-size: 0.95rem;';
        default:
          return 'font-size: 1rem;';
      }
    }}
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const PremiumSectionHeader = React.forwardRef<
  HTMLDivElement,
  PremiumSectionHeaderProps
>(
  (
    {
      caption,
      title,
      description,
      align = 'center',
      size = 'md',
      className,
    },
    ref
  ) => {
    return (
      <HeaderContainer
        ref={ref}
        $align={align}
        $size={size}
        className={className}
      >
        {caption && (
          <CaptionWrapper>
            <Caption uppercase>{caption}</Caption>
          </CaptionWrapper>
        )}
        <TitleWrapper $size={size}>
          <Heading level={2} size={size === 'lg' ? 'xl' : size === 'sm' ? 'md' : 'lg'}>
            {title}
          </Heading>
        </TitleWrapper>
        {description && (
          <DescriptionWrapper $size={size}>
            <Paragraph size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'} muted>
              {description}
            </Paragraph>
          </DescriptionWrapper>
        )}
      </HeaderContainer>
    );
  }
);

PremiumSectionHeader.displayName = 'PremiumSectionHeader';
export default PremiumSectionHeader;
