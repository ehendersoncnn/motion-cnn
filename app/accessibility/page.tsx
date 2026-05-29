import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionBlock } from '@/components/ui/SectionBlock'

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'Reduced motion and WCAG compliance guidance for CNN motion design.',
}

export default function AccessibilityPage() {
  return (
    <div>
      <PageHeader
        label="Standards"
        title="Accessibility"
        subtitle="Reduced motion is not a fallback. It is a first-class requirement. Every motion pattern ships with a reduced-motion alternative."
      />

      <SectionBlock
        title="Who this affects"
        description="Motion sensitivity affects more users than most designers realize. Vestibular disorders, epilepsy, migraines, ADHD, and anxiety can all be triggered or worsened by excessive screen motion."
      >
        <div
          className="rounded-xl p-5 max-w-2xl"
          style={{
            background: 'var(--color-cnn-red-subtle)',
            border: '1px solid var(--color-border-accent)',
          }}
        >
          <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-cnn-red)' }}>
            WCAG 2.3.3 — Animation from Interactions (AAA)
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Motion triggered by interaction can be disabled unless the animation is essential
            to the functionality or the information. We treat this as a minimum bar — not a
            target.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock
        title="prefers-reduced-motion (Web)"
        description="The CSS media query and JavaScript API for respecting the user's system preference."
      >
        <div className="space-y-4">
          <div
            className="rounded-xl p-5 font-mono text-sm leading-7 overflow-x-auto"
            style={{
              background: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-text-secondary)',
            }}
          >
            <pre>{`/* CSS — apply globally in globals.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* React — Framer Motion */
'use client'
import { useReducedMotion } from 'framer-motion'
import { duration, easing } from '@/lib/motion-tokens'

export function MyComponent() {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduce ? 0 : duration.moderate,
        ease: easing.decelerate,
      }}
    />
  )
}`}</pre>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        title="Platform: iOS"
        description="UIKit and SwiftUI both have built-in reduced motion support."
      >
        <div
          className="rounded-xl p-5 font-mono text-sm leading-7 overflow-x-auto"
          style={{
            background: 'var(--color-surface-raised)',
            border: '1px solid var(--color-border-subtle)',
            color: 'var(--color-text-secondary)',
          }}
        >
          <pre>{`// SwiftUI — check the environment value
@Environment(\\.accessibilityReduceMotion) var reduceMotion

var body: some View {
  ContentView()
    .animation(
      reduceMotion ? .none : .easeInOut(duration: 0.25),
      value: isExpanded
    )
}

// UIKit
if UIAccessibility.isReduceMotionEnabled {
  // Use cross-fade instead of slide
  transition = .crossDissolve
} else {
  transition = .moveIn(from: .right)
}`}</pre>
        </div>
      </SectionBlock>

      <SectionBlock
        title="Platform: Android"
        description="Compose and the Animator API both respect the system's Animate setting."
      >
        <div
          className="rounded-xl p-5 font-mono text-sm leading-7 overflow-x-auto"
          style={{
            background: 'var(--color-surface-raised)',
            border: '1px solid var(--color-border-subtle)',
            color: 'var(--color-text-secondary)',
          }}
        >
          <pre>{`// Compose — check animation scale
val animationScale = Settings.Global.getFloat(
  context.contentResolver,
  Settings.Global.ANIMATOR_DURATION_SCALE,
  1f
)
val shouldReduce = animationScale == 0f

// Compose animate call
val offset by animateFloatAsState(
  targetValue = if (isVisible) 0f else 100f,
  animationSpec = if (shouldReduce) snap() else tween(250)
)`}</pre>
        </div>
      </SectionBlock>

      <SectionBlock
        title="What to do — not just what to disable"
        description="Reduced motion does not mean no motion. Cross-fades are almost always safe. The goal is to remove motion that implies physical movement through space."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="rounded-lg p-4"
            style={{
              background: 'rgba(0, 180, 100, 0.05)',
              border: '1px solid rgba(0, 180, 100, 0.15)',
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'rgba(0, 200, 120, 0.8)' }}
            >
              Safe with reduced motion
            </p>
            <ul className="space-y-2">
              {[
                'Opacity fades (appear/disappear)',
                'Color transitions',
                'Loading spinners (already uniform circular motion)',
                'Content highlights (pulse without translate)',
                'Subtle scale changes under 5%',
              ].map((item) => (
                <li key={item} className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-lg p-4"
            style={{
              background: 'rgba(204, 0, 0, 0.05)',
              border: '1px solid rgba(204, 0, 0, 0.15)',
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'rgba(220, 80, 80, 0.8)' }}
            >
              Must be disabled
            </p>
            <ul className="space-y-2">
              {[
                'Translate / slide transitions',
                'Container transforms (use cross-fade instead)',
                'Parallax effects',
                'Looping ambient animations',
                'Auto-scrolling or auto-advancing content',
              ].map((item) => (
                <li key={item} className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBlock>
    </div>
  )
}
