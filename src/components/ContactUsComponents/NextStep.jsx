import React from 'react'
import Image from 'next/image'
const NextStep = () => {
  return (
    <div className='flex relative flex-col gap-10 lg:gap-5 lg:flex-row md:flex-col  justify-center p-3 lg:p-6 items-center mx-auto' style={{ 
        backgroundImage: `url('/images/NextStep.png')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
      }} >
 <Image src='/images/Group (11).png' className=" hidden lg:block  absolute bottom-0 left-auto " width={100} height={100} alt='' ></Image>
    <div className='max-w-xl flex flex-col gap-4 justify-between ' >
        <p className='text-[#C4EF01] font-bold text-lg lg:text-xl '>Ready To Take</p>
        <h1 className='font-bold text-white text-xl lg:text-3xl '>THE NEXT STEP ?</h1>
        <p className='text-white text-md lg:text-lg  tracking-wide'>We're excited to hear from you and answer any questions you may have. Feel free to reach out via phone, email, or our contact form. We're also happy to schedule a personal consultation to discuss your career goals and how QuantumCrafters Studio can help you achieve them.</p>
        <div>
        <button className="border px-7 py-3 rounded-xl  border-white  text-white ">
         Book a Free Consultation
         </button>
        </div>
        
    </div>
    <div>
        <Image src='/images/enroll.png' height={700} width={700} alt='' />
    </div>
    </div> 
  )
}

export default NextStep
