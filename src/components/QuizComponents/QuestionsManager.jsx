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
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Question Manager</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 bg-white p-6 rounded-lg shadow-md mb-8"
      >
        <label className="font-medium">
          Question:
          <textarea
            name="question"
            placeholder="Enter the question"
            value={formData.question}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            rows="3"
            required
          />
        </label>

        <label className="font-medium">
          Option A:
          <textarea
            name="option_a"
            placeholder="Enter option A"
            value={formData.option_a}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            rows="2"
            required
          />
        </label>

        <label className="font-medium">
          Option B:
          <textarea
            name="option_b"
            placeholder="Enter option B"
            value={formData.option_b}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            rows="2"
            required
          />
        </label>

        <label className="font-medium">
          Option C:
          <textarea
            name="option_c"
            placeholder="Enter option C"
            value={formData.option_c}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            rows="2"
          />
        </label>

        <label className="font-medium">
          Option D:
          <textarea
            name="option_d"
            placeholder="Enter option D"
            value={formData.option_d}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            rows="2"
          />
        </label>

        <label className="font-medium">
          Option E:
          <textarea
            name="option_e"
            placeholder="Enter option E"
            value={formData.option_e}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            rows="2"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editId ? "Update" : "Create"} Question
        </button>
      </form>

      {/* Table */}
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Question</th>
            <th className="border border-gray-300 px-4 py-2">Option A</th>
            <th className="border border-gray-300 px-4 py-2">Option B</th>
            <th className="border border-gray-300 px-4 py-2">Option C</th>
            <th className="border border-gray-300 px-4 py-2">Option D</th>
            <th className="border border-gray-300 px-4 py-2">Option E</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question._id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 whitespace-normal">{question.question}</td>
              <td className="border border-gray-300 px-4 py-2 whitespace-normal">{question.option_a}</td>
              <td className="border border-gray-300 px-4 py-2 whitespace-normal">{question.option_b}</td>
              <td className="border border-gray-300 px-4 py-2 whitespace-normal">{question.option_c}</td>
              <td className="border border-gray-300 px-4 py-2 whitespace-normal">{question.option_d}</td>
              <td className="border border-gray-300 px-4 py-2 whitespace-normal">{question.option_e}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleEdit(question._id)}
                  className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(question._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsManager;
