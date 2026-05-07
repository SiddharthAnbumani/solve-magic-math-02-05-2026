import Link from 'next/link'
import { ArrowRight, ArrowUpRight, MapPin, Phone } from 'lucide-react'

import { PHONE, PHONE_DISPLAY, WHATSAPP } from '@/lib/contact'
import { url } from '@/lib/seo'
import {
  breadcrumbSchema,
  combine,
  faqSchema,
  localBusinessSchema,
  type FaqItem,
} from '@/lib/jsonld'
import type { Location } from '@/data/locations'
import { PROGRAMS } from '@/data/programs'

import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import FaqSection from '@/components/seo/FaqSection'

const locationFaqs = (loc: Location): FaqItem[] => [
  {
    question: `Where is Magic Maths in ${loc.name}?`,
    answer: `We serve ${loc.name} and nearby areas including ${loc.nearbyAreas
      .slice(0, 4)
      .join(
        ', ',
      )}. Call ${PHONE_DISPLAY} and we'll point you to the slot closest to you.`,
  },
  {
    question: `What programs are available at the ${loc.name} centre?`,
    answer:
      'All seven programs are available — Abacus, Rubik\'s Cube, Vedic Maths, Phonics, Tamil Reading, Handwriting and personalised Tuition. Mix and match based on your child\'s age and goals.',
  },
  {
    question: 'How small are the batches?',
    answer:
      'Every batch is capped at 8 students. Trainers know each child by name, track progress weekly, and share honest parent updates — not just generic report cards.',
  },
  {
    question: 'What ages do you teach?',
    answer:
      'Ages 4 to 16 across our programs. Phonics begins at 4, Abacus from 6, Vedic Maths and Rubik\'s Cube from 7+, and Tuition aligns to your child\'s school class.',
  },
  {
    question: 'Is the demo class really free?',
    answer:
      'Yes — 45 minutes, no charge, no enrolment pressure. Your child meets the trainer, you get an honest read on whether the programme fits.',
  },
  {
    question: `Do you offer weekend or holiday batches in ${loc.name}?`,
    answer:
      'Yes. Most parents in this neighbourhood pick a mid-week evening slot plus a weekend reinforcement session. We work around school timetables and exam weeks.',
  },
]

const breadcrumbs = (loc: Location) => [
  { name: 'Home', href: '/' },
  { name: 'Locations', href: '/locations' },
  { name: loc.name, href: `/locations/${loc.slug}` },
]

export default function LocationPageTemplate({
  location,
}: {
  location: Location
}) {
  const faqs = locationFaqs(location)
  const crumbs = breadcrumbs(location)

  return (
    <main className="bg-white text-slate-900">
      <JsonLd
        data={combine([
          localBusinessSchema({
            id: `${url(`/locations/${location.slug}`)}#localbusiness`,
            name: `Magic Maths · ${location.name}`,
            areaServed: location.name,
            geo: location.geo,
            image: location.hero.image,
          }),
          breadcrumbSchema(
            crumbs.map((c) => ({ name: c.name, url: c.href })),
          ),
          faqSchema(faqs),
        ])}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-indigo-700 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-20">
          <Breadcrumbs items={crumbs} className="text-white/70 [&_*]:text-white/70" />

          <div className="mt-8 flex items-center gap-2 text-xs font-montserrat-700 uppercase tracking-[0.22em] text-white/70">
            <MapPin size={12} strokeWidth={2} />
            <span>
              Centre · {location.name}, {location.city} {location.pincode}
            </span>
          </div>

          <h1 className="mt-5 font-monument-400 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.05] max-w-4xl">
            Abacus, Vedic Maths &amp; Tuition Classes in{' '}
            <span className="text-red-400">{location.name}</span>, Chennai.
          </h1>

          <p className="mt-6 font-montserrat-400 text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed">
            {location.intro}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-monument text-sm hover:bg-slate-100 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Book Free Demo <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-red-800 text-white font-monument text-sm hover:bg-red-900 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              <Phone size={16} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* WHY THIS NEIGHBOURHOOD */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="inline-block font-montserrat-700 text-xs uppercase tracking-widest text-black">
              Why parents in {location.name} choose us
            </span>
            <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl tracking-tight text-indigo-800">
              Built around your child&apos;s actual schedule.
            </h2>
            <p className="mt-6 font-montserrat-400 text-lg text-slate-700 leading-relaxed">
              {location.why}
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-7">
              <h3 className="font-monument-700 text-lg text-slate-900">
                Easily reachable from
              </h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
                {location.nearbyAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 font-montserrat-500 text-sm text-slate-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-700" />
                    {area}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="font-montserrat-700 text-xs uppercase tracking-widest text-slate-500">
                  Local landmarks
                </h4>
                <p className="mt-2 font-montserrat-400 text-sm text-slate-700 leading-relaxed">
                  {location.landmarks.join(' · ')}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* PROGRAMS — internal-link surface */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block font-montserrat-700 text-xs uppercase tracking-widest text-black">
              Programs in {location.name}
            </span>
            <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl tracking-tight text-indigo-800">
              Pick the right fit for your child.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMS.map((p) => {
              const Icon = p.icon
              return (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  className="group flex flex-col p-7 rounded-3xl bg-white border border-slate-200 hover:border-indigo-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-indigo-700 text-white inline-flex items-center justify-center">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <span className="font-montserrat-500 text-xs text-slate-500 uppercase tracking-widest">
                      {p.ageRange}
                    </span>
                  </div>
                  <h3 className="mt-6 font-monument-700 text-xl text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-montserrat-500 text-sm text-indigo-700">
                    {p.tagline}
                  </p>
                  <p className="mt-3 font-montserrat-400 text-sm leading-relaxed text-slate-600">
                    {p.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 font-monument text-sm text-indigo-700 group-hover:gap-2 transition-all">
                    Learn about {p.title} <ArrowUpRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <span className="font-montserrat-500 text-sm text-slate-500">
              Popular near {location.name}:
            </span>
            {['abacus', 'vedic', 'tuition', 'phonics'].map((slug) => {
              const p = PROGRAMS.find((x) => x.slug === slug)
              if (!p) return null
              return (
                <Link
                  key={slug}
                  href={`/programs/${slug}`}
                  className="font-montserrat-500 text-sm text-indigo-700 hover:underline"
                >
                  {p.title} in {location.name}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        faqs={faqs}
        eyebrow={`FAQ · ${location.name}`}
        title={`Magic Maths in ${location.name}`}
        subtitle="What parents nearby ask before they book."
      />

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-indigo-700 px-8 py-16 lg:p-20 text-white">
            <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/10" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-white/5" />

            <div className="relative max-w-2xl">
              <h2 className="font-monument-700 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                Try a free demo near {location.name}.
              </h2>
              <p className="mt-4 font-montserrat-400 text-base lg:text-lg text-white/85 max-w-xl">
                45 minutes, zero pressure. Your child meets the trainer, you get an honest read on whether it&apos;s the right fit.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-monument text-sm hover:bg-slate-100 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  WhatsApp Us <ArrowRight size={16} />
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-red-800 text-white font-monument text-sm hover:bg-red-900 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  <Phone size={16} /> {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
