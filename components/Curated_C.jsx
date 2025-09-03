// Curated_C.jsx
import React from "react";
import Image from "next/image";

const Curated_C = ({ img, name, price }) => {
  return (
    <div className="w-[169px] md:w-full flex flex-col items-start">
      {/* responsive image box with max height and overflow hidden */}
      <div className="relative w-full h-[220px] md:h-[300px] max-h-[320px] overflow-hidden rounded-sm flex-shrink-0">
        <Image
          src={img}
          alt={name}
          width={320}
          height={451}
          className="w-full h-full object-cover"
          priority={false}
        />
      </div>

      {/* constrained name so it never grows the card height */}
      <p className="mt-3 font-garamond text-[12px] md:text-[16px] font-[400] text-left w-full h-[44px] md:h-[48px] overflow-hidden">
        {name}
      </p>

      {/* small fixed price area */}
      <p className="font-garamond text-[10px] md:text-[14px] font-[600] mt-1 text-left w-full h-[20px] md:h-[22px] overflow-hidden">
        {price}
      </p>
    </div>
  );
};

export default Curated_C;
