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
    <section className="py-20 bg-white">
      <div className="px-4 sm:px-6 lg:px-8 mx-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-normal text-black font-inter-tight tracking-tight mb-12">
              Feature Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2">
                {/* Project Image */}
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
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
                <div>
                  <h3 className="text-xl font-normal text-black font-inter-tight tracking-tight mb-2 group-hover:text-pink-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-inter-tight font-normal text-sm tracking-tight leading-relaxed">
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