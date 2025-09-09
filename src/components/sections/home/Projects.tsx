import Image from 'next/image'

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Zay Pay Mobile App',
      description: 'A showcase of our most impactful projects where creative vision meets flawless execution.',
      image: '/assets/images/Home/Projects/project1.png',
      alt: 'Zay Pay Mobile App'
    },
    {
      id: 2,
      title: 'Zay Pay Mobile App',
      description: 'A showcase of our most impactful projects where creative vision meets flawless execution.',
      image: '/assets/images/Home/Projects/project2.png',
      alt: 'Zay Pay Mobile App'
    },
    {
      id: 3,
      title: 'Zay Pay Mobile App',
      description: 'A showcase of our most impactful projects where creative vision meets flawless execution.',
      image: '/assets/images/Home/Projects/project3.png',
      alt: 'Zay Pay Mobile App'
    },
    {
      id: 4,
      title: 'Zay Pay Mobile App',
      description: 'A showcase of our most impactful projects where creative vision meets flawless execution.',
      image: '/assets/images/Home/Projects/project4.png',
      alt: 'Zay Pay Mobile App'
    },
    {
      id: 5,
      title: 'Zay Pay Mobile App',
      description: 'A showcase of our most impactful projects where creative vision meets flawless execution.',
      image: '/assets/images/Home/Projects/project5.png',
      alt: 'Zay Pay Mobile App'
    },
    {
      id: 6,
      title: 'Zay Pay Mobile App',
      description: 'A showcase of our most impactful projects where creative vision meets flawless execution.',
      image: '/assets/images/Home/Projects/project6.png',
      alt: 'Zay Pay Mobile App'
    }
  ]

  return (
    <section className="bg-white border-radius-[32px] mt-4 sm:mt-8 md:mt-12 lg:mt-[120px] pb-4 sm:pb-8 md:pb-12 lg:pb-[120px]" style={{ backgroundColor: '#F4F4F4' }}>
      <div className="px-2 sm:px-4 md:px-6 lg:px-[100px]">
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          {/* Section Header */}
          <div className="text-center pt-8 pb-6 sm:pt-12 sm:pb-8 md:pt-16 md:pb-10 lg:pt-[107px] lg:pb-[88px]">
            <h2 
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px]"
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,
                fontStyle: 'regular',                
                lineHeight: '1.2em',
                letterSpacing: '-0.05em',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: '#000000'
              }}
            >
              Feature Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-start mx-auto" style={{ maxWidth: '1240px' }}>
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col" style={{ gap:'25px', borderRadius: '32px' }}>
                {/* Project Image */}
                <div 
                  className="relative overflow-hidden mb-4 sm:mb-5 md:mb-6 lg:mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 w-full"
                  style={{
                    maxWidth: '600px',
                    maxHeight: '633px',
                    aspectRatio: '600/633',
                    borderRadius: '32px'
                  }}
                >
                  <Image                    
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full font-inter-tight font-normal tracking-tight hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm md:text-base">
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="flex flex-col w-full max-w-[415px] px-2 sm:px-0" style={{ gap: '20px' }}>
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[28px] leading-tight"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 500,
                      fontStyle: 'medium',
                      fontSize: '28px',
                      lineHeight: '1.2em',
                      verticalAlign: 'middle',
                      color: '#111111'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p 
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      fontStyle: 'regular',
                      fontSize: '18px',
                      lineHeight: '25px',
                      letterSpacing: '0%',
                      verticalAlign: 'middle',
                      color: '#000000'
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 