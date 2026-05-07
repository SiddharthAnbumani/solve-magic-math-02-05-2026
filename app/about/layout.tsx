import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Magic Maths · Trusted Kids Learning Centre in Chennai',
  description:
    "Meet the team behind Magic Maths — Bharathi Ma'am and trainers who treat every child like their own. 8+ years building confident, focused kids in Chennai through Abacus, Vedic Maths, Rubik's Cube and personalised tuition.",
  alternates: { canonical: '/about' },
openGraph: {
  title: 'About Magic Maths · Chennai',
  description:
    "Trusted kids learning centre in Chennai. 8+ years building confident, focused students through Abacus, Vedic Maths, Rubik's Cube and personalised tuition.",
  type: 'website',
  url: '/about',

  images: [
    {
      url: '/OG.png',
      width: 1200,
      height: 630,
      alt: 'Magic Maths Learning Institute Chennai',
    },
  ],
},
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
