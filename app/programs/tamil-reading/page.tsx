import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import { TAMIL_READING } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Tamil Reading Classes for Kids in Chennai',
  description:
    'Confident Tamil reading through letter recognition, words and short stories. From uyir and mei letters to fluent reading. Ages 5–12.',
  alternates: { canonical: '/programs/tamil-reading' },
  openGraph: {
    title: 'Tamil Reading Classes for Kids in Chennai · Magic Maths',
    description: 'Confident Tamil reading through letter recognition, words and short stories. From uyir and mei letters to fluent reading. Ages 5–12.',
    type: 'website',
    url: '/programs/tamil-reading',
    images: [{ url: '/OG.png', width: 1200, height: 630, alt: 'Magic Maths — Tamil Reading Classes for Kids in Chennai' }],
  },
}

export default function TamilReadingPage() {
  return <ProgramPageTemplate program={TAMIL_READING} />
}
