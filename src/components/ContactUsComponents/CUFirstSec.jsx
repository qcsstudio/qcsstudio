import React from 'react'
import Image from 'next/image'

const CUFirstSec = () => {
  return (
    <div 
  className=" w-full lg:pt-28 lg:pl-32 pt-20 px-10 p-32 relative flex justify-start items-start  object-cover"
  style={{ 
    backgroundImage: `url('/images/bluebg.png')`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat'
  }}
>
  <Image 
    src='/images/schoolgirl.png' 
    className='absolute top-0 z-10 left-0 w-full h-full opacity-10' 
    layout='fill' 
    objectFit='cover' 
    alt=''
  />
  {/* floating image */}
  <Image className='absolute top-0 left-0' src='/images/blog-bg-img2.png' height={150} width={150}  alt=''></Image>
  <Image className='absolute top-10 right-20 hidden md:block lg:block' src='/images/Group (11).png' height={100} width={100} alt=''></Image>
  <Image className='absolute bottom-0 right-20' src='/images/blog-bg-img-3.png' height={200} width={200} alt=''></Image>

  {/* Content box */}

  <div className=" flex flex-col items-start gap-2 justify-between ">
  <p className="text-[#C4EF01] text-xl font-bold" >Let’s Connect</p>
  <h1 className="font-bold text-white lg:text-4xl md:text-4xl text-xl max-w-2xl  lg:leading-[56px] tracking-[3%]">
  WE’RE HERE TO HELP YOU LAUNCH YOUR TECH CAREER
  </h1>
  <p className='max-w-xl text-white '>Are you ready to turn your passion into a rewarding career? At QuantumCrafters Studio, we’re more than just an institute—we’re your dedicated partners on the path to success. Whether you’re an aspiring tech professional eager to master in-demand skills or someone seeking expert guidance to elevate your career, we’re here to empower you. With our unwavering support, practical resources, and personalized mentorship, your goals are within reach, and your dreams are ready to be realized.</p>
  </div>
</div>
  )
}

export default CUFirstSec
