
import CoursesEnroll from '@/components/CoursesPageComponents/CoursesEnroll'
import CoursesFirstSection from '@/components/CoursesPageComponents/CoursesFirstSection'
import OurCourses from '@/components/CoursesPageComponents/OurCourses'
import Navbar from '@/components/Navbar'



const CoursesPage = () => {

  return (
    <>
     <Navbar/>
     <CoursesFirstSection/>
     <OurCourses/>
     <CoursesEnroll/>
   
    </>

  )
}
export default CoursesPage
