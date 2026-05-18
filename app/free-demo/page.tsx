import type { Metadata } from 'next'
import Image from 'next/image'
import DemoForm from './_components/DemoForm'

export const metadata: Metadata = {
  title: 'Book a Free Demo Class — Magic Maths Chennai | Abacus & Vedic Maths',
  description:
    "Book a free demo class at Magic Maths in Chennai. Abacus, Vedic Maths, Rubik's Cube, Phonics and Tuition for kids ages 5-16. Small batches, expert trainers.",
  robots: { index: false, follow: false },
}

const PROGRAMS = [
  { name: 'Abacus' },
  { name: 'Vedic Maths' },
  { name: "Rubik's Cube" },
  { name: 'Phonics' },
  { name: 'Tamil Reading' },
  { name: 'Handwriting' },
  { name: 'Tuition' },
]

const TESTIMONIALS = [
  {
    name: 'Santhosh Shivan',
    text: "My son is currently learning Abacus Level 2 at Magic Maths Learning and Educational Institute. Bharathi Ma'am teaches very clearly and effectively, ensuring every child understands the concepts well. She treats each student with equal care and attention, just like her own. I am very satisfied with her teaching approach, and my child attends the classes with great interest and enthusiasm.",
  },
  {
    name: 'Hema Latha',
    text: "The children are learning very well under Ma'am's excellent guidance. They are highly interested in attending the classes and have also successfully participated in abacus competitions. We sincerely thank Bharathi Ma'am for her dedication and support.",
  },
  {
    name: 'Mrs. Sathiya Kalai',
    text: "Bharathi Ma'am is exceptionally kind and patient with children. She has been truly inspiring, helping kids develop a genuine interest in mathematics through abacus learning. With her guidance, children not only improve their calculation speed but also strengthen memory, focus, and overall mathematical confidence.",
  },
]

const TRUST_PILLARS = [
  { title: 'Certified, Child-Friendly Trainers', desc: 'Every trainer is certified and trained to engage young learners.' },
  { title: 'Max 8 Students Per Batch', desc: 'Small groups mean your child always gets personal attention.' },
  { title: 'Progress Tracking & Parent Updates', desc: 'Regular assessments and parent reports keep you in the loop.' },
  { title: '8 Years of Proven Results', desc: 'Hundreds of students across Chennai have grown with us.' },
]

export default function FreeDemoPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* 1. TRUST STRIP */}
      <div className="bg-indigo-700 text-white text-xs font-semibold px-4 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-center sm:text-left">
        <span>4.9 Rating &middot; 200+ Happy Parents across Chennai</span>
        <a href="tel:+917200757754" className="hover:underline whitespace-nowrap">
          +91 72007 57754
        </a>
      </div>

      {/* 2. HERO */}
      <section className="bg-white px-5 pt-12 pb-16 sm:px-10 lg:px-16">


        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left copy */}
<div className="flex flex-col items-center text-center max-w-4xl mx-auto py-25 sm:py-0">

  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-gray-900 mb-5">
    Give Your Child a
    <br />
    <span className="text-indigo-600">
      Head Start That Lasts.
    </span>
  </h1>

  <p className="text-gray-600 text-base sm:text-lg leading-[1.45] max-w-2xl mb-8">
    Abacus &middot; Vedic Maths &middot; Rubik&apos;s Cube &middot; Phonics
    &middot; Tuition
    <br className="hidden sm:block" />
    <span className="font-semibold text-gray-800">
      {' '}
      Small batches, certified trainers, and real measurable results.
    </span>
    <br className="hidden sm:block" />
    Centres across Chennai.
  </p>

  <div className="flex flex-col sm:flex-row items-center gap-3 mb-7 w-full sm:w-auto">
    <a
      href="#form"
      className="inline-flex items-center justify-center bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-8 py-3.5 rounded-xl text-base transition-all duration-200 shadow-lg shadow-indigo-200/60 hover:scale-[1.02] w-full sm:w-auto"
    >
      Book Free Demo
      <span className="ml-2">→</span>
    </a>

    <a
      href="tel:+917200757754"
      className="inline-flex items-center justify-center bg-red-800 hover:bg-red-900 text-white font-bold px-8 py-3.5 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] w-full sm:w-auto"
    >
      Call Now
    </a>
  </div>

  <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold text-gray-500">
    <span>No Commitment</span>
    <span className="hidden sm:block text-gray-300">•</span>

    <span>Free 1-on-1 Demo</span>
    <span className="hidden sm:block text-gray-300">•</span>

    <span>Visible Results in Weeks</span>
  </div>

</div>

          {/* Right — sticky form card */}
          <div className="mt-12 lg:mt-0 lg:sticky lg:top-8">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 mb-1">Book Your Free Demo Class</h2>
              <p className="text-sm text-gray-500 mb-5">Takes less than 30 seconds. No commitment.</p>
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF BAR */}
      <section className="border-y border-gray-100 bg-indigo-50 py-5 px-5">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center divide-x divide-gray-200">
          {['8 Years in Chennai', '5 Centres', '200+ Students', 'Certified Trainers'].map((item) => (
            <span key={item} className="px-6 py-1 text-sm font-bold text-gray-700">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* 4. WHAT YOUR CHILD GAINS */}
      <section className="bg-white py-16 px-5 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
            What Your Child Walks Away With
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Faster Mental Maths',
                desc: 'Beat the calculator and impress the class',
              },
              {
                title: 'Sharper Focus',
                desc: 'Concentration drills that show results within weeks',
              },
              {
                title: 'Real Confidence',
                desc: 'Level-up assessments and stage performances build self-belief',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100"
              >
                <h3 className="font-extrabold text-gray-900 text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROGRAMS GRID */}


      {/* 6. TESTIMONIALS */}
      <section className="bg-white py-16 px-5 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
            What Chennai Parents Say
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-indigo-700 border border-indigo-100 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="text-yellow-400 text-sm font-bold tracking-wider">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="text-sm text-white leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-xs font-bold text-white">&mdash; {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            <section className="bg-indigo-50 py-16 px-5 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
            One Institute. Seven Programs.
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm">Ages 5&ndash;16 &middot; Beginner to Advanced</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {PROGRAMS.map((p) => (
              <div
                key={p.name}
                className="bg-white border border-gray-200 rounded-2xl px-4 py-5 text-center hover:border-indigo-400 hover:shadow-md transition-all"
              >
                <p className="font-bold text-gray-900 text-sm">{p.name}</p>
                <p className="text-xs text-gray-400 mt-1">Ages 5&ndash;16</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="bg-indigo-50 py-16 px-5 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
            Why Chennai Parents Trust Magic Maths
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm"
              >
                <h3 className="font-extrabold text-gray-900 text-sm mb-2">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SCARCITY STRIP */}
      <div className="bg-indigo-700 text-white text-center py-4 px-5">
        <p className="font-bold text-sm sm:text-base">
          Limited seats per batch &mdash; only 8 students per group. New batch starting soon.
        </p>
      </div>

      {/* 9. FORM SECTION */}
      <section id="form" className="bg-white py-16 px-5 sm:px-10 lg:px-16 scroll-mt-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
            Book Your Free Demo Class
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            Takes less than 30 seconds. No commitment.
          </p>
          <div>
            <DemoForm />
          </div>
        </div>
      </section>


    </div>
  )
}
