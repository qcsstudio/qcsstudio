import Hero from '../../components/HomeComponents/Hero/Hero'
import React from 'react'
import Section2 from '@/components/HomeComponents/Section2/Section2'
import Lists from '@/components/HomeComponents/Section3/Lists'
import Usp from '@/components/HomeComponents/Section4/Usp'
import HandsOn from '@/components/HomeComponents/Section5/HandsOn'
import Mentor from '@/components/HomeComponents/Section6/Mentor'
import TestimonialCarousel from '@/components/HomeComponents/Section7/TestimonialCarousel'
import Launch from '@/components/HomeComponents/Section8/Launch'
import Footer from '@/components/Footer'

const HomePageContainer = () => {
  return (
    <div className="w-full max-w-[100%] overflow-hidden">
      <Hero />
      <Section2 />
      <Lists />
      <Usp />
      <HandsOn />
      <Mentor />
      <TestimonialCarousel />
      <Launch />
      <Footer />
    </div>
  )
}

export default HomePageContainer
