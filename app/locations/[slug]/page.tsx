import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { LOCATIONS, getLocation } from '@/data/locations'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import { url } from '@/lib/seo'

/** Statically generate the 6 known locations at build time. */
export const dynamicParams = false

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }))
}

type Params = Promise<{ slug: string }>

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) return {}

  const title = `Abacus, Vedic Maths & Tuition Classes in ${loc.name}, Chennai`
  const description = `Trusted kids learning centre in ${loc.name} — Abacus, Rubik's Cube, Vedic Maths, Phonics, Tamil Reading, Handwriting and Tuition in small batches. Serving ${loc.nearbyAreas.slice(0, 3).join(', ')} and nearby. Book a free demo today.`

  const path = `/locations/${loc.slug}`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: url(path),
      type: 'website',
      images: [{ url: loc.hero.image, alt: loc.hero.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [loc.hero.image],
    },
  }
}

export default async function LocationDetailPage({ params }: { params: Params }) {
  const { slug } = await params
  const location = getLocation(slug)
  if (!location) notFound()
  return <LocationPageTemplate location={location} />
}
