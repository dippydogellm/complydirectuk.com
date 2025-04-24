import { Metadata } from 'next'
import locations from '@/data/locations.json'

type Props = {
  params: {
    area: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = locations.areas.find((a) => a.id === params.area)
  if (!area) return {}

  return {
    title: `${area.name} Services | Comply Direct UK`,
    description: `Professional services in ${area.name}. Expert solutions for businesses including waste management, compliance, and specialized services.`,
  }
}

export default function ServiceAreaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 