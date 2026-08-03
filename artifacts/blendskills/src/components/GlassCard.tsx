import React from 'react';
import styled from 'styled-components';
import GlassMorphic from './GlassMorphic';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
  hover?: boolean;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  onClick?: () => void;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(0, 245, 212, 0.1);
  flex-shrink: 0;
`;

const CardTitle = styled.h3`
  font-family: var(--font-headings);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  color: inherit;
  margin: 0;
`;

const CardDescription = styled.p`
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 8px 0 0 0;
  flex-grow: 1;
`;

const CardContent = styled.div`
  flex-grow: 1;
`;

const CardFooter = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      children,
      className,
      intensity = 'medium',
      hover = true,
      icon,
      title,
      description,
      footer,
      onClick,
    },
    ref
  ) => {
    return (
      <GlassMorphic
        ref={ref}
        intensity={intensity}
        hover={hover}
        className={className}
        onClick={onClick}
      >
        <CardContainer>
          {(icon || title) && (
            <CardHeader>
              {icon && <IconWrapper>{icon}</IconWrapper>}
              {title && (
                <div>
                  <CardTitle>{title}</CardTitle>
                  {description && <CardDescription>{description}</CardDescription>}
                </div>
              )}
            </CardHeader>
          )}
          {children && <CardContent>{children}</CardContent>}
          {footer && <CardFooter>{footer}</CardFooter>}
        </CardContainer>
      </GlassMorphic>
    );
  }
);

GlassCard.displayName = 'GlassCard';
export default GlassCard;
