import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionBlock } from '@/components/ui/SectionBlock'
import { ContentColumn } from '@/components/ui/ContentColumn'
import { PrincipleCard } from '@/components/ui/PrincipleCard'

export const metadata: Metadata = {
  title: 'Motion Principles',
  description: 'The five principles that guide every motion decision in CNN products.',
}

const principles = [
  {
    number: '01',
    name: 'Consistent',
    tagline: 'Precise timing creates trust.',
    description:
      'Detail and accuracy make a final composition. Use easing curves and timing with a precise consistency — this is the hidden tempo of the product. Inconsistent motion feels broken, even when users cannot name why. Every animation should feel like it belongs to the same physical system.',
    dos: [
      'Use tokens from the motion system — never hardcode values',
      'Match easing direction to spatial direction (enter vs exit)',
      'Keep the same transition for the same interaction across the app',
    ],
    donts: [
      'Mix duration values that differ by only 50ms with no reason',
      'Use different easing for the same component in different contexts',
      'Animate on mount but not on unmount',
    ],
  },
  {
    number: '02',
    name: 'Effortless',
    tagline: 'Elegance takes enormous effort to appear effortless.',
    description:
      "When motion feels 'effortless', it has been refined until nothing remains that doesn't need to be there. Core movements are distilled and perfected. The paradox is that it takes a lot of work to make something look easy. The animation should never call attention to itself.",
    dos: [
      'Remove any animation that slows the user down',
      'Use spring physics for gesture-driven interactions',
      'Let content guide the eye — not decoration',
    ],
    donts: [
      'Animate more than 2–3 properties simultaneously',
      'Use motion to show off rather than communicate',
      'Force users to wait for animations before they can act',
    ],
  },
  {
    number: '03',
    name: 'Dynamic',
    tagline: 'Purposeful complexity creates narrative.',
    description:
      'A well-executed animation has multiple elements come together to create a balanced and cohesive story. Avoid stillness and long pauses that leave the user disengaged. Dynamic does not mean busy — it means that when something moves, it moves with conviction and contributes to a story.',
    dos: [
      'Use staggered entry for list/grid content',
      'Create moments of emphasis for important state changes',
      'Allow gestures to feel physically weighted and responsive',
    ],
    donts: [
      'Animate everything on the screen at once',
      'Use the same timing for every element (no differentiation)',
      'Let the interface go completely still during loading',
    ],
  },
  {
    number: '04',
    name: 'Succinct',
    tagline: 'If it can be cut, cut it.',
    description:
      'Motion can quickly become superfluous and exhausting. The eye wants to be guided, not overwhelmed. Be simple and clever, while removing anything that could distract from understanding. Every animation must justify its existence with a clear communication purpose.',
    dos: [
      'Default to no animation — add only when it communicates something',
      'Keep most product transitions under 400ms',
      'Use the micro and fast tokens for everyday UI feedback',
    ],
    donts: [
      'Add animation to content that changes rapidly (live ticker, score)',
      'Animate decorative elements that add no information',
      'Use expressive timing for routine interactions',
    ],
  },
  {
    number: '05',
    name: 'Accessible',
    tagline: 'Reduced motion is not a fallback. It is the foundation.',
    description:
      'This is arguably the most important principle. Motion design that does not accommodate users with vestibular disorders, epilepsy, or motion sensitivity is incomplete design. Every motion pattern must have a reduced-motion alternative. WCAG 2.3.3 is the floor, not the ceiling.',
    dos: [
      'Use useReducedMotion() in every interactive Framer Motion component',
      'Test with macOS/iOS Reduce Motion setting enabled',
      'Provide static alternatives for all looping animations',
    ],
    donts: [
      'Ship motion features without reduced-motion testing',
      'Assume reduced motion means "no animation" — cross-fades are usually safe',
      'Use duration: 0 as the only reduced-motion adaptation (still triggers layout)',
    ],
  },
]

export default function PrinciplesPage() {
  return (
    <div>
      <PageHeader
        label="Getting Started"
        title="Motion Principles"
        subtitle="Five principles govern every animation decision across CNN products. Not guidelines — principles. When a motion choice violates one of these, it's wrong."
      />

      {principles.map((p) => (
        <SectionBlock key={p.name}>
          <ContentColumn padded={false} className="section-padding pt-0">
            <PrincipleCard {...p} />
          </ContentColumn>
        </SectionBlock>
      ))}
    </div>
  )
}
