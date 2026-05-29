import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionBlock } from '@/components/ui/SectionBlock'
import { DurationTokenTable } from '@/components/motion-demo/TokenTable'

export const metadata: Metadata = {
  title: 'Motion Tokens',
  description: 'The complete token system for CNN motion — duration, easing, and scale.',
}

const easingTokens = [
  {
    name: 'standard',
    value: 'cubic-bezier(0.4, 0.0, 0.2, 1.0)',
    use: 'Default — elements moving within the viewport',
  },
  {
    name: 'decelerate',
    value: 'cubic-bezier(0.0, 0.0, 0.2, 1.0)',
    use: 'Enter / arrive — elements entering from off-screen',
  },
  {
    name: 'accelerate',
    value: 'cubic-bezier(0.4, 0.0, 1.0, 1.0)',
    use: 'Exit / depart — elements leaving the screen',
  },
  {
    name: 'expressive',
    value: 'cubic-bezier(0.34, 1.56, 0.64, 1.0)',
    use: 'Brand moments — hero expansions, logo animations',
  },
  {
    name: 'linear',
    value: 'cubic-bezier(0.0, 0.0, 1.0, 1.0)',
    use: 'Progress bars, loading indicators only',
  },
]

export default function TokensPage() {
  return (
    <div>
      <PageHeader
        label="System"
        title="Motion Tokens"
        subtitle="The numerical foundation of the system. Every animation in CNN products maps to one of these values. Never hardcode timing or easing."
      />

      <SectionBlock
        title="Duration"
        description="A five-step scale from imperceptible micro-feedback to cinematic expressive moments. Each token has a defined purpose — choosing the right one is part of the design decision."
      >
        <DurationTokenTable />
      </SectionBlock>

      <SectionBlock
        title="Easing"
        description="Easing curves define the character of movement — whether an element rushes in, settles gently, or bounces with personality. Match the curve to the spatial direction and intent of the transition."
      >
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: '1px solid var(--color-border-default)' }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                {['Token', 'Curve', 'Use case'].map((col) => (
                  <th
                    key={col}
                    className="text-left px-4 py-3 text-label-mono"
                    style={{
                      color: 'var(--color-text-tertiary)',
                      background: 'var(--color-surface-overlay)',
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {easingTokens.map((token, i) => (
                <tr
                  key={token.name}
                  style={{
                    borderBottom:
                      i < easingTokens.length - 1
                        ? '1px solid var(--color-border-subtle)'
                        : 'none',
                  }}
                >
                  <td className="px-4 py-3">
                    <span
                      className="font-mono text-xs px-2 py-1 rounded"
                      style={{
                        background: 'var(--color-surface-card)',
                        color: 'var(--color-cnn-red)',
                      }}
                    >
                      easing.{token.name}
                    </span>
                  </td>
                  <td
                    className="px-4 py-3 font-mono text-xs"
                    style={{ color: 'var(--color-text-tertiary)' }}
                  >
                    {token.value}
                  </td>
                  <td
                    className="px-4 py-3 text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {token.use}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      <SectionBlock
        title="Using tokens in code"
        description="Import from lib/motion-tokens.ts — not from any other location."
      >
        <div
          className="rounded-xl p-5 font-mono text-sm leading-7 overflow-x-auto"
          style={{
            background: 'var(--color-surface-raised)',
            border: '1px solid var(--color-border-subtle)',
            color: 'var(--color-text-secondary)',
          }}
        >
          <pre>{`import { duration, easing, spring, transition } from '@/lib/motion-tokens'

// Basic transition
<motion.div
  animate={{ opacity: 1 }}
  transition={{
    duration: duration.moderate,
    ease: easing.decelerate,
  }}
/>

// Story viewer expand (Catch Up feature)
<motion.div
  layoutId="story-card"
  transition={transition.storyExpand}
/>

// Gesture-driven spring
<motion.div
  drag
  dragElastic={0.1}
  dragMomentum={false}
/>
// On release: apply spring.snappy`}</pre>
        </div>
      </SectionBlock>

      <SectionBlock
        title="Platform translation"
        description="The same conceptual tokens, expressed for each platform."
      >
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: '1px solid var(--color-border-default)' }}
        >
          <table className="w-full text-xs">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                {['Token', 'Web (ms)', 'iOS (s)', 'SwiftUI', 'Android', 'CTV'].map((col) => (
                  <th
                    key={col}
                    className="text-left px-3 py-3 text-label-mono"
                    style={{
                      color: 'var(--color-text-tertiary)',
                      background: 'var(--color-surface-overlay)',
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['micro', '80ms', '0.08s', '.fast', '80ms', '—'],
                ['fast', '150ms', '0.15s', '.easeOut(0.15)', '150ms', '200ms'],
                ['moderate', '250ms', '0.25s', '.easeInOut(0.25)', '250ms', '350ms'],
                ['slow', '400ms', '0.4s', '.spring(…)', '400ms', '550ms'],
                ['expressive', '600ms', '0.6s', '.spring(…)', '600ms', '700ms'],
              ].map(([name, ...values], i) => (
                <tr
                  key={name}
                  style={{
                    borderBottom:
                      i < 4 ? '1px solid var(--color-border-subtle)' : 'none',
                  }}
                >
                  <td className="px-3 py-2.5">
                    <span
                      className="font-mono px-1.5 py-0.5 rounded text-xs"
                      style={{
                        background: 'var(--color-surface-card)',
                        color: 'var(--color-cnn-red)',
                      }}
                    >
                      {name}
                    </span>
                  </td>
                  {values.map((val, vi) => (
                    <td
                      key={vi}
                      className="px-3 py-2.5 font-mono"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>
    </div>
  )
}
