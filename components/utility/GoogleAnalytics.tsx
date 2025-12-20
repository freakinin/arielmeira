'use client'

import { useEffect } from 'react'

const GA_MEASUREMENT_ID = 'G-4V8S8SBXNF'

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Only initialize GA in production (not localhost)
    if (typeof window === 'undefined') return

    const hostname = window.location.hostname
    const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1'

    // Check if we're on production domain
    const isProduction =
      !isLocalhost &&
      (hostname.includes('vercel.app') ||
        hostname.includes('arielandmeira.com') ||
        hostname.includes('www.arielandmeira.com'))

    if (!isProduction) return

    // Load the gtag script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID)

    // Cleanup function
    return () => {
      // Remove script on unmount
      const scripts = document.querySelectorAll(
        `script[src*="googletagmanager.com"]`
      )
      scripts.forEach((script) => script.remove())
    }
  }, [])

  return null
}
