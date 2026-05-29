interface ContentColumnProps {
  children: React.ReactNode
  className?: string
  padded?: boolean
}

export function ContentColumn({ children, className, padded = true }: ContentColumnProps) {
  return (
    <div className={`content-column ${padded ? 'section-padding' : ''} ${className ?? ''}`}>
      {children}
    </div>
  )
}
