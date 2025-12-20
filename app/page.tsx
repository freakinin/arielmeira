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
