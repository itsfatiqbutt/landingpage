import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const WhatIs = () => {
  return (
  <div className='w-full flex md:py-20 flex-col md:flex-row items-center justify-around bg-[#EDE7E5] mt-[80px]'>
        <div className='w-full md:w-[45%] flex flex-col items-center justify-center gap-10'>
            <h1 className=' w-full bg-[#806C63] md:bg-transparent text-center font-garamond italic font-[500] text-[20px] md:text-[40px] text-white md:text-[#806C63]'>
            What is Bespoke Diamond Jewellery
            </h1>
            <p className='font-helvetia font-medium text-[10px] md:text-[20px] text-center text-[#806C63]'>
            The term ‘ bespoke’ refers to jewellery designed and crafted from scratch. From necklaces to bracelets, engagement rings to anniversary gifts, milestone birthdays and more, we offer an intimate and personalised service, available both virtually or in person. Our team of jewellers in Hatton Garden, London are experts at working with customers all over the world to bring their bespoke visions to life.
            </p>
            <button className='hidden mx-auto w-[50%] rounded-[6px] md:h-[48px] bg-[#806C63] text-white text-[10px] md:text-[15px] md:flex items-center justify-center font-[300]'>
            BOOK A FREE CONSULTATION
            </button>
        </div>

        <div className='mx-auto w-[90%] md:w-[45%] mt-4 md:mt-0 '>
        <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="border-b border-black">
        <AccordionTrigger className="text-[#806C63] text-[12px] md:text-[24px] font-medium font-helvetica ">MADE IN HATTON GARDEN, LONDON</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[#806C63] md:text-[20px] text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b border-black">
        <AccordionTrigger className="text-[#806C63] text-[12px] md:text-[24px] font-medium font-helvetica ">PERSONALISATION MADE EASY</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[#806C63] md:text-[20px] text-[10px]">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3 " className="border-b border-black">
        <AccordionTrigger className="text-[#806C63] text-[12px] md:text-[24px] font-medium font-helvetica ">SUSTAINABLE & CONFLICT-FREE DIAMONDS</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[#806C63] md:text-[20px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4 " className="border-b border-black">
        <AccordionTrigger className="text-[#806C63] text-[12px] md:text-[24px] font-medium font-helvetica ">BESPOKE JEWELLERY PROCESS  </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[#806C63] md:text-[20px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5 " className="border-b border-black">
        <AccordionTrigger className="text-[#806C63] text-[12px] md:text-[24px] font-medium font-helvetica ">YOUR VISION BROUGHT TO LIFE</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[#806C63] md:text-[20px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6 " className="border-b border-black">
        <AccordionTrigger className="text-[#806C63] text-[12px] md:text-[24px] font-medium font-helvetica ">WARRANTY & AFTER CARE</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[#806C63] md:text-[20px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>

        <button className='md:hidden mx-auto w-[70%] rounded-[2px] h-[38px] mt-[10px] md:h-[48px] bg-[#806C63] text-white text-[10px] md:text-[15px] md:flex items-center justify-center font-[300]'>
            BOOK A FREE CONSULTATION
            </button>
  </div>
  )
}




export default WhatIs;
