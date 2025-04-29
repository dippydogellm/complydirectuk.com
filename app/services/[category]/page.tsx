import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { ContactCTA } from '@/components/ContactCTA'
import { mergedServicesData } from '@/data/merged-services'
import locationsData from '@/data/locations.json'

interface Props {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = mergedServicesData.categories.find((c) => c.id === params.category)

  if (!category) {
    return {
      title: 'Category Not Found | Comply Direct UK',
      description: 'The requested service category could not be found.',
    }
  }

  return {
    title: `${category.name} | Comply Direct UK`,
    description: category.description,
  }
}

export default function CategoryPage({ params }: Props) {
  const category = mergedServicesData.categories.find((c) => c.id === params.category)

  if (!category) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold">Category Not Found</h1>
        <p className="mt-4 text-lg text-gray-600">
          The requested service category could not be found.
        </p>
      </div>
    )
  }

  return (
    <div>
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {category.name}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {category.description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {category.services.map((service) => (
              <div key={service.id} className="flex flex-col">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-7 text-gray-600">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/services/${category.id}/${service.id}`}
                    className="text-sm font-semibold leading-6 text-blue-600"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Available in Your Area
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find professional {category.name.toLowerCase()} services in your local area.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
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
                    href={`/services/${category.id}/${category.services[0].id}/${area.id}`}
                    className="text-sm font-semibold leading-6 text-blue-600"
                  >
                    View services in {area.name} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <ContactCTA 
        className="mt-16"
        title={`Ready to discuss your ${category.name} needs?`}
        description="Contact us today to learn more about our professional services and how we can help you."
      />
    </div>
  )
} 