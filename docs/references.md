# Design References
## eBay Motion Playbook + CNN.com Component Inventory

This document is a reference for Cursor and human contributors. Always consult this before building a new page or demo component.

---

## eBay Motion Playbook — Layout Reference

The eBay Motion Playbook at https://playbook.ebay.com/foundations/motion is the primary structural reference for this site. **Study it before building any page.**

### Page-by-page reference map

#### Main overview: https://playbook.ebay.com/foundations/motion

Layout patterns to adopt:
- Hero area: full-width dark section, large headline, 1–2 sentence description, no hero image — the section itself is the canvas
- Sidebar navigation: fixed left, labeled groups, active state highlight, no icons — just text links
- Section rhythm: every section is a full-width block separated by subtle hairline dividers
- Demo placement: demo canvas is always 100% content-column-width, never floating or inset
- Video/animation loops: autoplay, muted, no controls visible, seamlessly looping MP4 or Framer Motion

#### Token reference: https://playbook.ebay.com/design-system/tokens/motion-tokens

Layout patterns to adopt:
- Token table columns: Name | Value | Description | (preview)
- Token name in monospace code pill (e.g. `--motion-duration-fast`)
- Value in secondary text, monospace
- Preview column: small animated element demonstrating the token live
- Copy-on-click for token name
- Section groupings: Duration, Easing, separate tables
- Easing visualizer: SVG bezier curve visualization next to each easing token

#### In-product patterns: https://playbook.ebay.com/foundations/motion/using-motion-in-product

Layout patterns to adopt:
- Pattern name as H2 with a short tagline
- 2-column do/don't layout below each pattern description
- Do: green accent (`rgba(0,200,100,0.15)` bg, green label)
- Don't: red accent (`rgba(200,0,0,0.1)` bg, red label)
- Each item is a complete sentence, not just a label
- Demo canvas above the do/don't block, not beside it

#### Transitions: https://playbook.ebay.com/foundations/motion/product-transitions

Layout patterns to adopt:
- Full-width demo canvas for each transition type
- Demo canvas has play/pause or replay control bottom-right
- Token badge below canvas: monospace, subtle background
- Code block always directly below the demo — no separation
- Multiple demos per section (e.g. different easing curves for same motion)

#### Expressive animation: https://playbook.ebay.com/foundations/motion/expressive-animation

Layout patterns to adopt:
- Hero section is itself animated (the page demonstrates what it documents)
- Fullbleed sections with dark background for brand moments
- Lottie or video embed takes majority of viewport height
- Minimal text — let the animation speak
- Use sparingly: one or two hero demos max per page

#### Volume of motion: https://playbook.ebay.com/foundations/motion/volume-of-motion

Layout patterns to adopt:
- Decision matrix or table: context → motion weight recommendation
- Clear visual scale (e.g. None / Subtle / Moderate / Expressive)
- Use case examples in each cell
- Short, scannable — this is reference content, not narrative

---

## CNN.com — Component Visual Inventory

Visit https://www.cnn.com to observe current production components. Below is a documented inventory for use without a browser.

### Story card (web)
```
┌─────────────────────────────────┐
│  [16:9 thumbnail image]         │
│─────────────────────────────────│
│  POLITICS                       │  ← 11px, bold, uppercase, #CC0000
│                                 │
│  Senate reaches bipartisan      │  ← 16–18px, white, semi-bold
│  deal on infrastructure bill    │
│                                 │
│  CNN · 2 hours ago              │  ← 12px, #666, byline
└─────────────────────────────────┘
Background: #ffffff (light) or #1a1a1a (dark)
Border-radius: 0–4px on web
```

### Story card (mobile / Catch Up)
```
┌──────────────┐
│  [portrait   │
│   thumbnail] │
│              │
│  POLITICS    │  ← 10px, bold, uppercase, #CC0000
│              │
│  Senate      │  ← 14px, white, semi-bold
│  reaches a   │
│  deal on...  │
└──────────────┘
Width: ~150–160px
Height: ~200–220px
Border-radius: 12–16px
Background: #161616 or content-based dark color
```

### Story viewer (fullscreen / Catch Up)
```
┌─────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓░░░░░░ ░░░░░░░░░░░░  │  ← Progress bars (3 bars = 3 stories)
│                                 │
│  [Full-bleed hero image]        │
│                                 │
│  BREAKING NEWS                  │  ← Category, red
│                                 │
│  Senate Passes                  │  ← 24–28px, white, semi-bold
│  Infrastructure Bill            │
│                                 │
│  By CNN Politics Staff          │  ← Byline, 13px, #999
│  ─────────────────              │
│  Story content body text...     │  ← 16px, rgba(white,0.85)
│                                 │
│  ← swipe to previous            │  → swipe to next
└─────────────────────────────────┘
Background: #000000
Pull down → collapse (container transform back to card)
```

### Live badge
```
● LIVE
```
- Background: `#CC0000`
- Text: white, 11px, bold
- Padding: 3px 8px
- Border-radius: 99px
- The dot pulses with `@keyframes pulse` (scale 1 → 1.3 → 1, 1.5s infinite)
- Reduced motion: remove pulse, keep static red badge

### Breaking news banner
```
┌─────────────────────────────────────┐
│ BREAKING NEWS  Senate reaches deal  │
└─────────────────────────────────────┘
Background: #CC0000
Text: white, 13px, "BREAKING NEWS" bold + content regular
Motion: slides down from top on appearance, duration.moderate, easing.decelerate
```

