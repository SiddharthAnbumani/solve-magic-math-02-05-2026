'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Award,
  BookOpen,
  Box,
  Calculator,
  Check,
  GraduationCap,
  Languages,
  Mic2,
  PenLine,
  Phone,
  ShoppingBag,
  Shirt,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

type Plan = {
  title: string
  icon: LucideIcon
  price: string
  unit: string
  features: string[]
  highlight?: boolean
}

const PLANS: Plan[] = [
  {
    title: 'Abacus',
    icon: Calculator,
    price: '₹1,000',
    unit: '/ month',
    features: [
      '2 classes per week',
      'Small batch (max 8)',
      'Speed & accuracy training',
      'Level certification',
    ],
  },
  {
    title: "Rubik's Cube",
    icon: Box,
    price: '₹1,000',
    unit: '/ month',
    features: [
      '2 classes per week',
      'Beginner → competition',
      '8-module curriculum',
      'Pattern & speed drills',
    ],
  },
  {
    title: 'Vedic Maths',
    icon: BookOpen,
    price: '₹1,000',
    unit: '/ month',
    features: [
      '2 classes per week',
      'The 16 sutras',
      'School & olympiad prep',
      'Mental shortcut drills',
    ],
    highlight: true,
  },
  {
    title: 'Phonics',
    icon: Mic2,
    price: '₹1,000',
    unit: '/ month',
    features: [
      '2 classes per week',
      'Letter-sound mapping',
      'Blending & decoding',
      'Reading fluency',
    ],
  },
  {
    title: 'Tamil Reading',
    icon: Languages,
    price: '₹1,000',
    unit: '/ month',
    features: [
      '2 classes per week',
      'Uyir & Mei eluthukkal',
      'Words & sentences',
      'Story reading',
    ],
  },
  {
    title: 'Handwriting',
    icon: PenLine,
    price: '₹1,000',
    unit: '/ month',
    features: [
      '2 classes per week',
      'Print + cursive',
      'Speed & neatness drills',
      'School-ready writing',
    ],
  },
]

const REGISTRATION_INCLUDES = [
  { icon: Shirt, label: 'Branded T-shirt' },
  { icon: ShoppingBag, label: 'Solve Magic Maths Bag' },
  { icon: Award, label: 'Basic Level Certification' },
]

const PHONE = '+917550223044'

