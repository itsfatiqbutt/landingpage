// Curated.jsx
import React from "react";
import Curated_C from "./Curated_C";
import { curatedData } from "../data/curatedData";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Curated = () => {
  return (
    <>
      {/* use padding instead of huge min-heights so section does not force big cards */}
      <div className="w-full flex flex-col md:flex-row items-stretch justify-center mt-[80px] md:mt-[100px] gap-6">

        {/* Carousel Column */}
        <div className="order-2 md:order-1 w-full md:w-[78%]">
          <Carousel className="w-full px-6 md:px-12">
            <CarouselContent className="gap-4">
              {curatedData.map((item, idx) => (
                // allow item height to be determined by card
                <CarouselItem key={idx} className="basis-1/2 lg:basis-1/4 h-auto flex items-start">
                  <div className="w-full flex items-start justify-center py-2">
                    <Curated_C img={item.img} name={item.name} price={item.price} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute !z-20 !opacity-0 left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md" />
            <CarouselNext className="absolute !z-20 !opacity-0 right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md" />

            <Image
              src="/images/cr-left.svg"
              width={47}
              height={21}
              alt="Previous"
              className="absolute z-10 left-4 top-1/2 -translate-y-1/2 pointer-events-none w-[17px] h-[9px] md:w-[47px] md:h-[21px]"
            />
            <Image
              src="/images/cr-right.svg"
              width={47}
              height={21}
              alt="Next"
              className="absolute z-10 right-4 top-1/2 -translate-y-1/2 pointer-events-none w-[17px] h-[9px] md:w-[47px] md:h-[21px]"
            />
          </Carousel>
        </div>

        {/* Text Column */}
        <div className="order-1 md:order-2 w-full md:w-[21%] flex flex-col justify-center gap-5 pr-4">
          <p className="font-hiragino mx-auto w-[80%] md:w-full md:text-[18px] text-[12px] text-black font-[600] text-center md:text-left">
            CURATED COLLECTION
          </p>
          <p className="mx-auto w-[80%] md:w-full text-[24px] md:text-[32px] text-black font-garamond font-[400] text-center md:text-left italic">
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

      {/* Mobile Button */}
      <div className="flex justify-center mt-4 md:hidden">
        <button className="w-[70%] h-[57px] border flex items-center justify-center text-[11px] text-black">
          SHOP DIAMOND ENGAGEMENT RINGS
        </button>
      </div>
    </>
  );
};

export default Curated;
