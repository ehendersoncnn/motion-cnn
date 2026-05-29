# Tasks
## CNN Motion Design System — Build Plan

Cursor should follow tasks sequentially within each phase. Check off tasks as they are completed.

---

## Phase 0 — Repository Setup ✅

- [x] Install Framer Motion
- [x] Install MDX and plugins
- [x] Install next-themes
- [x] Install type definitions
- [x] Update `next.config.ts` with MDX support
- [x] Update `tsconfig.json` with path aliases
- [x] Update `package.json` name to `cnn-motion-design-system`

---

## Phase 1 — Design Tokens & Navigation Foundation

- [ ] Create `lib/motion-tokens.ts` with all duration, easing, and scale tokens
- [ ] Create `lib/navigation.ts` with full site nav structure
- [ ] Update `app/globals.css` with CNN design tokens (colors, typography, spacing)
- [ ] Update `app/layout.tsx` with root layout, Sidebar, dark mode provider
- [ ] Create `components/nav/Sidebar.tsx` — left navigation with section links
- [ ] Create `components/nav/TopBar.tsx` — mobile nav header

---

## Phase 2 — UI Component Primitives

- [ ] Create `components/ui/PageHeader.tsx` — section title + subtitle
- [ ] Create `components/ui/SectionBlock.tsx` — content section wrapper
- [ ] Create `components/ui/CodeBlock.tsx` — syntax highlighted code
- [ ] Create `components/ui/PlatformTabs.tsx` — iOS/Android/Web/CTV tabs
- [ ] Create `components/ui/PrincipleCard.tsx` — motion principle card

---

## Phase 2.5 — Layout & Visual System (eBay Mirror)

This phase locks in the global layout, spacing, and visual presentation before any
demo components or content pages are built. Every component from Phase 3 onward
will be built inside this system.

**Reference:** https://playbook.ebay.com/foundations/motion — study the layout
proportions, margins, section rhythm, and demo canvas presentation before starting.

### Layout system
- [x] Set content column max-width to match eBay (~880px content area inside sidebar layout)
- [x] Set section padding: 64px vertical, 48px horizontal on desktop; 32px on mobile
- [x] Set sidebar width: 248px fixed, full-height, sticky
- [x] Set sidebar section group spacing, link height, and active state treatment
- [x] Add hairline dividers between all page sections (1px, subtle opacity)
- [x] Ensure main content area has correct left offset from sidebar on all breakpoints

### Typography system (CNN-matched)
- [x] Load Source Sans 3 via next/font (weights 400, 500, 600, 700, 800)
- [x] Load JetBrains Mono via next/font (weight 400) for code
- [x] Update --font-display and --font-sans in globals.css
- [x] Section labels: 11px, 700 weight, ALL CAPS, 0.08em tracking, red left border 3px
- [x] Page titles (h1): Source Sans 3 800, 40–48px, line-height 1.1, tracking -0.01em
- [x] Section headings (h2): Source Sans 3 700, 22–26px, line-height 1.2
- [x] Body text: Source Sans 3 400, 16px, line-height 1.6, color text-secondary
- [x] Timestamps / meta: Source Sans 3 400, 12px, color text-tertiary

### Demo canvas presentation (eBay-style)
- [x] Create `components/ui/DeviceFrame.tsx` — iPhone 15 Pro frame component
  - Renders a realistic iPhone shell around demo content
  - Frame color variants: black (default), silver, natural titanium
  - Notch / Dynamic Island at top
  - Home indicator bar at bottom
  - Screen dimensions: 390×844px scaled to fit context (default scale 0.7)
  - Accepts `children` — renders any demo inside the screen area
  - Supports `showStatusBar` prop — renders a fake CNN app status bar at top
  - Reduced motion safe — the frame itself has no animation
- [x] Update `components/motion-demo/MotionDemo.tsx` to accept `device` prop
  - `device="mobile"` → wraps children in DeviceFrame
  - `device="web"` → wraps children in browser chrome frame
  - `device="none"` → current behavior (plain canvas)
  - Default: `device="none"` for token/easing demos, `device="mobile"` for Catch Up demos
