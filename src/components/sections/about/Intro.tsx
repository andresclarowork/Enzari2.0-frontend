import Image from 'next/image'

export function Intro() {
  return (
    <section className="flex flex-col pt-8 sm:pt-12 md:pt-16 lg:pt-[120px] pb-8 sm:pb-12 md:pb-16 lg:pb-[120px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:pl-[100px] lg:pr-[100px]">
      {/* Mobile: Single flowing text */}
      <div className="lg:hidden">
        <p 
          className="text-2xl sm:text-3xl md:text-4xl leading-tight"
          style={{
            fontFamily: 'var(--font-inter-tight)',
            fontWeight: 400,
            fontStyle: 'regular',
            lineHeight: '1.2em',
            letterSpacing: '-0.04em',
            color: '#000000'
          }}
        >
          We are passionate about creating seamless digital experiences, and we also collaborate with businesses and agencies worldwide bringing their visions to life through innovative digital solutions.
        </p>
      </div>

      {/* Desktop: Original layout with social proof inline */}
      <div className="hidden lg:block">
        <p 
          className="flex text-5xl xl:text-6xl 2xl:text-[60px] leading-tight"
          style={{
            fontFamily: 'var(--font-inter-tight)',
            fontWeight: 400,
            fontStyle: 'regular',
            lineHeight: '1.2em',
            letterSpacing: '-0.04em',
            verticalAlign: 'middle',
            color: '#000000',
            
          }}
        >
          We are passionate about creating seamless digital 
        </p>
        
        <div className="flex flex-row items-center gap-[10px]">
          <p        
            className="flex text-5xl xl:text-6xl 2xl:text-[60px] leading-tight"
            style={{
            fontFamily: 'var(--font-inter-tight)',
            fontWeight: 400,
            fontStyle: 'regular',
            lineHeight: '1.2em',
            letterSpacing: '-0.04em',          
            color: '#000000',
            
            }}
          >
            experiences, 
          </p>
          
          {/* Desktop: Social proof inline */}
          <div className="flex flex-row items-center justify-center flex-shrink-0" 
            style={{ 
              backgroundColor: '#DADADA99', 
              borderRadius: '12px', 
              padding: '6px 12px',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              gap: '6px',
              height: '48px',
              maxWidth: '280px',
            }}
          >
            <div className="flex flex-row -space-x-1">
              <div 
                className="rounded-full overflow-hidden"
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#00000033',
                  border: '1px solid #E9E7E6'
                }}
              >
                <Image
                  src="/assets/images/Home/Hero/Ellipse 1.png"
                  alt="User profile 1"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="rounded-full overflow-hidden"
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#00000033',
                  border: '1px solid #E9E7E6'
                }}
              >
                <Image
                  src="/assets/images/Home/Hero/Ellipse 2.png"
                  alt="User profile 2"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="rounded-full overflow-hidden"
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#00000033',
                  border: '1px solid #E9E7E6'
                }}
              >
                <Image
                  src="/assets/images/Home/Hero/Ellipse 4.png"
                  alt="User profile 3"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div 
              className="flex flex-row"
              style={{
                borderRadius: '12px',
                padding: '8px',
                gap: '6px',
                backgroundColor: '#FFFFFF', 
              }}
            >
              <span 
                className="flex flex-row whitespace-nowrap text-xs" 
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
                Over 2K people proved
              </span>
            </div>             
          </div>
          
          <p
            className="flex text-5xl xl:text-6xl 2xl:text-[60px] leading-tight"
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              lineHeight: '1.2em',
              letterSpacing: '-0.04em',
              verticalAlign: 'middle',
              color: '#000000',
              
            }}
          > 
            and we also collaborate
          </p>
        </div>
        
        <p 
          className="flex text-5xl xl:text-6xl 2xl:text-[60px] leading-tight"
          style={{
            fontFamily: 'var(--font-inter-tight)',
            fontWeight: 400,
            fontStyle: 'regular',
            lineHeight: '1.2em',
            letterSpacing: '-0.04em',
            textAlign: 'justify',
            verticalAlign: 'middle',
            color: '#000000'
          }}
        >
          with businesses and agencies worldwide bringing their visions to life through innovative digital solutions.
        </p>
      </div>

      {/* Mobile: Social proof section - appears after all text content */}
      <div className="flex lg:hidden justify-center mt-4 sm:mt-10 md:mt-12">
        <div 
          className="flex flex-row items-center justify-center" 
          style={{ 
            backgroundColor: '#DADADA99', 
            borderRadius: '12px', 
            padding: '6px 12px',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            gap: '6px',
            height: '48px',
            maxWidth: '280px',
          }}
        >
          <div className="flex flex-row -space-x-1">
            <div 
              className="rounded-full overflow-hidden"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#00000033',
                border: '1px solid #E9E7E6'
              }}
            >
              <Image
                src="/assets/images/Home/Hero/Ellipse 1.png"
                alt="User profile 1"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="rounded-full overflow-hidden"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#00000033',
                border: '1px solid #E9E7E6'
              }}
            >
              <Image
                src="/assets/images/Home/Hero/Ellipse 2.png"
                alt="User profile 2"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="rounded-full overflow-hidden"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#00000033',
                border: '1px solid #E9E7E6'
              }}
            >
              <Image
                src="/assets/images/Home/Hero/Ellipse 4.png"
                alt="User profile 3"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div 
            className="flex flex-row"
            style={{
              borderRadius: '12px',
              padding: '8px',
              gap: '6px',
              backgroundColor: '#FFFFFF', 
            }}
          >
            <span 
              className="flex flex-row whitespace-nowrap text-xs" 
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
              Over 2K people proved
            </span>
          </div>             
        </div>
      </div>
    </section>
  )
}
