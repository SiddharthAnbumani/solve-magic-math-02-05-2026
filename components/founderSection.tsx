'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function FounderSection() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

        {/* LEFT — IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 h-[320px] sm:h-[420px] rounded-3xl overflow-hidden"
        >
          <Image
            src="/founder.jpg"
            alt="Founder - Magic Maths"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <p className="text-xs font-montserrat-600 text-indigo-700 uppercase tracking-widest">
            Founder
          </p>

          <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl text-slate-900 leading-tight">
            Meet the Mind Behind Magic Maths
          </h2>

          <p className="mt-6 text-slate-600 font-montserrat-400 leading-relaxed">
            Magic Maths was founded with a clear vision — to transform the way children learn.
            Instead of memorization, the focus is on building strong mental abilities through
            structured and engaging techniques.
          </p>

          <p className="mt-4 text-slate-600 font-montserrat-400 leading-relaxed">
            With years of experience in teaching and mentoring, the founder has helped
            students improve concentration, speed, and confidence. The goal is not just
            academic success, but shaping young minds to think independently and perform better in life.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-montserrat-500">
              5+ Years Experience
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-montserrat-500">
              1000+ Students Trained
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-montserrat-500">
              Certified Trainer
            </span>
          </div>

          {/* SIGNATURE */}
          <div className="mt-10">
            <p className="font-monument-700 text-xl text-slate-900">
              Bharathi
            </p>
            <p className="text-sm text-slate-500 font-montserrat-400">
              Founder, Magic Maths
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  )
}