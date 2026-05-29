# Sitemap
## CNN Motion Design System

---

## Site Map

```
/ (Home)
├── /foundations
│   ├── Overview — What is motion at CNN?
│   ├── Why motion matters
│   └── CNN's motion identity
│
├── /principles
│   ├── Overview — The 5 principles
│   ├── Consistent
│   ├── Effortless
│   ├── Dynamic
│   ├── Succinct
│   └── Accessible
│
├── /tokens
│   ├── Overview — Token system
│   ├── Duration tokens
│   ├── Easing tokens
│   ├── Scale tokens
│   └── Token export (JSON)
│
├── /product-motion
│   ├── Overview — Motion in product
│   ├── Feedback motion (micro)
│   ├── Navigation motion
│   ├── Loading states
│   └── Volume of motion (when to use, when to skip)
│
├── /transitions
│   ├── Overview — Transition patterns
│   ├── Container Transform (core: Catch Up expand)
│   ├── Shared element transitions
│   ├── Fade transitions
│   ├── Slide transitions
│   └── Cross-fade
│
├── /gesture-systems
│   ├── Overview — Gesture-responsive motion
│   ├── Swipe / drag
│   ├── Long press
│   ├── Pinch / zoom
│   └── Gesture exit patterns
│
├── /spatial-navigation
│   ├── Overview — Spatial storytelling
│   ├── Spatial hierarchy model
│   ├── Card → Detail → Fullscreen
│   ├── Storyline navigation
│   └── Context preservation
│
├── /expressive-motion
│   ├── Overview — Brand-level animation
│   ├── CNN Logo animation
│   ├── Icon animations
│   ├── Editorial moments
│   └── Breaking news states
│
├── /accessibility
│   ├── Overview — Motion accessibility
│   ├── Reduced motion — principles
│   ├── prefers-reduced-motion (Web)
│   ├── Reduce Motion (iOS)
│   ├── Reduce Motion (Android)
│   ├── CTV considerations
│   └── WCAG 2.3.3 compliance guide
│
├── /platform
│   ├── Overview — Platform guidance
│   ├── iOS — UIKit & SwiftUI patterns
│   ├── Android — Compose & View patterns
│   ├── Web — CSS & Framer Motion patterns
│   └── CTV — 10-foot motion considerations
│
├── /implementation
│   ├── Overview — Engineering guidance
│   ├── Using motion tokens
│   ├── Framer Motion patterns
│   ├── CSS animation patterns
│   ├── SwiftUI animation code
│   ├── Compose animation code
│   └── Figma annotation guide
│
└── /resources
    ├── Overview
    ├── Contribution guide
    ├── CNN Brand Guide (link)
    ├── External references
    └── Changelog
```

---

## Page Priority for v1

| Priority | Section | Status |
|----------|---------|--------|
| P0 | Home | Build first |
| P0 | Foundations | Core identity |
| P0 | Principles | Core identity |
| P0 | Tokens | Engineering need |
| P0 | Transitions | Catch Up demos |
| P1 | Product Motion | Broad utility |
| P1 | Accessibility | Required |
| P1 | Platform — iOS | Mobile team |
| P1 | Platform — Android | Mobile team |
| P1 | Platform — Web | Web team |
| P2 | Gesture Systems | Phase 2 |
| P2 | Spatial Navigation | Phase 2 |
| P2 | Expressive Motion | Phase 2 |
| P2 | Platform — CTV | Phase 2 |
| P2 | Implementation | Phase 2 |
| P3 | Resources | After launch |

---

## URL Strategy

All routes are flat (`/tokens` not `/foundations/tokens`). This keeps URLs short and memorable for sharing in Slack/Figma comments.

Exception: Platform sub-pages use query params or nested routes if content volume warrants it:
- `/platform?platform=ios`
- `/platform?platform=android`
