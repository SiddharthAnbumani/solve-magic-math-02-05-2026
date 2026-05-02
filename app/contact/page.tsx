'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-white text-black min-h-screen pt-30">

      {/* HERO */}
      <section className=" px-6 sm:px-10 lg:px-20 py-20 text-center">
        <h1 className="font-monument-700 text-4xl sm:text-5xl text-indigo-700">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-indigo-700/80 font-montserrat-400">
          Have questions about our programs? Want to book a free demo?  
          We’re here to help you get started.
        </p>
      </section>

      {/* MAIN */}
      <section className="px-6 sm:px-10 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* CONTACT FORM */}
          <div className="bg-white text-black rounded-2xl p-8 border border-black/10">
            <h2 className="font-monument-700 text-2xl text-indigo-700">
              Send us a message
            </h2>

            <form className="mt-6 space-y-5">
              
              <div>
                <label className="text-sm font-montserrat-500">Full Name</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-sm font-montserrat-500">Phone Number</label>
                <input
                  type="tel"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="text-sm font-montserrat-500">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-sm font-montserrat-500">Program</label>
                <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600">
                  <option>Abacus</option>
                  <option>Rubik's Cube</option>
                  <option>Vedic Maths</option>
                  <option>Tuition</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-montserrat-500">Message</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-800 text-white py-3 rounded-lg font-montserrat-600 hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-between space-y-8">

            {/* Info Cards */}
            <div className="space-y-6">

              <div className="flex items-start gap-4 bg-white/10 p-5 rounded-xl">
                <Phone className="text-red-400" />
                <div>
                  <p className="font-montserrat-500">Call Us</p>
                  <p className="text-white/80 text-sm">+91 75502 23044</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 p-5 rounded-xl">
                <Mail className="text-red-400" />
                <div>
                  <p className="font-montserrat-500">Email</p>
                  <p className="text-white/80 text-sm">hello@magicmaths.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 p-5 rounded-xl">
                <MapPin className="text-red-400" />
                <div>
                  <p className="font-montserrat-500">Location</p>
                  <p className="text-white/80 text-sm">
                    Anna Nagar, Chennai — 600040
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 p-5 rounded-xl">
                <Clock className="text-red-400" />
                <div>
                  <p className="font-montserrat-500">Timings</p>
                  <p className="text-white/80 text-sm">
                    Mon–Sat: 4 PM – 8 PM
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="bg-red-800 p-6 rounded-2xl text-center">
              <h3 className="font-monument-700 text-xl">
                Book a Free Demo Class
              </h3>
              <p className="text-white/80 text-sm mt-2">
                Let your child experience learning the fun way.
              </p>
              <a
                href="tel:+917550223044"
                className="inline-block mt-4 bg-white text-red-800 px-6 py-2 rounded-lg font-montserrat-600 hover:bg-gray-100 transition"
              >
                Call Now
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* MAP (optional but powerful) */}
      <section className="px-6 sm:px-10 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/10">
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