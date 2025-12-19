# Ariel & Meira - EPK Website

A modern, fully responsive single-page Electronic Press Kit (EPK) website for an instrumental musical duo specializing in meditation/relaxation music with jazz and classical influences.

## 🎵 Design Philosophy

- **Elegant & Minimalist** - Clean lines, generous whitespace, sophisticated typography
- **Calming & Serene** - Soft color palette, gentle transitions, peaceful atmosphere
- **Professional & Refined** - High-end classical music presentation, premium feel
- **Meditative Quality** - Subtle animations, breathing room, zen-like simplicity

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** EmailJS
- **Fonts:** Playfair Display, Crimson Text, Inter

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Configure EmailJS:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service, template, and get your public key
   - Add the values to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Music.tsx
│   │   ├── Gallery.tsx
│   │   ├── Press.tsx
│   │   └── Contact.tsx
│   ├── shared/             # Shared components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── utility/            # Utility components
│       ├── MusicPlayer.tsx
│       └── ContactForm.tsx
├── data/
│   └── mockData.ts         # Mock data structure
├── hooks/
│   └── useSmoothScroll.ts  # Smooth scroll hook
├── lib/
│   ├── animations.ts      # Framer Motion variants
│   ├── emailjs.ts         # EmailJS integration
│   └── useScrollSpy.ts    # Scroll spy hook
├── types/
│   └── index.ts           # TypeScript interfaces
└── public/                # Static assets
```

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.ts` and `app/globals.css`:

- **Sage** - Primary green tones
- **Earth** - Warm earth tones
- **Ocean** - Deep blue tones
- **Stone** - Neutral grays

### Typography

- **Serif (Playfair Display)** - Headings
- **Serif Alt (Crimson Text)** - Accent text
- **Sans (Inter)** - Body text

### Content

Update content in `data/mockData.ts`:

- `duoData` - Duo information
- `musicTracks` - Music tracks
- `galleryImages` - Gallery images
- `pressItems` - Press items
- `pressMaterials` - Downloadable press materials
- `socialLinks` - Social media links

## 🚀 Deployment

The project is configured for static export (Vercel-ready):

```bash
npm run build
```

The `out` directory will contain the static files ready for deployment.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎯 Features

- ✅ Fully responsive design
- ✅ Smooth scrolling navigation
- ✅ Active section highlighting
- ✅ Scroll-triggered animations
- ✅ Contact form with EmailJS
- ✅ SEO optimized
- ✅ Accessibility best practices
- ✅ TypeScript throughout
- ✅ Static export ready

## 📄 License

Private project - All rights reserved

