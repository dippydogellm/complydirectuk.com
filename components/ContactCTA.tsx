import Link from 'next/link'
import { Container } from './Container'
import { cn } from '@/lib/utils'

interface ContactCTAProps {
  className?: string
}

export function ContactCTA({ className }: ContactCTAProps) {
  return (
    <div className={cn('bg-blue-600 py-16 sm:py-24', className)}>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Contact us today to discuss your fire safety needs. Our team is ready to help you ensure
            your premises meet all safety requirements.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
} 