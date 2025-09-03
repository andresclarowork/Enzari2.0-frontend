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
    <section className="bg-white">
      <div className="flex flex-col pl-[100px]" style={{ gap:'40px'}}>
        
          {/* Title */}
          <div className="flex flex-row">
            <h2 
              style={{
                fontFamily: 'Inter Tight',
                fontWeight: 400,
                fontStyle: 'regular',
                fontSize: '80px',
                lineHeight: '1.2em',
                letterSpacing: '-0.05em',
                verticalAlign: 'middle',
                color: '#000000'
              }}
            >
              Our Happy Customes
            </h2>
          </div>
          
          {/* Cards Layout */}
          <div className="flex flex-row gap-[20px] max-h-[460px]">
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
                  fontFamily: 'Inter Tight',
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
                    fontFamily: 'Inter Tight',
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
                      fontFamily: 'Inter Tight',
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
                        fontFamily: 'Karla',
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
                        fontFamily: 'Karla',
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