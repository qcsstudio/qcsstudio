import React from 'react'
import Sir from '../../../public/images/Sir.png'
import Image from 'next/image'

const Vison = () => {
  return (
    <div className=''>
      <div className='pt-10 flex flex-col-reverse gap-5 lg:flex-row lg:justify-end lg:items-end'>
        <div className=' flex justify-center items-center' >
          <Image src={Sir.src} alt="" height={600} width={600} />
        </div>
        <div className='flex flex-col gap-2 lg:w-[50vw] pb-20 lg:mr-20 '>
          <div className='flex flex-col items-end bg-gradient-to-r from-transparent to-[#001f61] h-30 p-5 pr-8 lg:pr-20'>
            <span className='text-[#c4ef01] text-[21px]'>
              The Spark
            </span>
            <h3 className='text-[30px] lg:text-[40px] text-white font-bold'>
              Born from a vision
            </h3>
          </div>
          <div className='flex flex-col items-center lg:items-end pt-10 gap-5 p-0 lg:pr-20'>
            <p className='w-[90vw] lg:w-[40vw]'>
              QuantumCrafters Studio was founded on a simple yet transformative belief: every aspiring tech professional deserves the opportunity to unlock their full potential and thrive in the ever-evolving technology landscape. 🌟
            </p> <p className='w-[90vw] lg:w-[40vw]'>
              I’ve walked in the shoes of an employer searching for passionate, capable, and job-ready tech professionals. Time and again, I was met with frustration—not from a lack of talent, but from the glaring gap between academic learning and the practical skills demanded by today’s tech-driven industries. ⚙️💡
            </p><p className='w-[90vw] lg:w-[40vw]'>
              I saw young graduates brimming with ambition and potential, yet held back by outdated educational methods that fail to prepare them for real-world challenges. 💻 Their struggles weren’t failures of ambition, but rather a reflection of a system that falls short in equipping them with the confidence and tools to succeed.
            </p><p className='w-[90vw] lg:w-[40vw]'>
              This frustration became the spark that ignited our vision. 🔥 At QCS, we are redefining education and empowering the next generation of IT professionals by providing real-world skills, personalized mentorship, and the confidence they need to excel in the fast-paced tech industry. 💡💼
            </p>
          </div>
          <div className='flex flex-col items-end p-4 lg:pr-20 lg:-mb-10'>
            <p> 
            This is more than a mission—it’s a movement.</p>
            <p>And so, QCS was born. 🌱
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Vison