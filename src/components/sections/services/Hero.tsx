import Image from 'next/image'

export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row max-w-[1440px] mx-auto gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-8 lg:pl-[40px] lg:pr-[40px] pt-8 sm:pt-12 md:pt-16 lg:pt-[60px] bg-white">
        <div className="flex flex-col lg:flex-row w-[100%] justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-[40px]">
            <div className="flex flex-col justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-[130px]">
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[30px] max-w-full lg:max-w-[584px]">
                    <p 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[86px]"
                        style={{
                        fontFamily: 'var(--font-inter-tight)',
                        fontWeight: 400,
                        fontStyle: 'regular',
                        letterSpacing: '-0.03em',                        
                        verticalAlign: 'middle',
                        color: '#000000'
                        }}
                    >
                        What We Offer
                    </p>
                    <p 
                        className="text-sm sm:text-base lg:text-[18px] leading-relaxed sm:leading-relaxed lg:leading-[25px]"
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
                        Everything we create is hand crafted through the lens of the brand recognition and user experience. At Enzari our suite of services includes all that's needed to deliver world-class products and services to your targeted audience.
                    </p>
                </div>
                                
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[33px]">
                    <h3 
                        className="text-sm sm:text-base lg:text-[20px] leading-tight capitalize"
                        style={{
                        fontFamily: 'var(--font-neue-montreal)',
                        fontWeight: 400,
                        fontStyle: 'regular',
                        letterSpacing: '0%',
                        textTransform: 'capitalize',
                        color: '#1F1F20'
                        }}
                    >
                        Trusted By 180,000+ Customers World Wide
                    </h3>
                    
                    {/* Company Logos */}
                    <div 
                        className="flex items-center flex-wrap justify-center sm:justify-center md:justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-[50px] h-auto sm:h-auto lg:h-[33.55px]"
                    >
                        <div className="flex items-center justify-center">
                        <Image
                            src="/assets/images/Home/Hero/companylogo1.png"
                            width={120}
                            height={32}
                            alt="Company Logo 1"
                            className="object-contain w-16 sm:w-20 lg:w-[120px] h-auto sm:h-auto lg:h-[32px]"
                        />
                        </div>
                        <div className="flex items-center justify-center">
                        <Image
                            src="/assets/images/Home/Hero/companylogo2.png"
                            alt="Company Logo 2"
                            width={120}
                            height={32}
                            className="object-contain w-16 sm:w-20 lg:w-[120px] h-auto sm:h-auto lg:h-[32px]"
                        />
                        </div>
                        <div className="flex items-center justify-center">
                        <Image
                            src="/assets/images/Home/Hero/companylogo3.png"
                            alt="Company Logo 3"
                            width={120}
                            height={32}
                            className="object-contain w-16 sm:w-20 lg:w-[120px] h-auto sm:h-auto lg:h-[32px]"
                        />
                        </div>
                        {/* <div className="flex items-center justify-center">
                        <Image
                            src="/assets/images/Home/Hero/companylogo4.png"
                            alt="Company Logo 4"
                            width={120}
                            height={32}
                            className="object-contain w-16 sm:w-20 lg:w-[120px] h-auto sm:h-auto lg:h-[32px]"
                        />
                        </div> */}
                        {/* <div className="flex items-center justify-center">
                        <Image
                            src="/assets/images/Home/Hero/companylogo5.png"
                            alt="Company Logo 5"
                            width={120}
                            height={32}
                            className="object-contain w-16 sm:w-20 lg:w-[120px] h-auto sm:h-auto lg:h-[32px]"
                        />
                        </div> */}
                    </div>
                </div>
                
            </div>
            <div className="flex justify-center lg:justify-start">
                <Image
                    src="/assets/images/Services/service-hero.png"
                    alt="Hero"
                    width={660}
                    height={700}
                    className="object-cover w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[660px] h-auto"
                />
            </div>
        </div>
    </section>
  )
}
