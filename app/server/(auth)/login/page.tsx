import Image from 'next/image'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ShieldCheck } from 'lucide-react'

import { verifyToken, COOKIE_NAME } from '@/lib/auth'
import PinInput from './_components/PinInput'

export const metadata = {
  title: 'Staff Portal',
  robots: { index: false, follow: false },
}

export default async function LoginPage() {
  const store = await cookies()
  const username = verifyToken(store.get(COOKIE_NAME)?.value)

  if (username) redirect('/server')

  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* Soft Ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10rem] left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-indigo-500/[0.05] blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <div className="w-full max-w-md text-center">
          {/* Logo */}

          {/* Security Icon */}
          <div className="mt-10 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
              <ShieldCheck
                className="h-10 w-10 text-indigo-600 dark:text-indigo-400"
                strokeWidth={1.8}
              />
            </div>
          </div>

          {/* Heading */}
          <div className="mt-10">
            {/* <p className="font-montserrat-700 text-[10px] uppercase tracking-[0.28em] text-gray-400 dark:text-gray-500">
              Staff Portal
            </p> */}

            <h1 className="mt-4 font-monument-700 text-2xl tracking-tight text-gray-900 dark:text-white">
              Restricted Access
            </h1>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed font-montserrat-500 text-gray-500 dark:text-gray-400">
              Authenticate to access the internal dashboard and management
              system.
            </p>
          </div>

          {/* Divider */}
          <div className="my-12 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gray-200 dark:bg-white/10" />

            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

            <div className="h-px w-16 bg-gray-200 dark:bg-white/10" />
          </div>

          {/* Pin Input */}
          <div className="mx-auto max-w-[280px]">
            <PinInput />
          </div>

          {/* Footer */}
          <div className="mt-14">
            <p className="font-montserrat-500 text-[11px] leading-relaxed text-gray-400 dark:text-gray-500">
              Protected internal environment.
              <br />
              Unauthorized access is monitored.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}