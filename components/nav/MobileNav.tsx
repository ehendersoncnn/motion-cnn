'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { duration, easing } from '@/lib/motion-tokens'
import { navigation } from '@/lib/navigation'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname()
  const shouldReduce = useReducedMotion()

  const drawerTransition = shouldReduce
    ? { duration: 0 }
    : { duration: duration.moderate, ease: easing.decelerate }

  const backdropTransition = shouldReduce
    ? { duration: 0 }
    : { duration: duration.moderate, ease: easing.decelerate }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close navigation"
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: 'rgba(0, 0, 0, 0.5)' }}
            initial={{ opacity: shouldReduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: shouldReduce ? 1 : 0 }}
            transition={backdropTransition}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.nav
            id="mobile-nav-drawer"
            aria-label="Site navigation"
            className="fixed top-0 left-0 bottom-0 z-50 flex flex-col lg:hidden overflow-y-auto"
            style={{
              width: 'min(100vw, var(--sidebar-width))',
              background: 'var(--color-surface-raised)',
              borderRight: '1px solid var(--color-border-subtle)',
            }}
            initial={{ x: shouldReduce ? 0 : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: shouldReduce ? 0 : '-100%' }}
            transition={drawerTransition}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 shrink-0"
              style={{
                height: 'var(--topbar-height)',
                borderBottom: '1px solid var(--color-border-subtle)',
              }}
            >
              <Link href="/" className="flex items-center gap-2" onClick={onClose}>
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
              <button
                type="button"
                aria-label="Close navigation"
                className="text-nav p-2 rounded-md transition-colors hover:bg-[var(--color-surface-hover)]"
                onClick={onClose}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="4" y1="4" x2="14" y2="14" />
                  <line x1="14" y1="4" x2="4" y2="14" />
                </svg>
              </button>
            </div>

            {/* Nav sections */}
            <div className="flex-1 px-3 py-4 space-y-6">
              {navigation.map((section) => (
                <div key={section.title}>
                  <p className="text-label-mono mb-2 ml-2">{section.title}</p>
                  <ul className="space-y-0.5">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href

                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={onClose}
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

            <div
              className="px-5 py-4 shrink-0 text-meta"
              style={{ borderTop: '1px solid var(--color-border-subtle)' }}
            >
              v1.0 · CNN Digital Products
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
