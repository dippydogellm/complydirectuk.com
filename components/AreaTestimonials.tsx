import { Container } from './Container'
import { cn } from '@/lib/utils'

interface AreaTestimonialsProps {
  area: string
  className?: string
}

export function AreaTestimonials({ area, className }: AreaTestimonialsProps) {
  return (
    <div className={cn('bg-gray-50 py-16 sm:py-24', className)}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't just take our word for it. Here's what our clients in {area} have to say about our
            services.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Testimonials will be populated from a data source */}
          <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <blockquote className="text-gray-600">
              "Comply Direct UK provided excellent fire safety training for our staff. Their
              professional approach and attention to detail gave us confidence in our safety
              procedures."
            </blockquote>
            <div className="mt-6 flex items-center gap-x-4">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div>
                <div className="font-semibold text-gray-900">John Smith</div>
                <div className="text-sm text-gray-600">Business Owner</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 