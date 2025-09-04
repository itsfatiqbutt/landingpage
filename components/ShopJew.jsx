import React from 'react';
import ShopJewC from './ShopJewC';
import Image from 'next/image';
import { shopJew } from '../data/shopJew';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const ShopJew = () => {
  return (
  <div className='w-full md:w-[90%] mx-auto mt-[50px] md:mt-[139px]'>
   <h1 className='hidden md:block w-full text-center font-garamond font-[500] italic text-[20px] md:text-[32px] [@media(min-width:1900px)]:text-[40px]  mx-auto'>
   Shop Jewellery
      </h1>
      <h1 className='md:hidden  w-full text-center font-garamond font-[500] italic text-[20px] md:text-[32px] [@media(min-width:1900px)]:text-[40px]  mx-auto'>
      A carefully curated selection of jewellery
      </h1>
      <p className='font-helvetica font-medium text-[10px] md:text-[20px]  text-black w-[80%] md:w-[65%] text-center mx-auto mt-[25px]'>
      Our collection of jewellery features stunning rings,<span className='cursor-pointer text-[#806C63]'>wedding bands</span>,<br className='md:hidden'></br> <span className='cursor-pointer text-[#806C63]'>pendants</span>, <span className='cursor-pointer text-[#806C63]'>bracelets</span> and more, all crafted<br className='md:hidden'></br>
with the finest diamonds and heritage techniques.
      </p>

    <div className='w-full mx-auto mt-[45px] md:mt-[40px]'>
      <Carousel className="w-full px-8 md:px-0" opts={{ align: "start", slidesToScroll: 1 }}>
        <CarouselContent>
          {
            shopJew.map((item,idx) =>
            {
              return (
                <CarouselItem key={idx} className="basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <ShopJewC key={`1${idx}`} img={item.img} link={item.link}></ShopJewC>
                </CarouselItem>
              )
            })
          }


        </CarouselContent>
        <CarouselPrevious className="absolute !z-20 left-0   md:left-[-50px] !opacity-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        </CarouselPrevious>

        {/* Custom Next Arrow */}
        <CarouselNext className="absolute !z-20  right-0 !opacity-0  md:right-[-50px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        </CarouselNext>
        <Image src="/images/cr-left.svg" width={30} height={17} alt="img" className="w-[17px] h-[20px] md:w-[47px] md:h-[35px] absolute z-10 left-0 md:left-[-50px]
           top-1/2 -translate-y-1/2"></Image>
        <Image src="/images/cr-right.svg" width={30} height={17} alt="img" className="w-[17px] h-[20px] md:w-[47px] md:h-[35px] absolute z-10 right-0 md:right-[-50px] top-1/2 -translate-y-1/2"></Image>
      </Carousel>
    </div>
  </div>
  );
}



export default ShopJew;
