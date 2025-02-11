"use client"
import Quiz from '@/components/QuizComponents/Quiz'
import StudentDetailForm from '@/components/QuizComponents/StudentDetailForm'
import { StudentDataContext } from '@/context/StudentDataContext'
import { useContext } from 'react'
import React from 'react'

const QuizContainer = () => {
const { showQuiz  ,  setShowQuiz } = useContext(StudentDataContext);

  return (
    <div> 
        {/* { showQuiz ?  <Quiz/> : <StudentDetailForm/> } */}
        { true ?  <Quiz/> : <StudentDetailForm/> }

    </div>
  )
}

export default QuizContainer
