import Hero from '../../components/HomeComponents/Hero/Hero'
import React from 'react'
import Section2 from '@/components/HomeComponents/Section2/Section2'
import LowerHome from '@/components/HomeComponents/Hero/LowerHome';
import Lists from '@/components/HomeComponents/Section3/Lists';

const HomePageContainer = () => {
  return (
    <div>
        <Hero />
        <Section2 />
        <Lists />
    </div>
  )
}

export default HomePageContainer