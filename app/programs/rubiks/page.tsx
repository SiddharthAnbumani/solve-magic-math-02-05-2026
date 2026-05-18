import type { Metadata } from 'next'
import ProgramPageTemplate from '@/components/ProgramPageTemplate'
import type { CubeModule } from '@/components/CubeModuleCard'
import { RUBIKS } from '@/data/programs'

export const metadata: Metadata = {
  title: "Rubik's Cube Classes for Kids in Chennai",
  description:
    "Spatial reasoning and pattern thinking through the world's favourite brain toy. Beginner to speedcubing, ages 7–16.",
  alternates: { canonical: '/programs/rubiks' },
  openGraph: {
    title: "Rubik's Cube Classes for Kids in Chennai · Magic Maths",
    description: "Spatial reasoning and pattern thinking through the world's favourite brain toy. Beginner to speedcubing, ages 7–16.",
    type: 'website',
    url: '/programs/rubiks',
    images: [{ url: '/OG.png', width: 1200, height: 630, alt: "Magic Maths — Rubik's Cube Classes" }],
  },
}

const RUBIKS_MODULES: CubeModule[] = [
  {
    title: "2 X 2 Rubik's Cube",
    module: 'Module 1',
    duration: '4 Weeks',
    image: '/cube/2x2.webp',
    level: 'Beginner',
    description: 'The friendly entry — fewer pieces, same satisfying solve.',
  },
  {
    title: "3 X 3 Rubik's Cube",
    module: 'Module 2',
    duration: '4 Weeks',
    image: '/cube/3x3.jpeg',
    level: 'Beginner',
    description: "The classic. Every speedcuber's foundation.",
  },
  {
    title: '2 X 2 Mirror Cube',
    module: 'Module 3',
    duration: '6 Weeks',
    image: '/cube/image.png',
    level: 'Intermediate',
    description: 'Same logic, no colours — solve by shape and size.',
  },
  {
    title: "3 X 3 Mirror Cube",
    module: 'Module 4',
    duration: '6 Weeks',
    image: '/cube/3x3m.webp',
    level: 'Intermediate',
    description: 'All silver, all challenge — depth perception meets pattern.',
  },
  {
    title: '5 X 5 Mirror Cube',
    module: 'Module 5',
    duration: '6 Weeks',
    image: '/cube/5x5_rubiks.jpeg',
    level: 'Intermediate',
    description: 'Solve the first two layers in one elegant move.',
  },
  {
    title: 'Pyramix',
    module: 'Module 6',
    duration: '8 Weeks',
    image: '/cube/pyramix_rubiks.webp',
    level: 'Advanced',
    description: 'Show-off algorithms, beautiful patterns, parlour tricks.',
  },
  {
    title: 'Megamix',
    module: 'Module 7',
    duration: '4 Weeks',
    image: '/cube/megamix_rubiks.webp',
    level: 'Advanced',
    description: 'Half the hands, twice the focus.',
  },
  {
    title: 'Skewb',
    module: 'Module 8',
    duration: '8 Weeks',
    image: '/cube/skewb.webp',
    level: 'Advanced',
    description: 'Timer drills, mental rehearsal, podium-ready.',
  },
]

export default function RubiksPage() {
  return (
    <ProgramPageTemplate
      program={RUBIKS}
      modules={RUBIKS_MODULES}
      modulesEyebrow="Types of Cubes"
      modulesTitle="Types of Cubes"
      modulesSubtitle="From the entry-level 2×2 to advanced patterns — every cube your child will master, in order."
    />
  )
}
