import { Container } from './Container'
import { ContactCTA } from './ContactCTA'
import { TechnicalDetails } from '@/types/services'
import { CheckIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

interface ServicePageProps {
  title: string
  description: string
  content: string
  features?: string[]
  benefits?: string[]
  technical_details?: TechnicalDetails
  className?: string
}

export function ServicePage({
  title,
  description,
  content,
  features,
  benefits,
  technical_details,
  className,
}: ServicePageProps) {
  return (
    <div className={className}>
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 mix-blend-multiply" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {description}
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {/* Left Column */}
            <div className="lg:pr-8">
              <div className="prose prose-lg prose-blue max-w-none">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>

              {/* Features Section */}
              {features && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Key Features</h2>
                  <ul className="mt-6 space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-base text-gray-600">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="lg:pl-8">
              {/* Benefits Section */}
              {benefits && (
                <div className="rounded-lg bg-gray-50 p-6">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Benefits</h2>
                  <ul className="mt-6 space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <ShieldCheckIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-base text-gray-600">{benefit}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Details Section */}
              {technical_details && (
                <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Technical Details</h2>
                  <div className="mt-6 space-y-6">
                    {technical_details.standards && (
                      <div>
                        <h3 className="flex items-center text-lg font-semibold text-gray-900">
                          <DocumentTextIcon className="mr-2 h-5 w-5 text-blue-600" />
                          Standards
                        </h3>
                        <ul className="mt-2 space-y-2">
                          {technical_details.standards.map((standard, index) => (
                            <li key={index} className="text-sm text-gray-600">{standard}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {technical_details.coverage && (
                      <div>
                        <h3 className="flex items-center text-lg font-semibold text-gray-900">
                          <MapPinIcon className="mr-2 h-5 w-5 text-blue-600" />
                          Coverage
                        </h3>
                        <div className="mt-2 space-y-2">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Districts:</span> {technical_details.coverage.districts.join(', ')}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Response Times:</span>
                          </p>
                          <ul className="mt-1 space-y-1">
                            <li className="flex items-center text-sm text-gray-600">
                              <ClockIcon className="mr-1 h-4 w-4 text-blue-600" />
                              Emergency: {technical_details.coverage.response_times.emergency}
                            </li>
                            <li className="flex items-center text-sm text-gray-600">
                              <ClockIcon className="mr-1 h-4 w-4 text-blue-600" />
                              Standard: {technical_details.coverage.response_times.standard}
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {technical_details.local_regulations && (
                      <div>
                        <h3 className="flex items-center text-lg font-semibold text-gray-900">
                          <DocumentTextIcon className="mr-2 h-5 w-5 text-blue-600" />
                          Local Regulations
                        </h3>
                        <ul className="mt-2 space-y-2">
                          {technical_details.local_regulations.map((regulation, index) => (
                            <li key={index} className="text-sm text-gray-600">{regulation}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {technical_details.key_industries && (
                      <div>
                        <h3 className="flex items-center text-lg font-semibold text-gray-900">
                          <MapPinIcon className="mr-2 h-5 w-5 text-blue-600" />
                          Key Industries
                        </h3>
                        <ul className="mt-2 space-y-2">
                          {technical_details.key_industries.map((industry, index) => (
                            <li key={index} className="text-sm text-gray-600">{industry}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Contact CTA Section */}
      <div className="mt-16">
        <ContactCTA />
      </div>
    </div>
  )
} 