// Components Import -----------------------------
import CourseDetail from "../Common/HeaderSection/CourseDetail";
import RoadMap from "../Common/RoadMap/RoadMap";
import Enroll from "../Common/Enroll/Enroll";
import FAQ from "../Common/FAQ/FAQ"; 

// Data Import ------------------------------------
import { coursesData } from "@/Data/courses";
import { roadMapLongData } from "@/Data/roadMapLong";
import { technologyIcons } from "@/Data/technologyIcons";
import { technologyData } from "@/Data/technologyData"
import Career from "../Common/Career/Career";
import { CareerData } from "@/Data/career";

const DigitalMarketingCourse = () => {
    const courseDetailObject = coursesData[3];
    const roadMapObject = roadMapLongData[1];
    const iconData = technologyIcons[2];
    const careerObject = CareerData[3];

    // technology card data
    const {id,technologies} = technologyData[3];
  return (
    <>
      <CourseDetail courseDetailObject={courseDetailObject}/>
      <RoadMap roadMapObject={roadMapObject} iconData={iconData} technologies={technologies}/>
      <Career careerObject={careerObject} />
      <Enroll/>
      <FAQ/>
    </>
  )
}

export default DigitalMarketingCourse
