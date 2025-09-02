import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Diamond_C = ({ img, link }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {/* Image wrapper */}
      <div className="relative flex items-center justify-center">
        <Image
          src={img}
          alt={link || 'diamond'}
          width={155}
          height={155}
          className="object-contain w-[55px] h-[55px] md:w-[155px] md:h-[155px]"
          priority={false}
        />
      </div>

      {/* Heading */}
      <Link
        href="#"
        className="font-hiragino font-[600] text-[10px] md:text-[18px] text-black text-center"
      >
        {link}
      </Link>
    </div>
  )
}

export default Diamond_C
