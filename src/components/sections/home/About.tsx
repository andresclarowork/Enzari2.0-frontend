import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function About() {
  return (
    <section className="bg-white max-w-[1440px] mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-[80.45px]">
      <div className="px-4 sm:px-6 md:px-8 lg:px-[100px]">
          {/* Intro Video Section */}
          <div className="relative overflow-hidden shadow-2xl max-w-full sm:max-w-[90%] md:max-w-[95%] lg:max-w-[1240px] mx-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[700px] rounded-2xl sm:rounded-3xl md:rounded-3xl lg:rounded-[32px]">
            <video
              src="/assets/images/Home/intro-background-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-auto"
            />
          </div>
          
          {/* Single Column Layout */}
          <div className="flex flex-col justify-center items-center pt-8 sm:pt-12 md:pt-16 lg:pt-[120px]">
            {/* Mobile Layout */}
            <div className="lg:hidden w-full max-w-full">
              {/* Main Headlines */}
              <div className="text-center mb-8">
                <div
                  className="text-3xl sm:text-4xl md:text-5xl leading-tight mb-4" 
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    letterSpacing: '-0.05em',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    color: '#000000',
                  }}
                >
                  Enzari Builds Demand.
                </div>
                <div
                  className="text-3xl sm:text-4xl md:text-5xl leading-tight" 
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    letterSpacing: '-0.05em',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    color: '#000000'
                  }}
                >
                  Sparks Discovery.
                </div>
              </div>

              {/* Social Proof Badge - Mobile */}
              <div className="flex justify-center mb-8">
                <div 
                  className="flex items-center" 
                  style={{ 
                    backgroundColor: '#DADADA99', 
                    borderRadius: '16px', 
                    padding: '12px 20px',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    gap: '12px',
                  }}
                >
                  <div className="flex flex-row -space-x-3">
                    <div 
                      className="rounded-full overflow-hidden relative w-10 h-10"
                      style={{
                        backgroundColor: '#00000033',
                        border: '1px solid #E9E7E6',
                        zIndex: 3
                      }}
                    >
                      <Image
                        src="/assets/images/Home/Hero/Ellipse 1.png"
                        alt="User profile 1"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="rounded-full overflow-hidden relative w-10 h-10"
                      style={{
                        backgroundColor: '#00000033',
                        border: '1px solid #E9E7E6',
                        zIndex: 2
                      }}
                    >
                      <Image
                        src="/assets/images/Home/Hero/Ellipse 2.png"
                        alt="User profile 2"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="rounded-full overflow-hidden relative w-10 h-10"
                      style={{
                        backgroundColor: '#00000033',
                        border: '1px solid #E9E7E6',
                        zIndex: 1
                      }}
                    >
                      <Image
                        src="/assets/images/Home/Hero/Ellipse 4.png"
                        alt="User profile 3"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div 
                    className="flex flex-row"
                    style={{
                      borderRadius: '12px',
                      padding: '8px 12px',
                      backgroundColor: '#FFFFFF', 
                    }}
                  >
                    <span 
                      className="text-sm" 
                      style={{ 
                        fontFamily: 'var(--font-satoshi)',
                        fontWeight: 400,
                        fontStyle: 'regular',
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
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-col" 
              style={{ 
                gap: '50px'
              }}
            >
              <div className="flex flex-col">
                <div
                  className="flex flex-col sm:flex-row items-start text-6xl xl:text-[100px] leading-tight xl:leading-[1.20em]" 
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    letterSpacing: '-0.05em',
                    textAlign: 'left',
                    verticalAlign: 'middle',
                    color: '#000000',
                  }}
                >
                  Enzari Builds Demand.
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-2 lg:gap-[10px]">
                  {/* Desktop: Social Proof first, Sparks Discovery second */}
                  <span 
                  className="flex text-6xl xl:text-[100px] leading-tight xl:leading-[1.2em] order-2 sm:order-2"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      fontStyle: 'regular',
                      letterSpacing: '-0.05em',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      color: '#000000'
                    }}
                  >
                    Sparks Discovery.
                  </span>
                  
                  {/* Social Proof Badge - Desktop */}
                  <div 
                    className="flex items-center w-full sm:w-auto order-1 sm:order-1" 
                    style={{ 
                      backgroundColor: '#DADADA99', 
                      borderRadius: '16px', 
                      padding: '8px 16px',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      gap: '8px',
                      marginLeft:'7px'
                    }}
                  >
                    <div className="flex flex-row -space-x-4 justify-between">
                      <div 
                        className="rounded-full overflow-hidden relative w-12 h-12"
                        style={{
                          backgroundColor: '#00000033',
                          border: '1px solid #E9E7E6',
                          zIndex: 3
                        }}
                      >
                        <Image
                          src="/assets/images/Home/Hero/Ellipse 1.png"
                          alt="User profile 1"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div 
                        className="rounded-full overflow-hidden relative w-12 h-12"
                        style={{
                          backgroundColor: '#00000033',
                          border: '1px solid #E9E7E6',
                          zIndex: 2
                        }}
                      >
                        <Image
                          src="/assets/images/Home/Hero/Ellipse 2.png"
                          alt="User profile 2"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div 
                        className="rounded-full overflow-hidden relative w-12 h-12"
                        style={{
                          backgroundColor: '#00000033',
                          border: '1px solid #E9E7E6',
                          zIndex: 1
                        }}
                      >
                        <Image
                          src="/assets/images/Home/Hero/Ellipse 4.png"
                          alt="User profile 3"
                          width={48}
                          height={48}
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
                        className="flex flex-row whitespace-nowrap text-base" 
                        style={{ 
                          fontFamily: 'var(--font-satoshi)',
                          fontWeight: 400,
                          fontStyle: 'regular',
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
                </div>
              </div>
              
              {/* Description and CTA Buttons */}
              
              <div 
                className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0"     
              >
                {/* Left - Description Text */}
                <div className="flex flex-row w-full lg:w-auto">
                  <p 
                    className="flex max-w-full lg:max-w-[522px] text-sm sm:text-base lg:text-[18px] leading-relaxed sm:leading-relaxed lg:leading-[25px]"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      fontStyle: 'regular',
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
                  className="flex flex-col sm:flex-row w-full lg:w-auto"
                  style={{ gap: '8px sm:8px lg:10px' }}
                >
                  <Link 
                    href="/services" 
                    className="text-white flex items-center justify-center w-full sm:w-auto lg:mx-w-[153px]"
                    style={{ 
                      backgroundColor: '#FE0B5F', 
                      borderRadius: '12px',
                      padding: '14px 22px',
                      gap: '10px'
                    }}
                  >
                    <span 
                      className="text-sm sm:text-base lg:text-[16px]"
                      style={{
                        fontFamily: 'var(--font-inter-tight)',
                        fontWeight: 400,
                        fontStyle: 'regular',
                        lineHeight: '1.2em',
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
                    className="text-black flex items-center justify-center w-full sm:w-auto"
                    style={{ 
                      backgroundColor: '#F2EFEB', 
                      // maxWidth: '196px',
                      borderRadius: '12px',
                      padding: '14px 22px',
                      gap: '10px'
                    }}
                  >
                    <span 
                      className="text-sm sm:text-base lg:text-[16px]"
                      style={{
                        fontFamily: 'var(--font-inter-tight)',
                        fontWeight: 400,
                        fontStyle: 'regular',
                        lineHeight: '1.2em',
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