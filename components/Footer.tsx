import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const PROGRAMS = [
  { label: 'Abacus', href: '/programs/abacus' },
  { label: "Rubik's Cube", href: '/programs/rubiks' },
  { label: 'Vedic Maths', href: '/programs/vedic' },
  { label: 'Tuition', href: '/programs/tuition' },
]

export default function Footer() {
  return (
    <footer className=" text-slate-300">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8 py-16 bg-indigo-700">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          
          {/* 🔥 LEFT LOGO AREA */}
          <div className="w-full lg:w-4/12 flex flex-col justify-between">
            
            {/* Logo */}
            <Link href="/" className="block">
              <img
                src="/image.png" // replace with your logo path
                alt="Magic Maths"
                className="object-cover"
              />
            </Link>

            {/* Tagline */}
            {/* <p className="mt-6 font-montserrat-400 text-sm text-slate-400 leading-relaxed">
              Helping children unlock their true potential through Abacus, 
              Rubik’s Cube, Vedic Maths and personalized tuition programs.
            </p> */}

          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            
            {/* Quick Links */}
            <div>
              <h4 className="font-monument-700 text-xs uppercase tracking-widest text-white">
                Quick Links
              </h4>
              <ul className="mt-5 space-y-3">
                {QUICK_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-montserrat-400 text-sm text-slate-400 hover:text-white transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-monument-700 text-xs uppercase tracking-widest text-white">
                Programs
              </h4>
              <ul className="mt-5 space-y-3">
                {PROGRAMS.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-montserrat-400 text-sm text-slate-400 hover:text-white transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-monument-700 text-xs uppercase tracking-widest text-white">
                Contact
              </h4>
              <ul className="mt-5 space-y-4 text-sm">
                
                <li className="flex items-start gap-3 text-slate-400">
                  <Phone size={16} className="mt-0.5 shrink-0 text-indigo-400" />
                  <a href="tel:+917550223044" className="hover:text-white transition">
                    +91 75502 23044
                  </a>
                </li>

                <li className="flex items-start gap-3 text-slate-400">
                  <Mail size={16} className="mt-0.5 shrink-0 text-indigo-400" />
                  <a
                    href="mailto:hello@magicmaths.in"
                    className="hover:text-white transition"
                  >
                    hello@magicmaths.in
                  </a>
                </li>

                <li className="flex items-start gap-3 text-slate-400">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-indigo-400" />
                  <span>
                    Anna Nagar Center,
                    <br />
                    Chennai — 600040
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
        
      </div>
      <div className="bg-red-800 flex flex-col items-center justify-end py-10">
          <p className="font-monument-400 text-center text-white text-4xl tracking-wider ">
            Building Smarter, Confident Young Minds.
          </p>
    
      </div>
      <div className="flex justify-center bg-red-800 pb-10">
              <p className="font-montserrat-600  text-white/70 text-lg">
            © {new Date().getFullYear()} Magic Maths. All rights reserved.
          </p>
      </div>
    </footer>
  )
}