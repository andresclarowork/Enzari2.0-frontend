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
      
        <div className="flex flex-col max-w-[1440px] mx-auto pl-[39px] pr-[39px] pt-[50px] pb-[50px]" style={{gap:'102px'}}>
          
          <div className="flex flex-row" style={{justifyContent:'space-between'}}>
            {/* Left Column - Branding */}
            <div className="flex flex-col max-w-[397px]" style={{gap:'40px'}}>
              <Link href="/" className="flex items-center">
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
                    lineHeight: '100%',
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
                        className="hover:text-gray-600 transition-colors duration-200"
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
                        {link.name}
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
                  <p style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      fontStyle: 'regular',
                      fontSize: '22px',
                      lineHeight: '25px',
                      letterSpacing: '-0.03em',
                      color: '#111111'
                    }}>+1 (609) 451-0357</p>
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
                  <p style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      fontStyle: 'regular',
                      fontSize: '22px',
                      lineHeight: '25px',
                      letterSpacing: '-0.03em',
                      color: '#111111'
                    }}>STUDIO@ENZARI.CO</p>
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
          <div className="flex flex-row" style={{justifyContent:'space-between'}}>            
            {socialLinks.map((social) => (
              <Link 
                key={social.name}
                href={social.href}
                className="flex flex-row items-start max-w-[210px] pb-[11px]"
                style={{ borderBottom: '1px solid #999999' }}
              >
                <span 
                  className="uppercase mr-12"
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
                <ArrowUpRight className="h-6 w-6" />
              </Link>
            ))}
            
          </div>
         
          

          {/* Bottom Section - Copyright & Legal */}
          <div className="flex flex-row" style={{justifyContent:'space-between'}}>
            
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
                  className="hover:text-gray-700"
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
                  className="hover:text-gray-700"
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
      
    </footer>
  )
} 