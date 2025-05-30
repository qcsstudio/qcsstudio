import React from "react";
import bgGraphic from "../../../../public/images/home_about.png";
import arrow from "../../../../public/images/arrow.png";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="col-span-1 bg-white border border-gray-300 h-[60vh] flex flex-col items-center justify-center">
      <div className="relative w-full">
        <Image
          className=" absolute top-0   object-contain w-[200px] h-[300px] " 
          src={bgGraphic}
          alt="Background Graphic  "
        />
        <div className="z-10 ml-[4%]">
          <h2 className="text-[#527CBD] text-2xl">Who we are</h2>
          <h2 className="text-[#032263] text-4xl leading-10 tracking-wide font-bold">
            &quot;Transforming Passion into Profession&quot; Welcome to
            QuantumCrafters Studio, where learning meets opportunity. We believe
            that every student’s journey starts with passion, and we are here to
            turn that passion into a thriving tech career.
          </h2> 
        </div>
        <Image
          src={arrow}
          alt="Arrow"
          className="absolute top-0 -right-[4rem] w-[200px] object-contain z-0"
        />
      </div>
    </div>
  );
};

export default AboutSection;
