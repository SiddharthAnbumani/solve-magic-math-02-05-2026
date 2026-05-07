import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react'
import { PROGRAMS } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Our Programs — Solve Magic Maths',
  description:
    'Abacus, Rubik\'s Cube, Vedic Maths and Tuition. Four programs built to grow sharper minds in small batches.',
}

export default function ProgramsPage() {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
<section className="bg-indigo-700 text-white min-h-150 flex flex-col justify-center items-center text-center">
  <h1 className="text-3xl lg:text-5xl font-monument-700 uppercase tracking-wider">
    Our Programs
  </h1>

  <p className="mt-4 font-montserrat-600 text-xl lg:text-2xl">
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

          <span className="inline-flex items-center gap-1 font-monument text-sm bg-red-800 px-5 py-2 text-white rounded-2xl group-hover:gap-2 transition-all">
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
<CTASection/>
    </main>
  )
}


import { MessageCircle } from "lucide-react"
import { PHONE, PHONE_DISPLAY, WHATSAPP } from "@/lib/contact"

export function CTASection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl h-[420px] lg:h-[460px] text-white">

          {/* 🔥 Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('vedic_maths.jpg')", // 👈 replace image
            }}
          />

          {/* 🔥 Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />

          {/* 🔥 Floating Card Shapes (kept your idea but refined) */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-10 -left-10 w-72 h-44 bg-white/10 rounded-2xl rotate-[-12deg] blur-sm" />
            <div className="absolute top-20 -right-16 w-80 h-48 bg-white/10 rounded-2xl rotate-[10deg]" />
            <div className="absolute bottom-0 left-1/3 w-64 h-40 bg-white/10 rounded-2xl rotate-[6deg] blur-sm" />
          </div>

          {/* 🔥 Content */}
          <div className="relative h-full flex items-center px-8 lg:px-16">
            <div className="max-w-6xl">

              <h2 className="font-monument-700 text-3xl sm:text-4xl lg:text-5xl tracking-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.8)]">
                Not sure which one?
              </h2>

              <p className="mt-4 font-montserrat-400 text-base lg:text-lg text-white/85 max-w-xl">
                Book a free demo — we&apos;ll talk to your child, suggest the right starting point,
                and help you decide. No pressure, no fee on the demo.
              </p>

              {/* 🔥 Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">

                {/* Demo */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 font-monument text-sm transition"
                >
                  Book Free Demo <ArrowRight size={16} />
                </Link>

                {/* Call */}
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-indigo-700 font-monument text-sm hover:bg-gray-100 transition"
                >
                  <Phone size={16} /> {PHONE_DISPLAY}
                </a>

                {/* WhatsApp 🔥 NEW */}
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-green-600 text-white font-monument text-sm hover:bg-green-700 transition"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}