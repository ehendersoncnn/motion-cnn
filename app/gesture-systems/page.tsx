import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionBlock } from '@/components/ui/SectionBlock'

export const metadata: Metadata = {
  title: 'Gesture Systems',
  description: 'CNN Motion Design System — Gesture Systems.',
}

export default function Page() {
  return (
    <div>
      <PageHeader
        title="Gesture Systems"
        subtitle="This section is under active development. Content coming soon."
      />
      <SectionBlock>
        <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
          Content in progress — check back soon or contribute via the{' '}
          <a
            href="/resources"
            style={{ color: 'var(--color-cnn-red)' }}
          >
            contribution guide
          </a>
          .
        </p>
      </SectionBlock>
    </div>
  )
}
