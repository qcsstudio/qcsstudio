import Navbar from '@/components/Navbar'
import DigitalMarketingCourseContainer from '@/containers/CoursesContainer/DigitalMarketingCourseContainer/DigitalMarketingCourseContainer'
import React from 'react'


export const metadata = {
  title: "Digital Marketing Services in Chandigarh &amp; Mohali | Grow Your Business Online with QCS  ",
  description: "Boost your online presence with QCS &#039; digital marketing services. Our strategies are designed to increase your reach, engage your audience, and drive business growth.",
};

export default  function page() {
  return (
    <div>
          <Navbar/>
          <DigitalMarketingCourseContainer/>
    </div>
  )
}

