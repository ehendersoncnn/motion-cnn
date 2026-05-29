import { ContentColumn } from '@/components/ui/ContentColumn'

interface SectionBlockProps {
  label?: string
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function SectionBlock({
  label,
  title,
  description,
  children,
  className,
}: SectionBlockProps) {
  const hasHeader = label || title || description

  return (
    <section className={`section-divider ${className ?? ''}`}>
      {hasHeader && (
        <ContentColumn>
          <div className="mb-10 max-w-2xl">
            {label && (
              <p className="text-label-mono mb-3">{label}</p>
            )}
            {title && (
              <h2 className="text-heading text-[22px] lg:text-[26px] mb-3">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-body">{description}</p>
            )}
          </div>
        </ContentColumn>
      )}
      {children}
    </section>
  )
}
