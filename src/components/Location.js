import React from 'react'
import location from '../../public/icons/location.png'
import phone from '../../public/icons/phone.png'

const Location = () => {
    return (
        <>
            <div className='flex justify-center items-center align-middle  bg-[#0E2D5B] text-white '>
                <div className='flex justify-center items-center align-middle '>
                    <img className="h-[20px] w-[20px]" src={location.src} alt="Location" />
                    <span className="text-sm p-1">SAS Nagar, Mohali, Punjab. 160055</span>
                    <span className="hidden md:block bg-white w-[1.5px] m-2 h-[20px]"></span>
                    <img className=" p-1 w-[20px] h-[20px]" src={phone.src} alt="Phone" />
                    <a
                        className="text-sm hover:text-[#c4ef01] hover:underline"
                        href="tel:+91771-960-7776"
                    >
                        +91 771-960-7776
                    </a>
                </div>
            </div>
        </>
    )
}

export default Location;