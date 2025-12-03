"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });
    const tl = gsap.timeline({
      delay: 1,
    });
    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
          ease: "circ.inOut",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 1,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className=" ">
      <div className="hero-container relative  w-screen h-screen overflow-hidden ">
        {isTablet ? (
          <>
            {isMobile && (
              <Image
              width={400}
              height={400}
                alt="mobile-image"
                src="/images/hero-bg.png"
                className="absolute bottom-40 size-full object-cover"
              />
            )}
            <Image
            width={400}
              height={400}
              alt="Tablet"
              src="/images/hero-img.png"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            />
          </>
        ) : (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="hero-content opacity-0 relative z-10 w-full h-full flex flex-col 2xl:justify-center items-center translate-y-10 2xl:pt-0 md:pt-32 pt-24">
          <div className="overflow-hidden">
            <h1 className="hero-title text-amber-950 2xl:text-[8.5rem] md:text-[4.5rem] text-[3.3rem] font-bold uppercase leading-[9vw] tracking-[-.35vw] 2xl:mb-0 ">
              Freaking Delicious
            </h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll rotate-[-4deg] mb-8 border-[.5vw] border-white"
          >
            <div className="bg-amber-900">
              <h1 className=" uppercase 2xl:text-[8.5rem] md:text-[4.5rem] text-[3.3rem] font-semibold text-[#fce1cd] leading-[6vw] tracking-[-.35vw] 2xl:px-[1.2vw] px-3 2xl:pb-[1vw] pb-0 2xl:py-3 py-1">
                Protein + Caffine
              </h1>
            </div>
          </div>
          <h2>
            Live life to the fuliest with SPYLT: shatter berdom and <br />{" "}
            embrace your inner kid with every deliciously smooth chug.
          </h2>
          <button className="bg-yellow-700 px-4 py-3 rounded-full mt-5 text-xl ">
            CHUG A SPYLT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
