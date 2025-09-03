import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const services = [
  { name: 'Product Design', isHighlighted: true },
  { name: 'Branding', isHighlighted: false },
  { name: 'Graphic Designing', isHighlighted: false },
  { name: 'AI Production', isHighlighted: false },
  { name: 'Motion Design', isHighlighted: false },
  { name: 'Web Design', isHighlighted: false },
]

export function Services() {
  return (
    <section className="pt-[132px] pb-[120px] bg-white">
         
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch" style={{ minHeight: '600px' }}>
        {/* Left Side - Services List + Phone at bottom */}
        <div className="lg:order-1 flex flex-col justify-end pl-[30px]">                   
          <div className="flex flex-col items-start gap-5">
            <div className="w-[346px] h-[286px] relative overflow-hidden shadow-2xl" style={{ borderRadius: '24px', backgroundColor:'#F2EFEB' }}>
            <Image
              src="/assets/images/Home/Services/Service1.png"
              alt="Mobile App Interface 1"
              fill
              className="object-cover"
            />
            </div>
            <p 
              style={{
                fontFamily: 'Inter Tight',
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
        <div className="text-center flex flex-col lg:order-2 max-w-[508px]" style={{ gap:'50px'}}>          
          <h3 
            style={{
              fontFamily: 'Inter Tight',
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
                fontFamily: 'Saans TRIAL',
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
                className="relative"
                style={{
                  fontFamily: 'Inter Tight',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  fontSize: '72px',
                  lineHeight: '1.0em',
                  letterSpacing: '-0.05em',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  color: service.isHighlighted ? '#000000' : '#000000',
                  opacity: service.isHighlighted ? '1' : '0.3'
                }}
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
                fontFamily: 'Saans TRIAL',
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
                  fontFamily: 'Inter Tight',
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
        <div className="lg:order-3 flex flex-col justify-start pl-[30px]">                    
          <div className="flex flex-col items-start gap-5">
            <div className="w-[346px] h-[286px] relative overflow-hidden shadow-2xl" style={{ borderRadius: '24px', backgroundColor:'#F2EFEB' }}>
            <Image
              src="/assets/images/Home/Services/Service2.png"
              alt="Mobile App Interface 1"
              fill
              className="object-cover"
            />
            </div>
            <p 
              style={{
                fontFamily: 'Inter Tight',
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
