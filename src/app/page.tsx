import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/home/Hero'
import { About } from '@/components/sections/home/About'
import { Services } from '@/components/sections/home/Services'
import { Projects } from '@/components/sections/home/Projects'
import { Ethos } from '@/components/sections/home/Ethos'
import { Team } from '@/components/sections/home/Team'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { FAQ } from '@/components/sections/home/FAQ'
import { CTA } from '@/components/sections/home/CTA'

export default function HomePage() {
  return (
    <main className="min-h-screen mx-w-[1440px]">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Ethos />
      <Team />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
} 