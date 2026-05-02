import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--ff-montserrat',
  fallback: ['system-ui', 'sans-serif'],
})

export const monument = localFont({
  src: [
    { path: './fonts/monument/MonumentExtended-Regular.otf',   weight: '400', style: 'normal' },
    { path: './fonts/monument/MonumentExtended-Ultrabold.otf', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--ff-monument',
  fallback: ['system-ui', 'sans-serif'],
})
