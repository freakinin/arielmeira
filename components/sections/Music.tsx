'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { musicTracks } from '@/data/mockData'
import MusicPlayer from '@/components/utility/MusicPlayer'

export default function Music() {
  return (
    <section
      id="music"
      className="section-padding bg-earth-50"
    >
      <div className="container mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl font-bold text-sage-900 text-center mb-12"
          >
            Music
          </motion.h2>

          {musicTracks.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {musicTracks.map((track) => (
                <motion.div
                  key={track.id}
                  variants={fadeInUp}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <MusicPlayer track={track} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              variants={fadeInUp}
              className="text-center text-stone-600 text-lg"
            >
              Music tracks will be displayed here
            </motion.p>
          )}

          {/* Streaming Platforms */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <h3 className="font-serif text-2xl font-semibold text-sage-900 mb-6">
              Listen on Streaming Platforms
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-300"
              >
                Spotify
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-300"
              >
                Apple Music
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-300"
              >
                YouTube Music
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

