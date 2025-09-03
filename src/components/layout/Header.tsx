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
    <header className="bg-white sticky top-0 z-50">
      <nav style={{ paddingTop: '30px', paddingLeft: '40px', paddingRight: '40px', paddingBottom: '10px' }}>
        <div>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/images/Logo.png"
                  alt="Enzari Creations Logo"
                  width={131}
                  height={32}
                  priority
                  className="w-auto"
                  style={{ maxWidth: '131px', maxHeight: '32px' }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center" style={{ gap: '25px' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition-all duration-200 flex items-center justify-center hover:font-bold"
                  style={{
                    fontFamily: 'Inter Tight',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '120%',
                    textAlign: 'center',
                    color: '#000000'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.fontWeight = '700'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.fontWeight = '400'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="text-white transition-colors duration-200 flex items-center justify-center"
                style={{
                  maxWidth: '158.51px',
                  maxHeight: '49px',
                  borderRadius: '12px',
                  padding: '14px 22px',
                  fontFamily: 'Sharp Sans',
                  fontWeight: 500,
                  fontStyle: 'medium',
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-4%',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  backgroundColor: '#FE0B5F',
                  gap: '10px'
                }}
              >
                <span>Book a spot</span>
                <ArrowUpRight className="h-3 w-3" />
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
                    className="block px-3 py-2 transition-all duration-200 flex items-center justify-center hover:font-bold"
                    style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '120%',
                      textAlign: 'center',
                      color: '#000000'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.fontWeight = '700'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.fontWeight = '400'
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile CTA Button */}
                <Link
                  href="/contact"
                  className="block text-white transition-colors duration-200 flex items-center justify-center"
                  style={{
                    width: '158.51px',
                    height: '49px',
                    borderRadius: '12px',
                    padding: '14px 22px',
                    fontFamily: 'Sharp Sans',
                    fontWeight: 500,
                    fontStyle: 'medium',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '4%',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    backgroundColor: '#FE0B5F',
                    margin: '0 auto'
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Book a spot</span>
                  <ArrowUpRight className="h-4 w-4 inline ml-2" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
} 