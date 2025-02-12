import React from "react";
import Image from "next/image";
const CoursesEnroll = () => {
  return (
    <div className="">
    <div className="relative w-full h-[700] md:h-[700] lg:h-[600] flex items-center justify-start">
      {/* Floating Images */}
      <Image className="absolute z-10 top-0 left-1" src="/images/Rectangle.png" width={100} height={100} alt="rectangle" />
      <Image className="absolute z-10 top-7 left-10" src="/images/Rectangle.png" width={150} height={150} alt="rectangle" />
      <Image className="hidden md:hidden lg:block absolute z-20 top-0 right-96" src="/images/bublebg.png" width={500} height={500} alt="bg" />
      <Image className="hidden lg:block absolute z-30 right-0 top-0" src="/images/recentsBlogsbg1.png" width={150} height={150} alt="bg" />
      <Image className="absolute z-30 left-5 bottom-5 scale-x-[-1]" src="/images/blog-bg-img-3.png" width={150} height={150} alt="bg" />
      <Image className="absolute z-30 bottom-10 right-5" src="/images/circlesbg.png" width={150} height={150} alt="bg" />
      {/* Background Image */}
      <Image src="/images/CoursesBackground.png" className="object-cover" layout="fill" alt="" />

      {/* Centered Image */}
      {/* <Image className="absolute top-1/2 left-1/2 object-contain" src="/images/Group(9).png" layout="fill" objectFit="contain" alt="" /> */}
      {/* Content Section */}
      <div className="absolute mx-5 flex flex-col justify-center md:mx-10 lg:mx-32">
        <div className="headings">
          <h1 className="text-white font-bold lg:text-[45px] lg:leading-[54.86px] tracking-[2%] md:text-[30px] md:leading-[54.86px] sm:leading-[54.86px]">
            READY TO <span className="text-[#C1EE04]">ENROLL ?</span>
          </h1>
          <div>
            <p className="text-[#FFFFFF] tracking-[2%] md:text-sm text-sm">Embark on your UI/UX design journey with Takshashila Labs.</p>
            <p className="text-[#FFFFFF] tracking-[2%] md:text-sm text-sm">Here's how to get started:</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10  md:gap-2 gap-0">
          {/* Eligibility Criteria */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="lg:text-xl sm:text-sm text-white font-bold mb-3 md:text-lg">Eligibility Criteria:</h2>
            <ul className="list-disc pl-5 text-[#C1EE04] text-sm space-y-1 lg:space-y-2 md:space-y-1">
              <li>Minimum 10+2 or equivalent qualification</li>
              <li>A passion for design and problem-solving</li>
              <li>No prior design experience required, but a willingness to learn and a creative mindset are essential</li>
            </ul>
          </div>
          {/* Enrollment Process */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="lg:text-xl sm:text-sm text-white font-bold mb-3 md:text-lg">Enrollment Process</h2>
            <ul className="list-disc text-[#C1EE04] text-sm pl-5 space-y-1 lg:space-y-2 md:space-y-1">
              <li>Fill out the online application form.</li>
              <li>Schedule a personal consultation.</li>
              <li>Secure your seat with an enrollment fee.</li>
            </ul>
          </div>
          {/* Additional Information */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="lg:text-xl sm:text-sm text-white font-bold mb-3 md:text-lg">Additional Information</h2>
            <ul className="list-disc pl-5 text-[#C1EE04] text-sm space-y-1 lg:space-y-2 md:space-y-1">
              <li>Limited seats available</li>
              <li>Scholarships & Financial Aid</li>
              <li>Payment Plans</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
        <Image className="scale-x-[-1] hidden lg:block md:block" src='/images/vector 11.png' width={200} height={1} alt=""></Image>
        <button className="text-white border p-2 rounded">Enroll now</button>
        <Image className="hidden lg:block md:block" src='/images/vector 11.png' width={200} height={1} alt=""></Image>
      </div>
      </div>
    </div>
    {/* <div className="second flex flex-col  justify-between  items-center  gap-20 md:flex-row">
      <div className="flex flex-col md:ml-20 gap-2 items-center">
        <h1 className="font-bold text-lg text-[#0E2D5B]  ">Enroll in our courses <span className="text-[#C4EF01]">today!</span></h1>
        <button className="text-[#0E2D5B] border border-[#0E2D5B] rounded-lg p-2" > BOOK A FREE CONSULTATION</button>
      </div>
      <div className="flex">
        <Image src='/images/enroll.png' className='object-cover'     alt='enroll' height={300} width={300}></Image>
        <Image src='/images/recentsblogsbg3.png' className="hidden lg:block md:flex" alt='enroll' height={100} width={100}></Image>
      </div>
    </div> */}
    </div>
  );
};
export default CoursesEnroll;