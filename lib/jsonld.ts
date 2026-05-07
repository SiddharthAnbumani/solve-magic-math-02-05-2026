/**
 * JSON-LD schema.org generators.
 * Compose multiple schemas with `combine([...])`.
 *
 * Reference: https://developers.google.com/search/docs/appearance/structured-data
 */

import {
  NAP,
  SERVICE_AREAS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIALS,
  absoluteUrl,
  url,
} from './seo'

type Schema = Record<string, unknown>

const ctx = <T extends Schema>(obj: T) =>
  ({ '@context': 'https://schema.org', ...obj }) as T & {
    '@context': 'https://schema.org'
  }

/* ───────────────────────── Organization / Site ───────────────────────── */

export const organizationSchema = () =>
  ctx({
    '@type': 'EducationalOrganization',
    '@id': `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/logo.png'),
    image: absoluteUrl('/og-image.jpg'),
    description: SITE_DESCRIPTION,
    address: postalAddress(),
    telephone: NAP.phoneDisplay,
    email: NAP.email,
    sameAs: SOCIALS,
  })

export const websiteSchema = () =>
  ctx({
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_URL}#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  })

/* ───────────────────────── Local business ───────────────────────── */

type LocalBusinessOverride = {
  /** "Magic Maths · Anna Nagar" */
  name?: string
  /** Specific area like "Anna Nagar" */
  areaServed?: string
  /** Override @id (each branch should have a unique id) */
  id?: string
  /** Override the address for branch-specific schema */
  address?: ReturnType<typeof postalAddress>
  geo?: { latitude: number; longitude: number }
  image?: string
  priceRange?: string
}

export const localBusinessSchema = (override: LocalBusinessOverride = {}) =>
  ctx({
    '@type': 'LocalBusiness',
    '@id': override.id ?? `${SITE_URL}#localbusiness`,
    name: override.name ?? SITE_NAME,
    url: SITE_URL,
    image: absoluteUrl(override.image ?? '/og-image.jpg'),
    description: SITE_DESCRIPTION,
    telephone: NAP.phoneDisplay,
    email: NAP.email,
    priceRange: override.priceRange ?? '₹₹',
    address: override.address ?? postalAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: (override.geo ?? NAP.geo).latitude,
      longitude: (override.geo ?? NAP.geo).longitude,
    },
    areaServed: override.areaServed
      ? [override.areaServed, 'Chennai']
      : ['Chennai', ...SERVICE_AREAS],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    sameAs: SOCIALS,
  })

const postalAddress = () => ({
  '@type': 'PostalAddress' as const,
  streetAddress: NAP.street,
  addressLocality: NAP.locality,
  addressRegion: NAP.region,
  postalCode: NAP.postalCode,
  addressCountry: NAP.country,
})

/* ───────────────────────── Course ───────────────────────── */

type CourseInput = {
  name: string
  description: string
  image?: string
  ageRange?: string
  duration?: string
  url?: string
}

export const courseSchema = (c: CourseInput) =>
  ctx({
    '@type': 'Course',
    name: c.name,
    description: c.description,
    image: c.image ? absoluteUrl(c.image) : undefined,
    url: c.url ? absoluteUrl(c.url) : undefined,
    provider: {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    educationalCredentialAwarded: 'Level Certification',
    typicalAgeRange: c.ageRange?.replace(/^Ages\s+/i, ''),
    timeRequired: c.duration,
    inLanguage: 'en-IN',
    offers: {
      '@type': 'Offer',
      price: '1000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      category: 'Subscription',
    },
  })

/* ───────────────────────── FAQ ───────────────────────── */

export type FaqItem = { question: string; answer: string }

export const faqSchema = (faqs: ReadonlyArray<FaqItem>) =>
  ctx({
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  })

/* ───────────────────────── Breadcrumb ───────────────────────── */

export type BreadcrumbItem = { name: string; url: string }

export const breadcrumbSchema = (items: ReadonlyArray<BreadcrumbItem>) =>
  ctx({
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.url),
    })),
  })

/* ───────────────────────── Review / AggregateRating ───────────────────────── */

type Review = { author: string; rating: number; body: string; date?: string }

export const aggregateRatingSchema = (
  reviews: ReadonlyArray<Review>,
  itemRefId: string = `${SITE_URL}#organization`,
) => {
  if (reviews.length === 0) return null
  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  return ctx({
    '@type': 'AggregateRating',
    itemReviewed: { '@id': itemRefId },
    ratingValue: Number(avg.toFixed(1)),
    bestRating: 5,
    worstRating: 1,
    reviewCount: reviews.length,
  })
}

/* ───────────────────────── Combine helper ───────────────────────── */

export const combine = (schemas: ReadonlyArray<Schema | null | undefined>) =>
  schemas.filter(Boolean) as Schema[]

export { url }
