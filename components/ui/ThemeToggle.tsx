'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle color theme"
        className={className}
        style={{ width: 36, height: 36 }}
      />
    )
  }

  const isDark = (resolvedTheme ?? theme) === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`rounded-md transition-colors hover:bg-[var(--color-surface-hover)] ${className ?? ''}`}
      style={{ color: 'var(--color-text-secondary)' }}
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="9" r="3.5" />
          <line x1="9" y1="1.5" x2="9" y2="3" />
          <line x1="9" y1="15" x2="9" y2="16.5" />
          <line x1="1.5" y1="9" x2="3" y2="9" />
          <line x1="15" y1="9" x2="16.5" y2="9" />
          <line x1="3.4" y1="3.4" x2="4.5" y2="4.5" />
          <line x1="13.5" y1="13.5" x2="14.6" y2="14.6" />
          <line x1="13.5" y1="4.5" x2="14.6" y2="3.4" />
          <line x1="3.4" y1="14.6" x2="4.5" y2="13.5" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 2.5a6.5 6.5 0 1 0 0 13 4.5 4.5 0 0 1 0-13z" />
        </svg>
      )}
    </button>
  )
}
