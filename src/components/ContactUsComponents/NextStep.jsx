import React from 'react'
import Image from 'next/image'
const NextStep = () => {
  return (
    <div className='flex relative flex-col-reverse gap-10 lg:gap-0 lg:flex-row md:flex-row justify-around p-5 items-center' style={{ 
        backgroundImage: `url('/images/NextStep.png')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
      }} >
 <Image src='/images/Group (11).png' className=" hidden lg:block  absolute bottom-0 left-auto " width={100} height={100} alt='' ></Image>
    <div className='max-w-lg flex flex-col gap-4 justify-between' >
        <p className='text-[#C4EF01] font-bold text-lg '>Ready To Take</p>
        <h1 className='font-bold text-white text-2xl'>THE NEXT STEP ?</h1>
        <p className='text-white text-thin'>We're excited to hear from you and answer any questions you may have. Feel free to reach out via phone, email, or our contact form. We're also happy to schedule a personal consultation to discuss your career goals and how QuantumCrafters Studio can help you achieve them.</p>
        <div>
        <button className="border p-3 rounded-xl  border-white  text-white ">
         Book a Free Consultation
         </button>
        </div>
        
    </div>
    <div>
        <Image src='/images/enroll.png' height={600} width={600} alt='' />
    </div>
    </div> 
  )
}

export default NextStep
