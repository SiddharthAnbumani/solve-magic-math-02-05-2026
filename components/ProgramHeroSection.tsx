"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import SectionHeading from "./SectionHeading"

type Program = {
  title: string
  description: string
  image: string
  href?: string
}

type Slide =
  | { kind: 'program'; title: string; image: string; href: string }
  | { kind: 'all'; title: string; image: string; href: '/programs' }

const ALL_PROGRAMS_SLIDE: Slide = {
  kind: 'all',
  title: 'Explore All Programs',
  // TODO: swap with a hero collage if you have one (e.g. /all-programs.webp).
  image: '/_.webp',
  href: '/programs',
}

export default function ProgramsHeroCarousel({
  programs,
}: {
  programs: readonly Program[]
}) {
  const slides: Slide[] = [
    ...programs.map<Slide>((p) => ({
      kind: 'program',
      title: p.title,
      image: p.image,
      href: p.href ?? '/programs',
    })),
    ALL_PROGRAMS_SLIDE,
  ]

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  // 🔥 Auto slide
  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length, paused])

  return (
    <section
      className="relative w-full h-[650px] lg:h-200 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 🔥 BACKGROUND STACK (NO GAP) */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: i === active ? 1 : 0,
              scale: i === active ? 1 : 1.05,
            }}
            transition={{
              duration: 1.6,
              ease: [0.25, 1, 0.5, 1],
            }}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay — slightly heavier on the all-programs slide for typographic punch */}
            <div
              className={`absolute inset-0 ${
                slide.kind === 'all'
                  ? 'bg-gradient-to-br from-indigo-900/85 via-black/65 to-red-900/55'
                  : 'bg-black/50'
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="max-w-3xl"
        >


                {/* 🔥 HEADING (kept inside container) */}


<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
  className="text-center max-w-2xl mx-auto px-6 mb-6"
>



  {/* 🔥 Title (with highlight) */}
  <h2 className="mt-3 font-monument-700 text-xl sm:text-4xl lg:text-5xl text-white leading-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.8)]">
    {slides[active].kind === 'all' ? (
      <>
        Seven ways to grow a{" "}
        <span className="text-white tracking-wide text-2xl sm:text-4xl lg:text-5xl">Sharper Mind</span>.
      </>
    ) : (
      <>
        Four ways to grow a{" "}
        <span className="text-white tracking-wide text-2xl sm:text-4xl lg:text-5xl">Sharper Mind</span>.
      </>
    )}
  </h2>

 <p className="text-white font-montserrat-700 text-3xl uppercase drop-shadow-md mt-10">
   {slides[active].title}
  </p>
</motion.div>
          <Link
            href={slides[active].href}
            className="inline-flex items-center gap-2 mt-8 px-6 py-2 sm:py-3 bg-red-800 hover:bg-indigo-700 text-white rounded-lg font-semibold transition font-monument-400 tracking-wide"
          >
            {slides[active].kind === 'all' ? (
              <>Explore All Programs</>
            ) : (
              <>
                Explore <span className="hidden sm:block">{slides[active].title}</span> Program
              </>
            )}
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>

      {/* 🔥 DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={
              s.kind === 'all' ? 'Go to: Explore all programs' : `Go to: ${s.title}`
            }
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i ? 'w-6 bg-white' : 'w-2 bg-white/50'
            } ${s.kind === 'all' ? 'ring-1 ring-white/40 ring-offset-1 ring-offset-transparent' : ''}`}
          />
        ))}
      </div>
    </section>
  )
}