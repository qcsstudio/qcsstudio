"use client"
import { BlogDataContext } from "@/context/BlogData"
import Image from "next/image"
import { useContext, useEffect } from "react"

const MainBlogComponent = ({blogData}) => {
    const {categoryData,GetCategoryData} = useContext(BlogDataContext);

    useEffect(()=>{
        GetCategoryData();
    },[])

   return (
      <>
        <div className="mainContainer w-[100vw] overflow-hidden bg-[#a7a7a7]">
            <div className="innerContainer flex gap-[2rem] w-[100%] px-[10rem] py-[2rem]">
                <div className="left w-[60%]">
                    <div className="imageContainer w-[100%] bg-[#949393]">
                        {blogData.thumbnail && 
                        <Image src={blogData.thumbnail} width={100} height={100} alt={blogData.thumbnail} className="w-[100%] "/>}
                    </div>
                    <div className="headingContainer">
                        <h2 className="heading text-[#0E2D5B] font-bold text-[2rem]">{blogData.heading}</h2>
                    </div>
                    <div className="descriptionContainer" dangerouslySetInnerHTML={{__html:blogData.description}}>
                        
                    </div>

                </div>
                <div className="right w-[35%] flex justify-center flex-col gap-[2rem]">

                    <div className="flex items-center w--[100%] h-[4rem] max-w-xs sm:max-w-sm md:max-w-md bg-[#001F61] rounded-md gap-1 p-1 sm:p-2">
                        <Image 
                            src="/search.svg" 
                            alt="Logo" 
                            className="text-white" 
                            width={30} 
                            height={30} 
                        />
                        <input
                            className="bg-[#001F61] text-white border-none w-full px-0 sm:px-0 py-1 sm:py-2 text-sm sm:text-base outline-none placeholder-gray-300 rounded-md"
                            type="text"
                            placeholder="Search"
                        />
                        <button className="bg-[#ffffff] hover:bg-[#cbcbcb] w-auto px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-md shrink-0 text-[#000000]">
                            Search
                        </button>
                    </div>

                    <div className="categoryContainer">
                        <p className="heading text-[#001F61] text-[1.5rem] font-normal">Categories</p>
                        <div className="my-7 flex flex-wrap justify-center gap-x-5 gap-y-2 px-4">
                            {categoryData && 
                                categoryData.map((data,index)=><button
                                key={index}
                                className="bg-white border border-[#0E2D5B] hover:text-white hover:bg-[#0E2D5B] text-[#0E2D5B] px-5 py-2 rounded-md w-full sm:w-auto"
                                onClick={()=>{setmultipleBlogData(originalData)}}>{data.name}</button>
                            )}

                        </div>
                    </div>


                    <div className="recentBlog">
                        <p className="recent">Recent Blogs</p>
                        
                    </div>

                </div>

            </div>
        </div>
      </>
   )
}

export default MainBlogComponent