"use client";
import { StudentDataContext } from "@/context/StudentDataContext";
import { useState } from "react";
import { useContext } from "react";
import Image from "next/image";

export default function StudentDetailForm() {
  const { setShowQuiz, setStudentData , studentData } = useContext(StudentDataContext);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    address: "",
    collegeName: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact Number is required.";
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact Number must be 10 digits.";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }
    if (!formData.collegeName.trim()) {
      newErrors.collegeName = "College Name is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      setStudentData((prev) =>( {
        ...prev, formData
      }))
      
      setShowQuiz(true);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="py-20"   style={{ backgroundImage: "url('/images/Group (14).png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

    <div className="max-w-4xl mx-auto p-6   bg-white shadow-2xl">
    
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
           <span className="font-bold text-[#112e58] text-lg"> Full Name * </span> 
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border-b border-black shadow-sm text-sm lg:text-md focus:outline-none focus:ring-0 ` }
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1 bg-[#ffdfd5]">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
             <span className="font-bold text-[#112e58] text-lg " >Email*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E.g. john@doe.com"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border-b border-black shadow-sm text-sm lg:text-md focus:outline-none focus:ring-0 ` }
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 bg-[#ffdfd5]">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
           <span className="font-bold text-[#112e58] text-lg " >Contact Number  *</span>
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border-b border-black shadow-sm text-sm lg:text-md focus:outline-none focus:ring-0 ` }
          />
          {errors.contactNumber && <p className="text-red-500 text-sm mt-1 bg-[#ffdfd5]">{errors.contactNumber}</p>}
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            <span className="font-bold text-[#112e58] text-lg" >Address  *</span>
          </label>
          <input
            id="address"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border-b border-black shadow-sm text-sm lg:text-md focus:outline-none focus:ring-0 ` }
          ></input>
          {errors.address && <p className="text-red-500 text-sm mt-1 bg-[#ffdfd5]">{errors.address}</p>}
        </div>
        <div>
          <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">
             <span className="font-bold text-[#112e58] text-lg">College Name *</span>
          </label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            placeholder="College Name"
            value={formData.collegeName}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border-b border-black shadow-sm text-sm lg:text-md focus:outline-none focus:ring-0 ` }
          />
          {errors.collegeName && <p className="text-red-500 text-sm mt-1 bg-[#ffdfd5]">{errors.collegeName}</p>}
        </div>
        <div className="flex items-end justify-end">
        <div  className="max-w-40 flex text-xl text-white items-center text-center justify-center  border bg-[#112e58] py-2 px-9 rounded-full shadow">
        <button
          type="submit"
        >
         Next
        </button>
        </div>
        </div>
      </form>
    </div>
    </div>
  );
}
