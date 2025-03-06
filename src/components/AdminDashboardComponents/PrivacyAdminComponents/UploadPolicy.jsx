'use client'
import React from 'react'
import { useState } from 'react';
import dynamic from "next/dynamic";

const JoditReact = dynamic(() => import("jodit-react-ts"), {
    ssr: false,
    loading: () => <p>Loading editor...</p>, // Show loading state
  });

const UploadPrivacy = ({setAdd}) => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('')
    const handleSubmit=()=>{
        PostPolicyData(title, description)
    }
    const PostPolicyData = async (title, description) => {
        try {
          const res = await fetch("/api/admin/privacyPolicy", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ title, description }),
          });
          
          if(res.status === 200){
            const data = await res.json();
            console.log("Data ====== ",data.privacy_data);
            // setmultipleBlogData(data.privacy_data);
          }
          
          
        
        } catch (error) {
          console.error("Upload Error :- ", error);
          alert("Upload Error !!! (check console)");
          return false;
        }
      }

      
    
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-scroll overflow-x-hidden">
      <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setAdd(false)}
            className="text-gray-500 hover:text-red-500 transition"
          >
            ✖
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">Upload Blog</h2>
        <div  className="space-y-4">
          {/* Title */}
          <input
            placeholder="Enter Policy Title"
            type="text"
            name="heading"
            id="heading"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring focus:ring-blue-200"
          />
          
            <JoditReact onChange={(content) => setDescription(content)} value={description}/>
          <div className="flex justify-center">
            <button onClick={handleSubmit}
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition w-full md:w-1/2"
            >
              Submit
            </button>
          </div>
          </div>
    </div>
    </div>
  )
}

export default UploadPrivacy
