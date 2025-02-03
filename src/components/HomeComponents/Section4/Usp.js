import React from 'react';
import Image from 'next/image';
import trainee from '../../../../public/images/trainee.png';
import text from '../../../../public/images/text.png';
import rename from '../../../../public/images/rename.png';


const Usp = () => {
  return (
    <>
      <div className="usp relative flex flex-col items-center lg:items-start px-6 lg:px-0">
        <Image
          height={600}
          width={600}
          src={trainee.src}
          alt="students"
          className="absolute right-[10%] mt-[15%] z-10 max-w-full"
        />
        <Image
          height={200}
          width={200}
          src={text.src}
          alt="students"
          className="absolute left-[42%] mt-[18%] z-10 max-w-full"
        />

        <div className="w-full lg:w-[50%] flex justify-center">
          <div className="flex flex-col items-start lg:ml-[12em] relative top-[150px] text-center lg:text-left">
            <span className="mt-2 mb-2 text-[#527CBD]">USP’s</span>
            <h3 className="text-4xl uppercase font-bold mb-4 text-[#032263]">
              Unique Selling Propositions
            </h3>
            <p className="text-[#051332]">
              <span className="bg-gray-100 text-3xl m-2">Your</span>
              Dream Tech Job, Guaranteed
            </p>
            <p className="w-full lg:w-[55%] text-sm mt-8">
              We're so confident in our training that we offer a 100% job placement guarantee. Your success is our priority!
            </p>
            <button className="mt-[10%] h-[3em] bg-[#112E58] text-white w-[50%] lg:w-[30%] border rounded-lg">
              Enroll Now
            </button>
          </div>
        </div>
        <Image
          className="ml-0 lg:ml-[400px] -mt-10 z-0 max-w-full"
          src={rename.src}
          alt="img"
          height={200}
          width={500}
        />
      </div>
    </>
  );
};

export default Usp;
