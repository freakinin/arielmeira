# Ariel & Meira EPK - Complete Documentation

## 📋 Project Overview

A modern, fully responsive single-page Electronic Press Kit (EPK) website for an instrumental musical duo specializing in meditation/relaxation music with jazz and classical influences.

**Design Philosophy:**

- **Elegant & Minimalist** - Clean lines, generous whitespace, sophisticated typography
- **Calming & Serene** - Soft color palette, gentle transitions, peaceful atmosphere
- **Professional & Refined** - High-end classical music presentation, premium feel
- **Meditative Quality** - Subtle animations, breathing room, zen-like simplicity

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** EmailJS
- **Fonts:**
  - Playfair Display (serif headings)
  - Crimson Text (serif accent)
  - Inter (sans-serif body)

---

## 📁 Project Structure

```
ArielMeira/
├── app/
│   ├── layout.tsx          # Root layout with metadata & fonts
│   ├── page.tsx            # Main page component (single-page)
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Hero section with duo name & CTA
│   │   ├── About.tsx       # About section with artist bios
│   │   ├── Music.tsx       # Music section with tracks
│   │   ├── Gallery.tsx     # Gallery section with images
│   │   ├── Press.tsx       # Press section with reviews & materials
│   │   └── Contact.tsx     # Contact section with form
│   ├── shared/             # Shared components
│   │   ├── Navigation.tsx  # Sticky nav with scroll spy
│   │   └── Footer.tsx      # Footer with links
│   └── utility/            # Utility components
│       ├── MusicPlayer.tsx # Audio player component
│       └── ContactForm.tsx # EmailJS contact form
├── data/
│   └── mockData.ts         # All content data (update here)
├── hooks/
│   └── useSmoothScroll.ts  # Smooth scroll hook
├── lib/
│   ├── animations.ts       # Framer Motion variants
│   ├── emailjs.ts          # EmailJS integration
│   └── useScrollSpy.ts     # Scroll spy hook
├── types/
│   └── index.ts           # TypeScript interfaces
└── public/                 # Static assets (images, etc.)
```

---

## 🎨 Design System

### Color Palette

Defined in `tailwind.config.ts` and `app/globals.css`:

- **Sage** (`sage-50` to `sage-900`) - Primary green tones for calmness
- **Earth** (`earth-50` to `earth-900`) - Warm earth tones
- **Ocean** (`ocean-50` to `ocean-900`) - Deep blue tones
- **Stone** (`stone-50` to `stone-900`) - Neutral grays

**Usage Example:**

```tsx
className = 'bg-sage-50 text-sage-900 border-sage-500'
```

### Typography

- **Headings:** `font-serif` (Playfair Display)
- **Accent Text:** `font-serif-alt` (Crimson Text)
- **Body Text:** `font-sans` (Inter)

**Usage Example:**

```tsx
<h1 className="font-serif text-4xl">Heading</h1>
<p className="font-sans text-lg">Body text</p>
```

### Animation Philosophy

All animations follow a "breath-like" philosophy - slow, graceful, intentional:

- **Duration:** 1-1.5 seconds (slow and meditative)
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (smooth)
- **Trigger:** Scroll-triggered with intersection observer
- **Variants:** Available in `lib/animations.ts`

**Available Animation Variants:**

- `fadeIn` - Gentle fade in
- `fadeInUp` - Fade in with upward motion
- `staggerContainer` - Stagger children animations
- `slideInLeft` / `slideInRight` - Horizontal slide
- `scaleIn` - Subtle scale animation

---

## 📝 Content Management

### Adding Content

All content is managed in `data/mockData.ts`. Update the following objects:

#### 1. Duo Information (`duoData`)

```typescript
export const duoData: Duo = {
  name: 'Ariel & Meira',
  tagline: 'Elegant music for meditation and contemplation',
  description: 'Your full description here...',
  artists: [
    {
      name: 'Artist Name',
      bio: 'Artist biography...',
      instrument: 'Instrument',
      image: '/path/to/image.jpg', // optional
    },
  ],
  philosophy: 'Your musical philosophy...', // optional
}
```

#### 2. Music Tracks (`musicTracks`)

