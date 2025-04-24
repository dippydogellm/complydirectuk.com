const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create services directory if it doesn't exist
const servicesDir = path.join(__dirname, '../public/images/services');
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

// Function to create a placeholder image
function createPlaceholderImage(filename, text) {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#1e40af';
  ctx.font = 'bold 32px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(servicesDir, filename), buffer);
}

// Create placeholder images for each service
const services = [
  'fire-alarm-installation',
  'fire-alarm-maintenance',
  'fire-alarm-servicing',
  'fire-alarm-inspections',
  'fire-alarm-testing',
  'emergency-lighting-installation',
  'emergency-lighting-maintenance',
  'emergency-lighting-testing',
  'fire-risk-assessments',
  'fire-safety-audits'
];

services.forEach(service => {
  // Create main image
  createPlaceholderImage(`${service}.jpg`, service.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' '));
  
  // Create detail images
  createPlaceholderImage(`${service}-detail1.jpg`, `${service} Detail 1`);
  createPlaceholderImage(`${service}-detail2.jpg`, `${service} Detail 2`);
});

console.log('Service images created successfully!'); 