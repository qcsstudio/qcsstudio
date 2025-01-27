import React from 'react';
import bgGraphic from '../../../../public/images/Mask.jpg';
import arrow from '../../../../public/images/arrow.png';

const AboutSection = () => {
  return (
    <div className="col-span-1 bg-white border border-gray-300 h-[60vh] flex flex-col items-center justify-center">
      <div className="relative w-full">
        <img
          className="object-contain w-[200px] h-[300px]"
          src={bgGraphic.src}
          alt="Background Graphic"
        />
        <div className="absolute top-0 z-10 mt-[20%] ml-[4%]">
          <h6 className="text-[#527CBD] text-lg font-semibold">Who we are</h6>
          <h2 className="text-[#032263] text-4xl font-bold">ABOUT US</h2>
        </div>
        <img
          src={arrow.src}
          alt="Arrow"
          className="absolute -top-[5rem] h-[200px] -right-6 w-[200px] object-contain z-0"
        />
      </div>
    </div>
  );
};

export default AboutSection;
