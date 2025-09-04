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
    <section className="pt-[100px] pb-[100px]" style={{ backgroundColor: '#F4F4F4', borderRadius: '32px' }}>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center text-center" style={{ gap:'24px'}}>
          <h2 
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '80px',
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
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '22px',
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
        <div className="relative w-full h-[486px] overflow-hidden">
          <div 
            className="flex infinite-flow"
            style={{
              width: `${ethosImages.length * 200}%`,
              gap: '20px'
            }}
          >
            {/* First set of images */}
            {ethosImages.map((image, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0"
                style={{ width: image.width, height: image.height }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={parseInt(image.width)}
                  height={parseInt(image.height)}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {ethosImages.map((image, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0"
                style={{ width: image.width, height: image.height }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={parseInt(image.width)}
                  height={parseInt(image.height)}
                  className="w-full h-full object-cover"
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
      `}</style>
    </section>
  )
} 