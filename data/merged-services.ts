import { ServicesData } from '@/types/services'
import areaContent from './area-content.json'

export const mergedServicesData: ServicesData = {
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
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey and risk assessment",
            "System design and specification",
            "Professional installation",
            "Testing and commissioning",
            "Documentation and handover"
          ]
        },
        {
          "id": "fire-extinguisher-supply",
          "name": "Fire Extinguisher Supply & Maintenance",
          "description": "Supply and maintenance of fire extinguishers and related equipment.",
          "features": [
            "Wide range of extinguisher types",
            "Regular maintenance checks",
            "Compliance certification",
            "Emergency replacement service",
            "Staff training"
          ],
          "technical_details": {
            "standards": [
              "BS 5306-3:2017",
              "BS 5306-8:2012"
            ],
            "extinguisher_types": [
              "Water",
              "Foam",
              "CO2",
              "Powder",
              "Wet Chemical"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial assessment",
            "Equipment supply",
            "Installation",
            "Regular maintenance",
            "Annual certification"
          ]
        },
        {
          "id": "emergency-lighting",
          "name": "Emergency Lighting",
          "description": "Installation and maintenance of emergency lighting systems.",
          "features": [
            "BS 5266 compliance",
            "LED technology",
            "Self-testing systems",
            "Battery backup",
            "Regular maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS 5266-1:2016",
              "BS EN 1838"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "fire-risk-assessment",
          "name": "Fire Risk Assessment",
          "description": "Professional fire risk assessments for businesses and organizations.",
          "features": [
            "Comprehensive assessment",
            "Regulatory compliance",
            "Action plan",
            "Follow-up support",
            "Documentation"
          ],
          "technical_details": {
            "standards": [
              "Regulatory Reform (Fire Safety) Order 2005",
              "BS 9999:2017"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial consultation",
            "Site inspection",
            "Risk assessment",
            "Report preparation",
            "Recommendations"
          ]
        },
        {
          "id": "fire-door-inspection",
          "name": "Fire Door Inspection",
          "description": "Professional inspection and maintenance of fire doors.",
          "features": [
            "FDIS certification",
            "Comprehensive inspection",
            "Maintenance recommendations",
            "Compliance reporting",
            "Remedial works"
          ],
          "technical_details": {
            "standards": [
              "BS 476-22",
              "BS EN 1634-1"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial inspection",
            "Defect identification",
            "Report preparation",
            "Maintenance planning",
            "Follow-up support"
          ]
        },
        {
          "id": "fire-risk-assessor",
          "name": "Fire Risk Assessor Services",
          "description": "Professional fire risk assessor services for businesses and organizations.",
          "features": [
            "Qualified assessors",
            "Comprehensive assessments",
            "Regulatory compliance",
            "Action plans",
            "Follow-up support"
          ],
          "technical_details": {
            "standards": [
              "Regulatory Reform (Fire Safety) Order 2005",
              "BS 9999:2017",
              "IFCC certification"
            ],
            "assessor_qualifications": [
              "IFCC Level 4",
              "IFCC Level 5",
              "NEBOSH Fire Safety"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial consultation",
            "Site inspection",
            "Risk assessment",
            "Report preparation",
            "Implementation support"
          ]
        },
        {
          "id": "fire-sprinkler-systems",
          "name": "Fire Sprinkler Systems",
          "description": "Installation and maintenance of fire sprinkler systems.",
          "features": [
            "BS EN 12845 compliance",
            "Wet and dry systems",
            "Pre-action systems",
            "Regular maintenance",
            "Emergency response"
          ],
          "technical_details": {
            "standards": [
              "BS EN 12845",
              "LPC Rules",
              "NFPA 13"
            ],
            "system_types": [
              "Wet pipe systems",
              "Dry pipe systems",
              "Pre-action systems",
              "Deluge systems",
              "ESFR systems"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "fire-suppression-systems",
          "name": "Fire Suppression Systems",
          "description": "Specialized fire suppression systems for high-risk areas.",
          "features": [
            "Gas suppression systems",
            "Foam suppression",
            "Water mist systems",
            "Regular maintenance",
            "Emergency response"
          ],
          "technical_details": {
            "standards": [
              "BS 5306-4",
              "BS EN 15004",
              "NFPA 2001"
            ],
            "system_types": [
              "CO2 suppression",
              "FM-200 systems",
              "Novec 1230",
              "Inergen systems",
              "Water mist systems"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Risk assessment",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "fire-compartmentation",
          "name": "Fire Compartmentation",
          "description": "Professional fire compartmentation services for buildings.",
          "features": [
            "Compartment surveys",
            "Passive fire protection",
            "Sealing services",
            "Compliance certification",
            "Remedial works"
          ],
          "technical_details": {
            "standards": [
              "Building Regulations",
              "BS 9999:2017",
              "BS 476"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial survey",
            "Design specification",
            "Implementation",
            "Testing",
            "Certification"
          ]
        },
        {
          "id": "fire-evacuation-systems",
          "name": "Fire Evacuation Systems",
          "description": "Installation and maintenance of fire evacuation systems.",
          "features": [
            "Voice alarm systems",
              "Emergency lighting",
              "Exit signage",
              "Regular testing",
              "Staff training"
          ],
          "technical_details": {
            "standards": [
              "BS 5839-8",
              "BS 5266",
              "BS 5499"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System design",
            "Installation",
            "Testing",
            "Staff training",
            "Maintenance"
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
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "System design",
            "Professional installation",
            "Testing and certification",
            "Documentation and handover"
          ]
        },
        {
          "id": "electrical-testing",
          "name": "Electrical Testing & Inspection",
          "description": "Comprehensive electrical testing and inspection services.",
          "features": [
            "EICR certification",
            "PAT testing",
            "Thermal imaging",
            "Load testing",
            "Compliance reporting"
          ],
          "technical_details": {
            "standards": [
              "BS 7671",
              "IET Code of Practice"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial assessment",
            "Testing",
            "Inspection",
            "Report preparation",
            "Recommendations"
          ]
        },
        {
          "id": "lighting-installation",
          "name": "Lighting Installation",
          "description": "Professional lighting installation and maintenance services.",
          "features": [
            "LED technology",
            "Energy efficiency",
            "Smart controls",
            "Emergency lighting",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS 7671",
              "BS 5266"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Design consultation",
            "Installation",
            "Testing",
            "Commissioning",
            "Maintenance"
          ]
        },
        {
          "id": "security-systems",
          "name": "Security Systems",
          "description": "Installation and maintenance of security systems.",
          "features": [
            "CCTV installation",
            "Access control",
            "Intruder alarms",
            "Remote monitoring",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS 8418",
              "BS EN 50131"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Security assessment",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "data-cabling",
          "name": "Data Cabling",
          "description": "Professional data cabling installation and maintenance.",
          "features": [
            "Structured cabling",
            "Network installation",
            "Testing",
            "Certification",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS 6701",
              "ISO/IEC 11801"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "Cable installation",
            "Testing",
            "Certification",
            "Documentation"
          ]
        },
        {
          "id": "electrical-maintenance",
          "name": "Electrical Maintenance",
          "description": "Comprehensive electrical maintenance services.",
          "features": [
            "Preventive maintenance",
            "Emergency repairs",
            "System upgrades",
            "Compliance checks",
            "Documentation"
          ],
          "technical_details": {
            "standards": [
              "BS 7671",
              "IET Guidance"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial assessment",
            "Maintenance planning",
            "Implementation",
            "Testing",
            "Documentation"
          ]
        },
        {
          "id": "power-distribution",
          "name": "Power Distribution",
          "description": "Installation and maintenance of power distribution systems.",
          "features": [
            "Switchgear installation",
            "Distribution boards",
            "Power monitoring",
            "Load balancing",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS EN 61439",
              "BS 7671"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System design",
            "Installation",
            "Testing",
            "Commissioning",
            "Maintenance"
          ]
        },
        {
          "id": "generator-installation",
          "name": "Generator Installation",
          "description": "Professional generator installation and maintenance.",
          "features": [
            "Standby generators",
            "ATS systems",
            "Load testing",
            "Regular maintenance",
            "Emergency response"
          ],
          "technical_details": {
            "standards": [
              "BS EN 60034",
              "BS 7698"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "ups-systems",
          "name": "UPS Systems",
          "description": "Uninterruptible Power Supply installation and maintenance.",
          "features": [
            "Online UPS",
            "Line interactive UPS",
            "Battery maintenance",
            "Load testing",
            "Remote monitoring"
          ],
          "technical_details": {
            "standards": [
              "BS EN 62040",
              "IEC 62040"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Load assessment",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "motor-control",
          "name": "Motor Control Systems",
          "description": "Installation and maintenance of motor control systems.",
          "features": [
            "VFD installation",
            "Soft starters",
            "Motor protection",
            "Control panels",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS EN 60204",
              "IEC 60034"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System design",
            "Installation",
            "Testing",
            "Commissioning",
            "Maintenance"
          ]
        },
        {
          "id": "lighting-control",
          "name": "Lighting Control Systems",
          "description": "Advanced lighting control system installation.",
          "features": [
            "DALI systems",
            "Smart controls",
            "Scene setting",
            "Energy monitoring",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "IEC 62386",
              "BS EN 60598"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System design",
            "Installation",
            "Programming",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "electrical-design",
          "name": "Electrical Design Services",
          "description": "Professional electrical design and consultancy.",
          "features": [
            "Load calculations",
            "Circuit design",
            "Cable sizing",
            "Protection coordination",
            "Documentation"
          ],
          "technical_details": {
            "standards": [
              "BS 7671",
              "IET Guidance"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial consultation",
            "Design development",
            "Review",
            "Implementation",
            "Documentation"
          ]
        },
        {
          "id": "power-factor-correction",
          "name": "Power Factor Correction",
          "description": "Installation and maintenance of power factor correction systems.",
          "features": [
            "Automatic PFC",
            "Fixed PFC",
            "Harmonic filtering",
            "Energy savings",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS EN 60831",
              "IEC 60831"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Load analysis",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "earthing-systems",
          "name": "Earthing Systems",
          "description": "Installation and maintenance of earthing systems.",
          "features": [
            "Earth electrode testing",
            "Bonding installation",
            "Lightning protection",
            "Compliance testing",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS 7430",
              "BS EN 62305"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "electrical-safety",
          "name": "Electrical Safety Services",
          "description": "Comprehensive electrical safety services.",
          "features": [
            "Arc flash studies",
            "Safety audits",
            "Training",
            "Documentation",
            "Compliance"
          ],
          "technical_details": {
            "standards": [
              "BS 7671",
              "HSE Guidance"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial assessment",
            "Implementation",
            "Training",
            "Documentation",
            "Follow-up"
          ]
        },
        {
          "id": "renewable-energy",
          "name": "Renewable Energy Systems",
          "description": "Installation and maintenance of renewable energy systems.",
          "features": [
            "Solar PV",
            "Wind turbines",
            "Battery storage",
            "Grid connection",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS EN 62446",
              "MCS Standards"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "ev-charging",
          "name": "EV Charging Installation",
          "description": "Installation of electric vehicle charging points.",
          "features": [
            "Rapid chargers",
            "Smart charging",
            "Load management",
            "Remote monitoring",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS EN 61851",
              "IEC 62196"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "building-management",
          "name": "Building Management Systems",
          "description": "Installation and maintenance of BMS systems.",
          "features": [
            "Energy monitoring",
            "HVAC control",
            "Lighting control",
            "Remote access",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS EN 15232",
              "ISO 16484"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System design",
            "Installation",
            "Programming",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "fire-alarm-electrical",
          "name": "Fire Alarm Electrical",
          "description": "Electrical installation for fire alarm systems.",
          "features": [
            "System design",
            "Cable installation",
            "Power supplies",
            "Testing",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS 5839",
              "BS 7671"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System design",
            "Installation",
            "Testing",
            "Commissioning",
            "Maintenance"
          ]
        },
        {
          "id": "emergency-lighting-electrical",
          "name": "Emergency Lighting Electrical",
          "description": "Electrical installation for emergency lighting systems.",
          "features": [
            "System design",
            "Cable installation",
            "Power supplies",
            "Testing",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS 5266",
              "BS 7671"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System design",
            "Installation",
            "Testing",
            "Commissioning",
            "Maintenance"
          ]
        },
        {
          "id": "industrial-control",
          "name": "Industrial Control Systems",
          "description": "Installation and maintenance of industrial control systems.",
          "features": [
            "PLC systems",
            "SCADA systems",
            "Motor control",
            "Safety systems",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS EN 60204",
              "IEC 61131"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System design",
            "Installation",
            "Programming",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "power-quality",
          "name": "Power Quality Services",
          "description": "Power quality monitoring and improvement services.",
          "features": [
            "Harmonic analysis",
            "Voltage monitoring",
            "Power factor correction",
            "Filter installation",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS EN 50160",
              "IEC 61000"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial assessment",
            "Monitoring",
            "Analysis",
            "Implementation",
            "Maintenance"
          ]
        },
        {
          "id": "electrical-test-equipment",
          "name": "Electrical Test Equipment",
          "description": "Supply and calibration of electrical test equipment.",
          "features": [
            "Equipment supply",
            "Calibration",
            "Training",
            "Maintenance",
            "Support"
          ],
          "technical_details": {
            "standards": [
              "BS EN 61010",
              "ISO 17025"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Equipment selection",
            "Supply",
            "Training",
            "Calibration",
            "Support"
          ]
        },
        {
          "id": "electrical-training",
          "name": "Electrical Training",
          "description": "Professional electrical training services.",
          "features": [
            "Technical training",
            "Safety training",
            "Certification",
            "Practical sessions",
            "Assessment"
          ],
          "technical_details": {
            "standards": [
              "City & Guilds",
              "EAL"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Training needs analysis",
            "Course development",
            "Delivery",
            "Assessment",
            "Certification"
          ]
        },
        {
          "id": "electrical-audit",
          "name": "Electrical Audit Services",
          "description": "Comprehensive electrical audit services.",
          "features": [
            "Energy audit",
            "Safety audit",
            "Compliance audit",
            "Recommendations",
            "Implementation"
          ],
          "technical_details": {
            "standards": [
              "BS 7671",
              "ISO 50001"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial assessment",
            "Audit",
            "Report",
            "Recommendations",
            "Implementation"
          ]
        },
        {
          "id": "electrical-project-management",
          "name": "Electrical Project Management",
          "description": "Professional electrical project management services.",
          "features": [
            "Project planning",
            "Resource management",
            "Budget control",
            "Quality assurance",
            "Documentation"
          ],
          "technical_details": {
            "standards": [
              "PRINCE2",
              "APM"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial consultation",
            "Planning",
            "Implementation",
            "Monitoring",
            "Completion"
          ]
        },
        {
          "id": "solar-pv-systems",
          "name": "Solar PV Systems",
          "description": "Complete solar photovoltaic system installation and maintenance.",
          "features": [
            "Residential systems",
            "Commercial systems",
            "Battery storage",
            "Grid connection",
            "Monitoring"
          ],
          "technical_details": {
            "standards": [
              "MCS Standards",
              "BS EN 62446",
              "DNO Requirements"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "wind-turbine-systems",
          "name": "Wind Turbine Systems",
          "description": "Installation and maintenance of wind turbine systems.",
          "features": [
            "Small wind turbines",
            "Grid connection",
            "Battery storage",
            "Monitoring",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "MCS Standards",
              "BS EN 61400",
              "DNO Requirements"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site assessment",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "battery-storage-systems",
          "name": "Battery Storage Systems",
          "description": "Installation of battery storage systems for renewable energy.",
          "features": [
            "Lithium-ion batteries",
            "Lead-acid batteries",
            "System integration",
            "Monitoring",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS EN 62619",
              "IEC 62619",
              "DNO Requirements"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Load assessment",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "heat-pump-systems",
          "name": "Heat Pump Systems",
          "description": "Electrical installation for heat pump systems.",
          "features": [
            "Air source heat pumps",
            "Ground source heat pumps",
            "System integration",
            "Controls",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "MCS Standards",
              "BS EN 14511",
              "DNO Requirements"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "electrical-products-supply",
          "name": "Electrical Products Supply",
          "description": "Supply of high-quality electrical products and equipment.",
          "features": [
            "Switchgear",
            "Distribution boards",
            "Cables and accessories",
            "Lighting products",
            "Control gear"
          ],
          "technical_details": {
            "standards": [
              "BS 7671",
              "BS EN Standards",
              "IEC Standards"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Product selection",
            "Supply",
            "Installation support",
            "Technical support",
            "Warranty"
          ]
        },
        {
          "id": "led-lighting-products",
          "name": "LED Lighting Products",
          "description": "Supply and installation of LED lighting products.",
          "features": [
            "Commercial lighting",
            "Industrial lighting",
            "Emergency lighting",
            "Controls",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS EN 60598",
              "BS EN 62031",
              "IEC 62471"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Product selection",
            "Supply",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "electrical-control-gear",
          "name": "Electrical Control Gear",
          "description": "Supply and installation of electrical control gear.",
          "features": [
            "Contactors",
            "Relays",
            "Circuit breakers",
            "Motor starters",
            "Control panels"
          ],
          "technical_details": {
            "standards": [
              "BS EN 60947",
              "IEC 60947",
              "BS 7671"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Product selection",
            "Supply",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "power-distribution-products",
          "name": "Power Distribution Products",
          "description": "Supply and installation of power distribution products.",
          "features": [
            "Switchgear",
            "Distribution boards",
            "Busbar systems",
            "Power monitoring",
            "Protection devices"
          ],
          "technical_details": {
            "standards": [
              "BS EN 61439",
              "IEC 61439",
              "BS 7671"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Product selection",
            "Supply",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "electrical-safety-products",
          "name": "Electrical Safety Products",
          "description": "Supply and installation of electrical safety products.",
          "features": [
            "RCDs",
            "RCBOs",
            "Surge protection",
            "Isolation devices",
            "Safety switches"
          ],
          "technical_details": {
            "standards": [
              "BS EN 61008",
              "BS EN 61009",
              "BS 7671"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Product selection",
            "Supply",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "renewable-energy-products",
          "name": "Renewable Energy Products",
          "description": "Supply and installation of renewable energy products.",
          "features": [
            "Solar panels",
            "Inverters",
            "Charge controllers",
            "Battery systems",
            "Monitoring equipment"
          ],
          "technical_details": {
            "standards": [
              "MCS Standards",
              "BS EN Standards",
              "IEC Standards"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Product selection",
            "Supply",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "smart-home-systems",
          "name": "Smart Home Systems",
          "description": "Installation and integration of smart home electrical systems.",
          "features": [
            "Home automation",
            "Smart lighting",
            "Energy monitoring",
            "Security integration",
            "Voice control"
          ],
          "technical_details": {
            "standards": [
              "BS 7671",
              "KNX Standards",
              "Zigbee Alliance"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System design",
            "Installation",
            "Configuration",
            "Testing",
            "Training"
          ]
        },
        {
          "id": "data-center-electrical",
          "name": "Data Center Electrical",
          "description": "Specialized electrical services for data centers.",
          "features": [
            "Power distribution",
            "UPS systems",
            "Generator backup",
            "Power monitoring",
            "Cooling systems"
          ],
          "technical_details": {
            "standards": [
              "Uptime Institute",
              "TIA-942",
              "BS 7671"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site assessment",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "industrial-automation",
          "name": "Industrial Automation",
          "description": "Electrical services for industrial automation systems.",
          "features": [
            "PLC systems",
            "Motor control",
            "Process control",
            "Safety systems",
            "Remote monitoring"
          ],
          "technical_details": {
            "standards": [
              "IEC 61131",
              "BS EN 60204",
              "ISO 13849"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System design",
            "Installation",
            "Programming",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "electrical-testing-equipment",
          "name": "Electrical Testing Equipment",
          "description": "Supply and calibration of electrical testing equipment.",
          "features": [
            "Multimeters",
            "Insulation testers",
            "Earth testers",
            "Power analyzers",
            "Calibration services"
          ],
          "technical_details": {
            "standards": [
              "BS EN 61010",
              "ISO 17025",
              "UKAS"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Equipment selection",
            "Supply",
            "Training",
            "Calibration",
            "Support"
          ]
        },
        {
          "id": "electrical-cable-management",
          "name": "Electrical Cable Management",
          "description": "Professional cable management solutions.",
          "features": [
            "Cable trays",
            "Conduit systems",
            "Trunking",
            "Cable routing",
            "Labeling"
          ],
          "technical_details": {
            "standards": [
              "BS EN 50085",
              "BS EN 61386",
              "BS 7671"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System design",
            "Installation",
            "Testing",
            "Documentation",
            "Maintenance"
          ]
        },
        {
          "id": "electrical-safety-training",
          "name": "Electrical Safety Training",
          "description": "Professional electrical safety training services.",
          "features": [
            "Basic safety",
            "High voltage safety",
            "Arc flash training",
            "Practical sessions",
            "Certification"
          ],
          "technical_details": {
            "standards": [
              "HSE Guidance",
              "BS 7671",
              "City & Guilds"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Training needs analysis",
            "Course development",
            "Delivery",
            "Assessment",
            "Certification"
          ]
        },
        {
          "id": "electrical-compliance",
          "name": "Electrical Compliance Services",
          "description": "Comprehensive electrical compliance services.",
          "features": [
            "Regulatory compliance",
            "Documentation",
            "Auditing",
            "Certification",
            "Training"
          ],
          "technical_details": {
            "standards": [
              "BS 7671",
              "Electricity at Work Regulations",
              "HSE Guidance"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial assessment",
            "Implementation",
            "Documentation",
            "Training",
            "Follow-up"
          ]
        },
        {
          "id": "electrical-energy-management",
          "name": "Electrical Energy Management",
          "description": "Professional energy management services.",
          "features": [
            "Energy monitoring",
            "Load analysis",
            "Efficiency improvements",
            "Reporting",
            "Implementation"
          ],
          "technical_details": {
            "standards": [
              "ISO 50001",
              "BS EN 16001",
              "BS 7671"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial assessment",
            "Monitoring",
            "Analysis",
            "Implementation",
            "Review"
          ]
        },
        {
          "id": "electrical-maintenance-contracts",
          "name": "Electrical Maintenance Contracts",
          "description": "Comprehensive electrical maintenance contracts.",
          "features": [
            "Preventive maintenance",
            "Emergency response",
            "Regular inspections",
            "Documentation",
            "Compliance"
          ],
          "technical_details": {
            "standards": [
              "BS 7671",
              "IET Guidance",
              "HSE Guidance"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Contract development",
            "Implementation",
            "Monitoring",
            "Reporting",
            "Review"
          ]
        },
        {
          "id": "electrical-project-consultancy",
          "name": "Electrical Project Consultancy",
          "description": "Professional electrical project consultancy services.",
          "features": [
            "Project planning",
            "Design review",
            "Implementation support",
            "Quality assurance",
            "Documentation"
          ],
          "technical_details": {
            "standards": [
              "BS 7671",
              "IET Guidance",
              "Project Management"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial consultation",
            "Planning",
            "Implementation",
            "Monitoring",
            "Completion"
          ]
        },
        {
          "id": "nurse-call-systems",
          "name": "Nurse Call Systems",
          "description": "Professional installation and maintenance of nurse call systems for healthcare facilities.",
          "features": [
            "Wireless and wired systems",
            "Patient monitoring integration",
            "Staff location tracking",
            "Emergency response features",
            "Regular maintenance"
          ],
          "technical_details": {
            "standards": [
              "HTM 08-03",
              "BS 5839-1:2017",
              "IEC 60601-1"
            ],
            "system_types": [
              "Basic nurse call",
              "Advanced nurse call",
              "Wireless nurse call",
              "Integrated nurse call",
              "Mobile nurse call"
            ],
            "maintenance_schedule": {
              "weekly": "System functionality check",
              "monthly": "Full system test",
              "quarterly": "Comprehensive maintenance",
              "annual": "Full system inspection"
            },
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial consultation",
            "System design",
            "Installation",
            "Staff training",
            "Ongoing maintenance"
          ]
        },
        {
          "id": "electrical-inspections",
          "name": "Electrical Inspections",
          "description": "Comprehensive electrical inspections and testing services.",
          "features": [
            "Periodic inspections",
            "Visual inspections",
            "Testing and certification",
            "Compliance reporting",
            "Remedial works"
          ],
          "technical_details": {
            "standards": [
              "BS 7671:2018",
              "IET Wiring Regulations",
              "Electricity at Work Regulations"
            ],
            "inspection_frequency": "Based on property type and usage",
            "testing_frequency": "As per BS 7671 requirements",
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial assessment",
            "Visual inspection",
            "Testing and measurements",
            "Report generation",
            "Remedial recommendations"
          ]
        },
        {
          "id": "eicr-reports",
          "name": "EICR Reports",
          "description": "Electrical Installation Condition Reports (EICR) for all property types.",
          "features": [
            "Detailed inspection",
            "Comprehensive testing",
            "Code classification",
            "Remedial recommendations",
            "Compliance certification"
          ],
          "technical_details": {
            "standards": [
              "BS 7671:2018",
              "IET Wiring Regulations",
              "Electricity at Work Regulations"
            ],
            "inspection_frequency": "As per BS 7671 requirements",
            "testing_frequency": "As per BS 7671 requirements",
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial assessment",
            "Visual inspection",
            "Testing and measurements",
            "Report generation",
            "Remedial recommendations"
          ]
        }
      ]
    },
    {
      "id": "safety-training",
      "name": "Safety Training",
      "description": "Comprehensive safety training courses for all industries",
      "services": [
        {
          "id": "fire-safety-training",
          "name": "Fire Safety Training",
          "description": "Professional fire safety training courses for all levels",
          "features": [
            "Fire Safety Awareness",
            "Fire Warden Training",
            "Fire Risk Assessment Training",
            "Fire Extinguisher Training",
            "Emergency Evacuation Training",
            "Fire Safety for Managers",
            "Fire Safety for Care Homes",
            "Fire Safety for Schools",
            "Fire Safety for Construction",
            "Fire Safety for Healthcare"
          ],
          "service_process": [
            "Initial assessment of training needs",
            "Course selection and scheduling",
            "Interactive training sessions",
            "Practical exercises and demonstrations",
            "Assessment and certification",
            "Follow-up support and refresher courses"
          ],
          "technical_details": {
            "standards": ["BS 9999", "Regulatory Reform (Fire Safety) Order 2005"],
            "certifications": [
              "IFE Level 3 Certificate in Fire Science",
              "IFSM Level 4 Diploma in Fire Safety Management",
              "NEBOSH National Certificate in Fire Safety and Risk Management",
              "IFSM Level 5 Diploma in Fire Safety Management",
              "IFE Level 4 Diploma in Fire Science and Fire Safety",
              "IFSM Level 6 Diploma in Fire Safety Management",
              "IFE Level 5 Diploma in Fire Science and Fire Safety",
              "IFSM Level 7 Diploma in Fire Safety Management",
              "IFE Level 6 Diploma in Fire Science and Fire Safety",
              "IFSM Level 8 Diploma in Fire Safety Management"
            ],
            "duration": "1-3 days",
            "max_participants": "20",
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          }
        },
        {
          "id": "electrical-safety-training",
          "name": "Electrical Safety Training",
          "description": "Comprehensive electrical safety training programs",
          "features": [
            "Basic Electrical Safety",
            "High Voltage Safety",
            "Electrical Risk Assessment",
            "PAT Testing Training",
            "Electrical Maintenance Safety",
            "Electrical Safety for Non-Electricians",
            "Electrical Safety for Managers",
            "Electrical Safety for Construction",
            "Electrical Safety for Maintenance",
            "Electrical Safety for Facilities"
          ],
          "service_process": [
            "Training needs analysis",
            "Course development",
            "Practical training sessions",
            "Assessment and evaluation",
            "Certification",
            "Ongoing support"
          ],
          "technical_details": {
            "standards": ["BS 7671", "Electricity at Work Regulations"],
            "certifications": [
              "City & Guilds 2382-22 18th Edition",
              "City & Guilds 2391-52 Inspection and Testing",
              "NEBOSH National Certificate in Electrical Safety",
              "City & Guilds 2391-50 Design and Verification",
              "City & Guilds 2396-01 Design and Verification",
              "City & Guilds 2391-51 Initial Verification",
              "City & Guilds 2391-52 Periodic Inspection",
              "City & Guilds 2391-53 Initial and Periodic",
              "City & Guilds 2391-54 Initial Verification",
              "City & Guilds 2391-55 Periodic Inspection"
            ],
            "duration": "1-5 days",
            "max_participants": "15",
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          }
        },
        {
          "id": "construction-safety-training",
          "name": "Construction Safety Training",
          "description": "Specialized safety training for construction industry",
          "features": [
            "Site Safety Awareness",
            "Working at Height Training",
            "Scaffolding Safety",
            "Excavation Safety",
            "Confined Spaces Training",
            "Construction Site Management",
            "Lifting Operations Safety",
            "Plant and Equipment Safety",
            "Demolition Safety",
            "Construction Health and Safety"
          ],
          "service_process": [
            "Site-specific risk assessment",
            "Training program development",
            "Practical training sessions",
            "Competency assessment",
            "Certification",
            "Refresher training"
          ],
          "technical_details": {
            "standards": ["CDM Regulations", "Construction Safety"],
            "certifications": [
              "CITB Site Safety Plus",
              "CITB SMSTS (Site Management Safety Training Scheme)",
              "NEBOSH Construction Certificate",
              "CITB SSSTS (Site Supervisor Safety Training Scheme)",
              "CITB Health and Safety Awareness",
              "CITB Temporary Works Coordinator",
              "CITB Temporary Works Supervisor",
              "CITB Confined Spaces",
              "CITB Working at Height",
              "CITB Manual Handling"
            ],
            "duration": "1-5 days",
            "max_participants": "20",
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          }
        },
        {
          "id": "health-safety-training",
          "name": "Health & Safety Training",
          "description": "Comprehensive health and safety training programs",
          "features": [
            "Health & Safety Awareness",
            "Risk Assessment Training",
            "Manual Handling Training",
            "First Aid Training",
            "Health & Safety Management",
            "COSHH Training",
            "Noise Awareness Training",
            "Vibration Awareness Training",
            "Stress Management Training",
            "Health & Safety for Directors"
          ],
          "service_process": [
            "Training needs analysis",
            "Course development",
            "Interactive training sessions",
            "Assessment and evaluation",
            "Certification",
            "Ongoing support"
          ],
          "technical_details": {
            "standards": ["Health and Safety at Work Act", "Management Regulations"],
            "certifications": [
              "IOSH Managing Safely",
              "IOSH Working Safely",
              "NEBOSH National General Certificate",
              "IOSH Safety for Executives and Directors",
              "IOSH Safety for Senior Executives",
              "IOSH Managing Safely Refresher",
              "IOSH Working Safely Refresher",
              "IOSH Managing Occupational Health and Wellbeing",
              "IOSH Managing Safely in Construction",
              "IOSH Managing Safely in Manufacturing"
            ],
            "duration": "1-5 days",
            "max_participants": "20",
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          }
        },
        {
          "id": "specialized-safety-training",
          "name": "Specialized Safety Training",
          "description": "Advanced and specialized safety training courses",
          "features": [
            "Confined Spaces Training",
            "Working at Height Training",
            "Lifting Operations Safety",
            "Pressure Systems Safety",
            "Chemical Safety Training",
            "Radiation Safety Training",
            "Asbestos Awareness Training",
            "Noise and Vibration Training",
            "Environmental Safety Training",
            "Process Safety Training"
          ],
          "service_process": [
            "Specialized assessment",
            "Customized training development",
            "Expert-led training sessions",
            "Practical exercises",
            "Competency assessment",
            "Specialized certification"
          ],
          "technical_details": {
            "standards": ["Industry-specific regulations"],
            "certifications": [
              "UKATA Asbestos Awareness",
              "CITB Confined Spaces",
              "LOLER Competent Person",
              "UKATA Non-Licensed Asbestos Work",
              "UKATA Licensed Asbestos Work",
              "CITB Working at Height",
              "CITB Manual Handling",
              "CITB Abrasive Wheels",
              "CITB Fire Safety",
              "CITB First Aid"
            ],
            "duration": "1-5 days",
            "max_participants": "15",
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          }
        },
        {
          "id": "management-safety-training",
          "name": "Management Safety Training",
          "description": "Safety training for managers and supervisors",
          "features": [
            "Safety Leadership Training",
            "Incident Investigation Training",
            "Safety Culture Development",
            "Safety Management Systems",
            "Safety Auditing Training",
            "Safety Committee Training",
            "Safety Policy Development",
            "Safety Performance Management",
            "Safety Communication Training",
            "Safety Budgeting and Planning"
          ],
          "service_process": [
            "Management assessment",
            "Leadership program development",
            "Interactive workshops",
            "Case studies and analysis",
            "Management certification",
            "Ongoing support"
          ],
          "technical_details": {
            "standards": ["ISO 45001", "Management Regulations"],
            "certifications": [
              "NEBOSH Diploma in Occupational Health and Safety",
              "IOSH Managing Safely",
              "ILM Level 5 Certificate in Safety Leadership",
              "NEBOSH International Diploma",
              "NEBOSH Environmental Diploma",
              "NEBOSH Construction Diploma",
              "NEBOSH Fire Diploma",
              "NEBOSH Oil and Gas Diploma",
              "NEBOSH Environmental Certificate",
              "NEBOSH Construction Certificate"
            ],
            "duration": "2-5 days",
            "max_participants": "15",
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          }
        },
        {
          "id": "industry-specific-training",
          "name": "Industry-Specific Training",
          "description": "Tailored safety training for specific industries",
          "features": [
            "Healthcare Safety Training",
            "Manufacturing Safety Training",
            "Retail Safety Training",
            "Hospitality Safety Training",
            "Education Safety Training",
            "Transport Safety Training",
            "Warehouse Safety Training",
            "Office Safety Training",
            "Laboratory Safety Training",
            "Construction Safety Training"
          ],
          "service_process": [
            "Industry analysis",
            "Customized program development",
            "Industry-specific training",
            "Practical applications",
            "Industry certification",
            "Ongoing support"
          ],
          "technical_details": {
            "standards": ["Industry-specific regulations"],
            "certifications": [
              "CQC Compliance for Healthcare",
              "BSC Food Safety",
              "RTITB Warehouse Safety",
              "CQC Fundamental Standards",
              "CQC Key Lines of Enquiry",
              "BSC Level 2 Food Safety",
              "BSC Level 3 Food Safety",
              "BSC Level 4 Food Safety",
              "RTITB Forklift Operator",
              "RTITB Reach Truck Operator"
            ],
            "duration": "1-3 days",
            "max_participants": "20",
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          }
        },
        {
          "id": "emergency-response-training",
          "name": "Emergency Response Training",
          "description": "Training for emergency situations and crisis management",
          "features": [
            "Emergency First Aid",
            "Emergency Evacuation",
            "Crisis Management",
            "Incident Command Training",
            "Emergency Planning",
            "Business Continuity Training",
            "Disaster Recovery Training",
            "Emergency Communication",
            "Emergency Team Training",
            "Emergency Drills and Exercises"
          ],
          "service_process": [
            "Emergency assessment",
            "Response program development",
            "Practical training sessions",
            "Emergency scenario exercises",
            "Response certification",
            "Regular drills and updates"
          ],
          "technical_details": {
            "standards": ["Emergency Planning", "Civil Contingencies"],
            "certifications": [
              "Emergency Planning Society Certificate",
              "HSE First Aid at Work",
              "ISO 22301 Business Continuity",
              "HSE Emergency First Aid at Work",
              "HSE Paediatric First Aid",
              "HSE First Aid at Work Requalification",
              "HSE Emergency First Aid at Work Requalification",
              "HSE Paediatric First Aid Requalification",
              "HSE First Aid at Work Annual Refresher",
              "HSE Emergency First Aid at Work Annual Refresher"
            ],
            "duration": "1-3 days",
            "max_participants": "20",
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          }
        },
        {
          "id": "environmental-safety-training",
          "name": "Environmental Safety Training",
          "description": "Training for environmental protection and sustainability",
          "features": [
            "Environmental Awareness",
            "Waste Management Training",
            "Pollution Prevention",
            "Environmental Management",
            "Sustainable Practices",
            "Environmental Legislation",
            "Carbon Management",
            "Energy Efficiency",
            "Environmental Auditing",
            "Environmental Impact Assessment"
          ],
          "service_process": [
            "Environmental assessment",
            "Training program development",
            "Interactive sessions",
            "Practical applications",
            "Environmental certification",
            "Ongoing support"
          ],
          "technical_details": {
            "standards": ["ISO 14001", "Environmental Regulations"],
            "certifications": [
              "IEMA Certificate in Environmental Management",
              "CIWEM Environmental Awareness",
              "ISO 14001 Lead Auditor",
              "IEMA Foundation Certificate",
              "IEMA Associate Certificate",
              "IEMA Practitioner Certificate",
              "IEMA Lead Auditor",
              "CIWEM Water and Environmental Management",
              "CIWEM Flood Risk Management",
              "CIWEM Water Resources Management"
            ],
            "duration": "1-3 days",
            "max_participants": "20",
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          }
        },
        {
          "id": "technical-safety-training",
          "name": "Technical Safety Training",
          "description": "Advanced technical safety training programs",
          "features": [
            "Process Safety Engineering",
            "Safety Instrumented Systems",
            "Hazardous Area Classification",
            "Explosion Protection",
            "Safety Integrity Levels",
            "Functional Safety",
            "Risk Assessment Methods",
            "Safety Case Development",
            "Safety Critical Systems",
            "Technical Safety Management"
          ],
          "service_process": [
            "Technical assessment",
            "Advanced program development",
            "Expert-led training",
            "Technical exercises",
            "Advanced certification",
            "Technical support"
          ],
          "technical_details": {
            "standards": ["IEC 61508", "IEC 61511"],
            "certifications": [
              "TÜV Functional Safety Engineer",
              "Exida SIL Verification",
              "IEC 61508 Safety Integrity Level",
              "TÜV Functional Safety Professional",
              "TÜV Functional Safety Expert",
              "TÜV Functional Safety Manager",
              "TÜV Functional Safety Auditor",
              "Exida SIL Verification Expert",
              "Exida SIL Verification Professional",
              "Exida SIL Verification Manager"
            ],
            "duration": "2-5 days",
            "max_participants": "15",
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          }
        }
      ]
    },
    {
      "id": "surveyors",
      "name": "Surveyors",
      "description": "Professional surveying services for property assessment and evaluation",
      "services": [
        {
          "id": "building-survey",
          "name": "Building Survey",
          "description": "Comprehensive building inspection and assessment",
          "features": [
            "Detailed property inspection",
            "Structural assessment",
            "Defect identification",
            "Maintenance advice",
            "Valuation guidance"
          ],
          "technical_details": {
            "standards": [
              "RICS Home Survey Standard",
              "Building Regulations"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial consultation",
            "Site inspection",
            "Report preparation",
            "Findings presentation",
            "Follow-up support"
          ]
        },
        {
          "id": "homebuyer-survey",
          "name": "Homebuyer Survey",
          "description": "Detailed property inspection for homebuyers",
          "features": [
            "Property condition assessment",
            "Valuation advice",
            "Repair recommendations",
            "Legal issues identification",
            "Insurance guidance"
          ],
          "technical_details": {
            "standards": [
              "RICS Home Survey Standard"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Property inspection",
            "Report preparation",
            "Findings discussion",
            "Recommendations",
            "Follow-up support"
          ]
        }
      ]
    },
    {
      "id": "structural-engineers",
      "name": "Structural Engineers",
      "description": "Expert structural engineering services",
      "services": [
        {
          "id": "structural-inspection",
          "name": "Structural Inspection",
          "description": "Comprehensive structural inspection services",
          "features": [
            "Structural assessment",
            "Defect analysis",
            "Repair recommendations",
            "Safety evaluation",
            "Compliance checking"
          ],
          "technical_details": {
            "standards": [
              "Eurocodes",
              "Building Regulations"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site inspection",
            "Analysis",
            "Report preparation",
            "Recommendations",
            "Implementation support"
          ]
        }
      ]
    },
    {
      "id": "security",
      "name": "Security Products & Services",
      "description": "Comprehensive security solutions for businesses and organizations",
      "services": [
        {
          "id": "cctv-systems",
          "name": "CCTV Systems",
          "description": "Professional CCTV system installation and maintenance.",
          "features": [
            "HD cameras",
            "IP cameras",
            "Remote viewing",
            "Motion detection",
            "Cloud storage"
          ],
          "technical_details": {
            "standards": [
              "BS EN 62676",
              "BS 8418",
              "IEC 62676"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "access-control",
          "name": "Access Control Systems",
          "description": "Professional access control system installation and maintenance.",
          "features": [
            "Card readers",
            "Biometric systems",
            "Keypad entry",
            "Remote access",
            "Integration"
          ],
          "technical_details": {
            "standards": [
              "BS EN 60839",
              "BS 7273",
              "IEC 60839"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System design",
            "Installation",
            "Programming",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "intruder-alarms",
          "name": "Intruder Alarm Systems",
          "description": "Professional intruder alarm system installation and maintenance.",
          "features": [
            "Wireless systems",
            "Wired systems",
            "Remote monitoring",
            "Police response",
            "Integration"
          ],
          "technical_details": {
            "standards": [
              "BS EN 50131",
              "PD 6662",
              "IEC 60839"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "System design",
            "Installation",
            "Testing",
            "Maintenance"
          ]
        },
        {
          "id": "fire-alarm-security",
          "name": "Fire Alarm Security",
          "description": "Professional fire alarm system installation and maintenance.",
          "features": [
            "Addressable systems",
            "Conventional systems",
            "Remote monitoring",
            "Integration",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS 5839",
              "BS EN 54",
              "IEC 60839"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System design",
            "Installation",
            "Testing",
            "Commissioning",
            "Maintenance"
          ]
        },
        {
          "id": "security-lighting",
          "name": "Security Lighting",
          "description": "Professional security lighting installation and maintenance.",
          "features": [
            "LED floodlights",
            "Motion sensors",
            "Dusk-to-dawn",
            "Remote control",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS EN 60598",
              "BS 5266",
              "IEC 60598"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "Installation",
            "Testing",
            "Commissioning",
            "Maintenance"
          ]
        },
        {
          "id": "security-gates",
          "name": "Security Gates",
          "description": "Professional security gate installation and maintenance.",
          "features": [
            "Automatic gates",
            "Manual gates",
            "Access control",
            "Remote operation",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS EN 13241",
              "BS 7671",
              "IEC 60364"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "Installation",
            "Testing",
            "Commissioning",
            "Maintenance"
          ]
        },
        {
          "id": "security-barriers",
          "name": "Security Barriers",
          "description": "Professional security barrier installation and maintenance.",
          "features": [
            "Bollards",
            "Rising barriers",
            "Access control",
            "Remote operation",
            "Maintenance"
          ],
          "technical_details": {
            "standards": [
              "BS EN 1317",
              "BS 7671",
              "IEC 60364"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Site survey",
            "Installation",
            "Testing",
            "Commissioning",
            "Maintenance"
          ]
        },
        {
          "id": "security-monitoring",
          "name": "Security Monitoring",
          "description": "Professional security monitoring services.",
          "features": [
            "24/7 monitoring",
            "Remote access",
            "Alarm response",
            "Video verification",
            "Reporting"
          ],
          "technical_details": {
            "standards": [
              "BS 8418",
              "BS EN 50136",
              "IEC 60839"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "System setup",
            "Monitoring",
            "Response",
            "Reporting",
            "Review"
          ]
        },
        {
          "id": "security-training",
          "name": "Security Training",
          "description": "Professional security training services.",
          "features": [
            "System operation",
            "Emergency procedures",
            "Maintenance training",
            "Certification",
            "Refresher courses"
          ],
          "technical_details": {
            "standards": [
              "BS 7499",
              "BS 7858",
              "SIA Standards"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Training needs analysis",
            "Course development",
            "Delivery",
            "Assessment",
            "Certification"
          ]
        },
        {
          "id": "security-risk-assessment",
          "name": "Security Risk Assessment",
          "description": "Professional security risk assessment services.",
          "features": [
            "Site assessment",
            "Risk analysis",
            "Recommendations",
            "Implementation",
            "Review"
          ],
          "technical_details": {
            "standards": [
              "BS 7499",
              "BS 7858",
              "SIA Standards"
            ],
            "equipment": [],
            "prerequisites": [],
            "assessment_method": "",
            "renewal_period": ""
          },
          "service_process": [
            "Initial assessment",
            "Risk analysis",
            "Report preparation",
            "Implementation",
            "Review"
          ]
        }
      ]
    }
  ],
  "area_content": areaContent.areas
} 