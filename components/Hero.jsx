import Image from 'next/image';
import React from 'react';


const Hero = () => {
  return (
    <div className="w-full h-[417px] md:h-[597px] relative flex flex-col items-center justify-center gap-10">
      {/* Mobile Hero */}
      <Image
        src="/images/hero_mob.svg"
        fill
        priority
        alt="Hero Mobile"
        className="object-cover md:hidden z-10"
      />

      {/* Desktop Hero */}
      <Image
        src="/images/hero.svg"
        fill
        priority
        alt="Hero Desktop"
        className="hidden md:block object-cover z-10"
      />

      <h1 className='font-garamond z-20 relative text-[#EDE7E5]  font-[400] text-[32px] md:text-[48px] [@media(min-width:1900px)]:text-[50px]'> <span className='italic'>Love</span>   Made Visible ...  </h1>
      <p className='z-20 relative text-white font-helvetica font-500 text-center text-[16px] w-[80%] md:w-[50%] md:text-[20px] [@media(min-width:1900px)]:text-[22px]'>
        Handcrafted by our expert Hatton Garden Jewellers, our diamond engagement rings are British heritage, heirloom-quality pieces. Every ring is a promise: exquisitely designed,  consciously crafted, and perfected to last lifetimes.
        <br/>Time to share your love story.
      </p>
      <div className='font-hiragino flex items-center relative z-20 justify-center gap-3 w-[90%] md:w-[50%] '>
        <button className='w-[48%] md:h-[45px] h-[33px] bg-[#FDFAF8] flex items-center justify-center font-[600] text-black
        md:text-[16px] text-[8px] cursor-pointer rounded-[3px] '>
              BOOK YOUR APPOINTMENT
        </button>
        <button className='w-[48%] md:h-[45px] h-[33px] bg-[#FDFAF8] flex items-center justify-center font-[600] text-black
        md:text-[16px] text-[8px] font-hiragino cursor-pointer rounded-[3px] '>
              SHOP ENGAGEMENT RINGS
        </button>
      </div>
    </div>




  );
}



export default Hero;
