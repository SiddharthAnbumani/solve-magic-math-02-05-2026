import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book Demo', href: '/contact' },
]

const PROGRAMS = [
  { label: 'Abacus', href: '/programs/abacus' },
  { label: "Rubik's Cube", href: '/programs/rubiks' },
  { label: 'Vedic Maths', href: '/programs/vedic' },
  { label: 'Tuition', href: '/programs/tuition' },
]

const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const YoutubeIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.35z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-baseline gap-1.5">
              <span className="font-monument-700 text-2xl text-white">Solve</span>
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-700" />
              <span className="font-montserrat-500 text-xs text-slate-400">Magic Maths</span>
            </Link>
            <p className="mt-5 font-montserrat-400 text-sm leading-relaxed text-slate-400">
              Brain-development classes for kids — Abacus, Rubik&apos;s Cube, Vedic Maths and Tuition. Taught with care, in small batches.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                aria-label="Facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-slate-800 hover:border-indigo-700 hover:text-indigo-700 transition"
              >
                <FacebookIcon width={16} height={16} />
              </a>
              <a
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-slate-800 hover:border-indigo-700 hover:text-indigo-700 transition"
              >
                <InstagramIcon width={16} height={16} />
              </a>
              <a
                aria-label="YouTube"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-slate-800 hover:border-indigo-700 hover:text-indigo-700 transition"
              >
                <YoutubeIcon width={16} height={16} />
              </a>
            </div>
          </div>

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

          <div>
            <h4 className="font-monument-700 text-xs uppercase tracking-widest text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <Phone size={16} className="mt-0.5 shrink-0 text-indigo-700" />
                <a href="tel:+917550223044" className="hover:text-white transition">
                  +91 75502 23044
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Mail size={16} className="mt-0.5 shrink-0 text-indigo-700" />
                <a
                  href="mailto:hello@solvemagicmaths.in"
                  className="hover:text-white transition"
                >
                  hello@solvemagicmaths.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-indigo-700" />
                <span>
                  Anna Nagar Center,
                  <br />
                  Chennai — 600040
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-montserrat-400 text-xs text-slate-500">
            © {new Date().getFullYear()} Solve Magic Maths. All rights reserved.
          </p>
          <p className="font-montserrat-400 text-xs text-slate-500">
            Crafted with care for curious minds.
          </p>
        </div>
      </div>
    </footer>
  )
}
