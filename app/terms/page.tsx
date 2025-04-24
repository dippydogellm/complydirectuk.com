import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        description="Our terms and conditions for using our services"
      />

      <Container className="mt-16 sm:mt-20">
        <div className="prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            These terms and conditions govern your use of Comply Direct UK's services and website. 
            By using our services or website, you accept these terms and conditions in full.
          </p>

          <h2>2. Services</h2>
          <p>
            We provide fire safety services including but not limited to:
          </p>
          <ul>
            <li>Fire alarm installation and maintenance</li>
            <li>Fire risk assessments</li>
            <li>Emergency lighting systems</li>
            <li>Fire safety training</li>
            <li>Fire door installation and maintenance</li>
          </ul>

          <h2>3. Service Standards</h2>
          <p>
            We are committed to providing high-quality services that meet all relevant UK regulations 
            and standards. Our services are delivered by qualified professionals with appropriate 
            certifications and experience.
          </p>

          <h2>4. Pricing and Payment</h2>
          <p>
            All prices quoted are subject to VAT where applicable. Payment terms will be specified 
            in individual service agreements. Late payments may incur additional charges.
          </p>

          <h2>5. Cancellation Policy</h2>
          <p>
            Cancellation of scheduled services must be made at least 24 hours in advance. 
            Late cancellations may incur a fee.
          </p>

          <h2>6. Liability</h2>
          <p>
            We maintain appropriate insurance coverage for our services. Our liability is limited 
            to the extent permitted by law and as specified in individual service agreements.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on our website and materials provided as part of our services remain 
            our intellectual property and may not be reproduced without permission.
          </p>

          <h2>8. Data Protection</h2>
          <p>
            We process personal data in accordance with our Privacy Policy and applicable data 
            protection laws.
          </p>

          <h2>9. Complaints</h2>
          <p>
            We aim to resolve any complaints promptly and fairly. Please contact us at 
            complaints@complydirectuk.com with any concerns.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective 
            immediately upon posting to our website.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            For any questions about these terms, please contact us at:
          </p>
          <ul>
            <li>Email: legal@complydirectuk.com</li>
            <li>Phone: 0800 123 456</li>
            <li>Address: [Your Business Address]</li>
          </ul>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </Container>
    </>
  )
} 