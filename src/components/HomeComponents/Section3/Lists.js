"use client";
import Image from "next/image";
import React, { useState } from "react";
import imgS3 from "../../../../public/images/imgS3.png";
import aero from "../../../../public/images/aero.png";
import data from "../../../../public/images/data.png";
import marketing from "../../../../public/images/marketing.png";
import Network from "../../../../public/images/Network.png";
import UXDesign from "../../../../public/images/UX-Design.png";
import coures from "../../../../public/images/Course.png";
import circle from "../../../../public/images/semiCircle.png";
import Link from "next/link";

const courses = [
  {
    name: "Web Development",
    img: imgS3,
    des: "From stunning websites to powerful web applications, master the art of coding and build the digital future",
  },
  {
    name: "UI/UX Design",
    img: UXDesign,
    des: "Craft intuitive and user-friendly experiences that delight users and drive results. Become a design thinker and problem-solver",
  },
  {
    name: "Digital Marketing",
    img: marketing,
    des: "Master the strategies and tools to reach your audience, build brand awareness, and drive business growth in the digital world.",
  },
  {
    name: "Network & Security",
    img: Network,
    des: "Safeguard the digital world from cyber threats. Become a cybersecurity expert and build a rewarding career protecting valuable data.",
  },
  {
    name: "Data Science & AI",
    img: data,
    des: "Harness the power of data to unlock insights, solve complex problems, and drive innovation. Become a data-driven decision-maker.",
  },
];

const HighlightHeader = () => (
  <div className="flex flex-col gap-2 md:text-left py-10 lg:py-20 max-w-lg">
    <span className="text-blue-700 text-lg md:text-xl">What we have</span>
    <h2 className="text-xl lg:text-4xl md:text-3xl uppercase text-[#032263] font-bold">
      Course Highlights
    </h2>
    <p className="mt-2 text-2xl text-gray-600">
      Our Programs: Your Pathway to Tech Success
    </p>
  </div>
);

const ListItem = ({ text, onClick, isActive }) => (
  <li
    className={`relative flex items-center cursor-pointer pl-10cursor-pointer text-lg sm:text-xl md:text-2xl transition-all duration-300 ${isActive ? "text-black font-bold pl-[60px] text-4xl" : "text-gray-400 hover:text-black"
      }`}
    onClick={onClick}
  >
    {isActive && (
      <div className="absolute left-0 w-[40px] h-[2px] bg-gradient-to-r from-lime-400 to-blue-500"></div>
    )}
    {text}
  </li>
);

const CourseList = ({ selectedCourse, setSelectedCourse }) => (
  <ul className="flex flex-col py-10 lg:py-0 gap-6 md:gap-8">
    {courses.map((course) => (
      <ListItem
        key={course.name}
        text={course.name}
        onClick={() => setSelectedCourse(course)}
        isActive={selectedCourse.name === course.name}
      />
    ))}
  </ul>
);

const capitalizeAndBoldFirstWord = (text) => {
  if (!text) return text;


  const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);

  const words = capitalizedText.split('');

  const transformedText = `<strong class="aplha">${words[0]}</strong> ${words.slice(1).join('')}`;

  return transformedText;
};



const PhaseTwo = ({ selectedCourse }) => (
  <div className="w-full flex flex-col items-start justify-start lg:items-center relative bg-[#527CBD] lg:p-6 p-3 md:p-10 ">
    <Image
      src={circle}
      alt="circle background"
      className="absolute top-0 -right-10 w-[150px] md:w-[200px] h-[150px] md:h-[200px]"
    />
    <div className='flex flex-col items-start gap-5 lg:gap-16 '>
    <div className="p-4 text-left md:text-left  text-white bg-opacity-80 text-sm lg:text-lg tracking-wide rounded-lg"
     dangerouslySetInnerHTML={{ __html: capitalizeAndBoldFirstWord(selectedCourse.des) }}
    >
    </div>
     <Image className='absolute left-56 top-24' src='/images/aero.png' height={130} width={130} alt='aero'></Image>
    <Link href={'/enroll-now'} className="">
      <button className="text-white flex py-2 px-4  lg:py-3 lg:px-10 text-lg lg:text-xl  items-center  justify-center  border rounded-xl bg-gradient-to-r from-[#cce973] to-[#46d3c1]">
        Enroll Now
      </button>
    </Link>
    </div>



    <div className="relative w-full md:w-[500px] lg:w-[600px] h-[250px] md:h-[400px] lg:h-[450px] mt-6 flex items-center justify-center">
      <Image
        src={selectedCourse.img}
        alt={selectedCourse.name}
        fill
        className="object-contain transition-transform duration-500 ease-in-out transform hover:scale-110"
      />
    </div>
  </div>
);

const Lists = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <div className="bg-white relative flex flex-col lg:grid lg:grid-cols-2 justify-center mx-auto items-start lg:items-start px-3  lg:px-16">
      <Image
        src={coures}
        alt="course icon"
        height={60}
        width={50}
        className="absolute hidden lg:block top-1/2 -translate-y-1/2 right-4 md:right-10"
      />

      <div className="w-full flex flex-col items-start justify-center lg:items-start">
        <HighlightHeader />
        <CourseList
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />
      </div>

      <PhaseTwo selectedCourse={selectedCourse} />
    </div>
  );
};

export default Lists;
