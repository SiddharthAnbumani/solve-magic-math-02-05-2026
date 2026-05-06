"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { Check } from "lucide-react"

// 🔥 Example pricing map (replace with your real logic/API later)
const PRICING: Record<string, Record<string, number>> = {
  "Grade 1": {
    Abacus: 1500,
    "Vedic Maths": 1800,
  },
  "Grade 2": {
    Abacus: 1600,
    "Vedic Maths": 2000,
  },
  "Grade 3": {
    Abacus: 1800,
    "Vedic Maths": 2200,
  },
}

const grades = Object.keys(PRICING)
const subjects = ["Abacus", "Vedic Maths"]

export default function TuitionPricingSection() {
  const [grade, setGrade] = useState(grades[0])
  const [subject, setSubject] = useState(subjects[0])

  const price = PRICING?.[grade]?.[subject] ?? 0

  return (
    <section className="px-6 sm:px-10 lg:px-20 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-8xl rounded-3xl bg-red-800 text-white px-8 py-12 lg:p-14"
      >
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* 🔥 LEFT */}
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-widest font-montserrat-600 text-red-200">
              Tuition Fee Calculator
            </p>

            <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl lg:text-5xl">
              Smart Pricing Based on Level
            </h2>

            <p className="mt-4 text-red-200 max-w-xl leading-relaxed">
              Select your child’s grade and program to see the exact monthly fee.
            </p>

            {/* 🔥 SELECTORS */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">

              {/* Grade */}
              <Select value={grade} onValueChange={setGrade}>
                <SelectTrigger className="w-full sm:w-[200px] bg-white text-black">
                  <SelectValue placeholder="Select Grade" />
                </SelectTrigger>
                <SelectContent>
                  {grades.map((g) => (
                    <SelectItem key={g} value={g}>
                      {g}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Subject */}
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger className="w-full sm:w-[200px] bg-white text-black">
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

            </div>
          </div>

          {/* 🔥 RIGHT PRICE CARD */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white text-red-800 p-6 shadow-lg">

              <p className="text-sm text-red-500 font-montserrat-600">
                Estimated Monthly Fee
              </p>

              {/* 🔥 Animated Price */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={price}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-end gap-2 mt-2"
                >
                  <span className="font-monument-700 text-4xl lg:text-5xl">
                    ₹{price}
                  </span>
                  <span className="text-sm text-red-400 mb-1">
                    / month
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* FEATURES */}
              <ul className="mt-5 space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check size={16} /> Personalized learning
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check size={16} /> Weekly assessments
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Check size={16} /> Progress tracking
                </li>
              </ul>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}