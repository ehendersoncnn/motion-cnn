# CNN Motion Design System

A living motion documentation platform for CNN's product ecosystem — mobile (iOS/Android), web, and CTV.

Built with Next.js, Framer Motion, and MDX. Inspired architecturally by [eBay's Motion Playbook](https://playbook.ebay.com/foundations/motion).

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Content | MDX via `@next/mdx` |
| Deployment | Vercel |
| IDE | Cursor |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Site Sections

| Route | Section |
|-------|---------|
| `/` | Home — motion manifesto + featured demos |
| `/foundations` | What motion is, why it matters at CNN |
| `/principles` | 5 core motion principles |
| `/tokens` | Motion token system (duration, easing, scale) |
| `/product-motion` | Motion in product UI patterns |
| `/transitions` | Container transforms, page transitions |
| `/gesture-systems` | Gesture-driven interactions |
| `/spatial-navigation` | Spatial storytelling + navigation logic |
| `/expressive-motion` | Brand-level, emotive animation |
| `/accessibility` | Reduced motion, WCAG compliance |
| `/platform` | iOS, Android, Web, CTV platform guidance |
| `/implementation` | Engineering handoff, code patterns |
| `/resources` | Tools, references, contribution guide |

---

## Key Concepts

**Seed Feature:** The Catch Up / Story Viewer feature provides the foundational motion patterns for this system. All motion tokens, principles, and transitions are grounded in real product work.

**Motion Philosophy:** Cinematic but restrained. Purposeful over decorative. Narrative hierarchy through movement.

---

## Project Structure

```
motion-cnn/
├── app/                    # Next.js App Router routes
│   ├── layout.tsx          # Root layout, nav, theme
│   ├── page.tsx            # Homepage
│   └── [section]/page.tsx  # Each documentation section
├── components/
│   ├── nav/                # Sidebar + TopBar navigation
│   ├── motion-demo/        # Reusable animation demo components
│   ├── ui/                 # Page headers, section blocks, code blocks
│   └── catch-up/           # Story Viewer demo components
├── content/                # MDX source files for each section
├── lib/
│   ├── motion-tokens.ts    # Token definitions (duration, easing, scale)
│   └── navigation.ts       # Site nav structure
└── docs/                   # Project documentation
    ├── prd.md
    ├── architecture.md
    ├── tech-spec.md
    ├── tasks.md
    └── sitemap.md
```

---

## Docs

- [PRD](docs/prd.md) — Product requirements
- [Architecture](docs/architecture.md) — System design
- [Tech Spec](docs/tech-spec.md) — Stack and conventions
- [Tasks](docs/tasks.md) — Build plan
- [Sitemap](docs/sitemap.md) — Full page hierarchy

---

## Contributing

See [docs/contributing.md](docs/contributing.md) for authoring guidelines, component patterns, and the MDX content model.
