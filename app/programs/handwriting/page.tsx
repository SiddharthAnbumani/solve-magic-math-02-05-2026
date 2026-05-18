import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import { HANDWRITING } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Handwriting Classes for Kids in Chennai',
  description:
    'Legible, beautiful handwriting through structured letter-formation training. Print, cursive and speed-writing. Ages 5–12.',
  alternates: { canonical: '/programs/handwriting' },
  openGraph: {
    title: 'Handwriting Classes for Kids in Chennai · Magic Maths',
    description: 'Legible, beautiful handwriting through structured letter-formation training. Print, cursive and speed-writing. Ages 5–12.',
    type: 'website',
    url: '/programs/handwriting',
    images: [{ url: '/OG.png', width: 1200, height: 630, alt: 'Magic Maths — Handwriting Classes for Kids in Chennai' }],
  },
}

export default function HandwritingPage() {
  return <ProgramPageTemplate program={HANDWRITING} />
}
