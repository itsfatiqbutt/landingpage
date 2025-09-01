"use client"

import React, { useRef } from "react"
import Important_C from "./Important_C"
import { browseData } from "../data/brosweData"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  /* NOTE: we intentionally DO NOT use CarouselNext/CarouselPrevious here so we can provide
     our own minimal, always-working buttons. */
} from "@/components/ui/carousel"

// Minimal custom arrows that do not rely on the carousel's built-in controls.
// They find the first scrollable element inside the Carousel and scroll it by one page.
// Put your SVGs into `public/images/cr-left.svg` and `public/images/cr-right.svg`.

const Browse = () => {
   // convert object to array
  const carouselRef = useRef(null)

  const leftIconSrc = "/images/cr-left.svg"
  const rightIconSrc = "/images/cr-right.svg"

  // Find the first element inside carouselRef that can be horizontally scrolled.
  const getScrollable = () => {
    if (!carouselRef.current) return null
    const nodes = carouselRef.current.querySelectorAll("*")
    for (const n of nodes) {
      if (n.scrollWidth && n.clientWidth && n.scrollWidth > n.clientWidth + 1) {
        return n
      }
    }
    return null
  }

  const scrollNext = () => {
    const el = getScrollable()
    if (!el) return
    el.scrollBy({ left: el.clientWidth, behavior: "smooth" })
  }

  const scrollPrev = () => {
    const el = getScrollable()
    if (!el) return
    el.scrollBy({ left: -el.clientWidth, behavior: "smooth" })
  }

  return (
    <div className="w-[95%] mx-auto mt-[50px]">
      <h1 className="w-auto text-center mx-auto font-garamond font-[400] text-[#403526] md:text-[32px] text-[18px]">
      Browse our Expert Diamond & Jewellery Guides
      </h1>
      <p className="font-helvetica font-medium text-[10px] w-[90%] text-center md:w-[60%] mx-auto md:text-[20px] text-black "></p>

      <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between mt-[15px] md:mt-[70px] gap-8">
        <div className="relative w-full" ref={carouselRef}>
          <Carousel className="w-full px-3">
            <CarouselContent>
              {browseData.map((card, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-1/1 md:basis-1/2 xl:basis-1/3"
                >
                  <Important_C

                    img={card.img}
                    h2={card.h2}
                    para={card.para}

                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>


          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="xl:hidden absolute left-[0px] top-1/2 -translate-y-1/2 z-50 p-0 m-0 cursor-pointer border-0 bg-transparent"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <img src={leftIconSrc} alt="Previous" width={15} height={10} />
          </button>

          {/* Custom Next Button (no bg, no hover, just pointer) */}
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="xl:hidden absolute right-[0px] top-1/2 -translate-y-1/2 z-50 p-0 m-0 cursor-pointer border-0 bg-transparent"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <img src={rightIconSrc} alt="Next" width={15} height={10} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Browse
