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
      
      <div className="flex flex-col relative z-10 pt-[103px] pb-[103px] gap-[40px] max-w-[563px] mx-auto">
        
        <div className="flex flex-col text-center">
          <h2 
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '100px',
              lineHeight: '100px',
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

        <div className="flex flex-col text-center max-w-[541px] mx-auto gap-5">
          <p 
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '20px',
              lineHeight: '24px',
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
              className="inline-flex items-center transition-colors duration-200 group shadow-lg"
              style={{
                borderRadius: '12px',
                padding: '14px 22px',
                gap: '10px',
                color: '#FFFFFF',
                backgroundColor: '#FFFFFF'              
              }}
            >
              <span 
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
                className="text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
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