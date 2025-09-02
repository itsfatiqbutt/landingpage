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

  // robust step calculation (use offsetWidth to avoid subpixel surprises)
  const getScrollStep = () => {
    const el = containerRef.current
    if (!el) return 0
    const firstChild = el.children && el.children[0]
    try {
      const gapStyle = getComputedStyle(el).gap || "0px"
      const gap = parseFloat(gapStyle) || 0

      if (firstChild && typeof firstChild.getBoundingClientRect === 'function') {
        // offsetWidth is integer px and avoids fractional subpixel math
        const itemW = firstChild.offsetWidth
        if (itemW > 0) return Math.round(itemW + gap)
      }
    } catch (e) {
      // ignore
    }

    return Math.round(el.clientWidth / 2)
  }

  const updateButtons = () => {
    const el = containerRef.current
    if (!el) return
    setCanScrollPrev(el.scrollLeft > 5)
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 5)
  }

  // snap to nearest item (used on resize to avoid partial items)
  const snapToNearest = () => {
    const el = containerRef.current
    if (!el) return
    const step = getScrollStep()
    if (!step) return
    const idx = Math.round(el.scrollLeft / step)
    const target = Math.min(idx * step, el.scrollWidth - el.clientWidth)
    el.scrollTo({ left: Math.round(target), behavior: 'smooth' })
  }

  useEffect(() => {
    updateButtons()
    const el = containerRef.current
    if (!el) return
    const onScroll = () => updateButtons()
    const onResize = () => {
      // wait a frame for layout to settle then snap
      requestAnimationFrame(() => {
        snapToNearest()
        updateButtons()
      })
    }

    window.addEventListener('resize', onResize)
    el.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('resize', onResize)
      el.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollByIndex = (dir) => {
    const el = containerRef.current
    if (!el) return
    const step = getScrollStep()
    if (!step) return

    const currentIndex = Math.round(el.scrollLeft / step)
    const maxIndex = Math.ceil((el.scrollWidth - el.clientWidth) / step)
    let nextIndex = dir === 'next' ? currentIndex + 1 : currentIndex - 1
    nextIndex = Math.max(0, Math.min(nextIndex, maxIndex))

    const target = Math.min(nextIndex * step, el.scrollWidth - el.clientWidth)
    el.scrollTo({ left: Math.round(target), behavior: 'smooth' })
  }

  const scrollNext = () => scrollByIndex('next')
  const scrollPrev = () => scrollByIndex('prev')

  return (
    <div className="w-[90%] md:w-[94%] mx-auto mt-[80px] ">
      <h1 className="font-garamond italic text-[20px] md:text-[40px] text-center font-[500]">
        Shop by Engagement Ring Style
      </h1>

      <p className="mt-[30px] font-helvetica mx-auto font-medium text-[10px] text-black md:text-[16px] text-center w-[80%] md:w-[67%]">
        Browse our exclusive engagement ring designs by categories and explore a range of timeless or modern styles to pair with your selected lab-grown or earth-mined diamond. Our engagement rings embody over a decade of expertise and uncompromising quality, specific only to Hatton Garden Jewellers & Craftsmen.
      </p>

      <div className="relative mt-[30px]">
        {/* VIEWPORT */}
        <div className="carousel-viewport">
          {/* INNER TRACK */}
          <div
            ref={containerRef}
            className="carousel-inner no-scrollbar"
            aria-label="Engagement ring styles carousel"
          >
            {engagementsData.map((item, idx) => (
              <div key={idx} className="carousel-item">
                <Engagement_C img={item.img} link={item.link} />
              </div>
            ))}
          </div>
        </div>

        {/* Prev button */}
        <button
          onClick={scrollPrev}
          aria-label="Previous"
          className="absolute left-[-10px] md:left-[-25px] top-1/2 -translate-y-1/2 z-50 p-0 m-0 cursor-pointer border-0 bg-transparent"
          style={{ WebkitTapHighlightColor: 'transparent' }}
          disabled={!canScrollPrev}
        >
          <img src={leftIconSrc} alt="Previous" width={15} height={10} />
        </button>

        {/* Next button */}
        <button
          onClick={scrollNext}
          aria-label="Next"
          className="absolute right-[-10px] md:right-[-25px] border border-black top-1/2 -translate-y-1/2 z-50 p-0 m-0 cursor-pointer border-0 bg-transparent"
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
