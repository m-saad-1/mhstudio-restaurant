# MHStudio UI/UX Design System (Complete Styling & Design Specification)

This document is **not about code**. It is the complete design specification for the entire website. It defines how every page, section, component, interaction, and responsive behavior should look and feel.

---

# 1. Design Philosophy

MHStudio should **not** feel like a freelancer portfolio.

It should feel like a **premium digital agency**.

When someone lands on the homepage, they should immediately think:

> "These people know what they're doing."

The design should communicate:

- Premium
- Minimal
- Confident
- Modern
- Professional
- Fast
- High-end
- Technology-driven

Avoid anything that feels:

- Cheap
- Colorful
- Template-like
- Cartoonish
- Over-animated
- Corporate 2018

---

# 2. Overall Design Style

The overall visual language should combine elements from:

- Modern SaaS
- AI Platforms
- Premium Startup Websites
- Apple simplicity
- Vercel minimalism
- Linear elegance
- Framer smoothness

Use your provided style as the foundation:

- Dark UI
- Premium Glow
- Soft Borders
- Glassmorphism (very subtle)
- Large Typography
- Rounded Components
- Spacious Layout
- Smooth Animations

---

# 3. Color System

## Background

Never use pure black.

```
Primary Background

#09090B
(zinc-950)

Secondary Background

#111113

Section Background

#18181B

Card Background

rgba(24,24,27,0.6)

Navigation

rgba(9,9,11,0.75)
```

---

## Primary Accent

Amber/Gold

```
Primary

#F59E0B

Hover

#FBBF24

Dark

#D97706

Glow

rgba(245,158,11,0.18)
```

---

## Text Colors

Heading

```
#FAFAFA
```

Body

```
#D4D4D8
```

Muted

```
#A1A1AA
```

Disabled

```
#71717A
```

---

## Borders

Never use visible borders.

Instead

```
border-zinc-800/50
```

or

```
rgba(255,255,255,0.06)
```

---

# 4. Typography

Font

```
Inter

or

Geist
```

Never use more than one font family.

---

## Heading Scale

Hero

64–72px Desktop

42px Tablet

34px Mobile

---

H2

48px

---

H3

34px

---

H4

26px

---

Paragraph

18px

---

Small Text

15px

---

Caption

13px

---

Line Height

```
Headings

110%

Paragraph

170%
```

---

# 5. Layout

Container Width

```
1440px
```

Content Width

```
1280px
```

Text Width

```
700px maximum
```

Never allow text to stretch across the page.

---

Section Padding

Desktop

```
120px top

120px bottom
```

Tablet

```
90px
```

Mobile

```
70px
```

---

Horizontal Padding

Desktop

```
40px
```

Tablet

```
30px
```

Mobile

```
20px
```

---

# 6. Background Design

Background is never flat.

Instead combine:

Large radial glows

Very subtle grid

Noise texture

Gradient fade

Example

```
Top Left

Amber Glow

Bottom Right

Amber Glow

Very dark background

Tiny grid

Soft noise
```

Opacity

Only

5–12%

Never stronger.

---

# 7. Hero Section

Should occupy nearly full screen.

Height

```
90vh
```

---

Layout

Left

Headline

Description

Buttons

Stats

---

Right

Laptop Mockup

Floating Cards

Browser Window

Mobile Preview

Dashboard

---

Background

Huge glowing radial circle.

Blur

120px+

---

Animations

Laptop

Slow floating

Icons

Fade

Cards

Parallax

Glow

Breathing animation

---

# 8. Navigation

Sticky

Transparent

Blur

```
backdrop-blur-xl
```

After scrolling

Background appears.

Navigation height

```
72px
```

Logo

Left

Menu

Center

CTA Button

Right

---

Mobile

Logo

Hamburger

Fullscreen slide menu

---

Animation

300ms

---

# 9. Buttons

Primary

Amber

Rounded Full

Shadow Glow

Height

52px

---

Hover

Lift

Glow increases

Scale

102%

---

Secondary

Transparent

Border

Hover

Background fade

---

Icon Buttons

Circle

48px

---

# 10. Cards

Every card should have

```
Rounded

18px radius

Soft border

Glass effect

Blur

Subtle glow
```

Hover

```
TranslateY(-6px)

Glow

Border becomes brighter

Shadow increases
```

Never use hard shadows.

---

# 11. Portfolio Cards

Very important.

Each project card should include

Large screenshot

Floating Browser Window

Category Badge

Technology Badge

Visit Button

Case Study Button

---

Hover

Screenshot zoom

Glow

Card lifts

Buttons slide up

---

Grid

Desktop

3 columns

Tablet

2

Mobile

1

---

# 12. Bento Grid

Use Bento layout throughout.

Instead of equal cards.

Create

Large

Medium

Small

Feature cards.

Like modern AI websites.

---

Example

```
Large Card

Medium Card

Medium Card

Small

Small

Large
```

---

# 13. Service Cards

Icon

Large title

Description

Feature list

Arrow

Hover

Glow

Rotate icon

Lift

---

# 14. Icons

Use

Lucide Icons

Only.

Style

Outline

2px stroke

Amber accent

Contained inside

Rounded square

---

# 15. Images

Never use stock images.

Instead

Website mockups

Browser windows

Phone mockups

Laptop mockups

Dashboard previews

3D floating screens

---

All images

Rounded

Soft shadow

Glow

---

# 16. Animations