```typescript
export const musicTracks: MusicTrack[] = [
  {
    id: 'track-1',
    title: 'Track Title',
    description: 'Track description',
    duration: '5:30',
    category: 'meditation' | 'jazz' | 'classical',
    audioUrl: '/audio/track.mp3', // optional
    spotifyUrl: 'https://...', // optional
    appleMusicUrl: 'https://...', // optional
    youtubeUrl: 'https://...', // optional
    coverImage: '/images/cover.jpg', // optional
    releaseDate: '2024-01-01', // optional
  },
]
```

#### 3. Gallery Images (`galleryImages`)

```typescript
export const galleryImages: GalleryImage[] = [
  {
    id: 'img-1',
    src: '/images/gallery/image1.jpg',
    alt: 'Description of image',
    caption: 'Optional caption',
    category: 'performance' | 'studio' | 'instruments' | 'nature', // optional
  },
]
```

#### 4. Press Items (`pressItems`)

```typescript
export const pressItems: PressItem[] = [
  {
    id: 'press-1',
    type: 'review' | 'accolade' | 'article',
    title: 'Press Title',
    source: 'Publication Name',
    excerpt: 'Excerpt text...',
    url: 'https://...', // optional
    date: '2024-01-01', // optional
    quote: 'Featured quote...', // optional
  },
]
```

#### 5. Press Materials (`pressMaterials`)

```typescript
export const pressMaterials: PressMaterial[] = [
  {
    id: 'material-1',
    name: 'Press Kit PDF',
    description: 'Complete press kit',
    downloadUrl: '/downloads/press-kit.pdf',
    fileType: 'pdf' | 'jpg' | 'png' | 'zip',
    size: '2.5 MB', // optional
  },
]
```

#### 6. Social Links (`socialLinks`)

```typescript
export const socialLinks: SocialLink[] = [
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/...',
    icon: 'spotify', // optional, for future icon implementation
  },
]
```

---

## 🖼️ Image Organization & Management

### Folder Structure

I've created an organized folder structure for you. **Yes, organizing images by area is highly recommended!** Here's the structure:

```
public/
├── images/
│   ├── hero/              # Hero section background images
│   ├── gallery/           # Gallery images
│   ├── artists/           # Artist photos and headshots
│   ├── music-covers/      # Album/track cover art
│   └── press/             # Press-related images
├── audio/                 # Audio files (MP3, etc.)
└── downloads/             # Press materials (PDFs, etc.)
```

### How to Reference Images

In Next.js, files in the `public/` folder are served from the root URL. Reference them like this:

**✅ Correct:**

```typescript
// In mockData.ts
src: '/images/gallery/performance-1.jpg'
src: '/images/artists/ariel-headshot.jpg'
src: '/images/music-covers/meditation-track.jpg'
```

**❌ Incorrect:**

```typescript
// Don't use these:
src: './images/gallery/image.jpg' // Wrong - relative path
src: 'public/images/gallery/image.jpg' // Wrong - includes public
```

### Image Usage Examples

#### Hero Section Background

```typescript
// In Hero.tsx, you can add:
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: 'url(/images/hero/background.jpg)' }}
/>
```

#### Gallery Images

```typescript
// In mockData.ts
export const galleryImages: GalleryImage[] = [
  {
    id: 'img-1',
    src: '/images/gallery/performance-1.jpg',
    alt: 'Ariel & Meira performing live',
    caption: 'Live performance at meditation center',
    category: 'performance',
  },
  {
    id: 'img-2',
    src: '/images/gallery/studio-session.jpg',
    alt: 'Recording session',
    caption: 'Studio recording session',
    category: 'studio',
  },
]
```

#### Artist Photos

```typescript
// In mockData.ts
export const duoData: Duo = {
  artists: [
    {
      name: 'Ariel',
      bio: '...',
      instrument: 'Piano',
      image: '/images/artists/ariel.jpg', // Optional
    },
    {
      name: 'Meira',
      bio: '...',
      instrument: 'Violin',
      image: '/images/artists/meira.jpg', // Optional
    },
  ],
}
```

#### Music Cover Art

