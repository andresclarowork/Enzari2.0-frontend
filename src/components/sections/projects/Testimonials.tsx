import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: "Jake T",
    profession: "Electrician",
    location: "Sydney",
    rating: 5,
    text: "Within 3 months, I was showing up on Google Maps and getting calls every week. These guys actually know the trade game.",
    avatar: "/assets/images/Home/Testimonials/testimonial1.png"
  },
  {
    id: 2,
    name: "Jake T.",
    profession: "Electrician",
    location: "Sydney",
    rating: 5,
    text: "Within 3 months, I was showing up on Google Maps and getting calls every week. These guys actually know the trade game.",
    avatar: "/assets/images/Home/Testimonials/testimonial2.png"
  },
  {
    id: 3,
    name: "Jake T.",
    profession: "Electrician",
    location: "Sydney",
    rating: 5,
    text: "Within 3 months, I was showing up on Google Maps and getting calls every week. These guys actually know the trade game.",
    avatar: "/assets/images/Home/Testimonials/testimonial3.png"
  }
]

export function Testimonials() {
  return (
    <section className="bg-white pt-8 sm:pt-12 md:pt-16 lg:pt-[120px] pb-8 sm:pb-12 md:pb-16 lg:pb-0">
      <div className="flex flex-col pl-4 sm:pl-6 md:pl-8 lg:pl-[100px] gap-6 sm:gap-8 md:gap-10 lg:gap-[40px]" style={{ gap:'40px'}}>
        
          {/* Title */}
          <div className="flex flex-row">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px]"
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,
                fontStyle: 'regular',
                
                lineHeight: '1.2em',
                letterSpacing: '-0.05em',
                verticalAlign: 'middle',
                color: '#000000'
              }}
            >
              <p>Find your best design into us.</p>
              <p>We guarantee next success is yours!</p>
            </h2>
          </div>
          
          {/* Mobile Layout - Engaging vertical stack */}
          <div className="lg:hidden">
            {/* Rating Card - Mobile */}
            <div 
              className="text-center flex-shrink-0 flex flex-col justify-center mx-auto mb-4 sm:mb-5 md:mb-6 transform transition-all duration-300 hover:scale-105"
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '280px',
                height: '200px',
                borderRadius: '16px',
                border: '1px solid #EDEDED',
                padding: '20px',
                gap: '20px',
                backgroundColor: '#F4F4F4',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div 
                className="text-4xl sm:text-5xl md:text-6xl"
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  // fontSize: '100px',
                  // lineHeight: '108px',
                  letterSpacing: '-0.05px',
                  verticalAlign: 'middle',
                  color: '#000000'
                }}
              >
                4.9
              </div>
              <div className="flex flex-col" style={{ gap:'8px'}}>
                <div className="flex justify-center items-center" style={{ gap:'3px'}}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500 fill-current" />
                  ))}
                </div>
                <p 
                  className="text-sm sm:text-base"
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    fontSize: '16px',
                    lineHeight: '1em',
                    letterSpacing: '0',
                    verticalAlign: 'middle',
                    color: '#000000'
                  }}
                >
                  200+ Five Star Rating
                </p>
              </div>              
            </div>

            {/* Testimonial Cards - Mobile Horizontal Scroll */}
            <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="flex-shrink-0 flex flex-col transform transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '280px',
                    height: '320px',
                    borderRadius: '16px',
                    border: '1px solid #EDEDED',
                    justifyContent: 'space-between',
                    padding: '24px',
                    backgroundColor: '#F4F4F4',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="flex flex-col" style={{ gap:'20px'}}>
                    {/* Quote Icon */}
                    <div 
                      className="text-3xl sm:text-4xl"
                      style={{
                        width: '31.93px',
                        height: '27.44px',
                        color: '#000000',                    
                        fontWeight: 500,
                        fontStyle: 'regular',
                        fontSize: '64px',
                        lineHeight: '48px',
                        letterSpacing: '0',
                        verticalAlign: 'middle',
                        textAlign: 'left'
                      }}
                    >
                      "
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote 
                      className="text-base sm:text-lg"
                      style={{
                        fontFamily: 'var(--font-inter-tight)',
                        fontWeight: 400,
                        fontStyle: 'regular',
                        fontSize: '24px',
                        lineHeight: '1em',
                        letterSpacing: '-0.05em',
                        verticalAlign: 'middle',
                        color: '#000000'
                      }}
                    >
                      {testimonial.text}
                    </blockquote>
                  </div>
                  {/* Author Info */}
                  <div className="flex items-center" style={{ gap:'12px'}}>
                    <div className="overflow-hidden" style={{ width:'36px', height:'36px', borderRadius:'50%'}}>
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div 
                        className="text-sm sm:text-base"
                        style={{
                          fontFamily: 'var(--font-karla)',
                          fontWeight: 700,
                          fontStyle: 'bold',
                          fontSize: '20px',
                          lineHeight: '1em',
                          letterSpacing: '-0.09em',
                          color: '#1A3637'
                        }}
                      >
                        {testimonial.name}, {testimonial.profession}
                      </div>
                      <div 
                        className="text-xs sm:text-sm"
                        style={{
                          fontFamily: 'var(--font-karla)',
                          fontWeight: 400,
                          fontStyle: 'regular',
                          fontSize: '16px',
                          lineHeight: '1.2em',
                          letterSpacing: '-0.01em',
                          color: '#62748E'
                        }}
                      >
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Original horizontal layout */}
          <div className="hidden lg:flex flex-row gap-[20px] max-h-[460px]">
            {/* Rating Card */}
            <div 
              className="text-center flex-shrink-0 flex flex-col justify-center"
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '367px',
                height: '460px',
                borderRadius: '16px',
                border: '1px solid #EDEDED',
                padding: '24px',
                gap: '42px',
                backgroundColor: '#F4F4F4'
              }}
            >
              <div 
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  fontSize: '100px',
                  lineHeight: '108px',
                  letterSpacing: '-0.05px',
                  verticalAlign: 'middle',
                  color: '#000000'
                }}
              >
                4.9
              </div>
              <div className="flex flex-col" style={{ gap:'12px'}}>
                <div className="flex justify-center items-center" style={{ gap:'5px'}}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-pink-500 fill-current" />
                  ))}
                </div>
                <p 
                  style={{
                    fontFamily: 'var(--font-inter-tight)',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    fontSize: '16px',
                    lineHeight: '1em',
                    letterSpacing: '0',
                    verticalAlign: 'middle',
                    color: '#000000'
                  }}
                >
                  200+ Five Star Rating
                </p>
              </div>              
            </div>
            
            {/* Testimonial Cards */}
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-shrink-0 flex flex-col"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '367px',
                  height: '460px',
                  borderRadius: '16px',
                  border: '1px solid #EDEDED',
                  justifyContent: 'space-between',
                  padding: '32px',
                  backgroundColor: '#F4F4F4'
                }}
              >
                <div className="flex flex-col max-w-[303px]" style={{ gap:'40px'}}>
                  {/* Quote Icon */}
                  <div 
                    style={{
                      width: '31.93px',
                      height: '27.44px',
                      color: '#000000',                    
                      fontWeight: 500,
                      fontStyle: 'regular',
                      fontSize: '64px',
                      lineHeight: '48px',
                      letterSpacing: '0',
                      verticalAlign: 'middle',
                      textAlign: 'left'
                    }}
                  >
                    "
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote 
                    style={{
                      fontFamily: 'var(--font-inter-tight)',
                      fontWeight: 400,
                      fontStyle: 'regular',
                      fontSize: '24px',
                      lineHeight: '1em',
                      letterSpacing: '-0.05em',
                      verticalAlign: 'middle',
                      color: '#000000'
                    }}
                  >
                    {testimonial.text}
                  </blockquote>
                </div>
                {/* Author Info */}
                <div className="flex items-center" style={{ gap:'13px'}}>
                  <div className="overflow-hidden" style={{ width:'42px', height:'42px', borderRadius:'50%'}}>
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div 
                      style={{
                        fontFamily: 'var(--font-karla)',
                        fontWeight: 700,
                        fontStyle: 'bold',
                        fontSize: '20px',
                        lineHeight: '1em',
                        letterSpacing: '-0.09em',
                        color: '#1A3637'
                      }}
                    >
                      {testimonial.name}, {testimonial.profession}
                    </div>
                    <div 
                      style={{
                        fontFamily: 'var(--font-karla)',
                        fontWeight: 400,
                        fontStyle: 'regular',
                        fontSize: '16px',
                        lineHeight: '1.2em',
                        letterSpacing: '-0.01em',
                        color: '#62748E'
                      }}
                    >
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
      </div>
    </section>
  )
} 