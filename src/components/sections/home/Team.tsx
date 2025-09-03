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
    role: "Ui/UX Designer",
    image: "/assets/images/Home/Team/team4.png"
  }
]

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="pt-[148px] pb-[120px] bg-white">
      <div className="flex flex-col pl-[100px] gap-[40px]">
        
          {/* Title */}
          <div className="flex flex-row">
            <h2 
              style={{
                fontFamily: 'Inter Tight',
                fontWeight: 400,
                fontStyle: 'regular',
                fontSize: '80px',
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
            <div className="flex flex-row" style={{ gap:'20px'}}>
              {teamMembers.map((member, index) => (
                <div key={member.id} className="flex-shrink-0">
                  {/* Avatar Card */}
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
                      
                      {/* Hover Overlay */}
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
            
            {/* Pagination Dots - 5 dots as shown in screenshot */}
            <div className="flex justify-center mt-8 space-x-2">
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