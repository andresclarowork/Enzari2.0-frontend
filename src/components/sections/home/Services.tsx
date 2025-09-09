'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const services = [
  { 
    name: 'Product Design', 
    isHighlighted: true,
    leftImage: '/assets/images/Home/Services/1-L.png',
    rightImage: '/assets/images/Home/Services/1-R.png'
  },
  { 
    name: 'Branding', 
    isHighlighted: false,
    leftImage: '/assets/images/Home/Services/2-L.png',
    rightImage: '/assets/images/Home/Services/2-R.png'
  },
  { 
    name: 'Graphic Designing', 
    isHighlighted: false,
    leftImage: '/assets/images/Home/Services/3-L.png',
    rightImage: '/assets/images/Home/Services/3-R.png'
  },
  { 
    name: 'AI Production', 
    isHighlighted: false,
    leftImage: '/assets/images/Home/Services/4-L.png',
    rightImage: '/assets/images/Home/Services/4-R.png'
  },
  { 
    name: 'Motion Design', 
    isHighlighted: false,
    leftImage: '/assets/images/Home/Services/5-L.png',
    rightImage: '/assets/images/Home/Services/5-R.png'
  },
  { 
    name: 'Web Design', 
    isHighlighted: false,
    leftImage: '/assets/images/Home/Services/6-L.png',
    rightImage: '/assets/images/Home/Services/6-R.png'
  },
]

