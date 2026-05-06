"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, type LucideIcon } from "lucide-react"

type Props = {
  icon: LucideIcon
  title: string
  description: string
  image: string
  href?: string
  index: number
}

export default function ProgramShowcase({
  icon: Icon,
  title,
  description,
  image,
  href = "/programs",
  index,
}: Props) {
  const isReverse = index % 2 !== 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative"
    >
      <div
        className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
          isReverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 h-[320px] lg:h-[420px] rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ x: isReverse ? 80 : -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          {/* Icon */}
          <div className="mb-4 w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
            <Icon size={22} />
          </div>

          {/* Title */}
          <h3 className="text-3xl lg:text-4xl font-monument-700 text-slate-900">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-5 text-slate-600 leading-relaxed text-lg font-montserrat-400">
            {description}
          </p>

          {/* CTA */}
          <Link
            href={href}
            className="inline-flex items-center gap-2 mt-6 text-indigo-600 font-semibold group"
          >
            Explore Program
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}