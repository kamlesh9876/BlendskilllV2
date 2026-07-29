# BlendSkills Website Specification

## Overview
This document provides a complete blueprint for the BlendSkills website. Every section is specified with detailed content, layout, typography, spacing, animations, icons, illustrations, buttons, hover effects, responsive design, accessibility, and SEO requirements.

---

# PART 1: HOMEPAGE SPECIFICATION

## 1. HERO SECTION

### Layout
- **Height**: 100vh (min-height: 700px on mobile)
- **Container**: Max-width 1400px, centered
- **Content Width**: 620px (left side)
- **Right Side**: 3D Dashboard Illustration (480px width)
- **Padding**: Top 140px, Bottom 80px

### Background
- **Primary Color**: #070B14
- **Overlay**: Radial Gradient
  - Top Left: rgba(0, 245, 212, 0.08)
  - Bottom Right: rgba(124, 92, 255, 0.05)
- **Grain Overlay**: 2.5% opacity noise texture
- **Cursor Glow**: 400px radial gradient following mouse (5% opacity)

### Typography

#### Main Heading
**Text:**
```
Technology that grows
your business.
Marketing that delivers
measurable results.
AI that saves your team time.
```

**Specifications:**
- **Font Size**: 72px (clamp(3rem, 6vw, 4.5rem))
- **Font Weight**: 800
- **Font Family**: Space Grotesk
- **Line Height**: 1.1
- **Letter Spacing**: -0.03em
- **Color**: #f8fafc
- **Max Width**: 620px
- **Animation**: Line-by-line reveal on load

#### Subheading
**Text:**
```
Whether you're launching a startup, modernizing operations, or scaling an established business, BlendSkills helps you build, automate, and grow—all under one roof.
```

**Specifications:**
- **Font Size**: 20px
- **Font Weight**: 400
- **Font Family**: Inter
- **Line Height**: 1.7
- **Color**: #94a3b8
- **Max Width**: 600px
- **Margin Top**: 32px
- **Animation**: Fade in after heading

### CTAs

