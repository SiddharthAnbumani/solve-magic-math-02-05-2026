'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Brain, Target, Users, Award } from 'lucide-react'
import FounderSection from '@/components/founderSection'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function AboutPage() {
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
          About Magic Maths
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 max-w-2xl mx-auto text-gray-600 font-montserrat-400"
        >
          We help children build strong mental abilities through structured
          learning programs like Abacus, Vedic Maths, Rubik’s Cube and Tuition.
        </motion.p>
      </section>

      {/* STORY SECTION */}
      <section className="px-6 sm:px-10 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="font-monument-700 text-2xl text-indigo-700">
              Our Story
            </h2>

            <p className="mt-4 text-gray-600 font-montserrat-400 leading-relaxed">
              Magic Maths was founded with a simple mission — to make learning
              enjoyable and effective for children. We noticed that traditional
              teaching methods often fail to engage young minds, so we built a
              system that focuses on interaction, speed, and confidence.
            </p>

            <p className="mt-4 text-gray-600 font-montserrat-400 leading-relaxed">
              Our programs are designed to strengthen concentration, memory,
              and logical thinking, helping students excel not just in academics
              but in life.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/about.jpg" // replace with your image
              alt="Students learning"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>
      </section>
            <section>
        <FounderSection/>
      </section>

      {/* VALUES */}
      <section className="px-6 sm:px-10 lg:px-20 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-center font-monument-700 text-2xl text-indigo-700"
          >
            What We Focus On
          </motion.h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: Brain,
                title: 'Brain Development',
                text: 'Improve memory, speed and concentration.',
              },
              {
                icon: Target,
                title: 'Focused Learning',
                text: 'Small batches with personal attention.',
              },
              {
                icon: Users,
                title: 'Confidence Building',
                text: 'Encourage students to think independently.',
              },
              {
                icon: Award,
                title: 'Proven Methods',
                text: 'Structured curriculum with real results.',
              },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-indigo-600 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-700 text-white flex items-center justify-center">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 font-monument-700 text-lg text-indigo-700">
                  {title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm font-montserrat-400">
                  {text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* PROGRAMS */}
      <section className="px-6 sm:px-10 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="font-monument-700 text-2xl text-indigo-700"
          >
            Our Programs
          </motion.h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {['Abacus', "Rubik's Cube", 'Vedic Maths', 'Tuition'].map((p) => (
              <motion.div
                key={p}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                className="p-6 rounded-xl border border-gray-200 hover:border-red-800 transition"
              >
                <h3 className="font-monument-700 text-lg text-indigo-700">
                  {p}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Structured training for better performance.
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-10 lg:px-20 pb-20">
        <div className="max-w-4xl mx-auto bg-indigo-700 text-white rounded-2xl p-10 text-center">

          <h2 className="font-monument-700 text-2xl">
            Ready to Transform Learning?
          </h2>

          <p className="mt-3 text-white/80">
            Book a free demo class and see the difference.
          </p>

          <a
            href="/contact"
            className="inline-block mt-5 bg-red-800 px-6 py-2 rounded-lg font-montserrat-600 hover:bg-red-700 transition"
          >
            Book Now
          </a>

        </div>
      </section>

    </div>
  )
}