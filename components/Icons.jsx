import Image from 'next/image'
import React from 'react'

const ICONS = [
  { src: '/images/icon1.svg', alt: '30 Day Returns', label: '30 Day Returns' },
  { src: '/images/icon3.svg', alt: 'Free UK Delivery', label: 'Free UK Delivery' },
  { src: '/images/icon2.svg', alt: 'Sustainable & Responsible', label: `Sustainable & Responsible` },
  { src: '/images/icon4.svg', alt: 'GIA & IGI Certified Stones', label: 'GIA & IGI Certified Stones' },
  { src: '/images/icon4_4.svg', alt: 'Lifetime Guarantee', label: 'Lifetime Guarantee' },
  { src: '/images/icon5.svg', alt: 'Free Ring Resizing', label: 'Free Ring Resizing' },
  { src: '/images/icon6.svg', alt: 'Aftercare', label: 'Aftercare' },
  { src: '/images/icon7.svg', alt: 'London Heritage Craftspeople', label: 'London Heritage Craftspeople' },
]

export default function Icons() {
  return (
    <div className="w-full mt-20 md:mt-[98px] px-4">
      <div
        className="
          flex flex-wrap items-start
          justify-center md:justify-between
          gap-2 md:gap-6
        "
      >
        {ICONS.map((item) => (
          <div
            key={item.src}
            className="
              flex flex-col items-center text-center
              min-w-[110px] max-w-[120px] md:min-w-[120px] md:max-w-[160px] flex-1 px-2
            "
          >
            <div className="h-[58px] flex items-center justify-center">
              <Image src={item.src} width={55} height={58} alt={item.alt} />
            </div>
            <p className="mt-2 text-sm md:text-[12px] font-helvetica font-[400] leading-tight">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
