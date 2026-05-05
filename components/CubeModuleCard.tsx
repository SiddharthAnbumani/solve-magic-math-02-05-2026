'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'

export type CubeLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export type CubeModule = {
  title: string
  module: string
  duration: string
  image: string
  description?: string
  level?: CubeLevel
}

const LEVEL_STYLES: Record<CubeLevel, string> = {
  Beginner: 'bg-slate-100 text-slate-700 ring-1 ring-slate-200',
  Intermediate: 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200',
  Advanced: 'bg-red-50 text-red-700 ring-1 ring-red-200',
}

type Props = CubeModule & { index?: number }

export default function CubeModuleCard({
  title,
  module,
  duration,
  image,
  description,
  level,
  index = 0,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
      whileHover={{
        y: -4,
        transition: { type: 'spring', stiffness: 240, damping: 22 },
      }}
      className="group relative flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/0 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-montserrat-600 uppercase tracking-widest text-indigo-700">
            {module}
          </span>
          {/* {level && (
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-montserrat-600 uppercase tracking-widest backdrop-blur ${LEVEL_STYLES[level]}`}
            >
              {level}
            </span>
          )} */}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-monument-700 text-xl text-slate-900 leading-snug">
          {title}
        </h3>

        {description && (
          <p className="mt-2 font-montserrat-400 text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        )}

        <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-100">
          <div className="flex items-center gap-2 text-slate-500 mt-5">
            <Clock size={14} strokeWidth={1.75} />
            <span className="font-montserrat-500 text-sm">{duration}</span>
          </div>
          <span className="mt-5 inline-flex items-center gap-1 font-monument text-xs uppercase tracking-widest text-indigo-700 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Learn <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </motion.article>
  )
}
