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
import { fadeUp, fadeUpSoft, staggerContainer } from '@/lib/motion'
import ProgramCard from '@/components/ProgramCard'
import SectionHeading from '@/components/SectionHeading'
import ProgramShowcase from '../components/ProgramShowcase'
import VidPlusText from '../components/VideoPlusText'
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
    quote: `My son is currently learning Abacus Level 2 at Magic Maths Learning and Educational Institute. Bharathi Ma’am teaches very clearly and effectively, ensuring every child understands the concepts well. She treats each student with equal care and attention, just like her own. I am very satisfied with her teaching approach, and my child attends the classes with great interest and enthusiasm.`,
    parent: 'Santhosh Shivan',
    child: '',
  },

  {
    quote: `The children are learning very well under Ma’am’s excellent guidance. They are highly interested in attending the classes and have also successfully participated in abacus competitions. We sincerely thank Bharathi Ma’am for her dedication and support.`,
    parent: 'Hema Latha',
    child: '',
  },

  {
    quote: `Bharathi Ma’am is exceptionally kind and patient with children. She has been truly inspiring, helping kids develop a genuine interest in mathematics through abacus learning. With her guidance, children not only improve their calculation speed but also strengthen memory, focus, and overall mathematical confidence.`,
    parent: 'Mrs. Sathiya Kalai',
    child: '',
  },
] as const

const PHONE = '+917200757754'
const WHATSAPP =
  'https://wa.me/917200757754?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20demo'

export default function Home() {
  return (
    <main className="bg-white mt-20 sm:mt-20">
      {/* HERO */}
<VidPlusText
  img="/hero.mp4"
  overlayClass="bg-black/30 flex flex-col items-center justify-center px-4 text-center"
  text={
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.h1
        variants={fadeUp}
        className="font-monument-400 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white leading-[1.05]"
      >
        Smart Minds <br />
        Start Right <span className="text-indigo-300">Here</span>.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="font-montserrat-400 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
      >
        Abacus, Rubik&apos;s Cube, Vedic Maths and Tuition — taught by experienced trainers in small batches, so every child gets the attention they deserve.
      </motion.p>

      {/* CTA BUTTONS */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4"
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-indigo-700 text-white font-monument text-sm hover:bg-indigo-800 hover:shadow-lg hover:shadow-indigo-700/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          Book Free Demo <ArrowRight size={16} />
        </Link>

        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-red-800 text-white font-monument text-sm hover:bg-red-700 hover:shadow-lg hover:shadow-red-800/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          <Phone size={16} /> Call Now
        </a>
      </motion.div>

      {/* TRUST LINE */}
      <motion.div
        variants={fadeUpSoft}
        className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80 pt-6"
      >
        <div className="flex items-center gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className="fill-indigo-300 text-indigo-300" />
          ))}
          <span className="ml-1 font-montserrat-600">4.9</span>
        </div>

        <span>200+ happy parents</span>
        <span className="hidden sm:inline">8 years in the neighbourhood</span>
      </motion.div>
    </motion.div>
  }
/>

<AboutSection/>
<div className="pt-10 py-20">
  <p className='text-indigo-700 font-monument-700 text-4xl tracking-tight sm:text-5xl text-center pt-10 pb-2'>Magic Math's Notice Board</p>
<p className='font-montserrat-700 text-red-800  sm:text-2xl text-center tracking-tighter leading-4'>Stay updated with the  latest from Magic Maths.</p>
<div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 items-center py-5 px-4 sm:px-0">
  <img src="/vedic_poster.png" alt=""  className='w-4/5 sm:w-auto sm:h-150 border-2 border-black/30 rounded'/>
  <img src="/abacus_poster.png" alt="" className='w-4/5 sm:w-auto sm:h-150 border-2 border-black/30 rounded' />
