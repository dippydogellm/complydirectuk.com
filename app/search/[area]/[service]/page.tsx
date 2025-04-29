import { Metadata } from 'next'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { ContactCTA } from '@/components/ContactCTA'
import locationsData from '@/data/locations.json'
import { mergedServicesData } from '@/data/merged-services'

export async function generateMetadata({ params }: { params: { area: string; service: string } }): Promise<Metadata> {
  const area = locationsData.areas.find(a => a.id === params.area)
  const service = mergedServicesData.categories
    .flatMap(cat => cat.services)
    .find(s => s.id === params.service)

  if (!area || !service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service or area could not be found.'
    }
  }

  return {
    title: `${service.name} in ${area.name} | Emergency Services & Training`,
    description: `Professional ${service.name.toLowerCase()} services in ${area.name}. ${service.description} Available throughout ${area.name} and surrounding areas.`,
    openGraph: {
      title: `${service.name} in ${area.name} | Emergency Services & Training`,
      description: `Professional ${service.name.toLowerCase()} services in ${area.name}. ${service.description} Available throughout ${area.name} and surrounding areas.`,
      type: 'website',
      locale: 'en_GB',
      siteName: 'Comply Direct UK'
    }
  }
}

export default function ServiceAreaPage({ params }: { params: { area: string; service: string } }) {
  const area = locationsData.areas.find(a => a.id === params.area)
  const service = mergedServicesData.categories
    .flatMap(cat => cat.services)
    .find(s => s.id === params.service)

  if (!area || !service) {
    return (
      <Container>
        <PageHeader
          title="Service Not Found"
          description="The requested service or area could not be found."
        />
      </Container>
    )
  }

  // Construct area-specific features and benefits
  const areaFeatures = [
    `Local ${service.name.toLowerCase()} experts in ${area.name}`,
    `24/7 emergency ${service.name.toLowerCase()} services`,
    `Fully qualified and certified professionals`,
    `Comprehensive coverage across ${area.name}`,
    `Quick response times in ${area.name} and surrounding areas`,
    `Local knowledge of ${area.name} regulations and requirements`
  ]

  const areaBenefits = [
    `Expert ${service.name.toLowerCase()} services in ${area.name}`,
    `Emergency response available 24/7`,
    `Competitive pricing for ${area.name} residents and businesses`,
    `Local knowledge and expertise`,
    `Fully insured and certified professionals`,
    `Satisfaction guaranteed`
  ]

  return (
    <Container>
      <PageHeader
        title={`${service.name} in ${area.name}`}
        description={`Professional ${service.name.toLowerCase()} services in ${area.name}. ${service.description}`}
      />

      <div className="prose prose-lg max-w-none">
        <h2>Professional {service.name.toLowerCase()} Services in {area.name}</h2>
        <p>
          We provide comprehensive {service.name.toLowerCase()} services throughout {area.name} and surrounding areas. 
          Our team of qualified professionals is available 24/7 to handle all your {service.name.toLowerCase()} needs.
        </p>

        <h3>Why Choose Our {service.name} Services in {area.name}?</h3>
        <ul>
          {areaBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        <h3>Our {service.name} Services in {area.name}</h3>
        <p>
          We offer a complete range of {service.name.toLowerCase()} services to meet your needs in {area.name}:
        </p>
        <ul>
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h3>Coverage in {area.name}</h3>
        <p>
          Our {service.name.toLowerCase()} services cover all areas of {area.name}, including:
        </p>
        <ul>
          {area.coverage.districts.map((district, index) => (
            <li key={index}>{district}</li>
          ))}
        </ul>

        <h3>Emergency Response Times</h3>
        <p>
          We understand that {service.name.toLowerCase()} emergencies can happen at any time. That's why we offer:
        </p>
        <ul>
          <li>24/7 emergency call-out service</li>
          <li>Rapid response times in {area.name}</li>
          <li>Same-day service for urgent requirements</li>
          <li>Out-of-hours emergency support</li>
        </ul>

        <h3>Local Expertise in {area.name}</h3>
        <p>
          Our team has extensive experience providing {service.name.toLowerCase()} services in {area.name}. 
          We understand the local requirements and regulations, ensuring that all work is completed to the highest standards.
        </p>

        <h3>Contact Us</h3>
        <p>
          For professional {service.name.toLowerCase()} services in {area.name}, contact us today:
        </p>
        <ul>
          <li>Phone: 07771055708</li>
          <li>Email: info@complydirectuk.com</li>
          <li>Emergency: 24/7 call-out service available</li>
        </ul>
      </div>

      <ContactCTA />
    </Container>
  )
} 