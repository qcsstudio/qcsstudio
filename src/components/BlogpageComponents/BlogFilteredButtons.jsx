"use client"
import { BlogDataContext } from '@/context/BlogData'
import React, { useState, useContext, useEffect } from 'react'

const BlogFilteredButtons = () => {
  const [originalData, setOriginalData] = useState([]);

  const {
    categoryData,
    GetCategoryData,
    setmultipleBlogData,
    multipleBlogData,
    GetBlogData } = useContext(BlogDataContext);

    useEffect(() => {
      GetCategoryData();
      GetBlogData();
    }, []);
    
    useEffect(() => {
      if (multipleBlogData.length > 0 && originalData.length === 0) {
        setOriginalData(multipleBlogData);
      }
    }, [multipleBlogData]);
    
    const handleData = (category) => {
      const name = category.name;
      const filteredData = originalData.filter(item => item.category.includes(name));
      setmultipleBlogData(filteredData);
    };
    
  return (
    <div className="my-7 flex flex-wrap justify-center gap-x-5 gap-y-2 px-4">

      <button
        className="bg-white border border-[#0E2D5B] hover:text-white hover:bg-[#0E2D5B] text-[#0E2D5B] px-5 py-2 rounded-md w-full sm:w-auto"
        onClick={()=>{setmultipleBlogData(originalData)}}>
        ALL
      </button>

      {categoryData && categoryData.map((category, index) => ( category.show_on_front &&
        <button
          key={index}
          onClick={() => handleData(category)}
          className="bg-white border border-[#0E2D5B] hover:text-white hover:bg-[#0E2D5B] text-[#0E2D5B] px-5 py-2 rounded-md w-full sm:w-auto">{category.name}</button>
      ))}
    </div>
  )
}

export default BlogFilteredButtons
