import React from 'react'
import Image from 'next/image'
import student from '../../../public/images/student.png'
import fly from '../../../public/images/fly.png'
import bgBlu from '../../../public/images/bgBlu.png'

const valuesData = [
  {
    title: "Student-Centric Learning",
    description: "We put your needs and aspirations first, providing personalized guidance and support throughout your journey.",
    image: student
  },
  {
    title: "Practical, Hands-On Experience",
    description: "We believe in learn by doing. Our programs are designed around real-world, giving you the skills employers actually want.",
    image: student
  },
  {
    title: "Industry Relevance",
    description: "Our curriculum is constantly updated to reflect the latest trends and demands of the job market, ensuring you're always ahead.",
    image: student
  },
  {
    title: "Mentorship & Support",
    description: "Our experienced mentors are dedicated to your success, providing guidance, feedback, and encouragement every step of the way.",
    image: student
  },
  {
    title: "Community & Collaboration",
    description: "We foster a vibrant and supportive learning community where you can connect with like-minded peers, share ideas, and grow together.",
    image: student
  },
  {
    title: "Commitment to Success",
    description: "We're not satisfied until you achieve your goals. We offer a 100% job placement guarantee* and ongoing support to ensure your continued growth and success in the tech industry.",
    image: student
  }
];

const Values = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className='relative pt-5 flex flex-col justify-center items-center align-middle text-center'>
        <div className='flex flex-col justify-center items-center align-middle text-center'>
          <span className='text-[#527CBD] text-[17px] lg:text-[21px]'>
            Our Values
          </span>
          <h1 className='text-[#0E2D5B] text-[24px] lg:text-[40px] font-bold'>
            Guiding Principles
          </h1>
          <p className='text-[#313131] text-[15px] lg:text-[16px] text-center opacity-70 p-2'>
            At QuantumCrafters Studio, our values are at the core of everything we do
          </p>
        </div>
        <div className='flex flex-col lg:flex-row md:flex-row md:gap-4 flex-wrap lg:gap-5 p-10 justify-center items-center align-middle'>
          {valuesData.map((value, index) => (
            <div key={index} className="md:w-[48%] lg:w-[30%] justify-center align-middle items-center">
              <div className='flex flex-col justify-center align-middle items-center'>
                <Image className="w-[100px] h-[110px] lg:h-[150px] lg:w-[150px]" height={100} width={100} src={value.image.src} alt='' />
                <h3 className='text-[#0F2E5B] font-semibold tracking-wider lg:font-bold w-[90vw] lg:w-auto'>
                  {value.title}
                </h3>
                <p className='w-[85vw] md:w-[22vw] lg:w-[22vw] text-[#222222] opacity-70'>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Image className='absolute top-0 right-0 h-[90px] w-[130px] lg:h-[200px] lg:w-[300px]' src={fly} alt='' />
        <Image className='absolute top-0 lg:top-10 left-6 lg:left-10 w-[74px] lg:h-[200px] lg:w-[150px]' src={bgBlu} alt='' />
      </div>
    </div>
  )
}

export default Values;
