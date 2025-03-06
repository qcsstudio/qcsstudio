"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Quiz from '@/components/QuizComponents/Quiz'
import StudentDetailForm from '@/components/QuizComponents/StudentDetailForm'
import { StudentDataContext } from '@/context/StudentDataContext'
import { useContext } from 'react'
import React from 'react'
import InterviewQuestionContainer from '../InterviewQuestionContainer/InterviewQuestionContainer'

const InterviewContainer = () => {
const { showQuiz  ,  setShowQuiz } = useContext(StudentDataContext);

  return (
    <div> 
        <Navbar/>
        { false ?  <Quiz/> : <InterviewQuestionContainer/> }
        <Footer/>
    </div>
  )
}

export default InterviewContainer
