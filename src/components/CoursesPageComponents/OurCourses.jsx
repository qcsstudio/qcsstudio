import React from 'react'
import Image from 'next/image'

const OurCourses = () => {
    return (
        <div className='relative h-[600] flex justify-center items-center' >
            <Image className='absolute top-20 left-36 hidden md:hidden lg:flex' src='/images/recentsblogsbg3.png' alt='' height={100} width={100}></Image>
            <Image className='absolute top-8 right-20 hidden md:flex lg:flex' src='/images/groupkite (1).png' alt='' height={200} width={200}></Image>
            <Image className='absolute bottom-20 left-20 hidden lg:block' src='/images/bubles2.png' alt='' height={300} width={300}></Image>
            <Image className='absolute bottom-20 right-32 hidden md:hidden lg:flex ' src='/images/brush.png' alt='' height={200} width={200}></Image>
            <Image className='absolute top-20 left-80 hidden md:hidden lg:flex' src='/images/Group (3).png' alt='' height={100} width={100}></Image>
            <Image className='absolute top-20 right-80 hidden md:hidden lg:flex' src='/images/AI.png' alt='' height={70} width={70}></Image>
            <Image className='absolute bottom-20 left-80 hidden md:hidden lg:flex' src='/images/speaker.png' alt='' height={100} width={100}></Image>
            <Image className='absolute bottom-8 ' src='/images/groupkite (2).png' alt='' height={70} width={70}></Image>
            <div className='flex top-1/2 left-1/2 flex-col py-20 px-20 justify-between border  rounded-xl  gap-5 items-center' style={{ background: 'linear-gradient(135deg, rgba(182,227,246,1) 0%, rgba(255,255,255,1) 100%)' }} >
                <h1 className='font-bold lg:text-[30px] text-[#0D154B] text-[20px]'>OUR COURSES</h1>
                <div className='flex flex-col justify-between gap-10 items-center'>
                    <h4 className="py-3 px-3 rounded  text-[#29ABE2] bg-clip-text" style={{ borderImage: 'linear-gradient(to right, #29ABE2, #1D4ED8) 1', background: 'linear-gradient(3deg, rgba(162,219,244,1) 0%, rgba(255,255,255,1) 100%)' }}>
                        Web Development
                    </h4>
                    <div className='flex flex-col lg:flex-row lg:gap-56 md:flex-row  justify-between gap-5 items-center'>
                        <h4 className="py-3 px-3 rounded  text-[#29ABE2] bg-clip-text" style={{ borderImage: 'linear-gradient(to right, #29ABE2, #1D4ED8) 1', background: 'linear-gradient(3deg, rgba(162,219,244,1) 0%, rgba(255,255,255,1) 100%)' }}>Network & Network Security</h4>
                        <h4 className="py-3 px-12 rounded  text-[#29ABE2] bg-clip-text" style={{ borderImage: 'linear-gradient(to right, #29ABE2, #1D4ED8) 1', background: 'linear-gradient(3deg, rgba(162,219,244,1) 0%, rgba(255,255,255,1) 100%)' }}>UI UX Design</h4>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:gap-10 md:flex-row  justify-between gap-5 items-cente'>
                        <h4 className="py-3 px-3 rounded  text-[#29ABE2] bg-clip-text" style={{ borderImage: 'linear-gradient(to right, #29ABE2, #1D4ED8) 1', background: 'linear-gradient(3deg, rgba(162,219,244,1) 0%, rgba(255,255,255,1) 100%)' }}>Digital MarketiIng</h4>
                        <h4 className="py-3 px-3 rounded  text-[#29ABE2] bg-clip-text" style={{ borderImage: 'linear-gradient(to right, #29ABE2, #1D4ED8) 1', background: 'linear-gradient(3deg, rgba(162,219,244,1) 0%, rgba(255,255,255,1) 100%)' }}>Data Science & AI</h4>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default OurCourses
