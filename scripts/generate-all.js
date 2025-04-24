const { execSync } = require('child_process');
const path = require('path');

console.log('Starting generation of 500 North West areas...');

// Run the area generator
console.log('Generating areas...');
execSync('node ' + path.join(__dirname, 'generate-areas.js'), { stdio: 'inherit' });

// Run the content generator
console.log('Generating content...');
execSync('node ' + path.join(__dirname, 'generate-content.js'), { stdio: 'inherit' });

console.log('Generation complete! 500 North West areas with content have been created.'); 