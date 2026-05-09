import type { MetadataRoute } from 'next'
import { PROGRAMS } from '@/data/programs'
import { LOCATIONS } from '@/data/locations'

/**
 * Production base URL.
 * Set NEXT_PUBLIC_SITE_URL in your Vercel project env (e.g. https://magicmaths.in)
 * to override the fallback.
 */
const SITE_URL = (
 'https://magicmathslearning.com'
).replace(/\/$/, '')

type ChangeFreq = NonNullable<
  MetadataRoute.Sitemap[number]['changeFrequency']
>

const url = (path: string) => `${SITE_URL}${path}`

const STATIC_ROUTES: ReadonlyArray<{
  path: string
  changeFrequency: ChangeFreq
  priority: number
}> = [
  { path: '/',          changeFrequency: 'weekly',  priority: 1.0  },
  { path: '/programs',  changeFrequency: 'weekly',  priority: 0.95 },
  { path: '/locations', changeFrequency: 'monthly', priority: 0.9  },
  { path: '/pricing',   changeFrequency: 'monthly', priority: 0.85 },
  { path: '/contact',   changeFrequency: 'monthly', priority: 0.85 },
  { path: '/about',     changeFrequency: 'monthly', priority: 0.7  },
  { path: '/gallery',   changeFrequency: 'monthly', priority: 0.5  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const core: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: url(r.path),
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const programDetailPages: MetadataRoute.Sitemap = PROGRAMS.map((p) => ({
    url: url(`/programs/${p.slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: url(`/locations/${l.slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  return [...core, ...programDetailPages, ...locationPages]
}
