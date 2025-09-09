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
      
        <div className="flex flex-col px-3 sm:px-4 md:px-6 lg:px-[39px] pt-4 sm:pt-6 md:pt-8 lg:pt-[50px] pb-4 sm:pb-6 md:pb-8 lg:pb-[50px] gap-4 sm:gap-6 md:gap-8 lg:gap-[102px]">
          
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Logo and Tagline */}
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <Link href="/" className="inline-block transition-all duration-300 hover:scale-105 hover:opacity-80 mb-6">
                <Image
                  src="/assets/images/Logo.png"
                  alt="Enzari Creations Logo"
                  width={131}
                  height={32}
                  priority                  
                />
              </Link>
              <p 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[62px] leading-tight"
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  letterSpacing: '-0.05em',
                  color: '#000000'
                }}
              >
                <div>Leading the</div>
                <div>next era of work.</div>
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <h3 
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[16px] mb-2 sm:mb-3 md:mb-4"
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 700,
                  lineHeight: '1.0em',
                  letterSpacing: '0px',
                  color: '#252A33'
                }}
              >
                QUICK LINKS
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {footerLinks.quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="transition-all duration-300 hover:text-[#FE0B5F] text-center py-1 sm:py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[16px]"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      fontStyle: 'regular',
                      lineHeight: '20px',
                      letterSpacing: '-0.03em',
                      color: '#111111'
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <div className="space-y-4">
                <div>
                  <h3 
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[16px] mb-1 sm:mb-2"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 700,
                      lineHeight: '1em',
                      letterSpacing: '0px',
                      color: '#252A33'
                    }}
                  >
                    CALL US
                  </h3>
                  <a 
                    href="tel:+16094510357"
                    className="transition-all duration-300 hover:text-[#FE0B5F] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[16px]"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      lineHeight: '20px',
                      letterSpacing: '-0.03em',
                      color: '#111111'
                    }}
                  >
                    +1 (609) 451-0357
                  </a>
                </div>
                
                <div>
                  <h3 
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[16px] mb-1 sm:mb-2"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 700,
                      lineHeight: '1em',
                      letterSpacing: '0px',
                      color: '#252A33'
                    }}
                  >
                    EMAIL US
                  </h3>
                  <a 
                    href="mailto:STUDIO@ENZARI.CO"
                    className="transition-all duration-300 hover:text-[#FE0B5F] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[16px]"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      lineHeight: '20px',
                      letterSpacing: '-0.03em',
                      color: '#111111'
                    }}
                  >
                    STUDIO@ENZARI.CO
                  </a>
                </div>
                
                <div>
                  <h3 
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[16px] mb-1 sm:mb-2"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 700,
                      lineHeight: '1em',
                      letterSpacing: '0px',
                      color: '#252A33'
                    }}
                  >
                    ADDRESS
                  </h3>
                  <p 
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px] leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      lineHeight: '18px',
                      letterSpacing: '-0.03em',
                      color: '#111111'
                    }}
                  >
                    725 N HITE AVE APT 1<br />
                    LOUISVILLE, KENTUCKY 40206
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-row" style={{justifyContent:'space-between'}}>
            {/* Left Column - Branding */}
            <div className="flex flex-col" style={{gap:'40px'}}>
              <Link href="/" className="flex items-center transition-all duration-300 hover:scale-105 hover:opacity-80">
                <Image
                  src="/assets/images/Logo.png"
                  alt="Enzari Creations Logo"
                  width={131}
                  height={32}
                  priority                  
                />
              </Link>
              <p 
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  fontSize: '62px',
                  lineHeight: '62px',
                  letterSpacing: '-0.05em',
                  color: '#000000'
                }}
              >
                <div>Leading the</div>
                <div>next era of work.</div>
              </p>
            </div>

            {/* Right Column - Quick Links and Contact Information */}
            <div 
              className="flex flex-row"
              style={{
                maxWidth: '581px',
                gap: '145px'
              }}
            >
              {/* Quick Links */}
              <div className="flex flex-col" style={{gap:'24px'}}>
                <h3 
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '1.0em',
                    letterSpacing: '0px',
                    verticalAlign: 'middle',
                    color: '#252A33'
                  }}
                >
                  QUICK LINKS
                </h3>
                <ul 
                  className="flex flex-col"
                  style={{ gap: '20px' }}
                >
                  {footerLinks.quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="transition-all duration-300 hover:translate-x-2 hover:text-[#FE0B5F] group"
                        style={{
                          fontFamily: 'var(--font-inter-tight)',
                          fontWeight: 400,
                          fontStyle: 'regular',
                          fontSize: '22px',
                          lineHeight: '25px',
                          letterSpacing: '-0.03em',
                          color: '#111111'
                        }}
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE0B5F] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col max-w-[292px]" style={{gap:'30px'}}>
                <div className="gap-6">
                  <h3 
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 700,
                      fontStyle: 'bold',
                      fontSize: '16px',
                      lineHeight: '1em',
                      letterSpacing: '0px',
                      color: '#252A33'
                    }}
                  >
                    CALL US
                  </h3>
                  <a 
                    href="tel:+16094510357"
                    className="transition-all duration-300 hover:text-[#FE0B5F] hover:scale-105 inline-block"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      fontStyle: 'regular',
                      fontSize: '22px',
                      lineHeight: '25px',
                      letterSpacing: '-0.03em',
                      color: '#111111'
                    }}
                  >
                    +1 (609) 451-0357
                  </a>
                </div>
                
                <div className="mb-6">
                  <h3  
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 700,
                      fontStyle: 'bold',
                      fontSize: '16px',
                      lineHeight: '1em',
                      letterSpacing: '0px',
                      color: '#252A33'
                    }}>EMAIL US</h3>
                  <a 
                    href="mailto:STUDIO@ENZARI.CO"
                    className="transition-all duration-300 hover:text-[#FE0B5F] hover:scale-105 inline-block"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      fontStyle: 'regular',
                      fontSize: '22px',
                      lineHeight: '25px',
                      letterSpacing: '-0.03em',
                      color: '#111111'
                    }}
                  >
                    STUDIO@ENZARI.CO
                  </a>
                </div>
                
                <div>
                  <h3  
                    style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 700,
                    fontStyle: 'bold',
                    fontSize: '16px',
                    lineHeight: '1em',
                    letterSpacing: '0px',
                    color: '#252A33'
                    }}
                  >
                      ADDRESS
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      fontStyle: 'regular',
                      fontSize: '22px',
                      lineHeight: '25px',
                      letterSpacing: '-0.03em',
                      color: '#111111'
                    }}
                  >
                    725 N HITE AVE APT 1, LOUISVILLE, KENTUCKY 40206
                  </p>
                </div>
              </div>
            </div>
          </div>
                   
          
          {/* Social Media Links */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0" style={{justifyContent:'space-between'}}>
            {/* Mobile Social Links */}
            <div className="lg:hidden">
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg group transition-all duration-300 hover:border-[#FE0B5F] hover:bg-gray-50"
                  >
                    <span 
                      className="uppercase text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px] transition-all duration-300 group-hover:text-[#FE0B5F]"
                      style={{
                        fontFamily: 'var(--font-inter-tight)',
                        fontWeight: 400,
                        color: '#252A33'
                      }}
                    >
                      {social.name}
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-all duration-300 group-hover:text-[#FE0B5F] group-hover:rotate-45" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Social Links */}
            <div className="hidden lg:flex flex-row">            
              {socialLinks.map((social) => (
                <Link 
                  key={social.name}
                  href={social.href}
                  className="flex flex-row items-start max-w-[210px] pb-[11px] group transition-all duration-300 hover:translate-y-[-2px] hover:scale-105"
                  style={{ borderBottom: '1px solid #999999' }}
                >
                  <span 
                    className="uppercase mr-12 transition-all duration-300 group-hover:text-[#FE0B5F]"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      fontStyle: 'regular',
                      fontSize: '22px',
                      lineHeight: '27.5px',
                      textTransform: 'uppercase',
                      color: '#252A33'
                    }}
                  >
                    {social.name}
                  </span>
                  <ArrowUpRight className="h-6 w-6 transition-all duration-300 group-hover:text-[#FE0B5F] group-hover:rotate-45" />
                </Link>
              ))}
            </div>
          </div>
         
          

          {/* Bottom Section - Copyright & Legal */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0" style={{justifyContent:'space-between'}}>
            {/* Mobile Bottom Section */}
            <div className="lg:hidden text-center space-y-4">
              <p 
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px]"
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '-0.03em',
                  color: '#111111'
                }}
              >
                2025, All Rights Reserved
              </p>
              <div className="flex flex-row justify-center gap-6">
                <Link 
                  href="/terms" 
                  className="transition-all duration-300 hover:text-[#FE0B5F] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px]"
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '-0.03em',
                    color: '#111111'
                  }}
                >
                  Terms & Condition
                </Link>
                <Link 
                  href="/privacy" 
                  className="transition-all duration-300 hover:text-[#FE0B5F] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px]"
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '-0.03em',
                    color: '#111111'
                  }}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Desktop Bottom Section */}
            <div className="hidden lg:flex flex-row" style={{justifyContent:'space-between'}}>
              <p 
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '25px',
                  letterSpacing: '-0.03em',
                  verticalAlign: 'middle',
                  color: '#111111'
                }}
              >
                2025, All Rights Reserved
              </p>
              <div className="flex flex-row gap-[40px]">
                <Link 
                  href="/terms" 
                  className="transition-all duration-300 hover:text-[#FE0B5F] hover:underline hover:underline-offset-4"
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    fontSize: '18px',
                    lineHeight: '25px',
                    letterSpacing: '-0.03em',
                    color: '#111111'
                  }}
                >
                  Terms & Condition
                </Link>
                <Link 
                  href="/privacy" 
                  className="transition-all duration-300 hover:text-[#FE0B5F] hover:underline hover:underline-offset-4"
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    fontSize: '18px',
                    lineHeight: '25px',
                    letterSpacing: '-0.03em',
                    color: '#111111'
                  }}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      
    </footer>
  )
} 