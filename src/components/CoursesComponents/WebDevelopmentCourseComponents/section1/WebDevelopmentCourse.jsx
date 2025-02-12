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
import Footer from "@/components/Footer";

const DataAnalyticsCourse = () => {
  const courseDetailObject = coursesData[1];
  const roadMapObject = roadMapData[1];
  const iconData = technologyIcons[1];
  const careerObject = CareerData[1];

  const {id,technologies} = technologyData[1];
  return (
    <div className="w-[100%] overflow-hidden">
      <CourseDetail courseDetailObject={courseDetailObject} />
      <RoadMap roadMapObject={roadMapObject} iconData={iconData} technologies={technologies}/>
      <Career careerObject={careerObject} />
      <Enroll/>
      <FAQ />
      <Footer/>
    </div>
  )
}

export default DataAnalyticsCourse;
