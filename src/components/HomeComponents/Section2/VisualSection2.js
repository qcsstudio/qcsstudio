import React from 'react';
import HomeAbout from '../../../../public/images/HomeAbout.png';
import Image from 'next/image';

const VisualRepresentation = () => {
  return (
    <div className="col-span-2 z-[2] bg-gray-100 border border-gray-300 h-[40vh] md:h-[40vh] lg:h-[40vh] -mt-[30vh] md:-mt-[30vh] lg:-mt-[30vh] flex items-center justify-center">
      <Image
        className='h-[60vh] md:h-[60vh] lg:h-[60vh] mt-[15%] md:mt-[15%] lg:mt-[15%] w-[80vw] md:w-[80vw] lg:w-[80vw]'
        src={HomeAbout.src}
        alt="Visual Representation"
      />
    </div>
  );
};

export default VisualRepresentation;