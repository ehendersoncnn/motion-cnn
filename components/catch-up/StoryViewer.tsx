'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { transition, duration, easing } from '@/lib/motion-tokens'

const STORIES = [
  { id: 1, category: 'Politics', headline: 'Senate reaches bipartisan deal on infrastructure funding', color: '#1A1A2E' },
  { id: 2, category: 'Climate', headline: 'Scientists track record ocean temperatures for third year', color: '#0D1F2D' },
  { id: 3, category: 'Tech', headline: 'AI regulation framework proposed by international coalition', color: '#1A0D2E' },
]

export function ContainerTransformDemo() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const shouldReduce = useReducedMotion()

  const tx = shouldReduce ? { duration: 0 } : transition.storyExpand

  return (
    <div className="relative w-full" style={{ minHeight: 360 }}>
      {/* Card grid */}
      <div className="flex gap-3 p-4 justify-center flex-wrap">
        {STORIES.map((story) => (
          <motion.div
            key={story.id}
            layoutId={`story-${story.id}`}
            onClick={() => setExpanded(story.id)}
            className="cursor-pointer overflow-hidden"
            style={{
              width: 140,
              height: 200,
              borderRadius: 12,
              background: story.color,
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            whileHover={shouldReduce ? {} : { scale: 1.02 }}
            transition={tx}
          >
            <div className="p-3 h-full flex flex-col justify-between">
              <motion.span
                layoutId={`story-cat-${story.id}`}
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: 'var(--color-cnn-red)' }}
                transition={tx}
              >
                {story.category}
              </motion.span>
              <motion.p
                layoutId={`story-title-${story.id}`}
                className="text-xs leading-snug"
                style={{ color: 'rgba(255,255,255,0.85)' }}
                transition={tx}
              >
                {story.headline}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded story viewer */}
      <AnimatePresence>
        {expanded !== null && (
          <>
            {/* Scrim */}
            <motion.div
              className="absolute inset-0 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduce ? 0 : duration.fast }}
              style={{ background: 'rgba(0,0,0,0.6)' }}
              onClick={() => setExpanded(null)}
            />

            {/* Expanded card */}
            <motion.div
              layoutId={`story-${expanded}`}
              className="absolute inset-4 z-20 overflow-hidden"
              style={{
                borderRadius: 16,
                background: STORIES.find((s) => s.id === expanded)?.color,
              }}
              transition={tx}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Progress bar */}
                <div className="flex gap-1 mb-4">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-0.5 rounded-full flex-1"
                      style={{
                        background: i === 0 ? 'white' : 'rgba(255,255,255,0.25)',
                      }}
                    />
                  ))}
                </div>

                <motion.span
                  layoutId={`story-cat-${expanded}`}
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: 'var(--color-cnn-red)' }}
                  transition={tx}
                >
                  {STORIES.find((s) => s.id === expanded)?.category}
                </motion.span>

                <motion.h2
                  layoutId={`story-title-${expanded}`}
                  className="text-xl font-semibold leading-tight mb-4"
                  style={{ color: 'white' }}
                  transition={tx}
                >
                  {STORIES.find((s) => s.id === expanded)?.headline}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: shouldReduce ? 0 : 0.3,
                    duration: shouldReduce ? 0 : duration.moderate,
                    ease: easing.decelerate,
                  }}
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  This is where the story content would appear — pulling in the full article,
                  photo essay, or live update. The viewer supports swipe-to-advance and
                  tap-to-pause gestures.
                </motion.p>

                {/* Close */}
                <button
                  onClick={() => setExpanded(null)}
                  className="mt-4 self-start text-xs px-3 py-2 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  ↙ Collapse
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
