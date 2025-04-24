const fs = require('fs');
const path = require('path');

// Common intro phrases
const introPhrases = [
  "Comply Direct UK is {area}'s trusted provider of fire protection and safety training services.",
  "Comply Direct UK provides comprehensive fire protection and safety training services across {area}.",
  "As {area}'s leading fire safety provider, Comply Direct UK offers comprehensive fire protection services.",
  "Comply Direct UK delivers expert fire safety solutions throughout {area} and surrounding areas.",
  "Trust Comply Direct UK for all your fire safety needs in {area} and the surrounding region."
];

// Common local expertise phrases
const expertisePhrases = [
  "Our team has extensive experience working with {area}'s diverse business community.",
  "With years of experience serving {area}'s businesses, we understand the unique fire safety challenges.",
  "Our local experts are familiar with {area}'s specific fire safety requirements.",
  "We have deep knowledge of {area}'s building regulations and fire safety standards.",
  "Our team specializes in meeting the fire safety needs of {area}'s various industries."
];

// Common service highlight phrases
const servicePhrases = [
  "We offer rapid response times for all fire protection services in {area}.",
  "Our local presence in {area} means we can be on-site quickly when you need us most.",
  "We provide same-day service for all fire protection needs across {area}.",
  "Our {area}-based team ensures prompt service for all your fire safety requirements.",
  "We're proud to serve businesses across all {area} postcodes with our comprehensive services."
];

// Common training phrases
const trainingPhrases = [
  "Our {area}-based training services are designed to meet the needs of local businesses.",
  "We offer flexible scheduling for all our safety training courses in {area}.",
  "Our experienced instructors provide comprehensive training solutions throughout {area}.",
  "We deliver convenient, on-site training services across the {area} region.",
  "Our {area} training center offers easy access to all our safety certification courses."
];

// Common compliance phrases
const compliancePhrases = [
  "We help {area} businesses maintain compliance with fire safety regulations.",
  "Our detailed fire risk assessments ensure your {area} premises remain safe and compliant.",
  "We provide comprehensive compliance solutions for businesses throughout {area}.",
  "Our regular maintenance services keep your {area} premises fully compliant.",
  "We ensure your {area} business meets all relevant fire safety legislation."
];

// Common testimonial quotes
const testimonialQuotes = [
  "The team at Comply Direct UK provided excellent service for our {area} premises.",
  "Comply Direct UK's fire safety services have been invaluable for our {area} business.",
  "Their knowledge of {area}'s specific requirements was impressive.",
  "We appreciate their commitment to keeping {area} businesses safe.",
  "The fire risk assessment was thorough and professional.",
  "Their emergency lighting service was prompt and professional.",
  "The training courses are excellent and tailored to {area}'s needs.",
  "Their understanding of our industry's requirements in {area} is impressive."
];

// Common testimonial roles
const testimonialRoles = [
  "Operations Manager",
  "Facility Manager",
  "Health & Safety Officer",
  "Business Owner",
  "Property Manager",
  "Site Supervisor",
  "HR Director",
  "Safety Coordinator",
  "Maintenance Manager",
  "Office Manager"
];

// Generate a random item from an array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Generate a random testimonial
function generateTestimonial(area) {
  const quote = getRandomItem(testimonialQuotes).replace('{area}', area);
  const role = getRandomItem(testimonialRoles);
  const firstNames = ['James', 'Sarah', 'Michael', 'Emma', 'David', 'Lisa', 'Robert', 'Jennifer', 'Thomas', 'Patricia'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
  
  const firstName = getRandomItem(firstNames);
  const lastName = getRandomItem(lastNames);
  
  return {
    quote,
    author: `${firstName} ${lastName}, ${role}`
  };
}

// Generate content for an area
function generateContent(area) {
  const intro = getRandomItem(introPhrases).replace('{area}', area.name);
  const local_expertise = getRandomItem(expertisePhrases).replace('{area}', area.name);
  const services_highlight = getRandomItem(servicePhrases).replace('{area}', area.name) + 
    ` We serve businesses across all ${area.name} postcodes (${area.postcode}) with our comprehensive range of fire safety solutions.`;
  const training_services = getRandomItem(trainingPhrases).replace('{area}', area.name) + 
    " We offer flexible scheduling for Fire Marshal training, First Aid courses, and specialized Forestry First Aid training.";
  const compliance = getRandomItem(compliancePhrases).replace('{area}', area.name) + 
    " through regular maintenance, testing, and comprehensive fire risk assessments. Our detailed reports ensure you have all the documentation needed for compliance.";
  
  return {
    title: `Fire Safety Services in ${area.name} | Comply Direct UK`,
    description: `Expert fire protection and safety training in ${area.name}. Same-day service for fire alarms, risk assessments, emergency lighting, and fire doors. BS 5839 compliant.`,
    content: {
      intro,
      local_expertise,
      services_highlight,
      training_services,
      compliance,
      testimonials: [
        generateTestimonial(area.name),
        generateTestimonial(area.name)
      ]
    }
  };
}

// Read the locations.json file
const locationsPath = path.join(__dirname, '../data/locations.json');
const locationsData = JSON.parse(fs.readFileSync(locationsPath, 'utf8'));

// Generate content for each area
const areaContent = {};
for (const area of locationsData.areas) {
  areaContent[area.id] = generateContent(area);
}

// Write to area-content.json
const contentPath = path.join(__dirname, '../data/area-content.json');
const contentData = { areas: areaContent };
fs.writeFileSync(contentPath, JSON.stringify(contentData, null, 2));

console.log(`Generated content for ${Object.keys(areaContent).length} areas and saved to ${contentPath}`); 