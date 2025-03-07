'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import toast, { Toaster } from 'react-hot-toast';

const JoditReact = dynamic(() => import('jodit-react-ts'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

const EditTerms = ({ setEdit, GetData, updateRow, setUpdateRow, url }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    if (updateRow) {
      setTitle(updateRow.heading || '');
      setDescription(updateRow.description || '');
    }
  }, [updateRow]);

  const handleSubmit = async () => {
    if (!title.trim() || !description.trim()) {
      toast.error('Title and description cannot be empty.');
      return;
    }

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, _id: updateRow?._id }),
      });

      const result = await response.json();
      console.log('Update response:', result);

      if (response.ok) {
        toast.success('Policy updated successfully!');
        GetData();
        setUpdateRow(null);
        setEdit(false);
      } else {
        throw new Error(result.message || 'Failed to update policy');
      }
    } catch (error) {
      console.error('Update error:', error);
      toast.error('Update failed.');
    }
  };

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

export default EditTerms;
