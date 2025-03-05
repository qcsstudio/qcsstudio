"use client";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BlogDataContext } from "@/context/BlogData";
import { MultiSelect } from "primereact/multiselect";
import Image from "next/image";
import dynamic from "next/dynamic";
import NoSSRWrapper from "./NoSSRWrapper"; // Safe SSR Wrapper

// Dynamically import JoditReact with SSR disabled
const JoditReact = dynamic(() => import("jodit-react-ts"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>, // Show loading state
});

const UploadBlog = ({ setADD }) => {
  const { GetCategoryData, categoryData, PostBlogData } = useContext(BlogDataContext);

  // Form Input Values:
  const [title, setTitle] = useState("");
  const [imageShow, setImageShow] = useState(null);
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [showOnFront, setShowOnFront] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    GetCategoryData();
  }, []);

  const router = useRouter();

  // Handle Images:
  const processImage = (link) => {
    const match = link.match(/file\/d\/(.*)\/view/);
    return match ? `https://lh3.googleusercontent.com/d/${match[1]}=w1000` : link;
  };

  const handleImageChange = (e) => {
    const file = processImage(e.target.value);
    setThumbnail(file);
    setImageShow(file);
  };

  // Handle submit:
  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCategoryNames = selectedCategories.map((data) => data.name);
    const finalTitle = title.toLowerCase().trim().replace(/\s+/g, "_");
    PostBlogData(finalTitle, thumbnail, selectedCategoryNames, showOnFront, description);
    setADD(false);
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-scroll overflow-x-hidden">
      <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setADD(false)}
            className="text-gray-500 hover:text-red-500 transition"
          >
            ✖
          </button>
        </div>

        {/* Form */}
        <h2 className="text-2xl font-semibold text-center mb-4">Upload Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <input
            placeholder="Enter Blog Title"
            type="text"
            name="heading"
            id="heading"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring focus:ring-blue-200"
          />

          {/* Image Upload */}
          <input
            type="text"
            placeholder="Enter Image URL"
            onChange={handleImageChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg"
          />
          {imageShow && imageShow.startsWith("http") && (
            <div className="flex justify-center">
              <Image src={imageShow} width={100} height={100} alt="Preview" className="rounded-md" />
            </div>
          )}

          {/* Rich Text Editor */}
          <NoSSRWrapper>
            <JoditReact onChange={(content) => setDescription(content)} defaultValue={description} config={{
              uploader: {
                insertImageAsBase64URI: true, 
              },
              filebrowser: {
                ajax: {
                  url: "YOUR_IMAGE_UPLOAD_API", 
                },
              }
            }}/>
          </NoSSRWrapper>

          {/* Show on Front Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="show_on_front"
              id="show_on_front"
              onChange={(e) => setShowOnFront(e.target.checked)}
              className="w-5 h-5"
            />
            <label htmlFor="show_on_front" className="text-gray-700">
              Show on Front
            </label>
          </div>

          {/* Category Selection */}
          <MultiSelect
            value={selectedCategories}
            onChange={(e) => setSelectedCategories(e.value)}
            options={categoryData}
            optionLabel="name"
            placeholder="Select Categories"
            maxSelectedLabels={3}
            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 flex flex-wrap items-center gap-2 overflow-hidden min-h-[44px]"
            panelClassName="z-50 max-w-lg bg-white p-4 rounded-xl shadow-xl border border-gray-200 max-h-60 overflow-y-auto"
          />

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition w-full md:w-1/2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadBlog;
