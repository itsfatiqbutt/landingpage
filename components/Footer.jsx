import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#A08579] p-2 pl-3  xl:p-20 flex flex-col mt-[47px]">
      {/* top row: title + small white cards */}
      <div className="w-full px-5 md:px-0 mx-auto flex flex-wrap gap-6 justify-center  items-center">
        <div className="flex flex-col gap-1 flex-shrink-0">
          <p className="font-hiragino font-[600] text-white text-[12px] text-center md:text-left">BEFORE YOUR APPOINTMENT</p>
          <h1 className="font-garamond font-[500] text-white text-[32px] italic">Useful Tools & Information</h1>
        </div>

        {/* small white cards - sizes and images preserved */}
        <div className="flex items-center gap-1 md:gap-5 bg-white p-4 w-[147px] h-[50px] rounded-[20px] md:w-[231px] md:h-[75px] border border-black">
          <Image src="/images/f1.svg" width={34} height={34} alt="img" className="w-[23px] h-[23px] md:w-[34px] md:h-[34px]" />
          <p className="font-inter font-500 text-black text-[12px]">ACCESSABILITY</p>
        </div>
        <div className="flex items-center gap-1 md:gap-5 bg-white p-4 w-[147px] h-[50px] rounded-[20px] md:w-[231px] md:h-[75px] border border-black">
          <Image src="/images/f2.svg" width={34} height={34} alt="img" className="w-[23px] h-[23px] md:w-[34px] md:h-[34px]" />
          <p className="font-inter font-500 text-black text-[12px]">EMAIL US</p>
        </div>
        <div className="flex items-center gap-1 md:gap-5 bg-white p-4 w-[147px] h-[50px] rounded-[20px] md:w-[231px] md:h-[75px] border border-black">
          <Image src="/images/f3.svg" width={34} height={34} alt="img" className="w-[23px] h-[23px] md:w-[34px] md:h-[34px]" />
          <p className="font-inter font-500 text-black text-[12px]">CALL US</p>
        </div>
        <div className="flex items-center gap-1 md:gap-5 bg-white p-4 w-[147px] h-[50px] rounded-[20px] md:w-[231px] md:h-[75px] border border-black">
          <Image src="/images/f4.svg" width={34} height={34} alt="img" className="w-[23px] h-[23px] md:w-[34px] md:h-[34px]" />
          <p className="font-inter font-500 text-black text-[12px]">PARKING</p>
        </div>
        <div className="flex items-center gap-1 md:gap-5 bg-white p-4 w-[147px] h-[50px] rounded-[20px] md:w-[231px] md:h-[75px] border border-black">
          <Image src="/images/f5.svg" width={34} height={34} alt="img" className="w-[23px] h-[23px] md:w-[34px] md:h-[34px]" />
          <p className="font-inter font-500 text-black text-[12px]">FIND US</p>
        </div>
      </div>

      {/* middle area: links, contact, social and subscription
          - On mobile: two-per-row for first four, then subscribe row centered
          - On wide screens: columns shrink and arrange in one row (fits around 1512px)
          - When wrapped, items align to the right
      */}
      <div className="w-full flex flex-wrap items-start gap-6 mt-6 md:mt-10  md:justify-between">
        {/* Each column: two-per-row on small screens (w-1/2). On md+ they become flexible columns that can shrink.
            min-w-[220px] ensures readability but still allows fitting on wide screens.
        */}
        <div className="w-1/2 sm:w-1/2 md:w-auto md:flex-1 w-[130px] md:flex-shrink-0 md:min-w-[220px] flex flex-col items-start gap-2">
          <h2 className="font-hiragino font-[600] text-white text-[14px] md:text-[16px]">CUSTOMER SERVICE</h2>
          <Link href="#" className="font-helvetica text-white text-[14px] font-[500] hover:underline">Terms and Conditions</Link>
          <Link href="#" className="font-helvetica text-white text-[14px] font-[500] hover:underline">Delivery and Returns</Link>
          <Link href="#" className="font-helvetica text-white text-[14px] font-[500] hover:underline">Tax and Duty</Link>
          <Link href="#" className="font-helvetica text-white text-[14px] font-[500] hover:underline">Novuna Finance</Link>
          <Link href="#" className="font-helvetica text-white text-[14px] font-[500] hover:underline">General FAQs</Link>
          <Link href="#" className="font-helvetica text-white text-[14px] font-[500] hover:underline">Privacy Policy</Link>
          <Link href="#" className="font-helvetica text-white text-[14px] font-[500] hover:underline">Diamond Education</Link>
        </div>

        <div className="w-1/2 sm:w-1/2 md:w-auto w-[130px] ml-[40px] sm:ml-0 md:flex-1 md:flex-shrink-0 translate-x-[15px] md:translate-x-0 md:min-w-[220px] flex flex-col items-start gap-2">
          <h2 className="font-hiragino font-[600] text-white text-[14px] md:text-[16px] ">ABOUT US</h2>
          <Link href="#" className="font-helvetica text-white text-[14px] font-[500] hover:underline">Our Story</Link>
          <Link href="#" className="font-helvetica text-white text-[14px] font-[500] hover:underline">Our Showroom</Link>
          <Link href="#" className="font-helvetica text-white text-[14px] font-[500] hover:underline">The Journal</Link>
          <Link href="#" className="font-helvetica text-white text-[14px] font-[500] hover:underline">Book a Consultation</Link>
          <Link href="#" className="font-helvetica text-white text-[14px] font-[500] hover:underline">Flawless London</Link>
          <Link href="#" className="font-helvetica text-white text-[14px] font-[500] hover:underline">Flawless Manchester</Link>
        </div>

        <div className="w-1/2 sm:w-1/2 md:w-auto w-[130px] md:flex-1 md:flex-shrink-0 md:min-w-[220px] flex flex-col items-start gap-2">
          <h2 className="font-hiragino font-[600] text-white text-[14px] md:text-[16px]">CONTACT US</h2>
          <p className="font-helvetica text-white text-[14px] font-[500]">+44 7518021455</p>
          <p className="font-helvetica text-white text-[14px] sm:text-[14px] font-[500]">sales@flawlessfinejewelry.com</p>
          <p className="font-helvetica text-white text-[14px] font-[500]">Mon-Sat | 10:00am - 05:30pm</p>
          <p className="font-helvetica text-white text-[14px] font-[500]">Sun | 11:00am - 3:30pm</p>
          <p className="font-helvetica text-white text-[14px] font-[500]">107 Hatton Garden, London EC1N8LY</p>
        </div>

        <div className="w-1/2 sm:w-1/2 md:w-auto  w-[130px] md:flex-1 ml-[60px] sm:ml-0 translate-x-[15px] md:translate-x-0 md:flex-shrink-0 md:min-w-[220px] flex flex-col items-start gap-2">
          <h2 className="font-hiragino font-[600] text-white text-[14px] md:text-[16px] ">FOLLOW US</h2>
          <div className="flex gap-4 mt-2">
            <div className="flex flex-col gap-3">
              <Image src="/images/fi1.png" width={50} height={50} alt="img" className="w-[42px] h-[42px] md:w-[50px] md:h-[50px]" />
              <Image src="/images/fi2.png" width={50} height={50} alt="img" className="w-[42px] h-[42px] md:w-[50px] md:h-[50px]" />
              <Image src="/images/fi3.png" width={50} height={50} alt="img" className="w-[42px] h-[42px] md:w-[50px] md:h-[50px]" />
            </div>
            <div className="flex flex-col gap-3">
              <Image src="/images/fi4.png" width={50} height={50} alt="img" className="w-[42px] h-[42px] md:w-[50px] md:h-[50px]" />
              <Image src="/images/fi5.png" width={50} height={50} alt="img" className="w-[42px] h-[42px] md:w-[50px] md:h-[50px]" />
              <Image src="/images/fi6.png" width={50} height={50} alt="img" className="w-[42px] h-[42px] md:w-[50px] md:h-[50px]" />
            </div>
          </div>
        </div>

        {/* Subscription box: centered on mobile, right on large screens */}
        <div className="w-full md:w-[343px] mt-4 md:mt-0 order-last md:order-none">
          <p className="w-full text-center md:text-left font-helvetica text-white font-[500] text-[16px]">Join the Community and stay up to date</p>
          <div className="w-[80%] h-[41px] md:w-[343px] md:h-[45px] flex mt-3 mb-5 mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 min-w-0 h-full placeholder:font-inter placeholder:text-[16px] placeholder:text-black placeholder:font-[500] bg-white/80 px-4"
            />
            <button className="flex-none h-full px-6 bg-white/50 flex items-center justify-center font-inter text-[16px] text-black font-[500]">SUBMIT</button>
          </div>
        </div>
      </div>

      {/* bottom area: logos and copyright */}
      <div className="w-full flex flex-col items-center gap-3 mt-6">
        <div className="flex gap-3 items-center justify-center">
          <Image src="/images/f31.png" width={209} height={118} alt="img" className="w-[122px] h-[68px] md:w-[209px] md:h-[118px]" />
          <Image src="/images/f32.png" width={150} height={61} alt="img" className="w-[103px] h-[42px] md:w-[150px] md:h-[61px]" />
          <Image src="/images/f33.png" width={175} height={64} alt="img" className="w-[115px] h-[42px] md:w-[175px] md:h-[64px]" />
        </div>

        <div className="flex gap-3 items-center justify-center">
          <Image src="/images/f41.png" width={42} height={28} alt="img" className="w-[25px] h-[17px] md:w-[42px] md:h-[28px]" />
          <Image src="/images/f42.png" width={42} height={28} alt="img" className="w-[25px] h-[17px] md:w-[42px] md:h-[28px]" />
          <Image src="/images/f43.png" width={42} height={28} alt="img" className="w-[25px] h-[17px] md:w-[42px] md:h-[28px]" />
          <Image src="/images/f44.png" width={42} height={28} alt="img" className="w-[25px] h-[17px] md:w-[42px] md:h-[28px]" />
          <Image src="/images/f45.png" width={42} height={28} alt="img" className="w-[25px] h-[17px] md:w-[42px] md:h-[28px]" />
          <Image src="/images/f46.png" width={42} height={28} alt="img" className="w-[25px] h-[17px] md:w-[42px] md:h-[28px]" />
        </div>

        <p className="font-hiragino text-center text-[9px] text-white font-[500]">© 2025 Flawless Fine Jewellery LTD. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
