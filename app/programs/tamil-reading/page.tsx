import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import { TAMIL_READING } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Tamil Reading Classes — Solve Magic Maths',
  description:
    'Confident Tamil reading through letter recognition, words and short stories. From uyir and mei letters to fluent reading. Ages 5–12.',
}

export default function TamilReadingPage() {
  return <ProgramPageTemplate program={TAMIL_READING} />
}
