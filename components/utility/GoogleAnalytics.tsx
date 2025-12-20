'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-4V8S8SBXNF'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function() {
            // Only initialize GA in production (not localhost)
            if (typeof window === 'undefined') return;
            
            const hostname = window.location.hostname;
            const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
            
            // Check if we're on production domain
            const isProduction = !isLocalhost && (
              hostname.includes('vercel.app') ||
              hostname.includes('arielandmeira.com') ||
              hostname.includes('www.arielandmeira.com')
            );
            
            if (!isProduction) return;
            
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          })();
        `}
      </Script>
    </>
  )
}
