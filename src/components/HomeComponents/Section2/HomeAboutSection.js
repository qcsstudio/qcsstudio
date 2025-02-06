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
    <div className="w-full flex flex-col">
      <div className="flex w-full sm:px-12 md:px-24  px-5 lg:px-36 ">
        <div className="w-[45%]">
          <div className=" bg-white  flex flex-col items-center justify-center">
            <div className="relative w-full overflow-hidden py-[100px] border-b-[1.4px] border-black">
              <Image
                className="absolute top-0 object-contain w-[200px] h-[300px] "
                src={bgGraphic}
                alt="Background Graphic"
              />
              <Image
                src={arrow}
                alt="Arrow"
                className="absolute top-0 -right-[4rem] w-[270px] object-contain "
              />
              <div className="">
                <h6 className="text-[#527CBD] text-lg py-2 font-semibold">
                  Who we are
                </h6>
                <h2 className="text-[#032263] text-[37px] leading-[43px] font-bold relative z-10 ">
                  &quot;Transforming Passion into Profession &quot; Welcome to
                  QuantumCrafters Studio, where learning meets opportunity. We
                  believe that every student’s journey starts with passion, and
                  we are here to turn that passion into a thriving tech career.
                </h2>
              </div>
            </div>
          </div>

          <div className=" py-[20px] text-gray-600">
            <div className="py-[20px]">
              <p className="text-4xl font-bold  ">
                Our Values: Educate | Empower |
              </p>
              <p className="text-4xl font-bold ">Elevate</p>
            </div>
            <div className="bg-white p-6">
              <ul className="list-disc list-inside space-y-2 text-[#4E535CE5]">
                <li>
                  <span className="font-bold text-black">Educate –</span>{" "}
                  Transforming learning into action with real-world knowledge
                  and in-demand skills for the future.
                </li>
                <li>
                  <span className="font-bold text-black">Empower –</span>{" "}
                  Inspiring confidence and growth through personalized
                  mentorship that unlocks your true potential.
                </li>
                <li>
                  <span className="font-bold text-black">Elevate –</span>{" "}
                  Equipping you with the skills and support to achieve success
                  and thrive in your dream career.
                </li>
              </ul>
            </div>

            <p className="text-[#527CBD]  text-2xl py-[10px]">
              Turn Passion into Profession – Join
            </p>
            <p className="text-[#527CBD] text-2xl pb-[10px]">
              QuantumCrafters Studio Now!
            </p>
            <button className="rounded-lg w-full sm:w-[220px] h-[50px] sm:h-[55px] bg-[#032263]  hover:bg-gradient-to-r hover:from-[#cce973] hover:to-[#46d3c1] text-white text-lg font-semibold  transition-transform">
              ENROLL NOW
            </button>
          </div>
        </div>
        <div className="w-[55%] relative">
          <motion.div
            className="absolute top-[5%] right-0 lg:block hidden"
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            <Image
              src={homeheader}
              width={300}
              height={300}
              alt="this is image"
            />
          </motion.div>

          <div className="col-span-2 bg-white border-l-[1.4px]  border-black  z-[1] flex flex-col ">
            <div className="px-6">
              <h3 className="text-[#527CBD] text-3xl font-bold mt-8">
                QuantumCrafters Studio
              </h3>
              <div className="text-[#4E535CE5] mt-4  ">
                <span className="font-bold text-xl">
                  Our Vision: Unlocking Passions, Empowering Futures
                </span>
                <br /> <br />
                <div className="">
                  At <span className="font-bold"> QuantumCrafters Studio </span>{" "}
                  , our vision is to close the gap between{" "}
                  <span className="font-bold">academic learning </span> and the{" "}
                  <span className="font-bold"> practical skills </span> needed
                  in the tech industry. By understanding your{" "}
                  <span className="font-bold">unique passions, interests</span>{" "}
                  , and <span> career goals</span> , we focus on what excites
                  and motivates you. Through{" "}
                  <span className="font-bold">real-world applications </span>{" "}
                  and <span className="font-bold">hands-on training</span>, we
                  are committed to cultivating tech professionals who are
                  prepared to <span className="font-bold">lead </span> and{" "}
                  <span className="font-bold"> innovate</span>.
                </div>
              </div>

              <div className="w-[100%] mx-auto my-[10px] h-[1px] bg-black opacity-25"></div>

              <div className="text-[#4E535CE5] ">
                <div className="font-bold ">
                  Our Mission: Providing Hands-On, Personalized Training that
                  Transforms Passion into Profession
                </div>
                <br />
                <div>
                  Our mission at{" "}
                  <span className="font-bold">QuantumCrafters Studio</span> is
                  to empower{" "}
                  <span className="font-bold">aspiring IT professionals </span>{" "}
                  by offering <span>career-focused education </span> tailored to
                  their <span className="font-bold">interests </span> and{" "}
                  <span className="font-bold"> strengths </span> . We begin by
                  discovering each student’s{" "}
                  <span className="font-bold"> unique passion</span> and guiding
                  them to a course aligned with their goals. With a steadfast
                  commitment to
                  <span className="font-bold">Educate, Empower,</span> and{" "}
                  <span className="font-bold"> Elevate</span> , we provide the
                  <span className="font-bold"> mentorship </span> and{" "}
                  <span className="font-bold"> skills training </span> needed to
                  turn passion into a{" "}
                  <span className="font-bold"> thriving profession. </span>
                </div>
              </div>
              <div className="py-10"></div>
            </div>
            <Image className="" src={HomeAbout} alt="Visual Representation" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutSection;
