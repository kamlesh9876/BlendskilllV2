# BlendSkills Premium Design System

A comprehensive design system that blends the elegance of Apple, the clarity of Stripe, the motion quality of Linear, the engineering feel of Vercel, the storytelling of Thoughtworks, and the craftsmanship of Clay.

## Core Principles

1. **Timeless Elegance** - Sophisticated, minimal, never trendy
2. **Premium Engineering** - Technically sound, performance-first
3. **Intentional Motion** - Every animation serves usability
4. **Clarity Over Decoration** - Clean, purposeful design
5. **Consistent Experience** - Unified design language across all pages

## Typography System

### Font Stack
- **Display/Hero**: Inter (Ultra-light, 300) - Editorial, impact
- **Headings**: IBM Plex Sans (600-700) - Professional, technical
- **Body**: Inter (400-500) - Readable, proven
- **Mono**: IBM Plex Mono (500-600) - Code, technical content

### Type Hierarchy

#### Display
- `.display-lg` - 3.5rem, 300 weight, letter-spacing -0.02em
- `.display-md` - 2.75rem, 300 weight, letter-spacing -0.015em

#### Headings
- `.heading-xl` - 3rem, 700 weight
- `.heading-lg` - 2.25rem, 700 weight
- `.heading-md` - 1.875rem, 600 weight
- `.heading-sm` - 1.5rem, 600 weight
- `.heading-xs` - 1.25rem, 600 weight

#### Body
- `.body-lg` - 1.125rem, 400 weight, line-height 1.6
- `.body-md` - 1rem, 400 weight, line-height 1.6
- `.body-sm` - 0.875rem, 400 weight, line-height 1.5

#### Special
- `.caption` - 0.75rem, 500 weight, uppercase, letter-spacing 0.05em
- `.mono` - 0.875rem, 500 weight, font-family mono

## Glassmorphism System

### Components

#### GlassMorphic (Base Wrapper)
```tsx
<GlassMorphic intensity="medium" hover={true}>
  Content here
</GlassMorphic>
```

- **Intensity Levels**: `subtle` | `medium` | `strong`
- **Properties**:
  - Background: rgba(255, 255, 255, 0.08) + blur + border
  - Backdrop: blur(16px)
  - Border: rgba(255, 255, 255, 0.15)
  - Shadow: Layered with inset highlight

#### GlassCard (Content Container)
```tsx
<GlassCard
  icon={<Icon />}
  title="Title"
  description="Subtitle"
  hover={true}
>
  Content
</GlassCard>
```

- Pre-styled container with icon, title, description support
- Hover elevation effect
- Footer slot for additional content

### Glass Effects

```css
/* Subtle */
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);

/* Medium (Default) */
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(16px);

/* Strong */
background: rgba(255, 255, 255, 0.12);
backdrop-filter: blur(20px);
```

## Spacing System

Base unit: 8px

- `xs` - 4px
- `sm` - 8px
- `md` - 12px
- `lg` - 16px
- `xl` - 20px
- `2xl` - 24px
- `3xl` - 32px
- `4xl` - 40px
- `5xl` - 48px
- `6xl` - 56px
- `7xl` - 64px

## Color Palette

### Primary
- `primary` - #00f5d4 (Cyan)
- `primaryDark` - #00d4b4

### Accent
- `accent` - #FF6B35 (Coral)
- `accentDark` - #FF8557

### Secondary
- `secondary` - #0066cc (Blue)
- `secondaryDark` - #0052a3

### Neutrals
- `white` - #ffffff
- `slate-50` through `slate-950`
- `black` - #000000

## Shadow System

- **subtle** - `0 1px 2px rgba(0, 0, 0, 0.05)`
- **soft** - `0 4px 12px rgba(0, 0, 0, 0.1)`
- **elevated** - `0 12px 32px rgba(0, 0, 0, 0.15)`
- **high** - `0 20px 48px rgba(0, 0, 0, 0.2)`
- **glass** - Inset highlights for glassmorphism

## Border Radius Scale

