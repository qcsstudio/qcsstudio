// Components Import -----------------------------
import CourseDetail from "../Common/HeaderSection/CourseDetail";
import RoadMap from "../Common/RoadMap/RoadMap";
import Enroll from "../Common/Enroll/Enroll";
import FAQ from "../Common/FAQ/FAQ";
import Career from "../Common/Career/Career";


// Data Import ------------------------------------
import { coursesData } from "@/Data/courses";
import { roadMapData } from "@/Data/roadMap";
import { technologyIcons } from "@/Data/technologyIcons";
import { technologyData } from "@/Data/technologyData"
import { CareerData } from "@/Data/career";
import Footer from "@/components/Footer";



const NetworkingCourse = () => {
    const courseDetailObject = coursesData[4];
    const roadMapObject = roadMapData[2];
    const iconData = technologyIcons[2];
    const careerObject = CareerData[4];
  
    const {id,technologies} = technologyData[2];
  return (
    <>
      <CourseDetail courseDetailObject={courseDetailObject}/>
      <RoadMap roadMapObject={roadMapObject} iconData={iconData} technologies={technologies}/>
      <Career careerObject={careerObject} />
      <Enroll/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default NetworkingCourse
