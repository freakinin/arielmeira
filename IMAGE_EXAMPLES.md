# Image Usage Examples

## Hero Background Image

You've added `project-ariel-meira.jpg` to `public/images/hero/`

### ✅ How It's Used

The Hero component now uses your image as a background:

```tsx
// In components/sections/Hero.tsx
<section
  style={{
    backgroundImage: 'url(/images/hero/project-ariel-meira.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
```

**Path:** `/images/hero/project-ariel-meira.jpg`
- ✅ Starts with `/` (root of public folder)
- ✅ No `public/` in the path
- ✅ Folder structure: `images/hero/`

---

## More Examples

### Gallery Image

If you add `performance-1.jpg` to `public/images/gallery/`:

```typescript
// In data/mockData.ts
export const galleryImages: GalleryImage[] = [
  {
    id: 'img-1',
    src: '/images/gallery/performance-1.jpg',  // ✅ Correct path
    alt: 'Ariel & Meira performing live',
    caption: 'Live performance at meditation center',
    category: 'performance',
  },
]
```

### Artist Photo

If you add `ariel.jpg` to `public/images/artists/`:

```typescript
// In data/mockData.ts
export const duoData: Duo = {
  artists: [
    {
      name: 'Ariel',
      bio: '...',
      instrument: 'Piano',
      image: '/images/artists/ariel.jpg',  // ✅ Correct path
    },
  ],
}
```

### Music Cover

If you add `meditation-suite.jpg` to `public/images/music-covers/`:

```typescript
// In data/mockData.ts
export const musicTracks: MusicTrack[] = [
  {
    id: 'track-1',
    title: 'Meditation Suite',
    coverImage: '/images/music-covers/meditation-suite.jpg',  // ✅ Correct path
    // ... other properties
  },
]
```

---

## Quick Reference

| Your Image File | Folder Location | Code Reference |
|----------------|-----------------|----------------|
| `project-ariel-meira.jpg` | `public/images/hero/` | `/images/hero/project-ariel-meira.jpg` |
| `performance-1.jpg` | `public/images/gallery/` | `/images/gallery/performance-1.jpg` |
| `ariel.jpg` | `public/images/artists/` | `/images/artists/ariel.jpg` |
| `track-cover.jpg` | `public/images/music-covers/` | `/images/music-covers/track-cover.jpg` |

---

## Tips

1. **Always start paths with `/`** - This tells Next.js to look in the `public` folder
2. **Use lowercase filenames** - Better for web compatibility
3. **Be descriptive** - `project-ariel-meira.jpg` is better than `img1.jpg`
4. **Check the browser** - If image doesn't show, check the browser console for 404 errors

