"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import m1 from "../../../../public/images/m1.png";
import mbg1 from "../../../../public/images/Mbg1.jpg";
import mbg2 from "../../../../public/images/Mbg2.jpg";
import mbg3 from "../../../../public/images/mbg3.jpg";
import mbg4 from "../../../../public/images/mbg4.jpg";
import mbg5 from "../../../../public/images/mbg5.jpg";
import mbg6 from "../../../../public/images/Mbg6.jpg";

const Mentor = () => {
  return (
    <div className="max-w-[1440px] mx-auto mentor relative w-full  flex justify-center items-center px-6 ">
      {/* Left Side Images */}
      <div className="absolute left-[-60] max-lg:-[1080px]:left-4 top-[75%] transform -translate-y-1/2 flex flex-col gap-14">
        <Image
          height={60}
          width={60}
          alt="mentor-left-1"
          src={mbg4.src}
          className="self-start rounded-2xl left-20 xl:ml-[450%] lg:ml-[200%] animate-scale-pulse hidden lg:block"
        />

        <Image
          height={90}
          width={90}
          alt="mentor-left-2"
          src={mbg1.src}
          className="self-center mt-[-20px] md:ml-[200%] xl:ml-[450%] rounded-2xl animate-scale-pulse hidden lg:block"
        />
        <Image
          height={60}
          width={60}
          alt="mentor-left-3"
          src={mbg2.src}
          className="self-start mt-0 rounded-2xl md:ml-[30%] xl:ml-[450%] lg:ml-[200%] animate-scale-pulse hidden lg:block"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center text-center gap-5 pt-5 ">
        <h1 className="text-[2rem] lg:text-[3rem] -m-5 mt-2 bg-gradient-to-r from-green-500 via-green-300 to-blue-500 bg-clip-text text-transparent text-4xl font-extrabold uppercase ">
          Expert Mentors
        </h1>
        <h3 className="lg:text-4xl ltext-3xl font-semibold text-[#032263] tracking-wider">
          From the Industry
        </h3>
        <div>
        <p className="leading-tight text-sm text-[#424242]">
          Our instructors aren not just teachers; they are seasoned
          professionals who bring years of industry experience to the classroom.
        </p><span className="leading-tight text-sm text-[#424242]">
          They all guide you, inspire you, and help you navigate the challenges
          of the tech world.
        </span>
        </div>
        
        <button className="bg-[#112E58]  text-white w-[10rem] h-[2rem] rounded-lg">
          Enroll Now
        </button>
        <Image height={400} width={500} alt="mentor-main" src={m1.src} />
      </div>

      {/* Right Side Images */}
      <div className="absolute right-0 top-[70%] transform -translate-y-1/2 flex flex-col gap-20">
        <Image
          height={90}
          width={90}
          alt="mentor-right-1"
          src={mbg6.src}
          className="self-end rounded-2xl  md:mr-[30%]  xl:mr-[350%] animate-scale-pulse hidden lg:block"
        />
        <Image
          height={60}
          width={60}
          alt="mentor-right-2"
          src={mbg5.src}
          className="self-center mt-[-20px] md:mr-[200%] xl:mr-[450%] rounded-2xl animate-scale-pulse hidden lg:block"
        />
        <Image
          height={90}
          width={90}
          alt="mentor-right-3"
          src={mbg3.src}
          className="self-end rounded-2xl  md:mr-[30%]  xl:mr-[350%]  animate-scale-pulse hidden lg:block"   
        />
      </div>
    </div>
  );
};

export default Mentor;  