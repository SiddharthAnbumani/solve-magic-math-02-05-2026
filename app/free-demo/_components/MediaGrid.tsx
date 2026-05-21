'use client'

import { motion } from 'framer-motion'

const ITEMS = [
  { type: 'video', src: '/vids/vid_1.mp4',     label: 'Abacus Class in Session',  cls: 'lg:col-span-2 lg:row-span-2' },
  { type: 'image', src: '/gallery/1.jpeg',      label: 'Learning Together',        cls: '' },
  { type: 'image', src: '/gallery/2.jpeg',      label: 'Focus & Dedication',       cls: '' },
  { type: 'video', src: '/vids/vid_2.mp4',      label: 'Student Demonstration',    cls: '' },
  { type: 'image', src: '/gallery/3.jpeg',      label: 'Classroom Moments',        cls: '' },
  { type: 'image', src: '/gallery/4.jpeg',      label: 'Student Achievement',      cls: '' },
] as const

const EASE = [0.22, 1, 0.36, 1] as const

export default function MediaGrid() {
  return (
    <section className="bg-indigo-700 py-14 px-5 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-red-400 mb-2">
            Inside Our Classrooms
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            See It for Yourself
          </h2>
          <p className="text-red-400 text-sm max-w-sm mx-auto">
            Real sessions, real students — no stock photos.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          style={{ gridAutoRows: 'clamp(180px, 22vw, 300px)' }}
        >
          {ITEMS.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE }}
              className={`relative overflow-hidden rounded-2xl ${m.cls} ${m.type === 'video' ? 'bg-black' : ''}`}
            >
              {m.type === 'video' ? (
                <video
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={m.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={m.src}
                  alt={m.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <p className="absolute bottom-3 left-4 text-white text-xs font-extrabold tracking-wide drop-shadow">
                {m.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-8"
        >
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-red-800 hover:bg-indigo-800 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-colors"
          >
            Book Your Free Demo &rarr;
          </a>
        </motion.div>

      </div>
    </section>
  )
}
