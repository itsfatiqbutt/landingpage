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

function chunk(arr, size) {
  const out = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

export default function Icons() {
  const rows = chunk(ICONS, 3)

  return (
    <div className="w-full mt-20 px-4">
      {/* MOBILE: 3 rows (3,3,2) */}
      <div className="block md:hidden">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex w-full justify-center  items-start gap-6 mb-4">
            {row.map((item) => (
              <div key={item.src} className="w-1/3 sm:w-1/4 flex-shrink-0 px-2">
                <div className="flex flex-col items-center justify-start min-h-[110px]">
                  <div className="flex items-center justify-center  h-[58px]">
                    <Image src={item.src} width={55} height={58} alt={item.alt} />
                  </div>
                  <p className="mt-2 text-center text-sm md:text-[12px] font-helvetica font-[400] leading-tight whitespace-normal break-words">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* DESKTOP: single non-wrapping row with all icons */}
      <div className="hidden md:flex w-full justify-center ">
        <div className="flex items-start gap-6 2xl:gap-20 flex-nowrap">
          {ICONS.map((item) => (
            <div
              key={item.src}
              className="flex-shrink-0 px-3 min-w-[140px] flex justify-center"
            >
              <div className="flex flex-col items-center justify-start min-h-[110px]">
                <div className="flex items-center justify-center h-[58px]">
                  <Image src={item.src} width={55} height={58} alt={item.alt} />
                </div>
                <p className="mt-2 text-center text-sm md:text-[12px] font-helvetica font-[400] leading-tight whitespace-normal break-words">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
