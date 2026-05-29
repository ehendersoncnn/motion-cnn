<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version (Next.js 16, React 19) has breaking changes. Read `node_modules/next/dist/docs/` before writing any code.

Key differences:
- App Router only (no `pages/`)
- React Server Components by default
- `"use client"` required for Framer Motion components
- Metadata API replaces `<Head>`
- Tailwind v4 uses CSS-first config (no `tailwind.config.js`)
<!-- END:nextjs-agent-rules -->

---

## CNN Motion Design System context

Read these files before implementing anything:

1. **`CLAUDE.md`** — Critical context: eBay reference URLs, CNN.com component specs, token conventions, brand rules
2. **`docs/references.md`** — Detailed eBay page-by-page layout reference + CNN component visual inventory
3. **`docs/tasks.md`** — Current build phase and task checklist
4. **`lib/motion-tokens.ts`** — All animation values live here

### Quick reference

**eBay layout reference:** https://playbook.ebay.com/foundations/motion (and sub-pages)
**CNN visual reference:** https://www.cnn.com (and CNN apps)
**Token source of truth:** `lib/motion-tokens.ts`
**Navigation source of truth:** `lib/navigation.ts`
