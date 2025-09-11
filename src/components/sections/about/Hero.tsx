import { px } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center max-w-[1440px] mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-[50px] px-4 sm:px-6 md:px-8 lg:pl-[100px] lg:pr-[100px] gap-8 sm:gap-12 md:gap-16 lg:gap-20">
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-10">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-[30px] max-w-full lg:max-w-[584px] px-4 sm:px-6 md:px-8 lg:px-0">
          <p 
             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[86px] text-center"
             style={{
               fontFamily: 'var(--font-inter-tight)',
               fontWeight: 400,
               fontStyle: 'regular',
               letterSpacing: '-0.03em',
               verticalAlign: 'middle',
               color: '#000000'
             }}
          >
             Redefining What Drives Us
          </p>
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[25px] text-center"
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              letterSpacing: '0px',
              verticalAlign: 'middle',
              color: '#000000',
              borderBottom: '1px solid #D2D2D2',
              paddingBottom: '15px sm:pb-5 md:pb-6 lg:pb-[25px]'
            }}
          >
            We're not just a design agency. We're the product-thinking team behind 100M+ users, $2B+ funding, & 250+ VC-backed success stories.
          </p>
        </div>
        <div className="flex flex-row rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden w-full max-w-full lg:max-w-[1240px]">
          <Image
            src="/assets/images/AboutUs/Hero.png"
            alt="About Us Hero Background"
            width={1240}
            height={700}
            className="object-cover h-auto"
            priority
           />
         </div>
      </div>
      
      {/* Trusted By Section */}
      
      <div className="text-center flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[33px] w-full px-4 sm:px-6 md:px-8 lg:px-0">
        <h3 
          className="text-sm sm:text-base md:text-lg lg:text-[20px] leading-tight text-center"
          style={{
            fontFamily: 'var(--font-neue-montreal)',
            fontWeight: 400,
            fontStyle: 'regular',
            lineHeight: '1.0em',
            letterSpacing: '0%',
            textTransform: 'capitalize',
            color: '#1F1F20'
          }}
        >
          Trusted By 180,000+ Customers World Wide
        </h3>
        
        {/* Company Logos */}
        <div 
          className="flex items-center flex-wrap justify-center sm:justify-center md:justify-center lg:justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-[4px] h-auto sm:h-auto md:h-auto lg:h-[33.55px] w-full"
        >
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/Home/Hero/companylogo1.png"
              width={120}
              height={32}
              alt="Company Logo 1"
              className="object-contain w-16 sm:w-20 md:w-24 lg:w-[120px] h-auto sm:h-auto md:h-auto lg:h-[32px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/Home/Hero/companylogo2.png"
              alt="Company Logo 2"
              width={120}
              height={32}
              className="object-contain w-16 sm:w-20 md:w-24 lg:w-[120px] h-auto sm:h-auto md:h-auto lg:h-[32px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/Home/Hero/companylogo3.png"
              alt="Company Logo 3"
              width={120}
              height={32}
              className="object-contain w-16 sm:w-20 md:w-24 lg:w-[120px] h-auto sm:h-auto md:h-auto lg:h-[32px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/Home/Hero/companylogo4.png"
              alt="Company Logo 4"
              width={120}
              height={32}
              className="object-contain w-16 sm:w-20 md:w-24 lg:w-[120px] h-auto sm:h-auto md:h-auto lg:h-[32px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/Home/Hero/companylogo5.png"
              alt="Company Logo 5"
              width={120}
              height={32}
              className="object-contain w-16 sm:w-20 md:w-24 lg:w-[120px] h-auto sm:h-auto md:h-auto lg:h-[32px]"
            />
          </div>
        </div>
      </div>
       
    </section>
  )
}
