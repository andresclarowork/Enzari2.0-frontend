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
               Have a Project? Let's Talk
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
              We'd love to hear about your ideas. Share your vision with us, and together we'll craft solutions that bring it to life.
            </p>
          </div>
      </section>
    )
  }
  