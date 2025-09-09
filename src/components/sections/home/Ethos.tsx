'use client'

import Image from 'next/image'

const ethosImages = [
  {
    src: "/assets/images/Home/Ethos/Frame1.png",
    alt: "The Enzari Ethos - Frame 1",
    width: "281px",
    height: "486px"
  },
  {
    src: "/assets/images/Home/Ethos/Frame2.png",
    alt: "The Enzari Ethos - Frame 2",
    width: "440px",
    height: "386px"
  },
  {
    src: "/assets/images/Home/Ethos/Frame3.png",
    alt: "The Enzari Ethos - Frame 3",
    width: "440px",
    height: "449px"    
  },
  {
    src: "/assets/images/Home/Ethos/Frame4.png",
    alt: "The Enzari Ethos - Frame 4",
    width: "292px",
    height: "486px"    
  },
  {
    src: "/assets/images/Home/Ethos/Frame5.png",
    alt: "The Enzari Ethos - Frame 5",
    width: "343px",
    height: "486px"    
  },
  {
    src: "/assets/images/Home/Ethos/Frame6.png",
    alt: "The Enzari Ethos - Frame 6",
    width: "440px",
    height: "449px"    
  },
  {
    src: "/assets/images/Home/Ethos/Frame7.png",
    alt: "The Enzari Ethos - Frame 7",
    width: "350px",
    height: "486px"
  }
]

export function Ethos() {
  return (
    <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-[100px] pb-8 sm:pb-12 md:pb-16 lg:pb-[100px] px-4 sm:px-6 md:px-8 lg:px-0" style={{ backgroundColor: '#F4F4F4', borderRadius: '32px' }}>
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-col items-center text-center" style={{ gap:'24px'}}>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px]"
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              
              lineHeight: '1.2em',
              letterSpacing: '-0.05em',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: '#000000',                           
            }}
          >
            The Enzari Ethos
          </h2>
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]"
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              
              lineHeight: '25px',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: '#000000'
            }}
          >
            This is how we design. This is how we grow.
          </p>
        </div>

        {/* Continuous Flowing Animation */}
        <div className="relative w-full overflow-hidden" style={{ height: 'auto', minHeight: '200px' }}>
          <div 
            className="flex infinite-flow items-start"
            style={{
              width: `${ethosImages.length * 200}%`,
              gap: '20px',
              height: 'auto'
            }}
          >
            {/* First set of images */}
            {ethosImages.map((image, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 max-w-[200px] max-h-[300px] sm:max-w-[250px] sm:max-h-[350px] md:max-w-[300px] md:max-h-[400px] lg:max-w-none lg:max-h-none"
                style={{ 
                  width: image.width, 
                  height: image.height
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={parseInt(image.width)}
                  height={parseInt(image.height)}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {ethosImages.map((image, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 max-w-[200px] max-h-[300px] sm:max-w-[250px] sm:max-h-[350px] md:max-w-[300px] md:max-h-[400px] lg:max-w-none lg:max-h-none"
                style={{ 
                  width: image.width, 
                  height: image.height
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={parseInt(image.width)}
                  height={parseInt(image.height)}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-30%);
          }
        }
        .infinite-flow {
          animation: flow 30s linear infinite;
          animation-fill-mode: none;
        }
        
        /* Mobile responsive adjustments */
        @media (max-width: 640px) {
          .infinite-flow {
            animation: flow 20s linear infinite;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1023px) {
          .infinite-flow {
            animation: flow 25s linear infinite;
          }
        }
      `}</style>
    </section>
  )
} 