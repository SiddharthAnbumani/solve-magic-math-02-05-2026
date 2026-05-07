'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { PHONE, PHONE_DISPLAY, WHATSAPP } from '@/lib/contact'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function CTASection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl h-[420px] lg:h-[460px] text-white"
        >
          {/* Background image — slow parallax-zoom on reveal */}
          <motion.div
            initial={{ scale: 1.12 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/vedic_maths.jpg')" }}
          />

          {/* Dark overlay — soft fade in */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"
          />

          {/* Floating decorative shapes — slow continuous drift */}
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7.5, ease: 'easeInOut', repeat: Infinity }}
              className="absolute -top-10 -left-10 w-72 h-44 bg-white/10 rounded-2xl rotate-[-12deg] blur-sm"
            />
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 8.5,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 0.6,
              }}
              className="absolute top-20 -right-16 w-80 h-48 bg-white/10 rounded-2xl rotate-[10deg]"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 9.5,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 1.2,
              }}
              className="absolute bottom-0 left-1/3 w-64 h-40 bg-white/10 rounded-2xl rotate-[6deg] blur-sm"
            />
          </div>

          {/* Content — staggered reveal */}
          <div className="relative h-full flex items-center px-8 lg:px-16">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="max-w-6xl"
            >
              <motion.h2
                variants={fadeUp}
                className="font-monument-700 text-xl sm:text-4xl lg:text-5xl tracking-tight text-center sm:textstart drop-shadow-[0_6px_30px_rgba(0,0,0,0.8)]"
              >
                Not Sure Which One?
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 font-montserrat-400 text-center font-montserrat-500 lg:text-lg text-white/85 max-w-xl"
              >
                Book a free demo we&apos;ll talk to your child, suggest the right starting point, and help you decide. No pressure, no fee on the demo.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/40 hover:-translate-y-0.5 font-monument text-xs sm:text-sm transition-all duration-300"
                >
                  Book Free Demo <ArrowRight size={16} />
                </Link>

                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-indigo-700 font-monument text-xs sm:text-sm hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Phone size={16} /> {PHONE_DISPLAY}
                </a>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-green-600 text-white font-monument text-xs sm:text-sm hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
