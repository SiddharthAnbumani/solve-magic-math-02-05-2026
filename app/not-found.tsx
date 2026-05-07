'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Compass, Heart, Home, Users } from 'lucide-react'
import { fadeUp, fadeUpSoft, staggerContainer } from '@/lib/motion'

const STATS = [
  {
    icon: Users,
    value: '200+',
    label: 'Happy Students',
  },
  {
    icon: Award,
    value: '8+',
    label: 'Years Experience',
  },
  {
    icon: Heart,
    value: 'Trusted',
    label: 'by Parents',
  },
] as const

export default function NotFound() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-white text-slate-900">
      {/* ───────── Layered backgrounds ───────── */}

      {/* Soft radial wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.10),transparent_60%)]" />

      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Floating blobs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity }}
        className="pointer-events-none absolute -top-24 -left-20 -z-10 h-[420px] w-[420px] rounded-full bg-indigo-500/25 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 18, 0] }}
        transition={{
          duration: 11,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 0.6,
        }}
        className="pointer-events-none absolute top-40 -right-32 -z-10 h-[460px] w-[460px] rounded-full bg-red-500/15 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, -14, 0] }}
        transition={{
          duration: 13,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 1.2,
        }}
        className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-[360px] w-[360px] rounded-full bg-indigo-300/20 blur-3xl"
      />

      {/* ───────── Hero ───────── */}
      <section className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 pt-32 pb-20 text-center sm:px-10 lg:pt-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeUpSoft}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 font-montserrat-700 text-[11px] uppercase tracking-[0.22em] text-indigo-700 backdrop-blur"
          >
            <Compass size={12} strokeWidth={2} />
            Error · 404
          </motion.span>

          {/* 404 mark */}
          <motion.h1
            variants={fadeUp}
            className="mt-8 font-monument-700 text-[7rem] leading-none tracking-tight text-indigo-700 drop-shadow-[0_18px_40px_rgba(67,56,202,0.25)] sm:text-[10rem] lg:text-[14rem]"
          >
            4
            <span className="mx-1 inline-block text-red-800 sm:mx-2">0</span>
            4
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="mt-10 max-w-3xl font-monument-400 text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Oops. This page wandered off.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl font-montserrat-400 text-base leading-relaxed text-slate-600 lg:text-lg"
          >
            The page you&apos;re looking for doesn&apos;t exist or may have
            been moved. Let&apos;s get you back to learning.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-indigo-700 px-7 py-3.5 font-monument text-sm text-white shadow-lg shadow-indigo-700/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-800 hover:shadow-xl hover:shadow-indigo-700/40"
            >
              <Home
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
              Back Home
            </Link>

            <Link
              href="/programs"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-7 py-3.5 font-monument text-sm text-slate-900 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-red-800 hover:bg-white hover:text-red-800 hover:shadow-lg"
            >
              Explore Programs
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* ───────── Glass stats card ───────── */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
            className="relative mt-16 w-full max-w-2xl"
          >
            {/* Indigo glow shadow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 translate-y-2 rounded-3xl bg-indigo-700/10 blur-2xl"
            />

            <div className="grid grid-cols-1 gap-4 rounded-3xl border border-white/60 bg-white/55 p-6 shadow-[0_30px_80px_-30px_rgba(67,56,202,0.35)] backdrop-blur-xl sm:grid-cols-3 sm:p-8">
              {STATS.map(({ icon: Icon, value, label }, i) => (
                <div
                  key={label}
                  className={`flex items-center gap-4 sm:flex-col sm:items-center sm:gap-2 sm:text-center ${
                    i !== 0
                      ? 'sm:border-l sm:border-slate-200/70 sm:pl-4'
                      : ''
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-700/10 text-indigo-700">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="font-monument-700 text-2xl tracking-tight text-slate-900">
                      {value}
                    </div>
                    <div className="font-montserrat-500 text-xs uppercase tracking-widest text-slate-500">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quiet helper line */}
          <motion.p
            variants={fadeUpSoft}
            className="mt-10 font-montserrat-400 text-xs text-slate-500"
          >
            If you typed the URL by hand, double-check the spelling. Otherwise,
            the link you followed may be outdated.
          </motion.p>
        </motion.div>
      </section>
    </main>
  )
}
