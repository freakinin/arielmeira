'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { duoData } from '@/data/mockData'

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-stone-50"
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
            className="font-serif text-4xl md:text-5xl font-bold text-sage-900 text-center mb-12"
          >
            About
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="prose prose-lg max-w-none text-stone-700 mb-12"
          >
            <p className="text-xl leading-relaxed mb-6">
              {duoData.description ||
                'Ariel & Meira is an instrumental duo dedicated to creating music that bridges the worlds of classical elegance, jazz sophistication, and meditative tranquility.'}
            </p>

            {duoData.philosophy && (
              <p className="text-lg italic text-sage-700 border-l-4 border-sage-300 pl-6 my-8">
                {duoData.philosophy}
              </p>
            )}
          </motion.div>

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
                  <h3 className="font-serif text-2xl font-semibold text-sage-900 mb-2">
                    {artist.name}
                  </h3>
                  <p className="text-sage-600 mb-4">{artist.instrument}</p>
                  <p className="text-stone-600 leading-relaxed">
                    {artist.bio}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

