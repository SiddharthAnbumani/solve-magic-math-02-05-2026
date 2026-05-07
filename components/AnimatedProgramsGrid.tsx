'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { PROGRAMS } from '@/data/programs'

export default function AnimatedProgramsGrid() {
  const programs = PROGRAMS
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {programs.map((p) => {
        const Icon = p.icon
        return (
          <motion.div
            key={p.slug}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 240, damping: 22 }}
          >
            <Link
              href={`/programs/${p.slug}`}
              className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-indigo-700 hover:shadow-2xl transition-shadow duration-500"
            >
              {/* IMAGE */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Floating badges */}
                <div className="absolute inset-0 flex items-start justify-between p-4 z-10">
                  <div className="w-12 h-12 rounded-xl bg-indigo-700 text-white flex items-center justify-center shadow-md transition-transform duration-500 group-hover:-translate-y-1">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <span className="font-montserrat-500 text-xs bg-white/90 backdrop-blur px-3 py-1 rounded-full text-slate-700 uppercase tracking-widest">
                    {p.ageRange}
                  </span>
                </div>

                {/* Readability gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-monument-700 text-2xl text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-1 font-montserrat-500 text-base text-indigo-700">
                  {p.tagline}
                </p>
                <p className="mt-4 font-montserrat-400 text-sm leading-relaxed text-slate-600">
                  {p.description}
                </p>

                {/* Footer row */}
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between flex-col sm:flex-row space-y-3 sm:space-y-0">
                  <span className="font-montserrat-500 text-sm text-slate-500">
                    {p.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 font-monument text-sm bg-red-800 px-5 py-2 text-white rounded-2xl transition-all duration-300 group-hover:gap-2 group-hover:bg-red-700">
                    View program
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