</div>
</div>
<ProgramsSection programs={PROGRAMS} />

   <section className="py-24 bg-white">
  <div className="mx-auto max-w-8xl px-6 lg:px-30">

    <div className="grid lg:grid-cols-2 gap-20 items-start">

      {/* 🔵 LEFT: TRUST (soft, calm, breathable) */}
      <div className="space-y-12 relative">

        {/* subtle vertical accent line */}
        <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-indigo-100 via-transparent to-transparent" />

        <div className="pl-6">
          <p className="font-montserrat-700 text-xs uppercase tracking-widest text-indigo-600">
            Why parents choose us
          </p>

          <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl text-slate-900 leading-tight">
            Trusted by families in the neighbourhood.
          </h2>

          <p className="mt-5 text-slate-600 text-base leading-relaxed max-w-md">
            The basics, done with care. No flashy gimmicks — just real teaching, real results.
          </p>
        </div>

        {/* CLEAN LIST (more breathing + separators instead of cards) */}
        <div className="space-y-7 pl-6">
          {WHY.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              whileHover={{ x: 6 }}
              className="flex gap-4 items-start group"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition">
                <Icon size={18} strokeWidth={1.8} />
              </div>

              <div className="border-b border-slate-100 pb-5 w-full">
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

      {/* 🔴 RIGHT: RESULTS (structured timeline feel) */}
      <div className="space-y-12 lg:pt-10">

        <div>
          <p className="font-montserrat-700 text-xs uppercase tracking-widest text-red-500">
            What kids walk away with
          </p>

          <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl text-slate-900 leading-tight">
            Results you’ll actually notice at home.
          </h2>
        </div>

        {/* TIMELINE STYLE LIST */}
        <div className="relative space-y-10">

          {/* vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-[1px] bg-slate-200" />

          {RESULTS.map(({ title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 items-start relative"
            >

              {/* step dot */}
              <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-indigo-600 text-indigo-600 flex items-center justify-center font-montserrat-700 text-sm shadow-sm">
                {i + 1}
              </div>

              <div className="pt-1">
                <h3 className="font-monument-700 text-lg text-slate-900">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed max-w-md">
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
      <section className="py-20 lg:py-28 bg-red-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <div className="max-w-2xl mx-auto text-center">
  
  <p className="inline-block font-montserrat-700 text-xs uppercase tracking-wide text-white/80">
    What parents say
  </p>

  <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white">
    Testimonials
  </h2>

</div>
<div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

  {TESTIMONIALS.map((t) => (
    <figure
      key={t.parent}
      className="h-full p-7 rounded-2xl bg-white border border-slate-200 flex flex-col"
    >

      {/* STAR RATING */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-yellow-400 text-yellow-500"
          />
        ))}
      </div>

      {/* 🔥 CONTENT (10/12 equivalent) */}
      <div className="flex-1 mt-4">
        <blockquote className="font-montserrat-400 text-base text-slate-700 leading-relaxed">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
      </div>

      {/* 🔥 FOOTER (2/12 equivalent) */}
      <div className="mt-6 pt-5 border-t border-slate-100 shrink-0">
        <div className="font-monument text-sm text-indigo-700 tracking-wide">
          {t.parent}
        </div>
        <div className="font-montserrat-400 text-xs text-slate-500">
          {t.child}
        </div>
      </div>

    </figure>
  ))}

</div>
        </div>
      </section>

      {/* CLASSROOM VIDEOS — before CTA */}
      <section className="py-16 lg:py-20 bg-indigo-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-[10px] font-montserrat-700 uppercase tracking-[0.22em] text-red-400 mb-2">
              Inside Magic Maths
            </p>
            <h2 className="font-monument-700 text-2xl sm:text-3xl text-white">
              See What Happens in Class
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            style={{ gridAutoRows: 'clamp(180px, 20vw, 280px)' }}
          >
            {/* vid_1 — large, 2 col × 2 row */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-2xl bg-black"
            >
              <video className="w-full h-full object-contain" autoPlay muted loop playsInline>
                <source src="/vids/vid_1.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <p className="absolute bottom-3 left-4 text-white text-xs font-montserrat-700">Abacus Class in Session</p>
            </motion.div>

            {[
              { src: '/gallery/1.jpeg', alt: 'Students learning', label: 'Learning Together', video: false },
              { src: '/gallery/2.jpeg', alt: 'Focus and dedication', label: 'Focus & Dedication', video: false },
              { src: '/vids/vid_2.mp4', alt: '', label: 'Student Demonstration', video: true },
              { src: '/gallery/3.jpeg', alt: 'Classroom moments', label: 'Classroom Moments', video: false },
              { src: '/gallery/4.jpeg', alt: 'Student achievement', label: 'Student Achievement', video: false },
            ].map((m) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-2xl${m.video ? ' bg-black' : ''}`}
              >
                {m.video ? (
                  <video className="w-full h-full object-contain" autoPlay muted loop playsInline>
                    <source src={m.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={m.src} alt={m.alt} className="w-full h-full object-cover" loading="lazy" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <p className="absolute bottom-3 left-4 text-white text-xs font-montserrat-700">{m.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center mt-8"
          >
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-800 text-white  text-sm font-montserrat-600 hover:scale-105 transition-all duration-200"
            >
              View Full Gallery
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </a>
          </motion.div>

        </div>
      </section>
      {/* CTA */}
<section className="py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

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

          <h2 className="font-monument-700 text-center sm:text-start text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.8)]">
            Enrol Your Child Today.
          </h2>

          <p className="mt-4 font-montserrat-500 text-base lg:text-lg text-white max-w-5xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            Spaces are limited each batch, book a free demo and see if it&apos;s the right fit before you commit.
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
            <p className="text-white text-lg leading-relaxed text-center">
              Magic Maths is more than just a program, it’s a transformation journey. 
              Through proven techniques like Abacus and Vedic Maths, children learn to 
              calculate faster, think sharper, and build strong cognitive skills.
            </p>

            <p className="mt-6 text-indigo-100 text-lg leading-relaxed text-center">
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