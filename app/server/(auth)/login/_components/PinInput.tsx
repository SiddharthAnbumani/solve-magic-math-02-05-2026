'use client'

import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const LEN = 6

export default function PinInput() {
  const [digits, setDigits] = useState<string[]>(Array(LEN).fill(''))
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [shake, setShake] = useState(false)

  const inputs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()

  useEffect(() => {
    inputs.current[0]?.focus()
  }, [])

  const submit = async (pin: string) => {
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pin }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))

        setError(data.error || 'Invalid PIN')
        setShake(true)
        setDigits(Array(LEN).fill(''))

        setTimeout(() => {
          setShake(false)
          inputs.current[0]?.focus()
        }, 500)
      } else {
        router.push('/server')
        router.refresh()
      }
    } catch {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (i: number, raw: string) => {
    const digit = raw.replace(/\D/g, '').slice(-1)

    setError('')

    const next = [...digits]
    next[i] = digit

    setDigits(next)

    if (digit && i < LEN - 1) {
      inputs.current[i + 1]?.focus()
    }

    if (next.every((d) => d !== '')) {
      submit(next.join(''))
    }
  }

  const handleKeyDown = (
    i: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Backspace') {
      if (digits[i]) {
        const next = [...digits]
        next[i] = ''
        setDigits(next)
      } else if (i > 0) {
        const next = [...digits]
        next[i - 1] = ''
        setDigits(next)

        inputs.current[i - 1]?.focus()
      }
    }

    if (e.key === 'ArrowLeft' && i > 0) {
      inputs.current[i - 1]?.focus()
    }

    if (e.key === 'ArrowRight' && i < LEN - 1) {
      inputs.current[i + 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()

    const pasted = e.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, LEN)

    if (!pasted) return

    const next = Array(LEN).fill('')

    pasted.split('').forEach((d, idx) => {
      next[idx] = d
    })

    setDigits(next)

    const focusIdx = Math.min(pasted.length, LEN - 1)

    inputs.current[focusIdx]?.focus()

    if (pasted.length === LEN) {
      submit(pasted)
    }
  }

  return (
    <div className="flex flex-col items-center gap-5">
      {/* PIN BOXES */}
      <div
        className={`flex gap-2 sm:gap-3 ${
          shake ? 'animate-shake' : ''
        }`}
        onPaste={handlePaste}
      >
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => {
              inputs.current[i] = el
            }}
            type="password"
            inputMode="numeric"
            maxLength={1}
            value={d}
            disabled={loading}
            onFocus={(e) => e.target.select()}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className={[
              'w-14 h-14 sm:w-16 sm:h-16',
              'rounded-md border',
              'text-center text-xl',
              'font-montserrat-700 tracking-[0.08em]',
              'outline-none transition-all duration-150',
              'select-none',

              d
                ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:border-indigo-500 dark:bg-indigo-950 dark:text-indigo-300'
                : 'border-gray-300 bg-white text-gray-900 dark:border-gray-700 dark:bg-black dark:text-white',

              error
                ? '!border-red-400 !bg-red-50 dark:!bg-red-950'
                : 'focus:border-indigo-500',

              loading ? 'cursor-not-allowed opacity-50' : '',
            ].join(' ')}
          />
        ))}
      </div>

      {/* STATUS */}
      <div className="flex h-5 items-center justify-center">
        {loading ? (
          <span className="flex items-center gap-2 font-montserrat-500 text-xs text-gray-400">
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-indigo-400 border-t-transparent" />
            Verifying
          </span>
        ) : error ? (
          <p className="font-montserrat-600 text-xs text-red-500">
            {error}
          </p>
        ) : null}
      </div>
    </div>
  )
}