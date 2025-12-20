'use client'

import { useEffect } from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Music from '@/components/sections/Music'
import Artists from '@/components/sections/Artists'
import HostArtists from '@/components/sections/HostArtists'
import Gallery from '@/components/sections/Gallery'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/shared/Navigation'
import Footer from '@/components/shared/Footer'

export default function Home() {
  useEffect(() => {
    // Only redirect in production (not localhost)
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname
      const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1'
      
      // Check if we're on production domain
      const isProduction =
        !isLocalhost &&
        (hostname.includes('vercel.app') ||
          hostname.includes('arielandmeira.com') ||
          hostname.includes('www.arielandmeira.com'))

      // Redirect to coming soon in production
      if (isProduction && window.location.pathname === '/') {
        window.location.replace('/coming-soon')
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-wheat-100">
      <Navigation />
      <Hero />
      <About />
      <Music />
      <Artists />
      <HostArtists />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
