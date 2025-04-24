import Link from 'next/link'

const linkClasses = 'text-sm font-medium text-gray-500 hover:text-gray-900'

const MainNav = () => {
  return (
    <div className="hidden md:flex md:gap-x-6">
      <Link href="/" className={linkClasses}>
        Home
      </Link>
      <Link href="/services" className={linkClasses}>
        Services
      </Link>
      <Link href="/service-areas" className={linkClasses}>
        Service Areas
      </Link>
      <Link href="/waste-management" className={linkClasses}>
        Waste Management
      </Link>
      <Link href="/contact" className={linkClasses}>
        Contact
      </Link>
    </div>
  )
}

export default MainNav 