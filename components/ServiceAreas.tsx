import Link from 'next/link'
import locationsData from '@/data/locations.json'

export default function ServiceAreas() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Service Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locationsData.areas.map((area) => (
            <Link
              key={area.id}
              href={`/service-areas/${area.id}`}
              className="area-card"
            >
              <h3 className="text-xl font-bold mb-2">{area.name}</h3>
              <p className="text-gray-600 mb-4">{area.postcode}</p>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{area.description}</p>
              <span className="text-blue-600 font-medium inline-flex items-center">
                View Coverage
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/service-areas" className="btn-primary">
            View All Areas
          </Link>
        </div>
      </div>
    </section>
  )
} 