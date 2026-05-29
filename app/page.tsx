import type { Metadata } from 'next'
import Link from 'next/link'
import { navigation } from '@/lib/navigation'

export const metadata: Metadata = {
  title: 'CNN Motion Design System',
  description: "The living motion design system for CNN's product ecosystem.",
}

const featuredLinks = [
  {
    href: '/principles',
    label: 'Principles',
    description: 'The 5 rules governing every animation decision',
    tag: 'Start here',
  },
  {
    href: '/tokens',
    label: 'Motion Tokens',
    description: 'Duration, easing, and scale — the building blocks',
    tag: 'Core system',
  },
  {
    href: '/transitions',
    label: 'Transitions',
    description: 'Container transforms and the Catch Up story viewer',
    tag: 'Feature demos',
  },
  {
    href: '/accessibility',
    label: 'Accessibility',
    description: 'Reduced motion — required, not optional',
    tag: 'Required reading',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="px-8 lg:px-12 pt-16 pb-14 relative overflow-hidden"
        style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
      >
        {/* Background accent */}
        <div
          className="absolute top-0 left-0 w-1 h-full"
          style={{ background: 'var(--color-cnn-red)' }}
        />

        <p className="text-label-mono mb-6 pl-4" style={{ color: 'var(--color-cnn-red)' }}>
          CNN Motion Design System
        </p>

        <h1
          className="text-display text-5xl lg:text-6xl font-semibold max-w-3xl leading-tight mb-6 pl-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Motion that tells the story.
        </h1>

        <p
          className="text-lg max-w-2xl leading-relaxed pl-4"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          A living system of motion principles, tokens, and patterns for CNN&rsquo;s
          product ecosystem — iOS, Android, Web, and CTV. Grounded in real product work.
          Designed to scale.
        </p>
      </section>

      {/* Featured sections */}
      <section
        className="px-8 lg:px-12 py-10"
        style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
      >
        <p className="text-label-mono mb-6" style={{ color: 'var(--color-text-tertiary)' }}>
          Where to start
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block rounded-xl p-5 transition-colors"
              style={{
                background: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border-default)',
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <h2
                  className="font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {item.label}
                </h2>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: 'var(--color-surface-card)',
                    color: 'var(--color-text-tertiary)',
                    border: '1px solid var(--color-border-subtle)',
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {item.description}
              </p>
              <p
                className="text-xs mt-3 group-hover:translate-x-1 transition-transform inline-block"
                style={{ color: 'var(--color-cnn-red)' }}
              >
                Explore →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* All sections */}
      <section className="px-8 lg:px-12 py-10">
        <p className="text-label-mono mb-6" style={{ color: 'var(--color-text-tertiary)' }}>
          All sections
        </p>
        <div className="space-y-8">
          {navigation.map((section) => (
            <div key={section.title}>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-text-tertiary)' }}
              >
                {section.title}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex flex-col px-4 py-3 rounded-lg transition-colors"
                    style={{ border: '1px solid var(--color-border-subtle)' }}
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {item.label}
                    </span>
                    {item.description && (
                      <span
                        className="text-xs mt-0.5 leading-relaxed"
                        style={{ color: 'var(--color-text-tertiary)' }}
                      >
                        {item.description}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seed feature callout */}
      <section
        className="px-8 lg:px-12 py-10 mx-8 lg:mx-12 mb-12 rounded-2xl"
        style={{
          background: 'var(--color-surface-raised)',
          border: '1px solid var(--color-border-accent)',
        }}
      >
        <p className="text-label-mono mb-3" style={{ color: 'var(--color-cnn-red)' }}>
          Seed Feature
        </p>
        <h2
          className="text-2xl font-semibold mb-3"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Catch Up / Story Viewer
        </h2>
        <p
          className="text-base leading-relaxed max-w-2xl mb-5"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          This system was seeded from real product work — CNN&rsquo;s immersive story viewer feature.
          The container transforms, gesture patterns, and timing tokens all began here.
          Every principle is grounded in something real.
        </p>
        <Link
          href="/transitions"
          className="inline-flex items-center gap-1 text-sm font-medium"
          style={{ color: 'var(--color-cnn-red)' }}
        >
          See the demos →
        </Link>
      </section>
    </div>
  )
}
