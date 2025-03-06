"use client";
import React, { useState, useEffect } from "react";
import { quizData } from "@/Data/interviewQuestion";

function InterviewQuestionContainer() {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Handle tab switching
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount((prev) => prev + 1);
        setShowPopup(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // If user switches tabs more than once, cancel the quiz
  useEffect(() => {
    if (tabSwitchCount > 1) {
      setShowResult(true);
    }
  }, [tabSwitchCount]);

  // Handle Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      handleNextQuestion();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleOptionClick = (option) => setSelectedOption(option);

  const handleNextQuestion = () => {
    const section = quizData[currentSection];
    const question = section.questions[currentQuestion];

    if (selectedOption === question.answer) {
      setScore((prev) => prev + 1);
    }

    setSelectedOption(null);
    setTimeLeft(30);

    if (currentQuestion + 1 < section.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else if (currentSection + 1 < quizData.length) {
      setCurrentSection((prev) => prev + 1);
      setCurrentQuestion(0);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Interview Quiz</h1>

      {/* Show Popup if User Switches Tab Once */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <h2 className="text-xl font-bold text-red-600">Warning! 🚨</h2>
            <p className="mt-2 text-gray-700">You switched tabs! Stay on this page or the quiz will be canceled.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => setShowPopup(false)}
            >
              Continue Quiz
            </button>
          </div>
        </div>
      )}

      {!showResult ? (
        <div className="bg-white p-6 shadow-md rounded-md w-96 select-none">
          <h2 className="text-lg font-semibold">{quizData[currentSection].section}</h2>
          <h3 className="text-md mt-2">{quizData[currentSection].questions[currentQuestion].question}</h3>

          <p className="text-red-500 mt-2">Time Left: {timeLeft} sec</p>

          <div className="mt-4">
            {quizData[currentSection].questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`block w-full p-2 my-2 border rounded-md text-left transition ${
                  selectedOption === option ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            className={`mt-4 p-2 rounded-md w-full ${
              selectedOption ? "bg-blue-500 text-white" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {currentQuestion + 1 < quizData[currentSection].questions.length || currentSection + 1 < quizData.length
              ? "Next Question"
              : "See Results"}
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 shadow-md rounded-md w-96 text-center">
          <h2 className="text-xl font-bold">{tabSwitchCount > 1 ? "Quiz Cancelled! ❌" : "Quiz Completed!"}</h2>
          <p className="text-lg mt-2">
            {tabSwitchCount > 1
              ? "You switched tabs multiple times. The quiz has been canceled."
              : `Your score: ${score} / ${quizData.reduce((total, section) => total + section.questions.length, 0)}`}
          </p>
        </div>
      )}
    </div>
  );
}

export default InterviewQuestionContainer;
