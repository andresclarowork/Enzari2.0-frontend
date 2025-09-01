import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/assets/images/Home/CTA-background.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <div>We'd love to</div>
              <div className="text-5xl lg:text-7xl">hear from you!</div>
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed max-w-2xl mx-auto">
              For any questions, additional information, we encourage you to reach out to us. We are always here to assist and look forward to connecting with you.
            </p>
            
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white hover:bg-gray-100 text-black font-semibold py-4 px-8 rounded-lg transition-colors duration-200 group shadow-lg"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 