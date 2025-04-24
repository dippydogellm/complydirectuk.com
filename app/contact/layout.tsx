import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Comply Direct UK',
  description: 'Get in touch with our team to discuss your fire safety needs. We provide professional fire safety services across Manchester, Stockport, Cheshire, and Oldham.',
  openGraph: {
    title: 'Contact Us | Comply Direct UK',
    description: 'Get in touch with our team to discuss your fire safety needs. We provide professional fire safety services across Manchester, Stockport, Cheshire, and Oldham.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb', // blue-600
  width: 'device-width',
  initialScale: 1,
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 