# Website Performance & Optimization Requirements

## Objective

Optimize the entire website for production deployment on **Vercel**.

The goal is to achieve:

- Lighthouse Performance: 95–100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

The homepage should become interactive within **2–3 seconds** on a standard 4G connection while preserving the existing premium UI/UX.

---

# General Rules

- Do NOT change the design.
- Do NOT remove animations unless necessary.
- Preserve all functionality.
- Focus only on optimization.
- Every optimization should improve real-world performance, not just Lighthouse scores.

---

# Build Optimization

- Enable production optimizations.
- Enable tree shaking.
- Remove dead code.
- Remove unused CSS.
- Remove unused JavaScript.
- Split vendor bundles.
- Minify JavaScript.
- Minify CSS.
- Minify HTML.
- Enable Brotli compression (handled by Vercel).
- Keep the initial JS bundle as small as possible.

---

# Next.js Optimization

- Use App Router best practices.
- Prefer React Server Components whenever possible.
- Only use Client Components when required.
- Use Static Rendering for every page that does not require dynamic data.
- Use Incremental Static Regeneration only if needed.
- Use Partial Prerendering where appropriate.
- Use Suspense boundaries for lazy-loaded sections.

---

# React Optimization

- Remove unnecessary React.memo() from Server Components.
- Only memoize Client Components when beneficial.
- Remove unnecessary useMemo and useCallback.
- Avoid unnecessary Context re-renders.
- Prevent duplicate renders.
- Eliminate unnecessary state updates.

---

# Code Splitting

Lazy-load all non-critical sections.

Examples:

- Portfolio
- FAQ
- Testimonials
- Pricing
- Contact Form
- Portfolio Modal
- Statistics
- Footer Effects

Do NOT lazy-load:

- Navbar
- Hero
- Hero CTA
- Critical Layout

---

# Image Optimization

Use only local images.

Store every portfolio image inside:

public/images/

Convert every image to:

- WebP
- AVIF (where practical)

Never use PNG or JPG unless absolutely necessary.

Requirements:

- Responsive image sizes
- Blur placeholders
- Width & height specified
- Prevent layout shifts
- Hero image preloaded
- Lazy-load all below-the-fold images
- Compress images without visible quality loss

Target sizes:

Hero image:
<200 KB

Portfolio images:
100–250 KB

Icons:
SVG only

---

# next/image

Use next/image everywhere.

Enable:

- AVIF
- WebP
- Responsive sizing
- Proper priority usage
- Lazy loading

---

# Fonts

- Self-host fonts where possible.
- Use only one font family.
- Maximum 4 font weights.
- Preload critical fonts.
- Use font-display: swap.

---

# CSS Optimization

- Remove unused CSS.
- Avoid expensive selectors.
- Reduce excessive backdrop-filter usage.
- Limit blur effects.
- Limit glow effects.
- Use transform instead of layout animations.
- Keep GPU-friendly animations.

---

# Animations

Animate only:

- transform
- opacity

Never animate:

- width
- height
- top
- left
- margin
- padding

Respect prefers-reduced-motion.

Pause animations outside the viewport.

---

# JavaScript

- Remove unused libraries.
- Replace heavy dependencies with lightweight alternatives.
- Defer third-party scripts.
- Load Google Analytics after hydration.
- Avoid blocking scripts.
- Use dynamic imports only for Client Components.

---

# Loading Strategy

Render immediately:

- Navbar
- Hero
- CTA
- Hero image

Load afterwards:

- Services
- Portfolio
- Technologies
- Industries
- Pricing
- FAQ
- Footer

---

# Caching

Configure aggressive caching.

Static assets:

Cache-Control:
public,max-age=31536000,immutable

Fonts:
Long-term cache

Images:
Long-term cache

---

# Metadata

Generate:

- sitemap.xml
- robots.txt
- manifest.webmanifest

Optimize:

- Open Graph
- Twitter Cards
- Canonical URLs

---

# SEO

Every page should include:

- Unique title
- Meta description
- Canonical URL
- Open Graph image
- Structured data
- Semantic HTML

---

# Accessibility

Maintain:

- WCAG AA
- Keyboard navigation
- Proper heading hierarchy
- Visible focus states
- Alt text
- ARIA where required

---

# Google Analytics

Integrate Google Analytics 4.
(<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-G1NMQYD8EJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-G1NMQYD8EJ');
</script><!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-G1NMQYD8EJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-G1NMQYD8EJ');
</script>)

Requirements:

- Load using @next/third-parties/google
- Load after hydration
- Do not block rendering
- Track page views automatically
- Track CTA clicks
- Track Contact Form submissions
- Track Portfolio button clicks

---

# DNS Optimization

If any external domains are used:

Add:

- dns-prefetch
- preconnect

Examples:

fonts.googleapis.com
fonts.gstatic.com
www.googletagmanager.com

Do NOT use unnecessary third-party services.

---

# Bundle Analysis

Analyze production bundle.

Remove:

- duplicate packages
- dead code
- oversized dependencies

Keep initial bundle under:

200 KB (gzipped where practical)

---

# Vercel Optimization

Optimize specifically for Vercel.

Requirements:

- Production deployment
- Edge caching
- Image Optimization
- Automatic compression
- HTTP/2
- HTTP/3
- Static assets served from CDN
- Correct cache headers

---

# Performance Targets

Performance:
95–100

Accessibility:
100

Best Practices:
100

SEO:
100

FCP:
<1.2 s

LCP:
<2.0 s

CLS:
<0.05

TBT:
<100 ms

TTI:
<2.5 s

Homepage interactive:
<3 s

---

# Final Validation

Before completion:

- Run Lighthouse.
- Run PageSpeed Insights.
- Run Bundle Analyzer.
- Identify bottlenecks.
- Continue optimizing until all targets are met without degrading the design or functionality.

