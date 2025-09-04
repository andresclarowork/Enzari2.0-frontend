import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHeader } from '@/components/layout/PageHeader'


export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your next project"
      />
      
      
      
      <Footer />
    </main>
  )
} 