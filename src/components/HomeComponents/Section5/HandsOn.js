import React from 'react';
import Carousel from './Carousel';
const HandsOn = () => {
  return (
    <div className='HandsOn '>
      <div className='m-[5rem] flex flex-col gap-5 sm:px-12 md:px-24  px-5 lg:px-36'>
        <span className='text-lg mt-[2rem] -mb-2 text-[#527CBD] '>So many things to do with learning</span>
        <h2 className='w-[28rem] font-bold text-[#032263] uppercase text-3xl'>Hands-On, Project-Based Learning</h2>
      </div>
      <div className='pb-[50px]'>
        <Carousel  /> 
      </div>
    </div>
  );
}

export default HandsOn;
