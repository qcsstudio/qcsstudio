import React from "react";
import Image from "next/image";
import usp from "../../../../public/images/usp.png";
import Link from "next/link";

const Usp = () => {
  return (
    <div className="usp bg-white px-6 md:px-12 lg:px-24 xl:px-40 py-16 flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
        <span className="text-[#527CBD] text-lg font-semibold">USP’s</span>
        <h3 className="text-3xl md:text-4xl font-bold text-[#032263] uppercase">
          Unique Value Proposition
        </h3>
        <p className="text-4xl md:text-5xl font-bold text-[#032263] leading-tight">
          Why Choose QuantumCrafters Studio?
        </p>

        <p className="text-[#051332] text-xl flex items-center">
          <span className="bg-gray-200 px-3 py-1 rounded-md text-gray-900 font-semibold">
            Your
          </span>
          <span className="ml-2">Dream Tech Job, Guaranteed</span>
        </p>

        <ul className="space-y-4 text-gray-700 text-lg list-disc list-inside">
          <li>
            <strong className="text-black">Passion-Driven Guidance –</strong> We start 
            by understanding your unique passions and career goals, aligning 
            you with the perfect course to turn your interests into a thriving career.
          </li>
          <li>
            <strong className="text-black">Hands-On Learning –</strong> Gain real-world 
            experience through practical projects designed to build confidence and 
            sharpen your skills for industry success.
          </li>
          <li>
            <strong className="text-black">Expert Mentorship –</strong> Learn directly 
            from experienced professionals who provide personalized guidance and 
            share insights to help you excel in tech.
          </li>
          <li>
            <strong className="text-black">Career-Focused Support –</strong> Beyond 
            technical training, we prepare you for success with resume-building, 
            interview prep, and tailored career advice.
          </li>
          <li>
            <strong className="text-black">Commitment to Success –</strong> We’re not 
            satisfied until you achieve your goals. We offer a{" "}
            <strong className="text-black">100% job placement guarantee*</strong> and 
            ongoing support to ensure your continued growth and success in the tech industry.
          </li>
        </ul>

        <p className="text-gray-700">
          At QCS, we go beyond teaching – we empower you to craft a career that 
          matches your passion and potential.
        </p>

        <Link href={'enroll-now'}>
         <button className="bg-[#112E58] hover:bg-[#0d2245] text-white py-3 px-6 rounded-lg text-lg font-medium transition-all">
           Enroll Now
         </button>
        </Link>
        
      </div>

      <div className="flex justify-center">
  <Image
    src={usp}
    alt="students"
    height={600}
    width={600}
    className="w-full max-w-[600px] object-contain filter drop-shadow-[10px_10px_20px_rgba(0,0,0,0.4)] rounded-lg"
  />
</div>



    </div>
  );
};

export default Usp;
