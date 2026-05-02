'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const PRICING = [
  {
    title: 'Abacus',
    price: '₹1,500',
    duration: '/month',
    features: [
      '2 Classes per week',
      'Small batch learning',
      'Speed & accuracy training',
      'Progress tracking',
    ],
    highlight: false,
  },
  {
    title: "Rubik's Cube",
    price: '₹1,200',
    duration: '/month',
    features: [
      'Beginner to advanced solving',
      'Logic & pattern training',
      'Weekly practice sessions',
      'Competition preparation',
    ],
    highlight: false,
  },
  {
    title: 'Vedic Maths',
    price: '₹1,800',
    duration: '/month',
    features: [
      'Fast calculation techniques',
      'School exam support',
      'Mental maths shortcuts',
      'Confidence building',
    ],
    highlight: true,
  },
  {
    title: 'Tuition',
    price: '₹2,000',
    duration: '/month',
    features: [
      'Personal attention',
      'Subject-wise focus',
      'Homework support',
      'Exam preparation',
    ],
    highlight: false,
  },
]

export default function PricingPage() {
  return (
    <div className="bg-white text-black pt-30">

      {/* HERO */}
      <section className="px-6 sm:px-10 lg:px-20 py-16 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-monument-700 text-4xl sm:text-5xl text-indigo-700"
        >
          Pricing Plans
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 max-w-2xl mx-auto text-gray-600 font-montserrat-400"
        >
          Simple, transparent pricing for all our programs.
          Choose what fits your child’s learning journey.
        </motion.p>
      </section>

      {/* PRICING CARDS */}
      <section className="px-6 sm:px-10 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {PRICING.map((plan) => (
            <motion.div
              key={plan.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition ${
                plan.highlight
                  ? 'border-indigo-700 shadow-lg'
                  : 'border-gray-200'
              }`}
            >

              {/* HEADER */}
              <div>
                <h3 className="font-monument-700 text-xl text-indigo-700">
                  {plan.title}
                </h3>

                <div className="mt-3 flex items-end gap-1">
                  <span className="text-3xl font-monument-700 text-black">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    {plan.duration}
                  </span>
                </div>

                {/* FEATURES */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <Check size={16} className="text-green-600 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="/contact"
                className={`mt-8 text-center py-2 rounded-lg font-montserrat-600 transition ${
                  plan.highlight
                    ? 'bg-red-800 text-white hover:bg-red-700'
                    : 'bg-indigo-700 text-white hover:bg-indigo-600'
                }`}
              >
                Enroll Now
              </a>

            </motion.div>
          ))}
        </div>
      </section>

      {/* EXTRA INFO */}
      <section className="px-6 sm:px-10 lg:px-20 pb-20">
        <div className="max-w-4xl mx-auto text-center bg-gray-50 border border-gray-200 rounded-2xl p-10">

          <h2 className="font-monument-700 text-2xl text-indigo-700">
            Need Help Choosing?
          </h2>

          <p className="mt-3 text-gray-600 font-montserrat-400">
            Not sure which program is right? Talk to us and we’ll guide you.
          </p>

          <a
            href="tel:+917550223044"
            className="inline-block mt-5 bg-red-800 text-white px-6 py-2 rounded-lg font-montserrat-600 hover:bg-red-700 transition"
          >
            Call Now
          </a>

        </div>
      </section>

    </div>
  )
}