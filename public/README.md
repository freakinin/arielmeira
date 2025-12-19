# Public Assets Directory

This directory contains all static assets served by Next.js.

## 📁 Folder Structure

```
public/
├── images/
│   ├── hero/              # Hero section background images
│   ├── gallery/           # Gallery images (performance, studio, etc.)
│   ├── artists/           # Artist photos and headshots
│   ├── music-covers/      # Album/track cover art
│   └── press/             # Press-related images
├── audio/                 # Audio files (MP3, WAV, etc.)
└── downloads/             # Press materials (PDFs, ZIP files, etc.)
```

## 🖼️ Adding Images

1. **Place images in the appropriate folder** based on their use
2. **Reference them in code** using paths starting with `/`
   - Example: `/images/gallery/performance-1.jpg`
3. **Use descriptive filenames** (lowercase with hyphens)
   - Good: `ariel-headshot.jpg`, `meditation-suite-cover.jpg`
   - Bad: `IMG_1234.jpg`, `image1.png`

## 📝 Examples

### Gallery Image
```typescript
// In data/mockData.ts
{
  id: 'img-1',
  src: '/images/gallery/performance-1.jpg',
  alt: 'Ariel & Meira performing live',
  caption: 'Live performance at meditation center'
}
```

### Artist Photo
```typescript
// In data/mockData.ts
{
  name: 'Ariel',
  image: '/images/artists/ariel.jpg'
}
```

### Music Cover
```typescript
// In data/mockData.ts
{
  title: 'Meditation Suite',
  coverImage: '/images/music-covers/meditation-suite.jpg'
}
```

## 🎵 Audio Files

Place audio files in `public/audio/` and reference them:
```typescript
{
  audioUrl: '/audio/track-1.mp3'
}
```

## 📄 Downloads

Place downloadable files (PDFs, press kits) in `public/downloads/`:
```typescript
{
  downloadUrl: '/downloads/press-kit.pdf'
}
```

## ⚡ Optimization Tips

- Compress images before adding (use TinyPNG, ImageOptim)
- Use appropriate formats (JPG for photos, PNG for transparency)
- Keep file sizes reasonable for web performance
- Consider using WebP format for better compression

