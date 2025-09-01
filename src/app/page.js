import Engagement from "../../components/Engagement";
import Image from "next/image";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Importants from "../../components/Importants";
import Diamond from "../../components/Diamond";
import ShopJew from "../../components/ShopJew";
import Curated from "../../components/Curated";
import DesignYO from "../../components/DesignYO";
import WhatsNew from "../../components/WhatsNew";
import Unique from "../../components/Unique";
import WhatIs from "../../components/WhatIs";
import Browse from "../../components/Browse";
import Begin from "../../components/Begin";
import Icons from "../../components/Icons";
import Accordians from "../../components/Accordians";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header/>
      <Hero/>
      <Importants/>
      <Engagement/>
      <Diamond/>
      <ShopJew/>
      <Curated/>
      <DesignYO/>
      <WhatsNew/>
      <Unique/>
      <WhatIs/>
      <Browse/>
      <Begin/>
      <Icons/>
      <Accordians/>
      <Footer/>
    </div>
  );
}
