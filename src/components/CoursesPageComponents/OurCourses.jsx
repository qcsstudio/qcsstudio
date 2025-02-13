"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'


const OurCourses = () => {
  // Animation variants
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const courseItemAnimation = {
    hover: { scale: 1.05 },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative py-[10rem]  flex justify-center items-center">
      {/* Decorative images with animations */}
      <motion.div
        className="absolute top-8 right-20 hidden md:flex lg:flex"
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src="/images/groupkite (1).png"
          alt=""
          height={200}
          width={200}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="flex flex-col py-20 lg:px-5 md:px-[1rem] xs:px-[1rem] justify-between  gap-5 items-center lg:w-[70%] md:w-[80%]  xs:w-[90%]  bg-[#b6e9ff]/20  shadow-lg border border-[#0096E3] rounded-[1rem]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="font-bold text-[#0D154B] lg:text-[2.7rem] md:text-[30px] text-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          OUR COURSES
        </motion.h1>

        

        <div className="coursesContainer w-[100%] lg:h-[50vh] md:h-[40vh] xs:h-[40vh] relative ">

          <div className={`innerContainer lg:w-[35%] md:w-[30%] sm:w-[35%] xs:w-[40%]   flex justify-center items-center py-[2rem] bg-[#D4F0FD] rounded-[1rem] border border-[#ffffff] font-medium absolute top-[0%] md:left-[32%] sm:left-[28%] xs:left-[35%] sm:text-[1.2rem] xs:text-[.8rem]`}>Web Development</div>

          <div className={`innerContainer lg:w-[35%] md:w-[30%] sm:w-[35%] xs:w-[40%] flex justify-center items-center py-[2rem] bg-[#D4F0FD] rounded-[1rem] border border-[#ffffff] font-medium absolute top-[38%] right-[0%] sm:text-[1.2rem] xs:text-[.8rem]`}>Web Development</div>

          <div className={`innerContainer lg:w-[35%] md:w-[30%] sm:w-[35%] xs:w-[40%] flex justify-center items-center py-[2rem] bg-[#D4F0FD] rounded-[1rem] border border-[#ffffff] font-medium absolute bottom-[4%] right-[7%] sm:text-[1.2rem] xs:text-[.8rem]`}>Web Development</div>

          <div className={`innerContainer lg:w-[35%] md:w-[30%] sm:w-[35%] xs:w-[40%] flex justify-center items-center py-[2rem] bg-[#D4F0FD] rounded-[1rem] border border-[#ffffff] font-medium absolute bottom-[4%] left-[7%] sm:text-[1.2rem] xs:text-[.8rem]`}>Web Development</div>

          <div className={`innerContainer lg:w-[35%] md:w-[30%] sm:w-[35%] xs:w-[40%] flex justify-center items-center py-[2rem] bg-[#D4F0FD] rounded-[1rem] border border-[#ffffff] font-medium absolute top-[38%] left-[0%] sm:text-[1.2rem] xs:text-[.8rem]`}>Web Development</div>
          
          
        </div>

        {/* Floating bottom image */}
        <motion.div
          className="absolute bottom-8"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/images/groupkite (2).png"
            alt=""
            height={70}
            width={70}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurCourses;
