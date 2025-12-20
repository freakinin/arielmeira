'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface YouTubeThumbnailProps {
  videoId: string
  title?: string
}

export default function YouTubeThumbnail({ videoId, title }: YouTubeThumbnailProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  // Use hqdefault as primary - it's more reliable than maxresdefault
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`

  if (isPlaying) {
    return (
      <div className="w-full h-full rounded-lg overflow-hidden">
        <iframe
          src={embedUrl}
          title={title || 'YouTube video player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          style={{ backgroundColor: 'transparent' }}
        />
      </div>
    )
  }

  return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden cursor-pointer group"
      onClick={() => setIsPlaying(true)}
      style={{ backgroundColor: 'transparent' }}
    >
      <img
        src={thumbnailUrl}
        alt={title || 'YouTube video thumbnail'}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-8 h-8 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

