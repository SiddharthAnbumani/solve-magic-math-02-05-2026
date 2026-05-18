import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import { VEDIC } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Vedic Maths Classes for Kids in Chennai',
  description:
    'Ancient shortcuts that turn long calculations into seconds. The 16 sutras, taught for school exams and olympiads. Ages 8–16.',
  alternates: { canonical: '/programs/vedic' },
  openGraph: {
    title: 'Vedic Maths Classes for Kids in Chennai · Magic Maths',
    description: 'Ancient shortcuts that turn long calculations into seconds. The 16 sutras, taught for school exams and olympiads. Ages 8–16.',
    type: 'website',
    url: '/programs/vedic',
    images: [{ url: '/OG.png', width: 1200, height: 630, alt: 'Magic Maths — Vedic Maths Classes for Kids in Chennai' }],
  },
}

export default function VedicPage() {
  return <ProgramPageTemplate program={VEDIC} />
}
