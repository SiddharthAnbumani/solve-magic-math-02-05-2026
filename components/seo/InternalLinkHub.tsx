import Link from 'next/link'
import { ArrowUpRight, BookOpen, MapPin, Phone } from 'lucide-react'
import { LOCATIONS } from '@/data/locations'
import { PROGRAMS } from '@/data/programs'

/**
 * Site-wide internal-link surface that renders just above the footer on every page.
 *
 * Why this exists:
 *  - Crawlability — Googlebot reaches every program + every location from any entry point
 *  - PageRank distribution — high-value pages get linked from low-value ones
 *  - Long-tail SEO — the bottom "popular searches" cloud captures hyperlocal queries
 *    (e.g. "Abacus in Anna Nagar") without polluting the main UI
 *
 * Server component — no client JS, no flicker.
 */
export default function InternalLinkHub() {
  return (
    <section
      aria-label="Explore more across Magic Maths"
      className="border-t border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block font-montserrat-700 text-xs uppercase tracking-widest text-indigo-700">
            Explore more
          </span>
          <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl tracking-tight text-slate-900">
            Find what fits your child.
          </h2>
          <p className="mt-3 font-montserrat-400 text-base text-slate-600">
            Every program, every centre, every link in one place.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* PROGRAMS */}
          <div>
            <h3 className="flex items-center gap-2 font-monument-700 text-base text-slate-900">
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-indigo-700/10 text-indigo-700">
                <BookOpen size={15} strokeWidth={1.75} />
              </span>
              Programs
            </h3>
            <ul className="mt-5 space-y-2.5">
              {PROGRAMS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/programs/${p.slug}`}
                    className="group inline-flex items-center gap-1 font-montserrat-500 text-sm text-slate-700 hover:text-indigo-700 transition-colors"
                  >
                    {p.title}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/programs"
                  className="font-monument text-xs uppercase tracking-widest text-indigo-700 hover:text-indigo-900 transition"
                >
                  View all programs →
                </Link>
              </li>
            </ul>
          </div>

          {/* LOCATIONS */}
          <div>
            <h3 className="flex items-center gap-2 font-monument-700 text-base text-slate-900">
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-indigo-700/10 text-indigo-700">
                <MapPin size={15} strokeWidth={1.75} />
              </span>
              Centres in Chennai
            </h3>
            <ul className="mt-5 space-y-2.5">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/locations/${l.slug}`}
                    className="group inline-flex items-center gap-1 font-montserrat-500 text-sm text-slate-700 hover:text-indigo-700 transition-colors"
                  >
                    {l.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="font-monument text-xs uppercase tracking-widest text-indigo-700 hover:text-indigo-900 transition"
                >
                  View all centres →
                </Link>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS + CTA */}
          <div>
            <h3 className="flex items-center gap-2 font-monument-700 text-base text-slate-900">
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-indigo-700/10 text-indigo-700">
                <Phone size={15} strokeWidth={1.75} />
              </span>
              Get started
            </h3>
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link
                  href="/pricing"
                  className="font-montserrat-500 text-sm text-slate-700 hover:text-indigo-700 transition-colors"
                >
                  Transparent pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-montserrat-500 text-sm text-slate-700 hover:text-indigo-700 transition-colors"
                >
                  About our trainers
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="font-montserrat-500 text-sm text-slate-700 hover:text-indigo-700 transition-colors"
                >
                  Student gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-montserrat-500 text-sm text-slate-700 hover:text-indigo-700 transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-700 text-white font-monument text-sm hover:bg-indigo-800 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Book Free Demo
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Hyperlocal cross-link cloud — high SEO value, low UI noise */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <p className="font-montserrat-700 text-xs uppercase tracking-widest text-slate-500 text-center">
            Popular searches near you
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {PROGRAMS.flatMap((p) =>
              LOCATIONS.slice(0, 3).map((l) => ({
                label: `${p.title} in ${l.name}`,
                href: `/locations/${l.slug}`,
                key: `${p.slug}-${l.slug}`,
              })),
            )
              .slice(0, 18)
              .map((c) => (
                <Link
                  key={c.key}
                  href={c.href}
                  className="inline-flex items-center px-3 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-montserrat-500 text-slate-600 hover:border-indigo-700 hover:text-indigo-700 hover:bg-indigo-50/40 transition-all duration-300"
                >
                  {c.label}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
