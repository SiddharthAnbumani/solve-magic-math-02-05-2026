/**
 * Local SEO landing-page data.
 * Each entry powers /locations/[slug] with unique copy + landmarks
 * to avoid thin/duplicate content. Add new branches here — the route,
 * sitemap, and structured data pick them up automatically.
 */

export type Location = {
  slug: string
  /** Display name — "Anna Nagar" */
  name: string
  /** "Chennai" — kept generic in case you expand to other cities later */
  city: string
  pincode: string
  /** Approximate centroid for LocalBusiness JSON-LD geo. Replace with real branch coords. */
  geo: { latitude: number; longitude: number }
  /** 1–2 paragraphs that read like a real human wrote them (not template-stamped). */
  intro: string
  /** Why this specific area connects with the brand — local angle. */
  why: string
  /** Recognisable landmarks/spots — used in copy + GBP service-area description. */
  landmarks: ReadonlyArray<string>
  /** Adjacent localities your branch realistically serves. */
  nearbyAreas: ReadonlyArray<string>
  /** Programs to feature first on this page. Empty = show all. */
  featuredPrograms?: ReadonlyArray<string>
  hero: { image: string; alt: string }
}

export const LOCATIONS: ReadonlyArray<Location> = [
  {
    slug: 'tambaram',
    name: 'Tambaram',
    city: 'Chennai',
    pincode: '600045',
    geo: { latitude: 12.9249, longitude: 80.1000 },
    intro:
      'Tambaram has long been one of Chennai\'s most education-focused neighbourhoods — and that history sets a high bar. Magic Maths Tambaram is built for parents who already know what good teaching looks like and want a centre that quietly delivers it.',
    why:
      'We see strong demand from East and West Tambaram families for Vedic Maths and Abacus combined as a school-support stack. Our Tambaram batches are intentionally kept small so the trainer can map every child\'s textbook back to the technique.',
    landmarks: [
      'Tambaram Sanatorium Railway Station',
      'Tambaram Bus Terminus',
      'Camp Road Junction',
      'MEPZ',
    ],
    nearbyAreas: [
      'Chromepet',
      'Pallavaram',
      'Selaiyur',
      'Hasthinapuram',
      'Mudichur',
      'Perungalathur',
    ],
    hero: { image: '/_.webp', alt: 'Magic Maths Tambaram centre' },
  },
  {
    slug: 'medavakkam',
    name: 'Medavakkam',
    city: 'Chennai',
    pincode: '600100',
    geo: { latitude: 12.9181, longitude: 80.1928 },
    intro:
      'Medavakkam has grown faster than its evenings — packed apartments, but limited weekday options for kids beyond school. Magic Maths Medavakkam fills that gap with serious, structured programs the moment the school bus drops.',
    why:
      'Most of our Medavakkam parents want one thing: their child confident with mental math before exam season. We pace Abacus and Vedic Maths batches so progress is visible at parent-teacher meetings, not just our internal level tests.',
    landmarks: [
      'Medavakkam Junction',
      'Velachery–Tambaram Main Road',
      'Madipakkam Lake',
    ],
    nearbyAreas: [
      'Pallikaranai',
      'Kovilambakkam',
      'Madipakkam',
      'Tambaram',
      'Sembakkam',
      'Keelkattalai',
    ],
    hero: { image: '/_.webp', alt: 'Magic Maths Medavakkam centre' },
  },
  {
    slug: 'santhosapuram',
    name: 'Santhosapuram',
    city: 'Chennai',
    pincode: '600073',
    geo: { latitude: 12.9269, longitude: 80.1346 },
    intro:
      'Magic Maths Santhosapuram brings structured brain-development classes right into the heart of this growing neighbourhood. Small batches of eight students mean every child in the room gets individual attention — never lost in a crowd.',
    why:
      'Santhosapuram families value convenience alongside quality. Our evening batches fit cleanly around school hours, homework time and family dinners — no long commute, no compromise on the programme.',
    landmarks: [
      'Santhosapuram Bus Stop',
      'Rajakilpakkam Main Road',
      'Sembakkam Lake',
    ],
    nearbyAreas: [
      'Rajakilpakkam',
      'Sembakkam',
      'Tambaram',
      'Medavakkam',
      'Selaiyur',
    ],
    hero: { image: '/_.webp', alt: 'Magic Maths Santhosapuram centre' },
  },
  {
    slug: 'sembakkam',
    name: 'Sembakkam',
    city: 'Chennai',
    pincode: '600073',
    geo: { latitude: 12.9212, longitude: 80.1295 },
    intro:
      'Sembakkam is a quiet, residential pocket where parents are serious about giving their children every academic advantage. Magic Maths Sembakkam channels that seriousness into proven programmes — Abacus, Vedic Maths, Tuition and more — all taught in batches small enough for real progress.',
    why:
      'Parents in Sembakkam often ask us one question: "Will my child actually improve?" Our answer is the same every time — measurable level progression, honest feedback reports, and trainers who track each child by name.',
    landmarks: [
      'Sembakkam Lake',
      'Sembakkam Bus Stop',
      'Rajakilpakkam–Tambaram Road',
    ],
    nearbyAreas: [
      'Santhosapuram',
      'Rajakilpakkam',
      'Medavakkam',
      'Tambaram',
      'Selaiyur',
    ],
    hero: { image: '/_.webp', alt: 'Magic Maths Sembakkam centre' },
  },
  {
    slug: 'rajakilpakkam',
    name: 'Rajakilpakkam',
    city: 'Chennai',
    pincode: '600073',
    geo: { latitude: 12.9281, longitude: 80.1396 },
    intro:
      'Rajakilpakkam is home to our flagship centre — Chandra Villa on Ponniyamman Kovil Street. Everything about Magic Maths was built and tested here first: the small-batch model, the level-based progression, the parent-feedback cycle. What works for Rajakilpakkam families, works.',
    why:
      'As our primary centre, Rajakilpakkam gets the earliest time slots, the most experienced trainers, and the widest range of programmes running simultaneously. Parents looking for the full Magic Maths experience start here.',
    landmarks: [
      'Ponniyamman Kovil Street',
      'Rajakilpakkam Bus Stop',
      'Chandra Villa',
      'Sembakkam Lake Road',
    ],
    nearbyAreas: [
      'Santhosapuram',
      'Sembakkam',
      'Medavakkam',
      'Tambaram',
      'Selaiyur',
    ],
    hero: { image: '/_.webp', alt: 'Magic Maths Rajakilpakkam flagship centre' },
  },
]

export const getLocation = (slug: string) =>
  LOCATIONS.find((l) => l.slug === slug)
