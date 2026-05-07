import JsonLd from './JsonLd'
import { faqSchema, type FaqItem } from '@/lib/jsonld'

type Props = {
  faqs: ReadonlyArray<FaqItem>
  eyebrow?: string
  title?: string
  subtitle?: string
  className?: string
}

/**
 * Accessible <details>/<summary> FAQ section with FAQPage JSON-LD.
 * Eligible for Google's "People also ask" / FAQ rich results.
 */
export default function FaqSection({
  faqs,
  eyebrow = 'FAQ',
  title = 'Parents often ask',
  subtitle,
  className = 'py-20 lg:py-28 bg-white',
}: Props) {
  if (faqs.length === 0) return null

  return (
    <section className={className}>
      <JsonLd data={faqSchema(faqs)} id="faq-jsonld" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block font-montserrat-700 text-xs uppercase tracking-widest text-black">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-monument-700 text-3xl sm:text-4xl tracking-tight text-indigo-800">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 font-montserrat-400 text-base text-slate-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.question}
              className="group rounded-2xl border border-slate-200 bg-white p-6 open:shadow-md transition-shadow [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="font-monument-700 text-base lg:text-lg text-slate-900">
                  {f.question}
                </span>
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-indigo-700 transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 font-montserrat-400 text-sm lg:text-base leading-relaxed text-slate-600">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
