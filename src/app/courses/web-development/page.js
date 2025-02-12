import Navbar from '@/components/Navbar'
import DataAnalyticsCourseContainer from '@/containers/CoursesContainer/DataAnalyticsCourseContainer/DataAnalyticsCourseContainer'
import WebDevelopmentCourseContainer from '@/containers/CoursesContainer/WebDevelopmentCourseContainer/WebDevelopmentCourseContainer'
import React from 'react'

function page() {
  return (
    <div>
           <Navbar/>
           <WebDevelopmentCourseContainer/>
    </div>
  )
}

export default page