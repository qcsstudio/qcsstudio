import React from 'react';
import Image from 'next/image';

const CUFirstSec = () => {
  return (
    <div 
      className="relative w-full min-h-[75vh] flex justify-center items-center py-10 px-6 lg:px-20 lg:py-36"
      style={{ 
        backgroundImage: `url('/images/CoursesBackground.png')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Background Schoolgirl Image */}
      <Image 
        src='/images/schoolgirl.png' 
        className='absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40' 
        layout='fill' 
        alt=''
      />

      {/* Floating Images */}
      <Image className='absolute top-10 left-10 w-[120px] lg:w-[150px]' src='/images/blog-bg-img2.png' height={150} width={150} alt='' />
      <Image className='absolute top-20 right-32 hidden md:block' src='/images/Group (11).png' height={150} width={150} alt='' />
      <Image className='absolute bottom-5 right-20 w-[150px] lg:w-[200px]' src='/images/blog-bg-img-3.png' height={200} width={200} alt='' />

      {/* Wrapper for Centering */}
      <div className="relative z-20 flex justify-start w-full max-w-[1200px]">
        {/* Content Box */}
        <div className="flex flex-col gap-6 text-left max-w-3xl lg:max-w-3xl">
          <p className="text-[#C4EF01] text-xl lg:text-2xl xl:text-3xl font-bold">Let’s Connect!</p>
          <h1 className="font-bold text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-tight">
            WE’RE HERE TO HELP YOU LAUNCH YOUR TECH CAREER
          </h1>
          <p className='text-white font-thin leading-7 lg:leading-8 tracking-widest  lg:text-lg 2xl:text-xl '>
            Are you ready to turn your passion into a rewarding career? At QuantumCrafters Studio, we’re more than just an institute—we’re your dedicated partners on the path to success. Whether you’re an aspiring tech professional eager to master in-demand skills or someone seeking expert guidance to elevate your career, we’re here to empower you. With our unwavering support, practical resources, and personalized mentorship, your goals are within reach, and your dreams are ready to be realized.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CUFirstSec;
