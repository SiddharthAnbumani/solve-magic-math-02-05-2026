import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react'
import { PROGRAMS } from '@/data/programs'

const PHONE = '+917550223044'

export const metadata: Metadata = {
  title: 'Our Programs — Solve Magic Maths',
  description:
    'Abacus, Rubik\'s Cube, Vedic Maths and Tuition. Four programs built to grow sharper minds in small batches.',
}

export default function ProgramsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
          <span className="inline-block font-montserrat-600 text-xs uppercase tracking-widest text-white/70">
            Our Programs
          </span>
          <h1 className="mt-4 font-monument-400 text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            Four programs.<br />
            One sharper mind.
          </h1>
          <p className="mt-6 font-montserrat-400 text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
            Pick one — or layer them. Each program is built to be fun first, rigorous second, and taught in small batches by trainers who actually love kids.
          </p>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROGRAMS.map((p) => {
              const Icon = p.icon
              return (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  className="group flex flex-col p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-indigo-700 text-white inline-flex items-center justify-center">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <span className="font-montserrat-500 text-xs text-slate-500 uppercase tracking-widest">
                      {p.ageRange}
                    </span>
                  </div>

                  <h3 className="mt-7 font-monument-700 text-2xl text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-montserrat-500 text-base text-indigo-700">
                    {p.tagline}
                  </p>
                  <p className="mt-4 font-montserrat-400 text-sm leading-relaxed text-slate-600">
                    {p.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-montserrat-500 text-xs text-slate-500">
                      {p.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 font-monument text-sm text-indigo-700 group-hover:gap-2 transition-all">
                      View program <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-indigo-700 px-8 py-16 lg:p-20 text-white">
            <div className="max-w-2xl">
              <h2 className="font-monument-700 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                Not sure which one?
              </h2>
              <p className="mt-4 font-montserrat-400 text-base lg:text-lg text-white/80">
                Book a free demo — we&apos;ll talk to your child, suggest the right starting point, and help you decide. No pressure, no fee on the demo.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-indigo-700 font-monument text-sm hover:bg-slate-100 transition"
                >
                  Book Free Demo <ArrowRight size={16} />
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-red-800 text-white font-monument text-sm hover:bg-red-900 transition"
                >
                  <Phone size={16} /> Call +91 75502 23044
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
