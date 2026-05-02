import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, type LucideIcon } from "lucide-react"

type Props = {
  icon: LucideIcon
  title: string
  description: string
  image: string
  href?: string
}

export default function ProgramCard({
  icon: Icon,
  title,
  description,
  image,
  href = "/programs",
}: Props) {
  return (
    <Link href={href} className="group relative block">
      
      {/* Bottom Layer */}
      <div className="absolute inset-0 rounded-2xl bg-slate-900/10 translate-x-3 translate-y-3 transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />

      {/* Image Layer */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden translate-x-1.5 translate-y-1.5 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2">
        <Image
          src='/_.webp'
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-xs group-hover:bg-black/30 transition" />
      </div>

      {/* Main Content Layer */}
      <div className="relative flex flex-col justify-end h-[320px] p-6 rounded-2xl border border-white/10 text-white">
        
        {/* Icon */}
        <div className="mb-4 w-10 h-10 rounded-lg bg-indigo-600 text-white backdrop-blur flex items-center justify-center">
          <Icon size={20} />
        </div>

        {/* Title */}
        <h3 className="font-monument-700 text-xl tracking-wider">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-white/80 font-montserrat-500">
          {description}
        </p>

        {/* CTA */}
   <button className="bg-indigo-700 font-monument text-sm flex items-center justify-center w-50 py-2 rounded-lg mt-4">
    Learn More
    <ArrowUpRight size={16} />
   </button>
      </div>
    </Link>
  )
}