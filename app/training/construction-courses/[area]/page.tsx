import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { ContactCTA } from '@/components/ContactCTA'
import locationsData from '@/data/locations.json'
import coursesData from '@/data/courses.json'

interface Course {
  id: string
  name: string
  description: string
  duration: string
  level: string
  requirements: string
  content: string[]
  price: string
  certification: string
  next_dates: string[]
}

const courses: Course[] = coursesData.courses

export async function generateMetadata({ params }: { params: { area: string } }): Promise<Metadata> {
  const area = locationsData.areas.find((a) => a.id === params.area)
  
  if (!area) {
    return {
      title: 'Training Courses Not Found | Comply Direct UK',
      description: 'The requested training courses could not be found.',
    }
  }

  return {
    title: `Construction & City & Guilds Courses in ${area.name} | Comply Direct UK`,
    description: `Professional construction training courses and City & Guilds qualifications in ${area.name}. Including AM2, electrical installation, and more.`,
  }
}

export default function AreaConstructionCoursesPage({ params }: { params: { area: string } }) {
  const area = locationsData.areas.find((a) => a.id === params.area)
  
  if (!area) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title={`Construction & City & Guilds Courses in ${area.name}`}
        description={`Professional training courses and qualifications in ${area.name}`}
      />

      <Container>
        {/* Area Training Center */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            {area.name} Training Center
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="space-y-4">
              <p><span className="font-semibold">Location:</span> {area.name} Training Center</p>
              <p><span className="font-semibold">Address:</span> {area.postcode}</p>
              <p><span className="font-semibold">Facilities:</span> Modern classrooms, practical workshops, testing equipment</p>
              <p><span className="font-semibold">Parking:</span> Available on site</p>
              <p><span className="font-semibold">Accessibility:</span> Fully accessible training center</p>
            </div>
          </div>
        </div>

        {/* Available Courses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Available Courses in {area.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-2">
                  <a 
                    href={`/training/construction-courses/${area.id}/${course.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {course.name}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-2">
                  <p><span className="font-semibold">Duration:</span> {course.duration}</p>
                  <p><span className="font-semibold">Level:</span> {course.level}</p>
                  <p><span className="font-semibold">Price:</span> {course.price}</p>
                  <p><span className="font-semibold">Certification:</span> {course.certification}</p>
                  <p><span className="font-semibold">Requirements:</span> {course.requirements}</p>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Course Content:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    {course.content.map((item: string, index: number) => (
                      <li key={index} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Next Available Dates:</h4>
                  <ul className="space-y-1">
                    {course.next_dates.map((date: string, index: number) => (
                      <li key={index} className="text-gray-600">
                        {new Date(date).toLocaleDateString('en-GB', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href={`/training/construction-courses/${area.id}/${course.id}`}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Course Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Local Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Benefits of Training in {area.name}
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Convenient location in {area.name}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Local industry connections and networking opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Understanding of local industry requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Access to local employers and job opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Familiarity with local building regulations and standards</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <ContactCTA />
      </Container>
    </div>
  )
} 