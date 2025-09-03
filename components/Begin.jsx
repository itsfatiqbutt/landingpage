import Image from 'next/image';
import React from 'react';

const Begin = () => {
  return <div className='w-[95%] mx-auto flex flex-col md:flex-row items-center justify-between mt-[30px] md:mt-[208px]'>
    <div className='w-full md:w-[50%] h-auto'>
      <Image src="/images/where1.png" width={865} height={665} alt=
      "img" className="md:w-[787px] md:h-[611px]"></Image>
    </div>
    <div className='w-full md:w-[50%] px-4 flex flex-col gap-4 items-center'>
      <h1 className=' w-full font-garamond text-center mx-auto md:text-[32px] text-[20px] text-[black]'>
      Where it all begins...
      </h1>
      <p className='font-helvetica px-1 text-[10px] md:text-[16px] text-center'>Nestled in the heart of Hatton Garden, Flawless Fine Jewellery stands as a testament to the dedication to fine jewellery making in London’s historic jewellery quarter. Since 2014 our journey has been one of refining our craft to offer uncompromising quality, assembling a team of experts and enhancing our customer service. </p>
      <p className='font-helvetica px-1 text-[10px] md:text-[16px] text-center'>
      As reputable Hatton Garden jewellers, we pride ourselves on offering an exclusive collection of natural and lab-grown diamonds, as well as a variety of hand selected gemstones. Our commitment to ethical sourcing ensures that all our diamonds are conflict-free, providing our customers with peace of mind.
      </p>
      <p className='font-helvetica px-1 text-[10px] md:text-[16px] text-center'>
      Flawless is the fine jeweller for modern romantics who value craftsmanship, sustainability, and a personal experience. Every ring is exclusively handmade in Britain using heritage techniques. We strive to be the home of timeless designs, ethical luxury, and a Hatton Garden jeweller you can trust for life.
      </p>
      <p className='font-helvetica px-1 text-[10px] md:text-[16px] text-center'>
      Whether you're seeking a traditional diamond solitaire ring or a unique gemstone engagement ring, our team is dedicated to bringing your vision to life,
your love made visible
      </p>

      <button className='font-hiragino w-[50%] h-[30px] md:h-[65px] rounded-3px text-black text-[10px] md:text-[20px] bg-[#EDE7E5] flex items-center justify-center'>
      LEARN ABOUT US
      </button>
    </div>
  </div>;
}



export default Begin;
