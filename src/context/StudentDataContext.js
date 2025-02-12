"use client";
import { createContext, useState } from "react";

const studentIntialData = {
  showQuiz: false,
  setShowQuiz: () => {},
  studentData: null,
  setStudentData: () => {},
  CreateStudentData: () => {},
  apiStudentData: null,
  setApiStudentData: () => {},
  GetStudentData: () => {},
  CreateQuizQuestion: () => {},
  apiQuizData: null,
  setApiQuizData: () => {},
  serachBlogsData: null,
  setSearchBlogsData: () => {},
  GetSerachedData:()=>{ }
};

export const StudentDataContext = createContext(studentIntialData);

export const StudentDataContextProvider = ({ children }) => {
  const [showQuiz, setShowQuiz] = useState(studentIntialData.showQuiz);
  const [studentData, setStudentData] = useState(studentIntialData.studentData);
  const [apiStudentData, setApiStudentData] = useState(
    studentIntialData.apiStudentData
  );
  const [apiQuizData, setApiQuizData] = useState(studentIntialData.apiQuizData);
  const [serachBlogsData, setSearchBlogsData] = useState(studentIntialData.serachBlogsData);

  const CreateStudentData = async (APIData) => {
    try {
      const url = "api/students";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(APIData),
      });

      const result = await response.json();
    } catch (error) {
      console.error("error", error);
    }
  };

  const GetStudentData = async () => {
    try {
      const url = "/api/students";
      const response = await fetch(url);
      if (response.status === 200) {
        const result = await response.json();
        setApiStudentData(result.students);
      }
    } catch (error) {}
  };

  const CreateQuizQuestion = async (APIData) => {
    try {
      "Quiz Data Before submission", APIData;
      const url = "api/questions";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(APIData),
      });

      const result = await response.json();
    } catch (error) {
      console.error("error", error);
    }
  };

  const GetQuizQuestions = async () => {
    try {
      const url = "/api/questions";
      const response = await fetch(url);
      if (response.status === 200) {
        const result = await response.json();
        setApiQuizData(result.students);
      }
    } catch (error) {}
  };

  const EditQuizQuestion = async (APIData, id) => {
    try {
      const url = `api/questions/${id}`;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(APIData),
      });

      const result = await response.json();
    } catch (error) {
      console.error("error", error);
    }
  };

  const DeleteQuizQuestion = async (id) => {
    try {
      const url = `api/questions/${id}`;
      const response = await fetch(url, {
        method: "Delete",
      });

      const result = await response.json();
    } catch (error) {
      console.error("error", error);
    } 
  };

  const GetSerachedData = async () => {
    try {
      console.log("hello")
      const url = `api/serach?q=${slug}`;
      console.log("url " , url)
      const response = await fetch(url);
      if (response.status === 200) {
        const result = await response.json();
        setSearchBlogsData(result.data);
      }
    } catch (error) {}
  };
  
  return (
    <StudentDataContext.Provider
      value={{
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
        DeleteQuizQuestion,
        GetSerachedData
      }}
    >
      {children}
    </StudentDataContext.Provider>
  );
};
