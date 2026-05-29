import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function TopBar() {
  return (
    <header
      className="flex items-center justify-between px-4 sticky top-0 z-20"
      style={{
        height: 'var(--topbar-height)',
        background: 'var(--color-surface-raised)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <Link href="/" className="flex items-center gap-2">
        <span
          className="text-nav font-bold uppercase tracking-normal"
          style={{ color: 'var(--color-cnn-red)', fontSize: '12px' }}
        >
          CNN
        </span>
        <span
          className="text-nav uppercase tracking-normal"
          style={{ color: 'var(--type-meta)', fontSize: '11px', fontWeight: 400 }}
        >
          Motion
        </span>
      </Link>

      <div className="flex items-center gap-1">
        <ThemeToggle className="p-2" />

        <button
          type="button"
          aria-label="Open navigation"
          className="text-nav p-2 rounded-md transition-colors hover:bg-[var(--color-surface-hover)]"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="2" y1="5" x2="16" y2="5" />
            <line x1="2" y1="9" x2="16" y2="9" />
            <line x1="2" y1="13" x2="16" y2="13" />
          </svg>
        </button>
      </div>
    </header>
  )
}
