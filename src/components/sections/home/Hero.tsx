import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Star, Check } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Section */}
        <div className="py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="pl-20 pr-30">
              <h1 className="text-6xl lg:text-[76px] font-normal text-black mb-6 font-inter-tight tracking-tight" style={{ lineHeight: '85px', letterSpacing: '-5px' }}>
                We Don't Just Build Digital We Build Different
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/services" className="text-white rounded-xl flex items-center justify-center font-inter-tight tracking-tight" style={{ backgroundColor: '#FE0B5F', width: '153px', height: '47px', fontSize:'16px'}}>
                  <span className="font-inter-tight">Our Services</span>
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Link>
                
                <Link href="/projects" className="text-black flex items-center justify-center font-inter-tight tracking-tight" style={{ backgroundColor: '#F2EFEB', width: '196px', height: '47px', borderRadius: '12px', fontSize: '16px'}}>
                  <span>Our Featured Work</span>
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="space-y-4 pl-36 pr-20">
              <p className="text-black leading-relaxed font-inter-tight font-normal tracking-tight" style={{ fontSize: '16px', lineHeight: '25px' }}>
                Your idea deserves more than just another website. <br />
                We're the creative partners who turn your vision into digital experiences.
              </p>
              
              {/* Divider */}
              <div className="w-full h-px" style={{ backgroundColor: '#D2D2D2' }}></div>
              
              {/* Social Proof */}
              <div className="flex items-center justify-between pr-5">
                {/* Star Rating Section */}
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" style={{ color: '#FE0B5F' }} />
                    ))}
                  </div>
                  <span className="text-black font-normal font-inter-tight tracking-tight" style={{ fontSize: '14px' }}>200+ Five Star Rating</span>
                </div>
                
                {/* Founder Endorsement Section */}
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-4">
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src="/assets/images/Home/Hero/Ellipse 1.png"
                        alt="Founder profile 1"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src="/assets/images/Home/Hero/Ellipse 2.png"
                        alt="Founder profile 2"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src="/assets/images/Home/Hero/Ellipse 4.png"
                        alt="Founder profile 3"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start " style={{ lineHeight: '16px' }}>
                    <span className="text-black font-normal font-inter-tight tracking-tight" style={{ fontSize: '16px' }}>Loved by</span>
                    <span className="text-black font-normal font-inter-tight tracking-tight" style={{ fontSize: '16px' }}>300+ Founders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

                {/* Trusted By Section */}
        <div className="border-t border-gray-100 mt-8">
          <div className="text-center">
            <h3 className="text-xl text-gray-600 mb-4 font-inter-tight font-normal tracking-tight">
              Trusted By 180,000+ Customers World Wide
            </h3>
            
            {/* Company Logos */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-0 mt-2">
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/images/Home/Hero/companylogo1.png"
                  width={120}
                  height={32}
                  alt="Company Logo 1"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/images/Home/Hero/companylogo2.png"
                  alt="Company Logo 2"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/images/Home/Hero/companylogo3.png"
                  alt="Company Logo 3"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/images/Home/Hero/companylogo4.png"
                  alt="Company Logo 4"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/images/Home/Hero/companylogo5.png"
                  alt="Company Logo 5"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
            
            {/* Get In Touch Button - Fixed Position */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
              {/* Outer gray container */}
              <div 
                className="flex items-center justify-between relative overflow-hidden"
                style={{ 
                  background: '#F8FAFC',
                  border: '1px solid #CAD5E2',
                  borderRadius: '12px'
                }}
              >
                {/* Inner white button */}
                <div 
                  className="flex items-center justify-between"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    margin: '10px 10px 10px 10px',
                    borderRadius: '12px'
                  }}
                >
                  <span 
                    className="font-inter-tight font-normal text-base tracking-tight"
                    style={{
                      color: '#000000',
                      margin: '6px 15px 6px 15px'
                    }}
                  >
                    Get In Touch With Us
                  </span>
                  
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center relative"
                    style={{
                      background: 'linear-gradient(135deg, #FE0B5F 0%, #FF5993 100%)'
                    }}
                  >
                    {/* Animated circle effect */}
                    <div 
                      className="absolute rounded-full animate-ping"
                      style={{
                        width: '45px',
                        height: '45px',
                        background: 'linear-gradient(135deg, #FE0B5F 0%, #FF5993 100%)',
                        opacity: '0.3'
                      }}
                    />
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


      </div>
    </section>
  )
} 