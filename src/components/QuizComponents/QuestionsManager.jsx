"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const QuestionsManager = () => {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    option_e: "",
  });

  const [showQuestions, setShowQuestions] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("/api/questions");
      setQuestions(response.data.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`/api/questions/${editId}`, formData);
      } else {
        await axios.post("/api/questions", formData);
      }
      setFormData({
        question: "",
        option_a: "",
        option_b: "",
        option_c: "",
        option_d: "",
        option_e: "",
      });
      setEditId(null);
      fetchQuestions();
    } catch (error) {
      console.error("Error saving question:", error);
    }
  };

  const handleEdit = (id) => {
    const questionToEdit = questions.find((q) => q._id === id);
    setFormData(questionToEdit);
    setEditId(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/questions/${id}`);
      fetchQuestions();
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {showQuestions ? (
        <div>
         
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Quiz Questions</h2>
            <button
              className="bg-yellow-500 px-4 py-2 rounded-md text-white hover:bg-yellow-600 transition"
              onClick={() => setShowQuestions(false)}
            >
              Show Form
            </button>
          </div>

        
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm md:text-base">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="border px-3 py-2">Question</th>
                  <th className="border px-3 py-2">Option A</th>
                  <th className="border px-3 py-2">Option B</th>
                  <th className="border px-3 py-2 hidden md:table-cell">Option C</th>
                  <th className="border px-3 py-2 hidden md:table-cell">Option D</th>
                  <th className="border px-3 py-2 hidden md:table-cell">Option E</th>
                  <th className="border px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((question) => (
                  <tr key={question._id} className="hover:bg-gray-100">
                    <td className="border px-3 py-2">{question.question}</td>
                    <td className="border px-3 py-2">{question.option_a}</td>
                    <td className="border px-3 py-2">{question.option_b}</td>
                    <td className="border px-3 py-2 hidden md:table-cell">{question.option_c}</td>
                    <td className="border px-3 py-2 hidden md:table-cell">{question.option_d}</td>
                    <td className="border px-3 py-2 hidden md:table-cell">{question.option_e}</td>
                    <td className="border px-3 py-2 flex flex-col md:flex-row md:space-x-2">
                      <button
                        onClick={() => handleEdit(question._id)}
                        className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 mb-1 md:mb-0"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(question._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>
        
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Question Manager</h2>
            <button
              className="bg-yellow-500 px-4 py-2 rounded-md text-white hover:bg-yellow-600 transition"
              onClick={() => setShowQuestions(true)}
            >
              Show Questions
            </button>
          </div>

         
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 bg-white p-6 rounded-lg shadow-md"
          >
            <label className="font-medium">
              Question:
              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                rows="2"
                required
              />
            </label>

            {["option_a", "option_b", "option_c", "option_d", "option_e"].map((option, index) => (
              <label key={option} className="font-medium">
                Option {String.fromCharCode(65 + index)}:
                <textarea
                  name={option}
                  value={formData[option]}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  rows="2"
                  required={index < 2} 
                />
              </label>
            ))}

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {editId ? "Update" : "Create"} Question
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default QuestionsManager;
