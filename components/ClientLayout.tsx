'use client'

import Link from 'next/link'
import Image from 'next/image'
import MobileNav from '@/components/MobileNav'
import { mergedServicesData } from '@/data/merged-services'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = mergedServicesData.categories

  return (
    <>
      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.svg" 
                alt="Comply Direct UK Logo" 
                width={200} 
                height={60} 
                priority
              />
            </Link>
            <div className="hidden lg:flex items-center space-x-6">
              <Link href="/services" className="hover:text-blue-200">Services</Link>
              <Link href="/service-areas" className="hover:text-blue-200">Areas</Link>
              <Link href="/contact" className="hover:text-blue-200">Contact</Link>
              <a href="tel:07771055708" className="flex items-center hover:text-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07771055708
              </a>
            </div>
            <MobileNav />
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-6">
                <Image 
                  src="/images/logo-small.svg" 
                  alt="Comply Direct UK Logo" 
                  width={150} 
                  height={40} 
                />
              </div>
              <p className="text-sm text-gray-400">
                Professional fire protection, electrical services, and safety training across the UK.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Flat 8, 18 Mellalieu Street</p>
              <p>Middleton, M24 5DN</p>
              <p>Phone: 07771055708</p>
              <p>Phone: 0161 4834416</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link 
                      href={`/services/${category.id}`} 
                      className="hover:text-blue-200"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Areas</h3>
              <ul className="space-y-2">
                <li><Link href="/service-areas/manchester" className="hover:text-blue-200">Manchester</Link></li>
                <li><Link href="/service-areas/stockport" className="hover:text-blue-200">Stockport</Link></li>
                <li><Link href="/service-areas/cheshire" className="hover:text-blue-200">Cheshire</Link></li>
                <li><Link href="/service-areas/oldham" className="hover:text-blue-200">Oldham</Link></li>
                <li><Link href="/service-areas/leeds" className="hover:text-blue-200">Leeds</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Comply Direct UK. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-4">
                  <li><Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-blue-200">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-sm text-gray-400 hover:text-blue-200">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 