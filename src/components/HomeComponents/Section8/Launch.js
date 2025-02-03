import React from 'react';
import lap from '../../../../public/images/lap.png';
import socials from '../../../../public/images/socials.png';

const Launch = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#F9FAFB] rounded-lg shadow-md">
        {/* Left Section with Heading */}
        <div className="md:w-1/3 flex flex-col items-start mb-4 md:mb-0">
          <h2 className="text-4xl uppercase font-extrabold bg-gradient-to-r from-green-500 via-green-300 to-blue-500 bg-clip-text text-transparent text-[#527CBD] mb-2">
            Ready to Launch Your Tech Career?
          </h2>
          <img
            src={lap.src} // Replace with your image URL
            alt="Enroll"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="mt-2 text-lg pl-8 text-[#527CBD] font-semibold">Don't wait for opportunities to come to you –</h3> {/* Text under the left image */}
          <p className="mt-2 text-sm pl-8 text-gray-600">Create them! Enroll in Takshashila Labs today and take the first step towards your dream tech career."</p> {/* Text under the left image */}
        </div>

        {/* Center Section with Enroll Now Text and Button */}
        <div className="md:w-1/3 flex flex-col items-center text-center">
          <h3 className="text-xl uppercase font-extrabold bg-gradient-to-r from-green-500 via-green-300 to-blue-500 bg-clip-text text-transparent text-[#527CBD] mb-2">
            Enroll Now
          </h3>
          <button className="bg-[#112E58] text-white uppercase py-2 font-thin px-4 rounded-lg shadow hover:bg-[#3A5A8D] transition duration-300">
            Book a Free Consultation
          </button>
        </div>

        {/* Right Section with Image */}
        <div className="md:w-1/3 flex flex-col items-start">
          <img
            src={socials.src} // Replace with your image URL
            alt="Consultation"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Launch;
