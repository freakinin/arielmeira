'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'
import { galleryImages } from '@/data/mockData'

type Masonry = {
  layout?: () => void
  destroy?: () => void
}

export default function Gallery() {
  const gridRef = useRef<HTMLDivElement>(null)
  const masonryRef = useRef<Masonry | null>(null)

  useEffect(() => {
    if (!gridRef.current || typeof window === 'undefined') return

    let cleanup: (() => void) | null = null

    // Dynamically import masonry-layout only on client side
    import('masonry-layout').then((MasonryModule) => {
      const Masonry = MasonryModule.default || MasonryModule
      if (!gridRef.current) return

      // Initialize Masonry with sizer element
      masonryRef.current = new Masonry(gridRef.current, {
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-sizer',
        percentPosition: true,
        gutter: 24,
      }) as Masonry

      // Recalculate layout when images load
      const images = gridRef.current.querySelectorAll('img')
      let loadedCount = 0
      const totalImages = images.length

      const handleImageLoad = () => {
        loadedCount++
        if (loadedCount === totalImages && masonryRef.current) {
          masonryRef.current.layout?.()
        }
      }

      images.forEach((img) => {
        if (img.complete) {
          handleImageLoad()
        } else {
          img.addEventListener('load', handleImageLoad)
        }
      })

      // Handle window resize
      const handleResize = () => {
        if (masonryRef.current) {
          masonryRef.current.layout?.()
        }
      }

      window.addEventListener('resize', handleResize)

      // Set up cleanup function
      cleanup = () => {
        if (masonryRef.current) {
          masonryRef.current.destroy?.()
        }
        images.forEach((img) => {
          img.removeEventListener('load', handleImageLoad)
        })
        window.removeEventListener('resize', handleResize)
      }
    })

    // Cleanup
    return () => {
      if (cleanup) {
        cleanup()
      }
    }
  }, [])

  return (
    <section
      id="gallery"
      className="section-padding bg-wheat-100"
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
            className="font-serif text-4xl md:text-5xl font-bold text-evergreen-900 text-center mb-12"
          >
            Gallery
          </motion.h2>

          {galleryImages.length > 0 ? (
            <div className="w-full max-w-6xl mx-auto">
              <div ref={gridRef} className="gallery-grid">
                {/* Sizer element for column width - 3 columns with 24px gutter */}
                <div className="gallery-sizer" style={{ width: 'calc(33.333% - 16px)' }}></div>
                
                {galleryImages.slice(0, 6).map((image) => (
                  <motion.div
                    key={image.id}
                    variants={scaleIn}
                    className="gallery-item relative overflow-hidden rounded-lg bg-stone-200 mb-6"
                    style={{ width: 'calc(33.333% - 16px)' }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={1000}
                      className="w-full h-auto"
                      sizes="33vw"
                      quality={90}
                    />
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                        <p className="text-sm">{image.caption}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
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

