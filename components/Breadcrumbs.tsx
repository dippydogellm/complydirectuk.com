'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  className?: string
}

export default function Breadcrumbs({ className = '' }: BreadcrumbsProps) {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: '/' + pathSegments.slice(0, index + 1).join('/')
    }))
  ]

  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            {index > 0 && (
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <Link
              href={crumb.href}
              className={`text-sm ${
                index === breadcrumbs.length - 1
                  ? 'text-gray-500'
                  : 'text-blue-600 hover:text-blue-800'
              }`}
            >
              {crumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
} 