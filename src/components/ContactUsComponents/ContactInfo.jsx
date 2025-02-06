import React from 'react';
import Image from 'next/image';

const ContactInfo = () =>{
  return (
    <div 
      className=" w-full flex py-10 flex-col gap-32 items-center justify-around  relative"
      style={{ background: 'linear-gradient(22deg, rgba(182,227,246,1) 0%, rgba(255,255,255,1) 100%)' }}
    >
      {/* Floating Image */}
      <Image className="absolute top-20 left-20 hidden lg:block" src="/images/infoIcon.png" height={150} width={150} alt="Info Icon" />
      <Image className="absolute bottom-20 right-20 hidden lg:block" src="/images/circlesbg.png" height={150} width={150} alt="Info Icon" />
      
        <h1 className="font-bold text-[#0E2D5B] lg:text-5xl md:text-4xl text-xl max-w-2xl lg:leading-[56px] tracking-[3%]">
          CONTACT INFORMATION
        </h1>
        
        <div className="w-full flex flex-wrap justify-center gap-10 lg:items-start md:items-start lg:gap-0 items-center">
          <div className="lg:w-1/3 md:w-1/3 max-w-xl flex flex-col  justify-center gap-5 items-center text-center ">
            <div className="border-4  border-white rounded-full p-2">
              <Image src="/images/Vector (2).png" height={40} width={40} alt="Location Icon" />
            </div>
            <div>
            <p className='max-w-xs'>Prosperity Arcade, D-229, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071</p>
            </div>
          </div>
          
          <div className="lg:w-1/3 md:w-1/3 max-w-2xl flex flex-col justify-center gap-5 items-center text-center ">
            <div className="border-4 flex items-center h-16 border-white rounded-full p-2">
              <Image src="/images/Vector (3).png" height={40} width={40} alt="Phone Icon" />
            </div>
            <div>
            <p>+91 7719607776</p>
            </div>
          </div>
          
          <div className="lg:w-1/3 md:w-1/3 max-w-2xl flex flex-col justify-center gap-5 items-center text-center ">
            <div className="border-4 border-white rounded-full p-2">
              <Image src="/images/Group (12).png" height={40} width={40} alt="Email Icon" />
            </div>
            <div>
            <p>info@qcsstudio.in</p>
            </div>
          </div>
        </div>
      
      <div className='flex flex-wrap px-3 justify-center gap-10 items-center'>
        <div className='flex items-center gap-2 justify-center '>
        <Image src="/images/insta.png" height={40} width={40} alt="insta Icon" />
        <p>Takshashila Labs</p>
        </div>
        <div className='flex items-center gap-2 justify-center'>
        <Image src="/images/fb.png" height={40} width={40} alt="linkedin Icon" />
        <p>Takshashila Labs</p>
        </div>
        <div className='flex items-center gap-2 justify-center'>
        <Image src="/images/Linkdin.png" height={40} width={40} alt="linkedin Icon" />
        <p>Takshashila Labs</p>
        </div>
      </div>
      </div>
   
  );
};

export default ContactInfo;
