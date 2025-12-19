import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Music from '@/components/sections/Music'
import Gallery from '@/components/sections/Gallery'
import Press from '@/components/sections/Press'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/shared/Navigation'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Music />
      <Gallery />
      <Press />
      <Contact />
      <Footer />
    </main>
  )
}

