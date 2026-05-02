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

import ProgramCard from '@/components/ProgramCard'
import SectionHeading from '@/components/SectionHeading'

const PROGRAMS = [
  {
    icon: Calculator,
    title: 'Abacus',
    description:
      'Faster mental arithmetic and sharper concentration through structured visual training.',
  },
  {
    icon: Box,
    title: "Rubik's Cube",
    description:
      'Spatial reasoning, pattern recognition, and that proud "I solved it" moment.',
  },
  {
    icon: BookOpen,
    title: 'Vedic Maths',
    description:
      'Ancient shortcuts that turn long calculations into seconds — perfect for school exams.',
  },
  {
    icon: GraduationCap,
    title: 'Tuition',
    description:
      'Personalised academic support across CBSE, State Board and ICSE syllabi.',
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
            <div className="lg:col-span-7">
              {/* <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-800 text-md borde text-white  border-white font-montserrat-500 ">
                <Sparkles size={12} /> Brain Development for Ages 5–16
              </span> */}
              <h1 className="mt-6 font-monument-400 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-slate-900 leading-[1.05]">
                Smart Minds <br className="hidden sm:block" />
                Start Right{' '}
                <span className="relative inline-block ">
                  <span className="relative z-10 text-indigo-700">Here</span>
                  <span className="absolute inset-x-0 bottom-1 h-3 bg-black z-0 rounded-sm" />
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

            <div className="lg:col-span-5">
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

      {/* PROGRAMS */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto px-2 sm:px-10 lg:px-10">
          <SectionHeading
            align="center"
            eyebrow="Our Programs"
            title="Four ways to grow a sharper mind."
            subtitle="Pick one — or layer them. Each program is built to be fun first, rigorous second."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROGRAMS.map((p) => (
              <ProgramCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why parents choose us"
            title="Trusted by families in the neighbourhood."
            subtitle="The basics, done with care. No flashy gimmicks — just real teaching, real results."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {WHY.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <div className="w-11 h-11 rounded-lg bg-slate-900 text-indigo-700 inline-flex items-center justify-center">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-monument-700 text-lg text-slate-900">{title}</h3>
                <p className="mt-2 font-montserrat-400 text-sm leading-relaxed text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block font-montserrat-600 text-xs uppercase tracking-widest text-indigo-700">
              What kids walk away with
            </span>
            <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Results you&apos;ll actually notice at home.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESULTS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-700/60 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-700 text-slate-900 inline-flex items-center justify-center">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-monument-700 text-xl">{title}</h3>
                <p className="mt-2 font-montserrat-400 text-sm leading-relaxed text-slate-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="From parents"
            title="Honest words from real families."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.parent}
                className="p-7 rounded-2xl bg-white border border-slate-200 flex flex-col"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-indigo-700 text-indigo-700" />
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
          <div className="relative overflow-hidden rounded-3xl bg-indigo-700 px-8 py-16 lg:p-20">
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-indigo-700/60" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-indigo-7000/40" />
            <div className="relative max-w-2xl">
              <h2 className="font-monument-700 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-950">
                Enrol your child today.
              </h2>
              <p className="mt-4 font-montserrat-400 text-base lg:text-lg text-slate-900/80 max-w-xl">
                Spaces are limited each batch — book a free demo and see if it&apos;s the right fit before you commit.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 text-white font-montserrat-600 text-sm hover:bg-slate-800 transition"
                >
                  WhatsApp Us <ArrowRight size={16} />
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-950 font-montserrat-600 text-sm hover:bg-slate-100 transition"
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
