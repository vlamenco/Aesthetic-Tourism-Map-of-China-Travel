'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function GAClientTracker() {
  const pathname = usePathname()
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    if (!GA_ID) return
    const gtag = (window as any).gtag
    if (typeof gtag === 'function') {
      gtag('config', GA_ID, { page_path: pathname })
    }
  }, [pathname, GA_ID])

  return null
}
