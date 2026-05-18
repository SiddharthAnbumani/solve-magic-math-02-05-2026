import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import { PHONICS } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Phonics Classes for Kids in Chennai',
  description:
    'Decode English with confidence using systematic letter-sound training. Reading-ready kids in 4 progressive levels. Ages 4–8.',
  alternates: { canonical: '/programs/phonics' },
  openGraph: {
    title: 'Phonics Classes for Kids in Chennai · Magic Maths',
    description: 'Decode English with confidence using systematic letter-sound training. Reading-ready kids in 4 progressive levels. Ages 4–8.',
    type: 'website',
    url: '/programs/phonics',
    images: [{ url: '/OG.png', width: 1200, height: 630, alt: 'Magic Maths — Phonics Classes for Kids in Chennai' }],
  },
}

export default function PhonicsPage() {
  return <ProgramPageTemplate program={PHONICS} />
}
