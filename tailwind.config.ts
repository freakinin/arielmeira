import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Calming, meditative color palette
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b0a3',
          400: '#7d8d7d',
          500: '#627162',
          600: '#4d5a4d',
          700: '#404a40',
          800: '#363e36',
          900: '#2f352f',
        },
        earth: {
          50: '#faf9f7',
          100: '#f3f1ed',
          200: '#e6e1d9',
          300: '#d4cbc0',
          400: '#b8ab9c',
          500: '#9d8e7d',
          600: '#8a7a6a',
          700: '#73655a',
          800: '#60554c',
          900: '#504842',
        },
        ocean: {
          50: '#f0f4f8',
          100: '#d9e4ed',
          200: '#b8cddd',
          300: '#8aafc7',
          400: '#5c8aab',
          500: '#416f91',
          600: '#355a78',
          700: '#2f4c63',
          800: '#2a4153',
          900: '#273847',
        },
        stone: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        'serif-alt': ['var(--font-crimson)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'slide-up': 'slideUp 1.2s ease-out',
        'breath': 'breath 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breath: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      spacing: {
        'section': '8rem',
        'section-sm': '4rem',
      },
    },
  },
  plugins: [],
}

export default config

