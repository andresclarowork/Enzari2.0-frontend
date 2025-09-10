import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export function VisualDesign() {
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
      title: '2D Illustration',
      description: 'We create illustrations that add personality, clarity, and impact from editorial art to icon sets enhancing storytelling and making your brand unforgettable.'
    },
    {
      id: '02',
      title: '3D Illustration',
      description: 'Stunning 3D illustrations and visualizations that bring depth and dimension to your brand, creating immersive experiences that captivate your audience.'
    },
    {
      id: '03',
      title: 'Motion Graphic',
      description: 'Dynamic motion graphics and animations that bring your brand to life, creating engaging visual stories that capture attention and drive engagement.'
    },
    {
      id: '04',
      title: 'Graphic Design',
      description: 'Comprehensive graphic design solutions that communicate your message effectively through thoughtful typography, layout, and visual hierarchy.'
    },
    {
      id: '05',
      title: 'Social Media Design',
      description: 'Eye-catching social media graphics and templates that maintain brand consistency while optimizing for each platform\'s unique requirements and audience.'
    },
    {
      id: '06',
      title: 'Marketing Design',
      description: 'Strategic marketing materials that drive conversions and build brand awareness, from brochures to digital ads that resonate with your target audience.'
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
              Visual Design Services
            </p>
            <p 
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '25px',                          
              }}
            >
              We provide end-to-end design solutions from brand identity to print-ready materials. From logos to pitch decks, every detail reflects your vision, delivered with consistency, creativity, and expert guidance.</p>
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
            src="/assets/images/Services/service-visual.png"
            alt="VisualDesign"
            width={597}
            height={564}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
