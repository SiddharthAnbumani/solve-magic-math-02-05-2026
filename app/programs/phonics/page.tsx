import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import { PHONICS } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Phonics Classes — Solve Magic Maths',
  description:
    'Decode English with confidence using systematic letter-sound training. Reading-ready kids in 4 progressive levels. Ages 4–8.',
}

export default function PhonicsPage() {
  return <ProgramPageTemplate program={PHONICS} />
}
