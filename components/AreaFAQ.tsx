import { Container } from './Container'
import { cn } from '@/lib/utils'

interface AreaFAQProps {
  area: string
  className?: string
}

export function AreaFAQ({ area, className }: AreaFAQProps) {
  return (
    <div className={cn('bg-white py-16 sm:py-24', className)}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to common questions about our fire safety services in {area}.
          </p>
        </div>
        <dl className="mx-auto mt-16 max-w-2xl space-y-8">
          <div>
            <dt className="text-lg font-semibold leading-7 text-gray-900">
              What areas do you cover in {area}?
            </dt>
            <dd className="mt-4 text-base leading-7 text-gray-600">
              We provide comprehensive fire safety services across all major districts in {area},
              including emergency call-outs and scheduled maintenance.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-semibold leading-7 text-gray-900">
              How quickly can you respond to emergencies?
            </dt>
            <dd className="mt-4 text-base leading-7 text-gray-600">
              We offer rapid response times for emergencies, typically arriving within 1-2 hours in the
              {area} area. Our team is available 24/7 for emergency call-outs.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-semibold leading-7 text-gray-900">
              Do you offer fire safety training?
            </dt>
            <dd className="mt-4 text-base leading-7 text-gray-600">
              Yes, we provide comprehensive fire safety training for businesses in {area}, including
              fire marshal training and staff awareness courses.
            </dd>
          </div>
        </dl>
      </Container>
    </div>
  )
} 