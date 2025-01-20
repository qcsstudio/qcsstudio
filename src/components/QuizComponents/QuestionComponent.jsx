"use client";
import React, { useState } from "react";

const QuestionComponent = ({ question, questionIndex, handleOptionClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (optionKey) => {
    setSelectedOption(optionKey); // Set the currently selected option
    handleOptionClick(optionKey); // Update counts in the parent
  };

  const optionLabels = ["A", "B", "C", "D", "E"];

  return (
    <div className="p-4 border rounded-md shadow-sm mb-4 bg-gray-50">
      <h3 className="text-lg font-semibold mb-4">
        {questionIndex + 1}. {question.question}
      </h3>
      <ul className="space-y-2">
        {["option_a", "option_b", "option_c", "option_d", "option_e"].map((optionKey, index) => (
          <li key={optionKey} className="flex items-center space-x-3">
            <input
              type="radio"
              id={`${questionIndex}-${optionKey}`}
              name={`question-${questionIndex}`}
              checked={selectedOption === optionKey}
              onChange={() => handleSelection(optionKey)}
              className="cursor-pointer"
            />
            <label
              htmlFor={`${questionIndex}-${optionKey}`}
              className={`cursor-pointer w-full py-2 px-4 rounded-md ${
                selectedOption === optionKey
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
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
