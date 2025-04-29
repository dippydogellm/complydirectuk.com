import Link from 'next/link'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { ServiceList } from '@/components/ServiceList'
import { ContactCTA } from '@/components/ContactCTA'
import locationsData from '@/data/locations.json'
import { mergedServicesData } from '@/data/merged-services'

export default function ServiceAreasPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Service Areas"
        description="Find professional services in your area across the UK"
      />

      <Container>
        {/* Service Categories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mergedServicesData.categories.map((category) => (
              <Link
                key={category.id}
                href={`/services/${category.id}`}
                className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-blue-600 font-medium">
                  View Services →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationsData.areas.map((area) => (
              <Link
                key={area.id}
                href={`/service-areas/${area.id}`}
                className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-2">{area.name}</h3>
                <p className="text-gray-600 mb-4">{area.postcode}</p>
                <div className="text-blue-600 font-medium">
                  View Services in {area.name} →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <ContactCTA />
      </Container>
    </div>
  )
} 