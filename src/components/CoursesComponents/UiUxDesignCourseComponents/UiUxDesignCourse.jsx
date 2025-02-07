// Components Import -----------------------------
import Enroll from "../Common/Enroll/Enroll";
import FAQ from "../Common/FAQ/FAQ";
import RoadMap from "../Common/RoadMap/RoadMap";
import CourseDetail from "../Common/HeaderSection/CourseDetail";
import Career from "../Common/Career/Career";

// Data Import ------------------------------------
import { coursesData } from "@/Data/courses";
import { roadMapLongData } from "@/Data/roadMapLong";
import { technologyIcons } from "@/Data/technologyIcons";
import { technologyData } from "@/Data/technologyData"
import { CareerData } from "@/Data/career";

const UiUxDesignCourse = () => {
    const courseDetailObject = coursesData[2];
    const roadMapObject = roadMapLongData[0];
    const iconData = technologyIcons[2];
    const careerObject = CareerData[2];

    // technology card data
    const {id,technologies} = technologyData[2];
  return (
    <>
      <CourseDetail courseDetailObject={courseDetailObject}/>
      <RoadMap roadMapObject={roadMapObject} iconData={iconData} technologies={technologies} />
      <Career careerObject={careerObject} />
      <Enroll/>
      <FAQ />
    </>
  )
}

export default UiUxDesignCourse
