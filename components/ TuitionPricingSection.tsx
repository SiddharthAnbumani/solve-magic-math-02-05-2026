"use client"

import { motion } from "framer-motion"
import { Clock, Calendar, Check } from "lucide-react"

const TIERS = [
  {
    label: "KG",
    grades: "Kindergarten",
    price: "₹2,000",
    duration: "1 hour",
    features: ["Mon – Fri", "6:00 – 7:00 PM", "Foundational concepts"],
  },
  {
    label: "1–2",
    grades: "Grade 1 & 2",
    price: "₹2,500",
    duration: "1.5 hours",
    features: ["Mon – Fri", "6:00 – 7:30 PM", "Core subject support"],
    highlight: true,
  },
  {
    label: "3–5",
    grades: "Grade 3 to 5",
    price: "₹3,000",
    duration: "2 hours",
    features: ["Mon – Fri", "6:00 – 8:00 PM", "In-depth curriculum coverage"],
  },
  {
    label: "6–8",
    grades: "Grade 6 to 8",
    price: "₹3,500",
    duration: "2 hours",
    features: ["Mon – Fri", "6:00 – 8:00 PM", "Exam & board prep"],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export default function TuitionPricingSection() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-8xl"
      >
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <span className="inline-block font-montserrat-700 text-xs uppercase tracking-widest text-indigo-700">
            Tuition
          </span>
          <h2 className="font-monument-700 text-3xl sm:text-4xl tracking-tight text-indigo-800">
            Grade-wise Tuition Pricing
          </h2>
          <div className="flex items-center justify-center gap-6 mt-4 text-slate-600 font-montserrat-500 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={15} className="text-indigo-600" />
              Monday – Friday
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={15} className="text-indigo-600" />
              6:00 – 8:00 PM
            </span>
          </div>
          <div className="h-px w-20 bg-slate-200 mx-auto mt-4" />
        </div>

        {/* Pricing cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TIERS.map((tier) => (
            <motion.div
              key={tier.label}
              variants={fadeUp}
              className={`flex flex-col rounded-3xl border p-7 transition-shadow duration-300 ${
                tier.highlight
                  ? "border-indigo-700 shadow-lg bg-white"
                  : "border-slate-200 bg-white hover:shadow-md"
              }`}
            >
              {/* Grade badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-700 text-white inline-flex items-center justify-center font-monument-700 text-sm">
                  {tier.label}
                </div>
                {tier.highlight && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-700 ring-1 ring-red-200 text-[11px] font-montserrat-600 uppercase tracking-widest">
                    Popular
                  </span>
                )}
              </div>

              <h3 className="font-monument-700 text-lg text-slate-900">
                {tier.grades}
              </h3>

              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-monument-700 text-4xl text-slate-900">
                  {tier.price}
                </span>
                <span className="font-montserrat-500 text-sm text-slate-500">
                  / month
                </span>
              </div>

              <p className="mt-1 font-montserrat-600 text-xs text-indigo-600 uppercase tracking-wide">
                {tier.duration} per session
              </p>

              <ul className="mt-5 space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 font-montserrat-400 text-sm text-slate-700"
                  >
                    <Check size={15} className="text-indigo-700 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}