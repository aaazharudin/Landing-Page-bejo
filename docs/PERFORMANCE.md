# Performance Optimization Guide

## Optimizations Applied

### 1. Code Splitting with Dynamic Imports

Sections below the fold are lazy-loaded to reduce initial JavaScript bundle:

```tsx
// app/page.tsx
const Transformation = dynamic(() => import("@/components/sections/transformation").then(m => ({ default: m.Transformation })), {
  loading: () => <LoadingSkeleton />,
});
```

**Benefits:**
- Smaller initial JS bundle
- Faster First Contentful Paint (FCP)
- Better Lighthouse scores

### 2. Server Components by Default

All sections are Server Components except where interactivity is needed:

| Component | Type | Reason |
|-----------|------|--------|
| Hero | Server | Static content |
| ValueProposition | Server | Static content |
| Programs | Server | Static content |
| Transformation | Server | Static content |
| Testimonials | Server | Static content |
| Pricing | Server | Static content |
| CTA | Server | Static content |
| WhatsAppButton | Client | Fixed position, interactivity |

**Benefits:**
- Zero client-side JavaScript for most content
- Faster page load
- Better SEO (content rendered server-side)

### 3. Image Optimization

Use `next/image` for all images:

```tsx
import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="blur" // Better UX
/>
```

**Benefits:**
- Automatic WebP/AVIF conversion
- Responsive images with srcset
- Lazy loading by default
- Blur placeholders prevent layout shift

### 4. WhatsApp Button Optimization

```tsx
const WhatsAppButton = dynamic(() => import("@/components/ui/whatsapp-button"), {
  ssr: false, // Skip server render
});
```

**Benefits:**
- Not needed for initial render
- Reduces server HTML size
- Loads only after page is interactive

### 5. Loading Skeletons

Provide visual feedback during lazy loading:

```tsx
loading: () => (
  <div className="animate-pulse bg-zinc-900/50 rounded-2xl h-96" />
)
```

**Benefits:**
- Better perceived performance
- Prevents layout shift
- Smooth user experience

## Performance Best Practices

### DO ✅

- Use Server Components for static content
- Lazy load components below the fold
- Use `next/image` for all images
- Add `priority` to above-the-fold images
- Provide loading skeletons
- Use CSS for animations (not JS)
- Minimize client-side state

### DON'T ❌

- Make everything a Client Component
- Load all sections upfront
- Use regular `<img>` tags
- Ignore Core Web Vitals
- Add unnecessary interactivity
- Import heavy libraries

## Core Web Vitals Targets

| Metric | Target | Current Status |
|--------|--------|----------------|
| LCP (Largest Contentful Paint) | < 2.5s | ✅ Optimized |
| FID (First Input Delay) | < 100ms | ✅ Minimal JS |
| CLS (Cumulative Layout Shift) | < 0.1 | ✅ Skeletons |

## Measuring Performance

```bash
# Build and analyze
npm run build

# Lighthouse CLI
npx lighthouse http://localhost:3000 --view
```

## Next Steps for Further Optimization

1. Add font optimization with `next/font`
2. Implement ISR for static generation
3. Add service worker for offline support
4. Compress images before upload
5. Consider edge deployment with Vercel
