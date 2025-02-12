"use client"
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import footerLg from '../../public/images/footerLg.png';
import location from '../../public/icons/location.png'
import phone from '../../public/icons/phone.png'
import RealLogo from '../../public/images/RealLogo.png'
import Link from 'next/link';
import { StudentDataContext } from '@/context/StudentDataContext';

const Footer = () => {
    
  const [email,setEmail] = useState("");

  const {handleSendMail,status} = useContext(StudentDataContext);

  useEffect(()=>{
    console.log(status);
    if(status === "Message sent successfully!"){
      setEmail("");
    }
  },[status])

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(email != ""){
      handleSendMail({email:email,message:"Any",formType:"NewsLetters"});
    }
  }

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
          <div className='flex lg:gap-3 gap-5 items-center'>
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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-3 mt-10 w-full text-white">
        {/* Navigation Links */}
        <div className='flex flex-col gap-10'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 text-center'>

            {
              ["home", "about", "contact-us", "courses"].map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={`${index === 1 ? '/about' : `/${item}`}`}
                    className='hover:text-[#c4ef01] uppercase list-none hover:underline'>
                    <li className='list-none'>{item.replace("-", " ")}</li>
                  </Link>
                );
              })
            }

          </div>

          <div className='grid grid-cols-2 gap-3 lg:grid-cols-3 items-start text-center pb-5'>
            {
              ["terms-of-service", "privacy-policy", "refund-policy"].map((item, index) => {
                return (
                  <Link href={`/${item}`}
                    key={index}
                    className='hover:text-[#c4ef01] uppercase hover:underline'>
                    <li className='list-none'>{item.replaceAll("-"," ")}</li>
                  </Link>
                )
              })
            }
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className='flex flex-col gap-4 items-center'>
          <h1 className='font-bold text-lg text-center'>SIGN UP TO OUR NEWSLETTER</h1>
          <div className='flex border border-white rounded-md overflow-hidden w-full max-w-md'>
            <form onSubmit={handleSubmit} className='flex border border-white rounded-md overflow-hidden w-full max-w-md'>
            <input onChange={(e)=>setEmail(e.target.value)} className='flex-1 bg-transparent text-white p-3 outline-none' type="email" placeholder='Your Email' value={email}/>
            <button className='bg-white text-[#112E58] px-4 py-2 font-bold'>SUBSCRIBE</button>
            </form>
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