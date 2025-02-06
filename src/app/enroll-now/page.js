import Footer from '@/components/Footer'
import Navbar from '@/components/HomeComponents/Hero/Header'
import EnrollNowContainer from '@/containers/EnrollNowContainer/EnrollNowContainer'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <EnrollNowContainer/>
        <Footer/>
    </div>
  )
}

export default page