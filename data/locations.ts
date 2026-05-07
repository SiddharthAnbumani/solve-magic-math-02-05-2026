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
    slug: 'anna-nagar',
    name: 'Anna Nagar',
    city: 'Chennai',
    pincode: '600040',
    geo: { latitude: 13.0843, longitude: 80.2105 },
    intro:
      'Magic Maths in Anna Nagar is the trusted neighbourhood centre for parents who want their kids to genuinely enjoy maths and reading. Our small-batch model — never more than eight students per session — means every child in our Anna Nagar branch gets attention by name, not by roll number.',
    why:
      'Anna Nagar parents value structured learning that respects their child\'s school workload. Our after-school slots are deliberately scheduled around CBSE, State Board and ICSE timetables, with weekend batches for kids carrying heavier schedules.',
    landmarks: [
      'Anna Nagar Tower Park',
      'Anna Nagar Roundtana',
      'VR Mall',
      'Spencer Plaza Anna Nagar',
      'Padi Flyover',
    ],
    nearbyAreas: [
      'Mogappair',
      'Kilpauk',
      'Aminjikarai',
      'Shenoy Nagar',
      'Thirumangalam',
      'Padi',
    ],
    hero: { image: '/_.webp', alt: 'Magic Maths Anna Nagar centre' },
  },
  {
    slug: 'velachery',
    name: 'Velachery',
    city: 'Chennai',
    pincode: '600042',
    geo: { latitude: 12.9805, longitude: 80.2201 },
    intro:
      'Velachery is one of Chennai\'s busiest family neighbourhoods — and one of the toughest for parents trying to find a learning centre that actually fits the rhythm of school, traffic and homework. Magic Maths Velachery was built around that reality.',
    why:
      'With kids returning from schools across Velachery, Madipakkam and Pallikaranai, we run staggered evening batches and Saturday-morning intensives so no parent has to choose between traffic and progress.',
    landmarks: [
      'Phoenix Marketcity',
      'Velachery MRTS Station',
      'Vijaya Nagar Bus Stand',
      'Grand Square Mall',
    ],
    nearbyAreas: [
      'Madipakkam',
      'Pallikaranai',
      'Guindy',
      'Adambakkam',
      'Taramani',
      'Nanganallur',
    ],
    hero: { image: '/_.webp', alt: 'Magic Maths Velachery centre' },
  },
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
      'Sholinganallur',
      'Kovilambakkam',
      'Madipakkam',
      'Tambaram',
      'Keelkattalai',
    ],
    hero: { image: '/_.webp', alt: 'Magic Maths Medavakkam centre' },
  },
  {
    slug: 'chromepet',
    name: 'Chromepet',
    city: 'Chennai',
    pincode: '600044',
    geo: { latitude: 12.9516, longitude: 80.1462 },
    intro:
      'Chromepet families have a serious appetite for proper academics — and Magic Maths Chromepet is built for kids who want to be sharp, not just busy. Programs run with measurable level progression and honest progress reports for parents.',
    why:
      'Around MIT and the GST Road belt, parents want trainers who can actually answer: "Will this help in 8th-standard maths?". Our Chromepet sessions blend Vedic shortcuts directly into school-syllabus practice problems.',
    landmarks: [
      'MIT Chennai',
      'Chromepet Railway Station',
      'GST Road',
      'Hindu Mission Hospital',
    ],
    nearbyAreas: [
      'Pallavaram',
      'Tambaram',
      'Hasthinapuram',
      'Nanganallur',
      'Anakaputhur',
      'Pammal',
    ],
    hero: { image: '/_.webp', alt: 'Magic Maths Chromepet centre' },
  },
  {
    slug: 'sholinganallur',
    name: 'Sholinganallur',
    city: 'Chennai',
    pincode: '600119',
    geo: { latitude: 12.9010, longitude: 80.2279 },
    intro:
      'OMR families work long days — and most kids in Sholinganallur, Karapakkam and Navalur are home long before their parents are. Magic Maths Sholinganallur is designed for that reality: structured evening batches, small group sizes, and trainers parents can actually trust.',
    why:
      'Sholinganallur parents tend to compare us to high-end IT-corridor activity centres. We win on focus — kids leave with a real, measurable skill, not just a participation certificate.',
    landmarks: [
      'Sholinganallur Junction',
      'AGS Cinemas',
      'Navalur Toll Plaza',
      'OMR (Old Mahabalipuram Road)',
    ],
    nearbyAreas: [
      'Karapakkam',
      'Navalur',
      'Siruseri',
      'Thoraipakkam',
      'Perumbakkam',
      'Pallikaranai',
    ],
    hero: { image: '/_.webp', alt: 'Magic Maths Sholinganallur centre' },
  },
]

export const getLocation = (slug: string) =>
  LOCATIONS.find((l) => l.slug === slug)