export function Services() {
  const [hoveredService, setHoveredService] = useState(0) // Default to first service active

  return (
    <section className="flex pt-8 sm:pt-12 md:pt-16 lg:pt-[132px] pb-8 sm:pb-12 md:pb-16 lg:pb-[120px] bg-white">
         
      <div className="flex flex-col lg:flex-row justify-between w-full px-4 sm:px-6 md:px-8 lg:px-0" style={{ minHeight: '600px' }}>
        
        {/* Mobile Layout - Stacked vertically */}
        <div className="flex flex-col lg:hidden w-full gap-8">
          {/* Mobile - Title */}
          <div className="text-center">
            <h3 
              className="text-lg sm:text-xl md:text-2xl"
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,
                fontStyle: 'regular',
                fontSize: '22px',
                lineHeight: '25px',
                letterSpacing: '-0.04em',
                textAlign: 'center',        
                color: '#111111',           
              }}
            >           
              Our Services            
            </h3>
          </div>

          {/* Mobile - Services List */}
          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative cursor-pointer transition-all duration-300 text-xl sm:text-2xl md:text-3xl"
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  lineHeight: '1.0em',
                  letterSpacing: '-0.05em',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  color: service.isHighlighted ? '#000000' : '#000000',
                  opacity: hoveredService === index ? '1' : '0.3'
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(0)}
              >
                {service.name}                
              </div>
            ))}
          </div>

          {/* Mobile - Project Showcase */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-[280px] sm:max-w-[320px] h-[200px] sm:h-[240px] relative overflow-hidden shadow-2xl transition-all duration-300" style={{ borderRadius: '24px', backgroundColor:'#F2EFEB' }}>
              <Image
                src={services[hoveredService]?.rightImage || services[0].rightImage}
                alt={`${services[hoveredService]?.name || services[0].name} - Project Image`}
                fill
                className="object-cover transition-all duration-500"
              />
            </div>
            <p 
              className="text-sm sm:text-base text-center max-w-[320px]"
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,
                fontStyle: 'regular',
                fontSize: '16px',
                lineHeight: '20px',
                letterSpacing: '0%',
                verticalAlign: 'middle',
                color: '#000000',
                textAlign: 'center'
              }}
            >
              A showcase of our most impactful projects where creative vision meets flawless execution.
            </p>
          </div>

          {/* Mobile - CTA Buttons */}
          <div className="flex flex-col gap-3">
            <Link 
              href="/services" 
              className="text-white flex items-center justify-center w-full"
              style={{ 
                backgroundColor: '#FE0B5F', 
                borderRadius: '12px',
                padding: '14px 22px',
                gap: '10px'
              }}
            >
              <span 
                className="text-sm sm:text-base"
                style={{
                fontFamily: 'var(--font-saans-trial)',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '1.2em',
                letterSpacing: '-0.05em',
                color: '#FFFFFF'
                }}
              >
                Our Services
              </span>
              <ArrowUpRight 
                className="text-white w-3 h-3"
                style={{ 
                  width: '10.94px', 
                  height: '11px',                  
                }} 
              />
            </Link>
            
            <Link href="/projects" className="text-black flex items-center justify-center w-full" 
              style={{ 
                backgroundColor: '#F2EFEB', 
                borderRadius: '12px',
                padding: '14px 22px',
                gap: '10px'
              }}
            >
              <span
                className="text-sm sm:text-base"
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  fontSize: '16px',
                  lineHeight: '1.2em',
                  letterSpacing: '-0.05em',
                  color: '#000000'
                }}
              >Our Featured Work</span>
              <ArrowUpRight 
                className="text-black w-3 h-3"
                style={{ 
                  width: '10.94px', 
                  height: '11px',                  
                }} 
              />
            </Link>
          </div>
        </div>

        {/* Desktop Layout - Original 3-column layout */}
        <div className="hidden lg:flex flex-row justify-between w-full grid grid-cols-3 gap-16 items-stretch">
          {/* Left Side - Services List + Phone at bottom */}
          <div className={`flex flex flex-col justify-end pl-[30px] transition-all duration-300 ${hoveredService >= 0 ? 'opacity-100' : 'opacity-0'}`}>                   
            <div className="flex flex-col items-start gap-5">
              <div className="w-[346px] h-[286px] relative overflow-hidden shadow-2xl transition-all duration-300" style={{ borderRadius: '24px', backgroundColor:'#F2EFEB' }}>
                <Image
                  src={services[hoveredService]?.leftImage || services[0].leftImage}
                  alt={`${services[hoveredService]?.name || services[0].name} - Left Image`}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
              <p 
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#000000',
                  textAlign: 'left',
                  maxWidth: '320px'
                }}
              >
                A showcase of our most impactful projects where creative vision meets flawless execution.
              </p>
            </div>
          </div>
          
          {/* Center - Title and Buttons */}
          <div className="flex flex-col text-center" style={{ gap:'50px'}}>          
            <h3 
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,
                fontStyle: 'regular',
                fontSize: '22px',
                lineHeight: '25px',
                letterSpacing: '-0.04em',
                textAlign: 'center',        
                color: '#111111',           
              }}
            >           
              Our Services            
            </h3>
            <div className="flex flex-col" style={{ gap:'39px'}}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer transition-all duration-300"
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    fontSize: '72px',
                    lineHeight: '1.0em',
                    letterSpacing: '-0.05em',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    color: service.isHighlighted ? '#000000' : '#000000',
                    opacity: hoveredService === index ? '1' : '0.3'
                  }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(0)}
                >
                  {service.name}                
                </div>
              ))}
            </div>                   
            <div className="flex flex-col sm:flex-row justify-center" style={{ gap:'10px'}}>
              <Link 
                href="/services" 
                className="text-white flex items-center justify-center"
                style={{ 
                  backgroundColor: '#FE0B5F', 
                  maxWidth: '153px',
                  borderRadius: '12px',
                  padding: '14px 22px',
                  gap: '10px'
                }}
              >
                <span 
                  style={{
                  fontFamily: 'var(--font-saans-trial)',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '1.2em',
                  letterSpacing: '-0.05em',
                  color: '#FFFFFF'
                  }}
                >
                  Our Services
                </span>
                <ArrowUpRight 
                  className="text-white"
                  style={{ 
                    width: '10.94px', 
                    height: '11px',                  
                  }} 
                />
              </Link>
              
              <Link href="/projects" className="text-black flex items-center justify-center " 
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
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    fontSize: '16px',
                    lineHeight: '1.2em',
                    letterSpacing: '-0.05em',
                    color: '#000000'
                  }}
                >Our Featured Work</span>
                <ArrowUpRight 
                  className="text-black"
                  style={{ 
                    width: '10.94px', 
                    height: '11px',                  
                  }} 
                />
              </Link>
            </div>
          </div>
          
          {/* Right Side - Phone at top */}      
          <div className={`flex flex flex-col justify-start items-end pr-[30px] transition-all duration-300 ${hoveredService >= 0 ? 'opacity-100' : 'opacity-0'}`}>                    
            <div className="flex flex-col items-start gap-5">
              <div className="w-[346px] h-[286px] relative overflow-hidden shadow-2xl transition-all duration-300" style={{ borderRadius: '24px', backgroundColor:'#F2EFEB' }}>
              <Image
                src={services[hoveredService]?.rightImage || services[0].rightImage}
                alt={`${services[hoveredService]?.name || services[0].name} - Right Image`}
                fill
                className="object-cover transition-all duration-500"
              />
              </div>
              <p 
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#000000',
                  textAlign: 'left',
                  maxWidth: '320px'
                }}
              >
                A showcase of our most impactful projects where creative vision meets flawless execution.
              </p>
            </div>
          </div>
        </div>
      </div>        
      
    </section>
  )
}
