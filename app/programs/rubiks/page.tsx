import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import { RUBIKS } from '@/data/programs'

export const metadata: Metadata = {
  title: "Rubik's Cube Training — Solve Magic Maths",
  description:
    "Spatial reasoning and pattern thinking through the world's favourite brain toy. Beginner to speedcubing, ages 7–16.",
}

export default function RubiksPage() {
  return <ProgramPageTemplate program={RUBIKS} />
}
