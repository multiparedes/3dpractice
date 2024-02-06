import { gsap, TimelineMax } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

function revealText(classSelector: string): void {
  const splitTypes = document.querySelectorAll<HTMLElement>(classSelector)

  splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' })

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 90%',
        end: 'top 50%',
        scrub: true,
        markers: false,
      },
      opacity: 0.2,
      stagger: 0.1,
    })
  })
}

type Direction = 'left' | 'right' | 'top' | 'bottom'

function appearItems(classSelector: string, direction: Direction = 'left', makeSrub: boolean = false): void {
  const items = document.querySelectorAll<HTMLElement>(classSelector)

  items.forEach((item, i) => {
    const directionProperties: { [key: string]: any } = {
      left: { x: -500 },
      right: { x: 500 },
      top: { y: -500 },
      bottom: { y: 500 },
    }

    const properties = {
      opacity: 0,
      duration: 1,
      delay: 0.05 * i,
      ...directionProperties[direction],
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: classSelector,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: makeSrub,
        markers: false,
      },
    })

    timeline.from(item, properties)
  })
}

export { revealText, appearItems }