```typescript
// In mockData.ts
export const musicTracks: MusicTrack[] = [
  {
    id: 'track-1',
    title: 'Meditation Suite',
    coverImage: '/images/music-covers/meditation-suite.jpg',
    // ... other properties
  },
]
```

### Image Best Practices

1. **File Naming:**
   - Use lowercase with hyphens: `performance-1.jpg`
   - Be descriptive: `ariel-headshot.jpg` not `img1.jpg`
   - Include dimensions if needed: `hero-bg-1920x1080.jpg`

2. **Image Formats:**
   - **JPG** - Photos, complex images
   - **PNG** - Images with transparency
   - **WebP** - Modern format (better compression)
   - **SVG** - Logos, simple graphics

3. **Image Optimization:**
   - Compress images before adding (use tools like TinyPNG, ImageOptim)
   - Recommended sizes:
     - Hero images: 1920x1080px (or larger, will be optimized)
     - Gallery thumbnails: 800x800px
     - Artist photos: 600x600px
     - Music covers: 1000x1000px

4. **Accessibility:**
   - Always include descriptive `alt` text
   - Use meaningful filenames
   - Consider image loading states

### Quick Reference

| Image Type      | Folder                        | Example Path                          |
| --------------- | ----------------------------- | ------------------------------------- |
| Hero background | `public/images/hero/`         | `/images/hero/background.jpg`         |
| Gallery photos  | `public/images/gallery/`      | `/images/gallery/performance-1.jpg`   |
| Artist photos   | `public/images/artists/`      | `/images/artists/ariel.jpg`           |
| Music covers    | `public/images/music-covers/` | `/images/music-covers/track-1.jpg`    |
| Press images    | `public/images/press/`        | `/images/press/review-screenshot.jpg` |
| Audio files     | `public/audio/`               | `/audio/track-1.mp3`                  |
| Downloads       | `public/downloads/`           | `/downloads/press-kit.pdf`            |

---

## ⚙️ Configuration

### EmailJS Setup

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create a service** (Gmail, Outlook, etc.)
3. **Create an email template** with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{inquiry_type}}`
   - `{{to_name}}`
4. **Get your credentials:**
   - Service ID
   - Template ID
   - Public Key
5. **Create `.env.local` file:**

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

**Required Variables:**

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

---

## 🚀 Development Workflow

### Starting Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

Generates static files in `out/` directory (ready for Vercel)

### Code Quality

```bash
npm run lint      # Run ESLint
npm run format     # Format with Prettier
```

---

## 🎯 Key Features

### ✅ Implemented Features

- [x] Fully responsive design (mobile-first)
- [x] Smooth scrolling navigation
- [x] Active section highlighting (scroll spy)
- [x] Scroll-triggered animations
- [x] Contact form with EmailJS
- [x] SEO optimization
- [x] Accessibility best practices
- [x] TypeScript throughout
- [x] Static export ready
- [x] Custom color palette
- [x] Elegant typography system
- [x] Mobile menu navigation

### 🔄 Navigation Behavior

- **Sticky Header:** Navigation stays fixed at top while scrolling
- **Active Section:** Current section highlighted in nav
- **Smooth Scroll:** Gentle scroll animation between sections
- **Mobile Menu:** Collapsible menu for mobile devices
- **Scroll Offset:** Accounts for fixed header height

---

## 📱 Responsive Breakpoints

Tailwind default breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Custom Spacing:**

- `section-padding`: 4rem mobile, 8rem desktop
- `container-padding`: Responsive horizontal padding

---

## 🎨 Customization Guide

### Changing Colors

1. **Update Tailwind Config** (`tailwind.config.ts`):

```typescript
colors: {
  sage: { /* your colors */ },
  // Add new color palette
}
```

2. **Update CSS Variables** (`app/globals.css`):

```css
:root {
  --color-sage-500: #your-color;
}
```

### Changing Fonts

1. **Update `app/layout.tsx`** with new Google Fonts
2. **Update `tailwind.config.ts`** font families
3. **Update CSS variables** in `globals.css`

### Modifying Animations

Edit `lib/animations.ts` to adjust:

- Animation duration
- Easing curves
- Stagger delays
- Transform values

---

## 🐛 Troubleshooting

### Build Errors

**ESLint Errors:**

- Run `npm run lint` to see issues
- Fix unescaped entities (use `&ldquo;` instead of `"`)

