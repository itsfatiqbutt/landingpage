// components/Engagement_C.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Engagement_C = ({ img, link }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2 md:gap-[55px]">
      {/* Aspect box keeps height stable while image loads */}
      <div className="relative w-full pb-[146.5%] overflow-hidden  bg-white">
        {/* Image */}
        <Image
          src={img}
          alt={link || "engagement"}
          fill
          className={`object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          sizes="(min-width:1280px) 20vw, (min-width:768px) 33vw, 50vw"
          onLoadingComplete={() => setLoaded(true)}
          priority={false}
        />

        {/* Skeleton / shimmer placeholder */}
        <div
          aria-hidden={!loaded}
          className={`absolute inset-0 flex items-center justify-center ${
            loaded ? "opacity-0 pointer-events-none" : "opacity-100"
          } transition-opacity duration-300`}
        >
          <div className="w-full h-full animate-pulse bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>

      <Link
        href="#"
        className="font-[600] font-hiragino w-full md:mt-[-30px] text-[10px] md:text-[20px] text-black text-center"
      >
        {link}
      </Link>
    </div>
  );
};

export default Engagement_C;
