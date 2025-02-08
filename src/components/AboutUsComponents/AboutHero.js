import Image from 'next/image'
import React from 'react'
import business from '../../../public/images/BusinessPic.png'
import Link from 'next/link'

const AboutHero = () => {
  return (
    <div className='pt-10 relative z-1 bg-gradient-to-r from-[#020D29] via-[#020D29] to-[#0f0b36] text-white h-[100vh] flex items-start lg:items-center'>
        <div className=' relative z-10 flex flex-col ml-5 gap-5  lg:gap-5 lg:w-[50vw] lg:pt-18 lg:ml-20'>
            <span className='text-[#C4EF01] text-[21px]'>
            Our Story
            </span>
            <h1 className='text-[30px] lg:text-[3vw] font-bold uppercase '>
            Empowering Dreams, Building Futures
            </h1>
            <p className=" text-[20px]  md:text-[20px] lg:text-[16px] w-[80vw] lg:w-[45vw] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Link className='' href={'/enroll-now'}>
            <button className='flex w-[150px] m-2 ml-0 bg-gradient-to-r from-[#cce973] to-[#46d3c1] text-[#ffff] hover:bg-none hover:border hover:border-white lg:w-[10vw] h-10 justify-center rounded-lg p-4 items-center '>
            Enroll Now
            </button>
            </Link>
           
        </div>
        <Image className='absolute right-0 bottom-0 z-0 h-[90vh] object-cover' src={business.src} alt='' layout='fill'  />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
    </div>
  )
}

export default AboutHero
