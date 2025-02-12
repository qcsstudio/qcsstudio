import Navbar from '@/components/Navbar'
import UiUxDesignCourseContainer from '@/containers/CoursesContainer/UiUxDesignCourseContainer/UiUxDesignCourseContainer'
import React from 'react'

export const metadata = {
  title: "UI/UX Design Course | Master User Interface and Experience Design at QCS",
  description: "Enroll in our UI/UX Design Course to master user interface and experience design. QCS offers hands-on training to help you become a proficient UI/UX designer.",
};
function page() {
  return (
    <div>
         <Navbar/>
         <UiUxDesignCourseContainer/>
    </div>
  )
}

export default page