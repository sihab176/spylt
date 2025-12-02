import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-msg", {
      type: "words",
    });
    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const PrgSplit = SplitText.create(".prg-text", {
      type: "words, lines",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        // markers: true,
        scrub: true,
      },
    });
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
        // markers:true
      },
    });
    revealTl.to(".msg-text-scroll", {
      color: "#faeade",
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const paragraphTl= gsap.timeline({
      scrollTrigger:{
        trigger:".message-content",
        start:"top center",
        // markers:true,
        scrub:true
       
      }
    })
    paragraphTl.to(".prg-text",{
      y:-30,
      opacity:1,
      ease:"power1.inOut",
      duration:1,
      stagger:0.01
    })

    // const tl= gsap.timeline()
    // tl.from(".prg-text",{
    //   y:40,
    //   opacity:0,
    //   duration:3,
    //   delay:1
    // })
  });

  return (
    <section className="message-content h-dvh space-y-28 bg-[#99453a] py-40 text-center text-[#b45447] text-7xl font-bold relative ">
      <h1 className="first-msg">
        STIR UP YOUR <br /> FEARLESS PAST AND{" "}
      </h1>
      <h2
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="msg-text-scroll z-50 bg-[#dfaa60] w-[360px] mx-auto text-nowrap py-7 border-6 border-[#99453a] absolute bottom-[25%] right-[37%] rotate-5 "
      >
        FUEL UP
      </h2>
      <h1 className="second-message text-nowrap ">
        YOUR FUTURE WITH EVERY <br /> GULP OF PERFECT PROTEIN
      </h1>
      
        <p className="prg-text opacity-0 max-w-md mx-auto px-10  overflow-hidden text-sm  text-white absolute left-[36%] bottom-10">
          Rev up your rebel spirit and feed the adventure of life with SPYLT,
          where you’re one chug away from epic nostalgia and fearless fun.
        </p>
 
    </section>
  );
};

export default MessageSection;
