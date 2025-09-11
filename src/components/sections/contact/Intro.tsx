import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Intro() {
  return (
    <section className="flex flex-col items-center justify-center max-w-[1440px] mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-[50px] px-4 sm:px-6 md:px-8 lg:pl-[100px] lg:pr-[100px] gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        <div className="flex flex-col justify-center items-center pt-4 sm:pt-6 md:pt-8 lg:pt-[120px]">
            {/* Mobile Layout */}
            <div className="flex lg:hidden flex-col w-full gap-6 sm:gap-8">
                <div className="flex flex-col gap-4 sm:gap-6">
                    <div
                        className="flex flex-col text-3xl sm:text-4xl md:text-5xl leading-tight" 
                        style={{
                            fontFamily: 'var(--font-inter-tight)',
                            fontWeight: 400,
                            fontStyle: 'regular',
                            letterSpacing: '-0.05em',
                            textAlign: 'left',
                            verticalAlign: 'middle',
                            color: '#000000',
                        }}
                    >
                        Enzari Louisville Kentucky
                    </div>
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <span 
                            className="flex text-3xl sm:text-4xl md:text-5xl leading-tight"
                            style={{
                                fontFamily: 'var(--font-inter-tight)',
                                fontWeight: 400,
                                fontStyle: 'regular',
                                letterSpacing: '-0.05em',
                                textAlign: 'left',
                                verticalAlign: 'middle',
                                color: '#000000'
                            }}
                        >
                            Agency Studio
                        </span>
                        
                        {/* Social Proof Badge - Mobile */}
                        <div 
                            className="flex items-center w-full" 
                            style={{ 
                                backgroundColor: '#DADADA99', 
                                borderRadius: '16px', 
                                padding: '8px 16px',
                                backdropFilter: 'blur(24px)',
                                WebkitBackdropFilter: 'blur(24px)',
                                gap: '8px',
                            }}
                        >
                            <div className="flex flex-row -space-x-4 justify-between">
                                <div 
                                    className="rounded-full overflow-hidden relative w-8 h-8 sm:w-10 sm:h-10"
                                    style={{
                                        backgroundColor: '#00000033',
                                        border: '1px solid #E9E7E6',
                                        zIndex: 3
                                    }}
                                >
                                    <Image
                                        src="/assets/images/Contact/map.png"
                                        alt="User profile 1"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>                        
                            </div>
                            <div 
                                className="flex flex-row"
                                style={{
                                    borderRadius: '18px',
                                    padding: '8px sm:10px md:12px',
                                    gap: '8px sm:10px',
                                    backgroundColor: '#FFFFFF', 
                                }}
                            >
                                <span 
                                    className="flex flex-row whitespace-nowrap text-xs sm:text-sm md:text-base" 
                                    style={{ 
                                        fontFamily: 'var(--font-satoshi)',
                                        fontWeight: 400,
                                        fontStyle: 'regular',
                                        letterSpacing: '-0.03em',
                                        textAlign: 'center',
                                        color: '#000000CC',
                                        lineHeight: '1.20em',
                                    }}
                                >
                                    725 N HITE AVE APT 1, LOUISVILLE, KENTUCKY 40206
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Description and CTA Buttons - Mobile */}
                <div className="flex flex-col gap-4 sm:gap-6">
                    <p 
                        className="flex w-full text-sm sm:text-base leading-relaxed"
                        style={{
                            fontFamily: 'var(--font-inter-tight)',
                            fontWeight: 400,
                            fontStyle: 'regular',
                            letterSpacing: '0.0em',
                            textAlign: 'left',
                            verticalAlign: 'middle',
                            color: '#000000',
                        }}
                    >
                        Just a short drive from LOUISVILLE, city centre, our Studio is in a very convenient location, near two train stations, a motorway, and the east LOUISVILLE, KENTUCKY.
                    </p>
                    
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <Link 
                            href="/services" 
                            className="text-white flex items-center justify-center w-full"
                            style={{ 
                                backgroundColor: '#FE0B5F', 
                                borderRadius: '12px',
                                padding: '12px 18px sm:14px sm:22px',
                                gap: '8px sm:10px'
                            }}
                        >
                            <span 
                                className="text-sm sm:text-base"
                                style={{
                                    fontFamily: 'var(--font-inter-tight)',
                                    fontWeight: 400,
                                    fontStyle: 'regular',
                                    lineHeight: '1.2em',
                                    letterSpacing: '-0.05em',          
                                }}
                            >
                                Our Services
                            </span>
                            <ArrowUpRight                       
                                style={{ 
                                    width: '8px sm:10.94px', 
                                    height: '8px sm:11px',
                                }}
                            />
                        </Link>
                        
                        <Link 
                            href="/projects" 
                            className="text-black flex items-center justify-center w-full"
                            style={{ 
                                backgroundColor: '#F2EFEB', 
                                borderRadius: '12px',
                                padding: '12px 18px sm:14px sm:22px',
                                gap: '8px sm:10px'
                            }}
                        >
                            <span 
                                className="text-sm sm:text-base"
                                style={{
                                    fontFamily: 'var(--font-inter-tight)',
                                    fontWeight: 400,
                                    fontStyle: 'regular',
                                    lineHeight: '1.2em',
                                    letterSpacing: '-0.05em',          
                                }}
                            >
                                Our Featured Work
                            </span>
                            <ArrowUpRight                       
                                style={{ 
                                    width: '8px sm:10.94px', 
                                    height: '8px sm:11px',
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-col" 
            style={{ 
                gap: '50px'
            }}
            >
            <div className="flex flex-col">
                <div
                className="flex flex-col sm:flex-row items-start text-6xl xl:text-[100px] leading-tight xl:leading-[1.20em]" 
                style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    letterSpacing: '-0.05em',
                    textAlign: 'left',
                    verticalAlign: 'middle',
                    color: '#000000',
                }}
                >
                Enzari Louisville Kentucky
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-2 lg:gap-[10px]">
                {/* Desktop: Social Proof first, Sparks Discovery second */}
                <span 
                className="flex text-6xl xl:text-[100px] leading-tight xl:leading-[1.2em] order-2 sm:order-2"
                    style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    letterSpacing: '-0.05em',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    color: '#000000'
                    }}
                >
                    Agency Studio
                </span>
                
                {/* Social Proof Badge - Desktop */}
                <div 
                    className="flex items-center w-full sm:w-auto order-1 sm:order-1" 
                    style={{ 
                    backgroundColor: '#DADADA99', 
                    borderRadius: '16px', 
                    padding: '8px 16px',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    gap: '8px',
                    marginLeft:'7px'
                    }}
                >
                    <div className="flex flex-row -space-x-4 justify-between">
                        <div 
                            className="rounded-full overflow-hidden relative w-12 h-12"
                            style={{
                            backgroundColor: '#00000033',
                            border: '1px solid #E9E7E6',
                            zIndex: 3
                            }}
                        >
                            <Image
                            src="/assets/images/Contact/map.png"
                            alt="User profile 1"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                            />
                        </div>                        
                    </div>
                    <div 
                    className="flex flex-row"
                    style={{
                        borderRadius: '18px',
                        padding: '12px',
                        gap: '10px',
                        backgroundColor: '#FFFFFF', 
                    }}
                    >
                        <span 
                            className="flex flex-row whitespace-nowrap text-base" 
                            style={{ 
                            fontFamily: 'var(--font-satoshi)',
                            fontWeight: 400,
                            fontStyle: 'regular',
                            letterSpacing: '-0.03em',
                            textAlign: 'center',
                            color: '#000000CC',
                            lineHeight: '1.20em',
                            }}
                        >
                            725 N HITE AVE APT 1, LOUISVILLE, KENTUCKY 40206
                        </span>
                    </div>
                    
                </div>
                </div>
            </div>
            
            {/* Description and CTA Buttons */}
            
            <div 
                className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0"     
            >
                {/* Left - Description Text */}
                <div className="flex flex-row w-full lg:w-auto">
                    <p 
                        className="flex max-w-full lg:max-w-[522px] text-sm sm:text-base lg:text-[18px] leading-relaxed sm:leading-relaxed lg:leading-[25px]"
                        style={{
                        fontFamily: 'var(--font-inter-tight)',
                        fontWeight: 400,
                        fontStyle: 'regular',
                        letterSpacing: '0.0em',
                        textAlign: 'left',
                        verticalAlign: 'middle',
                        color: '#000000',
                        }}
                    >
                        Just a short drive from LOUISVILLE, city centre, our Studio is in a very convenient location, near two train stations, a motorway, and the east LOUISVILLE, KENTUCKY.
                    </p>
                </div>
                            
                {/* Right - CTA Buttons */}
                <div 
                className="flex flex-col sm:flex-row w-full lg:w-auto"
                style={{ gap: '8px sm:8px lg:10px' }}
                >
                <Link 
                    href="/services" 
                    className="text-white flex items-center justify-center w-full sm:w-auto lg:mx-w-[153px]"
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
                    Our Services
                    </span>
                    <ArrowUpRight                       
                    style={{ 
                        width: '10.94px', 
                        height: '11px',
                    }}
                    />
                </Link>
                
                <Link 
                    href="/projects" 
                    className="text-black flex items-center justify-center w-full sm:w-auto"
                    style={{ 
                    backgroundColor: '#F2EFEB', 
                    // maxWidth: '196px',
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
                    Our Featured Work
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
        </div>
        <div className="flex flex-row rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden w-full">
          <Image
            src="/assets/images/Contact/contact-intro.png"
            alt="About Us Hero Background"
            width={1240}
            height={700}
            className="object-cover w-full h-auto"
            priority
           />
         </div>
    </section>
  )
}