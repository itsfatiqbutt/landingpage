import React from 'react';
import WhatsNew_C from './WhatsNew_C';
import { whatsnew } from '../data/whatsNew';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const WhatsNew = () => {
  return (
    <>
      {/* Section: md = horizontal, mobile = stacked */}
      <div className="w-full md:h-auto py-20 h-[600px] flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center mt-[70px] md:mt-[172px] gap-6 bg-[#EDE7E5]">
        {/* changed items-stretch -> items-center */}

        {/* Text Column */}
        <div className="order-1 md:order-1 w-full md:w-[27%] flex flex-col items-center md:items-start justify-center h-full pl-6 md:pl-[64px]">
          <p className="w-[80%] md:w-full md:text-[18px] text-[14px] text-black font-[600] text-center md:text-left">
            SHOP
          </p>

          <p className="w-[80%] mt-[10px] md:w-full text-[24px] md:text-[32px] text-black font-garamond font-[400] text-center md:text-left italic">
            What’s New & Trending?
          </p>

          <p className="mt-[39px] w-[80%] md:w-full font-helvetica font-[500] text-[14px] md:text-[15px] text-black text-center md:text-left">
            A space to find the latest designs, encounter the most loved diamond rings and browse enchanting coloured gemstone collections.
          </p>

          {/* Desktop CTA (hidden on small screens) */}
          <button className="hidden md:flex w-full md:w-[90%] bg-[#998176] md:mt-[70px] h-[57px] border items-center justify-center md:text-[13px] text-[11px] rounded-[6px] text-white">
            BOOK A CONSULTATION
          </button>
        </div>

        {/* Carousel Column */}
        <div className="order-2 md:order-2 w-full md:w-[73%] flex-1 h-full relative flex items-center justify-center">
          <Carousel className="w-full h-full px-4 md:px-12 overflow-hidden">
            <CarouselContent>
              {whatsnew.map((item, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-1/2 lg:basis-1/4 h-full flex items-center justify-center"
                >
                  <div className="h-full w-full flex items-center justify-center">
                    <WhatsNew_C img={item.img} name={item.name} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute !z-20 left-4 !opacity-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md" />
            <CarouselNext className="absolute !z-20 right-4 !opacity-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md" />

            <Image
              src="/images/cr-left.svg"
              width={15}
              height={10}
              alt="Previous"
              className="absolute z-10 left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <Image
              src="/images/cr-right.svg"
              width={15}
              height={10}
              alt="Next"
              className="absolute z-10 right-4 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </Carousel>
        </div>
      </div>

      {/* Mobile Button — centered and stable below the section */}
      <div className="flex justify-center mt-4 md:hidden bg-[#EDE7E5] mt-[-20px] ">
        <button className="w-[60%] h-[50px] bg-[#998176] rounded-[6px] border flex items-center justify-center text-[11px] text-white">
          BOOK A CONSULTATION
        </button>
      </div>
    </>
  );
};

export default WhatsNew;
