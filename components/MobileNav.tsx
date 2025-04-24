'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:text-blue-200 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Image 
                src="/images/logo.svg" 
                alt="Comply Direct UK Logo" 
                width={180} 
                height={54} 
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services"
                  className={`block py-2 text-lg ${
                    isActive('/services')
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas"
                  className={`block py-2 text-lg ${
                    isActive('/service-areas')
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 text-lg ${
                    isActive('/contact')
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="tel:07771055708"
                  className="flex items-center py-2 text-lg text-gray-600 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  07771055708
                </a>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className={`block py-2 text-lg ${
                    isActive('/privacy-policy')
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className={`block py-2 text-lg ${
                    isActive('/terms')
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>

          <div className="p-4 border-t">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Contact Us</p>
              <p className="text-sm">Phone: 07771055708</p>
              <p className="text-sm">Phone: 0161 4834416</p>
              <p className="text-sm">Flat 8, 18 Mellalieu Street</p>
              <p className="text-sm">Middleton, M24 5DN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 