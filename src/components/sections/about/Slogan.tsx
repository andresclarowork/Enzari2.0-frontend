import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Slogan() {
  return (
    <section className="flex flex-row bg-white items-center max-w-[1440px]  mx-auto pl-[100px] pr-[100px]">
      <div className="flex flex-row items-center justify-center w-[100%]">
        <p 
          className="flex"
          style={{
            fontFamily: 'var(--font-inter-tight)',
            fontWeight: 400,
            fontStyle: 'regular',
            fontSize: '80px',
            lineHeight: '82px',
            letterSpacing: '-0.05em',
            verticalAlign: 'center',
            textAlign: 'center',
            color: '#000000',
            maxWidth: '750px',
          }}
        >
          Whatever we imagine, we can make real!
        </p>        
      </div>
    </section>
  )
}
