"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { BlogDataContext } from "@/context/BlogData";
import { MultiSelect } from "primereact/multiselect";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const PopUpBlogUpdate = ({ setUpdateObject, setEdit, updateObject }) => {
  const { GetCategoryData, categoryData, UpdateBlog } = useContext(BlogDataContext);

  
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [previewImage,setPreviewImage] = useState("");
  const [description, setDescription] = useState("");
  const [showOnFront, setShowOnFront] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const editor = useRef(null);

  useEffect(() => {
    GetCategoryData();
  }, []);

  useEffect(() => {
    setTitle(updateObject.heading || "");
    setDescription(updateObject.description || "");
    setShowOnFront(updateObject.show_on_front || false);
    setThumbnail(updateObject.thumbnail || "");
    setPreviewImage(updateObject.thumbnail || "");

    if (updateObject.category && Array.isArray(updateObject.category) && categoryData.length > 0) {
      const selectedCats = categoryData.filter((cat) => updateObject.category.includes(cat.name));
      setSelectedCategories(selectedCats);
    }
  }, [updateObject, categoryData]);


  const handleCategoryChange = (e) => setSelectedCategories(e.value);

  const processImage = (link)=>{
    const match = link.match(/file\/d\/(.*)\/view/);
    return match ? `https://lh3.googleusercontent.com/d/${match[1]}=w1000` : link;
  }

  const handleImageChange = async(e) => {
    const file = await processImage(e.target.value);
    console.log(typeof file);
    console.log(file);
    setThumbnail(file);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const cate = selectedCategories.map((data) => data.name);
    UpdateBlog(updateObject.heading, {title, thumbnail, category: cate, showOnFront, description });
    setUpdateObject({});
    setEdit(false);
  };

  return (
    <>

      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={() => setEdit(false)}
      >

        <div
          className="bg-white  w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg p-6 shadow-lg relative"
          onClick={(e) => e.stopPropagation()}
        >

          <button
            className="absolute top-3 right-3 px-3 py-1 border border-gray-300 rounded-md hover:bg-red-500 hover:text-white transition duration-200"
            onClick={() => setEdit(false)}
          >
            X
          </button>

          <h2 className="text-center text-2xl font-semibold mb-4">Update Blog</h2>


          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              placeholder="Enter Blog Title"
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />


            <div className="w-full flex flex-col items-center gap-2">
              {previewImage && previewImage.startsWith("http") && <img src={previewImage} alt="Preview" className="w-40 h-40 object-cover rounded-lg border" />}
              <input type="text" placeholder="Enter Image URL" value={thumbnail}  onChange={handleImageChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg" />
            </div>


            <JoditEditor
              ref={editor}
              value={description}
              onChange={(newContent) => setDescription(newContent)}
              className="w-full min-h-[200px] border border-gray-300 rounded-md"
            />


            <div className="flex items-center gap-2">
              <input type="checkbox" id="show_on_front" checked={showOnFront} onChange={() => setShowOnFront(!showOnFront)} />
              <label htmlFor="show_on_front" className="text-gray-700">Show on Front</label>
            </div>

            <MultiSelect
              value={selectedCategories}
              onChange={handleCategoryChange}
              options={categoryData}
              optionLabel="name"
              placeholder="Select Categories"
              maxSelectedLabels={3}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              panelClassName="z-50 max-w-lg bg-white p-4 rounded-xl shadow-xl border border-gray-200 max-h-60 overflow-y-auto"
            />



            <button
              type="submit"
              className="w-full px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-200"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopUpBlogUpdate;
