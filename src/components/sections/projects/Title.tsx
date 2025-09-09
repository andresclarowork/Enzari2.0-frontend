export function Title() {
  return (
    <section className="flex flex-col items-center justify-center max-w-[1440px] mx-auto pt-[50px] pl-[100px] pr-[100px] gap-20">
      <div className="flex flex-col items-center justify-center gap-[30px] max-w-[584px]">
          <p 
             style={{
               fontFamily: 'var(--font-inter-tight)',
               fontWeight: 400,
               fontStyle: 'regular',
               fontSize: '80px',
               lineHeight: '86px',
               letterSpacing: '-0.03em',
               textAlign: 'center',
               verticalAlign: 'middle',
               color: '#000000'
             }}
          >
             Showcasing What We Build
          </p>
          <p 
            style={{
              fontFamily: 'var(--font-inter-tight)',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '18px',
              lineHeight: '25px',
              letterSpacing: '0px',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: '#000000',
              borderBottom: '1px solid #D2D2D2',
              paddingBottom: '25px'
            }}
          >
            Every project tells a story. Here's how we've helped brands bring their visions to life through thoughtful design and strategy.
          </p>
        </div>
    </section>
  )
}
