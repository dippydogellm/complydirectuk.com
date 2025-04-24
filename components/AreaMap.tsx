import { cn } from '@/lib/utils'
import { AreaContent } from '@/types'

interface AreaMapProps {
  area: AreaContent
  className?: string
}

export function AreaMap({ area, className }: AreaMapProps) {
  // Extract area name from the title (e.g., "Fire Protection & Safety Training Services in Manchester | Comply Direct UK" -> "Manchester")
  const areaName = area.title.split(' in ')[1]?.split(' |')[0] || 'this area'
  
  return (
    <div className={cn('rounded-lg border border-gray-200 bg-white p-6', className)}>
      <h3 className="text-lg font-semibold text-gray-900">Service Coverage</h3>
      <div className="mt-4 space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-900">About Our Services</h4>
          <p className="mt-2 text-sm text-gray-600">
            {area.content.intro}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-900">Local Expertise</h4>
          <p className="mt-2 text-sm text-gray-600">
            {area.content.local_expertise}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-900">Service Highlights</h4>
          <p className="mt-2 text-sm text-gray-600">
            {area.content.services_highlight}
          </p>
        </div>
      </div>
    </div>
  )
} 