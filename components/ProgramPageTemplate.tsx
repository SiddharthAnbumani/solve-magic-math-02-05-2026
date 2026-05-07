import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, Phone } from 'lucide-react'
import type { Program } from '@/data/programs'
import CubeModuleCard, { type CubeModule } from '@/components/CubeModuleCard'

const PHONE = '+917200757754'

const WHATSAPP =
  'https://wa.me/917200757754?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20demo'

type Props = {
  program: Program
  modules?: CubeModule[]
  modulesEyebrow?: string
  modulesTitle?: string
  modulesSubtitle?: string
}

export default function ProgramPageTemplate({
  program,
  modules,
  modulesEyebrow,
  modulesTitle,
  modulesSubtitle,
}: Props) {
  const Icon = program.icon

  return (
    <main className="bg-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[90vh] lg:min-h-screen overflow-hidden bg-black">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-[1.08]"
          style={{
            backgroundImage: `url(${program.image})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-indigo-950/50" />

        {/* Glow */}
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-red-500/10 blur-3xl" />

        {/* Main */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 min-h-[92vh] lg:min-h-screen flex items-center">

          <div className="grid lg:grid-cols-12 gap-14 items-end w-full">

            {/* LEFT */}
<div className="lg:col-span-7 pt-28 lg:pt-20 relative z-10">

  {/* TOP BAR */}
<div className="flex flex-col items-start gap-5">

  {/* Back Link */}
  <Link
    href="/programs"
    className="group inline-flex items-center gap-2 text-sm font-montserrat-500 text-white/65 hover:text-white transition-all duration-300"
  >
    <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
      <ArrowLeft
        size={14}
        className="transition-transform duration-300 group-hover:-translate-x-1"
      />
    </div>

    <span className="tracking-wide">
      Back to Programs
    </span>
  </Link>

{/* Program Badge Card */}
<div className="w-full relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-2xl px-5 sm:px-6 py-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

  {/* Gradient Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-red-500/10" />

  <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5">

    {/* Icon */}
    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(79,70,229,0.45)] shrink-0">

      <div className="absolute inset-0 rounded-2xl border border-white/10" />

      <Icon size={24} strokeWidth={1.9} />

    </div>

    {/* Text */}
    <div className="flex-1 min-w-0">

      <span className="inline-flex items-center gap-2 font-montserrat-700 text-[10px] uppercase tracking-[0.25em] text-indigo-200/75">

        <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 shrink-0" />

        {program.ageRange}

      </span>

      <p className="mt-3 font-montserrat-500 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
        Structured learning focused on confidence, speed, memory, and sharper thinking.
      </p>

    </div>

  </div>

</div>

</div>

  {/* TITLE */}
<div className="mt-10 flex flex-col items-center lg:items-start text-center lg:text-left">

  <h1 className="font-monument-400 text-5xl sm:text-6xl lg:text-7xl xl:text-[7rem] leading-[0.9] tracking-tight text-white max-w-5xl">
    {program.title}
  </h1>

  <div className="mt-5 h-[2px] w-24 bg-gradient-to-r from-indigo-400 to-red-400 rounded-full" />

</div>

  {/* SUBTITLE */}
  <p className="mt-7 font-montserrat-400 text-lg lg:text-2xl text-white/75 leading-relaxed max-w-2xl">
    {program.tagline}
  </p>

  {/* CTA */}
  <div className="mt-10 flex flex-col sm:flex-row gap-4">

    <Link
      href="/contact"
      className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-indigo-700 font-monument text-sm hover:bg-slate-100 transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_40px_rgba(255,255,255,0.12)]"
    >
      Book Free Demo

      <ArrowRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>

    <a
      href={`tel:${PHONE}`}
      className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-red-800 text-white font-monument text-sm hover:bg-red-900 transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_40px_rgba(127,29,29,0.4)]"
    >
      <Phone size={16} />
      Call Now
    </a>

  </div>

  {/* TRUST BAR */}
<div className="my-14 flex flex-wrap justify-center lg:justify-start items-center gap-4">

  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">

    <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />

    <span className="font-montserrat-500 text-sm text-white/80">
      200+ Happy Students
    </span>

  </div>

  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">

    <div className="w-2.5 h-2.5 rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(165,180,252,0.8)]" />

    <span className="font-montserrat-500 text-sm text-white/80">
      8+ Years Experience
    </span>

  </div>

  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">

    <div className="w-2.5 h-2.5 rounded-full bg-red-300 shadow-[0_0_12px_rgba(252,165,165,0.8)]" />

    <span className="font-montserrat-500 text-sm text-white/80">
      Trusted by Parents
    </span>

  </div>

</div>

</div>
            {/* RIGHT CARD */}
            <div className="hidden lg:flex lg:col-span-5 justify-end">

              <div className="relative w-full max-w-md">

                <div className="absolute inset-0 rounded-[2rem] bg-white rotate-6 opacity-90" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                  <div className="relative h-[520px] overflow-hidden">

                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

                      <span className="font-montserrat-700 text-[11px] uppercase tracking-[0.25em] text-white/50">
                        Program Highlights
                      </span>

                      <h3 className="mt-3 font-monument-700 text-3xl leading-tight">
                        Learn Faster. Think Sharper.
                      </h3>

                      <div className="mt-6 space-y-3">

                        {program.benefits.slice(0, 3).map((benefit) => (
                          <div
                            key={benefit}
                            className="flex items-start gap-3"
                          >
                            <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={14} />
                            </div>

                            <p className="font-montserrat-400 text-sm text-white/80 leading-relaxed">
                              {benefit}
                            </p>
                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

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

          {/* Overlay Side Card */}
          <aside className="lg:col-span-5">

            <div className="relative overflow-hidden rounded-[2rem] h-full min-h-[420px]">

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${program.image})`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-indigo-900/50" />

              <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col justify-between text-white">

                <div>
                  <span className="font-montserrat-600 text-xs uppercase tracking-[0.25em] text-white/60">
                    Quick Details
                  </span>

                  <h3 className="mt-3 font-monument-700 text-3xl">
                    Structured Learning.
                  </h3>
                </div>

                <dl className="space-y-7">

                  <div>
                    <dt className="font-montserrat-500 text-xs uppercase tracking-widest text-white/50">
                      Age Range
                    </dt>

                    <dd className="mt-2 font-monument-700 text-xl">
                      {program.ageRange}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-montserrat-500 text-xs uppercase tracking-widest text-white/50">
                      Duration
                    </dt>

                    <dd className="mt-2 font-monument-700 text-xl">
                      {program.duration}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-montserrat-500 text-xs uppercase tracking-widest text-white/50">
                      Batch Size
                    </dt>

                    <dd className="mt-2 font-monument-700 text-xl">
                      Maximum 8 Students
                    </dd>
                  </div>

                </dl>

                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-indigo-700 font-monument text-sm hover:bg-slate-100 transition"
                >
                  Reserve Free Demo

                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>

          </aside>

        </div>
      </section>

      {/* MODULES */}
{modules && modules.length > 0 && (
  <section className="relative overflow-hidden py-24 lg:py-32 bg-red-800">

    {/* Cinematic Background */}
    <div className="absolute inset-0">

      {/* Aurora Glows */}
      <div className="absolute top-[-180px] left-[-120px] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-[-220px] right-[-120px] w-[600px] h-[600px] rounded-full bg-fuchsia-500/10 blur-3xl" />

      {/* Noise / Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />

    </div>

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="max-w-4xl">

        {/* Floating Eyebrow */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)]">

          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

          <span className="font-montserrat-700 text-[11px] uppercase tracking-[0.3em] text-cyan-100">
            {modulesEyebrow ?? 'Modules'}
          </span>

        </div>

        {/* Heading */}
        <h2 className="mt-8 font-monument-700 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white leading-[0.95]">
          {modulesTitle ?? `${program.title} Modules`}
        </h2>

        {/* Subtitle */}
        {modulesSubtitle && (
          <p className="mt-7 max-w-2xl font-montserrat-400 text-base lg:text-lg text-white/60 leading-relaxed">
            {modulesSubtitle}
          </p>
        )}

        {/* Premium Divider */}
        <div className="mt-10 flex items-center gap-4">

          <div className="h-[2px] w-24 rounded-full bg-cyan-400" />

          <div className="h-[2px] w-10 rounded-full bg-white/20" />

          <div className="w-2 h-2 rounded-full bg-fuchsia-400" />

        </div>

      </div>

      {/* Cards */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((m, i) => (
          <CubeModuleCard
            key={m.title}
            index={i}
            {...m}
          />
        ))}
      </div>

    </div>
  </section>
)}
      {/* BENEFITS */}
     <section className="relative overflow-hidden py-24 lg:py-32 bg-indigo-700">

  {/* Background Effects */}
  <div className="absolute inset-0">

    <div className="absolute top-[-120px] right-[-100px] w-[420px] h-[420px] rounded-full bg-red-500/20 blur-3xl" />

    <div className="absolute bottom-[-180px] left-[-120px] w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />

    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="max-w-3xl">

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl">

        <div className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.9)]" />

        <span className="font-montserrat-700 text-[11px] uppercase tracking-[0.28em] text-red-200">
          What they&apos;ll gain
        </span>

      </div>

      <h2 className="mt-7 font-monument-700 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1]">
        Real outcomes,
        <br className="hidden sm:block" />
        not just classes.
      </h2>

      <p className="mt-6 max-w-2xl font-montserrat-400 text-base lg:text-lg text-white/70 leading-relaxed">
        Every session is designed to strengthen confidence, sharpen thinking,
        improve focus, and help children enjoy learning naturally.
      </p>

      {/* Accent Divider */}
      <div className="mt-8 flex items-center gap-3">

        <div className="h-[2px] w-20 rounded-full bg-red-400" />

        <div className="h-[2px] w-8 rounded-full bg-white/30" />

      </div>

    </div>

    {/* Benefits Cards */}
    <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-7">

      {program.benefits.map((b, i) => (
        <li
          key={b}
          className="
            group relative overflow-hidden
            rounded-[2rem]
            border border-white/10
            bg-white/[0.07]
            backdrop-blur-2xl
            min-h-[240px]
            p-8
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            hover:-translate-y-1
            hover:bg-white/[0.09]
            transition-all duration-500
          "
        >

          {/* Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 via-transparent to-red-500/10" />

          {/* Floating Number */}
          <div className="absolute top-5 right-5 text-[5rem] font-monument-700 text-white/[0.05] leading-none">
            0{i + 1}
          </div>

          <div className="relative h-full flex flex-col justify-between">

            {/* Top */}
            <div>

              <div className="
                w-16 h-16 rounded-2xl
                bg-gradient-to-br from-red-500 to-red-700
                flex items-center justify-center
                text-white
                shadow-[0_12px_30px_rgba(185,28,28,0.35)]
              ">

                <Check size={24} strokeWidth={2.4} />

              </div>

            </div>

            {/* Content */}
            <div className="mt-10">

              <p className="font-montserrat-500 text-xl leading-relaxed text-white">
                {b}
              </p>

            </div>

          </div>

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
                className="flex flex-col md:flex-row gap-5 md:gap-8 p-7 rounded-3xl border border-slate-200 bg-white hover:border-indigo-700 transition"
              >

                <div className="w-14 h-14 shrink-0 rounded-full bg-indigo-700 text-white inline-flex items-center justify-center font-monument-700 text-lg">
                  {i + 1}
                </div>

                <div>
                  <h3 className="font-monument-700 text-xl text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 font-montserrat-400 text-base text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </li>
            ))}

          </ol>

        </div>
      </section>

      {/* PREMIUM CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2.5rem] h-[520px] lg:h-[600px]">

            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{
                backgroundImage: `url(${program.cta_image})`,
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Glow */}
            {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-red-500/10 blur-3xl" /> */}

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-8 lg:px-16">

              <div className="max-w-3xl text-white">

                <span className="font-montserrat-600 text-xs uppercase tracking-[0.25em] text-white/60">
                  Free Demo Session
                </span>

                <h2 className="mt-5 font-monument-700 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                  Try a free {program.title} demo.
                </h2>

                <p className="mt-6 font-montserrat-400 text-lg text-white/80 leading-relaxed max-w-2xl">
                  45 minutes, zero pressure. Your child meets the trainer,
                  explores the program, and you get an honest recommendation.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-indigo-700 font-monument text-sm hover:bg-slate-100 transition-all duration-300"
                  >
                    WhatsApp Us

                    <ArrowRight size={16} />
                  </a>

                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-red-800 text-white font-monument text-sm hover:bg-red-900 transition-all duration-300"
                  >
                    <Phone size={16} />
                    Call +91 75502 23044
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}