"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Engagement_C from "./Engagement_C";
import Image from "next/image";

export const engagementsData = [
  { img: "/images/eng1.svg", link: "Trilogy" },
  { img: "/images/eng2.png", link: "Solitaire" },
  { img: "/images/eng3.png", link: "Cluster" },
  { img: "/images/eng4.png", link: "Bezel" },
  { img: "/images/eng5.png", link: "Hidden Halo" },
  { img: "/images/eng6.png", link: "Floral" },
  { img: "/images/eng7.png", link: "Celtic" },
  { img: "/images/eng8.png", link: "Halo" },
];

const leftIconSrc = "/images/cr-left.svg";
const rightIconSrc = "/images/cr-right.svg";

// Adjusted: show 5 slides at widths >= 1512px
const breakpoints = [
  { min: 1312, count: 5 },
  { min: 1024, count: 4 },
  { min: 768, count: 3 },
  { min: 0, count: 2 },
];

const Engagement = () => {
  const containerRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // measured layout
  const [gapPx, setGapPx] = useState(16);
  const [itemWidth, setItemWidth] = useState(null);
  const [visibleCount, setVisibleCount] = useState(2);
  const [layoutReady, setLayoutReady] = useState(false);

  // compute scroll step (one item + gap)
  const getScrollStep = useCallback(() => {
    if (!itemWidth) return 0;
    return Math.round(itemWidth + gapPx);
  }, [itemWidth, gapPx]);

  // update prev/next button states
  const updateButtons = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    // small tolerance to avoid flicker
    setCanScrollPrev(el.scrollLeft > 5);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  }, []);

  // scroll snapping via step (programmatic)
  const scrollByIndex = useCallback(
    (dir) => {
      const el = containerRef.current;
      if (!el) return;
      const step = getScrollStep();
      if (!step) return;

      const currentIndex = Math.round(el.scrollLeft / step);
      const maxIndex = Math.ceil((el.scrollWidth - el.clientWidth) / step);
      let nextIndex = dir === "next" ? currentIndex + 1 : currentIndex - 1;
      nextIndex = Math.max(0, Math.min(nextIndex, maxIndex));

      const target = Math.min(nextIndex * step, el.scrollWidth - el.clientWidth);
      el.scrollTo({ left: Math.round(target), behavior: "smooth" });
    },
    [getScrollStep]
  );

  const scrollNext = () => scrollByIndex("next");
  const scrollPrev = () => scrollByIndex("prev");

  // snapping after user scroll: snap to nearest item using step (keeps UX tidy)
  const snapToNearest = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const step = getScrollStep();
    if (!step) return;
    const idx = Math.round(el.scrollLeft / step);
    const target = Math.min(idx * step, el.scrollWidth - el.clientWidth);
    el.scrollTo({ left: Math.round(target), behavior: "smooth" });
  }, [getScrollStep]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId = null;

    const handleResize = () => {
      // measure gap from computed style (fallback to 16)
      try {
        const gapStyle = getComputedStyle(el).gap || getComputedStyle(el).columnGap || "16px";
        const g = parseFloat(gapStyle) || 16;
        setGapPx(g);
      } catch (e) {
        setGapPx(16);
      }

      // container width
      const w = el.clientWidth || window.innerWidth;

      // choose visible count from breakpoints
      let count = 2;
      for (const bp of breakpoints) {
        if (w >= bp.min) {
          count = bp.count;
          break;
        }
      }
      setVisibleCount(count);

      // compute exact item width so items fill container precisely
      const totalGap = (count - 1) * (getComputedStyle ? (parseFloat(getComputedStyle(el).gap) || gapPx) : gapPx);
      const computedItemWidth = Math.floor((w - totalGap) / count);
      setItemWidth(computedItemWidth > 0 ? computedItemWidth : null);

      // wait for paint to settle then update controls & reveal
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        updateButtons();
        setLayoutReady(true);
      });
    };

    // ResizeObserver for container sizing
    const ro = new ResizeObserver(() => handleResize());
    ro.observe(el);

    // scroll listener to update buttons
    const onScroll = () => {
      // throttle with rAF
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        updateButtons();
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    // initial measure
    handleResize();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      ro.disconnect();
      el.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty - observe container only once

  // snap on wheel/drag end to nearest item for nicer UX
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let isPointerDown = false;
    let pointerUpTimeout = null;

    const onPointerDown = () => {
      isPointerDown = true;
      if (pointerUpTimeout) {
        clearTimeout(pointerUpTimeout);
        pointerUpTimeout = null;
      }
    };

    const onPointerUpOrCancel = () => {
      isPointerDown = false;
      // snap a bit after interaction ends
      pointerUpTimeout = setTimeout(() => {
        snapToNearest();
      }, 120);
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUpOrCancel);
    window.addEventListener("pointercancel", onPointerUpOrCancel);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUpOrCancel);
      window.removeEventListener("pointercancel", onPointerUpOrCancel);
      if (pointerUpTimeout) clearTimeout(pointerUpTimeout);
    };
  }, [snapToNearest]);

  // item style generator
  const itemStyle = itemWidth
    ? {
        flex: `0 0 ${itemWidth}px`,
        width: `${itemWidth}px`,
        scrollSnapAlign: "start",
      }
    : { flex: "0 0 auto", scrollSnapAlign: "start" };

  return (
    <div className="w-[90%] md:w-[94%] mx-auto mt-[30px] md:mt-[80px] ">
      <h1 className="font-garamond italic text-[20px] md:text-[32px] [@media(min-width:1900px)]:text-[40px] text-center font-[500]">
        Shop by Engagement Ring Style
      </h1>

      <p className="mt-[30px] px-[20px] md:px-0 font-helvetica mx-auto font-medium text-[10px] text-black md:text-[16px] text-center w-[90%] md:w-[67%]">
        Browse our exclusive engagement ring designs by categories and explore a range of timeless or modern styles to
        pair with your selected lab-grown or earth-mined diamond.
        <span className="hidden md:inline">
          {" "}
          Our engagement rings embody over a decade of expertise and uncompromising quality, specific only to Hatton
          Garden Jewellers & Craftsmen.
        </span>
      </p>

      <div className="relative mt-[30px]">
        <div className="carousel-viewport">
          <div
            ref={containerRef}
            // hide until layoutReady. visibility:hidden keeps layout for measurements.
            style={{
              visibility: layoutReady ? "visible" : "hidden",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
            className="carousel-inner no-scrollbar flex gap-4 md:gap-4 overflow-x-auto scroll-smooth"
            aria-label="Engagement ring styles carousel"
          >
            {engagementsData.map((item, idx) => (
              <div
                key={idx}
                className="carousel-item flex-none flex-shrink-0"
                style={itemStyle}
                aria-hidden={false}
              >
                <Engagement_C img={item.img} link={item.link} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          aria-label="Previous"
          className="absolute left-[-10px] md:left-[-25px] top-1/2 -translate-y-1/2 z-50 cursor-pointer bg-transparent disabled:opacity-40"
          style={{ WebkitTapHighlightColor: "transparent" }}
          disabled={!canScrollPrev}
        >
          <Image
            src={leftIconSrc}
            alt="Previous"
            width={37}
            height={22}
            className="w-[18px] h-[20px] md:w-[42px] md:h-[35px]"
          />
        </button>

        <button
          onClick={scrollNext}
          aria-label="Next"
          className="absolute right-[-10px] md:right-[-25px] top-1/2 -translate-y-1/2 z-50 cursor-pointer bg-transparent disabled:opacity-40"
          style={{ WebkitTapHighlightColor: "transparent" }}
          disabled={!canScrollNext}
        >
          <Image
            src={rightIconSrc}
            alt="Next"
            width={37}
            height={22}
            className="w-[18px] h-[20px] md:w-[42px] md:h-[35px]"
          />
        </button>
      </div>

      <p className="md:hidden mt-[50px] font-helvetica mx-auto font-medium text-[10px] text-black md:text-[16px] text-center w-[90%] md:w-[67%]">
        Our engagement rings embody over a decade of expertise and uncompromising quality, specific only to Hatton Garden
        Jewellers & Craftsmen.
      </p>
    </div>
  );
};

export default Engagement;
