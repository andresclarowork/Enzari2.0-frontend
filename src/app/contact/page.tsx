import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FAQ } from '@/components/sections/home/FAQ'
import { Title } from '@/components/sections/contact/Title'
import { Form } from '@/components/sections/contact/Form'
import { Intro } from '@/components/sections/contact/Intro'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />      
      <Title />
      <Form />
      <Intro />
      <FAQ />
      <Footer />
    </main>
  )
} 