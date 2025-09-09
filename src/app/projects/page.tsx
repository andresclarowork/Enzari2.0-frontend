import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CTA } from '@/components/sections/home/CTA'
import { Testimonials } from '@/components/sections/projects/Testimonials'
import { Title } from '@/components/sections/projects/Title'
import { Projects } from '@/components/sections/projects/Projects'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />     
      <Title />
      <Projects />
      <Testimonials />
      <CTA />      
      <Footer />
    </main>
  )
} 