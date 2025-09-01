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
    <section className="py-20 bg-white">
      <div className="px-4 sm:px-6 lg:px-8 mx-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            {/* Left Phone */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-48 h-80 relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/Home/Services/Service1.png"
                  alt="Mobile App Interface 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Center - Services List */}
            <div className="text-center">
              <div className="mb-12">
                <h3 className="text-lg text-gray-500 mb-8 font-inter-tight font-normal tracking-tight">Our Services</h3>
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="text-4xl lg:text-5xl font-normal font-inter-tight tracking-tight "
                    >
                      {service.name}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="text-white rounded-xl flex items-center justify-center font-inter-tight tracking-tight" style={{ backgroundColor: '#FE0B5F', width: '153px', height: '47px', fontSize:'19px'}}>
                  <span className="font-inter-tight">Our Services</span>
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Link>
                
                <Link href="/projects" className="text-black flex items-center justify-center font-inter-tight tracking-tight" style={{ backgroundColor: '#F2EFEB', width: '196px', height: '47px', borderRadius: '12px', fontSize: '19px'}}>
                  <span>Our Featured Work</span>
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Right Phone */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-48 h-80 relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/Home/Services/Service2.png"
                  alt="Mobile App Interface 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
