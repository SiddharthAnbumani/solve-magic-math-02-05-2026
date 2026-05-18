import type { Metadata } from 'next'
import AnimatedProgramsGrid from '@/components/AnimatedProgramsGrid'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Our Programs',
  description:
    "Abacus, Rubik\'s Cube, Vedic Maths, Tuition, Phonics, Tamil Reading and Handwriting — seven programs built to grow sharper minds in small batches.",
  alternates: { canonical: '/programs' },
  openGraph: {
    title: 'Our Programs · Magic Maths Chennai',
    description:
      "Seven programs. One sharper mind. Abacus, Rubik\'s Cube, Vedic Maths and more — taught in small batches across Chennai.",
    type: 'website',
    url: '/programs',
    images: [{ url: '/OG.png', width: 1200, height: 630, alt: 'Magic Maths Programs' }],
  },
}

export default function ProgramsPage() {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="bg-indigo-700 text-white min-h-100 sm:min-h-150 flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl lg:text-5xl font-monument-700 uppercase tracking-wider">
          Our Programs
        </h1>

        <p className="mt-4 font-montserrat-600 text-lg lg:text-2xl">
          Seven Programs,{' '}
          <span className="text-red-400">One Sharper Mind</span>
        </p>
      </section>

      {/* PROGRAMS GRID */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedProgramsGrid />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  )
}
