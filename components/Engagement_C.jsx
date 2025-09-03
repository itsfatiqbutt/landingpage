import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Responsive card that stretches to its parent width.
// Accepts `img` and `link` props so parent can control content.
// Uses a padding-bottom trick to maintain ~329x482 aspect ratio (≈1.465).

const Engagement_C = ({ img, link }) => {
  return (
    <div className="w-[159px] md:w-full flex flex-col gap-2 md:gap-[55px]">
      {/* Aspect box */}
      <div className="relative w-full pb-[146.5%] overflow-hidden">
        <Image
          src={img}
          alt={link || 'engagement'}
          fill
          className="object-cover"
          sizes="(min-width:1280px) 20vw, (min-width:768px) 33vw, 50vw"
          priority={false}
        />
      </div>

      <Link href="#" className="font-[600] font-hiragino w-full md:mt-[-30px] text-[10px] md:text-[20px] text-black text-center">
        {link}
      </Link>
    </div>
  )
}

export default Engagement_C
