import { Container } from './Container'

interface PageHeaderProps {
  title: string
  description: string
  className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={`bg-blue-600 py-16 sm:py-24 ${className}`}>
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            {description}
          </p>
        </div>
      </Container>
    </div>
  )
} 