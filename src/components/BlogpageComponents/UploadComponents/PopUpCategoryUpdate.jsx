"use client";

import { BlogDataContext } from "@/context/BlogData";
import { useContext, useState } from "react";

const PopUpCategoryUpdate = ({ categoryUpdate, setCategoryUpdate, setEdit }) => {
  const { UpdateCategoryData } = useContext(BlogDataContext);

  const [name, setName] = useState(categoryUpdate?.name);
  const [showOnFront, setShowOnFront] = useState(categoryUpdate?.show_on_front);

  const handleSubmit = (e) => {
    e.preventDefault();
    const slug = categoryUpdate?.name;
    const updatedData = { name: name, show_on_front: showOnFront };
    UpdateCategoryData(slug, updatedData);
    setEdit(false);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="popUpCont w-[90%] md:w-[50%] lg:w-[30%] px-6 py-4 rounded-lg bg-white flex flex-col gap-4 shadow-lg">
          <div className="w-full flex justify-end">
            <button
              className="px-3 py-1 border border-gray-400 rounded-lg hover:bg-red-500 hover:text-white transition-all"
              onClick={() => setEdit(false)}
            >
              X
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <input
              placeholder="Enter category name"
              type="text"
              name="name"
              id="name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="showOnFront"
                id="showOnFront"
                checked={showOnFront}
                onChange={() => setShowOnFront(!showOnFront)}
                className="w-5 h-5"
              />
              <label htmlFor="showOnFront" className="text-gray-700">
                Show On Front
              </label>
            </div>

            <button className="w-full py-2 rounded-md bg-green-600 hover:bg-green-700 text-white transition-all">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopUpCategoryUpdate;
