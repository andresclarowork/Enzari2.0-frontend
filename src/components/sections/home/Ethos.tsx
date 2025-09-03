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
    <section className="pt-[120px] pb-[120px]" style={{ backgroundColor: '#F4F4F4' }}>
      <div>
        
          <div className="text-center mb-16" style={{ gap:'24px'}}>
            <h2 
              style={{
                fontFamily: 'Inter Tight',
                fontWeight: 400,
                fontStyle: 'regular',
                fontSize: '80px',
                lineHeight: '1.2em',
                letterSpacing: '-0.05em',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: '#000000',                
              }}
            >
              The Enzari Ethos
            </h2>
            <p 
              style={{
                fontFamily: 'Inter Tight',
                fontWeight: 400,
                fontSize: '22px',
                lineHeight: '25px',
                letterSpacing: '0.03em',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: '#000000'
              }}
            >
              This is how we design. This is how we grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
            {ethosCards.map((card) => (
              <div key={card.id} className="text-left">
                {/* Image Card */}
                <div className="relative mb-[8px] overflow-hidden rounded-2xl shadow-lg">
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