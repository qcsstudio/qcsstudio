import AboutHero from '@/components/AboutUsComponents/AboutHero'
import Environment from '@/components/AboutUsComponents/Environment'
import Future from '@/components/AboutUsComponents/Future'
import Mission from '@/components/AboutUsComponents/Mission'
import Success from '@/components/AboutUsComponents/Success'
import Testimonial from '@/components/AboutUsComponents/Testimonial'
import Values from '@/components/AboutUsComponents/Values'
import Vison from '@/components/AboutUsComponents/Vison'
import Footer from '@/components/Footer'
import Location from '@/components/Location'
import Navbar from '@/components/Navbar'
import React from 'react'

const AboutUsContainer = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar />
        <AboutHero />
        <Vison />
        <Mission />
        <Values />
        <Environment />
        <Testimonial />
        <Success /> 
        <Future />
        <Footer />
    </div>
  )
}

export default AboutUsContainer