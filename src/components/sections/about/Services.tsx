'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    number: '01',
    title: 'Strategy',
    description: 'We develop comprehensive strategies that align with your business goals and market positioning.'
  },
  {
    number: '02',
    title: 'Creative',
    description: 'Our creative team brings innovative ideas to life through stunning visual design and user experiences.'
  },
  {
    number: '03',
    title: 'Production',
    description: 'We execute projects with precision, ensuring high-quality deliverables that exceed expectations.'
  },
  {
    number: '04',
    title: 'Tech & Dev',
    description: 'We power innovation through seamless front-end, robust back-end, machine learning, game engines, mobile apps, AR/VR, and AI—backed by rigorous Quality Assurance.'
  }
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="flex flex-col pt-[88px] pl-[40px] pr-[40px] max-w-[1440px] mx-auto">
      <div className="flex flex-col">
        {services.map((service, index) => (
          <div 
            key={index}
            className="flex flex-col bg-white border-b border-[#E5E5E5] cursor-pointer transition-all duration-300"
            style={{
              paddingTop: '37px',
              paddingBottom: '37px',
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid #E5E5E5'
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[150px] ">
                <span 
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,                 
                    fontStyle: 'regular',
                    fontSize: '60px',
                    lineHeight: '1em',
                    letterSpacing: '-0.05em',
                    verticalAlign: 'center',
                    color: hoveredIndex === index ? '#000000' : '#9B9B9B'
                  }}
                >
                  {service.number}
                </span>
                <div className="flex flex-col max-w-[724px]">
                    <h3 
                    style={{
                        fontFamily: 'var(--font-inter-tight)',
                        fontWeight: 400,
                        fontStyle: 'regular',
                        fontSize: '60px',
                        lineHeight: '1em',
                        letterSpacing: '-0.05em',
                        verticalAlign: 'center',
                        color: hoveredIndex === index ? '#000000' : '#9B9B9B'
                    }}
                    >
                    {service.title}
                    </h3>
                    {/* Description - shown on hover */}
                    {hoveredIndex === index && (
                    <div className="mt-6 animate-in slide-in-from-top-2 duration-300">
                        <p 
                        style={{
                            fontFamily: 'var(--font-inter-tight)',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '25px',
                            color: '#000000'
                        }}
                        >
                        {service.description}
                        </p>
                    </div>
                    )}
                </div>
              </div>
              
              <ArrowRight 
                className="w-[52px] h-[52px] transition-colors duration-300"
                style={{ color: hoveredIndex === index ? '#000000' : '#9B9B9B' }}
              />
            </div>

            
          </div>
        ))}
      </div>
    </section>
  )
}
