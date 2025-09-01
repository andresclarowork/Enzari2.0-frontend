import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Single Column Layout */}
          <div>
            {/* Headline with Social Proof */}
            <div className="font-normal font-inter-tight mb-8" style={{ fontSize: '100px', letterSpacing: '-5px', lineHeight: '0.9', color: '#000000' }}>
              <div>Enzari Builds Demand.</div>
              <div className="flex flex-wrap items-center gap-4">
                {/* Social Proof Badge */}
                <div className="flex items-center space-x-3 px-4 py-2" style={{ backgroundColor: '#DADADA99', borderRadius: '16px', minWidth: '300px', minHeight: '40px' }}>
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src="/assets/images/Home/Hero/Ellipse 1.png"
                        alt="User profile 1"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src="/assets/images/Home/Hero/Ellipse 2.png"
                        alt="User profile 2"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src="/assets/images/Home/Hero/Ellipse 4.png"
                        alt="User profile 3"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-black-600 font-inter-tight font-normal tracking-tight whitespace-nowrap" style={{ fontSize: '16px', backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '10px 20px' }}>
                    Over 2K people proved
                  </span>
                </div>
                <span>Sparks Discovery.</span>
              </div>
            </div>

            {/* Description and CTA Buttons in Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Description */}
              <p className="text-xl text-gray-700 font-inter-tight font-normal tracking-tight leading-relaxed">
                We are a global creative tech studio forging delightful experiences by blending design, technology. Driven to create value for people and brands through interaction
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </div>
      </div>
    </section>
  )
} 