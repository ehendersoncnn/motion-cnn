/**
 * CNN Motion Design System — Motion Tokens
 *
 * Single source of truth for all animation values.
 * Import from here in ALL Framer Motion transition objects.
 * Never hardcode duration or easing values.
 *
 * Usage:
 *   import { duration, easing, spring } from '@/lib/motion-tokens'
 *   transition={{ duration: duration.moderate, ease: easing.standard }}
 */

// ─── Duration ────────────────────────────────────────────────────────────────
// Named scale from micro (imperceptible) to expressive (cinematic)

export const duration = {
  /**
   * 80ms — Icon state changes, toggle switches, checkbox feedback.
   * So fast it's felt, not watched.
   */
  micro: 0.08,

  /**
   * 150ms — Tooltip appear/disappear, hover state, ripple feedback.
   * Immediate but visible.
   */
  fast: 0.15,

  /**
   * 250ms — Dropdown open, modal entry, tab switch.
   * The standard workhorse. Most product UI uses this.
   */
  moderate: 0.25,

  /**
   * 400ms — Bottom sheet, page slide, content panel.
   * Purposeful movement with perceptible travel.
   */
  slow: 0.4,

  /**
   * 600ms — Story viewer entry, hero container expand, fullscreen transitions.
   * Cinematic. Reserved for the most significant spatial changes.
   */
  expressive: 0.6,
} as const

export type DurationToken = keyof typeof duration

// ─── Easing ──────────────────────────────────────────────────────────────────
// Cubic bezier curves. Format: [x1, y1, x2, y2]

export const easing = {
  /**
   * Standard easing — For elements that stay within the viewport.
   * Most UI motion uses this. Starts fast, decelerates to stop.
   */
  standard: [0.4, 0.0, 0.2, 1.0] as const,

  /**
   * Decelerate — For elements entering the screen (arriving).
   * Starts at max velocity, decelerates to rest. Feels like landing.
   */
  decelerate: [0.0, 0.0, 0.2, 1.0] as const,

  /**
   * Accelerate — For elements exiting the screen (departing).
   * Starts slow, accelerates to full speed. Feels like launching.
   */
  accelerate: [0.4, 0.0, 1.0, 1.0] as const,

  /**
   * Expressive — For brand moments, hero animations, delightful interactions.
   * Spring-like overshoot. Use sparingly — CNN is editorial, not playful.
   */
  expressive: [0.34, 1.56, 0.64, 1.0] as const,

  /**
   * Linear — For progress indicators, loading bars, spinners.
   * Never use for position or opacity transitions.
   */
  linear: [0.0, 0.0, 1.0, 1.0] as const,
} as const

export type EasingToken = keyof typeof easing

// ─── Spring Configs ───────────────────────────────────────────────────────────
// For Framer Motion's spring physics — use instead of duration+ease
// when gesture-driven or overshoot behavior is needed.

export const spring = {
  /**
   * Gentle — For draggable elements releasing to a position.
   * Smooth return with minimal bounce.
   */
  gentle: {
    type: 'spring' as const,
    stiffness: 120,
    damping: 20,
    mass: 1,
  },

  /**
   * Snappy — For quick interactive responses (card snap, list reorder).
   * Fast with very slight bounce.
   */
  snappy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 30,
    mass: 0.8,
  },

  /**
   * Stiff — For elements that need to feel physically tethered.
   * Essentially no bounce — more like a rubber band snapping taut.
   */
  stiff: {
    type: 'spring' as const,
    stiffness: 600,
    damping: 35,
    mass: 1,
  },
} as const

// ─── Scale ────────────────────────────────────────────────────────────────────
// For scale-based transitions (press states, card expand/collapse)

export const scale = {
  /** Tap/press feedback — card pressed down */
  pressed: 0.97,
  /** Hover state lift */
  hover: 1.02,
  /** Card to fullscreen start scale */
  cardStart: 0.92,
  /** Full size */
  full: 1.0,
} as const

// ─── Stagger ─────────────────────────────────────────────────────────────────
// For list/grid animations where children stagger-enter

export const stagger = {
  /** Between list items — fast */
  fast: 0.04,
  /** Between cards in a feed */
  moderate: 0.06,
  /** Between sections on page load */
  slow: 0.1,
} as const

// ─── Delay ───────────────────────────────────────────────────────────────────

export const delay = {
  /** No delay */
  none: 0,
  /** After a trigger event settles */
  micro: 0.05,
  /** After a transition completes */
  short: 0.1,
  /** After a page has loaded */
  medium: 0.2,
  /** After full page transition */
  long: 0.35,
} as const

// ─── Pre-built Transition Presets ─────────────────────────────────────────────
// Composed from the above — convenient for common patterns

export const transition = {
  /** Standard fade in */
  fadeIn: {
    duration: duration.moderate,
    ease: easing.decelerate,
  },

  /** Standard fade out */
  fadeOut: {
    duration: duration.fast,
    ease: easing.accelerate,
  },

  /** Modal / sheet enter */
  sheetEnter: {
    duration: duration.slow,
    ease: easing.decelerate,
  },

  /** Modal / sheet exit */
  sheetExit: {
    duration: duration.moderate,
    ease: easing.accelerate,
  },

  /** Story viewer expand — container transform */
  storyExpand: {
    duration: duration.expressive,
    ease: easing.standard,
  },

  /** Story viewer collapse */
  storyCollapse: {
    duration: duration.slow,
    ease: easing.accelerate,
  },

  /** Page slide navigation */
  pageSlide: {
    duration: duration.slow,
    ease: easing.standard,
  },

  /** Micro feedback (press, toggle) */
  micro: {
    duration: duration.micro,
    ease: easing.standard,
  },
} as const

// ─── Token Metadata ───────────────────────────────────────────────────────────
// Used by app/tokens/page.tsx to render the token reference table

export const tokenMeta = {
  duration: [
    { name: 'micro',      value: duration.micro,      ms: 80,  use: 'Icon states, toggle feedback' },
    { name: 'fast',       value: duration.fast,       ms: 150, use: 'Tooltips, hover states' },
    { name: 'moderate',   value: duration.moderate,   ms: 250, use: 'Modals, dropdowns, tab switches' },
    { name: 'slow',       value: duration.slow,       ms: 400, use: 'Sheets, page slides, panels' },
    { name: 'expressive', value: duration.expressive, ms: 600, use: 'Story viewer, hero transitions' },
  ],
  easing: [
    { name: 'standard',    value: easing.standard,    use: 'Default — elements within viewport' },
    { name: 'decelerate',  value: easing.decelerate,  use: 'Enter / arrive transitions' },
    { name: 'accelerate',  value: easing.accelerate,  use: 'Exit / depart transitions' },
    { name: 'expressive',  value: easing.expressive,  use: 'Brand moments, hero animations' },
    { name: 'linear',      value: easing.linear,      use: 'Progress bars, loading indicators' },
  ],
} as const
