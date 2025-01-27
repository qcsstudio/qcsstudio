import React from 'react';

const CommitmentSection = () => {
  return (
    <div className="col-span-1 bg-white border h-[51vh] flex flex-col items-center justify-center my-[-30%]">
      <p className="text-[#4E535C] px-6">
        Our commitment to your success is unwavering. We offer personalized guidance, expert mentorship, and a{' '}
        <span className="font-bold">100% job placement guarantee*</span> to ensure you not only gain technical
        expertise but also the confidence and connections to excel in the competitive tech world.
      </p>
      <p className="text-[#527CBD] mt-6 text-xl w-[30vw]">Ready to take the leap? Join us and unleash your tech potential!</p>
      <button className="bg-[#112E58] absolute left-5 text-white py-2 px-6 rounded-lg mt-[20%]">Enroll Now</button>
    </div>
  );
};

export default CommitmentSection;
