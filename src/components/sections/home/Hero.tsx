import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto bg-white" style={{ paddingTop: '60px' }}>
      <div style={{ paddingLeft: '100px', paddingRight: '100px' }}>
        <div style={{ maxWidth: '1240px' }}>
          {/* Top Section - Title and Social Description */}
          <div className="flex flex-row" style={{ gap: '40px', justifyContent: 'space-between' }}>
            {/* Left Content - Title */}
            <div className='flex'>
              <h1 
                style={{                  
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  fontSize: '80px',
                  lineHeight: '86px',
                  letterSpacing: '-0.03em',
                  verticalAlign: 'middle',
                  color: '#000000',
                  maxWidth: '550px',
                  margin: '0',
                  padding: '0'
                }}
              >
                We Don't Just Build Digital We Build Different
              </h1>
            </div>
            
            {/* Right Content - Social Description */}
            <div className="flex flex-col justify-end pb-4">
              <div  style={{ maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <p 
                  className="text-black"
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'Regular',
                    fontSize: '18px',
                    lineHeight: '25px',
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
                <div style={{ display: 'flex', flexDirection: 'row', gap: '32px', alignItems: 'center' }}>
                  {/* Star Rating Section */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', width: '120px', alignItems: 'center' }}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20" style={{ width: '20px', height: '20px', color: '#FE0B5F' }}>
                          <path d="M10 0l2.5 7.5h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" />
                        </svg>
                      ))}
                    </div>
                    <span 
                      className="text-black"
                      style={{
                        fontFamily: 'var(--font-inter-tight)',
                        fontWeight: 400,
                        fontStyle: 'regular',
                        fontSize: '16px',
                        lineHeight: '1.0em',
                        letterSpacing: '0%',
                        verticalAlign: 'middle',
                        color: '#000000'
                      }}
                    >
                      200+ Five Star Rating
                    </span>
                  </div>
                  
                  {/* Founder Endorsement Section */}
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '15px', alignItems: 'center' }}>
                    <div className="flex -space-x-4 justify-between">
                      <div 
                        className="rounded-full overflow-hidden relative"
                        style={{
                          width: '41.08px',
                          height: '41.08px',
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
                        className="rounded-full overflow-hidden relative"
                        style={{
                          width: '41.08px',
                          height: '41.08px',
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
                        className="rounded-full overflow-hidden relative"
                        style={{
                          width: '41.08px',
                          height: '41.08px',
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
                    <div className='flex flex-col'>
                      <span 
                        className="text-black"
                        style={{
                          fontFamily: 'var(--font-inter-tight)',
                          fontWeight: 400,
                          fontStyle: 'regular',
                          fontSize: '16px',
                          lineHeight: '1.0em',
                          letterSpacing: '0%',
                          verticalAlign: 'middle',
                          color: '#000000'
                        }}
                      >
                        Loved by
                      </span>
                      <span 
                        className="text-black"
                        style={{
                          fontFamily: 'var(--font-inter-tight)',
                          fontWeight: 400,
                          fontStyle: 'regular',
                          fontSize: '16px',
                          lineHeight: '1.0em',
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
          <div className="flex flex-row sm:flex-row items-start pt-10" style={{ gap: '10px' }}>
            <Link 
              href="/services" 
              className="text-white rounded-xl flex items-center justify-center"
              style={{ 
                backgroundColor: '#FE0B5F', 
                maxWidth: '153px', 
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
              className="text-black flex items-center justify-center"
              style={{ 
                backgroundColor: '#F2EFEB', 
                maxWidth: '196px', 
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
          <div style={{ paddingTop: '80px' }}>
            <div className="text-center" style={{ display: 'flex', flexDirection: 'column', gap: '33px' }}>
              <h3 
                style={{
                  fontFamily: 'var(--font-neue-montreal)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  fontSize: '20px',
                  lineHeight: '1.0em',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  color: '#1F1F20'
                }}
              >
                Trusted By 180,000+ Customers World Wide
              </h3>
              
              {/* Company Logos */}
              <div 
                className="flex items-center"
                style={{ 
                  justifyContent: 'space-between',
                  gap: '4px',
                  height: '33.55px'
                }}
              >
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/images/Home/Hero/companylogo1.png"
                    width={120}
                    height={32}
                    alt="Company Logo 1"
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/images/Home/Hero/companylogo2.png"
                    alt="Company Logo 2"
                    width={120}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/images/Home/Hero/companylogo3.png"
                    alt="Company Logo 3"
                    width={120}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/images/Home/Hero/companylogo4.png"
                    alt="Company Logo 4"
                    width={120}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/images/Home/Hero/companylogo5.png"
                    alt="Company Logo 5"
                    width={120}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Get In Touch Button - Fixed Position */}
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
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
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 500,
                    fontStyle: 'medium',
                    fontSize: '16px',
                    lineHeight: '1.2em',
                    letterSpacing: '-5%',
                    textAlign: 'center',
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