import { CandidateDataContext } from "@/context/CandidateDataContext";
import { useState, useContext } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    address: "",
    collegeName: "",
    quiz_status: "started"
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [showRules, setShowRules] = useState(false);

  const { CreateCandidateAPI  , setCandiDateData} = useContext(CandidateDataContext)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.contactNumber) newErrors.contactNumber = "Contact Number is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.collegeName) newErrors.collegeName = "College Name is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      setErrors({});
      setShowRules(true); // Show rules modal on form submission
    } else {
      setErrors(validationErrors);
    }
  };

  const handleStartQuiz = () => {
    CreateCandidateAPI(formData);
    setCandiDateData(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 p-4">
      <div className="w-full max-w-lg p-8 bg-white/85 shadow-2xl rounded-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Candidate Details</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="E.g. john@doe.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
          </div>
          <div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>
          <div>
            <input
              type="text"
              name="collegeName"
              placeholder="College Name"
              value={formData.collegeName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.collegeName && <p className="text-red-500 text-sm mt-1">{errors.collegeName}</p>}
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl text-lg font-semibold shadow-lg hover:opacity-90 transition">
            Start Test
          </button>
        </form>
      </div>

      {showRules && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[80%]  md:w-[40%]">
            <h2 className="text-xl font-bold text-gray-800">Test Rules</h2>
            <ul className="mt-3 text-gray-700 list-disc list-inside">
              <li>If you switch tabs, your quiz will be automatically canceled.</li>
              <li>There are 25 questions.</li>
              <li>Each question has a 50-second timer.</li>
              <li>Do not refresh screen.</li>
              <li>Make sure you have good  internet conectivity</li>
            </ul>
            <div className="mt-4 flex justify-end">
              <button onClick={handleStartQuiz} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg">
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
