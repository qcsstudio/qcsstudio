import Link from "next/link";
import logo from '../../../../public/images/logo.png'

export default function Navbar() {
  return (
    <nav  className="Header w-full py-4 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative top-[10px]">
        <Link href="/" className="flex items-center relative left-[60px] w-[190px]">
          <img
            src={logo.src}
            alt="Takshashila Labs"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 gap-10 relative right-[34px]">
          <Link href="/" className="text-[#c4ef01] underline hover:text-[#c4ef01] hover:underline transition">Home</Link>
          <Link href="/about" className="text-white hover:text-[#c4ef01] hover:underline transition">About Us</Link>
          <Link href="/courses" className="text-white hover:text-[#c4ef01] hover:underline transition">Courses</Link>
          <Link href="/blogs" className="text-white hover:text-[#c4ef01] hover:underline transition">Blogs</Link>
        </div>

        <button className="bg-[0e2d5b] text-[#ffff] border w-[170px] rounded-lg h-[40px] relative right-[70px] hover:bg-gradient-to-r from-[#cce973] to-[#46d3c1] transition">
          CONTACT US
        </button>
      </div>
    </nav>
  );
}