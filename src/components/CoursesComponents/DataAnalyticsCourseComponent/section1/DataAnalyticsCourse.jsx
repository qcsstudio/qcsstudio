// Components Import -----------------------------
import CourseDetail from "../../Common/HeaderSection/CourseDetail";
import RoadMap from "../../Common/RoadMap/RoadMap";
import Enroll from "../../Common/Enroll/Enroll";
import FAQ from "../../Common/FAQ/FAQ";
import Career from "../../Common/Career/Career";


// Data Import ------------------------------------
import { coursesData } from "@/Data/courses";
import { roadMapData } from "@/Data/roadMap";
import { technologyIcons } from "@/Data/technologyIcons";
import { technologyData } from "@/Data/technologyData";
import { CareerData } from "@/Data/career";

const DataAnalyticsCourse = () => {
  const courseDetailObject = coursesData[0];
  const roadMapObject = roadMapData[0];
  const iconData = technologyIcons[0];
  const {id,technologies} = technologyData[0];
  const careerObject = CareerData[0];

  return (
    <>
      <CourseDetail courseDetailObject={courseDetailObject} />
      <RoadMap roadMapObject={roadMapObject} iconData={iconData} technologies={technologies}/>
      <Career careerObject={careerObject}/>
      <Enroll/>
      <FAQ />
    </>
  )
}

export default DataAnalyticsCourse;
