import Hero from '../../components/HomeComponents/Hero/Hero'
import React from 'react'
import Lists from '@/components/HomeComponents/Section3/Lists'
import Usp from '@/components/HomeComponents/Section4/Usp'
import HandsOn from '@/components/HomeComponents/Section5/HandsOn'
import Mentor from '@/components/HomeComponents/Section6/Mentor'
import TestimonialCarousel from '@/components/HomeComponents/Section7/TestimonialCarousel'
import Launch from '@/components/HomeComponents/Section8/Launch'
import Footer from '@/components/Footer'
import HomeAboutSection from '@/components/HomeComponents/Section2/HomeAboutSection'

const HomePageContainer = () => {
  return (
    <div className="w-full max-w-[100%] overflow-hidden ">
      <Hero />
      <HomeAboutSection />
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
