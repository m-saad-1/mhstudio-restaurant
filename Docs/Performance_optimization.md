# Prompt: Fix Lighthouse Performance, Accessibility, SEO & Agentic Browsing Issues for mhstudios.online (Next.js)

You are working on a Next.js site (`mhstudios.online`) that uses `next/image` (`data-nimg` attributes visible in DOM), Tailwind-style utility classes, and Google Tag Manager. Two Lighthouse audits were run:

- **Mobile (Moto G Power, Slow 4G):** Performance 74, Accessibility 96, Best Practices 100, SEO 92, Agentic Browsing 1/2
- **Desktop (Custom throttling):** Performance 97, Accessibility 100, Best Practices 100, SEO 92, Agentic Browsing 2/2

Implement every fix below, in the priority order given. Do not skip any item — apply all of them across the codebase, not just to the first matching instance.

---

## Priority 1 — LCP image not discoverable/prioritized (Mobile Performance 74 → target 90+)

**Problem:** The hero "device showcase" image is the LCP element (4.5s LCP on mobile). Lighthouse's LCP Request Discovery insight shows it is not using `fetchpriority="high"` and is not preloaded/discoverable immediately in the initial HTML, even though it is technically not lazy-loaded.

**Fix:**
- Find the `<Image>` component rendering the "Device showcase featuring MhStudio website mockups on laptop, tablet, and phone" image.
- Add the `priority` prop (Next.js `<Image priority />`) so Next.js automatically:
  - Removes `loading="lazy"`
  - Adds `fetchpriority="high"`
  - Emits a `<link rel="preload">` for it in `<head>`
- Only apply `priority` to this single above-the-fold hero image. Do NOT add `priority` to any other image (chatbot interface, work portfolio previews, etc.) — over-prioritizing defeats the purpose and can hurt LCP for competing requests.

```jsx
<Image
  src="/_next/static/media/device_showcase.avif"
  alt="Device showcase featuring MhStudio website mockups on laptop, tablet, and phone"
  width={2048}
  height={855}
  priority
  fetchPriority="high"
  sizes="(max-width: 640px) 96vw, (max-width: 1024px) 92vw, 1100px"
/>
```

---

## Priority 2 — Oversized/unresponsive images (53–84 KiB wasted, both mobile & desktop)

**Problem:** Multiple images are served far larger than their rendered display size because the `sizes` attribute doesn't match actual rendered container widths.

| Image | Served | Rendered | Wasted |
|---|---|---|---|
| `chatbot.avif` (AI Receptionist Interface) — mobile | 750×1118 | 312×465 | 31.8 KiB |
| `device_showcase` — mobile | full | 380×159 | 21.2 KiB |
| `chatbot.avif` — desktop | 750×1118 | 400×597 | 27.5 KiB |
| `device_showcase` — desktop | 1200×501 | 920×384 | 21.3 KiB |
| `thecheesecakefactory-new.avif` — desktop | 614×384 | 398×239 | 18.1 KiB |
| `momofuku-new.avif` — desktop | 614×384 | 398×239 | 17.1 KiB |

**Fix:**
1. For each `<Image>` above, correct the `sizes` prop to reflect the actual rendered container width instead of generic values like `100vw` or `50vw`. Example for the chatbot image:
   ```jsx
   <Image
     src="/images/chatbot.avif"
     alt="AI Receptionist Interface"
     fill
     sizes="(max-width: 1024px) 45vw, 400px"
   />
   ```
2. For the three-column work portfolio grid (Cheesecake Factory, Momofuku, and similar cards), set:
   ```jsx
   sizes="(max-width: 1024px) 100vw, 33vw"
   ```
   only if the column genuinely spans that width at each breakpoint — otherwise tighten further to the true rendered width (e.g. `398px` on desktop).
3. Update `next.config.js` to add finer-grained `deviceSizes`/`imageSizes` steps so Next.js doesn't have to jump to the next largest bucket (e.g. straight to 750px when 400–420px would suffice):
   ```js
   // next.config.js
   module.exports = {
     images: {
       deviceSizes: [320, 420, 640, 768, 1024, 1200, 1920],
       imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 400],
     },
   };
   ```
