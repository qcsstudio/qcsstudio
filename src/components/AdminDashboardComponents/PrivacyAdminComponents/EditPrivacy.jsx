import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import toast, { Toaster } from "react-hot-toast";

const JoditReact = dynamic(() => import("jodit-react-ts"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});
const EditPrivacy = ({ setEdit, edit, GetPolicyData, upadteObject, setUpdateObject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState("")

  useEffect(() => {
    GetPolicyData()
  }, []);

  useEffect(() => {
    if (upadteObject) {
      setTitle(upadteObject.heading || '')
      setDescription(upadteObject.description || '')
    }
  }, [upadteObject])

  const handleSubmit = () => {

    if (!title.trim() || !description.trim()) return;

    const updatepolicy = {
      title,
      description
    }
    updatePolicy(upadteObject.heading, updatepolicy)
    setUpdateObject({})
    setEdit(false)
  }

  const updatePolicy = async () => {
    try {
      const response = await fetch("/api/admin/privacyPolicy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description  , _id:upadteObject._id }),
      });

      if (response.ok) { 
        toast.success("Policy updated successfully!");
        GetPolicyData();
        setUpdateObject(null);
        setEdit(false);
      } else {
        throw new Error("Failed to update policy");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };
  console.log("upadteObject" , upadteObject)
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <Toaster/> 
      <div className="relative w-full max-w-3xl flex flex-col justify-between max-h-[90vh] overflow-y-auto  bg-white p-5 rounded-md shadow-lg">
      <button className="absolute top-3 right-3 px-3 py-1 border border-gray-300 rounded-md hover:bg-red-500 hover:text-white transition" onClick={() => setEdit(false)}>
          ✖
        </button>
        <h2 className="text-xl font-bold mb-3">Edit Privacy Policy</h2>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border mb-2"
          placeholder="Title"
        />
        {
          description && <div>
          <JoditReact
            name="description"
            onChange={(content) => setDescription(content)}
            defaultValue={description}
            config={{
              askBeforePasteHTML: false,
              askBeforePasteFromWord: false,
              enableDragAndDropFileToEditor: false,
              uploader: {
                insertImageAsBase64URI: true,
              },
              filebrowser: {
                ajax: {
                  url: "YOUR_IMAGE_UPLOAD_API",
                },
              }
            }}
           
          />
        </div>
        
        }


        <div className="flex justify-center">
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            Update
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default EditPrivacy;