- `sm` - 6px
- `md` - 12px
- `lg` - 16px
- `xl` - 20px
- `2xl` - 24px
- `full` - 9999px

## Animation System

### Durations

- **FAST** - 150ms (hover, click)
- **NORMAL** - 300ms (transitions)
- **SLOW** - 600ms (page transitions)
- **CINEMATIC** - 1000ms (scroll reveals)

### Easing Functions

- **EASE_IN_OUT** - `cubic-bezier(0.4, 0, 0.2, 1)` - Default smooth
- **EASE_OUT** - `cubic-bezier(0, 0, 0.2, 1)` - Exit animations
- **SPRING** - `cubic-bezier(0.34, 1.56, 0.64, 1)` - Bounce in
- **SMOOTH** - `cubic-bezier(0.25, 0.46, 0.45, 0.94)` - Premium feel
- **SNAPPY** - `cubic-bezier(0.18, 0.89, 0.32, 1.27)` - Responsive

### Preset Transitions

```tsx
import { transitionPresets } from '@/utils/animations';

// Usage with Framer Motion
<motion.div transition={transitionPresets.normal}>
  Content
</motion.div>
```

## Component Usage Guide

### Text Components

```tsx
import { Heading, Paragraph, Caption, Mono } from '@/components/Text';

<Heading level={1} size="xl">Heading 1</Heading>
<Paragraph size="lg" muted>Large muted text</Paragraph>
<Caption uppercase>Caption Text</Caption>
<Mono>code</Mono>
```

### Stat Display

```tsx
import AnimatedStat from '@/components/AnimatedStat';

<AnimatedStat
  value={250}
  label="Projects Delivered"
  suffix="+"
  duration={1500}
/>
```

### Section Headers

```tsx
import PremiumSectionHeader from '@/components/PremiumSectionHeader';

<PremiumSectionHeader
  caption="FEATURES"
  title="Powerful Solutions for Your Business"
  description="Enterprise-grade tools built for scale"
  align="center"
  size="lg"
/>
```

### Cards

```tsx
import { GlassCard } from '@/components/GlassCard';
import { Briefcase } from 'lucide-react';

<GlassCard
  icon={<Briefcase />}
  title="Custom Software"
  description="Enterprise applications"
  hover={true}
>
  {/* Card content */}
</GlassCard>
```

## Hover Effects

### Available Variants

```tsx
import {
  hoverScaleVariants,
  hoverLiftVariants,
  hoverGlowVariants,
} from '@/utils/animations';
```

## Best Practices

1. **Typography**: Always use the Text components for consistent hierarchy
2. **Spacing**: Stick to the spacing scale, avoid arbitrary values
3. **Glass Effects**: Use intensity levels, don't create custom glass effects
4. **Animations**: Import from animations utility, use preset transitions
5. **Colors**: Reference design system colors, avoid hardcoding hex values
6. **Shadows**: Use shadow presets from design system
7. **Border Radius**: Stick to the defined scale

## Files Reference

- **Typography**: `/theme/globalStyles.ts` (CSS classes), `/components/Text.tsx` (Components)
- **Glass Components**: `/components/GlassMorphic.tsx`, `/components/GlassCard.tsx`
- **Design Tokens**: `/theme/designSystem.ts`
- **Animations**: `/utils/animations.ts`
- **Hooks**: `/hooks/useGlassHover.ts`

## Accessibility

- All text components use semantic HTML (`h1`, `p`, `span`)
- Focus states integrated into glass components
- Color contrast ratios meet WCAG AA standards
- Motion respects `prefers-reduced-motion`

## Performance

- Glassmorphism uses hardware acceleration (backdrop-filter)
- Animations optimized with appropriate durations
- Components memoized where appropriate
- Lazy loading of heavy sections

## Future Enhancements

- [ ] Dark mode variations (with system detection)
- [ ] Advanced motion presets (scroll-triggered)
- [ ] Form components with glass styling
- [ ] Interactive component playground
- [ ] Accessibility audit and WCAG certification
