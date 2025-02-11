"use client";
import React from "react";

const QuestionComponent = ({ question, questionIndex, selectedOption, handleOptionClick }) => {
  const optionLabels = ["A", "B", "C", "D", "E"];

  return (
    <div className="p-4 border rounded-md shadow-sm mb-4 bg-gray-50 ">
        <h3 className="text-lg text-[#112e58] font-semibold mb-4 overflow-visible ">
          {questionIndex + 1}. {question.question}
        </h3>
      <ul className="space-y-2">
        {["option_a", "option_b", "option_c", "option_d", "option_e"].map((optionKey, index) => (
          <li key={optionKey} className="flex items-center space-x-3">
            <input
              type="radio"
              id={`${questionIndex}-${optionKey}`}
              name={`question-${questionIndex}`}
              checked={selectedOption === optionKey} // Controlled component
              onChange={() => handleOptionClick(optionKey)}
              className="cursor-pointer accent-[#112e58]"
            />
            <label
              htmlFor={`${questionIndex}-${optionKey}`}
              className={`cursor-pointer w-full py-2 px-4 rounded-md ${
                selectedOption === optionKey ? "bg-[#112e58] text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              <span className="font-bold">{optionLabels[index]}.</span> {question[optionKey]}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;