### CNN navigation (web)
```
┌────────────────────────────────────────────────────────┐
│  CNN  │ US  World  Politics  Business  Health  Tech  🔍│
└────────────────────────────────────────────────────────┘
Background: #0c0c0c
CNN logo: red fill, left-aligned
Section links: white, 14px, regular weight
Active section: white, semi-bold, red underline
Search: right-aligned icon
Height: 44–56px
```

### Progress indicator (story viewer)
```
────────── ░░░░░░░░░ ░░░░░░░░░
```
- Active bar: white, full opacity
- Completed bar: white, full opacity (filled)
- Upcoming bar: white, 25% opacity
- Height: 2px
- Gap between bars: 4px
- Animates left-to-right with `easing.linear` duration matching story timer
- Reduced motion: instant jump, no fill animation

---

## Demo copy standards

Use CNN-realistic headline copy in all demos. Examples:

**Politics:** "Senate reaches bipartisan deal on infrastructure funding package"
**Climate:** "Scientists track record-breaking ocean temperatures for third straight year"  
**Tech:** "International coalition proposes AI regulation framework at summit"
**Business:** "Markets recover as Federal Reserve signals pause in rate increases"
**Health:** "New study links sleep patterns to long-term cognitive health outcomes"
**World:** "Diplomatic talks resume after three-week pause in ceasefire negotiations"
**Breaking:** "BREAKING: Emergency session called as situation escalates"

Never use:
- "Lorem ipsum" or placeholder text
- "Card Title" / "Headline Here" / "Sample Content"
- Generic tech/startup copy
- eBay-style product descriptions

---

## Structural comparison: eBay vs CNN Motion site

| Element | eBay approach | CNN adaptation |
|---------|--------------|----------------|
| Sidebar | Light bg, blue accents | Dark bg, CNN red accents |
| Hero | Full-width, animated | Full-width, Framer Motion demo |
| Demo canvas | Dark bg, component center | Dark bg, CNN product UI |
| Token table | Blue code pills | Red code pills |
| Do/Don't | Green/orange accents | Green/red accents |
| Code blocks | Dark theme, blue syntax | Dark theme, red accent syntax |
| Typography | Sans-serif throughout | Serif display + sans body |
| Motion tone | Commercial, energetic | Cinematic, editorial |

---

## DeviceFrame Component — iPhone 15 Pro Spec

The `DeviceFrame` component wraps demo content in a realistic iPhone shell.
Build this in `components/ui/DeviceFrame.tsx`.

### Visual spec

```
┌─────────────────────────┐
│  ░░░░░░[  pill  ]░░░░░  │  ← Dynamic Island (black pill, centered, ~126×37px)
│─────────────────────────│
│                         │
│   [  demo content   ]   │  ← Screen area, children render here
│                         │
│                         │
│─────────────────────────│
│       ──────            │  ← Home indicator (white bar, 134px wide, 5px tall, centered)
└─────────────────────────┘
```

### Dimensions
- Outer frame: 393px × 852px (iPhone 15 Pro logical pixels)
- Screen area: 370px × 780px (inset from frame edges)
- Default render scale: 0.65 (so it fits in a doc page column)
- Frame border-radius: 54px outer, 48px inner (screen corners)
- Frame border: 1.5px solid rgba(255,255,255,0.15) on dark, rgba(0,0,0,0.2) on light
- Frame background (titanium): linear-gradient(145deg, #8E8E93, #636366, #8E8E93)
- Side buttons: left side (volume up, volume down), right side (power) — CSS only, no interaction

### Dynamic Island
- Width: 126px, height: 37px
- Border-radius: 20px
- Background: #000000
- Position: centered horizontally, 12px from top of screen
- Contains a fake status bar row: time left, signal/wifi/battery right

### Status bar (inside screen, top)
- Height: 44px
- Time: "9:41" — left-aligned, Source Sans 3 600, 15px, white
- Right icons: signal bars + wifi + battery — SVG icons, white

### Home indicator
- Width: 134px, height: 5px
- Border-radius: 3px
- Background: rgba(255,255,255,0.35) on dark screen, rgba(0,0,0,0.25) on light
- Centered horizontally, 8px from bottom of screen

### Frame color variants
| Variant | Frame gradient | Button color |
|---------|---------------|--------------|
| `black` (default) | #1C1C1E → #2C2C2E | #3A3A3C |
| `titanium` | #8E8E93 → #636366 | #48484A |
| `silver` | #E8E8E8 → #C8C8C8 | #AEAEB2 |

### Props interface
```tsx
interface DeviceFrameProps {
  children: React.ReactNode
  color?: 'black' | 'titanium' | 'silver'
  scale?: number           // default 0.65
  showStatusBar?: boolean  // default true
  className?: string
}
```

### Usage in demo components
```tsx
// Mobile CNN UI demo — always use DeviceFrame
<MotionDemo label="Card → Story Viewer" device="mobile">
  <StoryViewerDemo />
</MotionDemo>

// Abstract easing/token demo — no frame
<MotionDemo label="easing.decelerate" device="none">
  <EasingVisualizer curve="decelerate" />
</MotionDemo>
```

### eBay comparison
eBay uses browser chrome frames for web demos. CNN's primary platform is mobile,
so the iPhone frame is the default. Use browser chrome only for web-specific demos
in the Platform → Web section.
