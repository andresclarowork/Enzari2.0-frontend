import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHeader } from '@/components/layout/PageHeader'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { CTA } from '@/components/sections/home/CTA'
import { Hero } from '@/components/sections/services/Hero'
import { WebDesign } from '@/components/sections/services/WebDesign'
import { ProductDesign } from '@/components/sections/services/ProductDesign'
import { Branding } from '@/components/sections/services/Branding'
import { VisualDesign } from '@/components/sections/services/VisualDesign'
import { AIProduction } from '@/components/sections/services/AIProduction'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
     
      <Hero />
      <WebDesign />
      <ProductDesign />
      <Branding />
      <VisualDesign />
      <AIProduction />
          
      <Testimonials />
      <CTA />
      
      <Footer />
    </main>
  )
} 