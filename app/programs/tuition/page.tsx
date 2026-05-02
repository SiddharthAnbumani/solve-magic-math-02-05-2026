import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import { TUITION } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Tuition Classes — Solve Magic Maths',
  description:
    'Personalised academic support across CBSE, State Board and ICSE syllabi. Small batches, maximum attention. Classes 3–10.',
}

export default function TuitionPage() {
  return <ProgramPageTemplate program={TUITION} />
}
