import { DoDont } from '@/components/ui/DoDont'

interface PrincipleCardProps {
  number: string
  name: string
  tagline: string
  description: string
  dos: string[]
  donts: string[]
}

export function PrincipleCard({
  number,
  name,
  tagline,
  description,
  dos,
  donts,
}: PrincipleCardProps) {
  return (
    <div className="flex gap-6 lg:gap-8">
      <div
        className="text-display text-5xl lg:text-6xl shrink-0 leading-none select-none"
        style={{ color: 'var(--color-border-strong)', width: 56 }}
      >
        {number}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-3 lg:gap-4 mb-2 flex-wrap">
          <h2 className="text-heading text-[22px] lg:text-[26px]">{name}</h2>
          <span className="text-meta italic">{tagline}</span>
        </div>

        <p className="text-body mb-8 max-w-2xl">{description}</p>

        <DoDont dos={dos} donts={donts} />
      </div>
    </div>
  )
}
