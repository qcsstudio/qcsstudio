import React from 'react'
import space from '../../../public/images/space.png'
import art from '../../../public/images/art.png'
import flex from '../../../public/images/flex.png'
import collab from '../../../public/images/collab.png'
import Image from 'next/image'
import dwnArr from '../../../public/images/dwnArr.png'
import paper from '../../../public/images/paper.png'

const Environment = () => {
    return (
        <div className="relative bg-[url('/images/bgAno.jpg')] bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col justify-between">
            <div className='flex flex-col justify-center items-center mt-24 gap-5 relative'>
                <div className='text-center'>
                    <h4 className='text-[17px] lg:text-[21px] font-semibold text-[#527CBD]'>
                        Our Learning Environment
                    </h4>
                    <h1 className='text-[24px] lg:text-[40px] font-bold text-[#0E2D5B]'>
                        Where Learning Comes To Life
                    </h1>
                    <p className='text-[15px] w-[85vw] lg:w-auto lg:text-[16px] tracking-wider'>
                        At QuantumCrafters Studio, we've created a learning environment that's as dynamic and innovative as the tech industry itself.
                    </p>
                </div>

                <div className=' flex gap-6 text-center mt-4 flex-wrap justify-center mb-10 p-6 bg-white shadow-lg shadow-gray-600 rounded-[30px]'>
                    {[
                        { title: "Inspiring Spaces", text: "Our modern classrooms and well-equipped labs provide the perfect setting for hands-on learning and collaboration.",img:space },
                        { title: "State-of-the-Art Technology", text: "Access the latest tools and software used by industry professionals, giving you a competitive edge.",img:art },
                        { title: "Collaborative Atmosphere", text: "Connect with like-minded peers, share ideas, and build lasting friendships in our supportive community.",img:collab },
                        { title: "In-Person Training", text: "Unlike many online programs, we provide in-person training to ensure you receive a complete learning experience.",img:flex }
                    ].map((item, index) => (
                        <div key={index} className='w-[90vw] md:w-[48%] lg:w-[20vw] flex flex-col justify-center items-center text-center'>
                            <Image className='w-[600px] rounded-[30px]' src={item.img} alt='' />
                            <span className='text-[20px] text-[#0F2E5B] font-medium'>
                                {item.title}
                            </span>
                            <p className='text-[15px] lg:text-[16px] w-[80vw] md:w-[22vw] lg:w-[20vw] mt-2'>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Absolute Positioned Images - Fixed */}
                <Image className='absolute top-0 right-20 w-[100px] lg:w-[200px] hidden md:hidden lg:block' src={dwnArr} alt='' />
                <Image className='absolute top-0 left-20 w-[100px] lg:w-[200px] hidden md:hidden lg:block' src={paper} alt='' />
            </div>
        </div>
    )
}

export default Environment
