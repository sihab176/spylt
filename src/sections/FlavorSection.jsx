import FlavorSlider from "@/components/FlavorSlider";
import FlavorTitle from "@/components/FlavorTitle";
import React from "react";

const FlavorSection = () => {
  return (
    <section className="flavor-section bg-[#f7ddcc] w-full">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[50%] flex-none h-80 lg:h-full  xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="h-full ">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
