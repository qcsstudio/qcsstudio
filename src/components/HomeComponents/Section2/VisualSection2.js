import React from 'react';
import HomeAbout from '../../../../public/images/HomeAbout.png';

const VisualRepresentation = () => {
  return (
    <div className="col-span-2 z-[2] bg-gray-100 border border-gray-300 h-[40vh] -mt-[30vh] flex items-center justify-center">
      <img className='h-[60vh] mt-[15%] w-[80vw]' src={HomeAbout.src} alt="Visual Representation" />
    </div>
  );
};

export default VisualRepresentation;
