'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "What services does Enzari offer?",
    answer: "We provide web design & development, digital product design, branding, graphic design, motion/ animation, and AI-driven creative solutions."
  },
  {
    id: 2,
    question: "Who do you work with?",
    answer: "We work with startups, small businesses, and large enterprises across various industries. Our clients range from tech companies to traditional businesses looking to modernize their digital presence."
  },
  {
    id: 3,
    question: "How does your process work?",
    answer: "Our process begins with discovery and research, followed by strategy development, design, development, and testing. We maintain close communication throughout the project lifecycle."
  },
  {
    id: 4,
    question: "Can you handle projects end-to-end?",
    answer: "Yes, we provide end-to-end services from initial concept and strategy to final deployment and ongoing maintenance. We're your complete digital partner."
  },
  {
    id: 5,
    question: "Do you work with international clients?",
    answer: "Absolutely! We work with clients worldwide and have experience managing projects across different time zones and cultural contexts."
  }
]

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(1) // First FAQ open by default

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <div>Frequently</div>
              <div>Asked</div>
              <div>Questions</div>
            </h2>
          </div>
          
          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-gray-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-200 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <Minus className="h-5 w-5 text-gray-900 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-900 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 