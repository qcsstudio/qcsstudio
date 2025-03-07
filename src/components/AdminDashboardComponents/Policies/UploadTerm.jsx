import React from 'react'
import dynamic from "next/dynamic";
import { useState } from 'react';
const JoditReact = dynamic(() => import("jodit-react-ts"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

const UploadTerm = ({setAdd,url}) => {
    const [title,setTittle]=useState('');
        const [description,setDescription]=useState('');
    
        const PostTerms=async ()=>{
            
            try {
                const res = await fetch(url, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({ title, description }),
                });
                
                if(res.status === 201){
                  const data = await res.json();
                  console.log("Data ====== ",data.term_data);
                 
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
            onChange={(e) => setTittle(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring focus:ring-blue-200"
          />
          
            <JoditReact onChange={(content) => setDescription(content)} DefaultValue={description} config={{
                askBeforePasteHTML: false,
                askBeforePasteFromWord: false,
                enableDragAndDropFileToEditor: false,
                spellcheck: true,
                height: 300,
                readonly: false,
                toolbarAdaptive: false,
                toolbarSticky: false,
                Image: true,
                buttons:
                  "bold,italic,underline,|,ul,ol,|,left,center,right,|,link,unlink,|,source,image,video,font,paragraph,brush",
                uploader: {
                  insertImageAsBase64URI: true,
                },
                filebrowser: {
                  ajax: {
                    url: "YOUR_IMAGE_UPLOAD_API",
                  },
                },

              }}/>
            <div className="flex justify-center"> 

            <button onClick={PostTerms}
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

export default UploadTerm
