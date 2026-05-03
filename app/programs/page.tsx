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
<section className="bg-indigo-700 text-white min-h-150 flex flex-col justify-center items-center text-center">
  <h1 className="text-5xl font-monument-700 uppercase tracking-wider">
    Our Programs
  </h1>

  <p className="mt-4 font-montserrat-600 text-2xl">
    Four Programs,{" "}
    <span className="text-red-400">One Sharper Mind</span>
  </p>
</section>

      {/* PROGRAMS GRID */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROGRAMS.map((p) => {
  const Icon = p.icon;

  return (
    <Link
      key={p.slug}
      href={`/programs/${p.slug}`}
      className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-indigo-700 hover:shadow-xl transition-all duration-300"
    >
      
      {/* IMAGE SECTION */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* OVERLAY (icon + age) */}
        <div className="absolute inset-0 flex items-start justify-between p-4">
          
          <div className="w-12 h-12 rounded-xl bg-indigo-700 text-white flex items-center justify-center shadow-md">
            <Icon size={22} strokeWidth={1.75} />
          </div>

          <span className="font-montserrat-500 text-xs bg-white/90 backdrop-blur px-3 py-1 rounded-full text-slate-700 uppercase tracking-widest">
            {p.ageRange}
          </span>
        </div>

        {/* optional dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1">
        
        <h3 className="font-monument-700 text-2xl text-slate-900">
          {p.title}
        </h3>

        <p className="mt-1 font-montserrat-500 text-base text-indigo-700">
          {p.tagline}
        </p>

        <p className="mt-4 font-montserrat-400 text-sm leading-relaxed text-slate-600">
          {p.description}
        </p>

        {/* FOOTER */}
        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
          <span className="font-montserrat-500 text-xs text-slate-500">
            {p.duration}
          </span>

          <span className="inline-flex items-center gap-1 font-monument text-sm text-indigo-700 group-hover:gap-2 transition-all">
            View program <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
})}
          </div>
        </div>
      </section>

      {/* CTA */}
<section className="py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    <div className="relative overflow-hidden rounded-3xl bg-red-800 px-8 py-16 lg:p-20 text-white">
      
      {/* BACKGROUND CARDS */}
      <div className="pointer-events-none absolute inset-0">
        
        {/* Card 1 */}
        <div className="absolute -top-10 -left-10 w-72 h-44 bg-white/10 rounded-2xl rotate-[-12deg] blur-sm" />

        {/* Card 2 */}
        <div className="absolute top-20 -right-16 w-80 h-48 bg-white/10 rounded-2xl rotate-[10deg]" />

        {/* Card 3 */}
        <div className="absolute bottom-0 left-1/3 w-64 h-40 bg-white/10 rounded-2xl rotate-[6deg] blur-sm" />

      </div>

      {/* CONTENT */}
      <div className="relative max-w-2xl">
        <h2 className="font-monument-700 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
          Not sure which one?
        </h2>

        <p className="mt-4 font-montserrat-400 text-base lg:text-lg text-white/80">
          Book a free demo — we&apos;ll talk to your child, suggest the right starting point, and help you decide. No pressure, no fee on the demo.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-indigo-700 font-monument text-sm hover:bg-slate-100 transition"
          >
            Book Free Demo <ArrowRight size={16} />
          </Link>

          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-indigo-700 font-monument text-sm hover:bg-red-900 transition"
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
