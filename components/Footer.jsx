import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    // make footer a column flex so children can be pushed to the bottom
    <footer className='w-full h-auto lg:[800px] 2xl:h-[762px]  bg-[#A08579] p-2 md:p-20 relative flex flex-col'>
      <div className='w-full px-5 md:px-0 mx-auto  flex flex-wrap gap-10'>
        <div className='flex flex-col gap-1'>
          <p className='font-[600] text-white text-[12px] w-full text-center md:text-left'>
            BEFORE YOUR APPOINTMENT
          </p>
          <h1 className='font-garamond font-[500] text-white text-[32px] italic'>
            Useful Tools & Information
          </h1>
        </div>

        {/* ... your small white cards (unchanged) ... */}
        <div className='flex items-center gap-1 md:gap-5 bg-white p-4 w-[147px] h-[50px] rounded-[20px] md:w-[231px] md:h-[75px] border border-black'>
          <Image src="/images/f1.svg" width={34} height={34} alt="img" className="w-[23px] h-[23px] md:w-[34px] md:h-[34px]" />
          <p className='font-inter font-500 text-black text-[12px]'>ACCESSABILITY</p>
        </div>
        <div className='flex items-center gap-1 md:gap-5 bg-white p-4 w-[147px] h-[50px] rounded-[20px] md:w-[231px] md:h-[75px] border border-black'>
          <Image src="/images/f2.svg" width={34} height={34} alt="img" className="w-[23px] h-[23px] md:w-[34px] md:h-[34px]" />
          <p className='font-inter font-500 text-black text-[12px]'>EMAIL US</p>
        </div>
        <div className='flex items-center gap-1 md:gap-5 bg-white p-4 w-[147px] h-[50px] rounded-[20px] md:w-[231px] md:h-[75px] border border-black'>
          <Image src="/images/f3.svg" width={34} height={34} alt="img" className="w-[23px] h-[23px] md:w-[34px] md:h-[34px]" />
          <p className='font-inter font-500 text-black text-[12px]'>CALL US</p>
        </div>
        <div className='flex items-center gap-1 md:gap-5 bg-white p-4 w-[147px] h-[50px] rounded-[20px] md:w-[231px] md:h-[75px] border border-black'>
          <Image src="/images/f4.svg" width={34} height={34} alt="img" className="w-[23px] h-[23px] md:w-[34px] md:h-[34px]" />
          <p className='font-inter font-500 text-black text-[12px]'>PARKING</p>
        </div>
        <div className='flex items-center ml-20 md:ml-0 gap-1 md:gap-5 bg-white p-4 w-[147px] h-[50px] rounded-[20px] md:w-[231px] md:h-[75px] border border-black'>
          <Image src="/images/f5.svg" width={34} height={34} alt="img" className="w-[23px] h-[23px] md:w-[34px] md:h-[34px]" />
          <p className='font-inter font-500 text-black text-[12px]'>FIND US</p>
        </div>
      </div>

      <div className='w-full flex items-start flex-wrap mt-50 gap-15 2xl:justify-between 2xl:gap-30'>
        <div className='flex flex-col items-start gap-2'>
          <h1 className='font-hiragino font-[600] text-white text-[14px] md:text-[16px]'>CUSTOMER SERVICE</h1>
          <Link href="#" className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>Terms and Conditions</Link>
          <Link href="#" className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>Delivery and Returns</Link>
          <Link href="#" className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>Tax and Duty</Link>
          <Link href="#" className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>Novuna Finance</Link>
          <Link href="#" className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>General FAQs</Link>
          <Link href="#" className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>Privacy Policy</Link>
          <Link href="#" className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>Diamond `Education</Link>
        </div>

        <div className='flex flex-col items-start gap-2'>
          <h1 className='font-hiragino font-[600] text-white text-[14px] md:text-[16px]'>ABOUT US</h1>
          <Link href="#" className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>Our Story</Link>
          <Link href="#" className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>Our Showroom</Link>
          <Link href="#" className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>The Journal</Link>
          <Link href="#" className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>Book a Consultation</Link>
          <Link href="#" className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>Flawless London</Link>
          <Link href="#" className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>Flawless Manchester</Link>
        </div>

        <div className='flex flex-col items-start gap-2'>
          <h1 className='font-hiragino font-[600] text-white text-[14px] md:text-[16px]'>CONTACT US</h1>
          <p className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>+44 7518021455</p>
          <p className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>sales@flawlessfinejewelry.com</p>
          <p className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>Mon-Sat | 10:00am - 05:30pm</p>
          <p className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>Sun | 11:00am - 3;30pm</p>
          <p className='font-helvetica text-white text-[14px] font-[500] cursor-pointer hover:border-b '>107 Hatton Garden, London EC1N8LY</p>
        </div>

        <div className='flex gap-3 relative p-1'>
          <h1 className='font-hiragino font-[600] text-white text-[14px] md:text-[16px] absolute top-0 left-1/2 -translate-x-1/2 w-[100px] '>FOLLOW US</h1>
          <div className='flex flex-col mt-10'>
            <Image src="/images/fi1.png" width={50} height={50} className="w-[42px] h-[42px] md:w-[50px] md:h-[50px]" />
            <Image src="/images/fi2.png" width={50} height={50} className="w-[42px] h-[42px] md:w-[50px] md:h-[50px]" />
            <Image src="/images/fi3.png" width={50} height={50} className="w-[42px] h-[42px] md:w-[50px] md:h-[50px]" />
          </div>
          <div className='flex flex-col mt-10'>
            <Image src="/images/fi4.png" width={50} height={50} className="w-[42px] h-[42px] md:w-[50px] md:h-[50px]" />
            <Image src="/images/fi5.png" width={50} height={50} className="w-[42px] h-[42px] md:w-[50px] md:h-[50px]" />
            <Image src="/images/fi6.png" width={50} height={50} className="w-[42px] h-[42px] md:w-[50px] md:h-[50px]" />
          </div>
        </div>

        <div className='flex flex-col w-full md:w-[343px] ml-10 md:ml-0 2xl:mt-20'>
          <p className='w-full ml-10 font-helvetica text-white font-[500] text-[16px] '>
            Join the Community and stay up to date
          </p>

          {/* subscription input — fixed so it won't push down */}
          <div className='w-full h-[41px] md:w-[343px] md:h-[45px] flex flex-nowrap mt-3 mb-5'>
            <input
              type="email"
              placeholder="Your Email Address"
              className='flex-1 min-w-0 h-full  placeholder:font-inter placeholder:text-[11px] placeholder:text-black placeholder:font-[500] bg-white/80 px-4'
            />
            <button className='flex-none h-full px-6 bg-white/50 flex items-center justify-center font-inter text-[14px] text-black font-[500]'>
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* CENTERED rows + copyright — pushed to bottom with mt-auto */}
      <div className="w-full flex flex-col items-center gap-3 mt-auto">
        <div className="flex gap-3 items-center justify-center">
          <Image src="/images/f31.png" width={209} height={118} alt="img" className='w-[122px] h-[68px] md:w-[209px] md:h-[118px]' />
          <Image src="/images/f32.png" width={150} height={61} alt="img" className='w-[103px] h-[42px] md:w-[215px] md:h-[61px]' />
          <Image src="/images/f33.png" width={175} height={64} alt="img" className='w-[115px] h-[42px] md:w-[175px] md:h-[64px]' />
        </div>

        <div className="flex gap-3 items-center relative justify-center">
          <Image src="/images/f41.png" width={42} height={28} alt="img" className='w-[25px] h-[17px] md:w-[42px] md:h-[28px]' />
          <Image src="/images/f42.png" width={42} height={28} alt="img" className='w-[25px] h-[17px] md:w-[42px] md:h-[28px]' />
          <Image src="/images/f43.png" width={42} height={28} alt="img" className='w-[25px] h-[17px] md:w-[42px] md:h-[28px]' />
          <Image src="/images/f44.png" width={42} height={28} alt="img" className='w-[25px] h-[17px] md:w-[42px] md:h-[28px]' />
          <Image src="/images/f45.png" width={42} height={28} alt="img" className='w-[25px] h-[17px] md:w-[42px] md:h-[28px]' />
          <Image src="/images/f46.png" width={42} height={28} alt="img" className='w-[25px] h-[17px] md:w-[42px] md:h-[28px]' />
        </div>

        <p className='font-hiragino text-center text-[9px] text-white font-[500] font-inter'>
          © 2025 Flawless Fine Jewellery LTD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
