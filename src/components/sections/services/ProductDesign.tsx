import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export function ProductDesign() {
  // Style constants
  const numberStyle = {
    fontFamily: 'var(--font-inter-tight)',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '19.5px'
  }

  const titleStyle = {
    fontFamily: 'var(--font-inter-tight)',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '23.4px',
    letterSpacing: '0%'
  }

  const descriptionStyle = {
    fontFamily: 'var(--font-inter-tight)',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '25px',
    color: 'rgba(0, 0, 0, 0.5)'
  }

  const arrowStyle = { width: '16px', height: '16px' }

  // Services data
  const services = [
    {
      id: '01',
      title: 'Research',
      description: 'We conduct in-depth research from competitor analysis to user interviews uncovering real needs, market gaps, and data-driven insights.'
    },
    {
      id: '02',
      title: 'Prototyping',
      description: 'Build interactive prototypes that bring your ideas to life, allowing you to test and refine concepts before development.'
    },
    {
      id: '03',
      title: 'UX Test',
      description: 'Comprehensive user experience testing to validate designs and ensure optimal usability across all touchpoints.'
    },
    {
      id: '04',
      title: 'UI Design',
      description: 'Create beautiful, intuitive user interfaces that enhance user engagement and drive meaningful interactions.'
    },
    {
      id: '05',
      title: 'Design System',
      description: 'Establish consistent design systems that ensure brand coherence and accelerate development across all products.'
    }
  ]
  return (
    <section className="flex max-w-[1440px] mx-auto gap-20 pl-[100px] pr-[100px] pt-[120px] bg-white">
      <div className="flex flex-row w-[100%] justify-between">
        
        <div className="flex flex-col gap-[23px] max-w-[593px]">
          <div className="flex flex-col gap-[30px]">
            <p 
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,
                fontSize: '42px',
                lineHeight: '0.8em',
                letterSpacing: '-0.05em'
              }}
            >
              Product Design Services
            </p>
            <p 
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '25px',                          
              }}
            >
              We design digital products with a user-first approach, focusing on intuitive UX, sleek UI, and seamless functionality. Every solution is tailored to your goals built to look great, solve real problems, and scale with performance.
            </p>
          </div>
          
          <div className="flex flex-col">
            {services.map((service, index) => (
              <div key={service.id} className="group flex items-center justify-between py-4 border-b border-[#F0F0F0] transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <span 
                    className="text-[#5A5A5A] group-hover:text-[#1B1B1B] transition-colors"
                    style={numberStyle}
                  >
                    {service.id}
                  </span>
                  <div className="flex flex-col hover:text-[#1B1B1B] transition-colors">
                    <h3 
                      className="text-[#5A5A5A] group-hover:text-[#1B1B1B] transition-colors"
                      style={titleStyle}
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="hidden group-hover:block transition-all duration-300 pt-[12px]"
                      style={descriptionStyle}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <ArrowUpRight 
                    className="group-hover:opacity-0 transition-opacity duration-300" 
                    style={{ ...arrowStyle, color: '#5A5A5A' }}
                  />
                  <ArrowDownRight  
                    className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{ ...arrowStyle, color: '#1B1B1B' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start">
             <Link 
                href="/services" 
                className="text-white flex items-center justify-center w-auto"
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
                View All Projects
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

        <div className="flex rounded-[32px] max-w-[597px] overflow-hidden">
          <Image
            src="/assets/images/Services/service-product.png"
            alt="ProductDesign"
            width={597}
            height={564}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
