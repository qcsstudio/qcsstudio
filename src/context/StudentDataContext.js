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
  GetSerachedData:()=>{ },
  status:"",
  setStatus:()=>{ },
  loadingStatus:false,
  setLoadingStatus:()=>{},
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
  const [status, setStatus] = useState("");

  const [loadingStatus,setLoadingStatus] = useState(studentIntialData.loadingStatus);

  // Create Student Data
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

  // Get Student Data
  const GetStudentData = async () => {
    try {
      setLoadingStatus(true);
      const url = "/api/students";
      const response = await fetch(url);
      if (response.status === 200) {
        const result = await response.json();
        setApiStudentData(result.students);
      }
      setLoadingStatus(false);
    } catch (error) {
      setLoadingStatus(false);
    }
  };

  // Create Quiz Question
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

  // Get Quiz Questions
  const GetQuizQuestions = async () => {
    try {
      setLoadingStatus(true);
      const url = "/api/questions";
      const response = await fetch(url);
      if (response.status === 200) {
        const result = await response.json();
        setApiQuizData(result.students);
      }
      setLoadingStatus(false);
    } catch (error) {
      setLoadingStatus(false);
    }
  };

  // Edit Quiz Question
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

  // Delete Quiz Question
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

  // Get Searched Data
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

  // Handle Send Mail
    const handleSendMail = async (formData) => {
      
      setStatus("Sending...");
      console.log(formData);
      formData.toMail = "company";
      if(formData.message == undefined){
        formData.message = "Any Message";
      }
  
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        
        if(formData.formType == "NewsLetters"){
          formData.message = "Thanks for Subscribing our NewsLetters.";
          setStatus("newsletter sent successfully!");
        }else{
          if(formData.formType == "Enroll Now"){
            setStatus("enroll successfully!");
          }else{
            setStatus("contact successfully!");
          }
          formData.message = "Thanks for Contacing Us We will Be back to you Soon.";
        }
        formData.toMail = "user";
        handleUserSendMail(formData);

      } else {
        setStatus("Error sending message.");
      }
    }

    // Handle User Send Mail
    const handleUserSendMail = async (formData) => {
      
      console.log(formData);
      
  
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
      } else {

      }
    }
  
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
        GetSerachedData,
        handleSendMail,
        status,
        loadingStatus,
        setLoadingStatus
      }}
    >
      {children}
    </StudentDataContext.Provider>
  );
};
