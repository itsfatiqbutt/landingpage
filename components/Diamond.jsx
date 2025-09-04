import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { diamondsData } from '../data/diamondsData';
import Diamond_C from './Diamond_C';
const Diamond = () => {
  return (
    <div className='w-full mt-[50px] md:mt-[143px]'>
      <h1 className='w-full text-center font-garamond font-[500] italic text-[20px] md:text-[32px] [@media(min-width:1900px)]:text-[40px] mx-auto'>
        Shop by Diamond Shape
      </h1>

      <div className='w-full  mx-auto flex items-center justify-center mt-[10px] md:mt-[63px]'>
        <Carousel className="w-full px-12" opts={{ align: "start", slidesToScroll: 1 }}>
          <CarouselContent>
            {diamondsData.map((item, index) => (
              <CarouselItem
                key={item.id || index} // best to use a unique id if available
                className="basis-1/5 md:basis-1/8 lg:basis-1/10"
              >
                <Diamond_C img={item.img} link={item.link} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute !z-20 !opacity-0 left-[6px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          </CarouselPrevious>

          {/* Custom Next Arrow */}
          <CarouselNext className="absolute !z-20 !opacity-0  right-[6px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          </CarouselNext>
          <Image src="/images/cr-left.svg" width={30} height={38} alt="img" className="absolute z-10 left-[10px] top-1/2 -translate-y-1/2 w-[17px] h-[9px] md:w-[43px] md:h-[35px]"></Image>
          <Image src="/images/cr-right.svg" width={30} height={17} alt="img" className="absolute z-10 right-[10px] top-1/2 -translate-y-1/2 w-[17px] h-[9px] md:w-[43px] md:h-[35px]"></Image>
        </Carousel>
      </div>
    </div>

  );
}



export default Diamond;
