"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import blueBg from "../../../../public/images/blueBg.png";
import redCircle from "../../../../public/images/redCircle.png";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/originals/e7/f9/d3/e7f9d3388abf5920c7a84a86ad9e9cbc.jpg",
    name: "John Doe",
    role: "Software Engineer",
    content:
      "I was hesitant to switch careers, but Takshashila Labs made the transition seamless. The program gave me the practical experience and portfolio I needed to land a UI/UX design role at a top company.",
    rating: 5, // Rating out of 5
  },
  {
    id: 2,
    image:
      "https://designimages.appypie.com/profilepicture/profilepicture-2-portrait-head.jpg",
    name: "Jane Smith",
    role: "Product Manager",
    content:
      "I was hesitant to switch careers, but Takshashila Labs made the transition seamless. The program gave me the practical experience and portfolio I needed to land a UI/UX design role at a top company.",
    rating: 4, // Rating out of 5
  },
  {
    id: 3,
    image:
      "https://pics.craiyon.com/2023-10-25/b65f72d6d11a48c1bc560059cc36e31f.webp",
    name: "Alex Johnson",
    role: "UX Designer",
    content:
      "I was hesitant to switch careers, but Takshashila Labs made the transition seamless. The program gave me the practical experience and portfolio I needed to land a UI/UX design role at a top company.",
    rating: 4, // Rating out of 5
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/originals/4f/51/76/4f5176cf66df79e26c35469ad178eddd.jpg",
    name: "Alex Johnson",
    role: "UX Designer",
    content:
      "I was hesitant to switch careers, but Takshashila Labs made the transition seamless. The program gave me the practical experience and portfolio I needed to land a UI/UX design role at a top company.",
    rating: 5, // Rating out of 5
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
          <h1 className="text-[#032263] text-3xl font-bold uppercase">
            Testimonials & Success
          </h1>
          <p className="w-[100%]  xl:w-[43%] text-[#051332] text-sm">
            Feature a few powerful testimonials (even if hypothetical initially)
            from students who have benefited from similar programs or have
            achieved success in the tech industry
          </p>
          <div>
            <Image
              className="flex absolute -left-[1%] bottom-[-662%] z-10"
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
          className=" rounded-lg p-6 flex items-center transition-transform duration-500"
          key={currentIndex}
        >
          <div className=" flex flex-col lg:flex-row text-center lg:text-left items-center  bg-[#EFFAFF]">
            <motion.img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-72 h-72 rounded-full border-2 border-gray-300 mr-4 ml-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="flex flex-col gap-y-3 ml-4">
              <motion.p
                className="text-gray-700 italic"
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
        <div className="absolute -top-20  right-[10%] z-10 flex space-x-2 ">
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 text-white bg-[#051332] flex items-center justify-center rounded-full"
          >
            &#8592;
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 text-white bg-[#051332] flex items-center justify-center rounded-full"
          >
            &#8594;
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default TestimonialCarousel;
