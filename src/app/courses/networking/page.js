import Navbar from '@/components/Navbar'
import NetworkingCourseContainer from '@/containers/CoursesContainer/NetworkingCourseContainer/NetworkingCourseContainer'
import React from 'react'

function page() {
  return (
    <div>
            <Navbar/>
            <NetworkingCourseContainer/>
    </div>
  )
}

export default page