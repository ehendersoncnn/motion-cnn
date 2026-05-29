import type { Metadata } from 'next'
import { JetBrains_Mono, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/nav/Sidebar'
import { TopBar } from '@/components/nav/TopBar'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

/*
 * CNN Sans (Display + Text) is proprietary — not publicly available.
 * Source Sans 3 is the closest Google Fonts substitute for both roles:
 * humanist neo-grotesque proportions, strong weight range, editorial legibility.
 */
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans-family',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono-family',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s — CNN Motion',
    default: 'CNN Motion Design System',
  },
  description:
    "The living motion design system for CNN's product ecosystem — iOS, Android, Web, and CTV.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${sourceSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ThemeProvider>
          <div className="flex min-h-screen">
            {/* Sidebar — hidden on mobile */}
            <aside
              className="hidden lg:flex flex-col fixed top-0 left-0 h-full z-30"
              style={{ width: 'var(--sidebar-width)' }}
            >
              <Sidebar />
            </aside>

            {/* Main content */}
            <div
              className="flex flex-col flex-1 min-w-0 lg:pl-[var(--sidebar-width)]"
            >
              {/* Mobile top bar */}
              <div className="lg:hidden">
                <TopBar />
              </div>

              <main className="flex-1 main-content">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
