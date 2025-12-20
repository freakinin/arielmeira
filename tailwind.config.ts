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
        // Main color palette: Wheat, Evergreen, Stone Brown
        wheat: {
          50: '#fefbf7',
          100: '#fdf7ef',
          200: '#faf0d7',
          300: '#f7e8bf',
          400: '#f4e0a7',
          500: '#F1D8AA', // Main wheat color
          600: '#d4c299',
          700: '#b7ac88',
          800: '#9a9677',
          900: '#7d8066',
        },
        evergreen: {
          50: '#e6f0eb',
          100: '#b3d1c0',
          200: '#80b295',
          300: '#4d936a',
          400: '#1a743f',
          500: '#01200F', // Main evergreen color
          600: '#011a0c',
          700: '#011309',
          800: '#010d06',
          900: '#000603',
        },
        stone: {
          50: '#f5f4f2',
          100: '#e8e6e2',
          200: '#d1cdc5',
          300: '#bab4a8',
          400: '#a39b8b',
          500: '#6B6054', // Main stone brown color
          600: '#5a5248',
          700: '#49443c',
          800: '#383630',
          900: '#272824',
        },
        // Keep stone for neutral grays
        neutral: {
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

