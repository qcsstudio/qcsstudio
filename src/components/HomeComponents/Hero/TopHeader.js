import React from 'react'

const TopHeader = () => {
    return (
        <div className='TopHeader bg-[#0e2d5b] p-[10px_0] text-[#ffff]'>
            <div className='container flex justify-center gap-1 h-[30px]'>
                <img className='h-[20px] w-[20px] flex justify-center relative top-[2px] right-[10px] ' src='https://www.takshashilalabs.com/wp-content/uploads/2024/11/loc.png' />
                <span className='relative right-[10px]'>
                    SAS Nagar, Mohali, Punjab. 160055
                </span>
                <div className='flex justify-center gap-3'>
                   <span className='bg-white w-[0.7px] h-[29px] '>
                   
                   </span>
                    <a className='flex justify-center gap-1  hover:text-[#c4ef01] hover:underline' href='tel:+91771-960-7776'>
                        <img className='w-[20px] h-[20px] relative top-[4px]' src='https://www.takshashilalabs.com/wp-content/uploads/2024/11/call.png' />
                        +91 771-960-7776
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopHeader