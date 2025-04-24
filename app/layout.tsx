import './globals.css'
import type { Metadata, Viewport } from 'next'
import ClientLayout from '@/components/ClientLayout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: '#FF0000',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Comply Direct UK - Fire Protection & Safety Training Services',
  description: 'Professional fire protection and safety training services across Manchester, Stockport, Cheshire, and Oldham. Same-day service available.',
  keywords: 'fire protection, safety training, fire alarms, fire risk assessments, emergency lighting, fire doors, fire extinguishers, fire marshal training, first aid training, forestry first aid, Manchester, Stockport, Cheshire, Oldham',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Comply Direct UK',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-sans">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF0000" />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
} 