**TypeScript Errors:**

- Ensure all interfaces match in `types/index.ts`
- Check component prop types

### EmailJS Not Working

1. Check `.env.local` file exists
2. Verify environment variable names (must start with `NEXT_PUBLIC_`)
3. Test EmailJS template in their dashboard
4. Check browser console for errors

### Images Not Loading

1. Place images in `public/` directory
2. Reference as `/image-name.jpg` (leading slash)
3. Use Next.js `Image` component for optimization (future enhancement)

---

## 📋 Next Steps Checklist

### Immediate Steps

- [ ] **Configure EmailJS**
  - [ ] Sign up for EmailJS account
  - [ ] Create service and template
  - [ ] Add credentials to `.env.local`
  - [ ] Test contact form

- [ ] **Add Content**
  - [ ] Update `duoData` with actual duo information
  - [ ] Add artist bios and images
  - [ ] Add music tracks with audio files
  - [ ] Add gallery images
  - [ ] Add press items and materials
  - [ ] Add social media links

- [ ] **Add Images**
  - [ ] Create `public/images/` directory structure
  - [ ] Add hero background image (optional)
  - [ ] Add artist photos
  - [ ] Add music cover art
  - [ ] Add gallery images
  - [ ] Optimize images for web

### Styling Enhancements

- [ ] **Customize Hero Section**
  - [ ] Add background image or gradient
  - [ ] Adjust typography sizes
  - [ ] Fine-tune spacing

- [ ] **Enhance Music Section**
  - [ ] Style audio players
  - [ ] Add streaming platform icons
  - [ ] Create track category filters

- [ ] **Polish Gallery**
  - [ ] Implement lightbox/modal
  - [ ] Add image lazy loading
  - [ ] Create category filters

- [ ] **Refine Animations**
  - [ ] Adjust animation timings
  - [ ] Add parallax effects (subtle)
  - [ ] Test on various devices

### Advanced Features (Future)

- [ ] **Image Optimization**
  - [ ] Implement Next.js Image component
  - [ ] Add image optimization pipeline

- [ ] **Audio Player**
  - [ ] Custom audio player design
  - [ ] Playlist functionality
  - [ ] Waveform visualization

- [ ] **Content Management**
  - [ ] Integrate with CMS (Contentful, Sanity)
  - [ ] Or Google Sheets API
  - [ ] Or Notion API

- [ ] **Analytics**
  - [ ] Add Google Analytics
  - [ ] Track form submissions
  - [ ] Monitor scroll depth

- [ ] **Performance**
  - [ ] Add loading states
  - [ ] Implement code splitting
  - [ ] Optimize bundle size

---

## 📚 Important Files Reference

### Core Files

- **`app/page.tsx`** - Main page component (imports all sections)
- **`app/layout.tsx`** - Root layout with metadata
- **`app/globals.css`** - Global styles and CSS variables
- **`data/mockData.ts`** - All content (UPDATE THIS FIRST)

### Configuration Files

- **`tailwind.config.ts`** - Tailwind configuration & colors
- **`next.config.mjs`** - Next.js configuration (static export)
- **`tsconfig.json`** - TypeScript configuration
- **`.env.example`** - Environment variables template

### Utility Files

- **`lib/animations.ts`** - Framer Motion animation variants
- **`lib/emailjs.ts`** - EmailJS integration logic
- **`lib/useScrollSpy.ts`** - Scroll spy hook
- **`hooks/useSmoothScroll.ts`** - Smooth scroll hook
- **`types/index.ts`** - TypeScript interfaces

---

## 🔗 Useful Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **EmailJS:** https://www.emailjs.com/docs/
- **TypeScript:** https://www.typescriptlang.org/docs/

---

## 📞 Support

For questions or issues:

1. Check this documentation
2. Review code comments
3. Check browser console for errors
4. Verify environment variables are set

---

**Last Updated:** December 2024
**Project Status:** ✅ Foundation Complete - Ready for Content & Styling
