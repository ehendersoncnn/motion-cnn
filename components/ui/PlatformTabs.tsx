'use client'

import { useState } from 'react'

const PLATFORM_CONFIG = [
  { id: 'ios', label: 'iOS' },
  { id: 'android', label: 'Android' },
  { id: 'web', label: 'Web' },
  { id: 'ctv', label: 'CTV' },
] as const

type PlatformId = (typeof PLATFORM_CONFIG)[number]['id']

interface PlatformTabsProps {
  ios?: React.ReactNode
  android?: React.ReactNode
  web?: React.ReactNode
  ctv?: React.ReactNode
  defaultPlatform?: PlatformId
  className?: string
}

export function PlatformTabs({
  ios,
  android,
  web,
  ctv,
  defaultPlatform,
  className,
}: PlatformTabsProps) {
  const panels: Record<PlatformId, React.ReactNode | undefined> = {
    ios,
    android,
    web,
    ctv,
  }

  const available = PLATFORM_CONFIG.filter(({ id }) => panels[id] != null)

  const initialPlatform =
    defaultPlatform && panels[defaultPlatform] != null
      ? defaultPlatform
      : available[0]?.id ?? 'ios'

  const [active, setActive] = useState<PlatformId>(initialPlatform)

  if (available.length === 0) {
    return null
  }

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Platform"
        className="flex flex-wrap gap-x-6 gap-y-2 border-b"
        style={{ borderColor: 'var(--color-border-subtle)' }}
      >
        {available.map(({ id, label }) => {
          const isActive = active === id

          return (
            <button
              key={id}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`platform-panel-${id}`}
              id={`platform-tab-${id}`}
              onClick={() => setActive(id)}
              className="text-nav pb-3 -mb-px transition-colors"
              style={{
                color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
                borderBottom: isActive ? '2px solid var(--color-cnn-red)' : '2px solid transparent',
                fontWeight: isActive ? 600 : 500,
              }}
            >
              {label}
            </button>
          )
        })}
      </div>

      {available.map(({ id }) => (
        <div
          key={id}
          role="tabpanel"
          id={`platform-panel-${id}`}
          aria-labelledby={`platform-tab-${id}`}
          hidden={active !== id}
          className="pt-8"
        >
          {active === id ? panels[id] : null}
        </div>
      ))}
    </div>
  )
}