export default function PricingPage() {
  return (
    <main className="bg-white text-slate-900 pt-30">
      {/* HERO */}
      <section className="px-6 sm:px-10 lg:px-20 py-16 text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-block font-montserrat-700 text-xs uppercase tracking-widest text-black"
        >
          Pricing
        </motion.span>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-3 font-monument-700 text-4xl sm:text-5xl lg:text-6xl text-indigo-700 tracking-tight"
        >
          Simple, honest pricing.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 max-w-2xl mx-auto font-montserrat-400 text-base lg:text-lg text-slate-600 leading-relaxed"
        >
          One flat monthly fee per program. No hidden charges, no surprise add-ons.
        </motion.p>
      </section>

      {/* REGISTRATION FEE */}
      <section className="px-6 sm:px-10 lg:px-20 pb-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative mx-auto max-w-5xl rounded-3xl bg-indigo-700 text-white px-8 py-12 lg:p-14 overflow-hidden"
        >
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/10" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-white/5" />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-montserrat-600 uppercase tracking-widest">
                <Sparkles size={12} /> One-time fee
              </div>
              <h2 className="mt-5 font-monument-700 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                Registration Fee
              </h2>
              <p className="mt-3 font-montserrat-400 text-base lg:text-lg text-white/80 max-w-xl leading-relaxed">
                Paid once at the time of joining — covers the welcome kit and your child&apos;s first level certification.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/15">
                <div className="flex items-baseline gap-2">
                  <span className="font-monument-700 text-5xl lg:text-6xl">₹1,500</span>
                  <span className="font-montserrat-500 text-sm text-white/70">one-time</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {REGISTRATION_INCLUDES.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-3 font-montserrat-500 text-sm">
                      <span className="w-8 h-8 inline-flex items-center justify-center rounded-lg bg-white/15">
                        <Icon size={16} strokeWidth={1.75} />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROGRAM PLANS */}
      <section className="px-6 sm:px-10 lg:px-20 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <span className="inline-block font-montserrat-700 text-xs uppercase tracking-widest text-black">
              Programs
            </span>
            <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl tracking-tight text-indigo-800">
              Same price, different superpower.
            </h2>
            <p className="mt-3 font-montserrat-400 text-base text-slate-600">
              Each program is ₹1,000 per month. Pick one or layer them — your child, your call.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PLANS.map((plan) => {
              const Icon = plan.icon
              return (
                <motion.div
                  key={plan.title}
                  variants={fadeUp}
                  className={`flex flex-col rounded-3xl border p-7 transition-shadow duration-300 ${
                    plan.highlight
                      ? 'border-indigo-700 shadow-lg bg-white'
                      : 'border-slate-200 bg-white hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-indigo-700 text-white inline-flex items-center justify-center">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    {plan.highlight && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-700 ring-1 ring-red-200 text-[11px] font-montserrat-600 uppercase tracking-widest">
                        Most popular
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 font-monument-700 text-2xl text-slate-900">
                    {plan.title}
                  </h3>

                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="font-monument-700 text-4xl text-slate-900">
                      {plan.price}
                    </span>
                    <span className="font-montserrat-500 text-sm text-slate-500">
                      {plan.unit}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 font-montserrat-400 text-sm text-slate-700"
                      >
                        <Check size={16} className="text-indigo-700 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`mt-7 inline-flex items-center justify-center gap-2 py-3 rounded-full font-monument text-sm transition ${
                      plan.highlight
                        ? 'bg-red-800 text-white hover:bg-red-900'
                        : 'bg-indigo-700 text-white hover:bg-indigo-800'
                    }`}
                  >
                    Enroll Now
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* TUITION (variable) */}
      <section className="px-6 sm:px-10 lg:px-20 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative mx-auto max-w-5xl rounded-3xl bg-slate-950 text-white px-8 py-12 lg:p-14 overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-montserrat-600 uppercase tracking-widest">
                <GraduationCap size={12} /> Tuition
              </div>
              <h2 className="mt-5 font-monument-700 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                Custom pricing.
              </h2>
              <p className="mt-3 font-montserrat-400 text-base lg:text-lg text-white/80 max-w-xl leading-relaxed">
                Tuition fees depend on your child&apos;s grade and the subjects you choose. Talk to us — we&apos;ll suggest a plan that actually fits.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  'CBSE, State Board, ICSE',
                  'All major subjects',
                  'Diagnostic + custom plan',
                  'Regular parent updates',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 font-montserrat-400 text-sm text-white/85">
                    <Check size={16} className="text-indigo-300 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/15">
                <span className="font-montserrat-500 text-xs uppercase tracking-widest text-white/60">
                  Starting from
                </span>
                <div className="mt-2 font-monument-700 text-4xl lg:text-5xl">
                  Talk to us
                </div>
                <p className="mt-3 font-montserrat-400 text-sm text-white/70">
                  Pricing varies by grade and subject — we keep it fair, transparent and discussed up front.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white text-slate-950 font-monument text-sm hover:bg-slate-100 transition"
                  >
                    Get a Quote
                  </Link>
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 py-3 rounded-full bg-red-800 text-white font-monument text-sm hover:bg-red-900 transition"
                  >
                    <Phone size={14} /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* HELP STRIP */}
      <section className="px-6 sm:px-10 lg:px-20 pb-24">
        <div className="max-w-4xl mx-auto text-center bg-slate-50 border border-slate-200 rounded-2xl p-10">
          <h2 className="font-monument-700 text-2xl text-indigo-700">
            Need help choosing?
          </h2>
          <p className="mt-3 font-montserrat-400 text-slate-600">
            Not sure which program is the right fit? Talk to us — no pressure, no enrolment on the call.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 mt-5 bg-red-800 text-white px-6 py-3 rounded-full font-monument text-sm hover:bg-red-900 transition"
          >
            <Phone size={14} /> Call +91 75502 23044
          </a>
        </div>
      </section>
    </main>
  )
}
