import Link from 'next/link'

export default function Introduction() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Welcome to Comply Direct UK</h2>
        <p className="text-lg mb-6">
          Comply Direct UK is your trusted partner for comprehensive fire protection and safety training services across the United Kingdom. With over 15 years of experience, we specialize in delivering high-quality solutions that meet all regulatory requirements and industry standards.
        </p>
        <p className="text-lg mb-8">
          Our team of certified professionals is dedicated to ensuring your business remains compliant with fire safety regulations while providing peace of mind through reliable protection systems and expert training.
        </p>
        <div className="flex justify-center">
          <Link href="/about" className="btn-primary">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
} 