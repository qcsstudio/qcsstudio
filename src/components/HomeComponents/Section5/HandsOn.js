import React from 'react';
import Carousel from './Carousel'; // Adjust the path based on your file structure

const HandsOn = () => {
  return (
    <div className='HandsOn pb-4'>
      <div className='m-[5rem] flex flex-col gap-5'>
        <span className='text-lg mt-[2rem] -mb-2 text-[#527CBD] '>So many things to do with learning</span>
        <h2 className='w-[28rem] font-bold text-[#032263] uppercase text-3xl'>Hands-On, Project-Based Learning</h2>
      </div>
      <div>
        <Carousel  /> 
      </div>
    </div>
  );
}

export default HandsOn;
