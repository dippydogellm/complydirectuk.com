import Link from 'next/link'
import locationsData from '@/data/locations.json'

export default function ServiceAreasPage() {
  return (
    <div className="space-y-8">
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Service Areas</h1>
          <p className="text-xl">Find fire protection and safety training services in your area</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locationsData.areas.map((area) => (
            <Link
              key={area.id}
              href={`/service-areas/${area.id}`}
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2">{area.name}</h2>
              <p className="text-gray-600">{area.postcode}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 