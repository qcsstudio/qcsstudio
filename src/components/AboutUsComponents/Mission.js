import Image from 'next/image'
import React from 'react'
import bluArr from '../../../public/images/bluArr.png'
import success from '../../../public/images/success.png'
import bluSpot from '../../../public/images/BluSpot.png'

const Mission = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row lg:justify-center lg:gap-12'>
            <div className='flex flex-col -gap-2 lg:gap-2 p-4 mt-10 lg:mt-0 lg:pt-16 lg:pl-36'>
                <span className='text-[#527CBD] text-[21px]'>
                    Our Mission & Vision
                </span>
                <h2 className='text-[#032263] text-[24px] w-80 lg:w-full lg:text-[40px] font-bold'>
                    Empowering the Next Generation of Tech Leaders
                </h2>
                <div className='text-[16px] pt-4 lg:p-0 flex flex-col gap-3 lg:gap-5'>
                <p>
                    🚀 At QuantumCrafters Studio, our vision is to bridge the gap between academic learning 📚 and industry demands 💼, creating a future where every individual discovers their passion ❤️ and is equipped to lead 🏆, innovate ✨, and thrive in the dynamic tech world. 🌐
                </p><p>
                    Our mission is to transform passion 🔥 into profession by delivering hands-on 🛠️, career-focused training that empowers 💪 students with real-world skills, personalized mentorship 🧑‍🏫, and the confidence to excel. 🌟 We start by understanding each student’s unique interests and aspirations, guiding them to opportunities aligned with their strengths. 🎯
                </p><p>
                    Guided by our core values — Educate 💡, Empower 💪, Elevate 🚀 — we are dedicated to preparing future tech leaders with the knowledge, support, and opportunities to achieve their dreams and create a lasting impact. 💫
                </p>
                </div>
                <Image src={bluArr} height={100} width={200} alt=''/>
            </div>
            <div className='w-50vw relative'>
                <div >
                <Image className='object-fill w-[200vw] h-[100vh] hidden lg:block' src={success} alt='' />
                </div>
                <Image className=' h-[8vh] w-[100px] lg:h-[18vh] lg:w-[180px]  absolute bottom-16 right-0 lg:bottom-[15%] lg:left-[25%]' src={bluSpot} alt='' />
            </div>
            </div>
        </div>
    )
}

export default Mission