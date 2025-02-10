import Image from 'next/image'
import React from 'react'
import business from '../../../public/images/BusinessPic.png'
import Link from 'next/link'

const AboutHero = () => {
  return (
    <div className='py-10 lg:pl-[3vw] lg:pt-0 relative z-1 bg-gradient-to-r from-[#020D29] via-[#020D29] to-[#0f0b36] text-white lg:min-h-[90vh] flex items-start lg:items-center'>
      <div className=' relative z-10 flex flex-col ml-5 gap-5  lg:gap-5 lg:w-[50vw] lg:pt-18 lg:ml-20'>
        <span className='text-[#C4EF01] text-[21px]'>
          Our Story
        </span>
        <h1 className='text-[30px] lg:text-[3vw] leading-[8vw] lg:leading-[3vw] font-bold uppercase '>
          Empowering Dreams, Building Futures
        </h1>
        <p className="  md:text-[20px] text-[16px] w-[80vw] lg:w-[45vw] ">
          At QuantumCrafters Studio, we believe that success begins with passion. We are a hub of innovation, mentorship, and practical learning, dedicated to turning dreams into thriving careers. Whether you’re starting your journey or looking to elevate your skills, our programs are designed to empower you with the knowledge and confidence to succeed in the fast-paced world of technology. Our approach is different: We don’t just teach; we guide. We take the time to understand your unique interests, align them with the right learning path, and provide you with the tools to achieve your goals.
        </p>

        <Link className='' href={'/enroll-now'}>
          <button className='flex w-[150px] m-2 ml-0 bg-gradient-to-r from-[#cce973] to-[#46d3c1] text-[#ffff] hover:bg-none hover:border hover:border-white lg:w-[10vw] h-10 justify-center rounded-lg p-4 items-center '>
            Enroll Now
          </button>
        </Link>

      </div>
      <Image className='absolute right-0 bottom-0 z-0 h-[90vh] object-cover' src={business.src} alt='' layout='fill' />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
    </div>
  )
}

export default AboutHero
