import { Area, Service } from '@/types'

interface SchemaMarkupProps {
  area?: Area
  service?: Service
  type: 'area' | 'service'
}

export default function SchemaMarkup({ area, service, type }: SchemaMarkupProps) {
  const getSchema = () => {
    if (type === 'area' && area) {
      return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `Comply Direct UK - ${area.name}`,
        description: `Professional fire protection and safety training services in ${area.name}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Flat 8, 18 Mellalieu Street',
          addressLocality: 'Middleton',
          postalCode: 'M24 5DN',
          addressCountry: 'GB'
        },
        telephone: ['07771055708', '0161 4834416'],
        areaServed: {
          '@type': 'City',
          name: area.name,
          postalCode: area.postcode
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Fire Protection Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Fire Protection Services',
                description: 'Comprehensive fire protection services including fire alarms, risk assessments, and emergency lighting'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Safety Training',
                description: 'Professional safety training courses including Fire Marshal and First Aid training'
              }
            }
          ]
        }
      }
    }

    if (type === 'service' && service && area) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${service.name} in ${area.name}`,
        description: service.description,
        provider: {
          '@type': 'LocalBusiness',
          name: 'Comply Direct UK',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Flat 8, 18 Mellalieu Street',
            addressLocality: 'Middleton',
            postalCode: 'M24 5DN',
            addressCountry: 'GB'
          },
          telephone: ['07771055708', '0161 4834416']
        },
        areaServed: {
          '@type': 'City',
          name: area.name,
          postalCode: area.postcode
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: service.name,
          itemListElement: service.features.map((feature, index) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: feature
            }
          }))
        }
      }
    }

    return null
  }

  const schema = getSchema()
  if (!schema) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 