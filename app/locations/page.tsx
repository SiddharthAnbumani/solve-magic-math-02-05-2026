import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'

import { LOCATIONS } from '@/data/locations'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Our Centres Across Chennai',
  description:
    'Find your nearest Magic Maths centre — Anna Nagar, Velachery, Tambaram, Medavakkam, Chromepet and Sholinganallur. Abacus, Vedic Maths, Tuition and more, taught in small batches.',
  alternates: { canonical: '/locations' },
  openGraph: {
    title: 'Magic Maths · Centres Across Chennai',
    description:
      'Six centres serving Chennai families — Abacus, Rubik\'s Cube, Vedic Maths, Phonics, Tamil Reading, Handwriting and Tuition.',
    type: 'website',
    url: '/locations',
     images: [
    {
      url: '/OG.png',
      width: 1200,
      height: 630,
      alt: 'Magic Maths Learning Institute Chennai',
    },
  ],
  },
}

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Locations', href: '/locations' },
]

export default function LocationsIndexPage() {
  return (
    <main className="bg-white text-slate-900">
      <JsonLd
        data={breadcrumbSchema(
          crumbs.map((c) => ({ name: c.name, url: c.href })),
        )}
      />

      {/* HERO */}
      <section className="bg-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-20">
          <Breadcrumbs items={crumbs} className="text-white/70 [&_*]:text-white/70" />

          <span className="mt-8 inline-block font-montserrat-700 text-xs uppercase tracking-[0.22em] text-white/70">
            Locations
          </span>
          <h1 className="mt-3 font-monument-400 text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            Six centres. <br className="hidden sm:block" />
            One <span className="text-red-400">Chennai</span>.
          </h1>
          <p className="mt-6 font-montserrat-400 text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed">
            Find the Magic Maths nearest to you. Same small batches, same trainers who know your child by name — across Anna Nagar, Velachery, Tambaram, Medavakkam, Chromepet and Sholinganallur.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex flex-col p-7 rounded-3xl bg-white border border-slate-200 hover:border-indigo-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-700 text-white inline-flex items-center justify-center">
                  <MapPin size={20} strokeWidth={1.75} />
                </div>
                <h2 className="mt-6 font-monument-700 text-2xl text-slate-900">
                  {loc.name}
                </h2>
                <p className="mt-1 font-montserrat-500 text-sm text-slate-500">
                  {loc.city} · {loc.pincode}
                </p>
                <p className="mt-4 font-montserrat-400 text-sm leading-relaxed text-slate-600 line-clamp-3">
                  Serves {loc.nearbyAreas.slice(0, 3).join(', ')} and nearby families.
                </p>
                <span className="mt-6 inline-flex items-center gap-1 font-monument text-sm text-indigo-700 group-hover:gap-2 transition-all">
                  View {loc.name} centre <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
