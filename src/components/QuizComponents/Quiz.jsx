"use client";
import React, { useState, useEffect } from "react";
import { data } from "../../../questionData";
import QuestionComponent from "./QuestionComponent";
import { useContext } from "react";
import { StudentDataContext } from "@/context/StudentDataContext";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader";

const Quiz = () => {
  const QUESTIONS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading,setLoading]=useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [optionCounts, setOptionCounts] = useState({
    option_a: 0,
    option_b: 0,
    option_c: 0,
    option_d: 0,
    option_e: 0,
  });
  const [quizQuestions, setQuizQuestions] = useState([]); 


  const optionMapping = {
    option_a: 'Web Development',
    option_b: 'UI/UX Design',
    option_c: 'Data Analytics and AI',
    option_d: 'Digital Marketing',
    option_e: 'Network Security',
  };

  const {
    studentData,
    setStudentData,
    CreateStudentData,
  } = useContext(StudentDataContext);



  useEffect(() => {
    const fetchQuizQuestions = async () => {
      try {
        const response = await fetch("/api/questions");
        if (!response.ok) throw new Error("Failed to fetch quiz questions");
  
        const result = await response.json();
        console.log("API Response:", result); 
  
        if (Array.isArray(result.data)) {
          setQuizQuestions(result.data); 
          setLoading(false)
        } else {
          setQuizQuestions([]);
        }
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
        setQuizQuestions([]); 
        setLoading(false);
      }
    };
  
    fetchQuizQuestions();
  }, []);
  
  const totalPages = quizQuestions?.length ? Math.ceil(quizQuestions.length / QUESTIONS_PER_PAGE) : 1;

  const currentQuestions = quizQuestions.slice(
    (currentPage - 1) * QUESTIONS_PER_PAGE,
    currentPage * QUESTIONS_PER_PAGE
  );

  const handleOptionClick = (questionIndex, optionKey) => {
    // Get the previously selected option for the question
    const previousOption = selectedOptions[questionIndex];

    // Update selected options for the current question
    setSelectedOptions((prev) => ({
      ...prev,
      [questionIndex]: optionKey,
    }));

    // Update counts
    setOptionCounts((prevCounts) => {
      const updatedCounts = { ...prevCounts };

      // Decrement the count for the previously selected option, if any
      if (previousOption) {
        updatedCounts[previousOption]--;
      }

      // Increment the count for the newly selected option
      updatedCounts[optionKey]++;

      return updatedCounts;
    });
  };

  const validateCurrentPage = () => {
    // Check if all questions on the current page have a selected option
    return currentQuestions.every(
      (_, index) =>
        selectedOptions[(currentPage - 1) * QUESTIONS_PER_PAGE + index] !== undefined
    );
  };

  const handleNextPage = () => {
    if (!validateCurrentPage()) {
      toast.error("Please select an option for all questions on this page.");
      return;
    }
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleFinishQuiz = () => {
    if (!validateCurrentPage()) {
      toast.error("Please select an option for all questions on this page.");
      return;
    }

    const passionValueKey = Object.keys(optionCounts).reduce((a, b) => {
      if (optionCounts[a] === optionCounts[b]) {
        return a;
      }
      return optionCounts[a] > optionCounts[b] ? a : b;
    });

    const quizData = {
      option_a: optionCounts.option_a,
      option_b: optionCounts.option_b,
      option_c: optionCounts.option_c,
      option_d: optionCounts.option_d,
      option_e: optionCounts.option_e,
      calculated_passion: optionMapping[passionValueKey]
    }

    setStudentData((prev) => ({
      ...prev, quizData
    }));

    const APIData = {
      fullName: studentData.formData.fullName,
      email: studentData.formData.email,
      contactNumber: studentData.formData.contactNumber,
      address: studentData.formData.address,
      collegeName: studentData.formData.collegeName,
      calculated_passion: quizData.calculated_passion,
      option_a: quizData.option_a,
      option_b: quizData.option_b,
      option_c: quizData.option_c,
      option_d: quizData.option_d,
      option_e: quizData.option_e,
    }

    CreateStudentData(APIData);
    toast.success("Quiz submitted successfully!");
  };


  useEffect(() => {
    
  }, [studentData]);

  if (loading) return <Loader/>;


  return (
    <div className="py-10" style={{ backgroundImage: "url('/images/Group (14).png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>

  
    <div className="max-w-4xl mx-auto p-3   bg-white shadow-2xl">
       <Toaster /> 
       <h1 className="text-3xl font-bold mb-6 text-center text-[#112e58] ">Quiz</h1>
      <div>
        {currentQuestions.map((question, index) => {
          const questionIndex = (currentPage - 1) * QUESTIONS_PER_PAGE + index;
          return (
            <div key={questionIndex}>
              <QuestionComponent
                question={question}
                questionIndex={questionIndex}
                selectedOption={selectedOptions[questionIndex]}
                handleOptionClick={(optionKey) => handleOptionClick(questionIndex, optionKey)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[#112e58] text-white hover:bg-[#112e58]"
            }`}
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[#112e58] text-white hover:bg-[#112e58]"
            }`}
        >
          Next
        </button>
      </div>
      {currentPage === totalPages && (
        <button
          onClick={handleFinishQuiz}
          className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Finish Quiz
        </button>
      )}
    </div>
    </div>
  );
};

export default Quiz;
