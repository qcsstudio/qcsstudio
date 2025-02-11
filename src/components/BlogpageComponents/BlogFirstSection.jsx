import React from "react";
import Image from "next/image";
import SearchBar from "../QuizComponents/SearchBar";

const BlogFirstSection = () => {
  return (
    <div className="main relative">
      {/* Background Image */}
      <div className="absolute z-10">
        <Image
          src="/images/blog-bg-img2.png"
          height={200}
          width={200}
          alt="Background"
          className="w-32 sm:w-48 md:w-56 lg:w-64 h-auto"
        />
      </div>

      <div
        style={{ backgroundImage: "url('/images/blog-bg-img.png')" }}
        className="bg-cover bg-center h-[86vh]"
      ></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#020D29] bg-opacity-80 text-white text-center h-[86vh] p-4">
        {/* Title */}
        <div className="text-3xl md:text-4xl lg:text-6xl flex flex-wrap items-center justify-center gap-4 font-bold mb-4">
          <span>THE</span>
          <span className="text-[#C4EF01]">QCS</span>
          <span>TIMES</span>
        </div>

        {/* Description */}
        <div className="mb-6 max-w-2xl md:max-w-4xl text-sm sm:text-base md:text-lg leading-[25px]">
          Welcome to QCS Times "Your Hub for Tech Insights, Career Guidance, and
          Industry Trends" ✨💻 We believe that knowledge is the cornerstone of
          growth. 📚 That’s why we’ve created QCS Times – a platform dedicated
          to bringing you the latest insights from the tech world, 🔍 career
          guidance to help you excel, 🚀 and tips to bridge the gap between
          academic learning and industry demands. 🎓⚙️ Whether you’re a student,
          👩‍🎓 a budding tech professional, 👨‍💻 or an industry enthusiast, 🌐 our
          blogs are designed to educate, ✏️ empower, 💪 and elevate 🌟 your
          journey.
        </div>

        <div>
          <SearchBar/>
        </div>

      </div>

      <div className="absolute z-10 bottom-3 right-20 sm:right-40 md:right-80">
        <Image
          src="/images/Group.png"
          height={150}
          width={150}
          alt="Group Image"
          className="w-20 sm:w-28 md:w-36 lg:w-40 h-auto"
        />
      </div>

      <div className="absolute z-10 bottom-3 right-3">
        <Image
          src="/images/blog-bg-img-3.png"
          height={300}
          width={300}
          alt="Blog Background"
          className="w-28 sm:w-40 md:w-48 lg:w-64 h-auto"
        />
      </div>
    </div>
  );
};

export default BlogFirstSection;
