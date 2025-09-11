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
    <section className="flex flex-col lg:flex-row max-w-[1440px] mx-auto gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-8 lg:pl-[100px] lg:pr-[100px] pt-8 sm:pt-12 md:pt-16 lg:pt-[120px] pb-8 sm:pb-12 md:pb-16 lg:pb-[120px] bg-white">
      <div className="flex flex-col lg:flex-row w-[100%] justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-0">
        <div className="flex rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[32px] max-w-full lg:max-w-[597px] overflow-hidden order-2 lg:order-1">
          <Image
            src="/assets/images/Services/service-ai.png"
            alt="AIProduction"
            width={597}
            height={564}
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[23px] max-w-full lg:max-w-[593px] order-1 lg:order-2">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[30px]">
            <p 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[42px] leading-tight sm:leading-tight md:leading-tight lg:leading-[0.8em]"
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,
                letterSpacing: '-0.05em'
              }}
            >
              AI Production & Integration Services
            </p>
            <p 
              className="text-sm sm:text-base lg:text-[18px] leading-relaxed sm:leading-relaxed lg:leading-[25px]"
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,                          
              }}
            >
              We harness AI to create generative visuals, intelligent tools, and immersive experiences. Our custom workflows boost speed, scale, and open bold new possibilities for your brand.</p>
          </div>
          
          <div className="flex flex-col">
            {services.map((service, index) => (
              <div key={service.id} className="group flex items-center justify-between py-3 sm:py-4 lg:py-4 border-b border-[#F0F0F0] transition-colors cursor-pointer">
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-4">
                  <span 
                    className="text-[#5A5A5A] group-hover:text-[#1B1B1B] transition-colors text-sm sm:text-base lg:text-[16px]"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 500,
                      lineHeight: '19.5px'
                    }}
                  >
                    {service.id}
                  </span>
                  <div className="flex flex-col hover:text-[#1B1B1B] transition-colors">
                    <h3 
                      className="text-[#5A5A5A] group-hover:text-[#1B1B1B] transition-colors text-lg sm:text-xl lg:text-[24px] leading-tight sm:leading-tight lg:leading-[23.4px]"
                      style={{
                        fontFamily: 'var(--font-inter-tight)',
                        fontWeight: 400,
                        letterSpacing: '0%'
                      }}
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="hidden group-hover:block transition-all duration-300 pt-2 sm:pt-3 lg:pt-[12px] text-sm sm:text-base lg:text-[18px] leading-relaxed sm:leading-relaxed lg:leading-[25px]"
                      style={{
                        fontFamily: 'var(--font-inter-tight)',
                        fontWeight: 400,
                        color: 'rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <ArrowUpRight 
                    className="group-hover:opacity-0 transition-opacity duration-300 w-4 h-4 sm:w-4 sm:h-4 lg:w-4 lg:h-4" 
                    style={{ color: '#5A5A5A' }}
                  />
                  <ArrowDownRight  
                    className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-4 h-4 sm:w-4 sm:h-4 lg:w-4 lg:h-4" 
                    style={{ color: '#1B1B1B' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center lg:items-start">
             <Link 
                href="/services" 
                className="text-white flex items-center justify-center w-auto py-3 px-5 sm:py-3 sm:px-5 md:py-3.5 md:px-6 lg:py-[14px] lg:px-[22px] rounded-xl"
              style={{ 
                backgroundColor: '#FE0B5F', 
                gap: '8px sm:gap-2 md:gap-2.5 lg:gap-[10px]'
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
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-[10.94px] lg:h-[11px]"
              />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  )
}
