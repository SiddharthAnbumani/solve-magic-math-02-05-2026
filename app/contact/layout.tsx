import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Magic Maths · Book a Free Demo Class in Chennai',
  description:
    'Visit our centres in Chennai or call +91 7200757754 to book a free demo class. Abacus, Vedic Maths, Rubik\'s Cube, Phonics, Tamil Reading, Handwriting and Tuition for kids ages 4–16.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact · Magic Maths Chennai',
    description:
      'Book a free demo class. Talk to a trainer. Find your nearest centre across Anna Nagar, Velachery, Tambaram, Medavakkam, Chromepet and Sholinganallur.',
    type: 'website',
    url: '/contact',
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
