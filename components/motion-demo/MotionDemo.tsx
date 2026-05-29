'use client'

import { useState } from 'react'
import { DeviceFrame } from '@/components/ui/DeviceFrame'
import { BrowserFrame } from '@/components/ui/BrowserFrame'

type DeviceMode = 'none' | 'mobile' | 'web'

interface MotionDemoProps {
  label: string
  description?: string
  token?: string
  controls?: boolean
  device?: DeviceMode
  deviceColor?: 'black' | 'titanium' | 'silver'
  deviceScale?: number
  showStatusBar?: boolean
  children: React.ReactNode
}

/**
 * Demo wrapper — eBay Playbook style.
 *
 * device="mobile"  → Catch Up / Story Viewer / CNN app UI (DeviceFrame)
 * device="web"     → Platform web demos (BrowserFrame)
 * device="none"    → Abstract token/easing demos (plain dark stage)
 */
export function MotionDemo({
  label,
  description,
  token,
  controls = true,
  device = 'none',
  deviceColor = 'black',
  deviceScale,
  showStatusBar = true,
  children,
}: MotionDemoProps) {
  const [key, setKey] = useState(0)

  const isDeviceDemo = device !== 'none'
  const stageClass = isDeviceDemo ? 'demo-stage demo-stage--device' : 'demo-stage demo-stage--abstract'

  function renderContent() {
    const content = (
      <div key={key} className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    )

    switch (device) {
      case 'mobile':
        return (
          <DeviceFrame
            color={deviceColor}
            scale={deviceScale ?? 0.65}
            showStatusBar={showStatusBar}
          >
            {content}
          </DeviceFrame>
        )
      case 'web':
        return (
          <BrowserFrame scale={deviceScale ?? 0.75}>
            {content}
          </BrowserFrame>
        )
      default:
        return content
    }
  }

  return (
    <div className="w-full">
      {/* Demo stage — full width of main pane */}
      <div className={`${stageClass} py-10 px-6`}>
        {renderContent()}
      </div>

      {/* Footer bar — eBay style */}
      <div className="demo-footer">
        <div className="min-w-0">
          {token ? (
            <span className="demo-footer__token">{token}</span>
          ) : (
            <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
              {label}
            </p>
          )}
          {description && (
            <p className="text-meta mt-0.5 truncate">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {token && (
            <p className="text-sm font-medium hidden sm:block" style={{ color: 'var(--color-text-secondary)' }}>
              {label}
            </p>
          )}
          {controls && (
            <button
              type="button"
              onClick={() => setKey((k) => k + 1)}
              className="demo-footer__replay"
              aria-label="Replay animation"
            >
              ↺ Replay
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
