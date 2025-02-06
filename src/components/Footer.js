import React from 'react';
import Image from 'next/image';
import footerLg from '../../public/images/footerLg.png';
import location from '../../public/icons/location.png'
import phone from '../../public/icons/phone.png'
import RealLogo from '../../public/images/RealLogo.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#112E58] via-[#224474] to-[#112E58] flex flex-col items-center px-6 py-12">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image src={RealLogo} alt="Company Logo" className="h-12 w-auto" loading="lazy" />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-5 max-w-md">
          <div className='flex gap-3 items-center'>
            <Image src={location} width={30} height={30} alt='Location' />
            <p className="text-white text-sm md:text-base">Prosperity Arcade, D-229, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071</p>
          </div>
          <div className='flex gap-3 items-center'>
            <Image src={phone} width={20} height={20} alt='Phone' />
            <p className="text-white text-sm md:text-base">Phone: +91 771-960-7776</p>
          </div>
        </div>
      </div>

      {/* Links and Newsletter Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3 mt-10 w-full text-white">
        {/* Navigation Links */}
        <div className='grid grid-cols-2 gap-5 text-center'>
          <li className='list-none'>HOME</li>
          <li className='list-none'>ABOUT</li>
          <li className='list-none'>CONTACT US</li>
          <li className='list-none'>COURSES </li>
        </div>
        <div className='grid grid-cols-2 gap-5 text-center pb-5'>
          <li className='list-none'>Terms Of Service</li>
          <li className='list-none'>Privacy Policy</li>
          <li className='list-none'>Refund Policy</li>
        </div>

        {/* Newsletter Signup */}
        <div className='flex flex-col gap-4 items-center'>
          <h1 className='font-bold text-lg text-center'>SIGN UP TO OUR NEWSLETTER</h1>
          <div className='flex border border-white rounded-md overflow-hidden w-full max-w-md'>
            <input className='flex-1 bg-transparent text-white p-3 outline-none' type="email" placeholder='Your Email' />
            <button className='bg-white text-[#112E58] px-4 py-2 font-bold'>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto mt-10 text-center text-white text-sm">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;