"use client"
import { StudentDataContext } from "@/context/StudentDataContext";
import { useContext, useEffect, useState } from "react";

const EnrollNowContainer = () => {

  const {handleSendMail,status} = useContext(StudentDataContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    program: "",
    preferredStartDate: "",
    motivation: "",
    careerGoal: "",
    source: "",
    formType:"Enroll Now"
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required.";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required.";
    if (!formData.program) newErrors.program = "Course selection is required.";
    if (!formData.preferredStartDate) newErrors.preferredStartDate = "Preferred start date is required.";
    if (!formData.motivation) newErrors.motivation = "Motivation is required.";
    if (!formData.careerGoal) newErrors.careerGoal = "Career goal is required.";
    if (!formData.source) newErrors.source = "Source is required.";
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Handle form submission (e.g., send to an API)
      handleSendMail(formData);
      
    } else {
      setErrors(formErrors);
    }
  };

  useEffect(()=>{
    if(status == "Message sent successfully!"){
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        program: "",
        preferredStartDate: "",
        motivation: "",
        careerGoal: "",
        source: "",
        formType:"Enroll Now"
      })
    }
    
  },[status])

  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-white rounded shadow-2xl">
      <h2 className="bg-gradient-to-r from-[#c4ef01] to-[#01a6ff] bg-clip-text text-transparent md:text-[40px] xs:text-[30px] p-0 font-bold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm text-[#112e58] font-bold mb-1" htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`border-b border-gray-600 p-2 w-full rounded-t-none font-bold ${errors.name ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm text-[#112e58] font-bold font-bold mb-1" htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`border-b border-gray-600 p-2 w-full rounded-t-none  ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm text-[#112e58] font-bold  mb-1" htmlFor="phoneNumber">Phone Number *</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`border-b border-gray-600 p-2 w-full rounded-t-none  ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm text-[#112e58] font-bold mb-1" htmlFor="dateOfBirth">Date Of Birth *</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={`border-b border-gray-600 p-2 w-full rounded-t-none  ${errors.dateOfBirth ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
        </div>

        <h2 className="bg-gradient-to-r from-[#c4ef01] to-[#01a6ff] bg-clip-text text-transparent md:text-[40px] xs:text-[30px] p-0 font-bold mb-4 ">Choose Your Program</h2>

        <div className="mb-4">
          <label className="block text-sm text-[#112e58] font-bold mb-1" htmlFor="program">Choose Your Program *</label>
          <select
            
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className={`border-b border-gray-600 p-2 w-full text-[#112e58] rounded-t-none  ${errors.program ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="" disabled>Select a Course</option>
            <option value="Web development">Web development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Data Scince And AI">Data Scince And AI</option>
            <option value="UI/UX Designing">UI/UX Designing</option>
            <option value="Networking">Networking</option>
          </select>
          {errors.program && <p className="text-red-500 text-sm">{errors.program}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm text-[#112e58] font-bold mb-1" htmlFor="preferredStartDate">Preferred Start Date *</label>
          <input
            type="date"
            id="preferredStartDate"
            name="preferredStartDate"
            value={formData.preferredStartDate}
            onChange={handleChange}
            className={`border-b border-gray-600 p-2 w-full rounded-t-none  ${errors.preferredStartDate ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.preferredStartDate && <p className="text-red-500 text-sm">{errors.preferredStartDate}</p>}
        </div>

        <h2 className="bg-gradient-to-r from-[#c4ef01] to-[#01a6ff] bg-clip-text text-transparent md:text-[40px] xs:text-[30px] p-0 font-bold mb-4">Quick Questions</h2>

        <div className="mb-4">
          <label className="block text-sm text-[#112e58] font-bold mb-1" htmlFor="motivation">What motivates you to join this course? *</label>
          <textarea
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            className={`border-b border-gray-600 p-2 w-full rounded-t-none  ${errors.motivation ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.motivation && <p className="text-red-500 text-sm">{errors.motivation}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm text-[#112e58] font-bold mb-1" htmlFor="careerGoal">What's your career goal? *</label>
          <textarea
            id="careerGoal"
            name="careerGoal"
            value={formData.careerGoal}
            onChange={handleChange}
            className={`border-b border-gray-600 p-2 w-full rounded-t-none  ${errors.careerGoal ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.careerGoal && <p className="text-red-500 text-sm">{errors.careerGoal}</p>}
        </div>
        <h2 className="bg-gradient-to-r from-[#c4ef01] to-[#01a6ff] bg-clip-text text-transparent md:text-[40px] xs:text-[30px] p-0 font-bold mb-4">Survey</h2>
        <div className="mb-4">
          <label className="block text-sm text-[#112e58]  font-bold mb-1" htmlFor="source">How Did You Hear About Us? *</label>
          <input
            type="text"
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className={`border-b border-gray-600 p-2 w-full rounded-t-none  ${errors.source ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.source && <p className="text-red-500 text-sm">{errors.source}</p>}
        </div>

        <button type="submit" className="bg-blue-800 my-5 text-white px-4 py-2 rounded hover:bg-blue-900">Send Message</button>
      </form>
      {status && (
        <div className="mt-4 text-center">
          <p className={`text-lg font-semibold ${status === "Message sent successfully!" ? "text-green-600" : "text-red-600"}`}>
            {status}
          </p>
        </div>
      )}
    </div>
  );
};

export default EnrollNowContainer;
