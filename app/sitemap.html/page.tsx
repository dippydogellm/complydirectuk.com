import { Metadata } from 'next'
import Link from 'next/link'
import locationsData from '@/data/locations.json'
import servicesData from '@/data/services.json'

export const metadata: Metadata = {
  title: 'Sitemap | Comply Direct UK',
  description: 'Complete sitemap of Comply Direct UK website showing all available pages and services.',
}

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
      
      <div className="space-y-8">
        {/* Main Pages */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li><Link href="/contact" className="text-blue-600 hover:underline">Contact</Link></li>
            <li><Link href="/services" className="text-blue-600 hover:underline">Services</Link></li>
            <li><Link href="/service-areas" className="text-blue-600 hover:underline">Service Areas</Link></li>
            <li><Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link></li>
          </ul>
        </section>

        {/* Service Areas */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Service Areas</h2>
          <ul className="list-disc pl-6 space-y-2">
            {locationsData.areas.map((area) => (
              <li key={area.id}>
                <Link 
                  href={`/service-areas/${area.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Service Categories */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Service Categories</h2>
          <ul className="list-disc pl-6 space-y-2">
            {servicesData.categories.map((category) => (
              <li key={category.id}>
                <Link 
                  href={`/services/${category.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {category.name}
                </Link>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  {category.services.map((service) => (
                    <li key={service.id}>
                      <Link 
                        href={`/services/${category.id}/${service.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* Service Area Services */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Services by Area</h2>
          <div className="space-y-4">
            {locationsData.areas.map((area) => (
              <div key={area.id}>
                <h3 className="text-xl font-medium mb-2">{area.name}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {servicesData.categories.flatMap((category) =>
                    category.services.map((service) => (
                      <li key={`${area.id}-${service.id}`}>
                        <Link 
                          href={`/service-areas/${area.id}/${service.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 