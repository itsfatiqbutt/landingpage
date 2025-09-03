"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordians = () => {
  return (
    <div className="mt-[44px]">
      <p className="md:w-full flex items-center justify-center text-[24px] bg-[#A08579] md:h-[91px] h-[56px] md:text-[32px] [@media(min-width:1900px)]:text-[40px] text-white font-garamond font-[400] text-center italic">
        Frequently Asked Questions
      </p>

      <div className="px-4 mt-10 w-full flex flex-col md:flex-row items-start justify-between">
        <div className="px-2 w-full md:w-[33%] md:border-r">
          <p className="mb-12 md:w-full text-[24px] md:text-[30px] [@media(min-width:1900px)]:text-[38px] text-black font-garamond font-[400] text-center italic">
            Client Care
          </p>

          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            <AccordionItem value="item-1" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica acc-trigger">
                {/* NEW fixed-size arrow (24x14) on left */}
                <img
                  src="/images/accArr.svg"
                  alt=""
                  aria-hidden
                  className="acc-trigger-icon w-[24px] h-[14px]"
                  width={24}
                  height={14}
                />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-[16px] text-[10px] w-full text-[10px] md:text-[12px]">How long will my order take?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica acc-trigger">
                <img
                  src="/images/accArr.svg"
                  alt=""
                  aria-hidden
                  className="acc-trigger-icon w-[24px] h-[14px]"
                  width={24}
                  height={14}
                />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-[16px] text-[10px] w-full text-[10px] md:text-[12px]">What type of warranty do I receive?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica acc-trigger">
                <img
                  src="/images/accArr.svg"
                  alt=""
                  aria-hidden
                  className="acc-trigger-icon w-[24px] h-[14px] "
                  width={24}
                  height={14}
                />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-[16px] text-[10px] w-full text-[10px] md:text-[12px]">Do you ship worldwide?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica acc-trigger">
                <img
                  src="/images/accArr.svg"
                  alt=""
                  aria-hidden
                  className="acc-trigger-icon w-[24px] h-[14px]"
                  width={24}
                  height={14}
                />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-[16px] text-[10px] w-full text-[10px] md:text-[12px]">Can I just walk-in?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica acc-trigger">
                <img
                  src="/images/accArr.svg"
                  alt=""
                  aria-hidden
                  className="acc-trigger-icon w-[24px] h-[14px]"
                  width={24}
                  height={14}
                />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-[16px] text-[10px] w-full text-[10px] md:text-[12px]">How can I get my finger sized?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica acc-trigger">
                <img
                  src="/images/accArr.svg"
                  alt=""
                  aria-hidden
                  className="acc-trigger-icon w-[24px] h-[14px]"
                  width={24}
                  height={14}
                />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-[16px] text-[10px] w-full text-[10px] md:text-[12px]">What aftercare services are available?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* ------------------- Diamonds column ------------------- */}
        <div className="w-full md:w-[33%] md:border-r px-2">
          <p className="mb-12 md:w-full text-[24px] [@media(min-width:1900px)]:text-[38px] md:text-[30px] text-black font-garamond font-[400] text-center italic">
            Diamonds
          </p>

          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            <AccordionItem value="item-1" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="text-black text-[10px] md:text-[16px] font-medium font-helvetica acc-trigger">
                <img
                  src="/images/accArr.svg"
                  alt=""
                  aria-hidden
                  className="acc-trigger-icon w-[24px] h-[14px] "
                  width={24}
                  height={14}
                />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-[16px] text-[10px] w-full text-[10px] md:text-[12px]">
                  What is the difference between an earth-mined and a lab-grown diamond?
                </span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* ... rest of Diamond items (use same pattern) */}
            <AccordionItem value="item-2" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="acc-trigger text-black text-[10px] md:text-[16px] font-medium font-helvetica">
                <img src="/images/accArr.svg" alt="" aria-hidden className="acc-trigger-icon w-[24px] h-[14px]" width={24} height={14} />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-168px text-[10px]] w-full text-[10px] md:text-[12px]">What is the price difference between lab-grown and earth-mined diamonds?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">Lorem ipsum dolor sit amet...</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="acc-trigger text-black text-[10px] md:text-[16px] font-medium font-helvetica">
                <img src="/images/accArr.svg" alt="" aria-hidden className="acc-trigger-icon w-[24px] h-[14px]" width={24} height={14} />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-168px text-[10px]] w-full text-[10px] md:text-[12px]">Are lab-grown diamonds ethical?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">Lorem ipsum dolor sit amet...</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="acc-trigger text-black text-[10px] md:text-[16px] font-medium font-helvetica">
                <img src="/images/accArr.svg" alt="" aria-hidden className="acc-trigger-icon w-[24px] h-[14px]" width={24} height={14} />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-168px text-[10px]] w-full text-[10px] md:text-[12px]">Do lab-grown diamonds come in different colours?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">Lorem ipsum dolor sit amet...</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="acc-trigger text-black text-[10px] md:text-[16px] font-medium font-helvetica">
                <img src="/images/accArr.svg" alt="" aria-hidden className="acc-trigger-icon w-[24px] h-[14px]" width={24} height={14} />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-168px text-[10px]] w-full text-[10px] md:text-[12px]">What is the best certification for lab-grown diamonds?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">Lorem ipsum dolor sit amet...</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="acc-trigger text-black text-[10px] md:text-[16px] font-medium font-helvetica">
                <img src="/images/accArr.svg" alt="" aria-hidden className="acc-trigger-icon w-[24px] h-[14px] " width={24} height={14} />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-168px text-[10px]] w-full text-[10px] md:text-[12px]">Should I sacrifice quality for a bigger diamond?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">Lorem ipsum dolor sit amet...</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* ------------------- General column ------------------- */}
        <div className="w-full md:w-[33%] px-2">
          <p className="mb-12 md:w-full text-[24px] [@media(min-width:1900px)]:text-[38px] md:text-[30px] text-black font-garamond font-[400] text-center italic">
            General
          </p>

          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            <AccordionItem value="item-1" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="acc-trigger text-black text-[10px] md:text-[16px] font-medium font-helvetica">
                <img src="/images/accArr.svg" alt="" aria-hidden className="acc-trigger-icon w-[24px] h-[14px] " width={24} height={14} />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-168px text-[10px]] w-full text-[10px] md:text-[12px]">Why choose jewellers in Hatton Garden, London?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">Lorem ipsum dolor sit amet...</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="acc-trigger text-black text-[10px] md:text-[16px] font-medium font-helvetica">
                <img src="/images/accArr.svg" alt="" aria-hidden className="acc-trigger-icon w-[24px] h-[14px] " width={24} height={14} />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-168px text-[10px]] w-full text-[10px] md:text-[12px]">How to choose the best Hatton Garden jewellers?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">Lorem ipsum dolor sit amet...</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="acc-trigger text-black text-[10px] md:text-[16px] font-medium font-helvetica">
                <img src="/images/accArr.svg" alt="" aria-hidden className="acc-trigger-icon w-[24px] h-[14px] " width={24} height={14} />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-168px text-[10px]] w-full text-[10px] md:text-[12px]">Do you offer payment plans or financing?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">Lorem ipsum dolor sit amet...</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="acc-trigger text-black text-[10px] md:text-[16px] font-medium font-helvetica">
                <img src="/images/accArr.svg" alt="" aria-hidden className="acc-trigger-icon w-[24px] h-[14px]" width={24} height={14} />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-168px text-[10px]] w-full text-[10px] md:text-[12px]">Is my delivery secure and insured?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">Lorem ipsum dolor sit amet...</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="acc-trigger text-black text-[10px] md:text-[16px] font-medium font-helvetica">
                <img src="/images/accArr.svg" alt="" aria-hidden className="acc-trigger-icon w-[24px] h-[14px]" width={24} height={14} />
                <span className="font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-168px text-[10px]] w-full text-[10px] md:text-[12px]">What is your returns policy?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">Lorem ipsum dolor sit amet...</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-[#A39186] accordion-item">
              <AccordionTrigger className="acc-trigger text-black text-[10px] md:text-[16px] font-medium font-helvetica">
                <img src="/images/accArr.svg" alt="" aria-hidden className="acc-trigger-icon w-[24px] h-[14px] " width={24} height={14} />
                <span className= "font-helvetica md:text-[12px] [@media(min-width:1900px)]:text-168px text-[10px]]w-full text-[10px] md:text-[12px]">Does Flawless offer jewellery insurance?</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-black md:text-[12px] text-[10px]">Lorem ipsum dolor sit amet...</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* hide any default svg chevrons injected by the accordion lib & rotate our img when open */}

    </div>
  );
};

export default Accordians;
