import Image from 'next/image'
import React from 'react'

const Lists = () => {
  return (
    <>

      <div className='ListPage flex justify-center space-x-[20vw] mt-60'>
      <div className='PhaseOne'>
       <span>
       What we have
        </span>
        <h2>
        Course Highlights
        </h2>
        <p>
        Our Programs: Your Pathway to Tech Success
        </p>
        <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
            <li>Network & Security</li>
            <li>Data Science & AI</li>
        </ul>
      </div>  
       <div className='PhaseTwo'>
            <p>
                <span>
                    F
                </span>
                rom stunning websites to powerful web applications, master the art of coding and build the digital future.
            </p>
            <button>
            Enroll Now
            </button>
            {/* <Image /> */}
      </div>
      </div>
    </>
  )
}

export default Lists