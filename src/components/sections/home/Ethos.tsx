'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const ethosImages = [
  {
    src: "/assets/images/Home/Ethos/p-1.png",
    alt: "The Enzari Ethos - Adaptive and Creative"
  },
  {
    src: "/assets/images/Home/Ethos/p-2.png",
    alt: "The Enzari Ethos - Creative Partners"
  },
  {
    src: "/assets/images/Home/Ethos/p-3.png",
    alt: "The Enzari Ethos - Storytellers"
  },
  {
    src: "/assets/images/Home/Ethos/p-4.png",
    alt: "The Enzari Ethos - Invested Partners"
  }
]

export function Ethos() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === ethosImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-[80px] pb-[80px]" style={{ backgroundColor: '#F4F4F4' }}>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-16" style={{ gap:'24px'}}>
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
              fontSize: '22px',
              lineHeight: '25px',
              letterSpacing: '0.03em',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: '#000000'
            }}
          >
            This is how we design. This is how we grow.
          </p>
        </div>

        {/* Animated Image Carousel */}
        <div className="relative w-full h-[486px] overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`,
              width: `${ethosImages.length * 100}%`
            }}
          >
            {ethosImages.map((image, index) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0"
                style={{ width: `${100 / ethosImages.length}%` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1440}
                  height={486}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex space-x-3 mt-8">
          {ethosImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-black scale-125' 
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 