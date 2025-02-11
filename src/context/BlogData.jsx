"use client"
import { createContext, useState } from "react"

const blogIntialData = {
  blogData: {},
  setblogData: () => { },
  multipleBlogData: [],
  setmultipleBlogData: () => { },
  categoryData: [],
  setCategoryData: () => { }
}

export const BlogDataContext = createContext(blogIntialData);

export const BlogDataContextProvider = ({ children }) => {

  const [blogData, setblogData] = useState(blogIntialData.blogData);
  const [multipleBlogData, setmultipleBlogData] = useState(blogIntialData.multipleBlogData);
  const [categoryData, setCategoryData] = useState(blogIntialData.categoryData);


  const GetCategoryData = async () => {
    try {
      const url = "/api/category/"
      const response = await fetch(url);
      if (response.status === 200) {
        const result = await response.json();
        setCategoryData(result.category_data);
      }
    } catch (error) {
      console.log("Category Data Not Get!! : ", error);
    }
  }

  const PostCategoryData = async (category,showOnFront) => {
    try {
      const res = await fetch("/api/admin/uploadblog-category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ category, showOnFront })
      })
      const data = await res.json();
      setCategoryData(data.category_data);
    } catch (error) {
      console.log("Error : ", error);
      alert("Error !! (open Console)")
    }
  }


  const DeleteCategoryData = async (slug) => {
    try {
      const url = `/api/category/${slug}`;
      const response = await fetch(url, {
        method: 'DELETE'
      });
      if (response.status === 200) {
        const result = await response.json();
        setCategoryData(result.category_data);
      }
    } catch (error) {
      console.log("Category Data Not Get!! : ", error);
    }
  }

  const UpdateCategoryData = async (slug, data) => {
    try {
      const url = `/api/category/${slug}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.status === 200) {
        const result = await response.json();
        setCategoryData(result.category_data);
      }
    } catch (error) {
      console.log("Category Data Not Updated!! : ", error);
    }
  }

  const GetBlogData = async () => {
      try {
        const url = "/api/blogs/"
        const response = await fetch(url);
        
        if (response.status === 200){
          const result = await response.json();
          setmultipleBlogData(result.blog_data);
        }
      } catch (error) {
        console.log("Blog data not get ! ",error);
      }
  }

  const GetSingleBlogData = async (slug) => {
      try {
        const url = `/api/blogs/${slug}`
        const response = await fetch(url);
        
        if (response.status === 200){
          const result = await response.json();
          setblogData(result.blog_data);
        }
      } catch (error) {
        console.log("Blog data not get ! ",error);
      }
  }

  const DeleteBlog = async (slug) => {
    try {
      const url = `/api/blogs/${slug}`;
      const response = await fetch(url,{
        method: 'DELETE',
      });

      const result = await response.json();
      setmultipleBlogData(result.blog_data);
    } catch (error) {
      console.error('error', error)
    }
  }

  const UpdateBlog = async (slug,data) => {
    try {
      const url = `/api/blogs/${slug}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      });

      const result = await response.json();
      setmultipleBlogData(result.blog_data);
    } catch (error) {
      console.error('error', error)
    }
  }

  const GetSingleBlog = async (slug) => {
      try {
        const url = `/api/blogs/${slug}`
        const response = await fetch(url);
        console.log(response);
        if (response.status === 200) {
          const result = await response.json()
          setblogData(result.blog_data);
        }
      } catch (error) {
      }
  }

  
  const PostBlogData = async (title,thumbnail,category,showOnFront,description) => {
    try {
      const res = await fetch("/api/admin/uploadblog", {
          method: "POST",
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify({title,thumbnail,category,showOnFront,description}),
      });
  
      const data = await res.json();
      setmultipleBlogData(data);
      return data;
  } catch (error) {
      console.log("Upload Error :- ",error);
      alert("Upload Error !!! (check console)");
      return false;
  }
  }

  return (
    <BlogDataContext.Provider value={{ categoryData, setCategoryData, GetCategoryData, DeleteCategoryData, UpdateCategoryData,PostCategoryData,multipleBlogData,setmultipleBlogData,GetBlogData,DeleteBlog,UpdateBlog,GetSingleBlog,PostBlogData,GetSingleBlogData,setblogData,blogData}}>
      {children}
    </BlogDataContext.Provider>
  );
};