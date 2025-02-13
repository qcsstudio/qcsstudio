"use client";
import { BlogDataContext } from "@/context/BlogData";
import { useContext, useState } from "react";

const UploadCategory = ({ setADD }) => {
  const { PostCategoryData } = useContext(BlogDataContext);
  const [category, setCategory] = useState("");
  const [showOnFront, setShowOnFront] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    PostCategoryData(category, showOnFront);
    setADD(false);
  };

  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        {/* Popup Container */}
        <div className="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[30%] bg-white rounded-lg px-6 py-4 shadow-lg">
          {/* Close Button */}
          <div className="w-full flex justify-end">
            <button
              className="px-3 py-1 border border-gray-400 rounded-lg hover:bg-red-500 hover:text-white transition-all"
              onClick={() => setADD(false)}
            >
              X
            </button>
          </div>

          <p className="text-center text-2xl font-bold">Category</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <input
              placeholder="Enter Category Name"
              type="text"
              name="name"
              id="name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setCategory(e.target.value)}
            />

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="show_in_front"
                id="show_in_front"
                checked={showOnFront}
                onChange={(e) => setShowOnFront(e.target.checked)}
                className="w-5 h-5"
              />
              <label htmlFor="show_in_front" className="text-gray-700">
                Show on Frontend
              </label>
            </div>

            <button className="w-full py-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white transition-all">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadCategory;
