const fs = require('fs');
const path = require('path');

const servicesData = {
  categories: [
    {
      id: "fire-protection",
      name: "Fire Protection",
      description: "Comprehensive fire protection services for businesses and organizations",
      services: [
        {
          id: "fire-alarm-installation",
          name: "Fire Alarm Installation",
          description: "Professional installation of fire alarm systems compliant with BS 5839 standards.",
          features: [
            "Custom system design",
            "Professional installation",
            "Testing and commissioning",
            "Documentation and certification",
            "Staff training"
          ],
          technical_details: {
            standards: ["BS 5839-1:2017", "BS EN 54"],
            system_types: [
              "Conventional fire alarms",
              "Addressable fire alarms",
              "Wireless fire alarms",
              "Aspirating smoke detection",
              "Beam detection systems"
            ]
          },
          service_process: [
            "Site survey and risk assessment",
            "System design and specification",
            "Professional installation",
            "Testing and commissioning",
            "Documentation and handover"
          ]
        },
        {
          id: "fire-alarm-maintenance",
          name: "Fire Alarm Maintenance",
          description: "Regular maintenance services to ensure your fire alarm system remains fully operational.",
          features: [
            "Scheduled maintenance visits",
            "System testing",
            "Component replacement",
            "Performance optimization",
            "Compliance documentation"
          ],
          technical_details: {
            maintenance_schedule: {
              weekly: "Basic testing",
              monthly: "System checks",
              quarterly: "Comprehensive inspection",
              annual: "Full system test and certification"
            }
          },
          service_process: [
            "Regular maintenance visits",
            "System testing and inspection",
            "Component replacement if needed",
            "Documentation and reporting"
          ]
        },
        {
          id: "fire-alarm-servicing",
          name: "Fire Alarm Servicing",
          description: "Professional servicing of fire alarm systems to maintain optimal performance.",
          features: [
            "System inspection",
            "Component testing",
            "Performance optimization",
            "Fault diagnosis",
            "Preventive maintenance"
          ],
          technical_details: {
            service_frequency: "Monthly or quarterly",
            compliance: "BS 5839-1:2017"
          },
          service_process: [
            "System inspection",
            "Component testing",
            "Performance optimization",
            "Documentation and reporting"
          ]
        },
        {
          id: "fire-alarm-inspections",
          name: "Fire Alarm Inspections",
          description: "Thorough inspections of fire alarm systems to ensure compliance and functionality.",
          features: [
            "Comprehensive system inspection",
            "Component testing",
            "Compliance verification",
            "Documentation review",
            "Recommendations report"
          ],
          technical_details: {
            inspection_frequency: "Annual",
            standards: ["BS 5839-1:2017", "Regulatory Reform (Fire Safety) Order 2005"]
          },
          service_process: [
            "System inspection",
            "Component testing",
            "Compliance verification",
            "Documentation and reporting"
          ]
        },
        {
          id: "fire-alarm-testing",
          name: "Fire Alarm Testing",
          description: "Regular testing of fire alarm systems to ensure proper functionality.",
          features: [
            "System functionality testing",
            "Component testing",
            "Performance verification",
            "Documentation",
            "Staff training"
          ],
          technical_details: {
            testing_frequency: "Weekly and monthly",
            standards: ["BS 5839-1:2017"]
          },
          service_process: [
            "System testing",
            "Component testing",
            "Performance verification",
            "Documentation and reporting"
          ]
        },
        {
          id: "emergency-lighting-installation",
          name: "Emergency Lighting Installation",
          description: "Professional installation of emergency lighting systems compliant with BS 5266.",
          features: [
            "System design",
            "Professional installation",
            "Testing and commissioning",
            "Documentation",
            "Staff training"
          ],
          technical_details: {
            standards: ["BS 5266-1:2016", "BS EN 1838"],
            system_types: [
              "Maintained emergency lighting",
              "Non-maintained emergency lighting",
              "Sustained emergency lighting"
            ]
          },
          service_process: [
            "Site survey",
            "System design",
            "Professional installation",
            "Testing and commissioning",
            "Documentation and handover"
          ]
        },
        {
          id: "emergency-lighting-maintenance",
          name: "Emergency Lighting Maintenance",
          description: "Regular maintenance of emergency lighting systems to ensure proper functionality.",
          features: [
            "Scheduled maintenance",
            "System testing",
            "Component replacement",
            "Performance optimization",
            "Documentation"
          ],
          technical_details: {
            maintenance_schedule: {
              monthly: "System testing",
              quarterly: "Comprehensive inspection",
              annual: "Full system test"
            }
          },
          service_process: [
            "Regular maintenance visits",
            "System testing",
            "Component replacement if needed",
            "Documentation and reporting"
          ]
        },
        {
          id: "emergency-lighting-testing",
          name: "Emergency Lighting Testing",
          description: "Regular testing of emergency lighting systems to ensure compliance and functionality.",
          features: [
            "System testing",
            "Component testing",
            "Performance verification",
            "Documentation",
            "Staff training"
          ],
          technical_details: {
            testing_frequency: "Monthly and annual",
            standards: ["BS 5266-1:2016"]
          },
          service_process: [
            "System testing",
            "Component testing",
            "Performance verification",
            "Documentation and reporting"
          ]
        },
        {
          id: "fire-risk-assessments",
          name: "Fire Risk Assessments",
          description: "Comprehensive fire risk assessments conducted by qualified assessors.",
          features: [
            "Site inspection",
            "Risk evaluation",
            "Recommendations report",
            "Action plan",
            "Documentation"
          ],
          technical_details: {
            standards: ["Regulatory Reform (Fire Safety) Order 2005"],
            assessment_frequency: "Annual or when significant changes occur"
          },
          service_process: [
            "Site inspection",
            "Risk evaluation",
            "Recommendations development",
            "Documentation and reporting"
          ]
        },
        {
          id: "fire-safety-audits",
          name: "Fire Safety Audits",
          description: "Thorough audits of fire safety measures and compliance.",
          features: [
            "Compliance checking",
            "Documentation review",
            "System inspection",
            "Recommendations report",
            "Action plan"
          ],
          technical_details: {
            standards: ["Regulatory Reform (Fire Safety) Order 2005"],
            audit_frequency: "Annual"
          },
          service_process: [
            "Site inspection",
            "Documentation review",
            "Compliance checking",
            "Recommendations development",
            "Documentation and reporting"
          ]
        },
        {
          id: "fire-safety-consultancy",
          name: "Fire Safety Consultancy",
          description: "Expert advice on fire safety measures and compliance.",
          features: [
            "Expert advice",
            "Compliance guidance",
            "System recommendations",
            "Documentation review",
            "Action planning"
          ],
          technical_details: {
            standards: ["Regulatory Reform (Fire Safety) Order 2005"],
            consultancy_areas: [
              "System design",
              "Compliance",
              "Risk management",
              "Documentation"
            ]
          },
          service_process: [
            "Initial consultation",
            "Site inspection",
            "Recommendations development",
            "Action planning",
            "Documentation and reporting"
          ]
        },
        {
          id: "fire-safety-training",
          name: "Fire Safety Training",
          description: "Comprehensive fire safety training for staff and management.",
          features: [
            "Fire awareness training",
            "Fire marshal training",
            "Evacuation procedures",
            "Practical exercises",
            "Documentation"
          ],
          technical_details: {
            training_types: [
              "Fire awareness",
              "Fire marshal",
              "Fire warden",
              "Management training"
            ],
            certification: "Recognized certificates provided"
          },
          service_process: [
            "Training needs assessment",
            "Course delivery",
            "Practical exercises",
            "Assessment",
            "Certification"
          ]
        },
        {
          id: "fire-extinguisher-servicing",
          name: "Fire Extinguisher Servicing",
          description: "Regular servicing and maintenance of fire extinguishers.",
          features: [
            "Visual inspection",
            "Pressure testing",
            "Component replacement",
            "Refilling",
            "Documentation"
          ],
          technical_details: {
            service_frequency: "Annual",
            standards: ["BS 5306-3:2017"]
          },
          service_process: [
            "Visual inspection",
            "Pressure testing",
            "Component replacement if needed",
            "Documentation and reporting"
          ]
        },
        {
          id: "fire-extinguisher-installation",
          name: "Fire Extinguisher Installation",
          description: "Professional installation of fire extinguishers and equipment.",
          features: [
            "Site survey",
            "Equipment selection",
            "Professional installation",
            "Staff training",
            "Documentation"
          ],
          technical_details: {
            standards: ["BS 5306-3:2017"],
            equipment_types: [
              "Water",
              "Foam",
              "CO2",
              "Dry powder",
              "Wet chemical"
            ]
          },
          service_process: [
            "Site survey",
            "Equipment selection",
            "Professional installation",
            "Staff training",
            "Documentation and handover"
          ]
        },
        {
          id: "fire-extinguisher-maintenance",
          name: "Fire Extinguisher Maintenance",
          description: "Regular maintenance of fire extinguishers to ensure proper functionality.",
          features: [
            "Visual inspection",
            "Pressure testing",
            "Component replacement",
            "Refilling",
            "Documentation"
          ],
          technical_details: {
            maintenance_frequency: "Annual",
            standards: ["BS 5306-3:2017"]
          },
          service_process: [
            "Visual inspection",
            "Pressure testing",
            "Component replacement if needed",
            "Documentation and reporting"
          ]
        },
        {
          id: "fire-suppression-system-installation",
          name: "Fire Suppression System Installation",
          description: "Professional installation of fire suppression systems.",
          features: [
            "System design",
            "Professional installation",
            "Testing and commissioning",
            "Staff training",
            "Documentation"
          ],
          technical_details: {
            standards: ["BS 7273-1:2006"],
            system_types: [
              "Gas suppression",
              "Foam suppression",
              "Water mist",
              "Sprinkler systems"
            ]
          },
          service_process: [
            "Site survey",
            "System design",
            "Professional installation",
            "Testing and commissioning",
            "Documentation and handover"
          ]
        },
        {
          id: "fire-suppression-system-servicing",
          name: "Fire Suppression System Servicing",
          description: "Regular servicing of fire suppression systems.",
          features: [
            "System inspection",
            "Component testing",
            "Performance optimization",
            "Documentation",
            "Staff training"
          ],
          technical_details: {
            service_frequency: "Annual",
            standards: ["BS 7273-1:2006"]
          },
          service_process: [
            "System inspection",
            "Component testing",
            "Performance optimization",
            "Documentation and reporting"
          ]
        },
        {
          id: "fire-door-inspections",
          name: "Fire Door Inspections",
          description: "Thorough inspections of fire doors to ensure compliance and functionality.",
          features: [
            "Visual inspection",
            "Component testing",
            "Compliance verification",
            "Documentation",
            "Recommendations"
          ],
          technical_details: {
            inspection_frequency: "Annual",
            standards: ["BS 8214:2016"]
          },
          service_process: [
            "Visual inspection",
            "Component testing",
            "Compliance verification",
            "Documentation and reporting"
          ]
        },
        {
          id: "fire-door-maintenance",
          name: "Fire Door Maintenance",
          description: "Regular maintenance of fire doors to ensure proper functionality.",
          features: [
            "Visual inspection",
            "Component replacement",
            "Performance optimization",
            "Documentation",
            "Staff training"
          ],
          technical_details: {
            maintenance_frequency: "Annual",
            standards: ["BS 8214:2016"]
          },
          service_process: [
            "Visual inspection",
            "Component replacement if needed",
            "Performance optimization",
            "Documentation and reporting"
          ]
        },
        {
          id: "fire-evacuation-planning",
          name: "Fire Evacuation Planning",
          description: "Development of comprehensive fire evacuation plans.",
          features: [
            "Site assessment",
            "Plan development",
            "Staff training",
            "Documentation",
            "Regular review"
          ],
          technical_details: {
            standards: ["Regulatory Reform (Fire Safety) Order 2005"],
            plan_components: [
              "Evacuation routes",
              "Assembly points",
              "Staff responsibilities",
              "Emergency procedures"
            ]
          },
          service_process: [
            "Site assessment",
            "Plan development",
            "Staff training",
            "Documentation and review"
          ]
        },
        {
          id: "fire-safety-management",
          name: "Fire Safety Management",
          description: "Comprehensive fire safety management services.",
          features: [
            "Policy development",
            "Risk management",
            "Staff training",
            "Documentation",
            "Regular review"
          ],
          technical_details: {
            standards: ["Regulatory Reform (Fire Safety) Order 2005"],
            management_areas: [
              "Policy development",
              "Risk management",
              "Staff training",
              "Documentation"
            ]
          },
          service_process: [
            "Initial assessment",
            "Policy development",
            "Implementation",
            "Regular review",
            "Documentation and reporting"
          ]
        },
        {
          id: "fire-safety-compliance-support",
          name: "Fire Safety Compliance Support",
          description: "Support to ensure compliance with fire safety regulations.",
          features: [
            "Compliance checking",
            "Documentation review",
            "Recommendations",
            "Action planning",
            "Regular review"
          ],
          technical_details: {
            standards: ["Regulatory Reform (Fire Safety) Order 2005"],
            compliance_areas: [
              "Documentation",
              "Systems",
              "Procedures",
              "Training"
            ]
          },
          service_process: [
            "Initial assessment",
            "Compliance checking",
            "Recommendations development",
            "Action planning",
            "Regular review"
          ]
        },
        {
          id: "fire-marshal-training",
          name: "Fire Marshal Training",
          description: "Comprehensive training for fire marshals.",
          features: [
            "Fire safety theory",
            "Practical exercises",
            "Evacuation procedures",
            "Documentation",
            "Certification"
          ],
          technical_details: {
            training_duration: "Half day",
            certification: "Recognized certificate provided",
            refresher_frequency: "Annual"
          },
          service_process: [
            "Theory training",
            "Practical exercises",
            "Assessment",
            "Certification"
          ]
        },
        {
          id: "fire-safety-signage-installation",
          name: "Fire Safety Signage Installation",
          description: "Professional installation of fire safety signs.",
          features: [
            "Site survey",
            "Sign selection",
            "Professional installation",
            "Documentation",
            "Regular review"
          ],
          technical_details: {
            standards: ["BS 5499", "Health and Safety (Safety Signs and Signals) Regulations 1996"],
            sign_types: [
              "Fire exit signs",
              "Fire equipment signs",
              "Warning signs",
              "Prohibition signs"
            ]
          },
          service_process: [
            "Site survey",
            "Sign selection",
            "Professional installation",
            "Documentation and review"
          ]
        },
        {
          id: "fire-drill-coordination",
          name: "Fire Drill Coordination",
          description: "Professional coordination of fire drills.",
          features: [
            "Drill planning",
            "Staff coordination",
            "Performance evaluation",
            "Documentation",
            "Recommendations"
          ],
          technical_details: {
            drill_frequency: "Annual minimum",
            documentation: "Drill reports provided"
          },
          service_process: [
            "Drill planning",
            "Staff coordination",
            "Performance evaluation",
            "Documentation and recommendations"
          ]
        },
        {
          id: "fire-alarm-system-upgrades",
          name: "Fire Alarm System Upgrades",
          description: "Professional upgrading of fire alarm systems.",
          features: [
            "System assessment",
            "Upgrade planning",
            "Professional installation",
            "Testing and commissioning",
            "Documentation"
          ],
          technical_details: {
            standards: ["BS 5839-1:2017"],
            upgrade_types: [
              "System replacement",
              "Component upgrades",
              "Technology updates",
              "Integration upgrades"
            ]
          },
          service_process: [
            "System assessment",
            "Upgrade planning",
            "Professional installation",
            "Testing and commissioning",
            "Documentation and handover"
          ]
        },
        {
          id: "emergency-lighting-upgrades",
          name: "Emergency Lighting Upgrades",
          description: "Professional upgrading of emergency lighting systems.",
          features: [
            "System assessment",
            "Upgrade planning",
            "Professional installation",
            "Testing and commissioning",
            "Documentation"
          ],
          technical_details: {
            standards: ["BS 5266-1:2016"],
            upgrade_types: [
              "System replacement",
              "Component upgrades",
              "Technology updates",
              "Integration upgrades"
            ]
          },
          service_process: [
            "System assessment",
            "Upgrade planning",
            "Professional installation",
            "Testing and commissioning",
            "Documentation and handover"
          ]
        },
        {
          id: "fire-alarm-commissioning",
          name: "Fire Alarm Commissioning",
          description: "Professional commissioning of fire alarm systems.",
          features: [
            "System testing",
            "Performance verification",
            "Documentation",
            "Staff training",
            "Certification"
          ],
          technical_details: {
            standards: ["BS 5839-1:2017"],
            documentation: "Commissioning certificates provided"
          },
          service_process: [
            "System testing",
            "Performance verification",
            "Documentation",
            "Staff training",
            "Certification"
          ]
        },
        {
          id: "fire-system-design",
          name: "Fire System Design",
          description: "Professional design of fire protection systems.",
          features: [
            "Site survey",
            "System design",
            "Documentation",
            "Technical specifications",
            "Installation guidance"
          ],
          technical_details: {
            standards: ["BS 5839-1:2017", "BS 5266-1:2016"],
            design_areas: [
              "Fire alarms",
              "Emergency lighting",
              "Suppression systems",
              "Integration"
            ]
          },
          service_process: [
            "Site survey",
            "System design",
            "Documentation",
            "Technical specifications",
            "Installation guidance"
          ]
        },
        {
          id: "fire-system-integration",
          name: "Fire System Integration",
          description: "Professional integration of fire protection systems.",
          features: [
            "System assessment",
            "Integration planning",
            "Professional installation",
            "Testing and commissioning",
            "Documentation"
          ],
          technical_details: {
            standards: ["BS 5839-1:2017"],
            integration_types: [
              "Building management systems",
              "Security systems",
              "Access control",
              "Emergency systems"
            ]
          },
          service_process: [
            "System assessment",
            "Integration planning",
            "Professional installation",
            "Testing and commissioning",
            "Documentation and handover"
          ]
        },
        {
          id: "fire-alarm-monitoring-services",
          name: "Fire Alarm Monitoring Services",
          description: "24/7 monitoring of fire alarm systems.",
          features: [
            "Remote monitoring",
            "Alarm response",
            "Emergency dispatch",
            "Documentation",
            "Regular reporting"
          ],
          technical_details: {
            monitoring_types: [
              "Remote monitoring",
              "Alarm response",
              "Emergency dispatch"
            ],
            response_times: "Immediate"
          },
          service_process: [
            "System connection",
            "Monitoring setup",
            "Response procedures",
            "Regular reporting"
          ]
        },
        {
          id: "24-7-fire-alarm-call-out",
          name: "24/7 Fire Alarm Call-out Service",
          description: "Round-the-clock emergency call-out service for fire alarm systems.",
          features: [
            "24/7 availability",
            "Emergency response",
            "Fault diagnosis",
            "Repair service",
            "Documentation"
          ],
          technical_details: {
            response_times: "Within 4 hours",
            coverage: "24/7"
          },
          service_process: [
            "Emergency call received",
            "Engineer dispatch",
            "Fault diagnosis",
            "Repair service",
            "Documentation"
          ]
        },
        {
          id: "fire-log-book-management",
          name: "Fire Log Book Management",
          description: "Professional management of fire safety log books.",
          features: [
            "Log book setup",
            "Regular updates",
            "Documentation",
            "Compliance checking",
            "Regular review"
          ],
          technical_details: {
            standards: ["Regulatory Reform (Fire Safety) Order 2005"],
            documentation: "Comprehensive log books provided"
          },
          service_process: [
            "Log book setup",
            "Regular updates",
            "Documentation",
            "Regular review"
          ]
        },
        {
          id: "fire-extinguisher-refilling",
          name: "Fire Extinguisher Refilling",
          description: "Professional refilling of fire extinguishers.",
          features: [
            "Visual inspection",
            "Pressure testing",
            "Refilling",
            "Documentation",
            "Certification"
          ],
          technical_details: {
            standards: ["BS 5306-3:2017"],
            refill_types: [
              "Water",
              "Foam",
              "CO2",
              "Dry powder",
              "Wet chemical"
            ]
          },
          service_process: [
            "Visual inspection",
            "Pressure testing",
            "Refilling",
            "Documentation and certification"
          ]
        },
        {
          id: "pat-testing",
          name: "PAT Testing",
          description: "Professional Portable Appliance Testing (PAT) services.",
          features: [
            "Visual inspection",
            "Electrical testing",
            "Documentation",
            "Certification",
            "Regular review"
          ],
          technical_details: {
            standards: ["IET Code of Practice"],
            testing_frequency: "Annual or as required"
          },
          service_process: [
            "Visual inspection",
            "Electrical testing",
            "Documentation",
            "Certification"
          ]
        },
        {
          id: "fire-warden-training",
          name: "Fire Warden Training",
          description: "Comprehensive training for fire wardens.",
          features: [
            "Fire safety theory",
            "Practical exercises",
            "Evacuation procedures",
            "Documentation",
            "Certification"
          ],
          technical_details: {
            training_duration: "Half day",
            certification: "Recognized certificate provided",
            refresher_frequency: "Annual"
          },
          service_process: [
            "Theory training",
            "Practical exercises",
            "Assessment",
            "Certification"
          ]
        },
        {
          id: "fire-safety-documentation",
          name: "Fire Safety Documentation",
          description: "Comprehensive fire safety documentation services.",
          features: [
            "Policy development",
            "Procedure documentation",
            "Risk assessments",
            "Regular updates",
            "Compliance checking"
          ],
          technical_details: {
            standards: ["Regulatory Reform (Fire Safety) Order 2005"],
            documentation_types: [
              "Policies",
              "Procedures",
              "Risk assessments",
              "Training records"
            ]
          },
          service_process: [
            "Initial assessment",
            "Documentation development",
            "Regular updates",
            "Compliance checking"
          ]
        },
        {
          id: "fire-escape-route-planning",
          name: "Fire Escape Route Planning",
          description: "Professional planning of fire escape routes.",
          features: [
            "Site assessment",
            "Route planning",
            "Signage design",
            "Documentation",
            "Regular review"
          ],
          technical_details: {
            standards: ["BS 9999", "Building Regulations"],
            planning_areas: [
              "Route design",
              "Signage",
              "Lighting",
              "Access"
            ]
          },
          service_process: [
            "Site assessment",
            "Route planning",
            "Signage design",
            "Documentation and review"
          ]
        },
        {
          id: "fire-strategy-reports",
          name: "Fire Strategy Reports",
          description: "Comprehensive fire strategy reports for buildings.",
          features: [
            "Site assessment",
            "Strategy development",
            "Documentation",
            "Recommendations",
            "Regular review"
          ],
          technical_details: {
            standards: ["BS 9999", "Building Regulations"],
            report_components: [
              "Building assessment",
              "Risk evaluation",
              "Strategy development",
              "Recommendations"
            ]
          },
          service_process: [
            "Site assessment",
            "Strategy development",
            "Documentation",
            "Regular review"
          ]
        },
        {
          id: "fire-compartmentation-surveys",
          name: "Fire Compartmentation Surveys",
          description: "Professional surveys of fire compartmentation.",
          features: [
            "Visual inspection",
            "Performance testing",
            "Documentation",
            "Recommendations",
            "Regular review"
          ],
          technical_details: {
            standards: ["Building Regulations", "BS 9999"],
            survey_areas: [
              "Walls",
              "Floors",
              "Doors",
              "Penetrations"
            ]
          },
          service_process: [
            "Visual inspection",
            "Performance testing",
            "Documentation",
            "Regular review"
          ]
        },
        {
          id: "passive-fire-protection-surveys",
          name: "Passive Fire Protection Surveys",
          description: "Professional surveys of passive fire protection measures.",
          features: [
            "Visual inspection",
            "Performance testing",
            "Documentation",
            "Recommendations",
            "Regular review"
          ],
          technical_details: {
            standards: ["Building Regulations", "BS 9999"],
            survey_areas: [
              "Fire doors",
              "Fire walls",
              "Fire stopping",
              "Fire dampers"
            ]
          },
          service_process: [
            "Visual inspection",
            "Performance testing",
            "Documentation",
            "Regular review"
          ]
        },
        {
          id: "fire-stopping-services",
          name: "Fire Stopping Services",
          description: "Professional fire stopping installation and maintenance.",
          features: [
            "Site assessment",
            "Installation",
            "Maintenance",
            "Documentation",
            "Regular review"
          ],
          technical_details: {
            standards: ["Building Regulations", "BS 9999"],
            service_types: [
              "Installation",
              "Maintenance",
              "Repair",
              "Upgrade"
            ]
          },
          service_process: [
            "Site assessment",
            "Installation/maintenance",
            "Documentation",
            "Regular review"
          ]
        },
        {
          id: "fire-damper-testing",
          name: "Fire Damper Testing",
          description: "Professional testing of fire dampers.",
          features: [
            "Visual inspection",
            "Performance testing",
            "Documentation",
            "Maintenance",
            "Regular review"
          ],
          technical_details: {
            standards: ["BS 9999"],
            testing_frequency: "Annual"
          },
          service_process: [
            "Visual inspection",
            "Performance testing",
            "Documentation",
            "Regular review"
          ]
        },
        {
          id: "smoke-control-system-servicing",
          name: "Smoke Control System Servicing",
          description: "Professional servicing of smoke control systems.",
          features: [
            "System inspection",
            "Performance testing",
            "Maintenance",
            "Documentation",
            "Regular review"
          ],
          technical_details: {
            standards: ["BS 9999"],
            service_frequency: "Annual"
          },
          service_process: [
            "System inspection",
            "Performance testing",
            "Maintenance",
            "Documentation and review"
          ]
        },
        {
          id: "fire-alarm-fault-finding",
          name: "Fire Alarm Fault Finding",
          description: "Professional fault finding and diagnosis for fire alarm systems.",
          features: [
            "Fault diagnosis",
            "System testing",
            "Repair service",
            "Documentation",
            "Recommendations"
          ],
          technical_details: {
            standards: ["BS 5839-1:2017"],
            response_times: "Within 4 hours"
          },
          service_process: [
            "Fault diagnosis",
            "System testing",
            "Repair service",
            "Documentation"
          ]
        },
        {
          id: "fire-safety-system-consultation",
          name: "Fire Safety System Consultation",
          description: "Expert consultation on fire safety systems.",
          features: [
            "System assessment",
            "Recommendations",
            "Documentation",
            "Implementation guidance",
            "Regular review"
          ],
          technical_details: {
            standards: ["BS 5839-1:2017", "BS 5266-1:2016"],
            consultation_areas: [
              "System design",
              "Compliance",
              "Integration",
              "Maintenance"
            ]
          },
          service_process: [
            "System assessment",
            "Recommendations",
            "Documentation",
            "Regular review"
          ]
        }
      ]
    }
  ]
};

// Write the updated services data to file
fs.writeFileSync(
  path.join(__dirname, '../data/services.json'),
  JSON.stringify(servicesData, null, 2)
);

console.log('Services data updated successfully!'); 