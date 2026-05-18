import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import { ABACUS } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Abacus Classes for Kids in Chennai',
  description:
    'Mental math that beats the calculator. Structured visual abacus training for kids ages 6–14, in small batches across Chennai.',
  alternates: { canonical: '/programs/abacus' },
  openGraph: {
    title: 'Abacus Classes for Kids in Chennai · Magic Maths',
    description: 'Mental math that beats the calculator. Structured visual abacus training for kids ages 6–14, in small batches across Chennai.',
    type: 'website',
    url: '/programs/abacus',
    images: [{ url: '/OG.png', width: 1200, height: 630, alt: 'Magic Maths — Abacus Classes for Kids in Chennai' }],
  },
}

export default function AbacusPage() {
  return <ProgramPageTemplate program={ABACUS} />
}
