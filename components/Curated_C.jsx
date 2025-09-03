import React from 'react';
import Image from 'next/image';

const Curated_C = ({ img, name, price }) => {
  return (
    <div className="h-[451px] w-[169px] md:w-full flex flex-col items-center">
      {/* fixed image area to reserve space and avoid layout shifts */}
      <div className="relative w-full h-[320px] md:h-[420px] aspect-[320/451] flex-shrink-0">
      <Image
        src={img}
        alt={name}
        width={320}
        height={451}
        className="w-full h-auto object-contain"
      />
      </div>

      {/* name area: constrained height so long titles don't change item height */}
      <p className="mt-3 font-garamond text-[12px] md:text-[18px] font-[400] text-left w-full h-[44px] md:h-[56px] overflow-hidden">
        {name}
      </p>

      {/* price area: small, fixed height */}
      <p className="font-garamond text-[10px] md:text-[14px] font-[600] md:mt-[-26px] text-left w-full h-[20px] md:h-[22px] overflow-hidden">
        {price}
      </p>
    </div>
  );
};

export default Curated_C;
