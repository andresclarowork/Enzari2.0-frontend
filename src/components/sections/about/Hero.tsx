import { px } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center max-w-[1440px] mx-auto pt-[50px] pl-[100px] pr-[100px] gap-20">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-[30px] max-w-[584px]">
          <p 
             style={{
               fontFamily: 'var(--font-inter-tight)',
               fontWeight: 400,
               fontStyle: 'regular',
               fontSize: '80px',
               lineHeight: '86px',
               letterSpacing: '-0.03em',
               textAlign: 'center',
               verticalAlign: 'middle',
               color: '#000000'
             }}
          >
             Redefining What Drives Us
          </p>
          <p 
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '18px',
              lineHeight: '25px',
              letterSpacing: '0px',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: '#000000',
              borderBottom: '1px solid #D2D2D2',
              paddingBottom: '25px'
            }}
          >
            We're not just a design agency. We're the product-thinking team behind 100M+ users, $2B+ funding, & 250+ VC-backed success stories.
          </p>
        </div>
        <div className="flex flex-row rounded-[32px] overflow-hidden">
          <Image
            src="/assets/images/AboutUs/Hero.png"
            alt="About Us Hero Background"
            //  fill
            width={1240}
            height={700}
            className="object-cover"
            priority
           />
         </div>
      </div>
      
      {/* Trusted By Section */}
      
      <div className="text-center flex flex-col" style={{ gap: '33px', width: '100%' }}>
        <h3 
          style={{
            fontFamily: 'var(--font-neue-montreal)',
            fontWeight: 400,
            fontStyle: 'regular',
            fontSize: '20px',
            lineHeight: '1.0em',
            letterSpacing: '0%',
            textAlign: 'center',
            textTransform: 'capitalize',
            color: '#1F1F20'
          }}
        >
          Trusted By 180,000+ Customers World Wide
        </h3>
        
        {/* Company Logos */}
        <div 
          className="flex items-center"
          style={{ 
            justifyContent: 'space-between',
            gap: '4px',
            height: '33.55px',
            width: '100%'
          }}
        >
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/Home/Hero/companylogo1.png"
              width={120}
              height={32}
              alt="Company Logo 1"
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/Home/Hero/companylogo2.png"
              alt="Company Logo 2"
              width={120}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/Home/Hero/companylogo3.png"
              alt="Company Logo 3"
              width={120}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/Home/Hero/companylogo4.png"
              alt="Company Logo 4"
              width={120}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/Home/Hero/companylogo5.png"
              alt="Company Logo 5"
              width={120}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      
          

          

          
        
      
    </section>
  )
}
