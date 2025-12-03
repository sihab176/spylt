import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const cards = [
  {
    src: "/videos/f1.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: "/images/p1.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f2.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: "/images/p2.png",
  },
  {
    src: "/videos/f3.mp4",
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: "/images/p3.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f4.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: "/images/p4.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f5.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: "/images/p5.png",
  },
  {
    src: "/videos/f6.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: "/images/p6.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f7.mp4",
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: "/images/p7.png",
    translation: "translate-y-[10%]",
  },
];
const TestimonialSection = () => {
  const vdRef = useRef([]);

  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: "-120vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "150% top",
        scrub: true,
        // markers: true,
      },
    });
    tl.to(".testimonials-section .first-title", {
      xPercent: 170,
    })
      .to(".testimonials-section .sec-title", {
        xPercent: 35,
      },"<")
      .to(".testimonials-section .third-title", {
        xPercent: -50,
      },"<");

      const pinTL= gsap.timeline({
        scrollTrigger:{
          trigger:".testimonials-section",
          start:"10% top",
          end:"150% top",
          scrub: true,
          pin:true,
          markers: true
        }
      })

      pinTL.from(".vd-card",{
        yPercent:150,
        stagger:0.2,
        ease:"power1.inOut"
      })

  });

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    video.play();
    console.log("video", video);
  };
  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
    console.log("video", video);
  };

  return (
    <section className="testimonials-section bg-white relative w-full h-[120dvh]">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title uppercase text-[12.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] font-bold">
          what s
        </h1>
        <h1 className="text-amber-800 sec-title uppercase text-[12.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] font-bold">
          Everyone
        </h1>
        <h1 className="text-black third-title uppercase text-[12.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] font-bold">
          Talking
        </h1>
      </div>

      {/* video section */}
      <div className="pin-box flex items-center justify-center w-full ps-52 absolute md:bottom-32 bottom-[50vh]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation} md:w-80 w-80 flex-none md:rounded-[2vw] rounded-3xl -ms-34 overflow-hidden md:relative absolute border-[.5vw] border-amber-900`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
