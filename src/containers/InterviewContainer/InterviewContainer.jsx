"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { StudentDataContext } from '@/context/StudentDataContext'
import { useContext } from 'react'
import React from 'react'
import InterviewQuestionContainer from '../InterviewQuestionContainer/InterviewQuestionContainer'
import InterviewStudentForm from '../InterviewQuestionContainer/InterviewSudentForm'
import { CandidateDataContext } from '@/context/CandidateDataContext'

const InterviewContainer = () => {

const {  showTest } = useContext(CandidateDataContext);

  return (  
    <div> 
        <Navbar/>
        { showTest ?  <InterviewQuestionContainer/> : <InterviewStudentForm/>  }
        <Footer/>
    </div>
  )
}

export default InterviewContainer
