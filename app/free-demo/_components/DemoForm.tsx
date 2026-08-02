'use client'

import { useState } from 'react'

const PROGRAMS = [
  'Abacus',
  'Vedic Maths',
  "Rubik's Cube",
  'Phonics',
  'Tamil Reading',
  'Handwriting',
  'Tuition',
  'Not Sure Yet',
]

const CENTRES = ['Santhosapuram']

type Field = {
  parentName: string
  phone: string
  email: string
  program: string
  centre: string
  message: string
}

const EMPTY: Field = {
  parentName: '',
  phone: '',
  email: '',
  program: '',
  centre: '',
  message: '',
}

const inputCls =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition bg-white'

export default function DemoForm() {
  const [form, setForm] = useState<Field>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set =
    (k: keyof Field) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed')

      {/* TODO: fire gtag conversion event on form submit — AW-18013299497 */}
      if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).gtag) {
        const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag
        gtag('event', 'conversion', { send_to: 'AW-18155850775' })
      }

      setStatus('success')
      setForm(EMPTY)
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8 px-4">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-7 h-7 text-green-600">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-gray-900 mb-2">You&apos;re booked in!</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Bharathi Ma&apos;am will call you within 24 hours to confirm your demo.
        </p>
        <a
          href="https://wa.me/917200757754?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20demo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-green-600 transition-colors"
        >
          Chat on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
          {errorMsg}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">
            Parent Name <span className="text-indigo-600">*</span>
          </label>
          <input
            type="text"
            required
            value={form.parentName}
            onChange={set('parentName')}
            placeholder="Your name"
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">
            Phone <span className="text-indigo-600">*</span>
          </label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={set('phone')}
            placeholder="+91 98765 43210"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={set('email')}
          placeholder="your@email.com"
          className={inputCls}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Program</label>
          <select value={form.program} onChange={set('program')} className={inputCls}>
            <option value="">Select program</option>
            {PROGRAMS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Preferred Centre</label>
          <select value={form.centre} onChange={set('centre')} className={inputCls}>
            <option value="">Select centre</option>
            {CENTRES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">
          Message{' '}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          rows={3}
          value={form.message}
          onChange={set('message')}
          placeholder="Any questions or preferred timings?"
          className={inputCls + ' resize-none'}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-indigo-700 hover:bg-indigo-800 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-base transition-colors flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Booking&hellip;
          </>
        ) : (
          <>Book My Free Demo &rarr;</>
        )}
      </button>

      <div className="text-center space-y-2 pt-1">
        <p className="text-xs text-gray-500">
          Or call us directly:{' '}
          <a href="tel:+917200757754" className="font-semibold text-gray-700 hover:underline">
            +91 72007 57754
          </a>
        </p>
        <a
          href="https://wa.me/917200757754?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20demo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
        >
          Chat on WhatsApp
        </a>
      </div>
    </form>
  )
}
