import React from 'react';
import Image from 'next/image';

const DesignYO = () => {
  return (
    <div className="w-full md:w-[90%] m-auto h-auto md:h-[828px] flex flex-col md:flex-row items-stretch justify-center gap-1 md:gap-8 py-8">
      {/* Image column */}
      <div className="md:w-1/2 w-full relative md:h-full h-[157px] ">

        <div className='bg-[#806C63] flex items-center justify-center absolute z-10 h-[38px] w-full md:hidden font-[500] text-[12px] text-white  '>
        Do you have something special in mind?
        </div>
        <Image
          src="/images/yo.png"
          alt="Design your own ring"
          fill
          className="object-cover -z-10"
          priority
        />
      </div>

      {/* Text column: everything centered except the UL which is self-start (left) */}
      <div className="md:w-1/2 w-full px-6 md:px-12 flex flex-col items-center justify-center gap-6">
        <h1 className="font-garamond text-black font-[500] italic text-[24px] md:text-[32px] w-full text-center">
          Design Your Own Bespoke Ring.
        </h1>

        <p className="font-[600] text-[12px] md:text-[16px] text-black w-full text-center">
          Go on a journey to design your ring from scratch, with one of our expert
          jewellers in Hatton Garden, London.
        </p>

        {/* UL stays left-aligned inside the centered column */}
        <ul className="self-start list-disc ml-6 space-y-4 max-w-xl">
          <li className="font-helvetica text-[12px] md:text-[20px] text-black">
            A tailored experience in our calm and inviting location in Hatton Garden.
          </li>
          <li className="font-helvetica text-[12px] md:text-[20px] text-black">
            Guidance in designing your very own custom ring design or piece of jewellery.
          </li>
          <li className="font-helvetica text-[12px] md:text-[20px] text-black">
            A glimpse into our exquisite range of ring designs to go pair with your preferred
          </li>
          <li className="font-helvetica text-[12px] md:text-[20px] text-black">
            Education on diamond or gemstone quality, size, certification and prices.
          </li>
          <li className="font-helvetica text-[12px] md:text-[20px] text-black">
            A showcase of unique lab-grown or earth-mined diamonds and coloured
          </li>
          <li className="font-helvetica text-[12px] md:text-[20px] text-black">
            Discussing time frames, delivery options, payment options and aftercare services
          </li>
        </ul>

        {/* Centered CTA */}
        <button className="w-[80%] md:w-[60%] rounded-md bg-[#EDE7E5] text-[10px] md:text-[12px] text-black h-[42px] md:h-[68px] flex items-center justify-center">
          BOOK A COMPLIMENTARY CONSULTATION
        </button>

        {/* Rating row (centered) */}
        <div className="flex items-center justify-center gap-3">
          <p className="text-[11px] md:text-[15px] text-black/80">5.0</p>
          <span className="text-[11px] md:text-[15px] text-yellow-400">★★★★★</span>
          <p className="text-[11px] md:text-[15px] text-blue-600">1,171 Google Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default DesignYO;
