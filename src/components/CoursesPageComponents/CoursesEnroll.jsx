import React from "react";
import Image from "next/image";
import Link from "next/link";

import Rectangle from "../../../public/images/Rectangle.png";
import BubbleBg from "../../../public/images/bublebg.png";
import RecentBlogsBg1 from "../../../public/images/recentsBlogsbg1.png";
import BlogBgImg3 from "../../../public/images/blog-bg-img-3.png";
import CirclesBg from "../../../public/images/circlesbg.png";
import CoursesBackground from "../../../public/images/CoursesBackground.png";
// import Vector11 from "../../../public/images/vector 11.png";

const CoursesEnroll = () => {
  return (
    <div className="">
      <div className="relative w-full h-[700] md:h-[700] lg:h-[600] flex items-center justify-start">
        {/* Floating Images */}
        <Image className="absolute z-10 top-0 left-1" src={Rectangle} width={100} height={100} alt="rectangle" />
        <Image className="absolute z-10 top-7 left-10" src={Rectangle} width={150} height={150} alt="rectangle" />
        <Image className="hidden md:hidden lg:block absolute z-20 top-0 right-96" src={BubbleBg} width={500} height={500} alt="bg" />
        <Image className="hidden lg:block absolute z-30 right-0 top-0" src={RecentBlogsBg1} width={150} height={150} alt="bg" />
        <Image className="absolute z-30 left-5 bottom-5 scale-x-[-1]" src={BlogBgImg3} width={150} height={150} alt="bg" />
        <Image className="absolute z-30 bottom-10 right-5" src={CirclesBg} width={150} height={150} alt="bg" />
        {/* Background Image */}
        <Image src={CoursesBackground} className="object-cover" layout="fill" alt="" />

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
            {/* Enrollment Information */}
            {[
              {
                title: "Eligibility Criteria:",
                items: [
                  "Minimum 10+2 or equivalent qualification",
                  "A passion for design and problem-solving",
                  "No prior design experience required, but a willingness to learn and a creative mindset are essential"
                ]
              },
              {
                title: "Enrollment Process",
                items: [
                  "Fill out the online application form.",
                  "Schedule a personal consultation.",
                  "Secure your seat with an enrollment fee."
                ]
              },
              {
                title: "Additional Information",
                items: ["Limited seats available", "Scholarships & Financial Aid", "Payment Plans"]
              }
            ].map((section, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md">
                <h2 className="lg:text-xl sm:text-sm text-white font-bold mb-3 md:text-lg">{section.title}</h2>
                <ul className="list-disc pl-5 text-[#C1EE04] text-sm space-y-1 lg:space-y-2 md:space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2">
            {/* <Image className="scale-x-[-1] hidden lg:block md:block" src={Vector11} width={200} height={1} alt="" /> */}
            <Link className="text-white border p-2 rounded" href={'/enroll-now'}>Enroll now</Link>
            {/* <Image className="hidden lg:block md:block" src={Vector11} width={200} height={1} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesEnroll;
