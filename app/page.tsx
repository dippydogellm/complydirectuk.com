import { Metadata } from 'next'
import { HomeContent } from '@/components/HomeContent'

export const metadata = {
  title: 'Comply Direct UK | Professional Services & Training',
  description: 'Comprehensive fire protection, electrical services, and safety training solutions across the UK.',
}

export default function Home() {
  return <HomeContent />
} 