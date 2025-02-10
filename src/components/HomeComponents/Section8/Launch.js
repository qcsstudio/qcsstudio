import React from "react";
import Image from "next/image";
import Link from "next/link";
import lap from "../../../../public/images/lap.png";
import socials from "../../../../public/images/socials.png";

const Launch = () => {
  return (
    <div className="px-5 py-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#F9FAFB] sm:px-8 md:px-12 lg:px-24 p-6 ">

        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl uppercase font-extrabold bg-gradient-to-r from-green-500 via-green-300 to-blue-500 bg-clip-text text-transparent text-[#527CBD] mb-4">
            Ready to Launch Your Tech Career?
          </h2>
          <Image src={lap} alt="Enroll" className="max-w-[400px] w-full rounded-lg" />
          <h3 className="mt-4 text-lg text-[#527CBD] font-semibold">
            Do not wait for opportunities to come to you –
          </h3>
          <p className="mt-2 text-sm text-gray-600 max-w-md">
            Create them! Enroll in Takshashila Labs today and take the first
            step towards your dream tech career.
          </p>
        </div>

        <div className="w-full md:w-auto flex flex-col items-center text-center">
          <h3 className="text-lg md:text-xl uppercase font-extrabold bg-gradient-to-r from-green-500 via-green-300 to-blue-500 bg-clip-text text-transparent text-[#527CBD] mb-3">
            Enroll Now
          </h3>
          <Link href={"/contact-us"}>
            <button className="bg-[#112E58] text-white uppercase my-6  lg:my-0  py-2 px-6 rounded-lg shadow-md hover:bg-[#3A5A8D] transition duration-300">
              Book a Free Consultation
            </button>
          </Link>
        </div>

        <div className="w-full md:w-1/2  flex justify-center">
          <Image src={socials} alt="Consultation" className="max-w-[600px] w-full rounded-lg"  />
        </div>
      </div>
    </div>
  );
};

export default Launch;
