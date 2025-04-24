import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { ContactCTA } from '@/components/ContactCTA'
import servicesData from '@/data/services.json'

export const metadata: Metadata = {
  title: 'Our Services | Comply Direct UK',
  description: 'Explore our comprehensive range of professional services including surveying, structural engineering, architecture, energy assessment, and more.',
}

export default function ServicesPage() {
  return (
    <div>
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a comprehensive range of professional services to help you meet your compliance and development needs.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {servicesData.categories.map((category) => (
              <div key={category.id} className="flex flex-col">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  {category.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-7 text-gray-600">
                  {category.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/services/${category.id}`}
                    className="text-sm font-semibold leading-6 text-blue-600"
                  >
                    View services <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <ContactCTA 
        className="mt-16"
        title="Ready to discuss your project needs?"
        description="Contact us today to learn more about our professional services and how we can help you."
      />
    </div>
  )
} 