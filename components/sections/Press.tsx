'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { pressItems, pressMaterials } from '@/data/mockData'

export default function Press() {
  return (
    <section
      id="press"
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
            Press
          </motion.h2>

          {/* Press Items */}
          {pressItems.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8 mb-16"
            >
              {pressItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-sage-600 uppercase tracking-wide">
                      {item.type}
                    </span>
                    {item.date && (
                      <span className="text-sm text-stone-500">
                        {item.date}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-sage-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 mb-4">{item.source}</p>
                  {item.quote && (
                    <blockquote className="border-l-4 border-sage-300 pl-4 italic text-sage-700 mb-4">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  )}
                  <p className="text-stone-600 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-600 hover:text-sage-700 underline text-sm"
                    >
                      Read more →
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              variants={fadeInUp}
              className="text-center text-stone-600 text-lg mb-16"
            >
              Press items will be displayed here
            </motion.p>
          )}

          {/* Press Materials */}
          {pressMaterials.length > 0 && (
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="font-serif text-2xl font-semibold text-sage-900 mb-6">
                Press Materials
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {pressMaterials.map((material) => (
                  <a
                    key={material.id}
                    href={material.downloadUrl}
                    download
                    className="flex items-center justify-between p-4 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors duration-300"
                  >
                    <div>
                      <p className="font-medium text-sage-900">
                        {material.name}
                      </p>
                      <p className="text-sm text-stone-600">
                        {material.description}
                      </p>
                    </div>
                    <span className="text-xs text-stone-500 uppercase">
                      {material.fileType}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