- [x] Demo canvas background: dark (#0A0A0A), full-width, min-height 480px for device demos
- [x] Demo label bar at bottom: token name pill left, Replay button right (matches eBay style)

### Light / dark mode
- [x] Wrap app in ThemeProvider (next-themes) in layout.tsx
- [x] Add theme toggle button to Sidebar (bottom) and TopBar (mobile)
- [x] Light mode surface colors in globals.css:
  - Background: #F5F5F5
  - Surface raised: #FFFFFF
  - Surface card: #FAFAFA
  - Text primary: #0C0C0C
  - Text secondary: #444444
  - Border subtle: rgba(0,0,0,0.07)
- [x] Verify all CSS vars switch correctly between modes

### Do/Don't blocks
- [x] Update do/dont layout to match eBay: side-by-side on desktop, stacked on mobile
- [x] Green left border (3px) on Do blocks, red left border on Don't blocks
- [x] Each item is a full sentence with specific guidance (not a label)

---

## Phase 3 — Motion Demo Components

- [ ] Create `components/motion-demo/MotionDemo.tsx` — demo canvas wrapper with `device` prop
- [ ] Create `components/motion-demo/EasingVisualizer.tsx` — interactive easing curve
- [ ] Create `components/motion-demo/DurationDemo.tsx` — side-by-side timing comparison
- [ ] Create `components/motion-demo/TokenTable.tsx` — token reference with copy button
- [ ] Create `components/motion-demo/PlayPauseDemo.tsx` — togglable animation canvas

All demo components must:
- Accept `reduced` prop or use `useReducedMotion()`
- Import animation values from `lib/motion-tokens.ts`
- Be wrapped with `"use client"`
- Use `device="mobile"` for any demo showing CNN app UI
- Use `device="none"` for abstract token/easing demos

---

## Phase 4 — Catch Up / Story Viewer Demos

- [ ] Create `components/catch-up/CardCarousel.tsx` — horizontal card scroll inside DeviceFrame
- [ ] Create `components/catch-up/StoryViewer.tsx` — fullscreen story viewer with container transform
- [ ] Create `components/catch-up/ProgressBar.tsx` — animated story progress bar
- [ ] Create `components/catch-up/GestureDemo.tsx` — swipe + long press states
- [ ] All Catch Up demos render inside `DeviceFrame` by default
- [ ] Ensure all demos use `layoutId` for shared element transitions (Framer Motion)

---

## Phase 5 — Core Pages (P0)

- [ ] `app/page.tsx` — Homepage: motion manifesto, hero demo (StoryViewer in DeviceFrame), featured tokens
- [ ] `app/foundations/page.tsx` — CNN motion overview, philosophy, identity
- [ ] `app/principles/page.tsx` — 5 principles with visual demos
- [ ] `app/tokens/page.tsx` — Full token table with EasingVisualizer + DurationDemo
- [ ] `app/transitions/page.tsx` — Container transform, slide, fade — Catch Up demos in DeviceFrame

---

## Phase 6 — P1 Pages

- [ ] `app/product-motion/page.tsx` — Feedback, navigation, loading, volume guidance
- [ ] `app/accessibility/page.tsx` — Reduced motion guide with code examples
- [ ] `app/platform/page.tsx` — Platform tabs: iOS, Android, Web, CTV

---

## Phase 7 — P2 Pages

- [ ] `app/gesture-systems/page.tsx`
- [ ] `app/spatial-navigation/page.tsx`
- [ ] `app/expressive-motion/page.tsx`
- [ ] `app/implementation/page.tsx`

---

## Phase 8 — Content Layer

- [ ] Create `content/foundations.mdx`
- [ ] Create `content/principles.mdx`
- [ ] Create `content/tokens.mdx`
- [ ] Create `content/transitions.mdx`
- [ ] Create `content/accessibility.mdx`
- [ ] Wire MDX files into corresponding page.tsx files

---

## Phase 9 — Polish & Performance

- [ ] Lazy-load all demo components with `next/dynamic`
- [ ] Add `prefers-reduced-motion` CSS fallbacks
- [ ] Add page transition animations (Framer Motion AnimatePresence)
- [ ] Verify dark mode works across all pages
- [ ] Verify responsive layout (sidebar collapses on mobile)
- [ ] Run Lighthouse — hit LCP < 1.5s, CLS < 0.1

---

## Phase 10 — Resources & Deployment

- [ ] Create `docs/contributing.md` — authoring guide
- [ ] `app/resources/page.tsx` — links, tools, contribution guide
- [ ] Vercel project setup (connect GitHub repo)
- [ ] Set up preview deployment for PRs
- [ ] Deploy to production
- [ ] Validate production build

---

## Notes

- Always read `CLAUDE.md` and `docs/references.md` before implementing
- Motion token values must ONLY come from `lib/motion-tokens.ts`
- Every new page requires an update to `lib/navigation.ts`
- Every new demo must handle reduced motion
- Catch Up / Story Viewer demos always render inside `DeviceFrame`
- Abstract token demos (easing curves, duration bars) render without a device frame
