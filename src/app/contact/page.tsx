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
      
      {/* Contact content sections will go here */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600">
              Contact page content will be added here based on your future design requirements.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 