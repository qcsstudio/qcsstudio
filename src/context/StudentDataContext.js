"use client"
import { createContext, useState } from "react"

const studentIntialData = {
  showQuiz: false,
  setShowQuiz: () => { },
  studentData: null,
  setStudentData: () => { },
  CreateStudentData: () => { },
  apiStudentData: null,
  setApiStudentData: () => { },
  GetStudentData: () => { },
  CreateQuizQuestion: () => { },
  apiQuizData: null,
  setApiQuizData: () => { },
}

export const StudentDataContext = createContext(studentIntialData);

export const StudentDataContextProvider = ({ children }) => {

  const [showQuiz, setShowQuiz] = useState(studentIntialData.showQuiz);
  const [studentData, setStudentData] = useState(studentIntialData.studentData);
  const [apiStudentData, setApiStudentData] = useState(studentIntialData.apiStudentData);
  const [apiQuizData, setApiQuizData] = useState(studentIntialData.apiQuizData);

  const CreateStudentData = async (APIData) => {
    try {

      const url = "api/students";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(APIData),
      })

      const result = await response.json();
    } catch (error) {
      console.error('error', error)
    }
  }

  const GetStudentData = async () => {
    try {
      const url = "/api/students"
      const response = await fetch(url);
      if (response.status === 200) {
        const result = await response.json()
        setApiStudentData(result.students);
      }
    } catch (error) {
    }
  }

  const CreateQuizQuestion = async (APIData) => {
    try {
      ("Quiz Data Before submission", APIData);
      const url = "api/questions";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(APIData),
      })

      const result = await response.json();
    } catch (error) {
      console.error('error', error)
    }
  }

  const GetQuizQuestions = async () => {
    try {
      const url = "/api/questions"
      const response = await fetch(url);
      if (response.status === 200) {
        const result = await response.json()
        setApiQuizData(result.students);
      }
    } catch (error) {
    }
  }

  const EditQuizQuestion = async (APIData , id) => {
    try {
      const url = `api/questions/${id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(APIData),
      })

      const result = await response.json();
    } catch (error) {
      console.error('error', error)
    }
  }

  const DeleteQuizQuestion = async (id) => {
    try {
      const url = `api/questions/${id}`;
      const response = await fetch(url, {
        method: 'Delete',
      })

      const result = await response.json();
    } catch (error) {
      console.error('error', error)
    }
  }

  return (
    <StudentDataContext.Provider value={{
      showQuiz,
      setShowQuiz,
      studentData,
      setStudentData,
      CreateStudentData,
      apiStudentData,
      setApiStudentData,
      GetStudentData,
      CreateQuizQuestion,
      apiQuizData,
      setApiQuizData,
      GetQuizQuestions,
      EditQuizQuestion,
      DeleteQuizQuestion
    }}>
      {children}
    </StudentDataContext.Provider>
  );
};