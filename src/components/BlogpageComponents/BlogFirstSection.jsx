import React from 'react';
import Image from 'next/image';

const BlogFirstSection = () => {
  return (
    <div className="main relative">
      {/* Background Image */}
      <div className="absolute z-10">
        <Image src="/images/blog-bg-img2.png" height={200} width={200} alt="Background" className="w-32 sm:w-48 md:w-56 lg:w-64 h-auto" />
      </div>

      <div
        style={{ backgroundImage: "url('/images/blog-bg-img.png')"}}
        className="bg-cover bg-center h-[86vh]">
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#020D29] bg-opacity-80 text-white text-center h-[86vh] p-4">
        {/* Title */}
        <div className="text-3xl md:text-4xl lg:text-6xl flex flex-wrap items-center justify-center gap-4 font-bold mb-4">
          <span>THE</span>
          <span className="text-[#C4EF01]">TAKSHASHILA</span>
          <span>TIMES</span>
        </div>

        {/* Description */}
        <div className="mb-6 max-w-2xl md:max-w-4xl text-sm sm:text-base md:text-lg leading-[25px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
        </div>

        {/* Search Box */}
        <div className="flex items-center w-lg max-w-xs sm:max-w-sm md:max-w-md bg-gray-500 rounded-md gap-1 p-1 sm:p-2">
  <Image 
    src="/search.svg" 
    alt="Logo" 
    className="text-white" 
    width={30} 
    height={30} 
  />
  <input
    className="bg-gray-500 text-white border-none w-full px-0 sm:px-0 py-1 sm:py-2 text-sm sm:text-base outline-none placeholder-gray-300 rounded-md"
    type="text"
    placeholder="Search"
  />
  <button className="bg-[#C4EF01] hover:bg-green-500 w-auto px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-md shrink-0">
    Search
  </button>
</div>


      </div>

      {/* Floating Images */}
      <div className="absolute z-10 bottom-3 right-20 sm:right-40 md:right-80">
        <Image src="/images/Group.png" height={150} width={150} alt="Group Image" className="w-20 sm:w-28 md:w-36 lg:w-40 h-auto" />
      </div>

      <div className="absolute z-10 bottom-3 right-3">
        <Image src="/images/blog-bg-img-3.png" height={300} width={300} alt="Blog Background" className="w-28 sm:w-40 md:w-48 lg:w-64 h-auto" />
      </div>
    </div>
  );
};

export default BlogFirstSection;
