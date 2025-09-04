import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHeader } from '@/components/layout/PageHeader'
import { Hero } from '@/components/sections/about/Hero'
import { Intro } from '@/components/sections/about/Intro'
import { Slogan } from '@/components/sections/about/Slogan'
import { Services } from '@/components/sections/about/Services'
import { Team } from '@/components/sections/home/Team'
import { CTA } from '@/components/sections/home/CTA'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />      
      <Hero />
      <Intro />
      <Slogan />
      <Services />
      <Team />
      <CTA />      
      <Footer />
    </main>
  )
} 