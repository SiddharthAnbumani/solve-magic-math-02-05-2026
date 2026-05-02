'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const CATEGORIES = ['All', 'Abacus', "Rubik's Cube", 'Vedic Maths', 'Events']

const IMAGES = [
  // Abacus
  { src: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg', category: 'Abacus' },
  { src: 'https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg', category: 'Abacus' },
  { src: 'https://images.pexels.com/photos/8613023/pexels-photo-8613023.jpeg', category: 'Abacus' },
  { src: 'https://images.pexels.com/photos/8613273/pexels-photo-8613273.jpeg', category: 'Abacus' },
  { src: 'https://images.pexels.com/photos/8613295/pexels-photo-8613295.jpeg', category: 'Abacus' },

  // Rubiks
  { src: 'https://images.pexels.com/photos/2116469/pexels-photo-2116469.jpeg', category: "Rubik's Cube" },
  { src: 'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg', category: "Rubik's Cube" },
  { src: 'https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg', category: "Rubik's Cube" },
  { src: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg', category: "Rubik's Cube" },
  { src: 'https://images.pexels.com/photos/1329298/pexels-photo-1329298.jpeg', category: "Rubik's Cube" },

  // Vedic Maths / Study
  { src: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg', category: 'Vedic Maths' },
  { src: 'https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg', category: 'Vedic Maths' },
  { src: 'https://images.pexels.com/photos/4145192/pexels-photo-4145192.jpeg', category: 'Vedic Maths' },
  { src: 'https://images.pexels.com/photos/4145193/pexels-photo-4145193.jpeg', category: 'Vedic Maths' },
  { src: 'https://images.pexels.com/photos/4145194/pexels-photo-4145194.jpeg', category: 'Vedic Maths' },

  // Events / Kids
  { src: 'https://images.pexels.com/photos/8613088/pexels-photo-8613088.jpeg', category: 'Events' },
  { src: 'https://images.pexels.com/photos/8613090/pexels-photo-8613090.jpeg', category: 'Events' },
  { src: 'https://images.pexels.com/photos/8613091/pexels-photo-8613091.jpeg', category: 'Events' },
  { src: 'https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg', category: 'Events' },
  { src: 'https://images.pexels.com/photos/8613093/pexels-photo-8613093.jpeg', category: 'Events' },
]

export default function GalleryPage() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState<string | null>(null)

  const filtered =
    active === 'All'
      ? IMAGES
      : IMAGES.filter((img) => img.category === active)

  return (
    <div className="bg-white min-h-screen pt-30">

      {/* HEADER */}
      <section className="text-center px-6 py-16">
        <h1 className="font-monument-700 text-4xl text-indigo-700">
          Our Gallery
        </h1>
        <p className="mt-4 text-gray-600 font-montserrat-400">
          A glimpse into our classrooms, activities and student moments.
        </p>
      </section>

      {/* FILTERS */}
      <div className="flex justify-center flex-wrap gap-3 px-6 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1 rounded-full text-sm font-montserrat-500 transition ${
              active === cat
                ? 'bg-indigo-700 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MASONRY GRID */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 px-6 sm:px-10 lg:px-20 pb-20 space-y-5">

        {filtered.map((img, i) => (
          <motion.div
            key={i}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden rounded-2xl cursor-pointer group"
            onClick={() => setSelected(img.src)}
          >
            <img
              src={img.src}
              alt=""
              width={500}
              height={500}
              className="w-full h-auto object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
          </motion.div>
        ))}

      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </button>

            <motion.img
              src={selected}
              className="max-w-[90%] max-h-[80vh] rounded-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}