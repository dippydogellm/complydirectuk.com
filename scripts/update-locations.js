const fs = require('fs');
const path = require('path');

// Define all Manchester sub-areas
const manchesterAreas = [
    'ancoats', 'ardwick', 'beswick', 'blackley', 'burnage', 'cheetham-hill',
    'chorlton-cum-hardy', 'chorlton-park', 'clayton', 'collyhurst', 'didsbury',
    'fallowfield', 'gorton', 'harpurhey', 'hulme', 'levenshulme', 'longsight',
    'miles-platting', 'moss-side', 'moston', 'newton-heath', 'northenden',
    'openshaw', 'rusholme', 'withington', 'wythenshawe'
];

// Define all Liverpool sub-areas
const liverpoolAreas = [
    'aigburth', 'allerton', 'anfield', 'belle-vale', 'broadgreen', 'cressington',
    'croxteth', 'dingle', 'edge-hill', 'everton', 'fairfield', 'fazakerley',
    'garston', 'gateacre', 'gillmoss', 'grassendale', 'hunts-cross', 'kensington',
    'kirkdale', 'knotty-ash', 'mossley-hill', 'norris-green', 'old-swan',
    'st-michaels-hamlet', 'speke', 'toxteth', 'tuebrook', 'vauxhall', 'walton',
    'wavertree', 'west-derby', 'woolton'
];

// Create location entry template
const createLocationEntry = (id, name) => ({
    id,
    name,
    postcode: "",
    description: `Expert fire safety and protection services throughout ${name} and surrounding areas, with specialized expertise in local premises.`,
    coverage: {
        districts: [name],
        response_times: {
            emergency: "1-2 hours",
            standard: "Same day",
            planned: "Scheduled"
        }
    },
    key_industries: [
        "Retail",
        "Healthcare",
        "Education",
        "Professional Services"
    ],
    local_regulations: [
        "Local Authority Requirements",
        "Building Control Regulations",
        "Compliance Requirements",
        "Environmental Regulations"
    ],
    emergency_services: {
        fire_station_proximity: "Multiple stations within 5 miles",
        emergency_support: "24/7 coverage",
        backup_services: "Available on demand"
    },
    waste_management: {
        services: [
            "Commercial Waste Collection",
            "Industrial Waste Collection",
            "Recycling Services",
            "Hazardous Waste Disposal",
            "Waste Management Consulting"
        ],
        collection_frequency: {
            standard: "Weekly",
            high_volume: "Daily",
            low_volume: "Bi-weekly"
        },
        waste_types: [
            "General Waste",
            "Recyclables",
            "Organic Waste",
            "Construction Waste",
            "Hazardous Materials"
        ],
        compliance: [
            "Waste Management Regulations",
            "Environmental Protection Act",
            "Duty of Care Requirements",
            "Waste Hierarchy Compliance"
        ],
        specialized_services: [
            "Waste Audits",
            "Waste Reduction Strategies",
            "Sustainability Consulting",
            "Zero Waste Initiatives"
        ]
    }
});

// Function to format area name (convert from slug to proper name)
const formatAreaName = (slug) => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Main function to update locations.json
const updateLocations = () => {
    const locationsPath = path.join(__dirname, '..', 'data', 'locations.json');
    
    // Read the existing locations file content
    const fileContent = fs.readFileSync(locationsPath, 'utf8');
    
    // Find the last closing bracket of the array
    const lastBracketIndex = fileContent.lastIndexOf(']');
    if (lastBracketIndex === -1) {
        console.error('Invalid JSON file format');
        return;
    }
    
    // Create new entries for Manchester areas
    const manchesterEntries = manchesterAreas.map(area => 
        createLocationEntry(area, formatAreaName(area))
    );
    
    // Create new entries for Liverpool areas
    const liverpoolEntries = liverpoolAreas.map(area => 
        createLocationEntry(area, formatAreaName(area))
    );
    
    // Combine all new entries
    const newEntries = [...manchesterEntries, ...liverpoolEntries];
    
    // Create the JSON string for new entries
    const newEntriesJson = newEntries
        .map(entry => JSON.stringify(entry, null, 2))
        .join(',\n');
    
    // Insert the new entries before the last bracket
    const updatedContent = 
        fileContent.slice(0, lastBracketIndex) + 
        (fileContent.slice(lastBracketIndex - 1, lastBracketIndex).trim() === ']' ? ',' : '') +
        '\n' + newEntriesJson + '\n]';
    
    // Write the updated content back to the file
    fs.writeFileSync(locationsPath, updatedContent);
    
    console.log(`Added ${manchesterEntries.length} Manchester areas and ${liverpoolEntries.length} Liverpool areas`);
};

// Run the update
updateLocations(); 