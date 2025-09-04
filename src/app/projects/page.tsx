import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHeader } from '@/components/layout/PageHeader'
import { CTA } from '@/components/sections/home/CTA'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader 
        title="Our Projects"
        subtitle="Explore our portfolio of successful digital projects and creative solutions"
      />
      
      <CTA />
      
      <Footer />
    </main>
  )
} 