import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Slogan() {
  return (
    <section className="flex flex-row bg-white items-center max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:pl-[100px] lg:pr-[100px]">
      <div className="flex flex-row items-center justify-center w-[100%]">
        <p 
          className="flex text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[82px] text-center"
          style={{
            fontFamily: 'var(--font-inter-tight)',
            fontWeight: 400,
            fontStyle: 'regular',
            letterSpacing: '-0.05em',
            verticalAlign: 'center',
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