#### Primary Button
**Text:** Book Free Consultation
**Specifications:**
- **Background**: Linear gradient (135deg, #00f5d4, #00dfc9)
- **Color**: #0a0e1a
- **Border**: 1px solid #00f5d4
- **Padding**: 16px 36px
- **Border Radius**: 12px
- **Font Weight**: 700
- **Font Size**: 0.95rem
- **Letter Spacing**: 0.5px
- **Box Shadow**: 0 8px 24px -6px rgba(0, 245, 212, 0.25)
- **Hover**: 
  - Background: #00f5d4
  - Transform: translateY(-2px)
  - Box Shadow: 0 12px 32px -6px rgba(0, 245, 212, 0.35)
  - Shimmer effect
- **Animation**: Slide up on load (delay 400ms)

#### Secondary Button
**Text:** View Our Work
**Specifications:**
- **Background**: Transparent
- **Color**: #f8fafc
- **Border**: 1.5px solid rgba(255, 255, 255, 0.1)
- **Padding**: 16px 36px
- **Border Radius**: 12px
- **Font Weight**: 600
- **Font Size**: 0.95rem
- **Margin Left**: 16px
- **Hover**: 
  - Border Color: #cbd5e1
  - Background: rgba(255, 255, 255, 0.05)
- **Animation**: Slide up on load (delay 500ms)

### Trust Row

#### Rating Badge
**Content:** ⭐⭐⭐⭐⭐ 5.0/5
**Specifications:**
- **Font Size**: 0.85rem
- **Font Weight**: 600
- **Color**: #f8fafc
- **Margin Top**: 48px
- **Animation**: Fade in on load (delay 600ms)

#### Trusted By Label
**Text:** Trusted by industry leaders
**Specifications:**
- **Font Size**: 0.75rem
- **Font Weight**: 400
- **Font Family**: IBM Plex Mono
- **Text Transform**: Uppercase
- **Letter Spacing**: 0.1em
- **Color**: #64748b
- **Margin Top**: 16px
- **Animation**: Fade in on load (delay 700ms)

#### Client Logos
**Logos:** Imagicaa, Wet N Joy, ADYPU, Toy World, Community Stay
**Specifications:**
- **Layout**: Horizontal flex row
- **Gap**: 48px
- **Margin Top**: 24px
- **Logo Height**: 32px
- **Logo Color**: #64748b (grayscale)
- **Hover**: Color to #94a3b8, scale 1.05
- **Animation**: Staggered fade in (delay 800ms + 100ms per logo)

### Hero Image (Right Side)

#### Dashboard Illustration
**Type:** Animated Dashboard Mockup
**Components:**
- Analytics graph with animated line
- AI Chat interface with typing effect
- CRM card with progress bars
- Marketing metrics with counting numbers
- Floating notification cards

**Specifications:**
- **Width**: 480px
- **Height**: 400px
- **Border Radius**: 24px
- **Background**: Linear gradient (135deg, rgba(20, 28, 48, 0.6), rgba(15, 20, 32, 0.8))
- **Border**: 1px solid rgba(0, 245, 212, 0.2)
- **Backdrop Filter**: blur(20px)
- **Box Shadow**: 0 32px 64px -16px rgba(0, 0, 0, 0.5), 0 0 48px -12px rgba(0, 245, 212, 0.15)
- **Animation**: 
  - Float: translateY(-10px) with 4s ease-in-out infinite
  - Fade in on load (delay 600ms)
  - Parallax on mouse move

### Animations

#### Page Load Sequence
1. Background fades in (0ms)
2. Heading reveals line by line (100ms)
3. Paragraph fades in (400ms)
4. Primary button slides up (400ms)
5. Secondary button slides up (500ms)
6. Rating badge fades in (600ms)
7. Trusted by label fades in (700ms)
8. Client logos staggered fade in (800ms)
9. Dashboard floats in (600ms)

#### Hover Effects
- **Buttons**: Scale 1.02, translateY(-2px), shadow increase
- **Logos**: Scale 1.05, color brighten
- **Dashboard**: Subtle tilt based on mouse position

### Responsive Design

#### Desktop (1400px+)
- Full layout with dashboard on right
- Heading: 72px
- Content width: 620px

#### Tablet (768px - 1399px)
- Dashboard moves below content
- Heading: clamp(2.5rem, 5vw, 3.5rem)
- Content width: 100%
- Dashboard width: 100%

#### Mobile (< 768px)
- Stacked layout
- Heading: clamp(2rem, 8vw, 3rem)
- Buttons: Full width, stacked
- Client logos: 2 rows, 3 per row
- Dashboard: Simplified, smaller (320px width)

### Accessibility
- **ARIA Labels**: All buttons have descriptive labels
- **Keyboard Navigation**: Tab order logical, focus visible
- **Screen Reader**: Alt text for dashboard, aria-live for dynamic content
- **Color Contrast**: All text meets WCAG AA (4.5:1)
- **Reduced Motion**: All animations respect prefers-reduced-motion

### SEO
- **H1**: Main heading
- **H2**: Subheading (if needed)
- **Keywords**: Technology, marketing, AI, business growth, automation
- **Alt Text**: Descriptive alt for dashboard illustration
- **Structured Data**: Organization schema in head

---

## 2. NAVIGATION

### Layout
- **Height**: 80px (scrolled: 64px)
- **Container**: Max-width 1400px, centered
- **Padding**: 0 24px
- **Position**: Fixed, top 0, z-index 1000

### Background
- **Default**: Transparent
- **Scrolled**: rgba(7, 10, 19, 0.8) with backdrop-filter blur(20px)
- **Border**: 1px solid rgba(255, 255, 255, 0.06) (scrolled)

### Logo
- **Image**: /logo.png
- **Height**: 40px
- **Width**: Auto
- **Hover**: Scale 1.02

### Navigation Links (Desktop)
**Links:** Home, Services, Process, Results, About, Contact

**Specifications:**
- **Font Size**: 0.95rem
- **Font Weight**: 500
- **Font Family**: Inter
- **Color**: #cbd5e1
- **Gap**: 40px
- **Hover**: Color #f8fafc, underline animation
- **Active**: Color #00f5d4

### CTA Button (Desktop)
**Text:** Book Consultation
**Specifications:**
- **Background**: Linear gradient (135deg, #00f5d4, #00dfc9)
- **Color**: #0a0e1a
- **Padding**: 12px 28px
- **Border Radius**: 10px
- **Font Weight**: 600
- **Font Size**: 0.9rem
- **Hover**: Scale 1.02, translateY(-1px)

### Mobile Navigation
- **Hamburger Icon**: 24px, color #f8fafc
- **Drawer**: Full screen, slide from right
- **Background**: #0a0e1a
- **Links**: Stacked, 48px height each
- **CTA**: Full width button at bottom

### Animations
- **Scroll Transition**: Background blur and height change (300ms ease)
- **Mobile Drawer**: Slide in 400ms cubic-bezier(0.16, 1, 0.3, 1)
- **Link Hover**: Underline from left (300ms ease)

### Responsive
- **Desktop**: Full navigation visible
- **Tablet**: Links reduced to 4, CTA visible
- **Mobile**: Hamburger menu only

---

## 3. TRUSTED COMPANIES SECTION

### Layout
- **Height**: Auto (min-height: 200px)
- **Container**: Max-width 1400px, centered
- **Padding**: 80px 24px
- **Background**: #0a0e1a

### Content

#### Section Header
**Text:** Trusted by industry leaders
**Specifications:**
- **Font Size**: 0.75rem
- **Font Weight**: 400
- **Font Family**: IBM Plex Mono
- **Text Transform**: Uppercase
- **Letter Spacing**: 0.1em
- **Color**: #64748b
- **Text Align**: Center
- **Margin Bottom**: 40px

#### Logo Grid
**Logos:** Imagicaa, Wet N Joy, ADYPU, Toy World, Community Stay, + 5 more
**Specifications:**
- **Layout**: Flex row, wrap
- **Gap**: 64px
- **Justify**: Center
- **Logo Height**: 40px
- **Logo Color**: #64748b (grayscale, 60% opacity)
- **Hover**: 
  - Color: #94a3b8
  - Scale: 1.1
  - Opacity: 100%
- **Animation**: Staggered fade in on scroll (100ms delay per logo)

### Divider
- **Height**: 1px
- **Background**: Radial gradient (ellipse at center, rgba(0, 245, 212, 0.2) 0%, transparent 70%)
- **Max Width**: 900px
- **Margin**: 0 auto

### Animations
- **Scroll Reveal**: Each logo fades in with 100ms stagger
- **Hover**: Scale and color transition (300ms ease)

### Responsive
- **Desktop**: 5 logos per row
- **Tablet**: 3 logos per row
- **Mobile**: 2 logos per row

---

## 4. BUSINESS PROBLEMS SECTION

### Layout
- **Height**: Auto
- **Container**: Max-width 1400px, centered
- **Padding**: 120px 24px
- **Background**: #0a0e1a

### Content

#### Section Header
**Eyebrow:** The Challenge
**Text:**
```
Most businesses struggle with
fragmented solutions, outdated
technology, and marketing that
doesn't convert.
```

**Specifications:**
- **Eyebrow Font Size**: 0.75rem
- **Eyebrow Font Weight**: 600
- **Eyebrow Font Family**: IBM Plex Mono
- **Eyebrow Color**: #00f5d4
- **Eyebrow Letter Spacing**: 0.1em
- **Eyebrow Text Transform**: Uppercase
- **Eyebrow Margin Bottom**: 24px

- **Heading Font Size**: clamp(2rem, 4vw, 3rem)
- **Heading Font Weight**: 700
- **Heading Font Family**: Space Grotesk
- **Heading Color**: #f8fafc
- **Heading Max Width**: 800px
- **Heading Line Height**: 1.2

#### Problem Cards
**Card 1:** Technology Debt
**Text:** Legacy systems that slow you down, security risks, and impossible maintenance costs.

**Card 2:** Marketing Waste
**Text:** Budget spent on campaigns that don't convert, unclear ROI, and fragmented channels.

**Card 3:** Operational Chaos
**Text:** Manual processes, disconnected tools, and teams working in silos.

**Card 4:** Growth Stagnation
**Text:** Unable to scale, losing customers to competitors, and missing market opportunities.

**Card Specifications:**
- **Layout**: Grid (2x2 on desktop, 1x4 on mobile)
- **Gap**: 32px
- **Card Type**: Matte-card
- **Padding**: 32px
- **Border Radius**: 20px
- **Icon**: 48px, color #64748b
- **Heading Font Size**: 1.25rem
- **Heading Font Weight**: 600
- **Heading Font Family**: Space Grotesk
- **Heading Color**: #f8fafc
- **Heading Margin Bottom**: 12px
- **Text Font Size**: 0.95rem
- **Text Font Weight**: 400
- **Text Font Family**: Inter
- **Text Color**: #94a3b8
- **Text Line Height**: 1.6

#### Transition Statement
**Text:** We solve these problems with integrated technology, data-driven marketing, and AI-powered automation.

**Specifications:**
- **Font Size**: 1.1rem
- **Font Weight**: 500
- **Font Family**: Inter
- **Color**: #cbd5e1
- **Text Align**: Center
- **Max Width**: 700px
- **Margin Top**: 64px

### Animations
- **Header**: Fade in on scroll
- **Cards**: Delayed fade in (200ms stagger)
- **Transition**: Fade in after cards

### Responsive
- **Desktop**: 2x2 grid
- **Tablet**: 2x2 grid
- **Mobile**: 1x4 stacked

---

## 5. SERVICES SECTION

### Layout
- **Height**: Auto
- **Container**: Max-width 1400px, centered
- **Padding**: 120px 24px
- **Background**: Linear gradient (180deg, #0a0e1a 0%, #0f1420 100%)

### Content

#### Section Header
**Eyebrow:** What We Do
**Heading:**
```
Everything you need to
build, automate, and grow
```

**Subheading:**
```
From custom software and AI automation to performance marketing and branding—we deliver end-to-end solutions that drive real business results.
```

**Specifications:**
- **Eyebrow**: Same as Business Problems
- **Heading Font Size**: clamp(2rem, 4vw, 3rem)
- **Heading Font Weight**: 700
- **Heading Font Family**: Space Grotesk
- **Heading Color**: #f8fafc
- **Heading Max Width**: 700px
- **Subheading Font Size**: 1.1rem
- **Subheading Font Weight**: 400
- **Subheading Font Family**: Inter
- **Subheading Color**: #94a3b8
- **Subheading Max Width**: 600px
- **Subheading Margin Top**: 24px

#### Service Cards

**Card 1: Custom Software Development**
**Icon:** Code/Development illustration
**Text:** Scalable software solutions designed around your business goals—from internal tools and ERP systems to customer portals and enterprise platforms.
**CTA:** Explore Solutions →

**Card 2: AI & Automation**
**Icon:** AI/Robot illustration
**Text:** Intelligent automation that saves time, reduces errors, and scales operations. From chatbots to workflow automation, we make AI work for you.
**CTA:** Explore Solutions →

**Card 3: Performance Marketing**
**Icon:** Chart/Growth illustration
**Text:** Data-driven marketing strategies that deliver measurable ROI. SEO, PPC, social media, and content marketing optimized for conversions.
**CTA:** Explore Solutions →

**Card 4: Branding & Design**
**Icon:** Palette/Design illustration
**Text:** Strategic branding that resonates with your audience. Logo design, visual identity, and digital experiences that build trust and recognition.
**CTA:** Explore Solutions →

**Card 5: Web & Mobile Apps**
**Icon:** Device/App illustration
**Text:** High-performance web and mobile applications built for speed, scalability, and user experience. From MVPs to enterprise apps.
**CTA:** Explore Solutions →

**Card 6: Data & Analytics**
**Icon:** Analytics/Dashboard illustration
**Text:** Transform data into actionable insights. Custom dashboards, reporting systems, and business intelligence that drive smarter decisions.
**CTA:** Explore Solutions →

**Card Specifications:**
- **Layout**: Grid (3x2 on desktop, 2x3 on tablet, 1x6 on mobile)
- **Gap**: 32px
- **Card Type**: Glass-card
- **Padding**: 40px
- **Border Radius**: 24px
- **Icon Size**: 56px
- **Icon Color**: #00f5d4
- **Icon Background**: rgba(0, 245, 212, 0.1)
- **Icon Padding**: 16px
- **Icon Border Radius**: 16px
- **Heading Font Size**: 1.35rem
- **Heading Font Weight**: 600
- **Heading Font Family**: Space Grotesk
- **Heading Color**: #f8fafc
- **Heading Margin Bottom**: 16px
- **Text Font Size**: 0.95rem
- **Text Font Weight**: 400
- **Text Font Family**: Inter
- **Text Color**: #94a3b8
- **Text Line Height**: 1.7
- **Text Margin Bottom**: 24px
- **CTA Font Size**: 0.9rem
- **CTA Font Weight**: 600
- **CTA Font Family**: Inter
- **CTA Color**: #00f5d4
- **CTA Hover**: Color #f8fafc, arrow slide right

**Card Hover Effects:**
- **Transform**: translateY(-8px)
- **Background**: Linear gradient (135deg, rgba(25, 35, 60, 0.6), rgba(20, 28, 48, 0.7))
- **Border Color**: rgba(0, 245, 212, 0.4)
- **Box Shadow**: 0 24px 48px -16px rgba(0, 0, 0, 0.6), 0 0 40px -12px rgba(0, 245, 212, 0.2)
- **Icon**: Scale 1.1, rotate 5deg
- **Duration**: 350ms
- **Ease**: cubic-bezier(0.16, 1, 0.3, 1)

### Animations
- **Header**: Fade in on scroll
- **Cards**: Staggered fade in (150ms delay per card)
- **Hover**: Transform, border, shadow, icon animation

### Responsive
- **Desktop**: 3x2 grid
- **Tablet**: 2x3 grid
- **Mobile**: 1x6 stacked

---

## 6. AI SECTION

### Layout
- **Height**: Auto (min-height: 600px)
- **Container**: Max-width 1400px, centered
- **Padding**: 120px 24px
- **Background**: #0a0e1a with radial gradient overlay (rgba(0, 245, 212, 0.05) center)

### Content

#### Section Header (Left)
**Eyebrow:** AI-Powered Growth
**Heading:**
```
Automation that works
while you sleep
```

**Subheading:**
```
From intelligent chatbots and workflow automation to predictive analytics and personalized experiences—we implement AI solutions that deliver real business value.
```

**Specifications:**
- **Content Width**: 600px
- **Eyebrow**: Same as previous sections
- **Heading Font Size**: clamp(2rem, 4vw, 3rem)
- **Heading Font Weight**: 700
- **Heading Font Family**: Space Grotesk
- **Heading Color**: #f8fafc
- **Subheading Font Size**: 1.1rem
- **Subheading Font Weight**: 400
- **Subheading Font Family**: Inter
- **Subheading Color**: #94a3b8
- **Subheading Margin Top**: 24px

#### AI Features (Right)

**Feature 1:** Intelligent Chatbots
**Text:** 24/7 customer support that understands context and resolves issues automatically.

**Feature 2:** Workflow Automation
**Text:** Eliminate manual tasks with smart workflows that connect your tools and data.

**Feature 3:** Predictive Analytics
**Text:** Forecast trends, optimize pricing, and make data-driven decisions with AI.

**Feature 4:** Personalization
**Text:** Deliver personalized experiences at scale with AI-powered recommendations.

**Feature Specifications:**
- **Layout**: Vertical stack
- **Gap**: 32px
- **Icon**: 40px, color #00f5d4
- **Heading Font Size**: 1.15rem
- **Heading Font Weight**: 600
- **Heading Font Family**: Space Grotesk
- **Heading Color**: #f8fafc
- **Heading Margin Bottom**: 8px
- **Text Font Size**: 0.9rem
- **Text Font Weight**: 400
- **Text Font Family**: Inter
- **Text Color**: #94a3b8

#### CTA
**Text:** See AI in Action
**Specifications:**
- **Type**: btn-outline
- **Margin Top**: 40px

### Visual Element
- **Type**: Animated AI visualization
- **Position**: Right side (desktop), below content (mobile)
- **Size**: 400px x 400px
- **Animation**: Floating nodes, connecting lines, pulsing effects

### Animations
- **Header**: Fade in on scroll
- **Features**: Staggered slide in from right
- **Visualization**: Continuous floating animation
- **Hover**: Feature cards scale 1.02

### Responsive
- **Desktop**: Split layout (60/40)
- **Tablet**: Stacked
- **Mobile**: Stacked, visualization simplified

---

## 7. CASE STUDIES SECTION

### Layout
- **Height**: Auto
- **Container**: Max-width 1400px, centered
- **Padding**: 120px 24px
- **Background**: #0f1420

### Content

#### Section Header
**Eyebrow:** Results That Matter
**Heading:**
```
Real projects. Real impact.
Real growth.
```

**Subheading:**
```
See how we've helped businesses like yours transform their operations, increase revenue, and achieve their goals.
```

**Specifications:**
- **Eyebrow**: Same as previous
- **Heading Font Size**: clamp(2rem, 4vw, 3rem)
- **Heading Font Weight**: 700
- **Heading Font Family**: Space Grotesk
- **Heading Color**: #f8fafc
- **Subheading Font Size**: 1.1rem
- **Subheading Font Weight**: 400
- **Subheading Font Family**: Inter
- **Subheading Color**: #94a3b8
- **Subheading Max Width**: 600px
- **Subheading Margin Top**: 24px

#### Case Study Cards

**Case Study 1: Imagicaa Water Park**
**Challenge:** Low online bookings, poor user experience, outdated website
**Solution:** Complete website redesign, booking system optimization, performance marketing
**Results:** 340% increase in online bookings, 65% reduction in bounce rate, 4.8/5 user rating
**Technologies:** React, Node.js, PostgreSQL, Google Ads
**Screenshot:** Booking interface mockup

**Case Study 2: Wet N Joy**
**Challenge:** Seasonal revenue fluctuations, limited brand awareness
**Solution:** Year-round marketing strategy, social media campaigns, loyalty program
**Results:** 180% revenue growth, 50K+ social followers, 45% repeat customers
**Technologies:** Facebook Ads, Instagram Marketing, Email Automation
**Screenshot:** Campaign dashboard

**Case Study 3: ADYPU University**
**Challenge:** Low student engagement, outdated admission process
**Solution:** Digital transformation, student portal, automated communication
**Results:** 220% increase in applications, 70% faster admission process, 95% student satisfaction
**Technologies:** Custom CRM, WhatsApp Integration, Analytics Dashboard
**Screenshot:** Student portal

**Card Specifications:**
- **Layout**: Grid (3 on desktop, 2 on tablet, 1 on mobile)
- **Gap**: 32px
- **Card Type**: Solid-card
- **Padding**: 0
- **Border Radius**: 24px
- **Overflow**: Hidden

**Card Content Structure:**
1. **Screenshot**: 100% width, 240px height, object-fit cover
2. **Content Padding**: 32px
3. **Client Name**: Font size 0.85rem, font weight 600, color #00f5d4, uppercase, letter-spacing 0.05em
4. **Project Title**: Font size 1.5rem, font weight 700, color #f8fafc, margin-bottom 16px
5. **Challenge**: Label font size 0.75rem, color #64748b, text font size 0.9rem, color #94a3b8, margin-bottom 12px
6. **Solution**: Same format as Challenge
7. **Results**: Label font size 0.75rem, color #00f5d4, text font size 0.9rem, color #f8fafc, margin-bottom 16px
8. **Technologies**: Tags, font size 0.8rem, color #64748b, background rgba(255,255,255,0.05), padding 4px 12px, border-radius 6px
9. **CTA**: View Case Study →, font size 0.9rem, font weight 600, color #00f5d4

**Card Hover Effects:**
- **Screenshot**: Scale 1.05
- **Transform**: translateY(-8px)
- **Border Color**: rgba(0, 245, 212, 0.3)
- **Box Shadow**: 0 20px 40px -12px rgba(0, 0, 0, 0.5)
- **Duration**: 400ms

### Metrics Bar
**Content:**
- 50+ Projects Delivered
- 340% Average ROI
- 95% Client Satisfaction
- 5+ Years Experience

**Specifications:**
- **Layout**: Flex row
- **Gap**: 64px
- **Margin Top**: 80px
- **Padding**: 40px
- **Background**: Linear gradient (135deg, rgba(0, 245, 212, 0.08), rgba(0, 245, 212, 0.02))
- **Border**: 1px solid rgba(0, 245, 212, 0.15)
- **Border Radius**: 20px
- **Number Font Size**: 2.5rem
- **Number Font Weight**: 700
- **Number Font Family**: Space Grotesk
- **Number Color**: #00f5d4
- **Label Font Size**: 0.85rem
- **Label Font Weight**: 400
- **Label Font Family**: Inter
- **Label Color**: #94a3b8
- **Animation**: Count up on scroll

### Animations
- **Header**: Fade in on scroll
- **Cards**: Staggered fade in (200ms delay)
- **Metrics**: Count up animation
- **Hover**: Card lift and screenshot zoom

### Responsive
- **Desktop**: 3 cards
- **Tablet**: 2 cards
- **Mobile**: 1 card, metrics stacked

---

## 8. INDUSTRIES SECTION

### Layout
- **Height**: Auto
- **Container**: Max-width 1400px, centered
- **Padding**: 120px 24px
- **Background**: #0a0e1a

### Content

#### Section Header
**Eyebrow:** Industries We Serve
**Heading:**
```
Expertise across
diverse sectors
```

**Subheading:**
```
From startups to enterprises, education to entertainment—we understand the unique challenges of your industry.
```

**Specifications:**
- **Eyebrow**: Same as previous
- **Heading Font Size**: clamp(2rem, 4vw, 3rem)
- **Heading Font Weight**: 700
- **Heading Font Family**: Space Grotesk
- **Heading Color**: #f8fafc
- **Subheading Font Size**: 1.1rem
- **Subheading Font Weight**: 400
- **Subheading Font Family**: Inter
- **Subheading Color**: #94a3b8
- **Subheading Max Width**: 600px

#### Industry Cards

**Industries:** Startups, Education, Entertainment, Healthcare, E-commerce, Real Estate, Manufacturing, Finance

**Card Specifications:**
- **Layout**: Grid (4x2 on desktop, 2x4 on tablet, 1x8 on mobile)
- **Gap**: 24px
- **Card Type**: Gradient-card
- **Padding**: 32px
- **Border Radius**: 16px
- **Icon**: 40px, color #00f5d4
- **Industry Name**: Font size 1.1rem, font weight 600, color #f8fafc
- **Hover**: Scale 1.05, background gradient intensifies

### Animations
- **Header**: Fade in on scroll
- **Cards**: Staggered fade in (100ms delay)

### Responsive
- **Desktop**: 4x2 grid
- **Tablet**: 2x4 grid
- **Mobile**: 1x8 stacked

---

## 9. PROCESS SECTION

### Layout
- **Height**: Auto
- **Container**: Max-width 1400px, centered
- **Padding**: 120px 24px
- **Background**: #0f1420

### Content

#### Section Header
**Eyebrow:** Our Process
**Heading:**
```
How we turn ideas
into reality
```

**Subheading:**
```
A proven methodology that ensures clarity, quality, and timely delivery at every stage.
```

**Specifications:**
- **Eyebrow**: Same as previous
- **Heading Font Size**: clamp(2rem, 4vw, 3rem)
- **Heading Font Weight**: 700
- **Heading Font Family**: Space Grotesk
- **Heading Color**: #f8fafc
- **Subheading Font Size**: 1.1rem
- **Subheading Font Weight**: 400
- **Subheading Font Family**: Inter
- **Subheading Color**: #94a3b8
- **Subheading Max Width**: 600px

#### Process Timeline

**Step 1: Discovery**
**Number:** 01
**Title:** Discovery & Strategy
**Text:** We learn your business, goals, and challenges. Research, analysis, and strategic planning.
**Duration:** 1-2 weeks

**Step 2: Design**
**Number:** 02
**Title:** Design & Planning
**Text:** Wireframes, prototypes, and visual design. User experience planning and technical architecture.
**Duration:** 2-3 weeks

**Step 3: Development**
**Number:** 03
**Title:** Development
**Text:** Agile development with regular updates. Clean code, testing, and quality assurance.
**Duration:** 4-8 weeks

**Step 4: Launch**
**Number:** 04
**Title:** Launch & Optimize
**Text:** Deployment, monitoring, and optimization. Training and ongoing support.
**Duration:** 1-2 weeks

**Step Specifications:**
- **Layout**: Horizontal timeline (desktop), vertical stack (mobile)
- **Gap**: 48px
- **Card Type**: Matte-card
- **Padding**: 40px
- **Border Radius**: 20px
- **Position**: Relative
- **Ghost Number**: 5rem, font weight 900, color rgba(0, 245, 212, 0.1), absolute top right
- **Step Number**: Font size 0.85rem, font weight 700, color #00f5d4, font family IBM Plex Mono
- **Title Font Size**: 1.5rem
- **Title Font Weight**: 600
- **Title Font Family**: Space Grotesk
- **Title Color**: #f8fafc
- **Title Margin Bottom**: 12px
- **Text Font Size**: 0.95rem
- **Text Font Weight**: 400
- **Text Font Family**: Inter
- **Text Color**: #94a3b8
- **Text Line Height**: 1.6
- **Duration Font Size**: 0.85rem
- **Duration Font Weight**: 500
- **Duration Font Family**: IBM Plex Mono
- **Duration Color**: #64748b
- **Duration Margin Top**: 16px

**Connecting Line:**
- **Position**: Absolute, between cards
- **Height**: 2px
- **Background**: Linear gradient (90deg, #00f5d4, transparent)
- **Animation**: Scale from 0 to 1 on scroll (1.5s ease)

### Animations
- **Header**: Fade in on scroll
- **Cards**: Staggered slide in from bottom
- **Line**: Animate width on scroll
- **Hover**: Card lift, border glow

### Responsive
- **Desktop**: Horizontal timeline
- **Tablet**: 2x2 grid
- **Mobile**: Vertical stack with connecting line

---

## 10. TESTIMONIALS SECTION

### Layout
- **Height**: Auto
- **Container**: Max-width 1400px, centered
- **Padding**: 120px 24px
- **Background**: #0a0e1a

### Content

#### Section Header
**Eyebrow:** What Clients Say
**Heading:**
```
Trusted by businesses
that demand excellence
```

**Subheading:**
```
Don't just take our word for it. Here's what our clients have to say about working with us.
```

**Specifications:**
- **Eyebrow**: Same as previous
- **Heading Font Size**: clamp(2rem, 4vw, 3rem)
- **Heading Font Weight**: 700
- **Heading Font Family**: Space Grotesk
- **Heading Color**: #f8fafc
- **Subheading Font Size**: 1.1rem
- **Subheading Font Weight**: 400
- **Subheading Font Family**: Inter
- **Subheading Color**: #94a3b8
- **Subheading Max Width**: 600px

#### Testimonial Cards

**Testimonial 1:**
**Client Photo:** [Image]
**Client Name:** Rajesh Kumar
**Client Title:** CEO, Imagicaa
**Company Logo:** [Imagicaa Logo]
**LinkedIn Badge:** [LinkedIn Icon]
**Project:** Website & Booking System
**Timeline:** 3 months
**Rating:** ⭐⭐⭐⭐⭐
**Quote:** "BlendSkills transformed our online presence. The new booking system increased our revenue by 340%. Their team is exceptional."

**Testimonial 2:**
**Client Photo:** [Image]
**Client Name:** Priya Sharma
**Client Title:** Marketing Director, Wet N Joy
**Company Logo:** [Wet N Joy Logo]
**LinkedIn Badge:** [LinkedIn Icon]
**Project:** Digital Marketing
**Timeline:** 6 months
**Rating:** ⭐⭐⭐⭐⭐
**Quote:** "The results speak for themselves. 180% revenue growth and a 50K+ social following. Best investment we've made."

**Testimonial 3:**
**Client Photo:** [Image]
**Client Name:** Dr. Amit Verma
**Client Title:** Director, ADYPU
**Company Logo:** [ADYPU Logo]
**LinkedIn Badge:** [LinkedIn Icon]
**Project:** Digital Transformation
**Timeline:** 8 months
**Rating:** ⭐⭐⭐⭐⭐
**Quote:** "They understood our unique challenges and delivered a solution that exceeded expectations. Student applications increased by 220%."

**Card Specifications:**
- **Layout**: Grid (3 on desktop, 2 on tablet, 1 on mobile)
- **Gap**: 32px
- **Card Type**: Glass-card
- **Padding**: 40px
- **Border Radius**: 24px

**Card Content Structure:**
1. **Header**: Flex row (photo + info)
   - **Photo**: 64px x 64px, border-radius 50%, object-fit cover
   - **Info**: Margin left 16px
     - **Name**: Font size 1.1rem, font weight 600, color #f8fafc
     - **Title**: Font size 0.9rem, font weight 400, color #94a3b8
     - **Company Logo**: 24px height, margin top 8px
     - **LinkedIn**: 16px icon, color #0077b5, margin left 8px
2. **Project Info**: Margin top 24px
   - **Label**: Font size 0.75rem, font weight 600, font family IBM Plex Mono, color #64748b, uppercase
   - **Value**: Font size 0.9rem, font weight 400, color #94a3b8
3. **Quote**: Font size 1.05rem, font weight 400, font family Inter, color #cbd5e1, line-height 1.7, margin top 20px, font-style italic
4. **Rating**: Font size 1.2rem, color #fbbf24, margin top 20px

**Card Hover Effects:**
- **Transform**: translateY(-4px)
- **Border Color**: rgba(0, 245, 212, 0.3)
- **Box Shadow**: 0 20px 40px -12px rgba(0, 0, 0, 0.4)

### Animations
- **Header**: Fade in on scroll
- **Cards**: Staggered fade in (200ms delay)
- **Hover**: Subtle lift

### Responsive
- **Desktop**: 3 cards
- **Tablet**: 2 cards
- **Mobile**: 1 card

---

## 11. FAQ SECTION

### Layout
- **Height**: Auto
- **Container**: Max-width 1000px, centered
- **Padding**: 120px 24px
- **Background**: #0f1420

### Content

#### Section Header
**Eyebrow:** FAQ
**Heading:**
```
Common questions
```

**Specifications:**
- **Eyebrow**: Same as previous
- **Heading Font Size**: clamp(2rem, 4vw, 3rem)
- **Heading Font Weight**: 700
- **Heading Font Family**: Space Grotesk
- **Heading Color**: #f8fafc

#### FAQ Items

**Q1: How long does a typical project take?**
**A:** Project timelines vary based on scope. A simple website takes 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during discovery.

**Q2: What industries do you work with?**
**A:** We work across diverse industries including education, entertainment, healthcare, e-commerce, real estate, manufacturing, and finance. Our team adapts to your specific industry needs.

**Q3: Do you offer ongoing support?**
**A:** Yes, we offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance monitoring, and priority support.

**Q4: What's your pricing model?**
**A:** We offer flexible pricing including fixed-price projects, hourly rates, and retainer models. We provide transparent quotes with no hidden costs after understanding your requirements.

**Q5: Can you work with our existing team?**
**A:** Absolutely. We can integrate with your existing team, provide consultation, or take over entire projects. We adapt to your workflow and collaboration preferences.

**Q6: Do you provide training?**
**A:** Yes, we provide training for your team on using new systems, best practices, and ongoing maintenance. We ensure you're equipped to manage and scale your solutions.

**Item Specifications:**
- **Layout**: Vertical stack
- **Gap**: 16px
- **Item Type**: Accordion
- **Background**: rgba(15, 20, 32, 0.5)
- **Border**: 1px solid var(--border-color)
- **Border Radius**: 12px
- **Padding**: 24px
- **Question Font Size**: 1.05rem
- **Question Font Weight**: 600
- **Question Font Family**: Inter
- **Question Color**: #f8fafc
- **Answer Font Size**: 0.95rem
- **Answer Font Weight**: 400
- **Answer Font Family**: Inter
- **Answer Color**: #94a3b8
- **Answer Line Height**: 1.7
- **Answer Margin Top**: 16px
- **Icon**: Chevron, 20px, color #64748b, rotates on expand

**Accordion Animation:**
- **Expand**: Height animates, chevron rotates 180deg
- **Duration**: 300ms
- **Ease**: cubic-bezier(0.16, 1, 0.3, 1)

### Animations
- **Header**: Fade in on scroll
- **Items**: Staggered fade in (100ms delay)
- **Expand**: Smooth height transition

### Responsive
- **All**: Same layout, adjusted padding

---

## 12. CONTACT SECTION

### Layout
- **Height**: Auto (min-height: 700px)
- **Container**: Max-width 1400px, centered
- **Padding**: 120px 24px
- **Background**: Linear gradient (180deg, #0f1420 0%, #0a0e1a 100%)

### Content

#### Section Header
**Eyebrow:** Let's Talk
**Heading:**
```
Ready to build something
amazing together?
```

**Subheading:**
```
Whether you have a project in mind or just want to explore possibilities—we'd love to hear from you.
```

**Specifications:**
- **Eyebrow**: Same as previous
- **Heading Font Size**: clamp(2rem, 4vw, 3rem)
- **Heading Font Weight**: 700
- **Heading Font Family**: Space Grotesk
- **Heading Color**: #f8fafc
- **Subheading Font Size**: 1.1rem
- **Subheading Font Weight**: 400
- **Subheading Font Family**: Inter
- **Subheading Color**: #94a3b8
- **Subheading Max Width**: 600px

#### Split Layout (Desktop)

**Left Column (40%):**

**Contact Info Card:**
- **Card Type**: Glass-card
- **Padding**: 40px
- **Border Radius**: 24px

**Email:**
**Label:** Email
**Value:** info@blendskills.co.in
**Icon:** Mail, 24px, color #00f5d4
**Hover:** Color #f8fafc

**Phone:**
**Label:** Phone
**Value:** +91 85308 19966
**Icon:** Phone, 24px, color #00f5d4
**Hover:** Color #f8fafc

**Office:**
**Label:** Office
**Value:** Pune & Gaya, India
**Icon:** MapPin, 24px, color #00f5d4
**Hover:** Color #f8fafc

**Availability:**
**Label:** Availability
**Value:** Mon - Sat, 9AM - 6PM IST
**Icon:** Clock, 24px, color #00f5d4

**Contact Item Specifications:**
- **Gap**: 24px
- **Label Font Size**: 0.75rem
- **Label Font Weight**: 600
- **Label Font Family**: IBM Plex Mono
- **Label Color**: #64748b
- **Label Text Transform**: Uppercase
- **Label Letter Spacing**: 0.05em
- **Value Font Size**: 1.1rem
- **Value Font Weight**: 500
- **Value Font Family**: Inter
- **Value Color**: #f8fafc
- **Value Margin Top**: 4px

**Social Links:**
**Label:** Follow Us
**Links:** Instagram, LinkedIn, Twitter
**Icon Size**: 24px
**Color**: #64748b
**Hover**: Color #00f5d4, scale 1.1

**CTA:**
**Text:** Book Free Consultation
**Type**: btn-primary
**Margin Top**: 32px

**Right Column (60%):**

**Contact Form:**
- **Card Type**: Glass-card
- **Padding**: 40px
- **Border Radius**: 24px

**Form Fields:**

**Name:**
**Type**: Text
**Placeholder**: Your name
**Required**: Yes
**Validation**: Min 2 characters

**Email:**
**Type**: Email
**Placeholder**: your@email.com
**Required**: Yes
**Validation**: Valid email format

**Company:**
**Type**: Text
**Placeholder**: Company name (optional)
**Required**: No

**Service:**
**Type**: Select
**Options**: Custom Software, AI & Automation, Performance Marketing, Branding, Web & Mobile Apps, Other
**Required**: Yes

**Message:**
**Type**: Textarea
**Placeholder:** Tell us about your project...
**Required**: Yes
**Rows**: 4
**Validation**: Min 10 characters

**Submit Button:**
**Text:** Send Message
**Type**: btn-primary
**Full Width**: Yes

**Form Field Specifications:**
- **Gap**: 24px
- **Input Type**: float-input
- **Font Size**: 1rem
- **Font Family**: Inter
- **Color**: #f8fafc
- **Focus Border**: #00f5d4
- **Focus Glow**: rgba(0, 245, 212, 0.1)

### Animations
- **Header**: Fade in on scroll
- **Left Column**: Slide in from left
- **Right Column**: Slide in from right
- **Form Fields**: Staggered fade in (100ms delay)
- **Submit**: Scale on hover

### Responsive
- **Desktop**: Split layout (40/60)
- **Tablet**: Stacked
- **Mobile**: Stacked, full width form

---

## 13. FOOTER

### Layout
- **Height**: Auto
- **Container**: Max-width 1400px, centered
- **Padding**: 80px 24px 32px
- **Background**: #070a13
- **Border Top**: 1px solid rgba(255, 255, 255, 0.06)

### Content

#### Grid Layout
- **Columns**: 4 (desktop), 2 (tablet), 1 (mobile)
- **Gap**: 48px

#### Column 1: Brand

**Logo:** /logo.png
**Height:** 48px
**Width:** Auto
**Margin Bottom:** 24px

**Description:**
```
Technology that grows your business. Marketing that delivers measurable results. AI that saves your team time.
```

**Specifications:**
- **Font Size**: 0.95rem
- **Font Weight**: 400
- **Font Family**: Inter
- **Color**: #94a3b8
- **Line Height**: 1.7
- **Max Width**: 350px

#### Column 2: Services

**Heading:** Services
**Specifications:**
- **Font Size**: 1rem
- **Font Weight**: 600
- **Font Family**: Space Grotesk
- **Color**: #f8fafc
- **Margin Bottom**: 24px

**Links:**
- Custom Software
- AI & Automation
- Performance Marketing
- Branding & Design
- Web & Mobile Apps
- Data & Analytics

**Link Specifications:**
- **Layout**: Vertical stack
- **Gap**: 12px
- **Font Size**: 0.9rem
- **Font Weight**: 400
- **Font Family**: Inter
- **Color**: #94a3b8
- **Hover**: Color #f8fafc, translateX 4px

#### Column 3: Company

**Heading:** Company
**Specifications:**
- **Font Size**: 1rem
- **Font Weight**: 600
- **Font Family**: Space Grotesk
- **Color**: #f8fafc
- **Margin Bottom**: 24px

**Links:**
- About Us
- Case Studies
- Process
- Careers
- Blog
- Contact

**Link Specifications:**
- **Layout**: Vertical stack
- **Gap**: 12px
- **Font Size**: 0.9rem
- **Font Weight**: 400
- **Font Family**: Inter
- **Color**: #94a3b8
- **Hover**: Color #f8fafc, translateX 4px

#### Column 4: Connect

**Heading:** Connect
**Specifications:**
- **Font Size**: 1rem
- **Font Weight**: 600
- **Font Family**: Space Grotesk
- **Color**: #f8fafc
- **Margin Bottom**: 24px

**Social Links:**
- Instagram
- LinkedIn
- Twitter
- GitHub

**Social Specifications:**
- **Layout**: Flex row
- **Gap**: 16px
- **Icon Size**: 24px
- **Color**: #64748b
- **Hover**: Color #00f5d4, scale 1.1

**Newsletter:**
**Label:** Stay updated
**Input Type**: Email
**Placeholder:** Enter your email
**Button:** Subscribe
**Specifications:**
- **Input**: float-input, font size 0.9rem
- **Button**: btn-small, margin top 12px

#### Bottom Bar

**Layout:** Flex row, space between
**Padding Top:** 48px
**Border Top**: 1px solid rgba(255, 255, 255, 0.06)

**Copyright:**
**Text:** © 2026 BlendSkills. All rights reserved.
**Specifications:**
- **Font Size**: 0.85rem
- **Font Weight**: 400
- **Font Family**: Inter
- **Color**: #64748b

**Legal Links:**
**Links:** Privacy Policy, Terms of Service
**Specifications:**
- **Gap**: 24px
- **Font Size**: 0.85rem
- **Font Weight**: 400
- **Font Family**: Inter
- **Color**: #64748b
- **Hover**: Color #94a3b8

### Animations
- **Columns**: Staggered fade in (150ms delay)
- **Links**: Hover translate
- **Social**: Hover scale

### Responsive
- **Desktop**: 4 columns
- **Tablet**: 2 columns
- **Mobile**: 1 column, stacked

---

# PART 2: DESIGN SYSTEM

## Typography

### Font Families
- **Display**: Space Grotesk (400, 500, 600, 700, 800)
- **Body**: Inter (400, 500, 600, 700)
- **Mono**: IBM Plex Mono (400, 500)

### Type Scale

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 | 72px | 800 | 1.1 | Hero headings |
| H2 | clamp(2rem, 4vw, 3.5rem) | 700 | 1.1 | Section headings |
| H3 | clamp(1.5rem, 3vw, 2rem) | 600 | 1.2 | Subsection headings |
| H4 | 1.5rem | 600 | 1.3 | Card titles |
| Body Large | 1.1rem | 400 | 1.7 | Lead paragraphs |
| Body | 1rem | 400 | 1.6 | Body text |
| Small | 0.9rem | 400 | 1.5 | Secondary text |
| Label | 0.75rem | 400 | 1.4 | Labels, tags |
| Eyebrow | 0.75rem | 600 | 1.4 | Section labels |

### Font Weights
- **300**: Light (rarely used)
- **400**: Regular (body, labels)
- **500**: Medium (emphasis)
- **600**: Semibold (subheadings, card titles)
- **700**: Bold (section headings)
- **800**: Extra Bold (hero headings)

---

## Colors

### Primary Palette

| Name | Value | Usage |
|------|-------|-------|
| Background | #0a0e1a | Main background |
| Background Secondary | #0f1420 | Section backgrounds |
| Background Card | rgba(15, 20, 32, 0.5) | Card backgrounds |
| Background Card Hover | rgba(20, 28, 48, 0.8) | Card hover |

### Text Palette

| Name | Value | Usage |
|------|-------|-------|
| Text Primary | #f8fafc | Headings, primary text |
| Text Secondary | #cbd5e1 | Secondary text |
| Text Muted | #94a3b8 | Body text, descriptions |
| Text Dark | #64748b | Labels, metadata |

### Accent Palette

| Name | Value | Usage |
|------|-------|-------|
| Accent | #00f5d4 | Primary accent, CTAs |
| Accent RGB | 0, 245, 212 | RGB values |
| Accent Glow | rgba(0, 245, 212, 0.15) | Glow effects |
| Accent Dark | #00bfa5 | Darker accent |
| Accent Light | rgba(0, 245, 212, 0.1) | Light accent backgrounds |

### Border Palette

| Name | Value | Usage |
|------|-------|-------|
| Border Color | rgba(255, 255, 255, 0.06) | Default borders |
| Border Hover | rgba(0, 245, 212, 0.4) | Hover borders |
| Border Strong | rgba(255, 255, 255, 0.1) | Strong borders |

### Color Usage Ratio
- **70%**: Neutral (backgrounds, borders, muted text)
- **20%**: White (primary text, secondary text)
- **10%**: Accent (CTAs, highlights, key elements)

---

## Spacing

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight spacing |
| sm | 8px | Small spacing |
| md | 16px | Medium spacing |
| lg | 24px | Large spacing |
| xl | 32px | Extra large spacing |
| 2xl | 48px | Section spacing |
| 3xl | 64px | Large section spacing |
| 4xl | 96px | Page spacing |
| 5xl | 120px | Major section spacing |

### Component Spacing

| Component | Padding | Gap |
|-----------|---------|-----|
| Button | 16px 36px | 12px (icon) |
| Card | 32-40px | 24-32px |
| Input | 16px 20px 8px | - |
| Section | 120px 24px | - |
| Grid | - | 24-32px |

---

## Shadows

### Shadow Scale

| Level | Value | Usage |
|-------|-------|-------|
| sm | 0 4px 12px -4px rgba(0, 0, 0, 0.3) | Small elements |
| md | 0 8px 24px -6px rgba(0, 0, 0, 0.4) | Cards, buttons |
| lg | 0 20px 40px -12px rgba(0, 0, 0, 0.5) | Elevated cards |
| xl | 0 32px 64px -16px rgba(0, 0, 0, 0.6) | Hero elements |
| glow | 0 0 40px -12px rgba(0, 245, 212, 0.2) | Accent glow |

---

## Border Radius

| Level | Value | Usage |
|-------|-------|-------|
| sm | 8px | Small elements |
| md | 12px | Buttons, inputs |
| lg | 16px | Tags, small cards |
| xl | 20px | Cards |
| 2xl | 24px | Large cards |
| 3xl | 32px | Hero elements |
| full | 9999px | Pills, circles |

---

## Transitions

### Duration

| Token | Value | Usage |
|-------|-------|-------|
| fast | 150ms | Quick interactions |
| base | 300ms | Standard transitions |
| slow | 500ms | Complex animations |
| slower | 700ms | Major animations |

### Easing

| Token | Value | Usage |
|-------|-------|-------|
| ease | ease | Simple transitions |
| in | ease-in | Enter animations |
| out | ease-out | Exit animations |
| in-out | ease-in-out | Full animations |
| bounce | cubic-bezier(0.34, 1.56, 0.64, 1) | Bouncy effects |
| expo | cubic-bezier(0.16, 1, 0.3, 1) | Smooth effects |

---

## Components

### Buttons

#### Primary Button
- **Background**: Linear gradient (135deg, #00f5d4, #00dfc9)
- **Color**: #0a0e1a
- **Border**: 1px solid #00f5d4
- **Padding**: 16px 36px
- **Border Radius**: 12px
- **Font Weight**: 700
- **Font Size**: 0.95rem
- **Box Shadow**: 0 8px 24px -6px rgba(0, 245, 212, 0.25)
- **Hover**: Scale 1.02, translateY(-2px), shadow increase
- **Animation**: Shimmer effect

#### Secondary Button
- **Background**: Transparent
- **Color**: #f8fafc
- **Border**: 1.5px solid rgba(255, 255, 255, 0.1)
- **Padding**: 16px 36px
- **Border Radius**: 12px
- **Font Weight**: 600
- **Hover**: Border color #cbd5e1, background rgba(255, 255, 255, 0.05)

#### Small Button
- **Background**: rgba(255, 255, 255, 0.03)
- **Color**: #f8fafc
- **Border**: 1.5px solid rgba(255, 255, 255, 0.1)
- **Padding**: 10px 20px
- **Border Radius**: 10px
- **Font Weight**: 600
- **Font Size**: 0.85rem

### Cards

#### Glass Card
- **Background**: Linear gradient (135deg, rgba(20, 28, 48, 0.4), rgba(15, 20, 32, 0.5))
- **Border**: 1px solid rgba(255, 255, 255, 0.06)
- **Border Radius**: 20px
- **Backdrop Filter**: blur(10px)
- **Hover**: Border glow, lift, shadow increase

#### Matte Card
- **Background**: rgba(15, 20, 32, 0.8)
- **Border**: 1px solid rgba(255, 255, 255, 0.06)
- **Border Radius**: 20px
- **Hover**: Background darken, border brighten

#### Solid Card
- **Background**: #0f1420
- **Border**: 1px solid rgba(255, 255, 255, 0.06)
- **Border Radius**: 20px
- **Hover**: Border brighten, shadow

#### Gradient Card
- **Background**: Linear gradient (135deg, rgba(0, 245, 212, 0.08), rgba(0, 245, 212, 0.02))
- **Border**: 1px solid rgba(0, 245, 212, 0.15)
- **Border Radius**: 20px
- **Hover**: Gradient intensify

### Inputs

#### Floating Label Input
- **Background**: rgba(15, 20, 32, 0.5)
- **Border**: 1.5px solid rgba(255, 255, 255, 0.1)
- **Border Radius**: 12px
- **Padding**: 16px 20px 8px
- **Font Size**: 1rem
- **Focus**: Border #00f5d4, glow rgba(0, 245, 212, 0.1)
- **Label**: Floats up on focus, color #00f5d4

---

## Animations

### Animation Library

#### Fade In
- **From**: Opacity 0
- **To**: Opacity 1
- **Duration**: 500ms
- **Easing**: ease-out

#### Slide Up
- **From**: Opacity 0, translateY(40px)
- **To**: Opacity 1, translateY(0)
- **Duration**: 600ms
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1)

#### Slide In Right
- **From**: Opacity 0, translateX(40px)
- **To**: Opacity 1, translateX(0)
- **Duration**: 600ms
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1)

#### Scale In
- **From**: Opacity 0, scale(0.95)
- **To**: Opacity 1, scale(1)
- **Duration**: 500ms
- **Easing**: ease-out

#### Float
- **Animation**: translateY(-10px)
- **Duration**: 4s
- **Easing**: ease-in-out
- **Iteration**: infinite

#### Pulse
- **Animation**: Opacity 0.5 → 1 → 0.5
- **Duration**: 2s
- **Easing**: ease-in-out
- **Iteration**: infinite

#### Shimmer
- **Animation**: Gradient translateX(-100% → 100%)
- **Duration**: 1.8s
- **Easing**: linear
- **Iteration**: infinite

### Scroll Animations

#### Reveal
- **Trigger**: Intersection with viewport
- **Animation**: Slide up
- **Delay**: 0ms per element, 100-200ms stagger for lists

#### Count Up
- **Trigger**: Intersection with viewport
- **Animation**: Number count 0 → target
- **Duration**: 2000ms
- **Easing**: ease-out

#### Line Fill
- **Trigger**: Intersection with viewport
- **Animation**: scaleX(0 → 1)
- **Duration**: 1500ms
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1)

---

## Responsive Breakpoints

| Breakpoint | Value | Usage |
|------------|-------|-------|
| Mobile | < 768px | Mobile devices |
| Tablet | 768px - 1023px | Tablets |
| Desktop | 1024px - 1399px | Small desktops |
| Large Desktop | 1400px+ | Large desktops |

---

## Accessibility

### Color Contrast
- **WCAG AA**: 4.5:1 for normal text, 3:1 for large text
- **WCAG AAA**: 7:1 for normal text, 4.5:1 for large text

### Keyboard Navigation
- **Tab Order**: Logical, left-to-right, top-to-bottom
- **Focus Visible**: 2px outline, color #00f5d4
- **Skip Links**: Skip to main content

### Screen Reader
- **ARIA Labels**: Descriptive labels for interactive elements
- **Alt Text**: Descriptive text for images
- **Live Regions**: Dynamic content updates
- **Semantic HTML**: Proper heading structure

### Reduced Motion
- **Respects**: prefers-reduced-motion media query
- **Disables**: All non-essential animations
- **Maintains**: Essential functionality

---

## Performance

### Font Loading
- **Preconnect**: fonts.googleapis.com, fonts.gstatic.com
- **Font Display**: swap
- **Subset**: Latin only

### Image Optimization
- **Format**: WebP with PNG fallback
- **Compression**: 80% quality
- **Lazy Loading**: Below-fold images
- **Responsive Images**: srcset for different sizes

### Code Splitting
- **Route-based**: Split by page
- **Component-based**: Split heavy components
- **Lazy Loading**: Non-critical components

### Caching
- **Static Assets**: 1 year cache
- **HTML**: No cache
- **API**: 5 minutes cache

---

*This specification is a living document and will be updated as the project evolves.*
