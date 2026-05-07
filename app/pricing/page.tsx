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
  MessageCircle,
  ArrowRight,
} from 'lucide-react'
import TuitionPricingSection from '@/components/ TuitionPricingSection'
import RegistrationSection from '@/components/RegistrationSection'
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
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

const PHONE = '+917200757754'

export default function PricingPage() {
  return (
    <main className="bg-white text-slate-900 pt-30">
      {/* HERO */}
<section className="px-6 sm:px-10 lg:px-20 py-16 text-center">
  <div className="max-w-350 mx-auto">
    <h1 className="font-monument-700 text-5xl sm:text-4xl lg:text-8xl text-indigo-700 uppercase tracking-wide">
      Pricing
    </h1>
  </div>
</section>

      {/* REGISTRATION FEE */}
      {/* <section className="px-6 sm:px-10 lg:px-20 pb-12">
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
      </section> */}

      {/* PROGRAM PLANS */}
      <section className="px-2 sm:px-10 lg:px-20 pb-12">
        <div className="max-w-8xl mx-auto">
<div className="max-w-2xl mx-auto text-center space-y-5 mb-10">

  {/* 🔥 Badge */}
  <span className="inline-block font-montserrat-700 text-xs uppercase tracking-widest text-indigo-700">
    Programs
  </span>

  {/* 🔥 Title */}
  <h2 className="font-monument-700 text-3xl sm:text-4xl tracking-tight text-indigo-800">
    Same price, different superpower.
  </h2>

  {/* 🔥 Subtitle */}
  <p className="font-montserrat-400 text-base text-slate-600">
    Each program is ₹1,000 per month. Pick one or layer them — your child, your choice.
  </p>

  {/* 🔥 Divider */}
  <div className="h-px w-20 bg-slate-200 mx-auto" />

  {/* 🔥 Pricing line (clean + strong emphasis) */}
  <p className="font-monument-700 text-xl sm:text-2xl text-slate-900 leading-relaxed">
    Registration Fee <span className="text-red-600">₹1,500</span>
  </p>

  <p className="text-sm text-slate-600">
    Includes T-shirt, bag, and Level 0 onboarding kit
  </p>

</div>



{/* <RegistrationSection REGISTRATION_INCLUDES={REGISTRATION_INCLUDES} /> */}

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
      
<TuitionPricingSection/>
      {/* TUITION (variable) */}
 <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl h-[420px] lg:h-[460px] text-white">

          {/* 🔥 Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('rubiks.jpg')", // 👈 replace image
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
                  <Phone size={16} /> +91 75502 23044
                </a>

                {/* WhatsApp 🔥 NEW */}
                <a
                  href=''
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

      {/* HELP STRIP */}

    </main>
  )
}