4. Keep serving AVIF (already in use) — do not regress format.

---

## Priority 3 — Mobile menu accessibility & Agentic Browsing failure (Accessibility 96 → 100, Agentic Browsing 1/2 → 2/2)

**Problem:** When the mobile nav menu is closed, its container has `aria-hidden="true"`, but it still contains focusable elements: the "Close menu" button and links (`Work`, `Services`, `Process`, `About`, `Pricing`, `Contact`, `Get Free Demo`, `Book Free Consultation`). This breaks the accessibility tree ("Accessibility tree is not well-formed" — the same root cause fails the Agentic Browsing category on mobile) and traps assistive-tech/keyboard focus inside a hidden panel.

**Fix — use the native `inert` attribute so hidden state, tab order, and AT exposure are handled together in one place:**
```jsx
<div
  className="fixed inset-0 z-[100] lg:hidden pointer-events-none"
  aria-hidden={!menuOpen}
  {...(!menuOpen ? { inert: '' } : {})}
>
  <button type="button" aria-label="Close menu" onClick={closeMenu}>
    Close menu
  </button>

  <a href="/work">Work</a>
  <a href="/services">Services</a>
  <a href="/process">Process</a>
  <a href="/about">About</a>
  <a href="/pricing">Pricing</a>
  <a href="/contact">Contact</a>
  <a href="/demo">Get Free Demo</a>
  <a href="/consultation">Book Free Consultation</a>
</div>
```
If React's typing doesn't accept `inert` directly, cast it or use a plain DOM attribute spread (`{...{inert: !menuOpen ? '' : undefined}}`), or fall back to manually setting `tabIndex={menuOpen ? 0 : -1}` on every focusable child AND keeping `aria-hidden` in sync — but `inert` is strongly preferred since it fixes both audits at once and prevents future regressions if new interactive children are added to the menu.

Also ensure `pointer-events-none` is only applied when the menu is closed, and removed when open, so the menu remains clickable/tappable when visible.

---

## Priority 4 — SEO: non-descriptive "Learn More" links (SEO 92 → 100, both mobile & desktop)

**Problem:** Six links pointing to `/services` all use the identical, non-descriptive text "Learn More." This fails Lighthouse's descriptive-link-text audit and hurts both SEO and screen-reader users navigating by link list.

**Fix:** Give each service card's link unique, descriptive accessible text tied to that specific service. Apply to all six instances — find every service card component and update it, e.g.:
```jsx
<a href="/services">
  Learn more about {service.name}
</a>
```
or, if the visible "Learn More" text must stay short for design reasons, add a visually-hidden descriptive suffix instead of changing the visible label:
```jsx
<a href="/services">
  Learn More
  <span className="sr-only"> about {service.name}</span>
</a>
```
Do this for every one of the six service cards (e.g. AI Receptionist, and the other five services listed on the page) — not just one.

---

## Priority 5 — Render-blocking CSS (160–286ms delay, both mobile & desktop)

**Problem:** `984e98118de1fa3c.css` (13.2 KiB) blocks initial render and is the deepest node in the critical request chain (max critical path latency 286ms on desktop).

