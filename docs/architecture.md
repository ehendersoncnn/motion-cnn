# Architecture
## CNN Motion Design System — Documentation Platform

---

## Runtime Model

- **Framework:** Next.js 16 App Router (`app/`)
- **Rendering:** React Server Components by default; `"use client"` for Framer Motion interactive demos
- **Styling:** Tailwind CSS v4 (CSS-first config via `app/globals.css`)
- **Content:** MDX via `@next/mdx` — long-form docs authored as `.mdx`, rendered in Next.js pages
- **Animation:** Framer Motion for all interactive demos
- **Deployment:** Vercel (edge-optimized, preview deployments per PR)

---

## Repository Layout

```
motion-cnn/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout: nav, theme, fonts
│   ├── page.tsx                  # Homepage (motion manifesto + hero demos)
│   ├── globals.css               # CSS vars: CNN tokens, Tailwind base
│   ├── foundations/page.tsx      # What motion is at CNN
│   ├── principles/page.tsx       # 5 core motion principles
│   ├── tokens/page.tsx           # Token reference with live demos
│   ├── product-motion/page.tsx   # In-product motion patterns
│   ├── transitions/page.tsx      # Container transforms, page transitions
│   ├── gesture-systems/page.tsx  # Gesture-driven interactions
│   ├── spatial-navigation/page.tsx # Spatial storytelling + nav logic
│   ├── expressive-motion/page.tsx # Brand-level animation
│   ├── accessibility/page.tsx    # Reduced motion, WCAG
│   ├── platform/page.tsx         # iOS, Android, Web, CTV guidance
│   ├── implementation/page.tsx   # Engineering handoff, code patterns
│   └── resources/page.tsx        # Tools, references, contribution guide
│
├── components/
│   ├── nav/
│   │   ├── Sidebar.tsx           # Left nav with section links
│   │   └── TopBar.tsx            # Mobile nav + breadcrumb
│   ├── motion-demo/
│   │   ├── MotionDemo.tsx        # Demo wrapper (label, controls, canvas)
│   │   ├── EasingVisualizer.tsx  # Interactive easing curve viewer
│   │   ├── DurationDemo.tsx      # Side-by-side duration comparison
│   │   ├── TokenTable.tsx        # Token value table with copy
│   │   └── PlayPauseDemo.tsx     # Togglable animation demo
│   ├── ui/
│   │   ├── PageHeader.tsx        # Section page header (title + subtitle)
│   │   ├── SectionBlock.tsx      # Content section wrapper
│   │   ├── CodeBlock.tsx         # Syntax-highlighted code examples
│   │   ├── PlatformTabs.tsx      # iOS/Android/Web/CTV tab switcher
│   │   └── PrincipleCard.tsx     # Motion principle display card
│   └── catch-up/
│       ├── StoryViewer.tsx       # Full story viewer demo (Framer Motion)
│       ├── CardCarousel.tsx      # Catch Up card carousel demo
│       ├── ProgressBar.tsx       # Story progress bar demo
│       └── GestureDemo.tsx       # Long press / swipe demos
│
├── content/                      # MDX source files
│   ├── foundations.mdx
│   ├── principles.mdx
│   ├── tokens.mdx
│   ├── product-motion.mdx
│   ├── transitions.mdx
│   ├── gesture-systems.mdx
│   ├── spatial-navigation.mdx
│   ├── expressive-motion.mdx
│   ├── accessibility.mdx
│   ├── platform-ios.mdx
│   ├── platform-android.mdx
│   ├── platform-web.mdx
│   ├── platform-ctv.mdx
│   ├── implementation.mdx
│   └── resources.mdx
│
├── lib/
│   ├── motion-tokens.ts          # Single source of truth for all tokens
│   └── navigation.ts             # Site nav structure (drives Sidebar)
│
├── public/
│   ├── videos/                   # MP4 motion demos (looping)
│   └── icons/                    # CNN UI icons
│
└── docs/
    ├── prd.md
    ├── architecture.md           # This file
    ├── tech-spec.md
    ├── tasks.md
    ├── sitemap.md
    └── contributing.md
```

