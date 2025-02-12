import React from 'react'
import location from '../../public/icons/location.png'
import phone from '../../public/icons/phone.png'

const Location = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row md:flex-row justify-center items-start lg:items-center md:items-center align-middle  bg-[#0E2D5B] text-white '>
                <div className='flex flex-col lg:flex-row md:flex-row justify-center lg:items-center md:items-center items-start align-middle '>
                    <div className='flex items-start p-1 gap-1'>
                    <img className="h-[20px] w-[20px]" src={location.src} alt="Location" />
                    <span className="text-sm ">Prosperity Arcade, D-229, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071</span>
                    </div>
                   
                    <span className="hidden md:block bg-white w-[1.5px] m-2 h-[20px]"></span>
                  <div  className='flex items-center'>
                  <img className=" p-1 w-[25px] h-[25px]" src={phone.src} alt="Phone" />
                    <a
                        className="text-sm hover:text-[#c4ef01] hover:underline"
                        href="tel:+91771-960-7776"
                    >
                        +91 771-960-7776
                    </a>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Location;