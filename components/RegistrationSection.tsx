"use client"

import { motion } from "framer-motion"
import { Sparkles, type LucideIcon } from "lucide-react"

type Inclusion = {
  icon: LucideIcon
  label: string
}

type Props = {
  REGISTRATION_INCLUDES?: readonly Inclusion[]
}

export default function RegistrationSection({
  REGISTRATION_INCLUDES = [],
}: Props) {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-14">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto"
      >

        {/* 🔥 Soft background glow (NOT a card) */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-10 left-10 w-40 h-40 bg-red-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-10 w-52 h-52 bg-red-400/10 blur-3xl rounded-full" />
        </div>

        {/* 🔥 INLINE CONTENT */}
        <div className="space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-montserrat-600 uppercase tracking-widest text-red-600">
            <Sparkles size={12} />
            One-time Fee
          </div>

          {/* Title */}
          <h2 className="font-monument-700 text-2xl sm:text-3xl lg:text-4xl text-slate-900">
            Registration Fee
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl">
            A one-time enrollment fee that includes your child’s welcome kit
            and certification for the first level.
          </p>

          {/* Price INLINE */}
          <div className="flex items-end gap-3">
            <span className="font-monument-700 text-4xl text-red-600">
              ₹1,500
            </span>
            <span className="text-sm text-slate-500 mb-1">
              one-time admission fee
            </span>
          </div>

          {/* FEATURES (light grid, no box feel) */}
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            {REGISTRATION_INCLUDES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-slate-700"
              >
                <span className="w-7 h-7 flex items-center justify-center rounded-md bg-red-50 text-red-600">
                  <Icon size={14} strokeWidth={1.8} />
                </span>
                <p className="text-sm font-montserrat-500">{label}</p>
              </div>
            ))}
          </div>

          {/* CTA (light, not blocky) */}
          <button className="mt-4 inline-flex items-center px-5 py-2.5 rounded-full bg-red-600 text-white text-sm font-montserrat-600 hover:bg-red-700 transition">
            Get Started
          </button>

        </div>
      </motion.div>
    </section>
  )
}