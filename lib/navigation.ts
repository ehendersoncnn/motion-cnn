/**
 * CNN Motion Design System — Navigation
 *
 * This is the single source of truth for site navigation.
 * Add new sections here to make them appear in the sidebar.
 */

export interface NavItem {
  label: string
  href: string
  description?: string
  badge?: 'new' | 'updated' | 'beta'
  children?: NavItem[]
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      {
        label: 'Foundations',
        href: '/foundations',
        description: 'What motion means at CNN',
      },
      {
        label: 'Principles',
        href: '/principles',
        description: 'The 5 principles guiding every motion decision',
      },
    ],
  },
  {
    title: 'System',
    items: [
      {
        label: 'Motion Tokens',
        href: '/tokens',
        description: 'Duration, easing, and scale values',
      },
      {
        label: 'Product Motion',
        href: '/product-motion',
        description: 'Motion patterns in everyday UI',
      },
      {
        label: 'Transitions',
        href: '/transitions',
        description: 'Container transforms and page transitions',
      },
    ],
  },
  {
    title: 'Interaction',
    items: [
      {
        label: 'Gesture Systems',
        href: '/gesture-systems',
        description: 'Swipe, drag, and long press patterns',
      },
      {
        label: 'Spatial Navigation',
        href: '/spatial-navigation',
        description: 'Spatial hierarchy and context preservation',
      },
    ],
  },
  {
    title: 'Expression',
    items: [
      {
        label: 'Expressive Motion',
        href: '/expressive-motion',
        description: 'Brand-level and editorial animation',
      },
    ],
  },
  {
    title: 'Standards',
    items: [
      {
        label: 'Accessibility',
        href: '/accessibility',
        description: 'Reduced motion and WCAG compliance',
      },
      {
        label: 'Platform Guidance',
        href: '/platform',
        description: 'iOS, Android, Web, and CTV specifics',
      },
      {
        label: 'Implementation',
        href: '/implementation',
        description: 'Engineering handoff and code patterns',
      },
    ],
  },
  {
    title: 'More',
    items: [
      {
        label: 'Resources',
        href: '/resources',
        description: 'Tools, references, contribution guide',
      },
    ],
  },
]

// Flat list of all nav items — useful for breadcrumbs and search
export const allNavItems: NavItem[] = navigation.flatMap((section) =>
  section.items.flatMap((item) => [item, ...(item.children ?? [])])
)

// Find a nav item by href
export function findNavItem(href: string): NavItem | undefined {
  return allNavItems.find((item) => item.href === href)
}
