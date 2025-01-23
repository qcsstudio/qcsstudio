import React from 'react';
import bgGraphic from '../../../public/images/Mask.jpg'
import arrow from '../../../public/images/arrow.png'

const AboutHero = () => {
    return (
        <>
            <div className='flex '>
                <div className="AutoHero h-[60vh] w-[100vw] border-black border flex items-start justify-center relative flex-col">
                    {/* Background Image */}
                    <img
                        className="inset-0 relative top-[150px] w-[230px] h-[400px]  z-0"
                        src={bgGraphic.src}
                        alt="Background Graphic"
                    />

                    {/* Content */}
                    <div className="relative left-[99px] bottom-[85px] z-10">
                        <h6 className='text-[#527CBD]'>Who we are</h6>
                        <span className="text-[30px] font-bold text-[#032263]">ABOUT US</span>
                    </div>
                    <img src={arrow.src}
                        className=' z-0 relative bottom-[290px] left-[350px] '
                    />
                    <div className=" z-0 relative left-[220px] bottom-[400px] flex space-x-4 items-start justify-center">
                        <div className="h-2 w-2 relative left-[90px] top-[50px] bg-gradient-to-r from-yellow-500 to-red-500 rounded-[50px] shadow-md"></div>
                        <div className="h-5 w-5 relative bottom-[40px] left-[100px] bg-gradient-to-r from-gray-200 to-red-500 rounded-[50px] shadow-md"></div>
                        <div className="h-5 w-5 bg-gradient-to-r from-blue-200 to-purple-500 rounded-[50px] shadow-md"></div>
                        <div className="h-[35px] w-[35px] relative top-[100px] left-[10px] bg-gradient-to-r from-green-200 to-blue-500 rounded-[50px] shadow-md"></div>
                    </div>

                </div>

                <div className=' bg-white z-10 border border-black h-[50vh] flex flex-col'>
                    <div className='mt-[30px] ml-[40px]'>
                    <h3 className=' mt-[30px] text-[20px] text-[#527CBD] font-bold m-5'>Takshashila Labs</h3>
                    <p className='ml-[20px] mt-[10px] w-[80%] opacity-'>
                        We believe in the power of dreams and the potential within every aspiring tech professional.
                        Born from the frustration of witnessing bright students struggle to bridge the gap between academia
                        and industry, we embarked on a mission to create a transformative learning experience.
                    </p>
                    <p className='ml-[20px] mt-[10px]  w-[80%]'>
                        We're not just another training institute. We're a community of passionate educators and industry
                        experts dedicated to empowering you with the real-world skills, mentorship, and confidence you need
                        to launch a thriving tech career. We go beyond textbooks and theory, providing hands-on,
                        project-based learning that prepares you for the demands of the industry.
                    </p>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='border border-gren-500 h-[60vh] w-[37vw]'>
                    <p>
                        Our commitment to your success is unwavering. We offer personalized guidance, expert mentorship,
                        and a 100% job placement guarantee* to ensure you not only gain technical expertise but also the
                        confidence and connections to excel in the competitive tech world.
                    </p>
                    <span>Ready to take the leap? Join us and unleash your tech potential!</span>
                    <button>Enroll Now</button>
                </div>
                <div>
                    {/* <img src={} alt="About us" /> */}
                </div>
            </div>
        </>
    );
};

export default AboutHero;
