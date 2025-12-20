'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const hostArtists = [
  {
    name: 'Yshai Afterman',
    description: 'Yshai Afterman is a distinguished host artist known for his exceptional contributions to the musical community.',
    image: '/images/artists/yshai.jpg',
  },
  {
    name: 'Harel Shachal',
    description: 'Harel Shachal brings a unique artistic perspective and has been instrumental in supporting the musical journey.',
    image: '/images/artists/harel.jpg',
  },
  {
    name: 'Daniel Evri',
    description: 'Daniel Evri is a talented host artist who has made significant contributions to the ensemble and musical community.',
    image: '/images/artists/daniel.jpg',
  },
]

export default function HostArtists() {
  return (
    <section className="section-padding bg-wheat-100">
      <div className="container mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl font-bold text-evergreen-900 text-center mb-12"
          >
            Host Artists
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostArtists.map((artist) => (
              <motion.div
                key={artist.name}
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                {/* Image */}
                <div className="w-full mb-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-stone-200">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-serif text-2xl font-bold text-evergreen-900 mb-3">
                  {artist.name}
                </h3>

                {/* Description */}
                <p className="text-stone-700 leading-relaxed">
                  {artist.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

