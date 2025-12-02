
import React from "react";

const FlavorTitle = () => {



  return (
    <div className="general-title translate-y-32  relative 2xl:text-[8.5rem] md:text-7xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw] col-center h-full my-10 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split mb-22">
        <h1 className="text-center">We have 6</h1>
      </div>

      <div
        style={
          {
            //   clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          }
        }
        className="flavor-text-scroll"
      >
        <div className="bg-[#b1874c] border-7 border-[#f7ddcc]  px-4 py-2 inline-block absolute  top-[28%] -rotate-5 left-[30%]">
          <h2 className="text-milk">freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden text-center 2xl:py-0 py-3 second-text-split text-nowrap mb-46">
        <h1>delicious flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
