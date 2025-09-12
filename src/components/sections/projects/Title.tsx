export function Title() {
  return (
    <section className="flex flex-col items-center justify-center max-w-[1440px] mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-[50px] px-4 sm:px-6 md:px-8 lg:pl-[100px] lg:pr-[100px] gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-[30px] max-w-full lg:max-w-[584px] px-4 sm:px-6 md:px-8 lg:px-0">
          <p 
             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[86px] text-center"
             style={{
               fontFamily: 'var(--font-inter-tight)',
               fontWeight: 400,
               fontStyle: 'regular',
               letterSpacing: '-0.03em',
               verticalAlign: 'middle',
               color: '#000000'
             }}
          >
             Showcasing What We Build
          </p>
          <p 
            className="sm:pb-5 md:pb-6 lg:pb-[25px] text-sm sm:text-base lg:text-[18px] leading-relaxed sm:leading-relaxed lg:leading-[25px] text-center"
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              letterSpacing: '0px',
              verticalAlign: 'middle',
              color: '#000000',
              borderBottom: '1px solid #D2D2D2',              
            }}
          >
            Every project tells a story. Here's how we've helped brands bring their visions to life through thoughtful design and strategy.
          </p>
        </div>
    </section>
  )
}
