'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Award,
  BookOpen,
  Box,
  Brain,
  Calculator,
  GraduationCap,
  Heart,
  Phone,
  Sparkles,
  Star,
  Trophy,
  Users,
  Zap,
} from 'lucide-react'
import { motion } from "framer-motion"
import ProgramCard from '@/components/ProgramCard'
import SectionHeading from '@/components/SectionHeading'
import ProgramShowcase from '../components/ProgramShowcase'
import ProgramsSection from '@/components/ProgramsSection'
const PROGRAMS = [
  {
    icon: Calculator,
    title: 'Abacus',
    description:
      'Faster mental arithmetic and sharper concentration through structured visual training.',
    image: '/abacus.jpg',
  },
  {
    icon: Box,
    title: "Rubik's Cube",
    description:
      'Spatial reasoning, pattern recognition, and that proud "I solved it" moment.',
    image: 'rubiks.jpg',
  },
  {
    icon: BookOpen,
    title: 'Vedic Maths',
    description:
      'Ancient shortcuts that turn long calculations into seconds — perfect for school exams.',
    image: 'vedic_maths.jpg',
  },
  {
    icon: GraduationCap,
    title: 'Tuition',
    description:
      'Personalised academic support across CBSE, State Board and ICSE syllabi.',
    image: '/tuition.jpg',
  },
] as const

const WHY = [
  {
    icon: Award,
    title: 'Experienced Trainers',
    text: 'Certified, child-friendly coaches who actually love teaching kids.',
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    text: 'Hundreds of students with measurable confidence and grade improvements.',
  },
  {
    icon: Users,
    title: 'Small Batch Sizes',
    text: 'Maximum 8 students per batch — your child is never lost in the crowd.',
  },
  {
    icon: Heart,
    title: 'Personal Attention',
    text: 'Progress tracking and parent updates so you always know how things are going.',
  },
] as const

const RESULTS = [
  {
    icon: Brain,
    title: 'Improved Concentration',
    text: 'Daily focus drills sharpen attention spans within weeks.',
  },
  {
    icon: Zap,
    title: 'Faster Calculations',
    text: 'Mental math that beats the calculator — and impresses the class.',
  },
  {
    icon: Sparkles,
    title: 'Confidence Boost',
    text: 'Stage performances and level-up assessments build real self-belief.',
  },
] as const

const TESTIMONIALS = [
  {
    quote: `My daughter calculates faster than I do now. She actually looks forward to her Abacus class — and that's a first.`,
    parent: 'Lakshmi R.',
    child: 'Parent of Aanya, 8',
  },
  {
    quote: `The trainers truly care. In three months my son went from saying he hates maths to begging for extra worksheets.`,
    parent: 'Karthik V.',
    child: 'Parent of Arjun, 11',
  },
  {
    quote: `Small batches make a huge difference. We tried two other places before — this is the one we stayed with.`,
    parent: 'Priya S.',
    child: 'Parent of Meera, 9',
  },
] as const

const PHONE = '+917550223044'
const WHATSAPP =
  'https://wa.me/917550223044?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20demo'

export default function Home() {
  return (
    <main className="bg-white mt-10">
      {/* HERO */}
      <section className="relative overflow-hidden mt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.12),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              {/* <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-800 text-md borde text-white  border-white font-montserrat-500 ">
                <Sparkles size={12} /> Brain Development for Ages 5–16
              </span> */}
              <h1 className="mt-6 font-monument-400 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-slate-900 leading-[1.05]">
                Smart Minds <br className="hidden sm:block" />
                Start Right{' '}
                <span className="relative inline-block ">
                  <span className="relative z-10 text-indigo-700">Here</span>
                  {/* <span className="absolute inset-x-0 bottom-1 h-3 bg-black z-0 rounded-sm" /> */}
                </span>
                .
              </h1>
              <p className="mt-6 font-montserrat-400 text-lg text-slate-600 max-w-xl leading-relaxed">
                Abacus, Rubik&apos;s Cube, Vedic Maths and Tuition — taught by experienced trainers in small batches, so every child gets the attention they deserve.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-indigo-700 text-white font-monument text-sm hover:bg-slate-800 transition"
                >
                  Book Free Demo <ArrowRight size={16} />
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-red-800 text-white font-monument text-sm hover:border-slate-900 transition"
                >
                  <Phone size={16} /> Call Now
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-indigo-700 text-indigo-700" />
                  ))}
                  <span className="ml-1 font-montserrat-600">4.9</span>
                </div>
                <span className="font-montserrat-500">200+ happy parents</span>
                <span className="font-montserrat-500 hidden sm:inline">
                  8 years in the neighbourhood
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-slate-900 rotate-3" />
                <div className="absolute inset-0 rounded-3xl bg-indigo-700 -rotate-3" />
                <div className="absolute inset-0 rounded-3xl bg-white border border-slate-200 shadow-xl p-8 flex flex-col justify-between">
                  <div>
                    <span className="font-montserrat-500 text-xs text-slate-500 uppercase tracking-widest">
                      This week
                    </span>
                    <h3 className="mt-2 font-monument-700 text-2xl text-slate-900">
                      Free Demo Class
                    </h3>
                  </div>
                  <ul className="space-y-2.5 font-montserrat-400 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-700" />
                      45-minute trial
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-700" />
                      Personal aptitude check
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-700" />
                      Honest program advice
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-700" />
                      Zero pressure to enrol
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-2 inline-flex items-center gap-2 font-montserrat-600 text-sm text-slate-900 hover:gap-3 transition-all"
                  >
                    Reserve a slot <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<AboutSection/>
