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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our Happy Customes
          </h2>
        </div>
        
        {/* Cards Layout */}
        <div className="flex gap-6">
          {/* Rating Card */}
          <div className="bg-gray-100 rounded-2xl p-8 text-center flex-shrink-0 w-64 h-80 flex flex-col justify-center">
            <div className="text-6xl font-bold text-gray-900 mb-4">4.9</div>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-pink-500 fill-current" />
              ))}
            </div>
            <p className="text-lg text-gray-600">200+ Five Star Rating</p>
          </div>
          
          {/* Testimonial Cards */}
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-100 rounded-2xl p-6 flex-shrink-0 w-64 h-80 flex flex-col">
              {/* Quote Icon */}
              <div className="text-4xl font-bold text-gray-900 mb-4">"</div>
              
              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 text-sm leading-relaxed flex-1">
                {testimonial.text}
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center space-x-3 mt-auto">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}, {testimonial.profession}
                  </div>
                  <div className="text-gray-600 text-xs">
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