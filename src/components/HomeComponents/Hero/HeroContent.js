"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Facebook from "../../../../public/icons/facebook.png";
import Linkedin from "../../../../public/icons/linkedin.png";
import Instagram from "../../../../public/icons/instagram.png";
import heroMain from "../../../../public/images/Hero-main.png";
import homeheader from "../../../../public/images/home-header.png";

export default function HeroContent() {
  return (
    <div className="flex  relative flex-col lg:flex-row items-center justify-between gap-5 sm:px-12 md:px-24  px-5 lg:px-36 py-12">

      <motion.div
        className="absolute top-[50%] left-[25%] lg:block hidden"
        animate={{
          rotate: 360, 
        }}
        transition={{
          repeat: Infinity, 
          duration: 10, 
          ease: "linear", 
        }}
      >
        <Image src={homeheader} width={300} height={300} alt="this is image" />
      </motion.div>

      <div className="relative  hidden lg:flex flex-col-reverse items-center gap-6 h-auto lg:h-[500px] justify-center">
        <div className="hidden lg:block w-[2px] h-[120px] bg-gradient-to-t from-white to-transparent"></div>
        <div className="flex flex-row lg:flex-col items-center gap-5">
          <Link href="https://www.facebook.com/takshashilalabs" legacyBehavior>
            <a className="hover:scale-110 transition-transform">
              <Image src={Facebook} alt="Facebook" width={32} height={32} />
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/company/takshashilalabs/"
            legacyBehavior
          >
            <a className="hover:scale-110 transition-transform">
              <Image src={Linkedin} alt="LinkedIn" width={32} height={32} />
            </a>
          </Link>
          <Link
            href="https://www.instagram.com/takshashilalabs/"
            legacyBehavior
          >
            <a className="hover:scale-110 transition-transform">
              <Image src={Instagram} alt="Instagram" width={32} height={32} />
            </a>
          </Link>
        </div>
        <div className="hidden lg:block w-[2px] h-[120px] bg-gradient-to-b from-white to-transparent"></div>
      </div>
      <div className="w-[1px] h-[500px] lg:block hidden bg-white"></div>
      {/* Hero Text Section */}
      <div className="text-center lg:text-left flex-1 max-w-3xl">
        <div className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
          <span className="font-thin text-slate-300">IGNITE YOUR</span>
          <span className="font-bold"> TECH PASSION</span> <br />
          <span className="font-thin text-slate-300">LAUNCH YOUR DREAM</span>
          <span className="font-bold"> CAREER</span>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-4">
          Transformative tech education
        </h2>
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base">
          At QuantumCrafters Studio, your journey begins with you. We don’t just
          enroll students – we take the time to understand your unique passions,
          interests, and career goals. By learning what excites and motivates
          you, we guide you to the perfect course that aligns with your
          strengths and aspirations. Whether your passion lies in coding,
          design, data analytics, marketing or cybersecurity, we provide the
          tailored training and mentorship you need to unlock your full
          potential and achieve success in the ever-evolving tech industry. Your
          future deserves a thoughtful start – and that’s what we promise. Ready
          to turn your passion into a career? Let’s discover your path together.
          Enroll now and take the first step toward building the career you’ve
          always dreamed of!
        </p>

        <div className="mt-6 sm:mt-8">
          <button className="rounded-lg w-full sm:w-[220px] h-[50px] sm:h-[55px] bg-gradient-to-r from-[#cce973] to-[#46d3c1] text-white text-lg font-semibold hover:scale-105 transition-transform">
            ENROLL NOW
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full sm:w-[450px] md:w-[600px] lg:w-[700px]">
        <Image
          src={heroMain}
          alt="Hero Main"
          className="object-cover rounded-lg shadow-lg"
          layout="responsive"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
}
