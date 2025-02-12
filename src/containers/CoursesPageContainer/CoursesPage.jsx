import CoursesEnroll from '@/components/CoursesPageComponents/CoursesEnroll'
import CoursesFirstSection from '@/components/CoursesPageComponents/CoursesFirstSection'
import OurCourses from '@/components/CoursesPageComponents/OurCourses'
import Navbar from '@/components/Navbar'
import  Book  from '@/components/CoursesPageComponents/Book'
import Footer from '@/components/Footer'

const CoursesPage = () => {

  return (
    <>
     <Navbar/>
     <CoursesFirstSection/>
     <OurCourses/>
     <CoursesEnroll/>

     <Book />
     <Footer />
    </>

  )
}
export default CoursesPage