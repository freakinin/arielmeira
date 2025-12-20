'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import YouTubeThumbnail from '@/components/utility/YouTubeThumbnail'

const youtubeVideos = [
  { id: '2a_jyuGPZcQ', title: 'Ariel & Meira - Meditation Suite' },
  { id: 'BDch7Hu9fSc', title: 'Ariel & Meira - Jazz Reflections' },
  { id: '2a_jyuGPZcQ', title: 'Ariel & Meira - Meditation Suite' }, // Show first one twice
]

export default function Music() {
  return (
    <section
      id="music"
      className="pt-6 pb-8 md:pb-12 bg-wheat-100"
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
            className="font-serif text-4xl md:text-5xl font-bold text-evergreen-900 text-center mb-6"
          >
            Enjoy our music
          </motion.h2>

          {/* 3 video thumbnails grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {youtubeVideos.slice(0, 3).map((video, index) => (
              <motion.div
                key={`${video.id}-${index}`}
                variants={fadeInUp}
              >
                <div className="aspect-video w-full">
                  <YouTubeThumbnail videoId={video.id} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

