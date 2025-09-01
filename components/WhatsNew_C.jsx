// WhatsNew_C.jsx
import React from 'react';
import Image from 'next/image';

const WhatsNew_C = ({ img, name }) => {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Fixed image area so every card reserves the same height.
          Adjust the h-[...] values to match the carousel/section height you want. */}
      <div className="relative w-full h-[320px] md:h-[440px] flex-shrink-0">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover"
          priority={false} /* set true for the first few slides if they're above the fold */
        />
      </div>

      {/* Text area with a fixed-ish height so long names don't change card height */}
      <p className="mt-4 font-garamond text-[12px] md:text-[20px] font-[400] text-left w-full h-[48px] md:h-[64px] overflow-hidden">
        {name}
      </p>
    </div>
  );
};

export default WhatsNew_C;
