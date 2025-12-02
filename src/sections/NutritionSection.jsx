"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const nutrientLists = [
  { label: "Potassium", amount: "245mg" },
  { label: "Calcium", amount: "500mg" },
  { label: "Vitamin A", amount: "176mcg" },
  { label: "Vitamin D", amount: "5mcg" },
  { label: "Iron", amount: "1mg" },
];

const NutritionSection = () => {
  const [lists, setLists] = useState(() => nutrientLists);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)", // fixed missing ')'
  });

  useEffect(() => {
    if (isMobile) {
      setLists(nutrientLists.slice(0, 3));
    } else {
      setLists(nutrientLists);
    }
  }, [isMobile]);

  return (
    <section className="nutrition-section overflow-hidden relative h-dvh">
      <Image
        src="/images/slider-dip.png"
        alt="image background"
        width={1200}
        height={80}
        className="w-full h-[100px]"
      />

      <Image
        src="/images/big-img.png"
        alt="phone"
        width={1400}
        height={1400}
        className="big-img w-full absolute object-center"
      />

      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title 2xl:max-w-4xl text-6xl font-bold xl:max-w-2xl md:py-0 py-3 md:pb-5 pb-0 lg:pb-0 md:text-center text-[#513022]">
                It still does
              </h1>
            </div>
            <div className="nutrition-text-scroll rotate-[-4deg] border-[.5vw] border-[#e3d3bc] text-nowrap bg-amber-900 md:-mt-22 -mt-24 place-self-start">
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
                <h2 className="text-milk-yellow text-6xl font-bold">
                  Body Good
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5 right-10 top-30 absolute">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph">
              Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>

        <div className="nutrition-box  absolute md:bottom-16 bottom-5 w-full md:px-0 px-5 ">
          <div className="list-wrapper bg-[#fdebd2] rounded-full border-[.5vw] border-[#e8ddca] mx-auto max-w-7xl md:py-8 py-5 md:px-0 px-5 flex justify-between items-center">
            {lists.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center px-12">
                <div>
                  <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                  <p className="font-paragraph text-sm mt-2">up to</p>
                  <p className="text-2xl md:text-3xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>
                {index !== lists.length - 1 && (
                  <div className="spacer-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
