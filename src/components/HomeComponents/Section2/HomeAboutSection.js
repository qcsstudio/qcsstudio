"use client";
import React from "react";
import bgGraphic from "../../../../public/images/home_about.png";
import arrow from "../../../../public/images/arrow.png";
import Image from "next/image";
import HomeAbout from "../../../../public/images/HomeAbout.png";
import { motion } from "framer-motion";
import homeheader from "../../../../public/images/home-header.png";
import Link from "next/link";

function HomeAboutSection() {
  return (
    <div className="w-full flex flex-col relative mx-auto justify-center border border-b-[1.4px] border-black ">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Section */}
        <div className="w-full flex flex-col justify-between bg-white">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="relative w-full overflow-hidden py-[60px] sm:py-[100px] border-b-[1.4px] border-black">
              <Image
                className="absolute top-0 object-contain w-[150px] sm:w-[200px] h-[250px] sm:h-[300px]"
                src={bgGraphic}
                alt="Background Graphic"
              />
              <Image
                src={arrow}
                alt="Arrow"
                className="absolute top-0 -right-[2rem] sm:-right-[4rem] w-[180px] sm:w-[270px] object-contain"
              />
              <div className="text-center sm:text-left lg:pl-16 px-6  w-full   my-10 lg:my-28">

                <h6 className="text-[#527CBD] lg:text-2xl text-[20px] py-2 font-semibold">
                  Who we are
                </h6>
                <h2 className="text-[#032263] lg:text-[2vw] text-[20px] z-20 relative leading-normal  font-bold">
                  &quot;Transforming Passion into Profession &quot; Welcome to
                  QuantumCrafters Studio, where learning meets opportunity. We
                  believe that every student’s journey starts with passion, and
                  we are here to turn that passion into a thriving tech career.
                </h2>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="py-20 lg:px-16 px-6 text-gray-600 text-center sm:text-left h-full flex flex-col gap-2 items-center justify-around ">
            <div className="py-0">
              <p className="text-2xl text-[#212529] font-bold">
                Our Values: Educate | Empower | Elevate
              </p>
              <p className="text-3xl sm:text-4xl font-bold"></p>
            </div>
            <div className="bg-white  " >
              <ul className="list-disc list-inside space-y-2 text-[#4E535CE5] text-sm sm:text-base ">
                <li className="flex flex-col justify-start lg:block items-start">
                  <span className="font-bold text-[#212529]">Educate –</span ><span> Transforming learning into action with real-world knowledge and in-demand skills for the future.</span>
                </li>
                <li className="flex flex-col justify-start lg:block items-start">
                  <span className="font-bold text-[#212529]">Empower –</span> <span>Inspiring confidence and growth through personalized mentorship that unlocks your true potential.</span>
                </li>
                <li className="flex flex-col justify-start lg:block items-start">
                  <span className="font-bold text-[#212529]">Elevate –</span> <span> Equipping you with the skills and support to achieve success and thrive in your dream career.</span>
                </li>
              </ul>
            </div>

            <p className="text-[#527CBD] text-sm lg:text-lg py-6 ">
              Turn Passion into Profession – Join  QuantumCrafters Studio Now!
            </p>
           
            <Link href={'enroll-now'}>
              <button className="rounded-lg w-full p-4    text-sm bg-[#032263] hover:bg-gradient-to-r hover:from-[#cce973] hover:to-[#46d3c1] text-white lg:text-lg font-semibold transition-transform">
                ENROLL NOW
              </button>
            </Link>

          </div>
        </div>

        {/* Right Section */}
        <div className="w-full relative flex flex-col justify-between ">
          <motion.div
            className="absolute top-[5%] right-0 hidden lg:block"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <Image
              src={homeheader}
              width={400} // Increased size for bigger screens
              height={400}
              className=" h-auto"
              alt="Header Image"
            />
          </motion.div>

          <div className="col-span-2 bg-white  lg:border-l-[1.4px] border-black z-[1] flex flex-col lg:px-0 pt-5 gap-5 justify-between h-full   ">
           <div className="px-6 lg:px-12 flex flex-col gap-5 ">
            <h3 className="text-[#527CBD] text-2xl sm:text-3xl font-bold mt-6 sm:mt-8 text-center sm:text-left">
              QuantumCrafters Studio
            </h3>

            <div className="text-[#4E535CE5] flex flex-col gap-4  text-sm sm:text-base">
              <div className="font-bold text-lg">Our Vision: Unlocking Passions, Empowering Futures</div>

              <div className=" sm:text-left leading-7 tracking-wide ">
                At <span className='font-bold'> QuantumCrafters Studio,</span> our vision is to close the gap between  <span className='font-bold'> academic learning </span> and the <span className='font-bold'>practical skills </span> needed in the tech industry. By understanding your <span className='font-bold'>unique passions, interests,</span>  and <span className='font-bold'>career goals,</span> we focus on what excites and motivates you. Through <span className='font-bold'> real-world applications</span> and <span className='font-bold'> hands-on training,</span> we are committed to cultivating tech professionals who are prepared to <span className='font-bold'> lead</span> and <span className='font-bold'>innovate</span>
              </div>
            </div>

            <div className="w-full  h-[1px] bg-black opacity-25"></div>

            <div className="text-[#4E535CE5] flex flex-col mt-2  text-sm sm:text-base">
              <div className="font-bold text-lg tracking-wide">
                Our Mission: Providing Hands-On, Personalized Training that Transforms Passion into Profession
              </div>
              <br />
              <div className=" tracking-wider text-md  ">
                Our mission at<span className='font-bold'> QuantumCrafters Studio,</span>is to empower<span className='font-bold'>  aspiring IT professionals</span> by offering<span className='font-bold'>career-focused education </span> tailored to their <span className='font-bold'> interests,</span>  and <span className='font-bold'>strengths</span> We begin by discovering each student’s  <span className='font-bold'>  unique passion</span> and guiding them to a course aligned with their goals. With a steadfast commitment to  <span className='font-bold'> Educate, Empower,</span> and <span className='font-bold'>Elevate</span> we provide the
                <span className='font-bold'>mentorship</span> and <span className='font-bold'>skills training </span> needed to turn passion into a
                <span  className='font-bold'>thriving profession.</span>
              </div>
            </div>
            </div>
            <div className="w-[full] h-full  relative  lg:h-[100vh]   " >
            <Image
              src={HomeAbout}
              alt="Visual Representation"
              className="w-full h-full object-cover"
              
            />
          </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default HomeAboutSection;
