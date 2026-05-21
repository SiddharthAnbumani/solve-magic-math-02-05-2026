'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'

type MediaItem = {
  type: 'image' | 'video'
  src: string
  label: string
  desc: string
  cls?: string
}

const MEDIA: MediaItem[] = [
  {
    type: 'video',
    src: '/vids/vid_1.mp4',
    label: 'Abacus Class in Session',
    desc: 'Speed, precision, and joy — inside our abacus classroom',
    cls: 'lg:col-span-2 lg:row-span-2',
  },
  {
    type: 'image',
    src: '/gallery/1.jpeg',
    label: 'Learning Together',
    desc: 'Small batches mean every child receives focused, personal attention',
  },
  {
    type: 'image',
    src: '/gallery/2.jpeg',
    label: 'Focus & Dedication',
    desc: 'Concentration drills that build habits lasting a lifetime',
  },
  {
    type: 'video',
    src: '/vids/vid_2.mp4',
    label: 'Student Demonstration',
    desc: 'Confidence built through regular performance in front of peers',
  },
  {
    type: 'image',
    src: '/gallery/3.jpeg',
    label: 'Classroom Moments',
    desc: 'Curiosity and enthusiasm fill every session at Magic Maths',
  },
  {
    type: 'video',
    src: '/vids/reading_1.mp4',
    label: 'Tamil Reading Practice',
    desc: 'Building fluency and comprehension from the very first lesson',
  },
  {
    type: 'image',
    src: '/gallery/4.jpeg',
    label: 'Student Achievement',
    desc: 'Every milestone tracked, recognised, and celebrated',
  },
  {
    type: 'video',
    src: '/vids/reading_2.mp4',
    label: 'Phonics in Action',
    desc: 'Clear pronunciation and reading confidence for young learners',
    cls: 'lg:col-span-2',
  },
]

function GridItem({
  item,
  index,
  onClick,
}: {
  item: MediaItem
  index: number
  onClick: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${item.cls ?? ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      onClick={onClick}
    >
      {/* Media */}
      {item.type === 'image' ? (
        <img
          src={item.src}
          alt={item.label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <video
          ref={videoRef}
          src={item.src}
          className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.02]"
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* Base gradient — always visible, subtle */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Hover overlay — stronger on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

      {/* Video badge */}
      {item.type === 'video' && (
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-[10px] font-montserrat-600 uppercase tracking-widest px-2.5 py-1.5 rounded-full">
          <Play className="w-2.5 h-2.5 fill-white" />
          Video
        </div>
      )}

      {/* Label + desc — always at bottom, desc slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white font-montserrat-700 text-sm sm:text-base leading-snug drop-shadow">
          {item.label}
        </p>
        <p className="text-white/0 group-hover:text-white/80 text-xs font-montserrat-400 mt-1 leading-relaxed transition-all duration-300 line-clamp-2">
          {item.desc}
        </p>
      </div>

      {/* Expand hint */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      </div>
    </motion.div>
  )
}

function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: MediaItem[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const item = items[index]
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (item.type === 'video') {
      videoRef.current?.play().catch(() => {})
    }
  }, [index, item.type])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        onClick={onClose}
      >
        <X className="w-5 h-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-xs font-montserrat-500 tracking-widest">
        {index + 1} / {items.length}
      </div>

      {/* Prev */}
      <button
        className="absolute left-3 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        onClick={e => { e.stopPropagation(); onPrev() }}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Media */}
      <motion.div
        key={index}
        className="flex items-center justify-center w-full px-16 sm:px-20"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={e => e.stopPropagation()}
      >
        {item.type === 'image' ? (
          <img
            src={item.src}
            alt={item.label}
            className="max-h-[75vh] max-w-full object-contain rounded-xl"
          />
        ) : (
          <video
            ref={videoRef}
            src={item.src}
            className="max-h-[75vh] max-w-full rounded-xl"
            controls
            playsInline
          />
        )}
      </motion.div>

      {/* Caption */}
      <motion.div
        key={`cap-${index}`}
        className="absolute bottom-6 left-0 right-0 text-center px-6"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <p className="text-white font-montserrat-700 text-sm sm:text-base">{item.label}</p>
        <p className="text-white/50 text-xs font-montserrat-400 mt-1">{item.desc}</p>
      </motion.div>

      {/* Next */}
      <button
        className="absolute right-3 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        onClick={e => { e.stopPropagation(); onNext() }}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </motion.div>
  )
}

export default function GalleryPage() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const open = (i: number) => setLightboxIdx(i)
  const close = () => setLightboxIdx(null)
  const prev = useCallback(() => setLightboxIdx(i => (i === null ? null : (i - 1 + MEDIA.length) % MEDIA.length)), [])
  const next = useCallback(() => setLightboxIdx(i => (i === null ? null : (i + 1) % MEDIA.length)), [])

  return (
    <div className="bg-white min-h-screen">

      {/* PAGE HEADER */}
      <section className="pt-32 pb-12 px-6 text-center">
        <p className="inline-block text-[10px] font-montserrat-700 uppercase tracking-[0.25em] text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full mb-4">
          Inside Magic Maths
        </p>
        <h1 className="font-monument-700 text-4xl sm:text-5xl text-gray-900 mb-4">
          Life at Magic Maths
        </h1>
        <p className="max-w-xl mx-auto text-gray-500 font-montserrat-400 text-base leading-relaxed">
          Real classrooms, real students, real results.
          A look into the sessions, moments and milestones that make us who we are.
        </p>
        <div className="mt-6 flex items-center justify-center gap-6 text-xs font-montserrat-600 text-gray-400">
          <span>{MEDIA.filter(m => m.type === 'image').length} Photos</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>{MEDIA.filter(m => m.type === 'video').length} Videos</span>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="px-4 sm:px-8 lg:px-16 pb-24">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
          style={{ gridAutoRows: 'clamp(220px, 28vw, 420px)' }}
        >
          {MEDIA.map((item, i) => (
            <GridItem key={i} item={item} index={i} onClick={() => open(i)} />
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            items={MEDIA}
            index={lightboxIdx}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>

    </div>
  )
}
