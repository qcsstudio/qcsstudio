import LowerHome from '../../components/HomeComponents/LowerHome'
import Hero from '../../components/HomeComponents/Hero'
import React from 'react'
import AboutHero from '@/components/AboutCompnents/AboutHero'

const HomePageContainer = () => {
  return (
    <div>
         {/*<Header />
        <Hero /> */}
        <Hero />
        <LowerHome />
        <AboutHero />
    </div>
  )
}

export default HomePageContainer