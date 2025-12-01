"use client"
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/sections/Hero";
import MessageSection from "@/sections/MessageSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function Home() { 

    useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });


  return (
    <div>
      <section >
        <Navbar/>
      </section>
        <div id="smooth-wrapper">
           <div id="smooth-content">
            <Hero/>
         <MessageSection/>
  <div className="h-dvh bg-amber-400">

         </div>
           </div>
        </div>

      
    </div>
  );
}
