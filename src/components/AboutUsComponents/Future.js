import Image from 'next/image'
import React from 'react'
import computer from '../../../public/images/computer.png'
import paper from '../../../public/images/paper.png'
import sideArr from '../../../public/images/Sidearr.png'
import Link from 'next/link'

const Future = () => {
    return (
        <div>
            <div className='relative flex flex-col py-7 lg:flex-row justify-between' >
                <div className='flex flex-col justify-start lg:justify-center items-start lg:items-center w-full lg:w-[52vw] pt-10 lg:pt-0 lg:pl-24'>
                    <div className='flex lg:block flex-col -gap-5 ml-4'>
                        <h3 className='text-[17px] lg:text-[21px] text-[#527cbd]'>
                            We’re ready to invest in your future
                        </h3>
                        <h1 className='text-[24px] leading-[30px] lg:leading-[39px] lg:text-[40px] text-[#032263] font-extrabold tracking-normal '>
                            Are you ready to turn your passion into Profession?
                        </h1>
                        <Link href={"/contact-us"}>
                         <button className='p-[12px] border border-[#032263] mt-4 text-[#032263] w-[250px] md:w-[250px] lg:w-auto rounded rounded-lg'>
                            Book a Free Consultation
                         </button>
                        </Link>
                       
                    </div>
                </div>
                <Image src={sideArr} className=' absolute h-[150px] w-[100px] lg:w-auto lg:h-[200px]' alt=''/>
                <Image src={paper} className='absolute left-[40%] top-1/2 h-[100px] hidden lg:block' alt=''/>
                <Image className='' src={computer} alt='' />
            </div>
        </div>
    )
}

export default Future