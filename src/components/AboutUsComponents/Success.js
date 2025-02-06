import React from 'react'

const Success = () => {
    return (
        <div className='  sm:overflow-hidden'>
            <div className=" w-[102vw] bg-[url('/images/bgSuccess.jpg')] bg-cover bg-center bg-no-repeat min-h-screen lg:h-[100vh] pl-2 flex flex-col justify-start items-start gap-10">
                <div className='flex flex-col justify-start m-3 pt-14 lg:pt-0 lg:m-24 gap-3'>
                    <h4 className='text-[17px] lg:text-[21px] text-[#C1EE04]'>
                        Your Success Is
                    </h4>
                    <h1 className=' text-[24px] -mt-5 lg:mt-auto lg:text-[40px] text-white uppercase font-bold '>
                        our Priority
                    </h1>
                    <p className=' tracking-wider lg:tracking-normal w-full lg:w-[30vw] text-white text-[16px]'>
                        At Takshashila Labs, your success is our top priority. We're not just here to teach you; we're here to guide you, support you, and empower you to achieve your dreams.
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row gap-2 m-2 -mt-4 lg:m-24 lg:-mt-10 '>
                    <div className='flex flex-col gap-2 '>
                        <h3 className='text-white text-[19px] lg:text-[27px] lg:w-[20vw] font-bold'>
                            <span className='text-[#C1EE04]'>100%</span> Job Placement <span className='text-[#C1EE04]'>Guarantee</span>
                        </h3>
                        <p className='text-white w-full lg:w-auto mb-5'>
                            We're so confident in our training that we offer a 100% job placement guarantee. If you complete our program and don't get a job within 6 months, we'll refund your tuition*.
                        </p>
                    </div>
                    <div className='flex flex-col gap-1 lg:gap-2'>
                        <h3 className='text-white text-[19px] lg:text-[27px] lg:w-[20vw] font-bold'>
                            Personalized <span className='text-[#C1EE04]'>Guidance & Mentorship
                            </span>
                        </h3>
                        <p className='text-white w-full lg:w-auto'>
                            We understand that every student is unique. That's why we provide individualised support and mentorship throughout your journey, helping you identify your strengths, overcome challenges, and achieve your goals.
                        </p>
                    </div>
                    <div className='flex flex-col gap-2 mt-6 lg:mt-0'>
                        <h3 className='text-white text-[19px] lg:text-[27px] lg:w-[17vw] font-bold'>
                            Ongoing <span className='text-[#C1EE04]'>Support & Community
                            </span></h3>
                        <p className='text-white w-full '>
                            Our commitment doesn't end at providing Skills. We offer a vibrant alumni network, continued learning opportunities, and ongoing support to ensure your continued growth and success in the tech industry.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Success