"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import logo from "../../public/images/logo.png"; 
import RealLogo from '../../public/images/RealLogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // #0e2d5b
  // bg-[#060c18]
  // style={{background: "rgb(6,12,24)",background: "linear-gradient(180deg, rgba(6,12,24,1) 0%, rgba(20,49,96,1) 100%)"}}
  return (
    <nav className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[90%] px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-all z-50">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo Container */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={RealLogo} alt="Logo" width={1024} height={100} className="w-[270px] "/>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 gap-10 mx-auto">
          <Link href="/home" className="text-white  hover:text-[#c4ef01] hover:underline transition">Home</Link>
          <Link href="/about" className="text-white hover:text-[#c4ef01] hover:underline transition">About Us</Link>
          <Link href="/courses" className="text-white hover:text-[#c4ef01] hover:underline transition">Courses</Link>
          <Link href="/blogs" className="text-white hover:text-[#c4ef01] hover:underline transition">Blogs</Link>
        </div>

        {/* Mobile Menu Button Container */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Contact Button (Always Visible) */}
        <Link className="hidden lg:block" href={'/contact-us'}>
          <button className="bg-[#0e2d5b] text-white border w-[170px] rounded-lg h-[40px] hover:bg-gradient-to-r from-[#cce973] to-[#46d3c1] transition">
            CONTACT US
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col items-center space-y-4 mt-2 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {/* Centering Links in Mobile Menu */}
        <Link href="/" className="text-[#c4ef01] underline">Home</Link>
        <Link href="/about" className="text-white hover:text-[#c4ef01]">About Us</Link>
        <Link href="/courses" className="text-white hover:text-[#c4ef01]">Courses</Link>
        <Link href="/blogs" className="text-white hover:text-[#c4ef01]">Blogs</Link>
        <button className="bg-[#0e2d5b] text-white border w-[150px] rounded-lg h-[40px] hover:bg-gradient-to-r from-[#cce973] to-[#46d3c1] transition">
          CONTACT US
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
