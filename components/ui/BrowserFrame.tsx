interface BrowserFrameProps {
  children: React.ReactNode
  scale?: number
  url?: string
  className?: string
}

export function BrowserFrame({
  children,
  scale = 0.75,
  url = 'cnn.com',
  className,
}: BrowserFrameProps) {
  const width = 800
  const height = 520
  const scaledHeight = height * scale

  return (
    <div
      className={className}
      style={{
        width: width * scale,
        height: scaledHeight,
        position: 'relative',
      }}
    >
      <div
        style={{
          width,
          height,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          position: 'absolute',
          top: 0,
          left: '50%',
          marginLeft: -(width / 2),
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid var(--color-border-default)',
          background: 'var(--color-surface-raised)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.24)',
        }}
      >
        {/* Title bar */}
        <div
          style={{
            height: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '0 12px',
            background: 'var(--color-surface-overlay)',
            borderBottom: '1px solid var(--color-border-subtle)',
          }}
        >
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
          </div>
          <div
            style={{
              flex: 1,
              height: 26,
              borderRadius: 6,
              background: 'var(--color-surface-card)',
              border: '1px solid var(--color-border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              color: 'var(--color-text-tertiary)',
            }}
          >
            {url}
          </div>
        </div>

        {/* Content area */}
        <div
          style={{
            height: height - 40,
            overflow: 'hidden',
            background: 'var(--color-surface)',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
