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
        end:"bottom center",
        scrub: true,
        markers:true
      },
    });
    revealTl.to(".msg-text-scroll", {
      color:"#faeade",
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });
  });

  return (
    <section className="message-content  space-y-28 bg-[#99453a] py-40 text-center text-[#b45447] text-7xl font-bold relative ">
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
    </section>
  );
};

export default MessageSection;
