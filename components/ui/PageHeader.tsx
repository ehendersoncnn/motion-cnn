import { ContentColumn } from '@/components/ui/ContentColumn'

interface PageHeaderProps {
  title: string
  subtitle?: string
  label?: string
}

export function PageHeader({ title, subtitle, label }: PageHeaderProps) {
  return (
    <header className="section-divider">
      <ContentColumn>
        {label && (
          <p className="text-label-mono mb-3">{label}</p>
        )}
        <h1 className="text-display text-[2.5rem] lg:text-[3rem] mb-5 max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-body max-w-2xl">{subtitle}</p>
        )}
      </ContentColumn>
    </header>
  )
}
