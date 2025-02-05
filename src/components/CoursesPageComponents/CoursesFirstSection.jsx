'use client'
import React from 'react'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

const CoursesFirstSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
  };

  return (
    <div 
      className="h-[600]  relative flex justify-center items-center "
      style={{ 
        backgroundImage: `url('/images/CoursesBackground.png')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-[90vw]  h-[450] border rounded-xl" 
      style={{ 
        backgroundImage: `url('/images/CoursesBg2.png')`,    
        backgroundPosition:'center', 
        backgroundRepeat: 'no-repeat'
      }}>
        <Image className="absolute z-10 top-0 right-32" src="/images/Rectangle.png" width={100} height={100} alt="rectangle" />
        <Image className="absolute z-10 top-7 right-10" src="/images/Rectangle.png" width={150} height={150} alt="rectangle" />
        <Image className="absolute z-10 bottom-0 right-56 scale-y-[-1]" src="/images/blog-bg-img2.png" width={100} height={100} alt="rectangle" />
        <Image className="absolute z-10 bottom-0 left-32 hidden lg:block  " src="/images/bublebg.png" width={300} height={300} alt="rectangle" />
        <Image className="absolute z-5 top-48 left-15 opacity-25 hidden lg:block "  src="/images/Group (10).png" width={900} height={800} alt="rectangle" />
        <Image className="absolute z-5 top-48 left-15 opacity-15 hidden lg:block scale-y-[-1] "  src="/images/Group (10).png" width={900} height={800} alt="rectangle" />
        
        <Slider {...settings} className='courses' > 
         <div className="h-[70vh] w-full flex items-center justify-center px-10 relative">

  {/* Left Section (Text Content) */}
  <div className="flex flex-col-reverse  lg:flex-row items-center justify-center lg:justify-between gap-6 md:gap-10 px-5 md:px-10 mt-2 lg:mt-20 relative">

{/* Floating Images  */}
<div className="absolute w-full h-full hidden lg:block">
  <Image className="absolute z-10 top-[-10] left-10 w-16 h-16"src="/images/X.png" width={70} height={70} alt="X Icon" />
  <Image className="absolute z-10 top-8 left-80 w-16 h-16"    src="/images/SQL.png" width={70} height={70} alt="SQL Icon" />
  <Image className="absolute z-10 bottom-0 left-56 w-12 h-12" src="/images/bgCourses.png" width={50} height={50} alt="Courses Background" />
  <Image className="absolute z-10 bottom-0 left-96 w-24 h-24" src="/images/MachineLearing.png" width={100} height={100} alt="Machine Learning" />
  <Image className="absolute z-10 bottom-0 left-20 w-12 h-12" src="/images/bg-graph.png" width={50} height={50} alt="Graph Icon" />
</div>

{/* Text Section */}
<div className="max-w-lg text-center md:text-left">
  <h1 className="text-white font-bold text-2xl md:text-lg lg:text-[35px] leading-tight">
    DATA SCIENCE & AI
  </h1>
  <p className="text-[#C4EF01] text-sm md:text-sm mt-2">
    Harness the power of data to unlock insights, solve complex problems, and drive innovation. Become a data-driven decision-maker.
  </p>
  <button className="mt-2 lg-py-2 lg-px-4 py-1 px-1 md:py-3 md:px-5 md:text-sm text-sm border border-white rounded-lg text-white hover:bg-white hover:text-black transition">
    EXPLORE DATA SCIENCE & AI
  </button>
</div>

{/* Image Section */}
<div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
  <Image 
    className="w-full h-full object-contain" 
    src="/images/coursesfirstsec.png" 
    width={300} 
    height={300} 
    alt="Course Illustration" 
  />
</div>


</div>

</div>

          {/* Second Slide */}
          <div className="h-[70vh] w-full flex items-center justify-center px-10 relative">

{/* Left Section (Text Content) */}
<div className="flex flex-col-reverse  lg:flex-row items-center justify-center lg:justify-between gap-6 md:gap-10 px-5 md:px-10 mt-2 lg:mt-20 relative">

{/* Floating Images  */}
<div className="absolute w-full h-full hidden lg:block">
<Image className="absolute z-10 top-[-10] left-10 w-16 h-16"src="/images/X.png" width={70} height={70} alt="X Icon" />
<Image className="absolute z-10 top-8 left-80 w-16 h-16"    src="/images/SQL.png" width={70} height={70} alt="SQL Icon" />
<Image className="absolute z-10 bottom-0 left-56 w-12 h-12" src="/images/bgCourses.png" width={50} height={50} alt="Courses Background" />
<Image className="absolute z-10 bottom-0 left-96 w-24 h-24" src="/images/MachineLearing.png" width={100} height={100} alt="Machine Learning" />
<Image className="absolute z-10 bottom-0 left-20 w-12 h-12" src="/images/bg-graph.png" width={50} height={50} alt="Graph Icon" />
</div>

{/* Text Section */}
<div className="max-w-lg text-center md:text-left">
<h1 className="text-white font-bold text-2xl md:text-lg lg:text-[35px] leading-tight">
 WEB DEVELOPMENT
  
</h1>
<p className="text-[#C4EF01] text-sm md:text-sm mt-2">
From stunning websites to powerful web applications, master the art of coding and build the digital future.</p>
<button className="mt-2 lg-py-2 lg-px-4 py-1 px-1 md:py-3 md:px-5 md:text-sm text-sm border border-white rounded-lg text-white hover:bg-white hover:text-black transition">

EXPLORE WEB DEVELOPMENT                                
</button>
</div>

{/* Image Section */}
<div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
<Image 
  className="w-full h-full object-contain" 
  src="/images/slide2pic.png" 
  width={300} 
  height={300} 
  alt="Course Illustration" 
/>
</div>


</div>

</div>

          {/* Third Slide */}
          <div className="h-[70vh] w-full flex items-center justify-center px-10 relative">

{/* Left Section (Text Content) */}
<div className="flex flex-col-reverse  lg:flex-row items-center justify-center lg:justify-between gap-6 md:gap-10 px-5 md:px-10 mt-2 lg:mt-20 relative">

{/* Floating Images  */}
<div className="absolute w-full h-full hidden lg:block">
<Image className="absolute z-10 top-[-10] left-10 w-16 h-16"src="/images/X.png" width={70} height={70} alt="X Icon" />
<Image className="absolute z-10 top-8 left-80 w-16 h-16"    src="/images/SQL.png" width={70} height={70} alt="SQL Icon" />
<Image className="absolute z-10 bottom-0 left-56 w-12 h-12" src="/images/bgCourses.png" width={50} height={50} alt="Courses Background" />
<Image className="absolute z-10 bottom-0 left-96 w-24 h-24" src="/images/MachineLearing.png" width={100} height={100} alt="Machine Learning" />
<Image className="absolute z-10 bottom-0 left-20 w-12 h-12" src="/images/bg-graph.png" width={50} height={50} alt="Graph Icon" />
</div>

{/* Text Section */}
<div className="max-w-lg text-center md:text-left">
<h1 className="text-white font-bold text-2xl md:text-lg lg:text-[35px] leading-tight">
 WEB DEVELOPMENT
  
</h1>
<p className="text-[#C4EF01] text-sm md:text-sm mt-2">
From stunning websites to powerful web applications, master the art of coding and build the digital future.</p>
<button className="mt-2 lg-py-2 lg-px-4 py-1 px-1 md:py-3 md:px-5 md:text-sm text-sm border border-white rounded-lg text-white hover:bg-white hover:text-black transition">

EXPLORE WEB DEVELOPMENT                                
</button>
</div>

{/* Image Section */}
<div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
<Image 
  className="w-full h-full object-contain" 
  src="/images/slide2pic.png" 
  width={300} 
  height={300} 
  alt="Course Illustration" 
/>
</div>

   {/* Third Slide */}
</div>

</div>

          {/* Fourth Slide */}
          <div className="h-[70vh] w-[1200px] relative">
           
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CoursesFirstSection;
