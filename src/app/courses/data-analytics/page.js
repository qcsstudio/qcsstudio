import Navbar from '@/components/Navbar'
import DataAnalyticsCourseContainer from '@/containers/CoursesContainer/DataAnalyticsCourseContainer/DataAnalyticsCourseContainer'
import React from 'react'



export const metadata = {
  title: "Data Analytics Services | Transform Your Data into Insights with QuantumCrafters Studio",
  description: "Leverage QuantumCrafters Studio&#039; data analytics services to transform your data into actionable insights. Our experts help you make informed decisions to drive business growth.",
};
export default function page() {
  return (
    <div>
         <Navbar/>
         <DataAnalyticsCourseContainer/>
    </div>
  )
}

