'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/navigation'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav
      className="flex flex-col h-full overflow-y-auto sticky top-0"
      style={{
        background: 'var(--color-surface-raised)',
        borderRight: '1px solid var(--color-border-subtle)',
        width: 'var(--sidebar-width)',
      }}
    >
      {/* Wordmark */}
      <div
        className="flex items-center px-5 shrink-0"
        style={{
          height: 'var(--topbar-height)',
          borderBottom: '1px solid var(--color-border-subtle)',
        }}
      >
        <Link href="/" className="flex items-center gap-2 group">
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
      </div>

      {/* Nav sections */}
      <div className="flex-1 px-3 py-4 space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <p className="text-label-mono mb-2 ml-2">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-nav flex items-center px-2 rounded-md transition-colors hover:bg-[var(--color-surface-hover)]"
                      style={{
                        minHeight: 36,
                        paddingTop: 6,
                        paddingBottom: 6,
                        color: isActive ? 'var(--color-cnn-red)' : 'var(--type-nav)',
                        background: isActive ? 'var(--color-cnn-red-subtle)' : undefined,
                        borderLeft: isActive ? '2px solid var(--color-cnn-red)' : '2px solid transparent',
                      }}
                    >
                      {item.label}
                      {item.badge && (
                        <span
                          className="ml-auto text-[10px] font-semibold tracking-wide uppercase px-1.5 py-0.5 rounded"
                          style={{
                            background: 'var(--color-cnn-red-subtle)',
                            color: 'var(--color-cnn-red)',
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer with theme toggle */}
      <div
        className="px-5 py-4 shrink-0 flex items-center justify-between gap-2"
        style={{
          borderTop: '1px solid var(--color-border-subtle)',
        }}
      >
        <span className="text-meta">v1.0 · CNN Digital Products</span>
        <ThemeToggle className="p-2" />
      </div>
    </nav>
  )
}