**Fix:**
1. Extract and inline critical above-the-fold CSS directly in `<head>` (many CSS-in-JS/Tailwind setups support critical CSS extraction plugins — evaluate `beasties`/`critters` or Next.js's built-in optimizeCss experimental flag).
2. Defer non-critical CSS loading.
3. Audit the Tailwind `content` config to ensure unused utility classes are actually purged from the production build — verify the file's real size is fully justified by classes actually used.

---

## Priority 6 — Legacy JavaScript / unnecessary polyfills (12 KiB wasted, both mobile & desktop)

**Problem:** `794-c9f1c83907e70838.js` includes polyfills/transforms for features all modern (Baseline) browsers already support: `Array.prototype.at`, `Array.prototype.flat`, `Array.prototype.flatMap`, `Object.fromEntries`, `Object.hasOwn`, `String.prototype.trimEnd`, `String.prototype.trimStart`.

**Fix:**
1. Add or correct a `browserslist` entry in `package.json`:
   ```json
   {
     "browserslist": [
       "defaults",
       "not IE 11",
       "maintained node versions"
     ]
   }
   ```
2. Check for any `.babelrc`/custom Babel config forcing older targets or including `core-js` — remove/adjust if present, since Next.js's SWC compiler should already target modern output when `browserslist` is set correctly.
3. Audit dependencies for ones that ship their own polyfills regardless of target (common with older UI kits) and replace/update them if found.
4. Rebuild and re-run Lighthouse to confirm the "Legacy JavaScript" insight (Est savings ~12 KiB) is resolved.

---

## Priority 7 — Unused JavaScript (115 KiB, primarily desktop-detailed)

**Problem:**
- Google Tag Manager (`gtag/js?id=G-G1NMQYD8EJ`): 159.5 KiB loaded, 67.2 KiB unused.
- First-party chunks `4bd1b696-215e5051988c3dde.js` (62.6 KiB) and `794-c9f1c83907e70838.js` (59.0 KiB): ~47.5 KiB combined unused.

**Fix:**
1. **GTM:** Load it lazily instead of eagerly on first paint:
   ```jsx
   import Script from 'next/script';

   <Script
     src="https://www.googletagmanager.com/gtag/js?id=G-G1NMQYD8EJ"
     strategy="lazyOnload"
   />
   ```
   Consider gating it further behind user interaction or consent-management-triggered load if a cookie/consent banner exists.
2. **First-party chunks:** Identify what's inside `4bd1b696-...js` and `794-...js` using `next build` bundle analysis (`@next/bundle-analyzer`). For any component/library only needed on specific routes or after interaction (modals, animation libraries, chart libraries, etc.), convert to dynamic import:
   ```jsx
   import dynamic from 'next/dynamic';
   const HeavyComponent = dynamic(() => import('./HeavyComponent'), { ssr: false });
   ```
3. Check for barrel-file imports (`import { X } from 'some-large-library'`) that pull in the entire library — switch to direct submodule imports where the library supports it.

---

## Priority 8 — Long main-thread tasks, forced reflow, non-composited animation

**Problem:**
- 3–4 long main-thread tasks detected (mobile has 4, desktop has 3).
- A forced reflow totaling 93ms on desktop, source unattributed.
- 1 non-composited animated element found on both runs.

**Fix:**
1. **Long tasks:** Profile with Chrome DevTools Performance panel to find the exact culprit (commonly large hydration payloads or synchronous work inside `useEffect`/`useLayoutEffect` on mount). Split heavy client components using `next/dynamic(() => import(...), { ssr: false })` and consider deferring non-critical hydration.
2. **Forced reflow:** Audit any code (including third-party animation/scroll libraries) that reads layout geometry (`offsetWidth`, `offsetHeight`, `getBoundingClientRect()`) immediately after a DOM/style mutation. Batch all reads before all writes ("read-then-write" pattern), or replace manual measurement with `ResizeObserver`/`IntersectionObserver`.
3. **Non-composited animation:** Find the animated element and ensure it only animates compositor-friendly properties — `transform` and `opacity` — instead of properties like `top`, `left`, `width`, or `height`, which force layout/paint on every frame.

---

## Verification checklist

After implementing all fixes above, re-run Lighthouse for both Mobile and Desktop and confirm:

- [ ] Mobile Performance ≥ 90 (from 74)
- [ ] Desktop Performance stays ≥ 97 or improves
- [ ] Mobile Accessibility = 100 (from 96)
- [ ] Desktop Accessibility stays 100
- [ ] Best Practices stays 100 (both)
- [ ] SEO = 100 on both (from 92) — verify all 6 `/services` links now have unique descriptive text
- [ ] Agentic Browsing = 2/2 on both (from 1/2 on mobile) — verify "Accessibility tree is not well-formed" no longer appears
- [ ] LCP Request Discovery insight no longer flags the hero image
- [ ] Improve Image Delivery insight shows near-zero estimated savings
- [ ] Legacy JavaScript insight no longer lists polyfills for `Array.prototype.at`/`flat`/`flatMap`, `Object.fromEntries`, `Object.hasOwn`, `String.prototype.trimStart`/`trimEnd`
- [ ] Reduce Unused JavaScript savings drop meaningfully from 115 KiB
- [ ] No forced reflow or non-composited animation warnings remain