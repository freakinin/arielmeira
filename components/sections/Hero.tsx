'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeIn } from '@/lib/animations'
import { duoData } from '@/data/mockData'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero/m1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto container-padding text-center z-10 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg"
          >
            {duoData.name || 'Ariel & Meira'}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-serif-alt text-2xl md:text-3xl text-white mb-8 italic drop-shadow-md"
          >
            {duoData.tagline || 'Elegant music for meditation and contemplation'}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed mb-12 drop-shadow-md"
          >
            {duoData.description ||
              'Experience tranquility through sophisticated compositions blending classical elegance, jazz sophistication, and meditative serenity.'}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <motion.a
              href="#music"
              className="px-8 py-4 bg-evergreen-500 text-white rounded-lg font-medium hover:bg-evergreen-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Listen Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}

