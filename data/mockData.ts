import {
  Duo,
  MusicTrack,
  GalleryImage,
  PressItem,
  PressMaterial,
  SocialLink,
} from '@/types'

export const duoData: Duo = {
  name: '',
  tagline: '',
  description: '',
  artists: [],
  philosophy: '',
}

export const musicTracks: MusicTrack[] = []

export const galleryImages: GalleryImage[] = [
  { id: '1', src: '/images/gallery/1.jpg', alt: 'Gallery image 1' },
  { id: '2', src: '/images/gallery/2.JPG', alt: 'Gallery image 2' },
  { id: '3', src: '/images/gallery/3.jpg', alt: 'Gallery image 3' },
  { id: '4', src: '/images/gallery/4.JPG', alt: 'Gallery image 4' },
  { id: '1-dup', src: '/images/gallery/1.jpg', alt: 'Gallery image 1' },
  { id: '2-dup', src: '/images/gallery/2.JPG', alt: 'Gallery image 2' },
  { id: '3-dup', src: '/images/gallery/3.jpg', alt: 'Gallery image 3' },
  { id: '4-dup', src: '/images/gallery/4.JPG', alt: 'Gallery image 4' },
]

export const pressItems: PressItem[] = []

export const pressMaterials: PressMaterial[] = []

export const socialLinks: SocialLink[] = []

