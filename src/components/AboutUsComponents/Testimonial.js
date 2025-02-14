import React from 'react'
import Stu1 from '../../../public/images/Stu1.png'
import Stu2 from '../../../public/images/Stu2.png'
import Stu3 from '../../../public/images/Stu3.png'
import Image from 'next/image'
import fly from '../../../public/images/fly.png'
import bgBlu from '../../../public/images/bgBlu.png'

const Testimonial = () => {
    return (
        <div className=" overflow-hidden bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen w-full flex justify-center items-center">
            <div className='relative flex flex-col gap-8 justify-center items-center w-full max-w-[1200px] text-center p-4'>
                {/* Heading */}
                <div>
                    <span className='text-[21px] text-[#527CBD]'>Hear From</span>
                    <h3 className='text-[#0E2D5B] text-[40px] font-bold'>Our Students</h3>
                    <p>Do not just take our word for it – hear from the students whose lives have been transformed by QuantumCrafters Studio!</p>
                </div>

                {/* Testimonials */}
                <div className='mt-10 flex gap-10 justify-center items-center flex-wrap lg:flex-nowrap w-full'>
                    {[
                        { name: "Vishal Verma", field: "Web Development", text: "QCS gave me the confidence and skills to land my dream job as a front-end developer. The hands-on projects and mentorship were invaluable.", img: Stu1 },
                        { name: "Aman Kashyap", field: "UI/UX Design", text: "I was hesitant to switch careers, but QCS made the transition seamless. The program gave me the practical experience and portfolio I needed to land a UI/UX design role at a top company.", img: Stu2 },
                        { name: "Amit Kumar", field: "Digital Marketing", text: "QCS taught me the latest digital marketing strategies and tools, and I'm now confidently managing campaigns for multiple clients.", img: Stu3 }
                    ].map((item, index) => (
                        <div key={index} className='flex flex-col justify-center items-center text-center w-full sm:w-[80%] md:w-[50%] lg:w-[25vw]'>
                            <Image className='h-[220px] w-[220px]' src={item.img} alt='' />
                            <h4 className='text-[20px] text-[#0E2D5B] font-semibold mt-5'>{item.name}</h4>
                            <h5 className='text-[#3F677C] text-[17px] font-medium'>{item.field}</h5>
                            <p className='mt-2'>{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Decorative Images (for larger screens only) */}
                <Image className='absolute top-10 right-24 lg:top-10 lg:left-5 scale-x-[-1] w-[80px] sm:w-[10px] lg:w-[200px] ' src={fly} alt='' />
                <Image className='absolute top-5 right-5 w-[80px] sm:w-[120px] lg:w-[200px] hidden lg:block' src={bgBlu} alt='' />
            </div>
        </div>
    )
}

export default Testimonial
