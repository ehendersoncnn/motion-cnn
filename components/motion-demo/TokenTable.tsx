'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { tokenMeta, easing } from '@/lib/motion-tokens'

export function DurationTokenTable() {
  const shouldReduce = useReducedMotion()
  const [activeToken, setActiveToken] = useState<string | null>(null)
  const [demoKey, setDemoKey] = useState(0)

  function handlePlay(name: string) {
    setActiveToken(name)
    setDemoKey((k) => k + 1)
  }

  const activeEntry = tokenMeta.duration.find((t) => t.name === activeToken)

  return (
    <div className="space-y-4">
      {/* Preview strip */}
      {activeEntry && (
        <div
          className="rounded-xl p-6 flex items-center justify-center"
          style={{
            background: 'var(--color-surface-raised)',
            border: '1px solid var(--color-border-subtle)',
            minHeight: 96,
          }}
        >
          <motion.div
            key={demoKey}
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: shouldReduce ? 0 : activeEntry.value,
              ease: easing.decelerate,
            }}
            className="flex items-center gap-3"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: 'var(--color-cnn-red)' }}
            />
            <span className="text-sm font-mono" style={{ color: 'var(--color-text-secondary)' }}>
              {activeEntry.ms}ms · {activeEntry.name}
            </span>
          </motion.div>
        </div>
      )}

      {/* Table */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ border: '1px solid var(--color-border-default)' }}
      >
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
              {['Token', 'Value', 'Use case', ''].map((col) => (
                <th
                  key={col}
                  className="text-left px-4 py-3 text-label-mono"
                  style={{ color: 'var(--color-text-tertiary)', background: 'var(--color-surface-overlay)' }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tokenMeta.duration.map((token, i) => (
              <tr
                key={token.name}
                style={{
                  borderBottom:
                    i < tokenMeta.duration.length - 1
                      ? '1px solid var(--color-border-subtle)'
                      : 'none',
                  background: activeToken === token.name ? 'var(--color-surface-hover)' : 'transparent',
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
                    duration.{token.name}
                  </span>
                </td>
                <td
                  className="px-4 py-3 font-mono text-xs"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {token.ms}ms
                </td>
                <td
                  className="px-4 py-3 text-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {token.use}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handlePlay(token.name)}
                    className="text-xs px-2.5 py-1 rounded transition-colors"
                    style={{
                      background: 'var(--color-surface-card)',
                      color: 'var(--color-text-tertiary)',
                      border: '1px solid var(--color-border-subtle)',
                    }}
                  >
                    Preview
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
