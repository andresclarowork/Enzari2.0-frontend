'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
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
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className="sticky z-999 transition-all duration-500 ease-out"
      style={{
        // top: isScrolled ? '20px' : '0px',
        top: '20px',
        backgroundColor: isScrolled ? 'transparent' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: isScrolled ? 'none' : 'blur(10px)',
        WebkitBackdropFilter: isScrolled ? 'none' : 'blur(10px)',
        boxShadow: isScrolled ? 'none' : 'none',
        margin: isScrolled ? '0 30px' : '0',
        zIndex: '999'
      }}
    >
      <nav 
        className="transition-all duration-500 ease-out"
        style={{ 
          paddingTop: '10px',
          paddingBottom: '10px',
          paddingLeft: isScrolled ? '30px' : '40px',
          paddingRight: isScrolled ? '20px' : '40px',
          maxWidth: isScrolled ? '1000px' : '100%',
          margin: isScrolled ? '0 auto' : '0',
          borderRadius: isScrolled ? '10px' : '0',
          // border: isScrolled ? '1px solid rgba(0, 0, 0)' : 'none',
          // backgroundColor: isScrolled ? 'rgba(38, 38, 38, 0.8)' : 'transparent',
          backgroundColor: isScrolled ? 'rgba(255, 226, 237, 0.8)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: isScrolled ? 'rgba(255, 255, 255, 0.1) 0px 1px 1px 1px inset' : 'none',
          zIndex: '999'
        }}
      >
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
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="transition-all duration-200 flex items-center justify-center hover:font-bold"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: isActive ? 700 : 400,
                      fontSize: '16px',
                      lineHeight: '1.2em',
                      textAlign: 'center',
                      color: '#000000'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.fontWeight = '700'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.fontWeight = '400'
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block" >
              <Link
                href="/contact"
                className="text-white transition-colors duration-200 flex items-center justify-center"
                style={{
                  maxWidth: '158.51px',
                  maxHeight: '49px',
                  borderRadius: '12px',
                  padding: '14px 22px',
                  backgroundColor: '#FE0B5F',
                  gap: '10px'
                }}
              >
                <span 
                  style={{fontFamily: 'var(--font-sharp-sans)',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '1.0em',
                  letterSpacing: '-0.04em',
                  textAlign: 'center',
                  color: '#FFFFFF'
                  }}
                >
                  Book a spot
                </span>
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
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 transition-all duration-200 flex items-center justify-center hover:font-bold"
                      style={{
                        fontFamily: 'Inter Tight',
                        fontWeight: isActive ? 700 : 400,
                        fontSize: '16px',
                        lineHeight: '1.2em',
                        textAlign: 'center',
                        color: '#000000'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.fontWeight = '700'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.fontWeight = '400'
                        }
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                })}
                
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
                    lineHeight: '1.0em',
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