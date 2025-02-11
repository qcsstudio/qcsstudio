"use client"
import { BlogDataContext } from "@/context/BlogData";
import { useContext, useState } from "react";

const UploadCategory = ({setADD}) => {
    const { PostCategoryData} = useContext(BlogDataContext);
    const [category,setCategory] = useState("");
    const [showOnFront,setShowOnFront] = useState(false);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        PostCategoryData(category,showOnFront);
        setADD(false);
    }

    return (
        <>
            <div className="categoryContainer w-[100vw] h-[100vh] absolute top-[0rem] left-[-10rem] flex justify-center items-center">
                <div className="innerCont w-[30%]  bg-[#ffffff] rounded-[1rem] px-[4rem] py-[2rem]">
                    <div className="closeCont w-[100%] flex justify-end">
                        <div className="closeBtn  px-[1rem] py-[.5rem]  cursor-pointer border border-[#c0c0c0] rounded-[.5rem] hover:bg-[red] hover:text-[#ffffff]" onClick={()=>setADD(false)}>X</div>
                    </div>
                <p className="text-center text-[2rem] font-bold">Category</p>

                    <form onSubmit={handleSubmit} className="categoryForm w-[100%] flex flex-col gap-[2rem] justify-center items-center mt-[2rem]">

                        <input placeholder="Enter Category Name" type="text" name="name" id="name" className="w-[100%] border border-[#d1d1d1] px-[1rem] py-[.5rem] rounded-[.5rem] "  onChange={(e)=>setCategory(e.target.value)}/>

                        <div className="labelContainer w-[100%] flex items-center gap-[1rem]">
                            <label htmlFor="show_in_front text-[1rem]">Show on Frontend</label>
                        <input type="checkbox" name="show_in_front" id="show_in_front" className="" onChange={(e)=>setShowOnFront(e.target.checked)}/>
                        </div>

                        <button className="px-[4rem] py-[.7rem] rounded-[.5rem] bg-[rgba(9,9,121,1)] text-[#ffffff]">Submit</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default UploadCategory