Motion should be subtle.

Maximum duration

```
0.4s
```

Use

Fade

Slide

Scale

Blur reveal

Float

Glow pulse

Mouse parallax

Never bounce.

---

# 17. Scroll Animations

Every section

Fade

+

Move up

30px

Duration

0.6

Delay

Stagger

---

Cards

Cascade

Left

Right

Scale

---

# 18. Glow Effects

This is the signature.

Behind

Hero

Portfolio

Pricing

CTA

Use

```
Absolute

Rounded-full

Blur

100-180px

Opacity

10%
```

Never glow everything.

Only focal points.

---

# 19. Forms

Rounded

16px

Dark background

Border

Placeholder

Muted

Focus

Amber border

Glow

Validation

Smooth animation

---

# 20. Footer

Large

Dark

Multiple columns

Newsletter optional

Huge CTA above footer

Large logo

Socials

Minimal

---

# 21. Mobile Navigation

Fullscreen

Blur background

Slide animation

Large menu

Large CTA

No dropdowns.

---

# 22. Mobile Hero

Desktop

Split layout

↓

Tablet

Stacked

↓

Mobile

Everything centered.

---

Order

Heading

Description

Buttons

Stats

Image

---

Buttons

Full width

Stack vertically

---

# 23. Responsive Breakpoints

```
Mobile

320–639

Tablet

640–1023

Laptop

1024–1439

Desktop

1440+
```

---

# 24. Mobile Spacing

Reduce

Not remove.

Example

Desktop

120px

↓

Tablet

90px

↓

Mobile

70px

---

# 25. Responsive Typography

Hero

Desktop

70

↓

Tablet

50

↓

Mobile

34

---

Paragraph

Desktop

18

↓

Mobile

16

---

# 26. Responsive Grid

Desktop

4

↓

Tablet

2

↓

Mobile

1

---

Portfolio

Desktop

3

↓

Tablet

2

↓

Mobile

1

---

Stats

Desktop

4

↓

Tablet

2

↓

Mobile

2

---

# 27. Responsive Cards

Never fixed height.

Content determines height.

Images

Aspect ratio

16:10

Always.

---

# 28. Scrollbar

Thin

Dark

Thumb

Amber

Rounded

---

# 29. Cursor (Optional)

Desktop only.

Small amber circle

Follower

Expand on buttons

Hide on mobile.

---

# 30. Micro-interactions

Buttons

Glow

Cards

Lift

Links

Underline animation

Icons

Rotate

Images

Zoom

Navbar

Blur

Counters

Animate

Progress bars

Fill

Testimonials

Slide

FAQ

Accordion

---

# 31. Performance Rules

Never autoplay videos.

Lazy load images.

Blur placeholders.

SVG icons.

Optimize animations to 60 FPS.

Use GPU transforms (`transform`, `opacity`) instead of animating layout properties.

---

# 32. Accessibility

- Maintain WCAG AA contrast (≥ 4.5:1 for body text).
- Visible keyboard focus with a subtle amber outline.
- Respect `prefers-reduced-motion` by disabling non-essential animations.
- Minimum touch target size: **44×44 px**.
- Use semantic landmarks (`header`, `main`, `section`, `footer`) and proper heading hierarchy.
- Provide descriptive alt text for every portfolio image.

---

# 33. Visual Hierarchy

Every section should follow the same rhythm:

1. Small eyebrow label (uppercase, muted amber).
2. Large, bold heading.
3. Supporting paragraph (max 2–3 lines).
4. Main content (cards, grid, timeline, etc.).
5. Clear call-to-action.

This consistency makes the site feel cohesive and premium.

---

# 34. Portfolio Presentation

Since your work is the primary selling point, every portfolio item should feel like a product launch rather than a simple thumbnail.

Include:

- Large browser mockup.
- Desktop and mobile previews.
- Industry badge (Restaurant, Dental, Gym, etc.).
- Tech stack chips.
- Feature highlights (Booking, Contact Form, Maps, Responsive, SEO).
- Optional metrics such as performance score if available.
- "Live Demo" and "Case Study" actions.

Hover interactions should reveal additional details without overwhelming the user.

---

# 35. Premium Details That Differentiate MHStudio

Small details create a high-end impression:

- Soft gradient dividers between major sections.
- Animated number counters that trigger only once.
- Slight tilt effect on featured mockups (desktop only).
- Section transitions with subtle fade masks rather than abrupt edges.
- Glow reflections on primary CTA buttons.
- Consistent border radius across the entire site (16–20 px).
- Uniform icon container sizes.
- Consistent spacing scale (8 px system: 8, 16, 24, 32, 48, 64, 96, 120).

---

# 36. Design Principles (Non-Negotiable)

Throughout the project, follow these rules:

- **Whitespace over decoration.** Empty space is a premium design element.
- **Consistency over novelty.** Reuse component patterns instead of introducing new styles on every section.
- **Motion with purpose.** Every animation should support understanding or feedback.
- **One accent color.** Amber is the signature; avoid introducing competing colors except for semantic states (success, warning, error).
- **Readable before impressive.** Strong typography and hierarchy matter more than visual effects.
- **Performance is part of the design.** Fast loading, optimized assets, and smooth interactions are essential to the user experience.

Following these guidelines will produce a site that feels closer to premium agencies such as Vercel, Linear, Framer, and modern AI platforms rather than a generic freelancer portfolio, while remaining focused on converting visitors into clients.