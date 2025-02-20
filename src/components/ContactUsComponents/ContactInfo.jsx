import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactInfo = () =>{
  return (
    <div 
      className=" w-full flex py-10 flex-col gap-20 lg:gap-32  items-center justify-center mx-auto  relative"
      style={{ background: 'linear-gradient(22deg, rgba(182,227,246,1) 0%, rgba(255,255,255,1) 100%)' }}
    >
      {/* Floating Image */}
      <Image className="absolute top-20 left-20 hidden lg:block" src="/images/infoIcon.png" height={150} width={150} alt="Info Icon" />
      <Image className="absolute bottom-20 right-20 hidden lg:block" src="/images/circlesbg.png" height={150} width={150} alt="Info Icon" />
      
        <h1 className="font-bold text-[#0E2D5B] lg:text-[50px] md:text-4xl sm:text-[1.8rem] xs:text-[1.7rem] max-w-2xl lg:leading-[56px] tracking-[3%]">
          CONTACT INFORMATION
        </h1>
        
        <div className="w-full flex flex-wrap justify-center  lg:items-start md:items-start gap-4 lg:gap-0 items-center">
          <div className="lg:w-1/4 md:w-1/3 max-w-xl flex flex-col  justify-center gap-2 items-center text-center ">
            <div className="border-4  border-white h-24  rounded-full p-4">
              <Image src="/images/Vector (2).png" height={60} width={60} alt="Location Icon" />
            </div>
            <div>
            <p className='max-w-xs'><Link href="https://tinyurl.com/msb2nbbn" >Prosperity Arcade, D-229, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071</Link></p>
            </div>
          </div>
          
          <div className="lg:w-1/4 md:w-1/3 max-w-xl flex flex-col justify-center gap-2 items-center text-center ">
            <div className="border-4 flex items-center h-24 border-white rounded-full p-4 ">
              <Image src="/images/Vector (3).png" height={60} width={60} alt="Phone Icon" />
            </div>
            <div>
            <p><a href="tel:+917719607776">+91 771-960-7776</a></p>
            </div>
          </div>
          
          <div className="lg:w-1/4 md:w-1/3 max-w-xl flex flex-col justify-center gap-2 items-center text-center ">
            <div className="border-4 border-white h-24  rounded-full p-4">
              <Image src="/images/Group (12).png" height={60} width={60} alt="Email Icon" />
            </div>
            <div>
            <p><a href='mailto:info@qcsstudio.in' >info@qcsstudio.in</a></p>
            </div>
          </div>
        </div>
      
      <div className='flex flex-wrap px-3 justify-center gap-10 items-center'>
       
          <Link className='flex items-center gap-2 justify-center ' href='https://www.instagram.com/qcsstudio/#'>
          <Image src="/images/insta.png" height={40} width={40} alt="insta Icon" />
          <p  className='hover:text-[#47a5ee]  hover:underline'>Quantum Crafters Studio</p>
          </Link>
       
          <Link className='flex items-center gap-2 justify-center ' href='https://www.facebook.com/qcsstudio'>
        <Image src="/images/fb.png" height={40} width={40} alt="linkedin Icon" />
        <p  className='hover:text-[#47a5ee]  hover:underline'>Quantum Crafters Studio</p>
        </Link>
        <Link className='flex items-center gap-2 justify-center ' href='https://www.linkedin.com/company/qcsstudio/posts/?feedView=all'>
        <Image src="/images/Linkdin.png" height={40} width={40} alt="linkedin Icon" />
        <p  className='hover:text-[#47a5ee]  hover:underline'>Quantum Crafters Studio</p>
        </Link>
      </div>
      </div>

  );
};

export default ContactInfo;
