import { Metadata } from 'next'
import Link from 'next/link'
import { ServicePage } from '@/components/ServicePage'
import { Container } from '@/components/Container'
import { ContactCTA } from '@/components/ContactCTA'
import { mergedServicesData } from '@/data/merged-services'
import locationsData from '@/data/locations.json'

interface Props {
  params: {
    category: string
    service: string
  }
}

// Slug to ID mapping for SEO-friendly URLs
const categorySlugToId: Record<string, string> = {
  'electrical-services': 'electrical',
  'fire-protection': 'fire-protection',
  'safety-training': 'safety-training',
  'surveyors': 'surveyors',
  'structural-engineers': 'structural-engineers',
  'security': 'security',
  // Add more mappings as needed
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryId = categorySlugToId[params.category] || params.category;
  const category = mergedServicesData.categories.find((c) => c.id === categoryId)
  const service = category?.services.find((s) => s.id === params.service)

  if (!category || !service) {
    return {
      title: 'Service Not Found | Comply Direct UK',
      description: 'The requested service could not be found.',
    }
  }

  return {
    title: `${service.name} | ${category.name} | Comply Direct UK`,
    description: service.description,
  }
}

export default function ServicePageRoute({ params }: Props) {
  const categoryId = categorySlugToId[params.category] || params.category;
  const category = mergedServicesData.categories.find((c) => c.id === categoryId)
  const service = category?.services.find((s) => s.id === params.service)

  if (!category || !service) {
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
    <>
      <ServicePage
        title={service.name}
        description={service.description}
        content={`Professional ${service.name.toLowerCase()} services from Comply Direct UK. Our experienced team provides comprehensive ${service.name.toLowerCase()} solutions tailored to your needs.`}
        features={[
          'Expert professional service',
          'Competitive pricing',
          'Fast response times',
          'Nationwide coverage',
          'Fully insured and certified',
        ]}
        benefits={[
          'Peace of mind',
          'Compliance with regulations',
          'Professional expertise',
          'Quality assurance',
          'Customer satisfaction',
        ]}
      />

      <Container className="mt-16">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Available in Your Area
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find professional {service.name.toLowerCase()} services in your local area.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {locationsData.areas.map((area) => (
              <div key={area.id} className="flex flex-col">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  {area.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-7 text-gray-600">
                  {area.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/services/${category.id}/${service.id}/${area.id}`}
                    className="text-sm font-semibold leading-6 text-blue-600"
                  >
                    View service in {area.name} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <ContactCTA 
        className="mt-16"
        title={`Ready to discuss your ${service.name} needs?`}
        description="Contact us today to learn more about our professional services and how we can help you."
      />
    </>
  )
} 