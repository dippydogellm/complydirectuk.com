import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Our commitment to protecting your privacy and personal data"
      />

      <Container className="mt-16 sm:mt-20">
        <div className="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>
            Comply Direct UK ("we", "our", or "us") is committed to protecting and respecting your privacy. 
            This policy explains how we collect, use, and protect your personal data when you use our services 
            or visit our website.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect and process the following information:</p>
          <ul>
            <li>Contact information (name, email address, phone number)</li>
            <li>Business information (company name, address)</li>
            <li>Service requirements and preferences</li>
            <li>Communication history</li>
            <li>Website usage data</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>Providing our fire safety services</li>
            <li>Communicating with you about our services</li>
            <li>Processing your requests and inquiries</li>
            <li>Improving our services and website</li>
            <li>Compliance with legal obligations</li>
          </ul>

          <h2>Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal data against unauthorized access, 
            alteration, disclosure, or destruction. Your data is stored securely and accessed only by authorized personnel.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our data practices, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@complydirectuk.com</li>
            <li>Phone: 0800 123 456</li>
            <li>Address: [Your Business Address]</li>
          </ul>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this page with an 
            updated revision date.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </Container>
    </>
  )
} 