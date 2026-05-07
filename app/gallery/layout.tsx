import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery · Students of Magic Maths Chennai',
  description:
    'See our students in action — events, achievements, level certifications and everyday classroom moments at Magic Maths Chennai.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Gallery · Magic Maths Chennai',
    description:
      'Real students. Real progress. Glimpses from inside our classrooms across Chennai.',
    type: 'website',
    url: '/gallery',
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

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
