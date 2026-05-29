import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionBlock } from '@/components/ui/SectionBlock'
import { ContentColumn } from '@/components/ui/ContentColumn'
import { DoDont } from '@/components/ui/DoDont'
import { MotionDemo } from '@/components/motion-demo/MotionDemo'
import { ContainerTransformDemo } from '@/components/catch-up/StoryViewer'

export const metadata: Metadata = {
  title: 'Transitions',
  description: 'Container transforms, page transitions, and the Catch Up story viewer.',
}

const transitionPatterns = [
  {
    name: 'Container Transform',
    description:
      'An element expands to reveal a new surface. The origin element becomes the destination — creating material continuity. CNN\'s primary elevation transition.',
    token: 'transition.storyExpand',
    use: 'Card → fullscreen, thumbnail → player, preview → article',
    avoid: 'Two unrelated surfaces with no visual connection',
  },
  {
    name: 'Shared Element Transition',
    description:
      'A specific element (image, title, avatar) moves and transforms from one state to another. Framer Motion\'s layoutId enables this with zero extra code.',
    token: 'duration.expressive + easing.standard',
    use: 'Feed card → detail view, when a recognizable element connects two states',
    avoid: 'When the shared element would cross an opacity fade',
  },
  {
    name: 'Slide',
    description:
      'Horizontal or vertical translation for spatial navigation. Direction communicates hierarchy — going deeper slides in from right, going back slides out to right.',
    token: 'transition.pageSlide',
    use: 'Tab navigation, drill-down navigation, story-to-story transitions',
    avoid: 'Non-hierarchical navigation (tab bar switching)',
  },
  {
    name: 'Fade',
    description:
      'Opacity cross-dissolve. The safest transition — no spatial implication. Use when content changes but spatial context is preserved.',
    token: 'transition.fadeIn / transition.fadeOut',
    use: 'Content refresh, modal overlays, tooltip appear',
    avoid: 'Navigation that implies spatial movement',
  },
]

export default function TransitionsPage() {
  return (
    <div>
      <PageHeader
        label="System"
        title="Transitions"
        subtitle="How CNN surfaces move, expand, and connect. The container transform is our most important transition pattern — seeded from the Catch Up story viewer."
      />

      {/* Catch Up Feature highlight */}
      <SectionBlock
        title="Container Transform — Catch Up Story Viewer"
        description="The Catch Up feature's core interaction: a content card expands into a fullscreen immersive story viewer. This is CNN's primary elevation transition pattern."
      >
        <MotionDemo
          label="Card → Story Viewer"
          description="Tap the card to expand. The card itself becomes the story viewer — no cut, no separate surface."
          token="transition.storyExpand"
          device="mobile"
        >
          <ContainerTransformDemo />
        </MotionDemo>
      </SectionBlock>

      {/* Pattern catalog */}
      <SectionBlock
        title="Transition Patterns"
        description="Named patterns with defined tokens and clear use cases. Every transition type at CNN maps to one of these."
      >
        <ContentColumn padded={false} className="section-padding pt-0">
          <div className="space-y-6">
            {transitionPatterns.map((pattern) => (
              <div
                key={pattern.name}
                className="rounded-xl p-5"
                style={{
                  background: 'var(--color-surface-raised)',
                  border: '1px solid var(--color-border-default)',
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-heading text-lg" style={{ color: 'var(--color-text-primary)' }}>
                    {pattern.name}
                  </h3>
                  <span className="demo-footer__token shrink-0 ml-4">
                    {pattern.token}
                  </span>
                </div>
                <p className="text-body text-sm mb-4">
                  {pattern.description}
                </p>
                <DoDont
                  dos={[pattern.use]}
                  donts={[pattern.avoid]}
                />
              </div>
            ))}
          </div>
        </ContentColumn>
      </SectionBlock>

      {/* Code example */}
      <SectionBlock
        title="Implementation"
        description="Container transform with Framer Motion's layoutId. The magic: use the same layoutId string on both the card and the expanded view."
      >
        <ContentColumn padded={false} className="section-padding pt-0">
          <div
            className="rounded-xl p-5 font-mono text-sm leading-7 overflow-x-auto"
            style={{
              background: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-text-secondary)',
            }}
          >
          <pre>{`'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { transition } from '@/lib/motion-tokens'

// The card (collapsed state)
<motion.div
  layoutId="story-card-123"
  onClick={() => setExpanded(true)}
  style={{ borderRadius: 16 }}
  transition={transition.storyExpand}
>
  <motion.img layoutId="story-card-123-image" src={thumbnail} />
  <motion.h2 layoutId="story-card-123-title">{title}</motion.h2>
</motion.div>

// The fullscreen viewer (expanded state)
<AnimatePresence>
  {expanded && (
    <motion.div
      layoutId="story-card-123"
      style={{ borderRadius: 0 }}
      transition={transition.storyExpand}
    >
      <motion.img layoutId="story-card-123-image" src={hero} />
      <motion.h1 layoutId="story-card-123-title">{title}</motion.h1>
    </motion.div>
  )}
</AnimatePresence>`}</pre>
          </div>
        </ContentColumn>
      </SectionBlock>
    </div>
  )
}
