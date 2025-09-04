import Image from 'next/image'

export function Intro() {
  return (
    <section className="flex flex-col pt-[120px] pb-[120px] max-w-[1440px] mx-auto pl-[100px] pr-[100px]">
      <p 
        className="flex"
        style={{
          fontFamily: 'var(--font-inter-tight)',
          fontWeight: 400,
          fontStyle: 'regular',
          fontSize: '60px',
          lineHeight: '1.2em',
          letterSpacing: '-0.04em',
          verticalAlign: 'middle',
          color: '#000000',
          textAlign: 'justify',
        }}
      >
        We are passionate about creating seamless digital 
      </p>
      
      <div className="flex flex-row">
        <p        
          style={{
          fontFamily: 'var(--font-inter-tight)',
          fontWeight: 400,
          fontStyle: 'regular',
          fontSize: '60px',
          lineHeight: '1.2em',
          letterSpacing: '-0.04em',
          verticalAlign: 'middle',
          color: '#000000',
          textAlign: 'justify',
          }}
        >
          experiences, 
        </p>
        <div 
          className="flex flex-row items-center" 
          style={{ 
            backgroundColor: '#DADADA99', 
            borderRadius: '16px', 
            padding: '8px 16px',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            gap: '8px',
            maxWidth: '382px',
          }}
        >
          <div className="flex flex-row -space-x-2">
            <div 
              className="rounded-full overflow-hidden"
              style={{
                width: '48px',
                height: '48px',
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
                width: '48px',
                height: '48px',
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
                width: '48px',
                height: '48px',
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
              borderRadius: '18px',
              padding: '12px',
              gap: '10px',
              backgroundColor: '#FFFFFF', 
            }}
          >
            <span 
              className="flex flex-row whitespace-nowrap" 
              style={{ 
                fontFamily: 'var(--font-satoshi)',
                fontWeight: 400,
                fontStyle: 'regular',
                fontSize: '16px', 
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
          style={{
            fontFamily: 'var(--font-inter-tight)',
            fontWeight: 400,
            fontStyle: 'regular',
            fontSize: '60px',
            lineHeight: '1.2em',
            letterSpacing: '-0.04em',
            verticalAlign: 'middle',
            color: '#000000',
            textAlign: 'justify',
          }}
        > 
          and we also collaborate
        </p>
      </div>
      
      
      <p 
        className="flex"
        style={{
          fontFamily: 'var(--font-inter-tight)',
          fontWeight: 400,
          fontStyle: 'regular',
          fontSize: '60px',
          lineHeight: '1.2em',
          letterSpacing: '-0.04em',
          textAlign: 'justify',
          verticalAlign: 'middle',
          color: '#000000'
        }}
      >
        with businesses and agencies worldwide bringing their visions to life through innovative digital solutions.
      </p>
    </section>
  )
}
