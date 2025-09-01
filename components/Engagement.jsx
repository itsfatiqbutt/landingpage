"use client"

import React, { useRef, useEffect, useState } from 'react'
import Engagement_C from './Engagement_C'

export const engagementsData = [
  { img: '/images/eng1.svg', link: 'Trilogy' },
  { img: '/images/eng2.png', link: 'Solitaire' },
  { img: '/images/eng3.png', link: 'Cluster' },
  { img: '/images/eng4.png', link: 'Bezel' },
  { img: '/images/eng5.png', link: 'Hidden Halo' },
  { img: '/images/eng6.png', link: 'Floral' },
  { img: '/images/eng7.png', link: 'Celtic' },
  { img: '/images/eng8.png', link: 'Halo' },
]

const leftIconSrc = '/images/cr-left.svg'
const rightIconSrc = '/images/cr-right.svg'

const Engagement = () => {
  const containerRef = useRef(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  // Update scroll button availability
  const updateButtons = () => {
    const el = containerRef.current
    if (!el) return
    setCanScrollPrev(el.scrollLeft > 5)
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 5)
  }

  useEffect(() => {
    updateButtons()
    const el = containerRef.current
    if (!el) return
    const onScroll = () => updateButtons()
    window.addEventListener('resize', updateButtons)
    el.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('resize', updateButtons)
      el.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Scroll by one "page" (the visible width)
  const scrollNext = () => {
    const el = containerRef.current
    if (!el) return
    el.scrollBy({ left: el.clientWidth, behavior: 'smooth' })
  }

  const scrollPrev = () => {
    const el = containerRef.current
    if (!el) return
    el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="w-[90%] mx-auto mt-[60px]">
      <h1 className="font-garamond italic text-[20px] md:text-[40px] text-center font-[500]">
        Shop by Engagement Ring Style
      </h1>
      <p className="mt-[30px] font-helvetica mx-auto font-medium text-[10px] text-black md:text-[16px] text-center w-[80%] md:w-[67%]">
        Browse our exclusive engagement ring designs by categories and explore a range of timeless or modern styles to pair with your selected lab-grown or earth-mined diamond. Our engagement rings embody over a decade of expertise and uncompromising quality, specific only to Hatton Garden Jewellers & Craftsmen.
      </p>

      <div className="relative mt-[30px]">
        {/* Horizontal scroll container. Each item width is responsive: 1/2 on small, 1/3 on md, 1/5 on xl+ */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scroll-pl-4 snap-x snap-mandatory px-4 py-2"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {engagementsData.map((item, idx) => (
            <div
              key={idx}
              className="snap-start w-1/2 md:w-1/3 xl:w-1/5 flex-shrink-0"
            >
              <Engagement_C img={item.img} link={item.link} />
            </div>
          ))}
        </div>

        {/* Prev button - minimal, no bg or hover, just pointer */}
        <button
          onClick={scrollPrev}
          aria-label="Previous"
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-50 p-0 m-0 cursor-pointer border-0 bg-transparent"
          style={{ WebkitTapHighlightColor: 'transparent' }}
          disabled={!canScrollPrev}
        >
          <img src={leftIconSrc} alt="Previous" width={15} height={10} />
        </button>

        {/* Next button */}
        <button
          onClick={scrollNext}
          aria-label="Next"
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-50 p-0 m-0 cursor-pointer border-0 bg-transparent"
          style={{ WebkitTapHighlightColor: 'transparent' }}
          disabled={!canScrollNext}
        >
          <img src={rightIconSrc} alt="Next" width={15} height={10} />
        </button>
      </div>
    </div>
  )
}

export default Engagement
