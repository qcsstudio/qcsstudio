import Image from "next/image";
import React from "react";
import computer from "../../../public/images/computer.png";
import paper from "../../../public/images/paper.png";
import sideArr from "../../../public/images/Sidearr.png";
import Link from "next/link";

const Book = () => {
  return (
    <div>
      <div className="relative flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col justify-start lg:justify-center items-start lg:items-center w-full lg:w-[52vw] pt-10 lg:pt-0 lg:pl-24">
          <div className="flex lg:block flex-col gap-5 ml-4">
            <h4 className="text-[24px] lg:text-[40px] text-[#032263] font-extrabold tracking-normal  mb-[3rem]">
              Enroll in our courses{" "}
              <span className="text-[#C4EF01]">today!</span>
            </h4>

            <Link
              href={"/contact-us"}
              className="p-[12px] border  border-[#032263]  text-[#032263] w-[250px] md:w-[250px] lg:w-[300px] rounded-lg "
            >
              Book a Free Consultation
            </Link>

          </div>
        </div>
        <Image
          src={sideArr}
          className=" absolute h-[150px] w-[100px] lg:w-auto lg:h-[200px]"
          alt=""
        />
        <Image
          src={paper}
          className="absolute left-[40%] top-1/2 h-[100px] hidden lg:block"
          alt=""
        />
        <Image className="" src={computer} alt="" />
      </div>
    </div>
  );
};
export default Book;
