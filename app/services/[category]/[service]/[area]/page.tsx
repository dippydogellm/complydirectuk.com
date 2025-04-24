import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/ServicePage'
import servicesData from '@/data/services.json'
import locationsData from '@/data/locations.json'

interface Props {
  params: {
    category: string
    service: string
    area: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = servicesData.categories.find((c) => c.id === params.category)
  const service = category?.services.find((s) => s.id === params.service)
  const area = locationsData.areas.find((a) => a.id === params.area)

  if (!category || !service || !area) {
    return {
      title: 'Service Not Found | Comply Direct UK',
      description: 'The requested service could not be found.',
    }
  }

  return {
    title: `${service.name} in ${area.name} | ${category.name} | Comply Direct UK`,
    description: `${service.name} services in ${area.name}. Professional ${service.name.toLowerCase()} solutions tailored for ${area.name} businesses.`,
  }
}

export default function ServiceAreaPage({ params }: Props) {
  const category = servicesData.categories.find((c) => c.id === params.category)
  const service = category?.services.find((s) => s.id === params.service)
  const area = locationsData.areas.find((a) => a.id === params.area)

  if (!category || !service || !area) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
        <p className="mt-4 text-lg text-gray-600">
          The requested service could not be found.
        </p>
      </div>
    )
  }

  return (
    <ServicePage
      title={`${service.name} in ${area.name}`}
      description={`Professional ${service.name.toLowerCase()} services in ${area.name}. Expert solutions tailored for ${area.name} businesses.`}
      content={`We provide comprehensive ${service.name.toLowerCase()} services throughout ${area.name} and surrounding areas. Our experienced team offers professional ${service.name.toLowerCase()} solutions tailored to meet the specific needs of ${area.name} businesses.`}
      features={[
        `Local ${service.name} experts in ${area.name}`,
        `Fast response times for ${area.name} businesses`,
        `Comprehensive coverage across ${area.name}`,
        `Understanding of local ${area.name} regulations`,
        `Dedicated support team for ${area.name} area`,
      ]}
      benefits={[
        'Peace of mind',
        'Compliance with regulations',
        'Professional expertise',
        'Quality assurance',
        'Customer satisfaction',
      ]}
    />
  )
} 