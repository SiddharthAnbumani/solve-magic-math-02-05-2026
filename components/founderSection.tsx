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
          <p className="text-sm font-montserrat-600 text-indigo-700 uppercase tracking-widest">
            Founder
          </p>
                <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl text-slate-900 leading-tight">
                Meet the Heart Behind Magic Maths
                </h2>

                <p className="mt-6 text-slate-600 font-montserrat-400 leading-relaxed">
                Magic Maths didn’t begin as just an academy — it started with a simple passion:
                a genuine love for teaching children and seeing them truly understand what they learn.
                </p>

                <p className="mt-4 text-slate-600 font-montserrat-400 leading-relaxed">
                What began as helping a few students overcome their fear of maths soon turned into something much bigger.
                Watching children grow in confidence, solve problems faster, and enjoy learning sparked a deeper purpose —
                to create a space where every child feels capable, supported, and excited to learn.
                </p>

                <p className="mt-4 text-slate-600 font-montserrat-400 leading-relaxed">
                With years of teaching experience and a strong belief that every child learns differently,
                Magic Maths was built to move beyond memorization. The focus is on developing mental ability,
                sharp thinking, and self-confidence — skills that go far beyond the classroom.
                </p>

                <p className="mt-4 text-slate-600 font-montserrat-400 leading-relaxed">
                Today, it’s not just about maths. It’s about shaping young minds to think independently,
                believe in themselves, and approach challenges with confidence — in academics and in life.
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