<ProgramsSection programs={PROGRAMS} />

    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* 🔥 LEFT: WHY (Trust Narrative) */}
          <div className="space-y-10">

            <div>
              <p className="font-montserrat-700 text-xs uppercase tracking-widest text-indigo-600">
                Why parents choose us
              </p>

              <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl text-slate-900 leading-tight">
                Trusted by families in the neighbourhood.
              </h2>

              <p className="mt-4 text-slate-600 text-base leading-relaxed max-w-md">
                The basics, done with care. No flashy gimmicks — just real teaching, real results.
              </p>
            </div>

            {/* WHY LIST (no cards, just clean rows) */}
            <div className="space-y-6">
              {WHY.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  whileHover={{ x: 6 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="font-monument-700 text-lg text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* 🔥 RIGHT: RESULTS (Impact Narrative) */}
          <div className="space-y-10 lg:pt-10">

            <div>
              <p className="font-montserrat-700 text-xs uppercase tracking-widest text-red-500">
                What kids walk away with
              </p>

              <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl text-slate-900 leading-tight">
                Results you’ll actually notice at home.
              </h2>
            </div>

            {/* RESULTS LIST (visual storytelling, not cards) */}
            <div className="space-y-8">

              {RESULTS.map(({ icon: Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >

                  {/* number marker */}
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-montserrat-700 text-sm">
                    {i + 1}
                  </div>

                  <div>
                    <h3 className="font-monument-700 text-lg text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {text}
                    </p>
                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="What parents say"
            title="Testimonials"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.parent}
                className="p-7 rounded-2xl bg-white border border-slate-200 flex flex-col"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-500" />
                  ))}
                </div>
                <blockquote className="mt-4 font-montserrat-400 text-base text-slate-700 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-slate-100">
                  <div className="font-montserrat-600 text-sm text-slate-900">{t.parent}</div>
                  <div className="font-montserrat-400 text-xs text-slate-500">{t.child}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
<section className="py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="relative overflow-hidden rounded-3xl h-[420px] lg:h-[480px]">

      {/* 🔥 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/abacus.jpg')", // 👈 change image here
        }}
      />

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />

      {/* 🔥 Soft Glow */}
      <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-red-500/20 blur-3xl" />
      <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-red-400/20 blur-3xl" />

      {/* 🔥 Content */}
      <div className="relative h-full flex items-center px-8 lg:px-16">
        <div className="max-w-2xl">

          <h2 className="font-monument-700 text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.8)]">
            Enrol your child today.
          </h2>

          <p className="mt-4 font-montserrat-600 text-base lg:text-lg text-white max-w-5xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            Spaces are limited each batch — book a free demo and see if it&apos;s the right fit before you commit.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">

            {/* WhatsApp */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-green-600 text-white font-montserrat-700 text-sm hover:bg-indigo-700 transition"
            >
              WhatsApp Us 
            </a>

            {/* Call */}
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-900 font-montserrat-600 text-sm hover:bg-slate-100 transition"
            >
              <Phone size={16} />+91 75502 23044
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



 function AboutSection() {
  return (
    <section className="relative py-28 bg-indigo-700 text-white overflow-hidden">

      {/* 🔥 Soft Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-indigo-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">

        {/* 🔥 Heading Centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-white font-montserrat-700 text-xs uppercase tracking-[0.2em]">
            Who We Are
          </p>

          <h2 className="mt-4 text-white font-monument-700 text-3xl sm:text-4xl lg:text-5xl leading-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.5)]">
            About Magic Maths
          </h2>

          <p className="mt-6 text-white text-base sm:text-lg leading-relaxed">
            We believe math should feel natural, exciting, and empowering — not stressful.
            At Magic Maths, we help children unlock their true potential through smart,
            engaging learning techniques.
          </p>
        </motion.div>

        {/* 🔥 Content */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — STORY */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-white text-lg leading-relaxed">
              Magic Maths is more than just a program — it’s a transformation journey. 
              Through proven techniques like Abacus and Vedic Maths, children learn to 
              calculate faster, think sharper, and build strong cognitive skills.
            </p>

            <p className="mt-6 text-indigo-100 text-lg leading-relaxed">
              Beyond numbers, we focus on developing concentration, confidence, and a 
              love for learning — skills that stay with them for life.
            </p>
          </motion.div>

          {/* RIGHT — HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {[
              "Boost mental calculation speed",
              "Improve memory and concentration",
              "Build confidence in problem solving",
              "Make learning fun and engaging",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 mt-2 bg-indigo-300 rounded-full" />
                <p className="text-white text-base sm:text-lg">
                  {item}
                </p>
              </motion.div>
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  )
}