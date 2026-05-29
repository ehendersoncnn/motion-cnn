# CNN Motion Design System — AI Agent Context

## What this repo is

This is the CNN Motion Design System documentation site. It is NOT a generic web app — it is a living motion design system platform for CNN's product ecosystem (iOS, Android, Web, CTV).

The site documents motion principles, tokens, transitions, gesture systems, and platform-specific guidance. It also contains interactive motion demos built with Framer Motion.

---

## REFERENCE SITE — eBay Motion Playbook (PRIMARY LAYOUT REFERENCE)

**The eBay Motion Playbook is the primary structural and layout reference for this site.**
**Before building any page, section, or layout component, study the corresponding eBay page.**

| eBay Page | What to reference |
|-----------|-------------------|
| https://playbook.ebay.com/foundations/motion | Overall layout: hero, section structure, nav sidebar, full-width demo presentation |
| https://playbook.ebay.com/design-system/tokens/motion-tokens | Token table layout, easing visualizer, how values are presented with live previews |
| https://playbook.ebay.com/foundations/motion/using-motion-in-product | In-product pattern layout, do/don't side-by-side presentation style |
| https://playbook.ebay.com/foundations/motion/volume-of-motion | Volume/hierarchy page — decision matrix, contextual guidance layout |
| https://playbook.ebay.com/foundations/motion/product-transitions | Transition pattern cards with embedded demo, code below each demo |
| https://playbook.ebay.com/foundations/motion/expressive-animation | Hero fullbleed layout, embedded video/Lottie demos, expressive showcase style |

### What to mirror from eBay (structural patterns)
- Left sidebar nav with labeled section groups — sticky on scroll
- Full-width demo canvases with looping video/animation/Framer Motion
- Dark demo backgrounds with the component floating center-stage
- Token tables: name | value | description | live preview | copy button
- Do/Don't blocks: side-by-side with green/red accent, specific guidance (not vague)
- Code snippet directly below the demo it describes (not separated)
- Section structure: overline label → large title → lead paragraph → demo → code → notes
- Subtle dividers between sections, generous vertical rhythm

### What to adapt for CNN (NOT a copy)
- Color: CNN red (`#CC0000`) + editorial black — not eBay blue
- Typography: editorial/serif display headings — not eBay's sans-serif
- Tone: cinematic, authoritative, journalistic — not commercial/playful
- Demo content: CNN news cards, story UI, breaking news — not eBay product cards
- Brand moments: breaking news, live indicators, story viewer — not shopping cart animations

---

## REFERENCE COMPONENTS — CNN.com (VISUAL LANGUAGE REFERENCE)

**CNN.com and the CNN apps define what CNN UI actually looks like.**
**Demo components must look like real CNN product UI — not generic placeholders.**

### CNN.com patterns to study before building web demos
Visit https://www.cnn.com and observe:
- **Story cards** — dark background, CNN red category label, strong headline typography, 16:9 thumbnail
- **Navigation** — dark horizontal bar, CNN logo (red), section links, search icon right
- **Live badge** — red pill with pulsing dot: "● LIVE"
- **Breaking news banner** — red background, white text, urgent typography
- **Article layout** — large hero, byline, body text, section dividers
- **Video player** — dark controls, red scrubber/progress, fullscreen button

### CNN app patterns to study before building mobile demos
The Catch Up / Story Viewer feature specifically:
- **Cards** — ~160×220px portrait cards, rounded corners 12–16px, `#161616` dark background, CNN red category label (11px bold caps), 2–3 line headline (white, 15px semi-bold), subtle thumbnail
- **Story viewer** — fullscreen black background, story image as hero, white headline overlay, swipe-to-advance, 3-dot or bar progress indicators at top, pull-down to dismiss
- **Home feed** — vertical scroll, lead card full-width, secondary cards half-width, section headers
- **Breaking news** — interruption modal with red accent bar, CNN logo, urgent copy

### Rules for demo components
1. Use realistic CNN-style headline copy — e.g. "Senate reaches deal on infrastructure bill", not "Card Title" or "Lorem ipsum"
2. Use CNN red (`#CC0000`) for category labels and accent elements
3. Use dark card backgrounds (`#161616`, `#1A1A2E`, `#0D1F2D`)
4. Card corners: 12–16px radius on mobile, 8–12px on web
5. Category labels: 10–11px, bold, tracking-widest, uppercase, CNN red
6. Headlines: 14–16px on cards, 24–32px on expanded/fullscreen, white, semi-bold

---

## Critical context before touching any file

1. **This is a design system documentation site** — all UI must feel editorial, premium, and cinematic. Do NOT build generic blog/portfolio aesthetics.

2. **The seed feature is the Catch Up / Story Viewer** — a carousel of content cards with container transform transitions, fullscreen story viewer, and Instagram-style interactions. Motion patterns from this feature ground the whole system.

3. **CNN brand language** — CNN red (`#CC0000`), editorial black, dark backgrounds, strong typography. Think: cinematic, restrained, authoritative.

4. **Motion is the product** — the site itself must demonstrate the principles it documents. Use Framer Motion throughout. Pages should feel alive.

5. **MDX is the content layer** — documentation content lives in `content/*.mdx`. Components live in `components/`. Never mix content and component logic.

---

## Key files

| File | Purpose |
|------|---------|
| `lib/motion-tokens.ts` | Single source of truth for all motion tokens |
| `lib/navigation.ts` | Site navigation structure |
| `components/motion-demo/MotionDemo.tsx` | Core demo wrapper component |
| `components/catch-up/StoryViewer.tsx` | Story Viewer interactive demo |
| `app/tokens/page.tsx` | Motion token reference page |
| `docs/sitemap.md` | Full site map |

---

## Motion token convention

Always import tokens from `lib/motion-tokens.ts`. Never hardcode duration or easing values inline.

```ts
import { duration, easing } from '@/lib/motion-tokens'

// Good
transition={{ duration: duration.moderate, ease: easing.standard }}

// Bad
transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
```

---

## Component conventions

- All demo components go in `components/motion-demo/`
- All Catch Up feature demos go in `components/catch-up/`
- Use `"use client"` only on components that need Framer Motion or browser APIs
- Server Components for layout and static content
- Use `PageHeader` for all section page headers
- Use `MotionDemo` wrapper for all interactive demos

---

## Styling conventions

- Tailwind v4 utility classes only
- Dark mode by default (CNN's brand is dark-first)
- CNN red: `#CC0000` / CSS var: `var(--color-cnn-red)`
- Never use purple gradients, Inter font, or generic AI aesthetics
- Typography: display headings use `font-display`, body uses `font-sans`

---

## Content conventions

- Every page has: `PageHeader` → intro paragraph → demo sections → token references → platform notes
- All motion values referenced in MDX must match tokens in `lib/motion-tokens.ts`
- Code examples use the `CodeBlock` component with syntax highlighting

---

## Do not

- Do not change `lib/motion-tokens.ts` without updating `app/tokens/page.tsx`
- Do not add hardcoded colors outside of `globals.css` CSS vars
- Do not create pages without updating `lib/navigation.ts`
- Do not use `pages/` directory — App Router only
- Do not use generic placeholder headlines or "Lorem ipsum" — use real CNN-style news copy
