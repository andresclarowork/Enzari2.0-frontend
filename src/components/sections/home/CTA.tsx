import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0" style={{borderRadius:'32px', backgroundColor:'#11111180'}}>
        <video
          src="/assets/images/Home/CTA-background.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-col relative z-10 pt-8 sm:pt-12 md:pt-16 lg:pt-[103px] pb-8 sm:pb-12 md:pb-16 lg:pb-[103px] gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        
        <div className="flex flex-col text-center">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[100px]"
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              // fontSize: '100px',
              // lineHeight: '100px',
              letterSpacing: '-0.05em',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: '#FFFFFF'
            }}
          >
            <div>We'd love to</div>
            <div>hear from you!</div>
          </h2>
        </div>

        <div className="flex flex-col text-center max-w-[541px] mx-auto gap-4 sm:gap-5">
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px]"
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              // fontSize: '20px',
              // lineHeight: '24px',
              letterSpacing: '-0.05em',
              textAlign: 'center',
              color: '#E4E4E4'
            }}
          >
            For any questions, additional information, we encourage you to reach out to us. We are always here to assist and look forward to connecting with you.
          </p>
          
          <div className="flex justify-center" style={{gap:'10px'}}>
            <Link
              href="/contact"
              className="inline-flex items-center transition-colors duration-200 group shadow-lg px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 lg:px-[22px] lg:py-[14px]"
              style={{
                borderRadius: '12px',
                // padding: '14px 22px',
                gap: '10px',
                color: '#FFFFFF',
                backgroundColor: '#FFFFFF'              
              }}
            >
              <span 
                className="text-sm sm:text-base"
                style={{
                  fontFamily: 'var(--font-saans-trial)',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '1.2em',
                  letterSpacing: '-0.05em',
                  color: '#000000',
                  
                }}
              >
                Contact Us
              </span>
              <ArrowUpRight 
                className="text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 h-3 w-3 sm:h-4 sm:w-4"
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