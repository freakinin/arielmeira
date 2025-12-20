'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { galleryImages } from '@/data/mockData'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openLightbox = (src: string) => {
    setSelectedImage(src)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
    }
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset'
    }
  }

  // Close on ESC key
  useEffect(() => {
    if (!mounted || !selectedImage) return
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [selectedImage, mounted])

  return (
    <>
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {galleryImages.slice(0, 6).map((image) => (
                    <motion.div
                      key={image.id}
                      variants={fadeInUp}
                      className="relative overflow-hidden rounded-lg bg-stone-200 aspect-square group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => openLightbox(image.src)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        quality={85}
                      />
                      {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-xs md:text-sm">{image.caption}</p>
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

      {/* Lightbox Modal - Only render when mounted */}
      {mounted && (
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  closeLightbox()
                }}
                className="absolute top-4 right-4 text-white hover:text-stone-300 transition-colors z-10"
                aria-label="Close lightbox"
              >
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-7xl max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Gallery image"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={95}
                />
              </motion.div>

              {/* Navigation Arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      const currentIndex = galleryImages.findIndex(
                        (img) => img.src === selectedImage
                      )
                      const prevIndex =
                        currentIndex > 0
                          ? currentIndex - 1
                          : galleryImages.length - 1
                      setSelectedImage(galleryImages[prevIndex].src)
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-stone-300 transition-colors z-10 bg-black/50 rounded-full p-2 md:p-3"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      const currentIndex = galleryImages.findIndex(
                        (img) => img.src === selectedImage
                      )
                      const nextIndex =
                        currentIndex < galleryImages.length - 1
                          ? currentIndex + 1
                          : 0
                      setSelectedImage(galleryImages[nextIndex].src)
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-stone-300 transition-colors z-10 bg-black/50 rounded-full p-2 md:p-3"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  )
}
