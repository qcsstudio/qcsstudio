"use client";
import React from "react";
import bgGraphic from "../../../../public/images/home_about.png";
import arrow from "../../../../public/images/arrow.png";
import Image from "next/image";
import HomeAbout from "../../../../public/images/HomeAbout.png";
import { motion } from "framer-motion";
import homeheader from "../../../../public/images/home-header.png";

function HomeAboutSection() {
  return (
    <div className="w-full flex flex-col relative">
      <div className="flex flex-col sm:flex-row w-full sm:px-12 md:px-24 px-5 lg:px-36 items-stretch">
        {/* Left Section */}
        <div className="w-full sm:w-[45%] flex flex-col justify-between bg-white">
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
              <div className="text-center sm:text-left">
                <h6 className="text-[#527CBD] text-lg py-2 font-semibold">
                  Who we are
                </h6>
                <h2 className="text-[#032263] md:text-[2vw] text-[5vw] z-20 relative md:leading-[2vw] leading-[5vw]  font-bold">
                  &quot;Transforming Passion into Profession &quot; Welcome to
                  QuantumCrafters Studio, where learning meets opportunity. We
                  believe that every student’s journey starts with passion, and
                  we are here to turn that passion into a thriving tech career.
                </h2>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="py-[20px] text-gray-600 text-center sm:text-left h-full flex flex-col justify-between">
            <div className="py-[20px]">
              <p className="text-3xl sm:text-4xl font-bold">
                Our Values: Educate | Empower |
              </p>
              <p className="text-3xl sm:text-4xl font-bold">Elevate</p>
            </div>
            <div className="bg-white p-6">
              <ul className="list-disc list-inside space-y-2 text-[#4E535CE5] text-sm sm:text-base">
                <li>
                  <span className="font-bold text-black">Educate –</span> Transforming learning into action with real-world knowledge.
                </li>
                <li>
                  <span className="font-bold text-black">Empower –</span> Inspiring confidence and growth through mentorship.
                </li>
                <li>
                  <span className="font-bold text-black">Elevate –</span> Equipping you with skills for success.
                </li>
              </ul>
            </div>

            <p className="text-[#527CBD] text-xl sm:text-2xl py-[10px]">
              Turn Passion into Profession – Join
            </p>
            <p className="text-[#527CBD] text-xl sm:text-2xl pb-[10px]">
              QuantumCrafters Studio Now!
            </p>
            <button className="rounded-lg w-full sm:w-[220px] h-[50px] sm:h-[55px] bg-[#032263] hover:bg-gradient-to-r hover:from-[#cce973] hover:to-[#46d3c1] text-white text-lg font-semibold transition-transform">
              ENROLL NOW
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-[55%] flex flex-col justify-between relative">
          <motion.div
            className="absolute top-[5%] right-0 hidden lg:block"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <Image
              src={homeheader}
              width={400} // Increased size for bigger screens
              height={400}
              className="max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto"
              alt="Header Image"
            />
          </motion.div>

          <div className="col-span-2 bg-white  md:border-l-[1.4px] border-black z-[1] flex flex-col pb-[40px] md:pb-[0px] lg:p-6 h-full">
            <h3 className="text-[#527CBD] text-2xl sm:text-3xl font-bold mt-6 sm:mt-8 text-center sm:text-left">
              QuantumCrafters Studio
            </h3>

            <div className="text-[#4E535CE5] mt-4 text-sm sm:text-base">
              <span className="font-bold text-lg">Our Vision:</span> Unlocking Passions, Empowering Futures
              <br /> <br />
              <div className=" sm:text-left">
              At QuantumCrafters Studio, our vision is to close the gap between academic learning and the practical skills needed in the tech industry. By understanding your unique passions, interests, and career goals, we focus on what excites and motivates you. Through real-world applications and hands-on training, we are committed to cultivating tech professionals who are prepared to lead and innovate
              </div>
            </div>

            <div className="w-full mx-auto my-[10px] h-[1px] bg-black opacity-25"></div>

            <div className="text-[#4E535CE5] text-sm sm:text-base">
              <div className="font-bold">
                Our Mission: Providing Hands-On, Personalized Training that Transforms Passion into Profession
              </div>
              <br />
              <div>
              Our mission at QuantumCrafters Studio is to empower aspiring IT professionals by offering career-focused education tailored to their interests and strengths. We begin by discovering each student’s unique passion and guiding them to a course aligned with their goals. With a steadfast commitment to Educate, Empower, and Elevate, we provide the mentorship and skills training needed to turn passion into a thriving profession.
              </div>
            </div>

           
            </div>
            <div className="">
              <Image
                src={HomeAbout}
                alt="Visual Representation"
                className="w-full object-contain "
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutSection;
