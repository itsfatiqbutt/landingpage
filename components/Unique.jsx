import React from 'react';
import Image from 'next/image';

const Unique = () => {
  return(
  <div className='w-full md:w-[90%] mx-auto mt-[50px] md:mt-[125px]  '>
      <p className="md:w-full text-[24px] md:text-[32px] [@media(min-width:1900px)]:text-[40px] text-black font-garamond font-[400] text-center italic">
      Rare Stones for Unique Love Stories
          </p>
      <div className='w-full flex flex-col md:flex-row items-start justify-between mt-15'>
      <div className='w-full mb-10 md:mb-0 md:w-[47%] flex flex-col gap-5'>
        <Image src="/images/un1.png" width={795} height={403} alt="img" className='w-full h-auto object-contain'></Image>
        <h1 className='font-helvetica  text-[20px] md:text-[32px] [@media(min-width:1900px)]:text-[36px] text-black text-center md:text-left w-full'>
        Fancy Coloured Diamond Rings
        </h1>
        <p className='px-9 md:h-[90px] md:px-0 font-helvetica font-medium text-[14px] text-center md:text-[18px] md:text-left'>
        Our collection of jewellery features stunning engagement rings, wedding bands, pendants, bracelets and more, all crafted with the finest diamonds and gemstones.
        </p>
        <button className='font-hiragino [@media(min-width:1900px)]:text-[18px] rounded-[6px] cursor-pointer hover:bg-[#806C63] transition duration-500 md:text-[16px] font-[600] bg-[#EDE7E5] w-[80%] md:w-[60%] mx-auto md:ml-0 text-[12px] h-[43px] flex items-center justify-center md:h-[65px] '>
        SHOP COLOURED DIAMOND RINGS
        </button>

   </div>
   <div className='w-full md:w-[47%] flex flex-col gap-5'>
        <Image src="/images/un2.png" width={795} height={403} alt="img" className='w-full h-auto object-contain'></Image>
        <h1 className='font-helvetica font-[500] text-[20px] md:text-[32px] [@media(min-width:1900px)]:text-[36px] text-center md:text-left  text-black'>
        Gemstone Engagement Rings
        </h1>
        <p className='px-9 md:h-[90px] md:px-0 font-helvetica font-medium text-[14px] text-center md:text-[18px] md:text-left'>
        Our Hatton Garden jewellers have endeavoured to partner only with responsible and sustainable gemstone suppliers to help us source truly remarkable pieces worthy of your love story.
        </p>
        <button className='font-hiragino rounded-[6px] cursor-pointer hover:bg-[#806C63] transition duration-500 font-[600] bg-[#EDE7E5] w-[80%] md:w-[60%] mx-auto md:ml-0 text-[12px] md:text-[16px]  [@media(min-width:1900px)]:text-[18px] h-[43px] flex items-center justify-center md:h-[65px] '>
        SHOP GEMSTONE ENGAGEMENT RINGS
        </button>

   </div>
      </div>


  </div>
  );
}



export default Unique;
