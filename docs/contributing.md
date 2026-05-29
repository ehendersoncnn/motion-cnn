# Contributing to the CNN Motion Design System

This guide is for designers and engineers who want to add or update content in the motion design system.

---

## Who can contribute

- CNN Product Designers
- CNN Frontend Engineers
- CNN Mobile Engineers
- Design Systems Team

All contributions go through a PR review process. Motion-related changes (tokens, principles) require sign-off from the Motion Design Lead.

---

## Adding a new section

1. Create the page: `app/[section-name]/page.tsx`
2. Register it in navigation: `lib/navigation.ts`
3. Add to sitemap: `docs/sitemap.md`
4. Create content file: `content/[section-name].mdx`
5. Open a PR with a preview link from Vercel

---

## Authoring content in MDX

MDX files live in `content/`. They can use any component from `components/ui/` or `components/motion-demo/`.

### Basic page structure

```mdx
---
title: Section Title
description: One-sentence description for SEO and nav
---

import { MotionDemo } from '@/components/motion-demo/MotionDemo'
import { CodeBlock } from '@/components/ui/CodeBlock'

## Overview

Introduction paragraph explaining the concept and when it applies.

## [Pattern Name]

Explanation of the pattern, when to use it, why it works.

<MotionDemo label="Pattern Name" token="duration.moderate">
  {/* Component demo */}
</MotionDemo>

### When to use

- Scenario A
- Scenario B

### When not to use

- Anti-pattern A

<CodeBlock language="tsx" title="Implementation">
{`// Example code`}
</CodeBlock>
```

---

## Adding a new motion demo component

1. Create it in `components/motion-demo/` or `components/catch-up/`
2. Add `"use client"` at the top
3. Import all animation values from `lib/motion-tokens.ts`
4. Implement `useReducedMotion()` support
5. Accept `label` and optional `description` props
6. Export as named export

### Template

```tsx
'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { duration, easing } from '@/lib/motion-tokens'

interface MyDemoProps {
  label?: string
}

export function MyDemo({ label }: MyDemoProps) {
  const shouldReduce = useReducedMotion()
  
  return (
    <div className="demo-canvas">
      <motion.div
        animate={{ x: shouldReduce ? 0 : 100 }}
        transition={{
          duration: shouldReduce ? 0 : duration.moderate,
          ease: easing.standard,
        }}
      />
    </div>
  )
}
```

---

## Updating motion tokens

Motion tokens are the most sensitive part of the system. Changes affect every platform and every engineer who has implemented the values.

**Process for changing a token value:**

1. Create a proposal doc in `docs/proposals/[token-name]-v2.md`
2. Document: current value, proposed value, rationale, impact assessment
3. Get sign-off from Motion Design Lead + one iOS/Android engineer
4. Update `lib/motion-tokens.ts`
5. Update `app/tokens/page.tsx`
6. Update `docs/tech-spec.md` platform translation table
7. Post the changelog in the #design-systems Slack channel

**Never change a token value without this process.**

---

## Video / GIF demo assets

Motion demos can use embedded video for showing real product behavior:

- Format: MP4 (preferred) or WebM
- Location: `public/videos/[section]/[demo-name].mp4`
- Max size: 5MB per file
- Dimensions: 375×812 (mobile) or 800×600 (web)
- No audio track
- Loop-safe (end state matches start state)

```tsx
<video
  src="/videos/transitions/container-transform.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="rounded-xl"
/>
```

---

## Lottie animations

For icon animations and expressive moments:

- Export from After Effects via Bodymovin or LottieFiles
- Store in `public/lottie/[name].json`
- Use `@lottiefiles/react-lottie-player` component
- Always provide a static fallback for reduced-motion

---

## Code style

- TypeScript strict — no `any`
- Named exports only
- Props interfaces above component definition
- No hardcoded motion values (use `lib/motion-tokens.ts`)
- No hardcoded colors (use CSS vars from `app/globals.css`)

---

## PR checklist

Before opening a PR:

- [ ] All animation values come from `lib/motion-tokens.ts`
- [ ] Reduced motion is handled with `useReducedMotion()`
- [ ] New pages are registered in `lib/navigation.ts`
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No lint errors (`npm run lint`)
- [ ] Vercel preview link included in PR description
- [ ] Screenshots or recording of demo component included

---

## Questions?

Post in `#design-systems` on Slack or tag `@motion-design-lead` in your PR.
