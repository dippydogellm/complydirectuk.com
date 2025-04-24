const fs = require('fs');
const path = require('path');

// Read the locations.json file
const locationsFilePath = path.join(__dirname, 'data', 'locations.json');
const locationsData = JSON.parse(fs.readFileSync(locationsFilePath, 'utf8'));

// Add waste management category to each area
locationsData.areas.forEach(area => {
  // Add waste_management object if it doesn't exist
  if (!area.waste_management) {
    area.waste_management = {
      "services": [
        "Commercial Waste Collection",
        "Industrial Waste Collection",
        "Recycling Services",
        "Hazardous Waste Disposal",
        "Waste Management Consulting"
      ],
      "collection_frequency": {
        "standard": "Weekly",
        "high_volume": "Daily",
        "low_volume": "Bi-weekly"
      },
      "waste_types": [
        "General Waste",
        "Recyclables",
        "Organic Waste",
        "Construction Waste",
        "Hazardous Materials"
      ],
      "compliance": [
        "Waste Management Regulations",
        "Environmental Protection Act",
        "Duty of Care Requirements",
        "Waste Hierarchy Compliance"
      ],
      "specialized_services": [
        "Waste Audits",
        "Waste Reduction Strategies",
        "Sustainability Consulting",
        "Zero Waste Initiatives"
      ]
    };
  }
});

// Write the updated data back to the file
fs.writeFileSync(locationsFilePath, JSON.stringify(locationsData, null, 2), 'utf8');

console.log('Waste management category added to all areas successfully!'); 