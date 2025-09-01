import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Accordians = () => {
  return (
    <>
      <p className=" md:w-full flex items-center justify-center text-[24px] bg-[#A08579] md:h-[91px] h-[56px] md:text-[32px] text-white font-garamond font-[400] text-center italic">
        Frequently Asked Questions
      </p>


      <div className=' px-4 mt-30 w-full flex flex-col md:flex-row items-start justify-between'>
        <div className='px-2 w-full md:w-[33%] md:border-r '>
          <p className="md:w-full text-[24px] md:text-[32px] text-black font-garamond font-[400] text-center italic">
            Client Care
          </p>
          <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">How long will my order take?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">What type of warranty do I receive?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3 " className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">Do you ship worldwide?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4 " className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">Can I just walk-in? </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5 " className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">How can I get my finger sized?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6 " className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">What aftercare services are available?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
        <div className='w-full md:w-[33%] md:border-r px-2 '>
          <p className="md:w-full text-[24px] md:text-[32px] text-black font-garamond font-[400] text-center italic">
            Diamonds
          </p>

          <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">What is the difference between an earth-mined and a lab-grown diamond?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">What is the price difference between lab-grown and earth-mined diamonds?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3 " className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">Are lab-grown diamonds ethical?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4 " className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">Do lab-grown diamonds come in different colours? </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5 " className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">What is the best certification for lab-grown diamonds?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6 " className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">Should I sacrifice quality for a bigger diamond?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
        <div className='w-full md:w-[33%] px-2 '>
          <p className="md:w-full text-[24px] md:text-[32px] text-black font-garamond font-[400] text-center italic">
            General
          </p>

          <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">Why choose jewellers  in Hatton Garden, London?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">How to choose the best Hatton Garden jewellers?  </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3 " className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">Do you offer payment plans or financing?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4 " className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">Is my delivery secure and insured?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5 " className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">What is your returns policy?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6 " className="border-b border-black">
        <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica ">Does Flawless offer jewellery insurance?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-black md:text-[12px] text-[10px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </AccordionContent>
      </AccordionItem>
    </Accordion>

        </div>

      </div>
    </>
  );
}



export default Accordians;
