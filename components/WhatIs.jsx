"use client"
import React, { useState, useRef, useId, useEffect } from "react";

const ACCORDION_DATA = [
  { title: "MADE IN HATTON GARDEN, LONDON", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "PERSONALISATION MADE EASY", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "SUSTAINABLE & CONFLICT-FREE DIAMONDS", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "BESPOKE JEWELLERY PROCESS", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "YOUR VISION BROUGHT TO LIFE", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "WARRANTY & AFTER CARE", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

export default function WhatIs() {
  // single-open behaviour (0 open by default)
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (index) => setOpenIndex(prev => (prev === index ? -1 : index));

  return (
    <div className="pt-0 pb-10 w-full flex md:py-20 flex-col md:flex-row items-center justify-around bg-[#EDE7E5] mt-[169px]">
      <div className="w-full md:w-[45%] flex flex-col items-center justify-center gap-10">
        <h1 className=" w-full bg-[#806C63] md:bg-transparent text-center font-garamond italic font-[500] text-[20px] md:text-[40px] text-white md:text-[#806C63]">
          What is Bespoke Diamond Jewellery
        </h1>
        <p className="px-10 md:px-22 font-helvetica font-medium text-[10px] md:text-[20px] text-center text-[#806C63]">
          The term ‘ bespoke’ refers to jewellery designed and crafted from scratch. From necklaces to
          bracelets, engagement rings to anniversary gifts, milestone birthdays and more, we offer an
          intimate and personalised service, available both virtually or in person. Our team of jewellers
          in Hatton Garden, London are experts at working with customers all over the world to bring their
          bespoke visions to life.
        </p>
        <button className="mt-[50px] font-hiragino hidden mx-auto w-[50%] rounded-[6px] md:h-[48px] bg-[#806C63] text-white text-[10px] md:text-[15px] md:flex items-center justify-center font-[300]">
          BOOK A FREE CONSULTATION
        </button>
      </div>

      <div className="mx-auto w-[90%] md:w-[45%] mt-4 md:mt-0">
        <div className="w-full">
          {ACCORDION_DATA.map((item, idx) => (
            <AccordionItem
              key={idx}
              index={idx}
              title={item.title}
              content={item.content}
              isOpen={openIndex === idx}
              onToggle={() => toggle(idx)}
            />
          ))}
        </div>
      </div>

      <button className="hiragino md:hidden mx-auto w-[70%] rounded-[2px] h-[38px] mt-[10px] md:h-[48px] bg-[#806C63] text-white text-[10px] md:text-[15px] md:flex items-center justify-center font-[300]">
        BOOK A FREE CONSULTATION
      </button>
    </div>
  );
}

function AccordionItem({ index, title, content, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const idBase = useId();
  const buttonId = `${idBase}-button-${index}`;
  const regionId = `${idBase}-region-${index}`;
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) setMaxHeight(`${contentRef.current.scrollHeight}px`);
      else setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b border-black">
      <h3>
        <button
          id={buttonId}
          aria-controls={regionId}
          aria-expanded={isOpen}
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 py-4 md:py-6 focus:outline-none"
        >
          <span className="text-[#806C63] text-[12px] md:text-[24px] font-medium font-helvetica text-left">
            {title}
          </span>

          {/* Use your arrow file at /image/accArr.svg.
              Arrow points DOWN by default; when isOpen === true we rotate 180deg so it points UP. */}
          <img
            src="/images/accArr.svg"
            alt={isOpen ? "Collapse" : "Expand"}
            // use Tailwind arbitrary widths/heights: small on mobile, 38x17 on md+
            className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"} w-[28px] h-[13px] md:w-[38px] md:h-[17px]`}
            width={38}
            height={17}
          />
        </button>
      </h3>

      <div
        id={regionId}
        role="region"
        aria-labelledby={buttonId}
        className="overflow-hidden transition-all duration-300"
        ref={contentRef}
        style={{ maxHeight }}
      >
        <div className="p-2 md:p-6">
          <p className="text-[#806C63] md:text-[20px] text-[10px]">{content}</p>
        </div>
      </div>
    </div>
  );
}
