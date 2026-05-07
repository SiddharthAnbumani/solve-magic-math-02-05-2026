import type { Variants } from 'framer-motion'

/**
 * Premium ease curve — out-quint feel (Linear / Stripe / Framer style).
 * Used as the default for all directional reveals.
 */
const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const

/**
 * Soft, generous fade-up. Used for headlines, paragraphs, content blocks.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: PREMIUM_EASE },
  },
}

/**
 * Tighter fade-up for trust lines, captions, footnotes.
 */
export const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: PREMIUM_EASE },
  },
}

/**
 * Gentle scale-in. Used for hero cards, large media blocks.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: PREMIUM_EASE },
  },
}

/**
 * Container for orchestrating staggered child reveals.
 * Children should declare their own `hidden` / `show` variants.
 */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
}

/**
 * Tighter stagger for grids of many small items.
 */
export const staggerContainerTight: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
}
