"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Quiz from '@/components/QuizComponents/Quiz'
import StudentDetailForm from '@/components/QuizComponents/StudentDetailForm'
import { StudentDataContext } from '@/context/StudentDataContext'
import { useContext } from 'react'
import React from 'react'

const InterviewContainer = () => {
const { showQuiz  ,  setShowQuiz } = useContext(StudentDataContext);

  return (
    <div> 
        <Navbar/>
        { showQuiz ?  <Quiz/> : <StudentDetailForm/> }
        <Footer/>
    </div>
  )
}

export default InterviewContainer
