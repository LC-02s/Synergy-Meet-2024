import React from 'react'
import { useScroll } from 'motion/react'
import { introStyle } from './Intro.style'
import IntroTitle from './IntroTitle'
import ScrollGuide from './ScrollGuide'
import IntroVideo from './IntroVideo'

export default function Intro() {
  const containerRef = React.useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  return (
    <section id="intro" ref={containerRef} css={introStyle}>
      <IntroTitle scrollYProgress={scrollYProgress} />
      <ScrollGuide scrollYProgress={scrollYProgress} />
      <IntroVideo scrollYProgress={scrollYProgress} />
    </section>
  )
}
