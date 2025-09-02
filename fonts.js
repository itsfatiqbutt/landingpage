
import { EB_Garamond } from "next/font/google";


export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
});

import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-inter",
});

import { Noto_Sans_JP } from 'next/font/google'
export const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

import localFont from "next/font/local"


export const helveticaNow = localFont({
  src: [
    {
      path: "./fonts/helveticanowtext-black-demo.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/helveticanowtext-bold-demo.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/helveticanowtext-bolditalic-demo.ttf",
      weight: "700",
      style: "italic",
    },

  ],
  variable: "--font-helvetica-now", // for Tailwind integration
})
