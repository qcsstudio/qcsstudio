"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import logo from "../../../../public/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="Header w-full py-4 px-6 md:px-12 bg-[#0e2d5b]">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative top-[10px]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center relative left-[20px] md:left-[60px] w-[190px]">
          <img src={logo.src} alt="Takshashila Labs" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 gap-10 relative right-[34px]">
          <Link href="/" className="text-[#c4ef01] underline hover:text-[#c4ef01] hover:underline transition">Home</Link>
          <Link href="/about" className="text-white hover:text-[#c4ef01] hover:underline transition">About Us</Link>
          <Link href="/courses" className="text-white hover:text-[#c4ef01] hover:underline transition">Courses</Link>
          <Link href="/blogs" className="text-white hover:text-[#c4ef01] hover:underline transition">Blogs</Link>
        </div>

        {/* Contact Button (Always Visible) */}
        <button className="hidden md:block bg-[#0e2d5b] text-white border w-[170px] rounded-lg h-[40px] relative right-[70px] hover:bg-gradient-to-r from-[#cce973] to-[#46d3c1] transition">
          CONTACT US
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center space-y-4 mt-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link href="/" className="text-[#c4ef01] underline">Home</Link>
        <Link href={{pathname:''}} className="text-white hover:text-[#c4ef01]">About Us</Link>
        <Link href="/courses" className="text-white hover:text-[#c4ef01]">Courses</Link>
        <Link href="/blogs" className="text-white hover:text-[#c4ef01]">Blogs</Link>
        <button className="bg-[#0e2d5b] text-white border w-[150px] rounded-lg h-[40px] hover:bg-gradient-to-r from-[#cce973] to-[#46d3c1] transition">
          CONTACT US
        </button>
      </div>
    </nav>
  );
}
