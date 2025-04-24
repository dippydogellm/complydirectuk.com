'use client'

import { Category, Service } from '@/types/services'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Clock, MapPin, Shield, Award, Phone, FileCheck, Users } from 'lucide-react'

interface ServicePageProps {
  service: Service
  category: Category
  area?: string
}

export function ServicePage({ service, category, area }: ServicePageProps) {
  // Extract area name from the area parameter
  const areaName = area?.split('|')[0]?.trim() || 'UK'

  // Area-specific content
  const areaContent = {
    benefits: [
      `Local ${service.name} experts in ${areaName}`,
      `Fast response times for ${areaName} businesses`,
      `Comprehensive coverage across ${areaName}`,
      `Understanding of local ${areaName} regulations`,
      `Dedicated support team for ${areaName} area`,
      `Regular maintenance schedules tailored to ${areaName} businesses`,
      `Competitive pricing for ${areaName} market`,
      `24/7 emergency support in ${areaName}`,
      `Local knowledge of ${areaName} building types and requirements`,
      `Customized solutions for ${areaName} businesses`,
      `Specialized ${service.name} for ${areaName} commercial properties`,
      `Regular ${service.name} inspections in ${areaName}`
    ],
    expertise: [
      `Extensive experience in ${areaName}`,
      `Local knowledge of ${areaName} building codes`,
      `Understanding of ${areaName} business needs`,
      `Regular service coverage in ${areaName}`,
      `Emergency support for ${areaName} area`,
      `Fully certified technicians in ${areaName}`,
      `Latest technology and equipment`,
      `Comprehensive documentation and reporting`,
      `Familiarity with ${areaName} local authority requirements`,
      `Experience with ${areaName} commercial and industrial properties`,
      `Expert ${service.name} technicians in ${areaName}`,
      `Specialized ${service.name} knowledge for ${areaName}`
    ],
    regulations: [
      'Building Regulations Approved Document B',
      'Regulatory Reform (Fire Safety) Order 2005',
      'Local Authority requirements',
      'Industry standards and best practices',
      'Health and Safety regulations',
      'BS 5839 Fire Detection and Fire Alarm Systems',
      'BS 5266 Emergency Lighting',
      'Fire Safety Act 2021',
      'Leeds City Council Fire Safety Guidelines',
      'West Yorkshire Fire and Rescue Service Standards',
      `${service.name} compliance requirements`,
      `${service.name} inspection standards`
    ],
    emergency: {
      response: '24/7 Emergency Response',
      contact: '07771055708',
      coverage: `Full coverage in ${areaName} and surrounding areas`,
      support: 'Dedicated emergency support team'
    },
    introduction: {
      title: `Professional ${service.name} Services in ${areaName}`,
      description: `We provide comprehensive ${service.name.toLowerCase()} services throughout ${areaName} and surrounding areas. Our team of certified technicians offers reliable, efficient, and compliant solutions tailored to the specific needs of ${areaName} businesses. With our local expertise and commitment to safety, we ensure your fire protection systems are always in optimal condition. Our ${service.name.toLowerCase()} service is designed to keep your business safe and compliant with all relevant regulations.`,
      highlights: [
        `Trusted by businesses across ${areaName}`,
        `Fully compliant with local regulations`,
        `Competitive pricing for ${areaName} market`,
        `Dedicated local support team`,
        `Expert ${service.name} technicians`,
        `Regular ${service.name} inspections`
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-12">
        <Container>
          <div className="mb-6">
            <Breadcrumbs className="text-blue-100" />
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {service.name} in {areaName}
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              {service.description}
            </p>
            {area && (
              <div className="mt-4 space-y-2">
                <p className="text-lg text-blue-100">
                  Professional {service.name.toLowerCase()} services available in {areaName}
                </p>
                <div className="flex items-center gap-2 text-blue-100">
                  <MapPin className="h-5 w-5" />
                  <span>Full coverage in {areaName} and surrounding areas</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <Shield className="h-5 w-5" />
                  <span>Expert {service.name} technicians in {areaName}</span>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>

      <Container className="mt-16 sm:mt-20">
        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{areaContent.introduction.title}</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 mb-4">{areaContent.introduction.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {areaContent.introduction.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Area Benefits Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Benefits for {areaName} Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areaContent.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        {service.features && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technical Details Section */}
        {service.technical_details && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(service.technical_details).map(([key, value]) => (
                <div key={key} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-medium mb-2">
                    {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </h3>
                  {Array.isArray(value) ? (
                    <ul className="space-y-2">
                      {value.map((item, index) => (
                        <li key={index} className="text-gray-700">{String(item)}</li>
                      ))}
                    </ul>
                  ) : typeof value === 'object' && value !== null ? (
                    <ul className="space-y-2">
                      {Object.entries(value).map(([k, v]) => (
                        <li key={k} className="text-gray-700">
                          {k.charAt(0).toUpperCase() + k.slice(1)}: {String(v)}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">{String(value)}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Local Expertise Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Local Expertise in {areaName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areaContent.expertise.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Compliance & Regulations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areaContent.regulations.map((regulation, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-start gap-3">
                  <FileCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-700">{regulation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Response Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Emergency Response</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">{areaContent.emergency.response}</h3>
                  <p className="text-gray-700">{areaContent.emergency.coverage}</p>
                  <p className="text-gray-700 mt-2">Immediate response to emergency callouts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Emergency Contact</h3>
                  <p className="text-gray-700 font-semibold text-lg">{areaContent.emergency.contact}</p>
                  <p className="text-gray-700 mt-2">Available 24/7 for emergency support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Process Section */}
        {service.service_process && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Service Process</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <ol className="space-y-4">
                {service.service_process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-4">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
} 