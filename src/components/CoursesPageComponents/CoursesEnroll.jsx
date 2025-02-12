import React from "react";
import Image from "next/image";
import Link from "next/link";
import rect from '../../../public/images/Rectangle.png'
import bubblebg from '../../../public/images/bublebg.png'
import recent from '../../../public/images/recentsBlogsbg1.png'
import blogBg from '../../../public/images/blog-bg-img-3.png'
import circlesbg from '../../../public/images/circlesbg.png'
import CoursesBackground from '../../../public/images/CoursesBackground.png'



const CoursesEnroll = () => {
  return (
    <div className=" w-full bg-blue-950 ">
      <div className="relative w-full h-[700] md:h-[700] lg:h-[600] mt-[2000px] flex items-center justify-start">
        <Image
          className="absolute z-10 top-0 left-1"
          src={rect}
          width={100}
          height={100}
          alt="rectangle"
        />
        <Image
          className="absolute z-10 top-7 left-10"
          src={rect}
          width={150}
          height={150}
          alt="rectangle"
        />
        <Image
          className="hidden md:hidden lg:block absolute z-20 top-0 right-96"
          src={bubblebg}
          width={500}
          height={500}
          alt="bg"
        />
        <Image
          className="hidden lg:block absolute z-30 right-0 top-0"
          src={recent}
          width={150}
          height={150}
          alt="bg"
        />
        <Image
          className="absolute z-30 left-5 bottom-5 scale-x-[-1]"
          src={blogBg}
          width={150}
          height={150}
          alt="bg"
        />
        <Image
          className="absolute z-30 bottom-10 right-5"
          src={circlesbg}
          width={150}
          height={150}
          alt="bg"
        />
        {/* <Image
          src={CoursesBackground}
          className="object-cover"
          layout="fill"
          alt="test"
        /> */}

        <div className="absolute mx-5 flex flex-col justify-center md:mx-10 lg:mx-32">
          <div className="headings">
            <h1 className="text-white font-bold lg:text-[45px] lg:leading-[54.86px] tracking-[2%] md:text-[30px] md:leading-[54.86px] sm:leading-[54.86px]">
              READY TO <span className="text-[#C1EE04]">ENROLL ?</span>
            </h1>
            <div>
              <p className="text-[#FFFFFF] tracking-[2%] md:text-sm text-sm">
                Embark on your UI/UX design journey with Takshashila Labs.
              </p>
              <p className="text-[#FFFFFF] tracking-[2%] md:text-sm text-sm">
                Here's how to get started:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10  md:gap-2 gap-0">
            <div className="p-6 rounded-lg shadow-md">
              <h2 className="lg:text-xl sm:text-sm text-white font-bold mb-3 md:text-lg">
                Eligibility Criteria:
              </h2>
              <ul className="list-disc pl-5 text-[#C1EE04] text-sm space-y-1 lg:space-y-2 md:space-y-1">
                <li>Minimum 10+2 or equivalent qualification</li>
                <li>A passion for design and problem-solving</li>
                <li>
                  No prior design experience required, but a willingness to
                  learn and a creative mindset are essential
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg shadow-md">
              <h2 className="lg:text-xl sm:text-sm text-white font-bold mb-3 md:text-lg">
                Enrollment Process
              </h2>
              <ul className="list-disc text-[#C1EE04] text-sm pl-5 space-y-1 lg:space-y-2 md:space-y-1">
                <li>Fill out the online application form.</li>
                <li>Schedule a personal consultation.</li>
                <li>Secure your seat with an enrollment fee.</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg shadow-md">
              <h2 className="lg:text-xl sm:text-sm text-white font-bold mb-3 md:text-lg">
                Additional Information
              </h2>
              <ul className="list-disc pl-5 text-[#C1EE04] text-sm space-y-1 lg:space-y-2 md:space-y-1">
                <li>Limited seats available</li>
                <li>Scholarships & Financial Aid</li>
                <li>Payment Plans</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              className="scale-x-[-1] hidden lg:block md:block"
              src="/images/vector 11.png"
              width={200}
              height={1}
              alt="test"
            ></Image>
            <Link
              className="text-white border p-2 rounded"
              href={"/enroll-now"}
            >
              Enroll now
            </Link>
            <Image
              className="hidden lg:block md:block"
              src="/images/vector 11.png"
              width={200}
              height={1}
              alt="test"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoursesEnroll;
