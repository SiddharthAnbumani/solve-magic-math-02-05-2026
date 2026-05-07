import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing · Magic Maths Chennai · ₹1,000 per Program',
  description:
    "Simple, transparent pricing. ₹1,000 per month per program — Abacus, Vedic Maths, Rubik's Cube, Phonics, Tamil Reading, Handwriting. ₹1,500 one-time registration covers T-shirt, bag and Level 1 certification. Tuition priced by grade and subject.",
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing · Magic Maths Chennai',
    description:
      'Honest, flat monthly pricing — ₹1,000 per program. ₹1,500 one-time registration. No hidden fees.',
    type: 'website',
    url: '/pricing',
     images: [
    {
      url: '/OG.png',
      width: 1200,
      height: 630,
      alt: 'Magic Maths Learning Institute Chennai',
    },
  ],
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
