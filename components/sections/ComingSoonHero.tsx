'use client'

export default function ComingSoonHero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero/m1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto container-padding text-center z-10 relative px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg">
            Coming Soon
          </h1>

          <p className="font-serif-alt text-2xl md:text-3xl text-white mb-8 italic drop-shadow-md">
            Ariel & Meira
          </p>

          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            We&apos;re putting the finishing touches on our website. Stay tuned for something beautiful.
          </p>
        </div>
      </div>
    </section>
  )
}
