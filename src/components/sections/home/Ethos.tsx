import Image from 'next/image'

const ethosCards = [
  {
    id: 1,
    image: "/assets/images/Home/Ethos/ethos1.png",
    description: "We are adaptive, not rigid."
  },
  {
    id: 2,
    image: "/assets/images/Home/Ethos/ethos2.png",
    description: "We are creative partners, not vendors."
  },
  {
    id: 3,
    image: "/assets/images/Home/Ethos/ethos3.png",
    description: "We are storytellers, not order-takers."
  },
  {
    id: 4,
    image: "/assets/images/Home/Ethos/ethos4.png",
    description: "We are invested, not transactional."
  }
]

export function Ethos() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F4F4F4' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Enzari Ethos
          </h2>
          <p className="text-xl text-gray-600">
            This is how we design. This is how we grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ethosCards.map((card) => (
            <div key={card.id} className="text-center">
              {/* Image Card */}
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={card.image}
                  alt={card.description}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Caption */}
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 