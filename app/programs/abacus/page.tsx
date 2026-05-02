import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import { ABACUS } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Abacus Classes — Solve Magic Maths',
  description:
    'Mental math that beats the calculator. Structured visual abacus training for kids ages 6–14, in small batches.',
}

export default function AbacusPage() {
  return <ProgramPageTemplate program={ABACUS} />
}
