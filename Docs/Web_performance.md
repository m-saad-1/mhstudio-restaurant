Optimize the entire website for maximum real-world performance while maintaining the existing UI/UX and visual quality. The goal is to achieve a Lighthouse Performance score of 95–100 and ensure the homepage becomes interactive within 2–3 seconds on a standard 4G connection.

Do not change the design or functionality. Focus entirely on performance, optimization, and loading strategies.

Implement the following optimizations:

### Build Optimization
- Enable production builds only.
- Use Vite production optimizations.
- Enable tree shaking.
- Remove unused JavaScript and CSS.
- Split vendor and application bundles.
- Code split every page using lazy loading.
- Use dynamic imports for non-critical sections.
- Minify JavaScript, CSS, and HTML.
- Compress assets with Brotli/Gzip.

### React Optimization
- Lazy load routes using React.lazy and Suspense.
- Lazy load heavy components below the fold.
- Memoize expensive components with React.memo.
- Use useMemo and useCallback only where beneficial.
- Prevent unnecessary re-renders.
- Remove redundant state updates.
- Optimize Context usage.

### Images
- Convert all images to WebP or AVIF.
- Compress every image without visible quality loss.
- Serve responsive image sizes.
- Lazy load all images except the hero image.
- Preload the hero image.
- Use blur placeholders.
- Prevent layout shift using width/height or aspect-ratio.
- Do not load images outside the viewport until needed.

### Fonts
- Self-host fonts where possible.
- Load only required font weights.
- Use font-display: swap.
- Preload critical fonts.
- Remove unused font families.

### CSS
- Remove unused CSS.
- Keep CSS modular.
- Avoid heavy box shadows.
- Optimize gradients and blur effects.
- Reduce excessive backdrop-filter usage.
- Avoid expensive CSS selectors.
- Use GPU-friendly transforms.

### JavaScript
- Defer non-critical scripts.
- Load analytics after page interaction or idle.
- Remove unused libraries.
- Replace large dependencies with lighter alternatives where possible.
- Eliminate duplicate code.

### Animations
- Use only transform and opacity animations.
- Avoid animating width, height, top, left, margin, or padding.
- Use requestAnimationFrame when needed.
- Pause animations outside the viewport.
- Respect prefers-reduced-motion.

### Network Optimization
- Preconnect to required external domains.
- DNS prefetch external resources.
- Preload critical assets.
- Lazy load third-party scripts.
- Cache static assets aggressively.

### SEO & Metadata
- Generate sitemap.xml.
- Generate robots.txt.
- Optimize Open Graph images.
- Optimize meta tags.
- Use semantic HTML.

### Accessibility
- Prevent layout shifts.
- Maintain accessibility while optimizing.
- Ensure keyboard navigation remains unaffected.

### Loading Strategy
- Render above-the-fold content first.
- Delay below-the-fold sections.
- Prioritize Hero section.
- Lazy load Portfolio, FAQ, Testimonials, Footer decorations, and other secondary sections.

### Bundle Optimization
- Analyze bundle size.
- Remove dead code.
- Split vendor chunks.
- Keep initial JavaScript bundle as small as possible.

### Caching
- Enable immutable caching for static assets.
- Use long-term cache headers.
- Cache fonts and images.
- Enable service worker only if it improves UX without introducing stale content issues.

### Deployment
- Optimize for Netlify.
- Enable Brotli compression.
- Enable HTTP/2 or HTTP/3 where available.
- Use CDN delivery for all static assets.

### Validation
After optimization:
- Run Lighthouse.
- Identify remaining bottlenecks.
- Continue optimizing until the website consistently reaches 95–100 Performance while preserving the existing design and functionality