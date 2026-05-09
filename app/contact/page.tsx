'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import BranchCard from '@/components/BranchCard'

export default function ContactPage() {
  const [selectedProgram, setSelectedProgram] = useState('abacus')

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-28">

      {/* HERO */}
      <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-20 text-center">
        <h1 className="font-monument-700 text-4xl sm:text-5xl lg:text-6xl text-indigo-700 tracking-tight">
          Get in Touch
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg font-montserrat-400 leading-relaxed">
          Have questions about our programs? Want to book a free demo?
          We’ll guide you to the right starting point for your child.
        </p>
      </section>

      {/* CONTACT + BRANCHES FIRST */}
      <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* BRANCHES */}
          <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BranchCard
                name="Santhosapuram Branch"
                image="/magic_maths_sembakkam.webp"
                address="Chandra Villa, 28/2 Ponniyamman Kovil Street, Rajakilpakkam, Chennai - 600073"
                phone="7200757754"
                mapLink="https://share.google/2PtXrwgGvJl5q7Abs"
                email="magicmathslearning@gmail.com"
              />

              <BranchCard
                name="Rajakilpakkam Branch"
                image="/magic_maths_sembakkam.webp"
                address="Anna Nagar, Chennai - 600040"
                phone="7200757754"
                mapLink="#"
                email="hello@magicmaths.in"
              />
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8 bg-gray-100 p-8 rounded-2xl">

            <div className="grid sm:grid-cols-2 gap-8">

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-700">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-montserrat-600 text-slate-900">Call Us</p>
                  <p className="text-slate-600 text-sm mt-1">+91 7200757754</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-700">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-montserrat-600 text-slate-900">Email</p>
                  <p className="text-slate-600 text-sm mt-1">magicmathslearning@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-700">
                  <MapPin className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-montserrat-600 text-slate-900">Location</p>
                  <p className="text-slate-600 text-sm mt-1">
                    Chandra Villa, Rajakilpakkam
Chennai -600073
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-700">
                  <Clock className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-montserrat-600 text-slate-900">Timings</p>
                  <p className="text-slate-600 text-sm mt-1">
                    Mon–Sat: 4 PM – 8 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FORM (MOVED DOWN) */}
<section className="px-6 sm:px-10 lg:px-20 py-20">
  <div className="max-w-7xl mx-auto">

    {/* WRAPPER */}
    <div className="grid lg:grid-cols-2 gap-10 items-stretch">

      {/* FORM */}
      <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8">

        <h2 className="font-monument-700 text-2xl text-indigo-700">
          Book a Free Demo
        </h2>

        <p className="text-sm text-slate-500 mt-2">
          Takes less than 30 seconds
        </p>

        <form className="mt-6 space-y-5">

          {/* ROW 1 */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-500">Parent Name</label>
              <input
                type="text"
                className="mt-1 w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 transition"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="text-xs text-slate-500">Phone</label>
              <input
                type="tel"
                className="mt-1 w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 transition"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-500">Email</label>
              <input
                type="email"
                className="mt-1 w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-xs text-slate-500">Program</label>
              <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                <SelectTrigger className="mt-1 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-200">
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="abacus">Abacus</SelectItem>
                  <SelectItem value="rubiks-cube">Rubik&apos;s Cube</SelectItem>
                  <SelectItem value="vedic-maths">Vedic Maths</SelectItem>
                  <SelectItem value="tuition">Tuition</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-xs text-slate-500">Message (Optional)</label>
            <textarea
              rows={3}
              className="mt-1 w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 transition"
              placeholder="Any specific requirement..."
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full bg-indigo-700 text-white py-3 rounded-lg font-medium hover:bg-indigo-800 transition"
          >
            Book Free Demo
          </button>



        </form>
      </div>

      {/* DEMO CTA SIDE */}
<div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 text-white p-8 shadow-2xl flex flex-col justify-between">

  {/* Glow Effects */}
  <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500/20 rounded-full blur-2xl" />

  <div className="relative z-10">

    {/* TAG */}
    {/* <span className="inline-block text-xs bg-white/10 px-3 py-1 rounded-full tracking-wide">
      FREE DEMO AVAILABLE
    </span> */}

    {/* HEADLINE */}
    <h3 className="font-monument-700 text-2xl mt-4 leading-snug">
      See How Your Child Can Improve in Just 1 Session
    </h3>

    {/* SUBTEXT */}
    <p className="mt-4 text-white/80 text-sm leading-relaxed">
      Speak with our expert trainers and experience our teaching method —
      no commitment, just clarity.
    </p>

    {/* BENEFITS */}
    <div className="mt-6 space-y-3 text-sm">

      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
        <span>Free 1-on-1 demo session</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
        <span>Personalized learning plan</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
        <span>Improve speed & confidence</span>
      </div>

    </div>
  </div>

  {/* CTA AREA */}
  <div className="relative z-10 mt-8 space-y-3">

    <a
      href="tel:+917200757754"
      className="block w-full text-center bg-white text-indigo-700 py-3 rounded-xl font-montserrat-500 shadow-md hover:scale-[1.02] hover:bg-gray-100 transition"
    >
       Call & Book Now
    </a>

    <a
      href="https://wa.me/917200757754"
      target="_blank"
      className="block w-full text-center border border-white/30 py-3 rounded-xl font-montserrat-500 bg-green-600 text-white transition"
    >
      Chat on WhatsApp
    </a>



  </div>
</div>

    </div>

  </div>
</section>

      {/* MAP */}
      {/* <section className="px-6 sm:px-10 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-slate-200">
          <iframe
            src="https://maps.google.com/maps?q=Anna%20Nagar%20Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[350px] border-0"
            loading="lazy"
          />
        </div>
      </section> */}

    </div>
  )
}