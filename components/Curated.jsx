import React from 'react';
import Curated_C from './Curated_C';
import { curatedData } from '../data/curatedData';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Curated = () => {
  return (
    <>
      {/* use a stable min-height so the section doesn't shrink/grow with slides */}
      <div className="w-full md:min-h-[520px] min-h-[440px] flex flex-col md:flex-row items-stretch justify-center mt-[159px]">

        {/* Carousel Column */}
        <div className="order-2 md:order-1 w-full md:w-[78%] flex-1 h-full relative">
          {/* Carousel must fill the parent height */}
          <Carousel className="w-full h-full px-8 md:px-12 overflow-hidden">
            <CarouselContent>
              {curatedData.map((item, idx) => (
                /* force each item to be full height so they don't change container height */
                <CarouselItem key={idx} className="basis-1/2 lg:basis-1/4 h-full flex items-center">
                  <div className="h-full w-full flex items-start justify-center">
                    <Curated_C img={item.img} name={item.name} price={item.price} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* keep native controls hidden if you prefer */}
            <CarouselPrevious className="absolute !z-20 left-4 !opacity-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md" />
            <CarouselNext className="absolute !z-20 right-4 !opacity-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md" />

            {/* decorative arrows (no layout effect) */}
            <Image
              src="/images/cr-left.svg"
              width={30}
              height={17}
              alt="Previous"
              className="absolute z-10 left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <Image
              src="/images/cr-right.svg"
              width={30}
              height={17}
              alt="Next"
              className="absolute z-10 right-4 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </Carousel>
        </div>

        {/* Text Column */}
        <div className="order-1 md:order-2 w-full md:w-[21%] flex flex-col justify-center  gap-5 pr-4">
          <p className="font-hiragino mx-auto w-[80%] md:w-full md:text-[18px] text-[12px] text-black font-[600] text-center md:text-left">
            CURATED COLLECTION
          </p>
          <p className="mx-auto w-[80%] md:mt-[-10px] md:w-full text-[24px] md:text-[32px] text-black font-garamond font-[400] text-center md:text-left italic">
            Engagement Rings
          </p>
          <p className="mx-auto w-[80%] md:w-full font-helvetica font-[500] text-[14px] md:text-[15px] text-black text-center md:text-left">
            Let us choose you the perfect diamond. All you have to do is select from Ring Designs that have been chosen over and over again as perfect heirlooms. These engagement rings are crafted by hand using sustainable methods and heritage techniques in Hatton Garden. They are made to order and take 6-8 weeks to complete.
          </p>
          <button className="mx-auto w-[70%] hidden md:w-full rounded-[6px] mt-4 h-[57px] border md:flex items-center justify-center md:text-[13px] text-[11px] text-black">
            SHOP DIAMOND ENGAGEMENT RINGS
          </button>
        </div>
      </div>

      {/* Mobile Button — stable (no translate) */}
      <div className="flex justify-center mt-4 md:hidden">
        <button className="w-[70%] h-[57px] border flex items-center justify-center text-[11px] text-black">
          SHOP DIAMOND ENGAGEMENT RINGS
        </button>
      </div>
    </>
  );
};

export default Curated;
