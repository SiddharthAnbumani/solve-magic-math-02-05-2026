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
  { label: 'Phonics', href: '/programs/phonics' },
  { label: 'Tamil Reading', href: '/programs/tamil-reading' },
  { label: 'Handwriting', href: '/programs/handwriting' },
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
                className="object-cover "
              />
            </Link>

            {/* Tagline */}
            {/* <p className="mt-6 font-montserrat-400 text-sm text-slate-400 leading-relaxed">
              Helping children unlock their true potential through Abacus, 
              Rubik’s Cube, Vedic Maths and personalized tuition programs.
            </p> */}

          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 sm:mt-0">
            
            {/* Quick Links */}
            <div className='flex flex-col items-center justify-center'>
              <h4 className="font-monument-700 text-[15px] uppercase tracking-widest text-white">
                Quick Links
              </h4>
              <ul className="mt-5 space-y-3 text-center">
                {QUICK_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-center font-montserrat-600 text-[15px] text-white/90 hover:text-white transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className='flex flex-col items-center justify-center'>
              <h4 className="font-monument-700 text-[15px] uppercase tracking-widest text-white">
                Programs
              </h4>
              <ul className="mt-5 space-y-3 text-center">
                {PROGRAMS.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="  font-montserrat-600 text-[15px] text-white/90 hover:text-white transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className='flex flex-col items-center justify-center'>
              <h4 className="font-monument-700 text-[15px] uppercase tracking-widest text-white">
                Contact
              </h4>
              <ul className="mt-5 space-y-4 text-[15px] text-center">
                <li className="flex items-center justify-center gap-3 text-white/90 font-montserrat-600 ">
                  <Phone size={16} className="mt-0.5 shrink-0 text-red-400" />
                  <a href="tel:+917550223044" className="hover:text-white text-white/90 transition">
                    +91 7200757754
                  </a>
                </li>

                <li className="flex items-start flex-justify-center gap-3 text-slate-400">
                  <Mail size={16} className="mt-0.5 shrink-0 text-red-400" />
                  <a
                    href="mailto:hello@magicmaths.in"
                    className="hover:text-white transition text-white/90  font-montserrat-600"
                  >
                    magicmathslearning@gmail.com 
                  </a>
                </li>

                <li className="flex items-start  justify-center gap-3 text-white/90 font-montserrat-600">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-red-400" />
                  <span>
                   Chandra Villa, Rajakilpakkam <br/>Chennai -600073
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
        
      </div>
      <div className="bg-indigo-900 flex flex-col items-center justify-end py-10">
          <p className="font-monument-400 text-center text-white text-[20px] px-2 lg:text-4xl tracking-wider ">
            Building Smarter, Confident Young Minds.
          </p>
    
      </div>
      <div className="flex justify-center items-center bg-red-800 py-5">
              <p className="font-montserrat-600  text-white/70 text-lg">
            © {new Date().getFullYear()} Magic Maths. All rights reserved.
          </p>
      </div>
    </footer>
  )
}