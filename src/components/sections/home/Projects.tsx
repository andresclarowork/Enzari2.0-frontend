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
    <section className="bg-white border-radius-[32px] mt-[120px] pb-[120px]" style={{ backgroundColor: '#F4F4F4' }}>
      <div style={{ paddingLeft: '100px', paddingRight: '100px' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          {/* Section Header */}
          <div className="text-center" style={{ paddingTop: '107px', paddingBottom: '88px' }}>
            <h2 
              style={{
                fontFamily: 'Inter Tight',
                fontWeight: 400,
                fontStyle: 'regular',
                fontSize: '80px',
                lineHeight: '120%',
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center mx-auto" style={{ maxWidth: '1240px' }}>
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2" style={{ gap:'25px', borderRadius: '32px' }}>
                {/* Project Image */}
                <div 
                  className="relative overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
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
                      <button className="bg-white text-black px-6 py-3 rounded-full font-inter-tight font-normal tracking-tight hover:bg-gray-100 transition-colors duration-200">
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="flex flex-col max-w-[415px]" style={{ gap: '20px' }}>
                  <h3 
                    style={{
                      fontFamily: 'Inter Tight',
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
                    style={{
                      fontFamily: 'Inter Tight',
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