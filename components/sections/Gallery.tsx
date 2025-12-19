'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'
import { galleryImages } from '@/data/mockData'

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-padding bg-stone-50"
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
            Gallery
          </motion.h2>

          {galleryImages.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {galleryImages.map((image) => (
                <motion.div
                  key={image.id}
                  variants={scaleIn}
                  className="relative overflow-hidden rounded-lg aspect-square bg-stone-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full flex items-center justify-center text-stone-400">
                    <span className="text-sm">Image placeholder</span>
                  </div>
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                      <p className="text-sm">{image.caption}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              variants={fadeInUp}
              className="text-center text-stone-600 text-lg"
            >
              Gallery images will be displayed here
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

