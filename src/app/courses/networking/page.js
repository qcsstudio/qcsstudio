import Navbar from '@/components/Navbar'
import NetworkingCourseContainer from '@/containers/CoursesContainer/NetworkingCourseContainer/NetworkingCourseContainer'
import React from 'react'

export const metadata = {
  title: "Networking Course|Master Network Technologies at qcsstudio",
  description: "Join our Networking Course to gain in-depth knowledge of network technologies. qcsstudio provides hands-on training to prepare you for a successful career in networking.",
};
function page() {
  
  return (
    <div>
            <Navbar/>
            <NetworkingCourseContainer/>
    </div>
  )
}

export default page