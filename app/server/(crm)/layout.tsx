import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyToken, COOKIE_NAME } from '@/lib/auth'

export default async function CRMLayout({ children }: { children: React.ReactNode }) {
  const store = await cookies()
  const username = verifyToken(store.get(COOKIE_NAME)?.value)
  if (!username) redirect('/server/login')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {children}
      </div>
    </div>
  )
}
