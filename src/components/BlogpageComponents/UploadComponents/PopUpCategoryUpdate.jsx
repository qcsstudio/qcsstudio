"use client";

import { useContext, useEffect, useState } from "react";
import { BlogDataContext } from "@/context/BlogData";

const PopUpCategoryUpdate = ({ categoryUpdate, setEdit }) => {
  const { UpdateCategoryData } = useContext(BlogDataContext);

  const [name, setName] = useState("");
  const [showOnFront, setShowOnFront] = useState(false);

  useEffect(() => {
    if (categoryUpdate) {
      setName(categoryUpdate.name || "");
      setShowOnFront(categoryUpdate.show_on_front || false);
    }
  }, [categoryUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return; // Prevent empty name submission

    const updatedData = { name, show_on_front: showOnFront };
    UpdateCategoryData(categoryUpdate.name, updatedData);
    setEdit(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[90%] md:w-[50%] lg:w-[30%] px-6 py-4 rounded-lg bg-white shadow-lg">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            className="px-3 py-1 border border-gray-400 rounded-lg hover:bg-red-500 hover:text-white transition"
            onClick={() => setEdit(false)}
          >
            ✖
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter category name"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="showOnFront"
              checked={showOnFront}
              onChange={() => setShowOnFront(!showOnFront)}
              className="w-5 h-5"
            />
            <label htmlFor="showOnFront" className="text-gray-700">
              Show On Front
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-green-600 hover:bg-green-700 text-white transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUpCategoryUpdate;