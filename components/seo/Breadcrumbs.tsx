import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import JsonLd from './JsonLd'
import { breadcrumbSchema } from '@/lib/jsonld'

export type Crumb = { name: string; href: string }

type Props = {
  items: ReadonlyArray<Crumb>
  className?: string
}

/**
 * Visible breadcrumb trail + matching BreadcrumbList JSON-LD for SERPs.
 * Always include the Home crumb yourself — this component renders what you give it.
 */
export default function Breadcrumbs({ items, className = '' }: Props) {
  if (items.length === 0) return null

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(items.map((c) => ({ name: c.name, url: c.href })))}
        id="breadcrumb-jsonld"
      />
      <nav
        aria-label="Breadcrumb"
        className={`text-sm font-montserrat-500 ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-slate-500">
          {items.map((c, i) => {
            const last = i === items.length - 1
            return (
              <li key={`${c.href}-${i}`} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight
                    size={14}
                    className="text-slate-400"
                    aria-hidden
                  />
                )}
                {last ? (
                  <span
                    aria-current="page"
                    className="font-montserrat-600 text-slate-900"
                  >
                    {c.name}
                  </span>
                ) : (
                  <Link
                    href={c.href}
                    className="inline-flex items-center gap-1 hover:text-indigo-700 transition-colors"
                  >
                    {i === 0 && c.href === '/' && <Home size={12} aria-hidden />}
                    {c.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
