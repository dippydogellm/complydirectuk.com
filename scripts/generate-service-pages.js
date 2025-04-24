const fs = require('fs');
const path = require('path');

// Read the services and area content data
const servicesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/services.json'), 'utf8'));
const areaContent = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/area-content.json'), 'utf8'));

// Function to generate meta description
function generateMetaDescription(service, areaName) {
    return `${service.name} services in ${areaName} - Professional ${service.name.toLowerCase()} installation, maintenance, and servicing. Compliant with ${service.technical_details.standards?.join(', ')} standards.`;
}

// Function to generate page content
function generatePageContent(service, areaId, areaData) {
    const content = areaData.content || {};
    const areaName = areaData.title.split('|')[0].trim().replace('Fire Safety Services in ', '');
    
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${service.name} Services in ${areaName} | Fire Safety Experts</title>
    <meta name="description" content="${generateMetaDescription(service, areaName)}">
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/areas/${areaId}">${areaName}</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>

    <main>
        <section class="hero">
            <h1>${service.name} Services in ${areaName}</h1>
            <p class="lead">${service.description}</p>
        </section>

        <section class="service-details">
            <h2>Our ${service.name} Services</h2>
            <div class="features">
                <h3>Key Features</h3>
                <ul>
                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>

            <div class="technical-details">
                <h3>Technical Specifications</h3>
                ${Object.entries(service.technical_details).map(([key, value]) => `
                    <div class="detail-item">
                        <h4>${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
                        ${Array.isArray(value) 
                            ? `<ul>${value.map(item => `<li>${item}</li>`).join('')}</ul>`
                            : typeof value === 'object'
                                ? `<ul>${Object.entries(value).map(([k, v]) => `<li>${k}: ${v}</li>`).join('')}</ul>`
                                : `<p>${value}</p>`}
                    </div>
                `).join('')}
            </div>

            <div class="service-process">
                <h3>Our Service Process</h3>
                <ol>
                    ${service.service_process.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        </section>

        <section class="area-specific">
            <h2>${areaName} Expertise</h2>
            <div class="local-content">
                ${content.intro || ''}
                ${content.local_expertise ? `<div class="expertise">${content.local_expertise}</div>` : ''}
            </div>

            ${content.services_highlight ? `
            <div class="service-highlights">
                <h3>Local Service Highlights</h3>
                ${content.services_highlight}
            </div>
            ` : ''}

            ${content.testimonials ? `
            <div class="testimonials">
                <h3>What Our ${areaName} Clients Say</h3>
                ${content.testimonials.map(testimonial => `
                    <blockquote>
                        <p>${testimonial.quote}</p>
                        <footer>
                            <cite>${testimonial.author}</cite>
                        </footer>
                    </blockquote>
                `).join('')}
            </div>
            ` : ''}
        </section>

        <section class="cta">
            <h2>Get Started with ${service.name} Services in ${areaName}</h2>
            <p>Contact us today for a free consultation and quote.</p>
            <a href="/contact" class="button">Contact Us</a>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="contact-info">
                <h3>Contact Us</h3>
                <p>Phone: 0800 123 4567</p>
                <p>Email: info@firesafetyexperts.com</p>
            </div>
            <div class="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/areas">Coverage Areas</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Fire Safety Experts. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;
}

// Function to create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// Generate pages for each service in each area
function generateServicePages() {
    const outputDir = path.join(__dirname, '../public/areas');
    ensureDirectoryExists(outputDir);

    servicesData.categories.forEach(category => {
        category.services.forEach(service => {
            // Create service directory
            const serviceDir = path.join(outputDir, service.id);
            ensureDirectoryExists(serviceDir);

            // Generate pages for each area
            Object.entries(areaContent.areas).forEach(([areaId, areaData]) => {
                const pageContent = generatePageContent(service, areaId, areaData);
                const filePath = path.join(serviceDir, `${areaId}.html`);
                
                fs.writeFileSync(filePath, pageContent);
                const areaName = areaData.title.split('|')[0].trim().replace('Fire Safety Services in ', '');
                console.log(`Generated page for ${service.name} in ${areaName}`);
            });
        });
    });
}

// Run the page generation
generateServicePages();
console.log('Service pages generation completed!'); 