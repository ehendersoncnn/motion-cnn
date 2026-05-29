interface DoDontProps {
  dos: string[]
  donts: string[]
  className?: string
}

export function DoDont({ dos, donts, className }: DoDontProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className ?? ''}`}>
      <div className="do-block">
        <p
          className="text-label-mono mb-3"
          style={{ borderLeft: 'none', paddingLeft: 0, color: 'rgba(0, 180, 100, 0.9)' }}
        >
          Do
        </p>
        <div className="space-y-2">
          {dos.map((item) => (
            <p key={item} className="text-body text-sm">
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="dont-block">
        <p
          className="text-label-mono mb-3"
          style={{ borderLeft: 'none', paddingLeft: 0, color: 'rgba(220, 80, 80, 0.9)' }}
        >
          Don&rsquo;t
        </p>
        <div className="space-y-2">
          {donts.map((item) => (
            <p key={item} className="text-body text-sm">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
