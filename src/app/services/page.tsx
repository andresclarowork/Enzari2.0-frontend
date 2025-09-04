import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHeader } from '@/components/layout/PageHeader'
import { Projects } from '@/components/sections/home/Projects'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { CTA } from '@/components/sections/home/CTA'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader 
        title="Our Services"
        subtitle="Discover our comprehensive range of digital services and creative solutions"
      />
      
      <Projects />
      <Testimonials />
      <CTA />
      
      <Footer />
    </main>
  )
} 