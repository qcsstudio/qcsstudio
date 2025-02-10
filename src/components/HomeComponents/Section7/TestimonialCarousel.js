"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import redCircle from "../../../../public/images/redCircle.png";
import Image from "next/image";
import blueBg from "../../../../public/images/bluebg.png";
import Stu1 from '../../../../public/images/Stu1.png'  
import Stu2 from '../../../../public/images/Stu2.png'
import Stu3 from '../../../../public/images/Stu3.png'

const testimonials = [
  {
    id: 1,
    image:Stu1,
    name: "Vishal Verma",
    role: "Software Developer",
    content:
      "I was hesitant to switch careers, but QCS made the transition seamless. The program gave me the practical experience and portfolio I needed to land a UI/UX design role at a top company.",
    rating: 5, 
  },
  {
    id: 2,
    image:Stu2,
    name: "Amit Kumar",
    role: "Digital Marketing",
    content:
      "QCS gave me the confidence and skills to land my dream job as a front-end developer. The hands-on projects and mentorship were invaluable.",
    rating: 4,
  },
  {
    id: 3,
    image:Stu3,
    name: "Aman Kashyap",
    role: "UX Designer",
    content:
      "QCS taught me the latest digital marketing strategies and tools, and I'm now confidently managing campaigns for multiple clients.",
    rating: 4, 
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      <div className="testimonial bg-[#EFFAFF] sm:px-12 md:px-24  px-5 lg:px-36">
        <div className="flex flex-col gap-y-3 ml-[5%] pt-[2%]">
          <Image
            className="absolute -right-0 -bottom-[615%] z-10"
            src={redCircle}
            alt=""
            width={150}
            height={150}
          />
          <span className="text-[#527CBD] text-medium">
            Hear from Our Students
          </span>
          <h1 className="text-[#032263] text-2xl lg:text-4xl font-[800] uppercase">
            Success Stories: Real Results, Real Impact
          </h1>
          <p className="w-[100%]  lg:w-[70%] text-[#051332] text-sm">
            Each student’s success is a testament to our commitment to providing
            a transformative, career-focused education. Each testimonial
            reflects our commitment to empowering students with the skills,
            confidence, and industry-relevant knowledge they need to excel. By
            sharing these stories, we aim to inspire prospective students to see
            what’s possible when they choose QuantumCrafters Studio.
          </p>
          <div>
            <Image
              className="flex  absolute -left-[1%] bottom-[-662%] z-10"
              alt="blue"
              src={blueBg.src}
              height={150}
              width={150}
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#EFFAFF] relative p-[6%] pt-12">
        <motion.div
          className=" rounded-lg p-6 flex items-center transition-transform duration-500 "
          key={currentIndex}
        >
          <div className=" flex flex-col lg:flex-row text-center lg:text-left items-center  bg-[#EFFAFF]">
            <motion.img
              src={testimonials[currentIndex].image.src}
              alt={testimonials[currentIndex].name}
              className="w-72 h-72 rounded-full  mr-4 border-[20px]  border-slate-400  ml-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="flex flex-col gap-y-3 ml-4">
              <motion.p
                className="text-gray-700 py-3 lg:py-0 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {testimonials[currentIndex].content}
              </motion.p>
              <h3 className="text-2xl font-semibold text-[#527CBD]">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {testimonials[currentIndex].role}
              </p>
              {/* Stars rating */}
              <div className="flex justify-center lg:justify-start items-center text-2xl">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < testimonials[currentIndex].rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute  lg:-top-20 top-5 right-[10%] z-10 flex space-x-2 ">
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 text-white bg-[#051332] flex items-center justify-center "
          >
            &#8592;
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 text-white bg-[#051332] flex items-center justify-center"
          >
            &#8594;
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default TestimonialCarousel;
