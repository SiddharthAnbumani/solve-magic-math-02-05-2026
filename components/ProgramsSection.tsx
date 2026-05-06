import SectionHeading from "@/components/SectionHeading"
import ProgramsHeroCarousel from "./ProgramHeroSection"


type Program = {
  title: string
  description: string
  image: string
  href?: string
}

type Props = {
  programs: Program[]
}

export default function ProgramsSection({ programs }: Props) {
  return (
    <section className="">

      {/* 🔥 HEADING (kept inside container) */}
      {/* <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Our Programs"
          title="Four ways to grow a sharper mind."
          subtitle="Pick one — or layer them. Each program is built to be fun first, rigorous second."
        />
      </div> */}


      {/* 🔥 FULL WIDTH CAROUSEL */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <ProgramsHeroCarousel programs={programs} />
      </div>

    </section>
  )
}