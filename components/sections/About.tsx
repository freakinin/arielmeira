'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { duoData } from '@/data/mockData'

export default function About() {
  return (
    <section
      id="about"
      className="pt-8 md:pt-12 pb-0 bg-wheat-100"
    >
      <div className="container mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl font-bold text-evergreen-900 text-center mb-12"
          >
            About
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="prose prose-lg max-w-none text-stone-700 mb-12 text-center"
          >
            <p className="text-xl leading-relaxed mb-8">
              {duoData.description ||
                'Ariel & Meira is an instrumental duo dedicated to creating music that bridges the worlds of classical elegance, jazz sophistication, and meditative tranquility.'}
            </p>

            <p className="text-xl leading-relaxed mb-8">
              Through their unique collaboration, they craft compositions that resonate with audiences seeking both emotional depth and musical innovation.
            </p>

            {duoData.philosophy && (
              <p className="text-lg italic text-evergreen-700 my-12 text-center max-w-2xl mx-auto">
                {duoData.philosophy}
              </p>
            )}
          </motion.div>
        </motion.div>

        {/* YouTube Video */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="w-full mt-12 mb-6 px-4"
        >
          <div className="aspect-video w-full rounded-lg overflow-hidden max-w-6xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/2a_jyuGPZcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>

        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
          {/* Artists */}
          {duoData.artists.length > 0 && (
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-8 mt-16"
            >
              {duoData.artists.map((artist, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-lg shadow-sm"
                >
                  <h3 className="font-serif text-2xl font-semibold text-evergreen-900 mb-2">
                    {artist.name}
                  </h3>
                  <p className="text-stone-600 mb-4">{artist.instrument}</p>
                  <p className="text-stone-600 leading-relaxed">
                    {artist.bio}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

