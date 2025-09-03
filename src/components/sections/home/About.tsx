import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function About() {
  return (
    <section className="bg-white, max-w-[1440px] mx-auto" style={{ paddingTop: '80px' }}>
      <div style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          {/* Intro Video Section */}
          <div className="relative overflow-hidden shadow-2xl" style={{ borderRadius: '32px' }}>
            <video
              src="/assets/images/Home/intro-background-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
          
          {/* Single Column Layout */}
          <div className="flex flex-col justify-center items-center mx-w-[1022px]" style={{ paddingTop: '120px' }}>
            {/* Headline with Social Proof */}
            <div className="flex flex-col" 
              style={{ 
                maxWidth: '1022px',
                gap: '50px'
              }}
            >
              <div className="flex flex-col">
                <div
                  className="flex flex-row items-start" 
                  style={{
                    
                    fontFamily: 'Inter Tight',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    fontSize: '100px',
                    lineHeight: '1.20em',
                    letterSpacing: '-0.05em',
                    textAlign: 'left',
                    verticalAlign: 'middle',
                    color: '#000000',
                    
                  }}
                >
                  Enzari Builds Demand.
                </div>
                <div className="flex flex-row items-center justify-between">
                  {/* Social Proof Badge */}
                  <div 
                    className="flex items-center" 
                    style={{ 
                      backgroundColor: '#DADADA99', 
                      borderRadius: '16px', 
                      padding: '8px 16px',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      gap: '8px'
                    }}
                  >
                    <div className="flex flex-row -space-x-2">
                      <div 
                        className="rounded-full overflow-hidden"
                        style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: '#00000033',
                          border: '1px solid #E9E7E6'
                        }}
                      >
                        <Image
                          src="/assets/images/Home/Hero/Ellipse 1.png"
                          alt="User profile 1"
                          width={28}
                          height={28}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div 
                        className="rounded-full overflow-hidden"
                        style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: '#00000033',
                          border: '1px solid #E9E7E6'
                        }}
                      >
                        <Image
                          src="/assets/images/Home/Hero/Ellipse 2.png"
                          alt="User profile 2"
                          width={28}
                          height={28}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div 
                        className="rounded-full overflow-hidden"
                        style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: '#00000033',
                          border: '1px solid #E9E7E6'
                        }}
                      >
                        <Image
                          src="/assets/images/Home/Hero/Ellipse 4.png"
                          alt="User profile 3"
                          width={28}
                          height={28}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div 
                      className="flex flex-row"
                      style={{
                        borderRadius: '18px',
                        padding: '12px',
                        gap: '10px',
                        backgroundColor: '#FFFFFF', 
                      }}
                    >
                      <span 
                        className="flex flex-row whitespace-nowrap" 
                        style={{ 
                          fontFamily: 'Satoshi',
                          fontWeight: 400,
                          fontStyle: 'regular',
                          fontSize: '16px', 
                          letterSpacing: '-0.03em',
                          textAlign: 'center',
                          color: '#000000CC',
                          lineHeight: '1.20em',
                        }}
                      >
                        Over 2K people proved
                      </span>
                    </div>
                    
                  </div>
                  <span 
                    style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 400,
                      fontStyle: 'regular',
                      fontSize: '100px',
                      lineHeight: '1.2em',
                      letterSpacing: '-0.05em',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      color: '#000000'
                    }}
                  >
                    Sparks Discovery.
                  </span>
                </div>
              </div>
              
              {/* Description and CTA Buttons */}
              
              <div 
                className="flex flex-row items-center justify-between"     
              >
                {/* Left - Description Text */}
                <div className="flex flex-row">
                  <p 
                    className="flex max-w-[522px]"
                    style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 400,
                      fontStyle: 'regular',
                      fontSize: '18px',
                      lineHeight: '25px',
                      letterSpacing: '0.0em',
                      textAlign: 'left',
                      verticalAlign: 'middle',
                      color: '#000000',
                    }}
                  >
                  We are a global creative tech studio forging delightful experiences by blending design, technology. Driven to create value for people and brands through interaction
                  </p>
                </div>
                             
                {/* Right - CTA Buttons */}
                <div 
                  className="flex flex-row"
                  style={{ gap: '10px' }}
                >
                  <Link 
                    href="/services" 
                    className="text-white flex items-center justify-center mx-w-[153px]"
                    style={{ 
                      backgroundColor: '#FE0B5F', 
                      borderRadius: '12px',
                      padding: '14px 22px',
                      gap: '10px'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: 'Inter Tight',
                        fontWeight: 400,
                        fontStyle: 'regular',
                        fontSize: '16px',
                        lineHeight: '120%',
                        letterSpacing: '-0.05em',          
                      }}
                    >
                      Our Services
                    </span>
                    <ArrowUpRight                       
                      style={{ 
                        width: '10.94px', 
                        height: '11px',
                      }} 
                    />
                  </Link>
                
                  <Link 
                    href="/projects" 
                    className="text-black flex items-center justify-center"
                    style={{ 
                      backgroundColor: '#F2EFEB', 
                      maxWidth: '196px',
                      borderRadius: '12px',
                      padding: '14px 22px',
                      gap: '10px'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: 'Inter Tight',
                        fontWeight: 400,
                        fontStyle: 'regular',
                        fontSize: '16px',
                        lineHeight: '120%',
                        letterSpacing: '-0.05em',          
                      }}
                    >
                      Our Featured Work
                    </span>
                    <ArrowUpRight                       
                      style={{ 
                        width: '10.94px', 
                        height: '11px',
                      }} 
                    />
                  </Link>
                </div>
              </div>
            
            </div>

            
          </div>
        
      </div>
    </section>
  )
} 