import React, { useState } from "react";

const quizData = [
    {
      section: "Aptitude Questions",
      questions: [
        {
          question: "A company’s website traffic grows by 15% every month. If it had 20,000 visitors in January, how many visitors will it have in March?",
          options: ["23,000", "26,450", "28,000", "30,500"],
          answer: "26,450",
        },
        {
          question: "A digital marketing agency spends ₹75,000 on ads. If 60% goes to Facebook Ads and the rest to Google Ads, how much was spent on Google Ads?",
          options: ["₹30,000", "₹45,000", "₹50,000", "₹55,000"],
          answer: "₹30,000",
        },
        {
          question: "A web page takes 5 seconds to load. After optimization, it loads in 3 seconds. What is the percentage decrease in load time?",
          options: ["25%", "40%", "50%", "60%"],
          answer: "40%",
        },
        {
          question: "A cybersecurity analyst detects 80 cyber threats in a week. If the number increases by 25% each week, how many threats will there be in the third week?",
          options: ["125", "140", "150", "160"],
          answer: "150",
        },
        {
          question: "A website’s bounce rate is 40%, meaning 40% of visitors leave after viewing one page. If 10,000 users visit, how many leave without interacting?",
          options: ["2,000", "4,000", "6,000", "8,000"],
          answer: "4,000",
        },
        {
          question: "A data analyst processes 250,000 records in 5 hours. What is the average number of records processed per minute?",
          options: ["600", "800", "1,000", "1,250"],
          answer: "1,000",
        },
        {
          question: "If an e-commerce website converts 5% of visitors into buyers, how many buyers would there be out of 50,000 visitors?",
          options: ["1,000", "2,000", "2,500", "3,000"],
          answer: "2,500",
        },
        {
          question: "A UI/UX designer reduces unnecessary clicks in a checkout process, improving the conversion rate from 3% to 4%. If 50,000 users visit, how many additional sales occur?",
          options: ["50", "250", "500", "750"],
          answer: "500",
        },
        {
          question: "An AI model has an accuracy of 92%. If it processes 5,000 images, how many are misclassified?",
          options: ["100", "200", "300", "400"],
          answer: "400",
        },
        {
          question: "If a cybersecurity team identifies 300 phishing emails and blocks 85% of them, how many phishing emails get through?",
          options: ["35", "45", "50", "60"],
          answer: "45",
        }
      ]
    },
    {
      section: "Technical Questions",
      questions: [
        {
          question: "Which metric measures how often an ad is clicked compared to how often it is shown?",
          options: ["CPC", "CTR", "CPM", "CPA"],
          answer: "CTR",
        },
        {
          question: "Which of these factors directly influences SEO rankings?",
          options: ["High-quality backlinks", "Long meta descriptions", "Excessive keywords", "Hidden text"],
          answer: "High-quality backlinks",
        },
        {
          question: "Which of these is a backend language?",
          options: ["HTML", "CSS", "Python", "Bootstrap"],
          answer: "Python",
        },
        {
          question: "Which HTTP status code means 'Not Found'?",
          options: ["200", "301", "404", "500"],
          answer: "404",
        },
        {
          question: "What does CSS stand for?",
          options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Custom Style Syntax"],
          answer: "Cascading Style Sheets",
        },
        {
          question: "Which JavaScript framework is used for building single-page applications?",
          options: ["Django", "React.js", "PHP", "Laravel"],
          answer: "React.js",
        },
        {
          question: "Which database language is used for querying structured data?",
          options: ["HTML", "SQL", "Python", "JavaScript"],
          answer: "SQL",
        },
        {
          question: "Which tool is widely used for creating UI wireframes and prototypes?",
          options: ["Visual Studio Code", "Figma", "MySQL", "TensorFlow"],
          answer: "Figma",
        }
      ]
    }
  ];
  

function InterviewQuestionContainer() {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const section = quizData[currentSection];
    const question = section.questions[currentQuestion];
    
    if (selectedOption === question.answer) {
      setScore(score + 1);
    }
    
    setSelectedOption(null);
    
    if (currentQuestion + 1 < section.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection + 1 < quizData.length) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Interview Quiz</h1>
      {!showResult ? (
        <div className="bg-white p-6 shadow-md rounded-md w-96">
          <h2 className="text-lg font-semibold">{quizData[currentSection].section}</h2>
          <h3 className="text-md mt-2">{quizData[currentSection].questions[currentQuestion].question}</h3>
          <div className="mt-4">
            {quizData[currentSection].questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`block w-full p-2 my-2 border rounded-md text-left ${
                  selectedOption === option ? "bg-blue-300" : "bg-gray-200"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full"
          >
            {currentQuestion + 1 < quizData[currentSection].questions.length || currentSection + 1 < quizData.length
              ? "Next Question"
              : "See Results"}
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 shadow-md rounded-md w-96 text-center">
          <h2 className="text-xl font-bold">Quiz Completed!</h2>
          <p className="text-lg mt-2">Your score: {score} / {quizData.reduce((total, section) => total + section.questions.length, 0)}</p>
        </div>
      )}
    </div>
  );
}

export default InterviewQuestionContainer;
