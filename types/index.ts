// Core data interfaces for the EPK

export interface Artist {
  name: string
  bio: string
  instrument: string
  image?: string
}

export interface Duo {
  name: string
  tagline: string
  description: string
  artists: Artist[]
  philosophy?: string
}

export interface MusicTrack {
  id: string
  title: string
  description?: string
  duration?: string
  category: 'meditation' | 'jazz' | 'classical'
  audioUrl?: string
  spotifyUrl?: string
  appleMusicUrl?: string
  youtubeUrl?: string
  coverImage?: string
  releaseDate?: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  caption?: string
  category?: 'performance' | 'studio' | 'instruments' | 'nature'
}

export interface PressItem {
  id: string
  type: 'review' | 'accolade' | 'article'
  title: string
  source: string
  excerpt: string
  url?: string
  date?: string
  quote?: string
}

export interface PressMaterial {
  id: string
  name: string
  description: string
  downloadUrl: string
  fileType: 'pdf' | 'jpg' | 'png' | 'zip'
  size?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
  inquiryType: 'booking' | 'collaboration' | 'press' | 'general'
}

export interface SocialLink {
  platform: string
  url: string
  icon?: string
}

export interface SectionRef {
  id: string
  ref: React.RefObject<HTMLElement>
}

