import type { Metadata } from 'next'
import { Playfair_Display, Crimson_Text, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const crimson = Crimson_Text({
  subsets: ['latin'],
  variable: '--font-crimson',
  weight: ['400', '600'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Ariel & Meira | Meditation Music Duo',
  description:
    'Elegant instrumental music blending meditation, jazz, and classical influences. Experience tranquility through sophisticated compositions.',
  keywords: [
    'meditation music',
    'instrumental duo',
    'jazz classical fusion',
    'relaxation music',
    'wellness music',
  ],
  authors: [{ name: 'Ariel & Meira' }],
  openGraph: {
    title: 'Ariel & Meira | Meditation Music Duo',
    description:
      'Elegant instrumental music blending meditation, jazz, and classical influences.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <html lang="en" className={`${playfair.variable} ${crimson.variable} ${inter.variable}`}>
      <body>
        {gaMeasurementId && isProduction && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  )
}

