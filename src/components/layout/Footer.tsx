import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const footerLinks = {
  quickLinks: [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Culture', href: '/culture' },
    { name: 'Meet The Team', href: '/team' },
  ],
}

const socialLinks = [
  { name: 'TWITTER', href: '#' },
  { name: 'INSTAGRAM', href: '#' },
  { name: 'FACEBOOK', href: '#' },
  { name: 'LINKEDIN', href: '#' },
  { name: 'UPWORK', href: '#' },
  { name: 'FIVERR', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Branding */}
            <div>
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src="/assets/images/Logo.png"
                  alt="Enzari Creations Logo"
                  width={131}
                  height={32}
                  priority
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-4xl font-bold text-gray-900 leading-tight">
                <div>Leading the</div>
                <div>next era of work.</div>
              </p>
            </div>

            {/* Right Column - Quick Links and Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">QUICK LINKS</h3>
                <ul className="space-y-2">
                  {footerLinks.quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">CALL US</h3>
                  <p className="text-gray-900">+1 (609) 451-0357</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">EMAIL US</h3>
                  <p className="text-gray-900">STUDIO@ENZARI.CO</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">ADDRESS</h3>
                  <p className="text-gray-900">725 N HITE AVE APT 1, LOUISVILLE, KENTUCKY 40206</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-12 pt-8 mx-auto">
            <div className="flex flex-wrap gap-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors duration-200 border-b border-gray-300 pb-1"
                >
                  <span className="text-sm font-medium uppercase tracking-wide mr-12">{social.name}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Section - Copyright & Legal */}
          <div className="mt-8 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                2025, All Rights Reserved
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <Link href="/terms" className="text-gray-500 text-sm hover:text-gray-700">
                  Terms & Condition
                </Link>
                <Link href="/privacy" className="text-gray-500 text-sm hover:text-gray-700">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 