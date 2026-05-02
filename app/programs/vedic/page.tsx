import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import { VEDIC } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Vedic Maths Classes — Solve Magic Maths',
  description:
    'Ancient shortcuts that turn long calculations into seconds. The 16 sutras, taught for school exams and olympiads. Ages 8–16.',
}

export default function VedicPage() {
  return <ProgramPageTemplate program={VEDIC} />
}
