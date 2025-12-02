"use client";
import ClipPathTitle from "@/components/ClipPathTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60% ",
        end: "20% top",
        scrub: 1,
        markers:true
      },
    });
    revealTl.to(".benefit-section .first-title", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      opacity: 1,
      ease: "circ.out",
    });
    revealTl.to(".benefit-section .second-title", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      opacity: 1,
      ease: "circ.out",
    });
    revealTl.to(".benefit-section .third-title", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      opacity: 1,
      ease: "circ.out",
    });
    revealTl.to(".benefit-section .fourth-title", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      opacity: 1,
      ease: "circ.out",
    });
  });

  return (
    <section className="benefit-section  min-h-dvh bg-[#222123] overflow-hidden relative;">
      <div className="container mx-auto pt-20">
        <div className="col-center flex flex-col justify-center items-center text-white">
          <p className="text-center">
            Unlock the Advantages: <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>

          <div className="mt-20 col-center text-center">
            <ClipPathTitle
              title={"Shelf stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title rotate-3  relative z-10 inline-block"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Protein + Caffeine"}
              color={"#222123"}
              bg={"#faeade"}
              className={
                "second-title rotate-1 md:-translate-y-9 p-8 inline-block"
              }
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Infinitely recyclable"}
              color={"#faeade"}
              bg={"#7F3B2D"}
              className={
                "third-title rotate-3 md:-translate-y-18  relative z-10 inline-block"
              }
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Lactose free"}
              color={"#2E2D2F"}
              bg={"#FED775"}
              className={
                "fourth-title rotate-[-5deg] md:-translate-y-20 inline-block"
              }
              borderColor={"#222123"}
            />
          </div>

          <div className="md:mt-0 mt-10 mb-5">
            <p>And much more ...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box h-96"></div>
    </section>
  );
};

export default BenefitSection;
