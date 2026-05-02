import { BookOpen, Box, Calculator, GraduationCap, type LucideIcon } from 'lucide-react'

export type CurriculumStep = {
  title: string
  description: string
}

export type Program = {
  slug: string
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  overview: string
  benefits: string[]
  curriculum: CurriculumStep[]
  ageRange: string
  duration: string
  image: string
}

export const ABACUS: Program = {
  slug: 'abacus',
  icon: Calculator,
  title: 'Abacus',
  tagline: 'Mental math that beats the calculator.',
  description:
    'Faster mental arithmetic and sharper concentration through structured visual training.',
  overview:
    'Abacus is more than a calculation tool — it builds the mental imagery that lets kids visualise numbers and crunch them faster than any calculator. Eight progressive levels turn beads on a frame into pure brainpower.',
  benefits: [
    'Strong mental arithmetic without paper',
    'Sharper concentration and focus',
    'Improved memory and number visualisation',
    'Boosted confidence in maths and beyond',
  ],
  curriculum: [
    { title: 'Beginner (L1–L2)', description: 'Bead positions, single-digit operations, finger techniques.' },
    { title: 'Intermediate (L3–L4)', description: 'Multi-digit addition, subtraction, visualisation drills.' },
    { title: 'Advanced (L5–L6)', description: 'Mental abacus, multiplication, division, decimals.' },
    { title: 'Expert (L7–L8)', description: 'Speed rounds, square roots and competition prep.' },
  ],
  ageRange: 'Ages 6–14',
  duration: '8 levels · ~6 months each',
  image: '/programs/abacus.webp',
}

export const RUBIKS: Program = {
  slug: 'rubiks',
  icon: Box,
  title: "Rubik's Cube",
  tagline: 'Pattern thinking, made playful.',
  description:
    'Spatial reasoning, pattern recognition, and that proud "I solved it" moment.',
  overview:
    `The Rubik's Cube is the ultimate brain toy. Kids learn algorithms, develop spatial awareness, and experience the satisfaction of solving — a confidence boost that carries into everything else they do.`,
  benefits: [
    'Spatial and pattern-based thinking',
    'Memory through algorithm practice',
    'Patience and persistence',
    'A real, tangible "I did it" moment',
  ],
  curriculum: [
    { title: 'Beginner', description: 'Cube anatomy, notation, layer-by-layer method.' },
    { title: 'Intermediate', description: 'Faster algorithms, finger tricks, sub-2-minute solves.' },
    { title: 'Advanced', description: 'CFOP method, look-ahead, sub-30-second goals.' },
    { title: 'Competition', description: 'Speedcubing prep, blindfolded basics, event variations.' },
  ],
  ageRange: 'Ages 7–16',
  duration: '4 modules · ~3 months each',
  image: '/programs/rubiks.webp',
}

export const VEDIC: Program = {
  slug: 'vedic',
  icon: BookOpen,
  title: 'Vedic Maths',
  tagline: 'Ancient shortcuts, modern marks.',
  description:
    'Ancient shortcuts that turn long calculations into seconds — perfect for school exams.',
  overview:
    'Vedic Maths is a system of 16 sutras (formulas) from ancient India that simplify calculations dramatically. Kids who learn Vedic methods often solve in three steps what others do in ten — a real edge in school exams and competitive tests.',
  benefits: [
    'Solve school problems in seconds',
    'Cross-multiplication, squares and cubes shortcuts',
    'Confidence in olympiads and competitive exams',
    'Logical thinking through the 16 sutras',
  ],
  curriculum: [
    { title: 'Foundation', description: 'The 16 sutras, base methods, mental shortcuts.' },
    { title: 'Multiplication & Division', description: 'Two and three-digit shortcuts, vertically and crosswise.' },
    { title: 'Algebra & Squares', description: 'Squaring, cubing and square roots in seconds.' },
    { title: 'Exam Prep', description: 'Olympiad and competitive-exam pattern practice.' },
  ],
  ageRange: 'Ages 8–16',
  duration: '4 modules · ~2 months each',
  image: '/programs/vedic.webp',
}

export const TUITION: Program = {
  slug: 'tuition',
  icon: GraduationCap,
  title: 'Tuition',
  tagline: 'School support, personalised.',
  description:
    'Personalised academic support across CBSE, State Board and ICSE syllabi.',
  overview:
    `Personalised tuition tailored to your child's syllabus and learning pace. Small batches mean every child gets one-on-one time with the trainer — no question left unanswered, no doubt carried home.`,
  benefits: [
    'Subject-wise help across all major boards',
    'Homework and concept-clarity sessions',
    'Regular progress reports for parents',
    'Exam strategy and structured revision plans',
  ],
  curriculum: [
    { title: 'Diagnostic', description: 'Initial assessment of strengths, gaps and goals.' },
    { title: 'Concept Building', description: 'Topic-by-topic clarity with examples and worksheets.' },
    { title: 'Practice', description: 'Worksheets, mock tests and timed problem-solving.' },
    { title: 'Revision & Exams', description: 'Past-paper drills, quick revision and exam strategy.' },
  ],
  ageRange: 'Classes 3–10',
  duration: 'Year-round · 3 sessions per week',
  image: '/programs/tuition.webp',
}

export const PROGRAMS: Program[] = [ABACUS, RUBIKS, VEDIC, TUITION]
