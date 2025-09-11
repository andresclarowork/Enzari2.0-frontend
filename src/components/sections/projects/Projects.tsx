'use client'

import Image from 'next/image'
import { useState } from 'react'

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects')

  const categories = [
    'All Projects',
    'Websites',
    'Dashboard',
    'Mobile App',
    'Branding'
  ]

  const projects = [
    {
      id: 1,
      title: 'Zay Pay Mobile App',
      description: 'A showcase of our most impactful projects where creative vision meets flawless execution.',
      image: '/assets/images/Projects/project1.png',
      alt: 'Zay Pay Mobile App',
      category: 'Websites'
    },
    {
      id: 2,
      title: 'Bangkok Properties',
      description: 'A showcase of our most impactful projects where creative vision meets flawless execution.',
      image: '/assets/images/Projects/project2.png',
      alt: 'Bangkok Properties',
      category: 'Websites'
    },
    {
      id: 3,
      title: 'Mobile App Design',
      description: 'A showcase of our most impactful projects where creative vision meets flawless execution.',
      image: '/assets/images/Projects/project3.png',
      alt: 'Mobile App Design',
      category: 'Mobile App'
    },
    {
      id: 4,
      title: 'Medical Professionals Platform',
      description: 'A showcase of our most impactful projects where creative vision meets flawless execution.',
      image: '/assets/images/Projects/project4.png',
      alt: 'Medical Professionals Platform',
      category: 'Websites'
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'A showcase of our most impactful projects where creative vision meets flawless execution.',
      image: '/assets/images/Projects/project5.png',
      alt: 'Analytics Dashboard',
      category: 'Dashboard'
    },
    {
      id: 6,
      title: 'Spark Cards',
      description: 'A showcase of our most impactful projects where creative vision meets flawless execution.',
      image: '/assets/images/Projects/project6.png',
      alt: 'Spark Cards',
      category: 'Websites'
    },
    {
      id: 7,
      title: 'Financial Dashboard',
      description: 'A showcase of our most impactful projects where creative vision meets flawless execution.',
      image: '/assets/images/Projects/project7.png',
      alt: 'Financial Dashboard',
      category: 'Websites'
    }
  ]

  const filteredProjects = activeCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="bg-white border-radius-[32px]">
      <div className="px-4 sm:px-6 md:px-8 lg:px-[100px]">
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center pt-8 sm:pt-12 md:pt-16 lg:pt-[60px] pb-6 sm:pb-8 md:pb-10 lg:pb-[40px] gap-3 sm:gap-4 md:gap-5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full transition-all duration-300 py-2 px-4 sm:py-3 sm:px-5 md:py-3 md:px-5 lg:py-[14px] lg:px-[22px] text-sm sm:text-sm md:text-base lg:text-[16px] ${
                  activeCategory === category
                    ? 'bg-[#FE0B5F] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
                style={{
                  fontFamily: 'var(--font-saans-trial)',
                  fontWeight: 500,
                  lineHeight: '120%',
                  letterSpacing: '-0.05em'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Layout - 2-1-2-2 Structure */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-center mx-auto" style={{ maxWidth: '1240px' }}>
            {/* Row 1: Projects 1 & 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
              {filteredProjects.filter(p => p.id === 1 || p.id === 2).map((project) => (
                <div key={project.id} className="group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col" style={{ gap:'15px sm:gap-5 md:gap-6 lg:gap-[25px]', borderRadius: '16px sm:rounded-2xl md:rounded-3xl lg:rounded-[32px]' }}>
                  {/* Project Image */}
                  <div 
                    className="relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 w-full"
                    style={{
                      maxWidth: '600px',
                      maxHeight: '633px',
                      aspectRatio: '600/633',
                      borderRadius: '16px sm:rounded-2xl md:rounded-3xl lg:rounded-[32px]'
                    }}
                  >
                    {/* Category Tag */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 z-10">
                      <span 
                        className="px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: '#333333',
                          fontFamily: 'var(--font-inter-tight)',
                          fontWeight: 500,
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    
                    <Image                    
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    
                    {/* Hover Overlay with Project Info */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-3 sm:p-4 md:p-5 lg:p-6">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <h3 
                          className="text-white mb-2 sm:mb-3"
                          style={{
                            fontFamily: 'var(--font-inter-tight)',
                            fontWeight: 500,
                            fontStyle: 'medium',
                            fontSize: '18px sm:text-xl md:text-2xl lg:text-[28px]',
                            lineHeight: '1.2em',
                            color: '#FFFFFF'
                          }}
                        >
                          {project.title}
                        </h3>
                        <p 
                          className="text-white mb-3 sm:mb-4"
                          style={{
                            fontFamily: 'var(--font-inter-tight)',
                            fontWeight: 400,
                            fontStyle: 'regular',
                            fontSize: '14px sm:text-base md:text-lg lg:text-[18px]',
                            lineHeight: '20px sm:leading-6 md:leading-7 lg:leading-[25px]',
                            letterSpacing: '0%',
                            color: '#FFFFFF'
                          }}
                        >
                          {project.description}
                        </p>
                        <button className="bg-white text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full font-inter-tight font-normal tracking-tight hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm">
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Project 3 (Full Width) */}
            {filteredProjects.find(p => p.id === 3) && (
              <div className="w-full">
                <div className="group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col" style={{ gap:'15px sm:gap-5 md:gap-6 lg:gap-[25px]', borderRadius: '16px sm:rounded-2xl md:rounded-3xl lg:rounded-[32px]' }}>
                  {/* Project Image */}
                  <div 
                    className="relative overflow-hidden mb-4 sm:mb-5 md:mb-6 lg:mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 w-full"
                    style={{
                      maxHeight: '633px',
                      aspectRatio: '600/633',
                      borderRadius: '16px sm:rounded-2xl md:rounded-3xl lg:rounded-[32px]'
                    }}
                  >
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span 
                        className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: '#333333',
                          fontFamily: 'var(--font-inter-tight)',
                          fontWeight: 500,
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        {filteredProjects.find(p => p.id === 3)?.category}
                      </span>
                    </div>
                    
                    <Image                    
                      src={filteredProjects.find(p => p.id === 3)?.image || ''}
                      alt={filteredProjects.find(p => p.id === 3)?.alt || ''}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Hover Overlay with Project Info */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-6">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <h3 
                          className="text-white mb-3"
                          style={{
                            fontFamily: 'var(--font-inter-tight)',
                            fontWeight: 500,
                            fontStyle: 'medium',
                            fontSize: '28px',
                            lineHeight: '1.2em',
                            color: '#FFFFFF'
                          }}
                        >
                          {filteredProjects.find(p => p.id === 3)?.title}
                        </h3>
                        <p 
                          className="text-white mb-4"
                          style={{
                            fontFamily: 'var(--font-inter-tight)',
                            fontWeight: 400,
                            fontStyle: 'regular',
                            fontSize: '18px',
                            lineHeight: '25px',
                            letterSpacing: '0%',
                            color: '#FFFFFF'
                          }}
                        >
                          {filteredProjects.find(p => p.id === 3)?.description}
                        </p>
                        <button className="bg-white text-black px-4 py-2 rounded-full font-inter-tight font-normal tracking-tight hover:bg-gray-100 transition-colors duration-200 text-sm">
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Row 3: Projects 4 & 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
              {filteredProjects.filter(p => p.id === 4 || p.id === 5).map((project) => (
                <div key={project.id} className="group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col" style={{ gap:'25px', borderRadius: '32px' }}>
                  {/* Project Image */}
                  <div 
                    className="relative overflow-hidden mb-4 sm:mb-5 md:mb-6 lg:mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 w-full"
                    style={{
                      maxWidth: '600px',
                      maxHeight: '633px',
                      aspectRatio: '600/633',
                      borderRadius: '16px sm:rounded-2xl md:rounded-3xl lg:rounded-[32px]'
                    }}
                  >
                    {/* Category Tag */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 z-10">
                      <span 
                        className="px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: '#333333',
                          fontFamily: 'var(--font-inter-tight)',
                          fontWeight: 500,
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    
                    <Image                    
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    
                    {/* Hover Overlay with Project Info */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-3 sm:p-4 md:p-5 lg:p-6">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <h3 
                          className="text-white mb-2 sm:mb-3"
                          style={{
                            fontFamily: 'var(--font-inter-tight)',
                            fontWeight: 500,
                            fontStyle: 'medium',
                            fontSize: '18px sm:text-xl md:text-2xl lg:text-[28px]',
                            lineHeight: '1.2em',
                            color: '#FFFFFF'
                          }}
                        >
                          {project.title}
                        </h3>
                        <p 
                          className="text-white mb-3 sm:mb-4"
                          style={{
                            fontFamily: 'var(--font-inter-tight)',
                            fontWeight: 400,
                            fontStyle: 'regular',
                            fontSize: '14px sm:text-base md:text-lg lg:text-[18px]',
                            lineHeight: '20px sm:leading-6 md:leading-7 lg:leading-[25px]',
                            letterSpacing: '0%',
                            color: '#FFFFFF'
                          }}
                        >
                          {project.description}
                        </p>
                        <button className="bg-white text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full font-inter-tight font-normal tracking-tight hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm">
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 4: Projects 6 & 7 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
              {filteredProjects.filter(p => p.id === 6 || p.id === 7).map((project) => (
                <div key={project.id} className="group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col" style={{ gap:'25px', borderRadius: '32px' }}>
                  {/* Project Image */}
                  <div 
                    className="relative overflow-hidden mb-4 sm:mb-5 md:mb-6 lg:mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 w-full"
                    style={{
                      maxWidth: '600px',
                      maxHeight: '633px',
                      aspectRatio: '600/633',
                      borderRadius: '16px sm:rounded-2xl md:rounded-3xl lg:rounded-[32px]'
                    }}
                  >
                    {/* Category Tag */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 z-10">
                      <span 
                        className="px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: '#333333',
                          fontFamily: 'var(--font-inter-tight)',
                          fontWeight: 500,
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    
                    <Image                    
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    
                    {/* Hover Overlay with Project Info */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-3 sm:p-4 md:p-5 lg:p-6">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <h3 
                          className="text-white mb-2 sm:mb-3"
                          style={{
                            fontFamily: 'var(--font-inter-tight)',
                            fontWeight: 500,
                            fontStyle: 'medium',
                            fontSize: '18px sm:text-xl md:text-2xl lg:text-[28px]',
                            lineHeight: '1.2em',
                            color: '#FFFFFF'
                          }}
                        >
                          {project.title}
                        </h3>
                        <p 
                          className="text-white mb-3 sm:mb-4"
                          style={{
                            fontFamily: 'var(--font-inter-tight)',
                            fontWeight: 400,
                            fontStyle: 'regular',
                            fontSize: '14px sm:text-base md:text-lg lg:text-[18px]',
                            lineHeight: '20px sm:leading-6 md:leading-7 lg:leading-[25px]',
                            letterSpacing: '0%',
                            color: '#FFFFFF'
                          }}
                        >
                          {project.description}
                        </p>
                        <button className="bg-white text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full font-inter-tight font-normal tracking-tight hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm">
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 