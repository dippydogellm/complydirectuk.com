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

export async function generateMetadata({ 
  params 
}: { 
  params: { area: string; course: string } 
}): Promise<Metadata> {
  const area = locationsData.areas.find((a) => a.id === params.area)
  const course = coursesData.courses.find((c) => c.id === params.course)
  
  if (!area || !course) {
    return {
      title: 'Course Not Found | Comply Direct UK',
      description: 'The requested course could not be found.',
    }
  }

  return {
    title: `${course.name} in ${area.name} | Comply Direct UK`,
    description: `${course.description} Available in ${area.name}. Duration: ${course.duration}, Level: ${course.level}.`,
  }
}

export default function CoursePage({ 
  params 
}: { 
  params: { area: string; course: string } 
}) {
  const area = locationsData.areas.find((a) => a.id === params.area)
  const course = coursesData.courses.find((c) => c.id === params.course)
  
  if (!area || !course) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title={course.name}
        description={`${course.description} - Available in ${area.name}`}
      />

      <Container>
        {/* Course Overview */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-2">
                  <p><span className="font-semibold">Duration:</span> {course.duration}</p>
                  <p><span className="font-semibold">Level:</span> {course.level}</p>
                  <p><span className="font-semibold">Price:</span> {course.price}</p>
                  <p><span className="font-semibold">Certification:</span> {course.certification}</p>
                  <p><span className="font-semibold">Requirements:</span> {course.requirements}</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Training Location</h2>
                <div className="space-y-2">
                  <p><span className="font-semibold">Center:</span> {area.name} Training Center</p>
                  <p><span className="font-semibold">Address:</span> {area.postcode}</p>
                  <p><span className="font-semibold">Facilities:</span> Modern classrooms, practical workshops, testing equipment</p>
                  <p><span className="font-semibold">Parking:</span> Available on site</p>
                  <p><span className="font-semibold">Accessibility:</span> Fully accessible training center</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Course Content
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              {course.content.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Available Dates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Available Dates
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {course.next_dates.map((date: string, index: number) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <p className="font-semibold">
                    {new Date(date).toLocaleDateString('en-GB', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-gray-600">Duration: {course.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Course Benefits
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Industry-recognized {course.certification} certification</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Practical hands-on training in {area.name}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Experienced instructors with industry expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Modern training facilities and equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Career support and guidance</span>
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