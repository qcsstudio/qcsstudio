import QuizContainer from '@/containers/QuizContainer/QuizContainer'
import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

function QuizPage() {
  return (
    <div>
       <Navbar/>
       <QuizContainer/>
       <Footer/>
    </div>
  )
}

export default QuizPage
