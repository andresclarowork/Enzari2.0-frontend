import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto bg-white pt-8 sm:pt-12 md:pt-16 lg:pt-[60px] px-4 sm:px-6 md:px-8 lg:px-[100px]">
      <div className="px-4 sm:px-6 md:px-8 lg:px-[100px]">
        <div className="max-w-full lg:max-w-[1240px]">
          {/* Top Section - Title and Social Description */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[40px] lg:justify-between">
            {/* Left Content - Title */}
            <div className='flex'>
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[86px] text-center lg:text-left max-w-full lg:max-w-[550px] m-0 p-0"
                style={{                  
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  letterSpacing: '-0.03em',
                  verticalAlign: 'middle',
                  color: '#000000'
                }}
              >
                We Don't Just Build Digital We Build Different
              </h1>
            </div>
            
            {/* Right Content - Social Description */}
            <div className="flex flex-col justify-end pb-0 lg:pb-4 items-center lg:items-start">
              <div className="max-w-full lg:max-w-[420px] flex flex-col gap-4 sm:gap-5 lg:gap-[25px]">
                <p 
                  className="text-black text-sm sm:text-base lg:text-[18px] leading-relaxed sm:leading-relaxed lg:leading-[25px] text-center lg:text-left"
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'Regular',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    color: '#000000'
                  }}
                >
                  Your idea deserves more than just another website. <br />
                  We're the creative partners who turn your vision into digital experiences.
                </p>
                
                {/* Divider */}
                <div style={{ height: '1px', backgroundColor: '#D2D2D2' }}></div>
                
                {/* Social Proof */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-[32px] items-center">
                  {/* Star Rating Section */}
                  <div className="flex flex-col gap-2 sm:gap-2 lg:gap-[12px] items-center sm:items-start">
                    <div className="flex flex-row gap-1 sm:gap-1 lg:gap-[5px] w-auto sm:w-auto lg:w-[120px] items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" viewBox="0 0 20 20" style={{ color: '#FE0B5F' }}>
                          <path d="M10 0l2.5 7.5h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" />
                        </svg>
                      ))}
                    </div>
                    <span 
                      className="text-black text-xs sm:text-sm lg:text-[16px] leading-tight text-center sm:text-left"
                      style={{
                        fontFamily: 'var(--font-inter-tight)',
                        fontWeight: 400,
                        fontStyle: 'regular',
                        letterSpacing: '0%',
                        verticalAlign: 'middle',
                        color: '#000000'
                      }}
                    >
                      200+ Five Star Rating
                    </span>
                  </div>
                  
                  {/* Founder Endorsement Section */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 lg:gap-[15px] items-center">
                    <div className="flex -space-x-2 sm:-space-x-2 lg:-space-x-4 justify-between">
                      <div 
                        className="rounded-full overflow-hidden relative w-8 h-8 sm:w-8 sm:h-8 lg:w-[41.08px] lg:h-[41.08px]"
                        style={{
                          border: '0.86px solid #E9E7E6',
                          backgroundColor: '#00000033',
                          zIndex: 3
                        }}
                      >
                        <Image
                          src="/assets/images/Home/Hero/Ellipse 1.png"
                          alt="User profile 1"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div 
                        className="rounded-full overflow-hidden relative w-8 h-8 sm:w-8 sm:h-8 lg:w-[41.08px] lg:h-[41.08px]"
                        style={{
                          border: '0.86px solid #E9E7E6',
                          backgroundColor: '#00000033',
                          zIndex: 2
                        }}
                      >
                        <Image
                          src="/assets/images/Home/Hero/Ellipse 2.png"
                          alt="User profile 2"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div 
                        className="rounded-full overflow-hidden relative w-8 h-8 sm:w-8 sm:h-8 lg:w-[41.08px] lg:h-[41.08px]"
                        style={{
                          border: '0.86px solid #E9E7E6',
                          backgroundColor: '#00000033',
                          zIndex: 1
                        }}
                      >
                        <Image
                          src="/assets/images/Home/Hero/Ellipse 4.png"
                          alt="User profile 3"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className='flex flex-col items-center sm:items-start'>
                      <span 
                        className="text-black text-xs sm:text-sm lg:text-[16px] leading-tight text-center sm:text-left"
                        style={{
                          fontFamily: 'var(--font-inter-tight)',
                          fontWeight: 400,
                          fontStyle: 'regular',
                          letterSpacing: '0%',
                          verticalAlign: 'middle',
                          color: '#000000'
                        }}
                      >
                        Loved by
                      </span>
                      <span 
                        className="text-black text-xs sm:text-sm lg:text-[16px] leading-tight text-center sm:text-left"
                        style={{
                          fontFamily: 'var(--font-inter-tight)',
                          fontWeight: 400,
                          fontStyle: 'regular',
                          letterSpacing: '0%',
                          verticalAlign: 'middle',
                          color: '#000000'
                        }}
                      >
                        300+ Founders
                      </span>
                    </div>               
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Bottom Section - CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start pt-8 sm:pt-10 gap-3 sm:gap-3 lg:gap-[10px]">
            <Link 
              href="/services" 
              className="text-white rounded-xl flex items-center justify-center w-full sm:w-auto sm:max-w-[200px] lg:max-w-[153px]"
              style={{ 
                backgroundColor: '#FE0B5F', 
                borderRadius: '12px',
                padding: '14px 22px',
                gap: '10px'
              }}
            >
              <div 
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  fontSize: '16px',
                  lineHeight: '1.2em',
                  letterSpacing: '-0.5px',
                  color: '#FFFFFF'
                }}
              >
                Our Services
              </div>
              <ArrowUpRight 
                className="text-white" 
                style={{ 
                  width: '10.94px', 
                  height: '11px',                  
                }} 
              />
            </Link>
            
            <Link 
              href="/projects" 
              className="text-black flex items-center justify-center w-full sm:w-auto sm:max-w-[240px] lg:max-w-[196px]"
              style={{ 
                backgroundColor: '#F2EFEB', 
                borderRadius: '12px',
                padding: '14px 22px',
                gap: '10px'
              }}
            >
              <div 
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  fontSize: '16px',
                  lineHeight: '1.2em',
                  letterSpacing: '-0.5px',
                  color: '#000000'
                }}
              >
                Our Featured Work
              </div>
              <ArrowUpRight 
                className="text-black" 
                style={{ 
                  width: '10.94px', 
                  height: '11px',                  
                }} 
              />
            </Link>
          </div>
          
          {/* Trusted By Section */}
          <div className="pt-12 sm:pt-16 lg:pt-[80px]">
            <div className="text-center flex flex-col gap-6 sm:gap-6 lg:gap-[33px]">
              <h3 
                className="text-sm sm:text-base lg:text-[20px] leading-tight text-center capitalize"
                style={{
                  fontFamily: 'var(--font-neue-montreal)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  letterSpacing: '0%',
                  textTransform: 'capitalize',
                  color: '#1F1F20'
                }}
              >
                Trusted By 180,000+ Customers World Wide
              </h3>
              
              {/* Company Logos */}
              <div 
                className="flex items-center flex-wrap justify-center sm:justify-center lg:justify-between gap-2 sm:gap-2 lg:gap-[4px] h-auto sm:h-auto lg:h-[33.55px]"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/images/Home/Hero/companylogo1.png"
                    width={120}
                    height={32}
                    alt="Company Logo 1"
                    className="object-contain w-16 sm:w-20 lg:w-[120px] h-auto sm:h-auto lg:h-[32px]"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/images/Home/Hero/companylogo2.png"
                    alt="Company Logo 2"
                    width={120}
                    height={32}
                    className="object-contain w-16 sm:w-20 lg:w-[120px] h-auto sm:h-auto lg:h-[32px]"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/images/Home/Hero/companylogo3.png"
                    alt="Company Logo 3"
                    width={120}
                    height={32}
                    className="object-contain w-16 sm:w-20 lg:w-[120px] h-auto sm:h-auto lg:h-[32px]"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/images/Home/Hero/companylogo4.png"
                    alt="Company Logo 4"
                    width={120}
                    height={32}
                    className="object-contain w-16 sm:w-20 lg:w-[120px] h-auto sm:h-auto lg:h-[32px]"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/images/Home/Hero/companylogo5.png"
                    alt="Company Logo 5"
                    width={120}
                    height={32}
                    className="object-contain w-16 sm:w-20 lg:w-[120px] h-auto sm:h-auto lg:h-[32px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Get In Touch Button - Fixed Position */}
          <div className="fixed bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-4 sm:px-6 lg:px-0">
            {/* Outer gray container */}
            <div 
              className="flex items-center justify-between relative overflow-hidden"
              style={{ 
                background: '#0000001A',
                borderRadius: '21.13px',
                width: '255px',
                backdropFilter: 'blur(31.69px)',
                WebkitBackdropFilter: 'blur(31.69px)'
              }}
            >
              {/* Inner white button */}
              <div 
                className="flex items-center justify-between"
                style={{
                  background: '#F8FAFC',
                  border: '1.32px solid #CAD5E2',
                  borderRadius: '10.56px',
                  width: '199px',
                  height: '45px',
                  margin: '13px 13px 13px 13px',
                  padding: '13px 16px 13px 16px'
                }}
              >
                <span 
                  className="text-xs sm:text-sm lg:text-[16px] leading-tight text-center"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 500,
                    fontStyle: 'medium',
                    letterSpacing: '-5%',
                    color: '#000000'
                  }}
                >
                  Get In Touch With Us
                </span>
                
                <div 
                  className="rounded-full flex items-center justify-center relative"
                  style={{
                    background: 'linear-gradient(135deg, #FE0B5F 0%, #FF5993 100%)',
                    width: '46.22px',
                    height: '46.22px',
                    position: 'absolute',
                    // top: '7.85px',
                    left: '193.54px',
                    zIndex: 10
                  }}
                >
                  {/* Animated outer circle - pulsing effect */}
                  <div 
                    className="absolute rounded-full"
                    style={{
                      width: '59.42px',
                      height: '59.42px',
                      background: '#FE0B5F4D',
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                      zIndex: -1
                    }}
                  />
                  
                  {/* Inner circle with checkmark */}
                  <svg 
                    className="w-5 h-5 text-white relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2.5} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
} 