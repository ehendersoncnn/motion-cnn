# Technical Specification
## CNN Motion Design System

---

## Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Runtime | Node.js | LTS (20+) |
| Framework | Next.js | 16.x |
| UI | React / React DOM | 19.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animation | Framer Motion | 11.x |
| Content | @next/mdx | 16.x |
| Code highlighting | rehype-pretty-code | 0.14.x |
| Code highlighting engine | shiki | 1.x |
| Theme switching | next-themes | 0.4.x |
| Linting | ESLint + eslint-config-next | 9.x |
| Deployment | Vercel | — |

---

## Local Development

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript check without emit |

---

## Dependencies to Add

The starter template needs the following dependencies installed before building:

```bash
# Animation
npm install framer-motion

# MDX support
npm install @next/mdx @mdx-js/loader @mdx-js/react

# MDX plugins for remark/rehype
npm install remark-gfm rehype-pretty-code shiki

# Theme switching
npm install next-themes

# Type definitions
npm install -D @types/mdx
```

---

## next.config.ts Updates

```ts
import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-gfm']],
    rehypePlugins: [['rehype-pretty-code', { theme: 'one-dark-pro' }]],
  },
})

const config: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },
}

export default withMDX(config)
```

---

## TypeScript Configuration

Strict mode enabled. Path aliases configured:

```json
// tsconfig.json additions
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/content/*": ["./content/*"]
    }
  }
}
```

---

## Framer Motion Conventions

### Reduced Motion

Every interactive demo must respect `prefers-reduced-motion`:

```tsx
'use client'
import { useReducedMotion } from 'framer-motion'

export function MyDemo() {
  const shouldReduce = useReducedMotion()
  
  return (
    <motion.div
      animate={{ x: shouldReduce ? 0 : 100 }}
      transition={shouldReduce ? { duration: 0 } : { duration: 0.3 }}
    />
  )
}
```

### Token Usage

```tsx
import { duration, easing } from '@/lib/motion-tokens'

<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: duration.moderate,
    ease: easing.decelerate,
  }}
/>
```

### Variants Pattern

Use named variants for multi-step animations:

```tsx
const cardVariants = {
  collapsed: { borderRadius: 16, scale: 1 },
  expanded: { borderRadius: 0, scale: 1 },
}

<motion.div
  variants={cardVariants}
  animate={isExpanded ? 'expanded' : 'collapsed'}
  transition={{ duration: duration.slow, ease: easing.standard }}
/>
```

---

## MDX Content Model

MDX files in `content/` can use any component from `components/ui/` and `components/motion-demo/`:

```mdx
import { MotionDemo } from '@/components/motion-demo/MotionDemo'
import { CodeBlock } from '@/components/ui/CodeBlock'

## Container Transform

The container transform is CNN's primary elevation transition...

<MotionDemo label="Card → Fullscreen" token="duration.expressive">
  {/* StoryViewerDemo component */}
</MotionDemo>

<CodeBlock language="tsx">
{`<motion.div
  layoutId="card"
  transition={{ duration: duration.expressive, ease: easing.standard }}
/>`}
</CodeBlock>
```

---

## CSS Architecture

Tailwind v4 uses `@theme` in CSS (not a JS config file):

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* CNN Brand */
  --color-cnn-red: #CC0000;
  --color-cnn-red-dim: #990000;
  
  /* Surfaces */
  --color-surface: #080808;
  --color-surface-raised: #121212;
  --color-surface-overlay: #1C1C1C;
  --color-surface-card: #1A1A1A;
  
  /* Text */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: rgba(255,255,255,0.6);
  --color-text-tertiary: rgba(255,255,255,0.35);
  
  /* Borders */
  --color-border-subtle: rgba(255,255,255,0.06);
  --color-border-default: rgba(255,255,255,0.10);
  --color-border-strong: rgba(255,255,255,0.20);
  
  /* Typography scale */
  --font-display: 'CNN Sans Display', 'Georgia', serif;
  --font-sans: 'CNN Sans Text', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 1.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Bundle (JS) | < 200kb initial |
| Demo components | Lazy-loaded |

### Optimization strategies

- `next/dynamic` for all heavy demo components (Framer Motion, Lottie)
- `next/image` for all static images
- Video demos: `<video autoPlay muted loop playsInline>` — no JS required
- Prefers-reduced-motion at CSS level: `@media (prefers-reduced-motion: reduce)`

---

## Platform-Specific Token Translation

Tokens in `lib/motion-tokens.ts` are web-first but should be documented with platform equivalents:

| Token | Web (ms) | iOS (UIKit) | iOS (SwiftUI) | Android | CTV |
|-------|----------|-------------|----------------|---------|-----|
| micro | 80ms | 0.08s | `.fast` custom | 80ms | — |
| fast | 150ms | 0.15s | `.easeOut(0.15)` | 150ms | 200ms |
| moderate | 250ms | 0.25s | `.easeInOut(0.25)` | 250ms | 350ms |
| slow | 400ms | 0.4s | `.spring(...)` | 400ms | 550ms |
| expressive | 600ms | 0.6s | `.spring(...)` | 600ms | 700ms |

---

## Environment Variables

```bash
# .env.local (never commit)
# Add as needed — none required for v1
```

---

*Bump versions and sections when dependencies change.*
