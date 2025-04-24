import { Metadata } from 'next'
import locationsData from '@/data/locations.json'
import servicesData from '@/data/services.json'
import areaContent from '@/data/area-content.json'

export async function generateStaticParams() {
  return locationsData.areas.map((area) => ({
    area: area.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { area: string }
}): Promise<Metadata> {
  const area = areaContent.areas[params.area as keyof typeof areaContent.areas]
  if (!area) {
    return {
      title: 'Area Not Found',
      description: 'The requested area could not be found.',
    }
  }

  // Safely get service names from each category
  const fireProtectionServices = servicesData.categories[0]?.services
    ?.map(service => service.name)
    .join(', ') || 'Fire Protection Services'

  const trainingServices = servicesData.categories[1]?.services
    ?.map(service => service.name)
    .join(', ') || 'Safety Training Services'

  return {
    title: area.title,
    description: area.description,
    keywords: `fire protection, safety training, ${fireProtectionServices}, ${trainingServices}, ${params.area}, same-day service, BS 5839 compliant`,
    openGraph: {
      title: area.title,
      description: area.description,
      type: 'website',
      locale: 'en_GB',
      siteName: 'Comply Direct UK',
    },
    twitter: {
      card: 'summary_large_image',
      title: area.title,
      description: area.description,
    },
    alternates: {
      canonical: `https://complydirectuk.com/service-areas/${params.area}`,
    },
  }
}

export default function ServiceAreaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 