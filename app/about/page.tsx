'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Brain, Target, Users, Award, MapPin, Star } from 'lucide-react'
import FounderSection from '@/components/founderSection'
import BranchCard from '@/components/BranchCard'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 pt-28">

      {/* HERO */}
      <section className="px-6 sm:px-10 lg:px-20 py-16 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-monument-700 text-4xl sm:text-5xl lg:text-6xl text-indigo-700 tracking-tight"
        >
          About Magic Maths
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed"
        >
          We help children unlock their full mental potential through
          Abacus, Vedic Maths, Rubik’s Cube and personalised tuition.
        </motion.p>
      </section>

      {/* STORY */}
      <section className="px-6 sm:px-10 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  className="lg:w-1/2"
>
  <h2 className="font-monument-700 text-2xl text-indigo-700">
    Our Story
  </h2>

  <p className="mt-5 text-slate-600 leading-relaxed">
    At Magic Maths Learning and Education Institute, we believe the hours after school are where real growth begins.
  </p>

  <p className="mt-4 text-slate-600 leading-relaxed">
    We are not a traditional tuition centre — we are a cognitive learning space where children build focus, confidence, and problem-solving skills through proven methods like Abacus and mind-training activities.
  </p>

  <p className="mt-4 text-slate-600 leading-relaxed">
    Our approach blends structure with creativity, helping both sides of the brain work together — so children don’t just learn faster, they think smarter.
  </p>

  <p className="mt-4 text-slate-600 leading-relaxed">
    In our classrooms, “I can’t” becomes “I’ll try”… and “I’ll try” becomes “I’ve mastered it.”
  </p>
</motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="relative lg:w-1/2 h-[320px] sm:h-[420px] rounded-3xl overflow-hidden"
          >
            <Image
              src="/magic_maths_sembakkam.webp"
              alt="Students learning"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* FOUNDER */}
      <FounderSection />
{/*  */}

      {/* TESTIMONIALS */}
      <section className="py-24 bg-red-800 text-white">
  <div className="px-6 sm:px-10 lg:px-20 max-w-8xl mx-auto">

    {/* Heading */}
    <div className="max-w-3xl">
      <h2 className="font-monument-700 text-3xl sm:text-4xl text-center sm:text-start">
        What Parents Say About Us
      </h2>

      <p className="mt-4 text-white/80 font-montserrat-400 text-center sm:text-start text-sm sm:text-base">
        Real changes, real confidence within weeks.
      </p>
    </div>

    {/* Testimonials */}
    <div className="mt-14 grid md:grid-cols-3 gap-6">

      {[
        {
          text: "Bharathi Ma’am is exceptionally kind and patient with children. She has been truly inspiring, helping kids develop a genuine interest in mathematics through abacus learning. With her guidance, children not only improve their calculation speed but also strengthen memory, focus, and overall mathematical confidence.",
          name: "Mrs.Sathiya Kalai",
        },
        {
          text: "The children are learning very well under Ma’am’s excellent guidance. They are highly interested in attending the classes and have also successfully participated in abacus competitions. We sincerely thank Bharathi Ma’am for her dedication and support.",
          name: "Hema Latha"
        },
        {
          text: "My son is currently learning Abacus Level 2 at Magic Maths Learning and Educational Institute. Bharathi Ma’am teaches very clearly and effectively, ensuring every child understands the concepts well. She treats each student with equal care and attention, just like her own. I am very satisfied with her teaching approach, and my child attends the classes with great interest and enthusiasm.",
          name: "Santhosh Shivan",
        },
      ].map((t, i) => (
        <div
          key={i}
          className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition"
        >
          <p className="text-sm leading-relaxed text-white/90">
            “{t.text}”
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm font-montserrat-600">
              {t.name}
            </span>

            {/* rating dots */}
       <div className="flex gap-1">
  {Array.from({ length: 5 }).map((_, i) => (
    <Star
      key={i}
      size={14}
      className="text-yellow-400 fill-yellow-400"
    />
  ))}
</div>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>


      {/* BRANCHES */}
<section className="py-28 bg-white">
  <div className="px-6 sm:px-10 lg:px-20 max-w-8xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

    {/* LEFT SIDE (STATEMENT) */}
    <div>
      <h2 className="font-monument-700 text-4xl sm:text-5xl text-indigo-700 leading-tight">
        in Chennai.
        <br />
        <span className="text-slate-900">Closer than you think.</span>
      </h2>

      <p className="mt-6 text-slate-600 max-w-md leading-relaxed font-montserrat-400">
        there’s a Magic Maths center nearby — with the same
        teaching quality, same focus, and the same results parents trust.
      </p>

      {/* <a
        href="/contact"
        className="inline-block mt-8 font-monument text-sm text-indigo-700 hover:underline"
      >
        Find your nearest branch →
      </a> */}
    </div>

    {/* RIGHT SIDE (BRANCH LIST) */}
    <div className="space-y-6">

      {[
        {
          name: "Sembakkam",
          sub: "Flagship center · 30+ students",
        },
        {
          name: "Rajakikpakkam",
          sub: "Top rated by parents",
        },
        // {
        //   name: "OMR",
        //   sub: "Fast growing center",
        // },
        // {
        //   name: "Tambaram",
        //   sub: "New batches open",
        // },
      ].map((b, i) => (
        <div
          key={b.name}
          className="group flex items-center justify-between border-b border-slate-200 pb-4"
        >
          <div>
            <h3 className="font-monument-600 text-xl text-slate-900 group-hover:text-indigo-700 transition">
              {b.name}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {b.sub}
            </p>
          </div>

          {/* subtle arrow */}
          <span className="text-slate-400 group-hover:translate-x-1 transition">
            →
          </span>
        </div>
      ))}

    </div>

  </div>
</section>
      {/* CTA */}
<section className="relative py-28 px-6 sm:px-10 lg:px-20 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src="/cta/about_cta.jpg"
      alt="Learning background"
      className="w-full h-full object-cover"
    />
    {/* dark + indigo overlay for brand tone */}
    <div className="absolute inset-0 bg-black/25 " />
  </div>

  {/* CONTENT */}
  <div className="relative max-w-5xl mx-auto text-center">

    <div className="backdrop-blur-md bg-black/30 border border-white/20 rounded-[2.5rem] p-12 sm:p-16 shadow-2xl">

      <h2 className="font-monument-700 text-3xl sm:text-4xl text-white leading-tight">
        Ready to Transform Learning?
      </h2>

      <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
        Book a free demo class and see how confidence and clarity begin in just one session.
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href="/contact"
          className="relative inline-flex items-center justify-center px-8 py-4 rounded-full font-montserrat-600 bg-red-800 hover:bg-red-700 transition text-white shadow-lg shadow-red-900/30"
        >
          Book Free Demo
        </a>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}