'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const services = [
  { 
    name: 'Product Design', 
    isHighlighted: true,
    leftImage: '/assets/images/Home/Services/Service1.png',
    rightImage: '/assets/images/Home/Services/Service2.png'
  },
  { 
    name: 'Branding', 
    isHighlighted: false,
    leftImage: '/assets/images/Home/Services/Service1.png',
    rightImage: '/assets/images/Home/Services/Service2.png'
  },
  { 
    name: 'Graphic Designing', 
    isHighlighted: false,
    leftImage: '/assets/images/Home/Services/Service1.png',
    rightImage: '/assets/images/Home/Services/Service2.png'
  },
  { 
    name: 'AI Production', 
    isHighlighted: false,
    leftImage: '/assets/images/Home/Services/Service1.png',
    rightImage: '/assets/images/Home/Services/Service2.png'
  },
  { 
    name: 'Motion Design', 
    isHighlighted: false,
    leftImage: '/assets/images/Home/Services/Service1.png',
    rightImage: '/assets/images/Home/Services/Service2.png'
  },
  { 
    name: 'Web Design', 
    isHighlighted: false,
    leftImage: '/assets/images/Home/Services/Service1.png',
    rightImage: '/assets/images/Home/Services/Service2.png'
  },
]

export function Services() {
  const [hoveredService, setHoveredService] = useState(0) // Default to first service active

  return (
    <section className="flex pt-[132px] pb-[120px] bg-white">
         
      <div className="flex flex-row justify-between w-full grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch" style={{ minHeight: '600px' }}>
        {/* Left Side - Services List + Phone at bottom */}
        <div className={`flex lg:order-1 flex flex-col justify-end pl-[30px] transition-all duration-300 ${hoveredService >= 0 ? 'opacity-100' : 'opacity-0'}`}>                   
          <div className="flex flex-col items-start gap-5">
            <div className="w-[346px] h-[286px] relative overflow-hidden shadow-2xl transition-all duration-300" style={{ borderRadius: '24px', backgroundColor:'#F2EFEB' }}>
            <Image
              src="/assets/images/Home/Services/Service1.png"
              alt="Mobile App Interface 1"
              fill
              className="object-cover transition-all duration-300"
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
        <div className="flex text-center flex flex-col lg:order-2 max-w-[508px]" style={{ gap:'50px'}}>          
          <h3 
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '22px',
              lineHeight: '25px',
              letterSpacing: '-0.04em',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: '#111111',           
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
                onMouseLeave={() => setHoveredService(-1)} // Reset to no service on leave
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
        <div className={`flex lg:order-3 flex flex-col justify-start items-end pr-[30px] transition-all duration-300 ${hoveredService >= 0 ? 'opacity-100' : 'opacity-0'}`}>                    
          <div className="flex flex-col items-start gap-5">
            <div className="w-[346px] h-[286px] relative overflow-hidden shadow-2xl transition-all duration-300" style={{ borderRadius: '24px', backgroundColor:'#F2EFEB' }}>
            <Image
              src="/assets/images/Home/Services/Service2.png"
              alt="Mobile App Interface 2"
              fill
              className="object-cover transition-all duration-300"
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
      
    </section>
  )
}
