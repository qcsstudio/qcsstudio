"use client"

import { BlogDataContext } from "@/context/BlogData";
import { useContext, useState } from "react";

const PopUpCategoryUpdate = ({categoryUpdate,setCategoryUpdate,setEdit}) => {

   const { UpdateCategoryData } = useContext(BlogDataContext);

   const [name,setName] = useState(categoryUpdate?.name);
   const [showOnFront,setShowOnFront] = useState(categoryUpdate?.show_on_front);
   const handleSubmit = (e) =>{
      e.preventDefault();
      const slug = categoryUpdate?.name;
      const updatedData={name:name,show_on_front:showOnFront};
      UpdateCategoryData(slug,updatedData);
      setEdit(false);
   }

   return (
      <>
         <div className="popUpCont w-[20vw] px-[2rem] py-[1rem] rounded-[1rem] absolute top-[50%] right-[50%] bg-[#ffffff] flex flex-col gap-[1rem]">
            <div className="topParent w-[100%] flex justify-end">

            <div className="topCont px-[1rem] py-[.5rem]  cursor-pointer border border-[#c0c0c0] rounded-[.5rem] hover:bg-[red] hover:text-[#ffffff]" onClick={()=>setEdit(false)}>X</div>

            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem] w-[100%]">
               <input placeholder="Enter name of category." type="text" name="name" id="name" className="w-[100%] border border-[#d1d1d1] px-[1rem] py-[.5rem] rounded-[.5rem] " value={name} onChange={(e)=>setName(e.target.value)}/>
               <div className="checkBoxCont w-[100%] flex gap-[.5rem]">
               <label htmlFor="showOnFront">Show On Front</label>
               <input type="checkbox" name="showOnFront" id="showOnFront" checked={showOnFront} onChange={(e)=>setShowOnFront(!showOnFront)}/>
               </div>
               <button className="px-[4rem] py-[.7rem] rounded-[.5rem] bg-[#368d3f] hover:bg-[#1d6524] text-[#ffffff]" >Update</button>
            </form>

         </div>
      </>
   )
}

export default PopUpCategoryUpdate