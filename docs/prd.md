# Product Requirements Document
## CNN Motion Design System — Documentation Platform

**Version:** 1.0  
**Owner:** Motion Design, CNN Digital Products  
**Status:** Active Development

---

## Summary

The CNN Motion Design System is a living documentation platform that defines, demonstrates, and delivers motion design standards across CNN's product ecosystem — iOS, Android, Web, and CTV. The site functions as both a reference guide and an interactive motion playground, grounding all standards in real product work (the Catch Up / Story Viewer feature).

---

## Problem Statement

CNN's digital products currently lack a unified motion language. Transitions, timing, and animation patterns are inconsistent across platforms and teams. Designers and engineers make independent decisions, resulting in:

- Inconsistent user experience across iOS, Android, Web, CTV
- Motion that feels arbitrary rather than purposeful
- No shared vocabulary between design and engineering
- Accessibility gaps in reduced-motion handling
- No single source of truth for motion tokens

---

## Goals

1. **Establish a shared motion vocabulary** — tokens, principles, named patterns
2. **Document CNN's motion identity** — cinematic, restrained, editorial
3. **Accelerate design-to-engineering handoff** — implementation-ready specs
4. **Ground standards in real product work** — Catch Up / Story Viewer as the seed feature
5. **Create a living system** — designed to grow with new features and platforms
6. **Demonstrate by example** — the documentation site itself uses the system it documents

---

## Users & Personas

### Primary Users

**Product Designers**
- Need: Reference for correct motion patterns by context
- Goal: Make consistent, defensible motion decisions quickly
- Success: Reduced design review cycles, consistent cross-platform output

**Frontend Engineers (Web)**
- Need: Token values, easing curves, Framer Motion patterns
- Goal: Implement motion without asking design for specs
- Success: Fewer implementation questions, accurate Figma-to-code fidelity

**Mobile Engineers (iOS/Android)**
- Need: Platform-specific timing, easing in UIKit/SwiftUI terms and Compose
- Goal: Implement native-feeling motion with design-accurate values
- Success: Consistent feel between native and web

**CTV Engineers**
- Need: TV-appropriate motion cadence (slower, larger, more deliberate)
- Goal: Adapt web motion patterns for 10-foot UI
- Success: TV experiences that feel premium, not janky

### Secondary Users

**Design System Team**
- Need: Contribution patterns, maintenance workflows
- Goal: Evolve the system without breaking existing usage

**Brand / Creative**
- Need: Motion language alignment with editorial identity
- Goal: Ensure motion expresses CNN's editorial authority

---

## Scope

### In scope — v1.0

- Documentation site (Next.js, deployed to Vercel)
- 12 core sections (see Sitemap)
- Motion token system (duration, easing, scale)
- Catch Up / Story Viewer demos as illustrative examples
- iOS, Android, Web, CTV platform guidance pages
- Accessibility (reduced motion) guidance
- Engineering implementation reference (Framer Motion, CSS, Swift, Kotlin)
- Contribution guidelines

### In scope — v1.1 (post-launch)

- Full MDX content authoring for each section
- Figma token export integration
- Design token JSON / Style Dictionary output
- Lottie/Rive animation asset library
- Additional feature-seeded demos beyond Catch Up

### Out of scope

- Hosting motion asset files (video, Lottie) — external CDN only
- Authentication / private sections
- Design tool plugins (Figma)
- Animation tool guidance (After Effects, Principle)
- Sound design

---

## User Stories

### Foundations
- As a designer, I want to understand CNN's motion philosophy so I can make decisions aligned with brand values.

### Tokens
- As an engineer, I want a reference for all duration and easing values so I don't hardcode animation timings.
- As a designer, I want to see visual demos of each token so I can choose the right one for a context.

### Product Motion
- As a designer, I want to see named patterns (slide, fade, container transform) so I can specify motion precisely in Figma annotations.

### Transitions
- As an engineer, I want code examples for each transition type so I can implement them accurately.

### Accessibility
- As an engineer, I want reduced-motion guidance with code examples so I can implement `prefers-reduced-motion` correctly.

### Platform
- As an iOS engineer, I want to see motion tokens expressed in SwiftUI terms so I can implement without translating values.

---

## Success Metrics

- **Adoption:** % of product teams referencing the system in design reviews
- **Consistency:** Reduction in motion-related design feedback (qualitative)
- **Engineering velocity:** Reduced back-and-forth on motion specs
- **Coverage:** All 12 sections published with interactive demos
- **Accessibility:** 100% of demo components support reduced motion

---

## Motion Principles (to be documented)

CNN's motion language is built on five principles:

1. **Consistent** — Precise easing and timing create a reliable, professional feel
2. **Effortless** — Motion should feel elegant, never labored
3. **Dynamic** — Purposeful complexity; avoid stillness or monotony
4. **Succinct** — Every animation earns its place; nothing superfluous
5. **Accessible** — Reduced motion is a first-class requirement, not an afterthought

---

## Seed Feature: Catch Up / Story Viewer

The Catch Up feature is CNN's immersive story viewer — a carousel of content cards that expands into a fullscreen, Instagram Stories-style reading experience. Motion patterns from this feature provide the first grounded examples in the system:

### Motion patterns to document from Catch Up

| Pattern | Type | Demo Priority |
|---------|------|---------------|
| Card to fullscreen expand | Container Transform | High |
| Story viewer entry | Page Transition | High |
| Card-to-card swipe | Spatial Transition | High |
| Storyline nav (swipe down) | Spatial Transition | High |
| Progress bar | Utility Animation | Medium |
| Long press pause | Gesture State | Medium |
| Exit / dismiss | Page Transition | High |
| Skeleton loading | Loading State | Medium |

---

## Dependencies

- Framer Motion 11+ (React animation library)
- `@next/mdx` (content authoring)
- `next-themes` (dark/light mode)
- `shiki` or `rehype-pretty-code` (code syntax highlighting)
- CNN brand fonts (to be sourced from brand team)
- Motion demo videos/GIFs (to be recorded from Figma/prototype)

---

## Open Questions

- [ ] Should motion tokens be exportable as a JSON/Style Dictionary artifact from this site?
- [ ] Will this replace or supplement the Confluence motion doc?
- [ ] Do we need a versioning strategy for the token system?
- [ ] How do we handle proprietary CNN font licensing on Vercel?
- [ ] Who owns content contributions after v1 launch?

---

*Last updated: 2026-05-28*
