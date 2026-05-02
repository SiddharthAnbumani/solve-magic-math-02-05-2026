import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, Phone } from 'lucide-react'
import type { Program } from '@/data/programs'

const PHONE = '+917550223044'
const WHATSAPP =
  'https://wa.me/917550223044?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20demo'

export default function ProgramPageTemplate({ program }: { program: Program }) {
  const Icon = program.icon

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 font-montserrat-500 text-sm text-white/70 hover:text-white transition"
          >
            <ArrowLeft size={14} /> Back to all programs
          </Link>

          <div className="mt-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/15 inline-flex items-center justify-center">
              <Icon size={26} strokeWidth={1.75} />
            </div>
            <span className="font-montserrat-600 text-xs uppercase tracking-widest text-white/70">
              {program.ageRange}
            </span>
          </div>

          <h1 className="mt-6 font-monument-400 text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            {program.title}
          </h1>
          <p className="mt-4 font-montserrat-500 text-xl lg:text-2xl text-white/85 max-w-2xl">
            {program.tagline}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
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
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="inline-block font-montserrat-700 text-xs uppercase tracking-widest text-black">
              Overview
            </span>
            <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl tracking-tight text-indigo-800">
              What your child gets out of {program.title}.
            </h2>
            <p className="mt-6 font-montserrat-400 text-lg text-slate-700 leading-relaxed">
              {program.overview}
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-7">
              <h3 className="font-monument-700 text-lg text-slate-900">Quick details</h3>
              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="font-montserrat-500 text-xs text-slate-500 uppercase tracking-widest">
                    Age range
                  </dt>
                  <dd className="mt-1 font-montserrat-600 text-base text-slate-900">
                    {program.ageRange}
                  </dd>
                </div>
                <div>
                  <dt className="font-montserrat-500 text-xs text-slate-500 uppercase tracking-widest">
                    Duration
                  </dt>
                  <dd className="mt-1 font-montserrat-600 text-base text-slate-900">
                    {program.duration}
                  </dd>
                </div>
                <div>
                  <dt className="font-montserrat-500 text-xs text-slate-500 uppercase tracking-widest">
                    Batch size
                  </dt>
                  <dd className="mt-1 font-montserrat-600 text-base text-slate-900">
                    Maximum 8 students
                  </dd>
                </div>
              </dl>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-full bg-indigo-700 text-white font-monument text-sm hover:bg-indigo-800 transition"
              >
                Reserve a free demo <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block font-montserrat-700 text-xs uppercase tracking-widest text-black">
            What they&apos;ll gain
          </span>
          <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl tracking-tight text-indigo-800">
            Real outcomes, not just classes.
          </h2>

          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {program.benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-700 text-white inline-flex items-center justify-center shrink-0">
                  <Check size={18} strokeWidth={2} />
                </div>
                <span className="font-montserrat-500 text-base text-slate-800 leading-relaxed">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block font-montserrat-700 text-xs uppercase tracking-widest text-black">
            Curriculum
          </span>
          <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl tracking-tight text-indigo-800">
            How {program.title} progresses.
          </h2>

          <ol className="mt-12 space-y-5">
            {program.curriculum.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col md:flex-row gap-5 md:gap-8 p-7 rounded-2xl border border-slate-200 bg-white hover:border-indigo-700 transition"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-indigo-700 text-white inline-flex items-center justify-center font-monument-700 text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-monument-700 text-xl text-slate-900">{step.title}</h3>
                  <p className="mt-2 font-montserrat-400 text-base text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-indigo-700 px-8 py-16 lg:p-20">
            <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/10" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-white/5" />
            <div className="relative max-w-2xl text-white">
              <h2 className="font-monument-700 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                Try a free {program.title} demo.
              </h2>
              <p className="mt-4 font-montserrat-400 text-base lg:text-lg text-white/80 max-w-xl">
                45 minutes, zero pressure. Your child meets the trainer, you get an honest read on whether it&apos;s a fit.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-indigo-700 font-monument text-sm hover:bg-slate-100 transition"
                >
                  WhatsApp Us <ArrowRight size={16} />
                </a>
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
