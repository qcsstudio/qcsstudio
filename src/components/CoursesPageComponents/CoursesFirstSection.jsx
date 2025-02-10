'use client'
import React from 'react'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import side2pic from '../../../public/images/slide2pic.png'
import Dm from '../../../public/images/DM.png'
import board from '../../../public/images/seo.png'
import ai from '../../../public/images/coursesfirstsec.png'
import react from '../../../public/images/react.png'
import dj from '../../../public/images/dj.png'
import python from '../../../public/images/python.png'
import Figma from '../../../public/images/figma.png'
import shark from '../../../public/images/wire-shark.png'
import diamond from '../../../public/images/diamond.png'
import graph from '../../../public/images/seo.png'
import google from '../../../public/images/google-ana.png'
import meta from '../../../public/images/meta.png';
import nodejs from '../../../public/images/js.png';
import pythonReal from '../../../public/images/python.png';
import ui from '../../../public/images/ui.png';

const slides = [
  {
    title: "DATA SCIENCE & AI",
    description: "Harness the power of data to unlock insights, solve complex problems, and drive innovation. Become a data-driven decision-maker.",
    buttonText: "EXPLORE DATA SCIENCE & AI",
    image: ai,
    icon: {

        i1: { iconUrl: pythonReal, iconTop: '', iconLeft: '' },
        i2: { iconUrl: shark, iconTop: '', iconLeft: '' },
        i3: { iconUrl: python, iconTop: '', iconLeft: '' }

    }
  },
  {
    title: "WEB DEVELOPMENT",
    description: "From stunning websites to powerful web applications, master the art of coding and build the digital future.",
    buttonText: "EXPLORE WEB DEVELOPMENT",
    image: side2pic,
    icon: {

        i1: { iconUrl: react, iconTop: '', iconLeft: '' },
        i2: { iconUrl: dj, iconTop: '', iconLeft: '' },
        i3: { iconUrl: nodejs, iconTop: '', iconLeft: '' }

    }
  },
  {
    title: "DIGITAL MARKETING",
    description: "From stunning websites to powerful web applications, master the art of coding and build the digital future.",
    buttonText: "EXPLORE DIGITAL MARKETING",
    image: Dm,
    icon: {

        i1: { iconUrl: react, iconTop: '', iconLeft: '' },
        i2: { iconUrl: dj, iconTop: '', iconLeft: '' },
        i3: { iconUrl: graph, iconTop: '', iconLeft: '' }

    }
  },
  {
    title: "UI/UX DESIGNING",
    description: "From stunning websites to powerful web applications, master the art of coding and build the digital future.",
    buttonText: "EXPLORE UI/UX DESIGNING",
    image: board,
    icon: {

        i1: { iconUrl: Figma, iconTop: '', iconLeft: '' },
        i2: { iconUrl: diamond, iconTop: '', iconLeft: '' },
        i3: { iconUrl: ui, iconTop: '', iconLeft: '' }

    }
  },
  {
    title: "NETWORK & NETWORK SECURITY",
    description: "From stunning websites to powerful web applications, master the art of coding and build the digital future.",
    buttonText: "EXPLORE UI/UX DESIGNING",
    image: board,
    icon: {

        i1: { iconUrl: shark, iconTop: '', iconLeft: '' },
        i2: { iconUrl: meta, iconTop: '', iconLeft: '' },
        i3: { iconUrl: google, iconTop: '', iconLeft: '' }

    }
  }
];

const settings = {
  dots: false,
  infinite: true,
  speed: 2500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500, // Fixed typo
};

const Slide = ({ title, description, buttonText, image, icon }) => (
  <div className="h-[70vh] w-full flex items-center justify-center px-10 ">
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between lg:gap-6 md:gap-0 px-5 md:px-10 mt-2 lg:mt-20 relative">
      <div className="flex flex-col gap-10 max-w-lg text-center md:text-left">
        <h1 className="text-white font-bold text-2xl md:text-lg lg:text-[40px] lg:leading-normal">{title}</h1>
        <p className="text-[#C4EF01] text-sm lg:text-[16px] md:text-sm mt-2">{description}</p>
        <button className="mt-2 lg-py-2 lg-px-2 py-1 w-[280px] px-1 md:py-3 md:px-5 md:text-sm text-sm border border-white rounded-lg text-white hover:bg-white hover:text-black transition">
          {buttonText}
        </button>
      </div>
      <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
        <Image className="w-full h-full object-contain" src={image} width={300} height={300} alt="Course Illustration" />
      </div>

      {/* Rendering icons */}
      <div className=" bottom-5 right-5 flex gap-2">
        <Image className=" hidden absolute -bottom-14 left-12 h-[60px] w-[60px] lg:block"  src={icon.i1.iconUrl} width={40} height={40} alt="Icon 1" />
        <Image className=" hidden absolute -bottom-[40px] left-[380px] h-[60px] w-[60px]" src={icon.i2.iconUrl} width={40} height={40} alt="Icon 2" />
        <Image className=" hidden absolute bottom-[80px] left-[500px] h-[60px] w-[60px]" src={icon.i3.iconUrl} width={40} height={40} alt="Icon 3" /> {/* Fixed duplicate i2 */}
      </div>
    </div>
  </div>
);

const CoursesFirstSection = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center"
      style={{ backgroundImage: "url('/images/CoursesBackground.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="w-[75vw] h-[80vh] border rounded-xl"
        style={{ backgroundImage: "url('/images/CoursesBg2.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <Slider {...settings} className='courses'>
          {slides.map((slide, index) => <Slide key={index} {...slide} />)}
        </Slider>
      </div>
    </div>
  );
};

export default CoursesFirstSection;