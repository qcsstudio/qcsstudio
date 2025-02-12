import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import EnrollNowContainer from '@/containers/EnrollNowContainer/EnrollNowContainer'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <EnrollNowContainer />
      <Footer />
    </div>
  )
}

export default page