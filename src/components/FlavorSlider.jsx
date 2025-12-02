"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const flavorlists = [
    {
      name: "Chocolate Milk",
      color: "brown",
      rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
      name: "Stawberry Milk",
      color: "red",
      rotation: "md:rotate-[8deg] rotate-0",
    },
    {
      name: "Cookies & Cream",
      color: "blue",
      rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
      name: "Peanut Butter Chocolate",
      color: "orange",
      rotation: "md:rotate-[8deg] rotate-0",
    },
    {
      name: "Vanilla Milkshake",
      color: "white",
      rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
      name: "Max Chocolate Milk",
      color: "black",
      rotation: "md:rotate-[8deg] rotate-0",
    },
  ];

  const sliderRef=useRef()
  const isTablet=useMediaQuery({
    query:'(max-width: 1024px'
  })

  useGSAP(()=>{
   const scrollAmount= sliderRef.current.scrollWidth - window.innerWidth;
  console.log("scroll", scrollAmount);
   if(!isTablet){
     const tl= gsap.timeline({
      scrollTrigger:{
        trigger:".flavor-section",
        start:"2% top",
        end:`+=${scrollAmount +1500}px`,
        scrub:true,
        // markers:true,
        pin:true
      }
    })
    tl.to(".flavor-section",{
      x:`-${scrollAmount +700}px`,
      ease:"power1.inOut"
    })
   }
  })

  return (
    <div ref={sliderRef}  className="slider-wrapper bg-[#f7ddcc] lg:h-dvh min-h-dvh md:min-h-fit w-full mt-0 md:mt-20 xl:mt-0">
      <div className=" flavors  h-full w-full flex md:flex-row flex-col items-center 2xl:gap-72 lg:gap-52 md:gap-24 gap-7 flex-nowrap">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none `}
          >
            <Image
              src={`/images/${flavor.color}-bg.svg`}
              alt="flavor name"
              width={500}
              height={500}
              className="absolute bottom-0"
            />

            <Image
              src={`/images/${flavor.color}-drink.webp`}
              alt="flavor drink"
              width={200}
              height={200}
              className="drinks absolute left-1/2 -translate-x-1/2 bottom-0 md:h-80 h-80"
            />

            <Image
              src={`/images/${flavor.color}-elements.webp`}
              alt="flavor elements"
              width={200}
              height={200}
              className="elements  absolute md:top-32 md:bottom-auto bottom-10 w-[500px]"
            />

            <h1 className="absolute md:bottom-10 md:left-10 bottom-5 left-5 text-milk md:text-4xl text-3xl font-semibold uppercase tracking-tighter">{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
