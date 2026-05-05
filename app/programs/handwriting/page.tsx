import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import { HANDWRITING } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Handwriting Classes — Solve Magic Maths',
  description:
    'Legible, beautiful handwriting through structured letter-formation training. Print, cursive and speed-writing. Ages 5–12.',
}

export default function HandwritingPage() {
  return <ProgramPageTemplate program={HANDWRITING} />
}
