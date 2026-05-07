/**
 * Single source of truth for site-wide SEO constants.
 * Override SITE_URL via NEXT_PUBLIC_SITE_URL in your Vercel env.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://magicmaths.in'
).replace(/\/$/, '')

export const SITE_NAME = 'Magic Maths Learning & Education Institute'
export const BRAND_SHORT = 'Magic Maths'

export const SITE_DESCRIPTION =
  "Brain-development classes for kids ages 5–16 in Chennai — Abacus, Rubik's Cube, Vedic Maths, Phonics, Tamil Reading, Handwriting and personalised Tuition. Small batches, experienced trainers, real results."

export const TITLE_TEMPLATE = '%s · Magic Maths Chennai'

/** Name-Address-Phone — keep identical wherever you publish (GBP, Justdial, Sulekha…). */
export const NAP = {
  name: SITE_NAME,
  phone: '+917200757754',
  phoneDisplay: '+91 7200757754',
  email: 'magicmathslearning@gmail.com',
  street: 'Chandra Villa, Rajakilpakkam',
  locality: 'Chennai',
  region: 'TN',
  postalCode: '600073',
  country: 'IN',
  /**
   * TODO: replace with the real lat/lng of your primary centre.
   * Pull it from Google Maps → right-click → "What's here".
   */
  geo: { latitude: 12.9281, longitude: 80.1396 },
} as const

/** Set these once accounts exist — used in JSON-LD `sameAs`. */
export const SOCIALS: readonly string[] = [
  // 'https://facebook.com/magicmathslearning',
  // 'https://instagram.com/magicmathslearning',
  // 'https://youtube.com/@magicmathslearning',
  // 'https://www.justdial.com/Chennai/Magic-Maths',
]

export const DEFAULT_OG_IMAGE = '/og-image.jpg'

export const url = (path = '/') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

export const absoluteUrl = (path: string) =>
  path.startsWith('http') ? path : url(path)

/** Built-in Chennai areas your business serves. Matches data/locations.ts slugs. */
export const SERVICE_AREAS: readonly string[] = [
  'Anna Nagar',
  'Velachery',
  'Tambaram',
  'Medavakkam',
  'Chromepet',
  'Sholinganallur',
]
