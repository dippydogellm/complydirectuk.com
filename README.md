# Fire Protection & Safety Training Website

A comprehensive website for fire protection and safety training services, built with Next.js.

## Features

- Service listings for fire protection, electrical services, and safety training
- Area-specific content and pricing
- Responsive design for all devices
- SEO optimized with metadata
- Breadcrumb navigation
- Contact forms and CTAs

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/fire-protection-safety-training.git
cd fire-protection-safety-training
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app` - Next.js app router pages and components
- `/components` - Reusable UI components
- `/public` - Static assets like images
- `/types` - TypeScript type definitions
- `/data` - JSON data files for services and locations

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Adding New Areas

To add a new service area:

1. Open `/data/locations.json`
2. Add a new area object to the `areas` array with the following structure:
```json
{
  "id": "area-id",
  "name": "Area Name",
  "description": "Area description",
  "postcode": "Postcode range"
}
```

The website will automatically generate new pages for the area.

## Adding New Services

To add a new service:

1. Open `/data/services.json`
2. Add the service to the appropriate category's `services` array
3. Follow the existing structure for service objects

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

The site can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or a custom server.

## SEO Optimization

The site is built with SEO in mind, featuring:
- Semantic HTML structure
- Meta tags for all pages
- Optimized content structure
- Mobile-friendly design
- Fast loading times

## Contact

For any questions or support, please contact:
- Phone: 07771055708
- Phone: 0161 4834416
- Address: Flat 8, 18 Mellalieu Street, Middleton, M24 5DN 