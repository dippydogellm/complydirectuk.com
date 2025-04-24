import { Container } from './Container'
import { ContactCTA } from './ContactCTA'

interface ServicePageProps {
  title: string
  description: string
  content: string
  features?: string[]
  benefits?: string[]
  className?: string
}

export function ServicePage({
  title,
  description,
  content,
  features,
  benefits,
  className,
}: ServicePageProps) {
  return (
    <div className={className}>
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="prose prose-lg prose-blue">
                <p>{content}</p>
              </div>
            </div>
            <div className="lg:pl-8">
              {features && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                  <ul className="mt-4 space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-blue-600">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {benefits && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Benefits</h3>
                  <ul className="mt-4 space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-blue-600">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      <ContactCTA 
        className="mt-16"
        title={`Ready to discuss your ${title} needs?`}
        description="Contact us today to learn more about our professional services and how we can help you."
      />
    </div>
  )
} 