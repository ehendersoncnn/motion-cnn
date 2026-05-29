import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionBlock } from '@/components/ui/SectionBlock'

export const metadata: Metadata = {
  title: 'Foundations',
  description: 'What motion means at CNN and why it matters.',
}

export default function FoundationsPage() {
  return (
    <div>
      <PageHeader
        label="Getting Started"
        title="Foundations"
        subtitle="Motion is not decoration. At CNN, it is a fundamental part of how we communicate urgency, hierarchy, and editorial authority."
      />

      <SectionBlock
        title="Why motion matters"
        description="More than providing a flourish of delight, motion design has the power to transform static designs into dynamic experiences, grabbing users' attention and immersing them in a world of interaction."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Communicates hierarchy',
              body: 'Motion reveals relationships between elements — what is parent, child, or peer. Spatial transitions tell users where they are in the information architecture.',
            },
            {
              title: 'Signals urgency',
              body: 'Breaking news, live events, and real-time updates require motion that communicates immediacy without overwhelming or alarming the reader.',
            },
            {
              title: 'Builds trust',
              body: 'Consistent, precise motion feels crafted. It signals that the product is attentive and high-quality — the same values CNN brings to journalism.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-5"
              style={{
                background: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border-default)',
              }}
            >
              <h3
                className="font-semibold mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        title="CNN's motion identity"
        description="Although CNN began on TV, it is now a multi-platform digital brand. Our motion language is clear and to the point — showing finesse over flash and confidence with the ease in our gestures."
      >
        <div className="max-w-2xl space-y-4">
          {[
            ['Cinematic but restrained', 'Motion draws us into the content, stepping through and following the action. But it never overwhelms the journalism.'],
            ['Purposeful over decorative', 'Every animation decision must have a reason. If it can\'t be explained, it should not ship.'],
            ['Platform-aware', 'Motion at CNN varies greatly per platform. A fullscreen story viewer on mobile has very different motion needs than a CTV interface at 10 feet.'],
            ['Narrative hierarchy', 'The most important transitions get the most motion investment. Background events get less. Hierarchy is expressed through motion weight.'],
          ].map(([title, body]) => (
            <div key={title as string} className="flex gap-4">
              <div
                className="w-0.5 rounded-full shrink-0 mt-1"
                style={{ background: 'var(--color-cnn-red)', height: 'calc(100% - 4px)' }}
              />
              <div>
                <p className="font-medium mb-1" style={{ color: 'var(--color-text-primary)' }}>
                  {title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>
    </div>
  )
}
