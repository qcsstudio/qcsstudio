import Navbar from '@/components/Navbar'
import DataAnalyticsCourseContainer from '@/containers/CoursesContainer/DataAnalyticsCourseContainer/DataAnalyticsCourseContainer'
import WebDevelopmentCourseContainer from '@/containers/CoursesContainer/WebDevelopmentCourseContainer/WebDevelopmentCourseContainer'
import React from 'react'

export const metadata = {
  title: "Top Web Development Company in Chandigarh and Mohali | Custom Websites  Apps with QCS",
  description: "Looking for the best web development services in Chandigarh and Mohali? We build custom websites, eCommerce stores, and web applications to help businesses grow. Contact us today!",
};

function page() {
  return (
    <div>
           <Navbar/>
           <WebDevelopmentCourseContainer/>
    </div>
  )
}

export default page