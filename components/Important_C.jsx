import React from "react";
import Image from "next/image";

const Important_C = ({ heading, img, h2, para, tag, noWidth = false }) => {
  return (
    // keep the current classnames exactly, but allow disabling md:w-[33%] when in a carousel
    <div className={`w-full  flex flex-col gap-6`}>
      <h1 className="w-full text-center font-garamond italic font-[500] md:text-[32px] text-[20px] text-[#403526]">
        {heading}
      </h1>

      <div className="w-full h-[358px] md:h-[563px] relative overflow-hidden rounded-sm">
        {/* badge — only render if tag.para exists */}
        {tag?.para && (
          <div className="absolute top-4 left-4 z-20 bg-[#998176] rounded-[3px] text-white px-4 py-3 text-[11px] md:text-[16px] flex items-center justify-center gap-2 px-3">
            <span className="whitespace-nowrap font-hiragino">{tag.para}</span>
            {tag?.icon ? (
              <div className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] relative">
                <Image src={tag.icon} alt={`${tag.para} icon`} fill className="object-contain" />
              </div>
            ) : null}
          </div>
        )}

        {/* main image */}
        <Image src={img} fill className="object-cover z-10" alt={heading} />
      </div>

      <div className="flex items-center gap-2">
        <h2 className="font-hiragino text-[12px] md:text-[18px] text-[#403526] font-semibold">{h2}</h2>
        <div className="w-[6px] h-[4px] md:w-[20px] md:h-[14px] relative">
          <Image src="/images/arr-left.svg" fill alt="arrow" className="object-contain" />
        </div>
      </div>

      <p className="font-helvetica font-medium text-[12px] md:text-[18px] text-black">
        {para}
      </p>
    </div>
  );
};

export default Important_C;
