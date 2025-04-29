import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/ServicePage'
import { mergedServicesData } from '@/data/merged-services'
import locationsData from '@/data/locations.json'
import Link from 'next/link'

const COMPANY_PHONE = '07771055708'

interface Props {
  params: {
    category: string
    service: string
    area: string
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
  const area = locationsData.areas.find((a) => a.id === params.area)

  if (!category || !service || !area) {
    return {
      title: 'Service Not Found | Comply Direct UK',
      description: 'The requested service could not be found.',
    }
  }

  const seoTitle = `${service.name} in ${area.name} | ${category.name} Services | Comply Direct UK`
  const seoDescription = `✅ Expert ${service.name} services in ${area.name} ✅ Emergency Response ${area.coverage.response_times.emergency} ✅ Free Quotes ✅ Certified Engineers ✅ 100% Compliance Guarantee ✅ 5-Star Rated ✅ Call Now: ${COMPANY_PHONE}`

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      `${service.name} ${area.name}`,
      `${service.name} services ${area.name}`,
      `${category.name} ${area.name}`,
      `${service.name} near me ${area.name}`,
      `emergency ${service.name} ${area.name}`,
      `commercial ${service.name} ${area.name}`,
      `residential ${service.name} ${area.name}`,
      `${service.name} company ${area.name}`,
      `${service.name} contractors ${area.name}`,
      `${service.name} specialists ${area.name}`
    ],
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'website',
      locale: 'en_GB',
      siteName: 'Comply Direct UK',
    },
  }
}

export default function ServiceAreaPage({ params }: Props) {
  const categoryId = categorySlugToId[params.category] || params.category;
  const category = mergedServicesData.categories.find((c) => c.id === categoryId)
  const service = category?.services.find((s) => s.id === params.service)
  const area = locationsData.areas.find((a) => a.id === params.area)

  if (!category || !service || !area) {
    notFound()
  }

  const areaSpecificFeatures = [
    `Local ${service.name} experts in ${area.name}`,
    `Fast response times for ${area.name} businesses`,
    `Comprehensive coverage across ${area.name}`,
    `Understanding of local ${area.name} regulations`,
    `Dedicated support team for ${area.name} area`,
    `24/7 emergency ${service.name} services in ${area.name}`,
    `Certified ${service.name} specialists in ${area.name}`,
    `Competitive pricing for ${area.name} businesses`,
    `Local knowledge of ${area.name} building regulations`,
    `Established presence in ${area.name} market`,
    ...service.features
  ]

  const areaSpecificBenefits = [
    `Local expertise in ${area.name}`,
    `Familiarity with ${area.name} regulations`,
    `Quick response times in ${area.name}`,
    `Established presence in ${area.name}`,
    `Knowledge of ${area.name} market`,
    `Comprehensive ${service.name} solutions in ${area.name}`,
    `Professional ${service.name} services in ${area.name}`,
    `Reliable ${service.name} support in ${area.name}`,
    `Quality ${service.name} workmanship in ${area.name}`,
    `Competitive ${service.name} pricing in ${area.name}`,
    ...service.service_process
  ]

  const areaSpecificContent = `
    <div class="service-area-intro">
      <h1>${service.name} Services in ${area.name}</h1>
      <p>Welcome to Comply Direct UK's ${service.name} services in ${area.name}. As your local experts, we provide comprehensive ${service.name.toLowerCase()} solutions tailored to the specific needs of ${area.name} businesses and residents.</p>
    </div>

    <div class="service-area-overview">
      <h2>Why Choose Our ${service.name} Services in ${area.name}?</h2>
      <p>With over 15 years of experience serving ${area.name} and surrounding areas, we've built a reputation for excellence in ${service.name} services. Our local knowledge and expertise make us the preferred choice for ${service.name.toLowerCase()} solutions in ${area.name}.</p>
      <ul>
        <li>Local experts with extensive ${area.name} experience</li>
        <li>Rapid response times across ${area.name}</li>
        <li>Comprehensive coverage of all ${area.name} districts</li>
        <li>Deep understanding of local regulations</li>
        <li>24/7 emergency support</li>
      </ul>
    </div>

    <div class="service-area-coverage">
      <h2>${service.name} Coverage in ${area.name}</h2>
      <p>We provide comprehensive ${service.name} services across all areas of ${area.name}, including:</p>
      <ul>
        ${area.coverage.districts.map(district => `<li>${district}</li>`).join('')}
      </ul>
    </div>

    <div class="service-area-response">
      <h2>Emergency Response Times in ${area.name}</h2>
      <p>Our emergency response times in ${area.name} are among the fastest in the industry:</p>
      <ul>
        <li>Emergency Response: ${area.coverage.response_times.emergency}</li>
        <li>Standard Response: ${area.coverage.response_times.standard}</li>
        <li>Planned Maintenance: ${area.coverage.response_times.planned}</li>
      </ul>
    </div>

    <div class="service-area-industries">
      <h2>Key Industries We Serve in ${area.name}</h2>
      <p>We have extensive experience working with various industries in ${area.name}:</p>
      <ul>
        ${area.key_industries.map(industry => `<li>${industry}</li>`).join('')}
      </ul>
    </div>

    <div class="service-area-regulations">
      <h2>Local Regulations in ${area.name}</h2>
      <p>Our services comply with all local regulations in ${area.name}:</p>
      <ul>
        ${area.local_regulations.map(regulation => `<li>${regulation}</li>`).join('')}
      </ul>
    </div>

    <div class="service-area-contact">
      <h2>Contact Us for ${service.name} Services in ${area.name}</h2>
      <p>Ready to discuss your ${service.name} needs in ${area.name}? Contact our local team today:</p>
      <p>Phone: ${COMPANY_PHONE}</p>
      <p>Email: info@complydirectuk.com</p>
    </div>
  `

  return (
    <ServicePage
      title={`${service.name} Services in ${area.name}`}
      description={`Professional ${service.name.toLowerCase()} services in ${area.name} - Expert solutions, fast response times, and comprehensive coverage.`}
      content={areaSpecificContent}
      features={areaSpecificFeatures}
      benefits={areaSpecificBenefits}
      technical_details={service.technical_details}
    />
  )
} 