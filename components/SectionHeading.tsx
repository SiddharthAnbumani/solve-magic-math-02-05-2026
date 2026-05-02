type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: Props) {
  const isCenter = align === 'center'
  return (
    <div className={`max-w-2xl ${isCenter ? 'text-center mx-auto' : 'text-left'}`}>
      {eyebrow && (
        <span className="inline-block font-montserrat-700 text-xs uppercase tracking-widest text-black">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-indigo-800">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-montserrat-400 text-base lg:text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  )
}
