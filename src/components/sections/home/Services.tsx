import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const services = [
  { name: 'Product Design', isHighlighted: true },
  { name: 'Branding', isHighlighted: true },
  { name: 'Graphic Designing', isHighlighted: false },
  { name: 'AI Production', isHighlighted: false },
  { name: 'Motion Design', isHighlighted: false },
  { name: 'Web Design', isHighlighted: false },
]

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 sm:px-6 lg:px-8 mx-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Left Side - Services List + Phone at bottom */}
            <div className="lg:order-1">
              
              {/* Left Phone at bottom */}
              <div className="flex flex-col items-start">
                <div className="w-60 h-60 relative rounded-3xl overflow-hidden shadow-2xl mb-4">
                  <Image
                    src="/assets/images/Home/Services/Service1.png"
                    alt="Mobile App Interface 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 max-w-xs">
                  A showcase of our most impactful projects where creative vision meets flawless execution.
                </p>
              </div>
            </div>
            
            {/* Center - Title and Buttons */}
            <div className="text-center lg:order-2">
              <div className="mb-12">
                <h3 className="text-lg mb-8 font-inter-tight font-normal tracking-tight" style={{ color: '#111111' }}>
                  Our Services
                </h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="text-4xl lg:text-5xl font-normal font-inter-tight tracking-tight relative"
                      style={{ 
                        color: service.isHighlighted ? '#000000' : '#6B7280',
                        letterSpacing: '-5px'
                      }}
                    >
                      {service.name}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="text-white rounded-xl flex items-center justify-center font-inter-tight tracking-tight" style={{ backgroundColor: '#FE0B5F', width: '153px', height: '32px', fontSize:'12px'}}>
                  <span className="font-inter-tight">Our Services</span>
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Link>
                
                <Link href="/projects" className="text-black flex items-center justify-center font-inter-tight tracking-tight" style={{ backgroundColor: '#F2EFEB', width: '196px', height: '32px', borderRadius: '12px', fontSize: '12px'}}>
                  <span>Our Featured Work</span>
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Right Side - Phone at top */}
            <div className="lg:order-3">
              <div className="flex flex-col items-center">
                <div className="w-60 h-60 relative rounded-3xl overflow-hidden shadow-2xl mb-4">
                  <Image
                    src="/assets/images/Home/Services/Service2.png"
                    alt="Mobile App Interface 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 max-w-xs">
                  A showcase of our most impactful projects where creative vision meets flawless execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
