import type { Metadata } from 'next'
import { Inter, Poppins, Inter_Tight, Karla, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter-tight',
})

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-karla',
})

// Using Space Grotesk as substitute for Neue Montreal (similar style)
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Enzari Creations - Leading the next era of work',
  description: 'We don\'t just build digital, we build different. Enzari Creations is your creative partner for innovative digital experiences.',
  keywords: 'digital agency, web design, branding, product design, AI production, motion design',
  authors: [{ name: 'Enzari Creations' }],
  creator: 'Enzari Creations',
  publisher: 'Enzari Creations',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/assets/images/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/assets/images/favicon.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/assets/images/favicon.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/assets/images/favicon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    other: [
      { url: '/assets/images/favicon.svg', sizes: '192x192', type: 'image/svg+xml' },
      { url: '/assets/images/favicon.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enzari.com',
    title: 'Enzari Creations - Leading the next era of work',
    description: 'We don\'t just build digital, we build different. Enzari Creations is your creative partner for innovative digital experiences.',
    siteName: 'Enzari Creations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enzari Creations - Leading the next era of work',
    description: 'We don\'t just build digital, we build different. Enzari Creations is your creative partner for innovative digital experiences.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${interTight.variable} ${karla.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 