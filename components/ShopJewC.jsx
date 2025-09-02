import Image from 'next/image';
import React from 'react';

const ShopJewC = ({img,link}) => {
  return (
  <div className='flex flex-col gap-5 items-center justify-center w-full'>
    <div className='w-full'>
      <Image src={img} width={401} height={576} alt="img" className='object-cover'></Image>
    </div>
    <p className="font-hiragino font-[600] w-full text-[10px] md:text-[16px] text-black text-center">
    {link}
    </p>
  </div>
  );
}



export default ShopJewC;
