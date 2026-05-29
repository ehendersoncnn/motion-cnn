import { ContentColumn } from '@/components/ui/ContentColumn'

interface SectionBlockProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function SectionBlock({ title, description, children, className }: SectionBlockProps) {
  return (
    <section className={`section-divider ${className ?? ''}`}>
      {(title || description) && (
        <ContentColumn>
          <div className="mb-8 max-w-2xl">
            {title && (
              <h2 className="text-heading text-[22px] lg:text-[26px] mb-2">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-body">
                {description}
              </p>
            )}
          </div>
        </ContentColumn>
      )}
      {children}
    </section>
  )
}
