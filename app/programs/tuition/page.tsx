import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import { TUITION } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Tuition Classes in Chennai — CBSE, State Board, ICSE',
  description:
    'Personalised academic support across CBSE, State Board and ICSE syllabi. Small batches, maximum attention. Classes 3–10.',
  alternates: { canonical: '/programs/tuition' },
  openGraph: {
    title: 'Tuition Classes in Chennai — CBSE, State Board, ICSE · Magic Maths',
    description: 'Personalised academic support across CBSE, State Board and ICSE syllabi. Small batches, maximum attention. Classes 3–10.',
    type: 'website',
    url: '/programs/tuition',
    images: [{ url: '/OG.png', width: 1200, height: 630, alt: 'Magic Maths — Tuition Classes in Chennai — CBSE, State Board, ICSE' }],
  },
}

export default function TuitionPage() {
  return <ProgramPageTemplate program={TUITION} />
}