---

## Data Flow

### Static Content (MDX)
```
content/*.mdx → @next/mdx → app/[section]/page.tsx → Server Component → HTML
```

### Interactive Demos
```
lib/motion-tokens.ts → components/motion-demo/* → "use client" Component → Framer Motion → Browser
```

### Navigation
```
lib/navigation.ts → Sidebar.tsx (Server) → rendered nav tree
```

### Tokens
```
lib/motion-tokens.ts → TypeScript exports → Component props → Framer Motion transition objects
lib/motion-tokens.ts → app/tokens/page.tsx → TokenTable component (visible reference)
```

---

## Motion Token Architecture

Tokens live in `lib/motion-tokens.ts` as typed TypeScript objects. They are consumed directly by Framer Motion and referenced in documentation.

```ts
// lib/motion-tokens.ts (simplified)
export const duration = {
  micro:      0.08,   // icon state, toggle feedback
  fast:       0.15,   // tooltip, hover feedback
  moderate:   0.25,   // modal open, dropdown
  slow:       0.40,   // page transition, sheet
  expressive: 0.60,   // story viewer entry, hero expand
}

export const easing = {
  standard:    [0.4, 0.0, 0.2, 1.0],   // most UI motion
  decelerate:  [0.0, 0.0, 0.2, 1.0],   // enter / arrive
  accelerate:  [0.4, 0.0, 1.0, 1.0],   // exit / depart
  expressive:  [0.34, 1.56, 0.64, 1.0], // bounce, brand moments
  linear:      [0.0, 0.0, 1.0, 1.0],    // progress indicators
}
```

---

## Page Template Pattern

Every section page follows the same structure:

```tsx
// app/[section]/page.tsx
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionBlock } from '@/components/ui/SectionBlock'
import { MotionDemo } from '@/components/motion-demo/MotionDemo'

export const metadata = { title: 'Section Title — CNN Motion' }

export default function SectionPage() {
  return (
    <main>
      <PageHeader title="Section Title" subtitle="One-line description" />
      
      <SectionBlock title="Subsection" description="...">
        <MotionDemo label="Demo name">
          {/* Framer Motion demo component */}
        </MotionDemo>
      </SectionBlock>
      
      {/* Token references, code examples, platform notes */}
    </main>
  )
}
```

---

## Demo Component Architecture

Demo components are isolated, self-contained, and accept a `reduced` prop for accessibility:

```tsx
interface MotionDemoProps {
  label: string
  description?: string
  token?: string         // which token this demos
  children: React.ReactNode
  controls?: boolean     // show play/pause
}
```

---

## Styling Architecture

- Tailwind v4 (CSS-first — config is in `app/globals.css`, not a JS file)
- CNN design tokens as CSS custom properties
- Dark mode default; light mode opt-in

```css
/* app/globals.css */
@theme {
  --color-cnn-red: #CC0000;
  --color-surface: #0A0A0A;
  --color-surface-raised: #141414;
  --color-surface-overlay: #1E1E1E;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A0A0A0;
  --color-border: rgba(255,255,255,0.08);
}
```

---

## Deployment Architecture

- **Platform:** Vercel
- **Branch strategy:** `main` → production, feature branches → preview deployments
- **Build:** `next build` — static + SSR hybrid
- **Performance:** `next/image` for all images, `next/font` for fonts, code-split by route
- **Environment vars:** `.env.local` for local, Vercel dashboard for production

---

## Scaling Path

| Phase | What to add |
|-------|------------|
| v1 | Core 12 sections, Catch Up demos, token system |
| v2 | Full MDX content, Style Dictionary JSON export, more feature demos |
| v3 | Figma plugin, Lottie/Rive asset library, contribution portal |
| v4 | Versioned token releases, changelog, automated Figma-to-token sync |
