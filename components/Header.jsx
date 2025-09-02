"use client"
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const searchRef = useRef(null);
  const mobileRef = useRef(null);

  // Focus the search input when opened
  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  // Close search on click outside or Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };
    const handleClickOutside = (e) => {
      if (searchOpen && searchRef.current && !searchRef.current.contains(e.target)) {
        // if the click is not inside the search input or its container, close
        const container = document.getElementById('header-search-container');
        if (container && !container.contains(e.target)) {
          setSearchOpen(false);
        }
      }
      if (mobileOpen && mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen, mobileOpen]);

  const submitSearch = (e) => {
    e.preventDefault();
    const clean = (query || '').trim();
    if (!clean) return;
    // Simple navigation to a search page. Adjust as you need (router.push, etc.)
    window.location.href = `/search?query=${encodeURIComponent(clean)}`;
  };

  return (
    <>
      <div
        className="w-full h-[16px] md:h-[33px] 2xl:h-[46px]
                  bg-[#806C63] flex items-center justify-center text-[11px] md:text-[20px] 2xl:text-[22px] text-white  "
      >
        Hatton Garden Jewellers
      </div>

      <div className="w-full flex items-center md:pl-9 pt-2 pb-4 md:pt-5 md:pr-3 px-1 w-full bg-white h-auto relative">
        <h1 className="font-hiragino text-[13px] md:text-[22px]  font-[600] text-black tracking-[7px]">
          FLAWLESS
        </h1>

        <div className="xl:flex items-center justify-center gap-4 2xl:gap-20 xl:ml-[20px] hidden ">
          <Link href="#" className="font-hiragino text-[12px] text-black font-[600]">
            ENGAGEMENT
          </Link>
          <Link href="#" className="font-hiragino  text-[12px] text-black font-[600]">
            WEDDING
          </Link>
          <Link href="#" className="font-hiragino  text-[12px] text-black font-[600]">
            JEWELLERY
          </Link>
          <Link href="#" className="font-hiragino  text-[12px] text-black font-[600]">
            DIAMONDS
          </Link>
          <Link href="#" className="font-hiragino  text-[12px] text-black font-[600]">
            GEMSTONE
          </Link>
          <Link href="#" className="font-hiragino  text-[12px] text-black font-[600]">
            ABOUT
          </Link>
        </div>

        <div className="flex items-center gap-2 2xl:gap-4 ml-auto">
          {/* SEARCH ICON & INPUT */}
          <div id="header-search-container" className="relative">
            <button
              aria-label={searchOpen ? 'Close search' : 'Open search'}
              onClick={() => setSearchOpen((s) => !s)}
              className="md:w-[32px] md:h-[27px] w-[10px] h-[10px] relative"
            >
              <Image src="/images/search.png" fill className="absolute" alt="search" />
            </button>

            {/* Inline overlay search (keeps layout intact on desktop, overlay for mobile) */}
            {searchOpen && (
              <form
                onSubmit={submitSearch}
                role="search"
                className="absolute top-full z-50 mt-2 left-0 right-0 px-4 md:right-0 md:left-auto md:px-0 md:mt-3"
              >
                <div
                  className="flex items-center gap-2 bg-white border p-1.5 rounded shadow-sm
                 w-[200px] md:min-w-[220px] h-[44px] md:h-auto"
                >
                  <input
                    ref={searchRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    aria-label="Search"
                    className="outline-none text-[14px] md:text-[14px] flex-1 min-w-0 h-full px-3"
                  />
                  <button
                    type="submit"
                    className="h-full px-4 text-[13px] font-[600] bg-[#A39186] text-white rounded-md hover:bg-[#806C63]"
                  >
                    Go
                  </button>
                </div>
              </form>
            )}


          </div>

          <div className="hidden md:flex items-center justify-center ">
            <div className="w-[23px] h-[30px] relative">
              <Image src="/images/profile.png" fill className="absolute" alt="profile" />
            </div>
            <p className="font-hiragino font-[600] text-[12px] text-black">Account</p>
          </div>

          <Link
            href="#"
            className="font-hiragino w-[151px] h-[30px] ml-[10px] hidden xl:flex items-center justify-center font-[600] bg-[#A39186]
             text-white cursor-pointer rounded-[3px] text-[12px] hover:bg-[#806C63]"
          >
            Book Appointment
          </Link>
          <Link
            href="#"
            className="w-[37px] h-[16px] flex xl:hidden items-center justify-center font-[600] bg-[#A39186]
             text-white cursor-pointer rounded-[3px] text-[8px] hover:bg-[#806C63]"
          >
            Book
          </Link>

          <div className="flex items-center justify-center gap-1">
            <div className="md:w-[27px] md:h-[24px] w-[10px] h-[10px] relative">
              <Image src="/images/heart.png" fill className="absolute" alt="wishlist" />
            </div>
            <p className="font-hiragino text-[9px] md:text-[12px] text-black ">Wishlist</p>
          </div>

          <div className="flex items-center justify-center gap-1">
            <div className="md:w-[18px] md:h-[18px] w-[10px] h-[10px] relative">
              <Image src="/images/cart.png" fill className="absolute" alt="cart" />
            </div>
            <p className="font-hiragino text-[9px] md:text-[12px] text-black md:block hidden ">Cart</p>
          </div>

          <div className="flex items-center justify-center gap-1 mr-4 md:mr-0">
            <div className="md:w-[25px] md:h-[22px] w-[8px] h-[8px] relative">
              <Image src="/images/country.png" fill className="absolute" alt="country" />
            </div>
            <p className="font-hiragino text-[8px] md:text-[10px] md:text-[12px] text-black ">GBP</p>
            <div className="w-[10px] h-[5px] relative">
              <Image src="/images/arrowDown.svg" fill className="absolute" alt="arrow" />
            </div>
          </div>
        </div>

        {/* HAMBURGER (mobile) */}
        <button
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((s) => !s)}
          className="w-[11px] h-[18px] relative block xl:hidden ml-2"
        >
          <Image src="/images/ham.png" fill className="absolute" alt="menu" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {/* overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            ref={mobileRef}
            className={`absolute right-0 top-0 h-full w-[78%] max-w-xs bg-white shadow-xl transform transition-transform z-50`}
            role="dialog"
            aria-modal="true"
          >
            <div className="p-4 flex items-center justify-between border-b">
              <h2 className="text-lg font-[600]">Menu</h2>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close mobile menu"
                className="text-[14px] font-[600] px-2 py-1"
              >
                Close
              </button>
            </div>

            <div className="p-4 space-y-4">
              <Link href="#" className="block text-[14px] font-[600]">
                ENGAGEMENT
              </Link>
              <Link href="#" className="block text-[14px] font-[600]">
                WEDDING
              </Link>
              <Link href="#" className="block text-[14px] font-[600]">
                JEWELLERY
              </Link>
              <Link href="#" className="block text-[14px] font-[600]">
                DIAMONDS
              </Link>
              <Link href="#" className="block text-[14px] font-[600]">
                GEMSTONE
              </Link>
              <Link href="#" className="block text-[14px] font-[600]">
                ABOUT
              </Link>

              <div className="pt-2 border-t">
                <Link
                  href="#"
                  className="w-full inline-flex items-center justify-center h-[40px] font-[600] bg-[#A39186] text-white rounded"
                >
                  Book Appointment
                </Link>

                <div className="flex items-center gap-3 mt-3">
                  <div className="w-[28px] h-[28px] relative">
                    <Image src="/images/profile.png" fill className="absolute" alt="profile" />
                  </div>
                  <div>
                    <p className="font-[600]">Account</p>
                    <p className="text-[12px]">Sign in / Register</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[24px] relative">
                      <Image src="/images/heart.png" fill className="absolute" alt="wishlist" />
                    </div>
                    <span className="font-[600]">Wishlist</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-[22px] h-[22px] relative">
                      <Image src="/images/cart.png" fill className="absolute" alt="cart" />
                    </div>
                    <span className="font-[600]">Cart</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <div className="w-[26px] h-[22px] relative">
                    <Image src="/images/country.png" fill className="absolute" alt="country" />
                  </div>
                  <span className="font-[600]">GBP</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
