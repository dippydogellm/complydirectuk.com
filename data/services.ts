import { ServicesData } from '@/types/services'

export const servicesData: ServicesData = {
  "categories": [
    {
      "id": "fire-protection",
      "name": "Fire Protection",
      "description": "Comprehensive fire protection services for businesses and organizations",
      "services": [
        {
          "id": "fire-alarm-installation",
          "name": "Fire Alarm Installation",
          "description": "Professional installation of fire alarm systems compliant with BS 5839 standards.",
          "features": [
            "Custom system design",
            "Professional installation",
            "Testing and commissioning",
            "Documentation and certification",
            "Staff training"
          ],
          "technical_details": {
            "standards": [
              "BS 5839-1:2017",
              "BS EN 54"
            ],
            "system_types": [
              "Conventional fire alarms",
              "Addressable fire alarms",
              "Wireless fire alarms",
              "Aspirating smoke detection",
              "Beam detection systems"
            ]
          },
          "service_process": [
            "Site survey and risk assessment",
            "System design and specification",
            "Professional installation",
            "Testing and commissioning",
            "Documentation and handover"
          ]
        }
      ]
    },
    {
      "id": "electrical",
      "name": "Electrical Services",
      "description": "Professional electrical services for commercial and industrial properties",
      "services": [
        {
          "id": "consumer-unit-upgrades",
          "name": "Consumer Unit Upgrades",
          "description": "Professional upgrade and installation of consumer units to meet current regulations.",
          "features": [
            "Modern consumer unit installation",
            "Circuit protection",
            "Safety compliance",
            "Testing and certification",
            "Documentation"
          ],
          "technical_details": {
            "standards": [
              "BS 7671",
              "IET Wiring Regulations"
            ]
          },
          "service_process": [
            "Site survey",
            "System design",
            "Professional installation",
            "Testing and certification",
            "Documentation and handover"
          ]
        }
      ]
    }
  ]
} 