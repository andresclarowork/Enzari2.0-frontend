'use client'
import { useState } from 'react'
import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    name: "Johnatan Kimbrough",
    role: "Sales Development Manager",
    image: "/assets/images/Home/Team/team1.png"
  },
  {
    id: 2,
    name: "Gabriel Bohorquez", 
    role: "Talent Acquisition Manager",
    image: "/assets/images/Home/Team/team2.png"
  },
  {
    id: 3,
    name: "Dilshod Alimatov",
    role: "Head of Design", 
    image: "/assets/images/Home/Team/team3.png"
  },
  {
    id: 4,
    name: "Shery Butt",
    role: "UI/UX Designer",
    image: "/assets/images/Home/Team/team4.png"
  }
]

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-[148px] pb-8 sm:pb-12 md:pb-16 lg:pb-[120px] pl-4 sm:pl-6 md:pl-8 lg:pl-[100px] bg-white">
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px]">
        
          {/* Title */}
          <div className="flex flex-row">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px]"
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,
                fontStyle: 'regular',
                
                lineHeight: '1.2em',
                letterSpacing: '-0.05em',
                verticalAlign: 'middle',
                color: '#000000'
              }}
            >
              Enzari Team
            </h2>
          </div>
          
          {/* Team Members Carousel */}
          <div>
            {/* Mobile Layout - Engaging horizontal scroll with cards */}
            <div className="lg:hidden">
              <div className="flex overflow-x-auto gap-4 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {teamMembers.map((member, index) => (
                  <div key={member.id} className="flex-shrink-0">
                    {/* Mobile Avatar Card - More engaging design */}
                    <div 
                      className="rounded-3xl overflow-hidden shadow-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95" 
                      style={{ 
                        backgroundColor: '#FE0B5F',
                        width: '240px',
                        height: '300px',
                        borderRadius: '24px',
                        boxShadow: '0 20px 40px rgba(254, 11, 95, 0.3)'
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        {/* Mobile Info - Enhanced design */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="text-white">
                            <h3 className="text-lg font-bold mb-1 drop-shadow-lg">
                              {member.name}
                            </h3>
                            <p className="text-sm opacity-90 drop-shadow-md">
                              {member.role}
                            </p>
                          </div>
                          
                          {/* Decorative element */}
                          <div className="absolute top-0 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mobile Pagination - More engaging dots */}
              <div className="flex justify-center mt-6 space-x-3">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-pink-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Layout - Original horizontal layout */}
            <div className="hidden lg:block">
              <div className="flex flex-row" style={{ gap:'20px'}}>
                {teamMembers.map((member, index) => (
                  <div key={member.id} className="flex-shrink-0">
                    {/* Desktop Avatar Card */}
                    <div 
                      className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer" 
                      style={{ 
                        backgroundColor: '#FE0B5F',
                        width: '367px',
                        height: '460px',
                        borderRadius: '24px'
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Desktop Hover Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                          <div className="text-white">
                            <h3 className="text-xl font-bold mb-2">
                              {member.name}
                            </h3>
                            <p className="text-sm opacity-90">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pagination Dots - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex justify-center mt-[34px] space-x-2">
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        
      </div>
    </section>
  )
} 