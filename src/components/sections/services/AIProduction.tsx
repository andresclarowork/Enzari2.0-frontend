import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export function AIProduction() {
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
      title: 'Generative Design & Content Creation',
      description: 'AI-generated images and illustrations, video generation and editing with tools, AI-generated music and soundscapes, prompt engineering for custom creative tasks, character and environment design in 2D/3D using generative tools.'
    },
    {
      id: '02',
      title: 'AI-Powered Automation',
      description: 'Intelligent automation solutions that streamline workflows, reduce manual tasks, and enhance productivity through custom AI integrations and smart process optimization.'
    },
    {
      id: '03',
      title: 'Machine Learning Integration',
      description: 'Custom machine learning models and integrations that analyze data, predict trends, and provide intelligent insights to drive better business decisions and user experiences.'
    },
    {
      id: '04',
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions including chatbots, content analysis, sentiment tracking, and automated text generation that enhance communication and user engagement.'
    },
    {
      id: '05',
      title: 'Computer Vision Solutions',
      description: 'AI-powered image and video analysis, object recognition, and visual content processing that automate visual tasks and provide intelligent insights from visual data.'
    },
    {
      id: '06',
      title: 'AI Strategy & Consulting',
      description: 'Strategic AI consulting to identify opportunities, develop implementation roadmaps, and ensure successful AI adoption that aligns with your business goals and objectives.'
    },
    {
      id: '07',
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific needs, from custom algorithms to integrated AI systems that solve unique business challenges and create competitive advantages.'
    }
  ]
  return (
    <section className="flex max-w-[1440px] mx-auto gap-20 pl-[100px] pr-[100px] pt-[120px] pb-[120px] bg-white">
      <div className="flex flex-row w-[100%] justify-between">
        <div className="flex rounded-[32px] max-w-[597px] overflow-hidden">
          <Image
            src="/assets/images/Services/service-ai.png"
            alt="AIProduction"
            width={597}
            height={564}
            className="object-cover"
          />
        </div>
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
              AI Production & Integration Services
            </p>
            <p 
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '25px',                          
              }}
            >
              We harness AI to create generative visuals, intelligent tools, and immersive experiences. Our custom workflows boost speed, scale, and open bold new possibilities for your brand.</p>
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
      </div>
    </section>
  )
}
