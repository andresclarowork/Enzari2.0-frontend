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
    <section className="flex flex-row items-center justify-between max-w-[1440px] mx-auto pt-[120px] pl-[100px] pr-[100px] bg-white">
      
      <div 
        className="flex flex-row"
        style={{
          width: '100%',
          minHeight: '411px',
          justifyContent: 'space-between'
        }}
      >
        {/* Left Side - Title */}
        <div className="flex flex-col max-w-[448px]">
          <h2 
            style={{
              fontFamily: 'Inter Tight',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '80px',
              lineHeight: '82px',
              letterSpacing: '0.05em',
              verticalAlign: 'middle',
              color: '#000000'
            }}
          >
            <div>Frequently</div>
            <div>Asked</div>
            <div>Questions</div>
          </h2>
        </div>
        
        {/* Right Side - FAQ Items */}
        <div 
          className="flex flex-col gap-4" 
          style={{             
            maxWidth: '743px',
            width: '743px',
            paddingTop: '4px'
          }}
        >
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="overflow-hidden"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                border: '1px solid #EDEDED',
                padding: '24px',
                backgroundColor: '#F4F4F4',
                gap: '20px',
                width: '100%',
                minHeight: 'fit-content',
                boxSizing: 'border-box'
              }}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left hover:bg-gray-200 transition-colors duration-200 flex items-center justify-between"
                style={{ width: '100%' }}
              >
                <span 
                  style={{
                    fontFamily: 'Inter Tight',
                    fontWeight: 500,
                    fontSize: '22px',
                    lineHeight: '24px',
                    letterSpacing: '0px',
                    verticalAlign: 'middle',
                    color: '#111212',
                    flex: 1
                  }}
                >
                  {faq.question}
                </span>
                {openFaq === faq.id ? (
                  <Minus className="h-5 w-5 text-gray-900 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-900 flex-shrink-0" />
                )}
              </button>
              
              {openFaq === faq.id && (
                <div style={{ width: '100%' }}>
                  <p 
                    style={{
                      fontFamily: 'Inter Tight',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '21px',
                      letterSpacing: '0px',
                      verticalAlign: 'middle',
                      color: '#111212',
                      opacity: '0.6',
                      width: '100%'
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
} 