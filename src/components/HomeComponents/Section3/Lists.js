import Image from 'next/image';
import React from 'react';
import imgS3 from '../../../../public/images/imgS3.png';
import aero from '../../../../public/images/aero.png';

// Highlight Header Component
const HighlightHeader = () => (
  <div className="mt-[24%] flex flex-col gap-2">
    <span className="text-blue-700">What we have</span>
    <h2 className="text-3xl uppercase flex-nowrap text-[#032263] font-bold">Course Highlights</h2>
    <p className="mt-[2%] text-sm">Our Programs: Your Pathway to Tech Success</p>
  </div>
);

// List Item Component
const ListItem = ({ text }) => (
  <li className="cursor-pointer text-2xl w-[20em] m-2 ml-[10%] mt-2 text-gray-400 hover:text-black">{text}</li>
);

// Course List Component
const CourseList = () => (
  <ul className="flex flex-col gap-10 ml-20 mt-20 ">
    {[
      'Web Development',
      'UI/UX Design',
      'Digital Marketing',
      'Network & Security',
      'Data Science & AI',
    ].map((item, index) => (
      <ListItem key={index} text={item} />
    ))}
  </ul>
);

// Phase Two Component
const PhaseTwo = () => (
  <div className="PhaseTwo mt-[10%] w-[30%] flex flex-col mb-50">
    <p className="relative right-[1☺0px] p-4 text-white">
      <span>F</span>rom stunning websites to powerful web applications, master the art of coding and
      build the digital future.
    </p>
    <button className=" text-white flex h-10 flex items-center m-10 mr-[10%] justify-center w-[40%] border rounded-lg bg-gradient-to-r from-[#cce973] to-[#46d3c1] relative right-[110px]">
      Enroll Now
    </button>
    <div className="w-[550px] h-[350px] mt-5 relative top-[10%] ">
      <Image fill={true} alt="cmp" src={imgS3.src} />
      <Image src={aero.src} alt="" height={80} width={60} className='ml-[50%] -mt-56' />
    </div>
  </div>
);

// Main ListPage Component
const Lists = () => (
  <div className="ListPage flex justify-center space-x-[20vw] mt-60">
    {/* Phase One */}
    <div className="PhaseOne">
      <HighlightHeader />
      <CourseList />
    </div>

    {/* Phase Two */}
    <PhaseTwo />
  </div>
);

export default Lists;
