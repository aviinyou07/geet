import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { PageTransition } from '@/components/page-transition';
import { PerformanceMonitor } from '@/components/dev/PerformanceMonitor';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

// Font loading - keep original approach for styling compatibility
const inter = Inter({ subsets: ["latin"] });

// Separate viewport export for better performance
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0d9488',
  colorScheme: 'light',
};

// Enhanced metadata with performance and SEO optimization
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  publisher: 'GeetCare Foundation',
  category: 'Healthcare',
  classification: 'Mental Health Services',
  
  // OpenGraph optimization
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.description}`,
        type: 'image/png',
      },
    ],
  },
  
  // Twitter/X optimization
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ['/og-image.png'],
    creator: '@geetcare',
    site: '@geetcare',
  },
  
  // Enhanced metadata for better indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Structured data for rich snippets
  other: {
    'application-name': SITE_CONFIG.name,
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#0d9488',
    'msapplication-tap-highlight': 'no',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={inter.className}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Critical resource hints */}
        <link rel="preload" href="/Geet_care_logo.png" as="image" type="image/png" />
        <link rel="preload" href="/assets/heroSlider1.webp" as="image" type="image/webp" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'GeetCare Foundation',
              url: SITE_CONFIG.url,
              logo: `${SITE_CONFIG.url}/Geet_care_logo.png`,
              description: SITE_CONFIG.description,
              foundingDate: '2024',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-123-456-7890',
                contactType: 'customer service',
                availableLanguage: ['English', 'Hindi'],
                hoursAvailable: '24/7',
              },
              areaServed: 'India',
              serviceType: 'Mental Health Services',
            }),
          }}
        />
      </head>
      
      <body>
        <PageTransition>
          {children}
        </PageTransition>
        
        {/* Development Performance Monitor */}
        <PerformanceMonitor />
      </body>
    </html>
  );
}
