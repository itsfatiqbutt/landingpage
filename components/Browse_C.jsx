import React from "react";
import Image from "next/image";

const Browse_C = ({  img, heading, para,noWidth = false }) => {
  return (
    // keep the current classnames exactly, but allow disabling md:w-[33%] when in a carousel
    <div className={`w-full  flex flex-col gap-6`}>


      <div className="w-full h-[358px] md:h-[563px] relative overflow-hidden rounded-sm">
        {/* badge — only render if tag.para exists */}

        {/* main image */}
        <Image src={img} fill className="object-cover z-10" alt={heading} />
      </div>

      <div className="flex items-center gap-2">
        <h2 className="font-hiragino text-[12px] md:text-[18px] text-[#403526]  font-semibold">{heading}</h2>
        <div className="w-[6px] h-[4px] md:w-[11px] md:h-[7px] relative">
        </div>
      </div>

      <p className="font-helvetica font-medium text-[12px] md:text-[16px] [@media(min-width:1900px)]:text-[20px] text-black">
        {para}
      </p>
    </div>
  );
};

export default Browse_C;
