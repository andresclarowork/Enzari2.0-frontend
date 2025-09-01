'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/Logo.png"
                alt="Enzari Creations Logo"
                width={130}
                height={28}
                priority
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-900 hover:text-pink-600 transition-colors duration-200 font-normal font-inter-tight tracking-tight"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="text-white font-normal py-2 px-4 rounded-lg transition-colors duration-200 flex items-center space-x-2 font-inter-tight tracking-tight"
              style={{ backgroundColor: '#FE0B5F' }}
            >
              <span>Book a spot</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 hover:text-pink-600 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-900 hover:text-pink-600 transition-colors duration-200 font-normal font-inter-tight tracking-tight"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <Link
                href="/contact"
                className="block px-3 py-2 text-white font-normal rounded-lg transition-colors duration-200 font-inter-tight tracking-tight"
                style={{ backgroundColor: '#FE0B5F' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Book a spot</span>
                <ArrowUpRight className="h-4 w-4 inline ml-2" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 