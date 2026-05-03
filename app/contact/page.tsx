'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
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

      {/* MAIN */}
      <section className="px-6 sm:px-10 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14">

          {/* FORM */}
          <div className="w-full lg:w-1/2">

            <h2 className="font-monument-700 text-2xl text-indigo-700">
              Send us a message
            </h2>

            <form className="mt-8 space-y-6">

              {/* Name */}
              <div>
                <label className="text-sm font-montserrat-500 text-slate-600">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full border-b border-slate-300 px-1 py-3 focus:outline-none focus:border-indigo-600 transition"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-montserrat-500 text-slate-600">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-2 w-full border-b border-slate-300 px-1 py-3 focus:outline-none focus:border-indigo-600 transition"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-montserrat-500 text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-2 w-full border-b border-slate-300 px-1 py-3 focus:outline-none focus:border-indigo-600 transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Program */}
              <div>
                <label className="text-sm font-montserrat-500 text-slate-600">
                  Program
                </label>
                <select className="mt-2 w-full border-b border-slate-300 px-1 py-3 focus:outline-none focus:border-indigo-600 bg-transparent">
                  <option>Abacus</option>
                  <option>Rubik's Cube</option>
                  <option>Vedic Maths</option>
                  <option>Tuition</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-montserrat-500 text-slate-600">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-2 w-full border-b border-slate-300 px-1 py-3 focus:outline-none focus:border-indigo-600 transition"
                  placeholder="Tell us more..."
                />
              </div>

              {/* BUTTON */}
              <div className="flex justify-center">
              <button
                type="submit"
                className="mt-6 w-full sm:w-auto px-8 py-3 rounded-full bg-indigo-700 text-red-400 font-monument text-sm hover:bg-red-700 transition"
              >
                Send Message
              </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE INFO */}
    <div className="w-full lg:w-1/2 flex flex-col gap-10">

  {/* INFO WRAPPER */}
  <div className="space-y-8 lg:bg-gray-100 lg:p-8 lg:rounded-2xl">

    {/* ITEM */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-700">
        <Phone className="text-red-400 w-5 h-5" />
      </div>
      <div>
        <p className="font-montserrat-600 text-slate-900">Call Us</p>
        <p className="text-slate-600 text-sm mt-1">+91 75502 23044</p>
      </div>
    </div>

    {/* ITEM */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-700">
        <Mail className="text-red-400 w-5 h-5" />
      </div>
      <div>
        <p className="font-montserrat-600 text-slate-900">Email</p>
        <p className="text-slate-600 text-sm mt-1">hello@magicmaths.in</p>
      </div>
    </div>

    {/* ITEM */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-700">
        <MapPin className="text-red-400 w-5 h-5" />
      </div>
      <div>
        <p className="font-montserrat-600 text-slate-900">Location</p>
        <p className="text-slate-600 text-sm mt-1">
          Anna Nagar, Chennai — 600040
        </p>
      </div>
    </div>

    {/* ITEM */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg not-only-of-type:bg-indigo-700">
        <Clock className="text-red-400 w-5 h-5" />
      </div>
      <div>
        <p className="font-montserrat-600 text-slate-900">Timings</p>
        <p className="text-slate-600 text-sm mt-1">
          Mon–Sat: 4 PM – 8 PM
        </p>
      </div>
    </div>

  </div>

  {/* CTA BLOCK */}
  <div className="bg-indigo-700 text-white p-8 rounded-2xl relative overflow-hidden">

    {/* subtle background glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

    <div className="relative">
      <h3 className="font-monument-700 text-xl">
        Book a Free Demo Class
      </h3>

      <p className="text-white/80 text-sm mt-3 leading-relaxed">
        Let your child experience learning the fun way — no pressure, just clarity.
      </p>

      <a
        href="tel:+917550223044"
        className="inline-block mt-6 bg-white text-indigo-700 px-6 py-2.5 rounded-full font-montserrat-600 hover:bg-gray-100 transition"
      >
        Call Now
      </a>
    </div>
  </div>

</div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 sm:px-10 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-slate-200">
          <iframe
            src="https://maps.google.com/maps?q=Anna%20Nagar%20Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[350px] border-0"
            loading="lazy"
          />
        </div>
      </section>

    </div>
  )
}