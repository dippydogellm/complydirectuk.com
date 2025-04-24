'use client'

import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with our team to discuss your fire safety needs</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p>Flat 8, 18 Mellalieu Street</p>
                <p>Middleton, M24 5DN</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Phone Numbers</h3>
                <p>Mobile: 07771055708</p>
                <p>Landline: 0161 4834416</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Service Areas</h3>
                <ul className="list-disc list-inside">
                  <li>Manchester (M1-M99)</li>
                  <li>Stockport (SK1-SK8)</li>
                  <li>Cheshire (CH1-CH99)</li>
                  <li>Oldham (OL1-OL9)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Emergency Service</h3>
                <p>Available 24/7 for emergency call-outs</p>
                <p className="text-blue-600">Call: 07771055708</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 