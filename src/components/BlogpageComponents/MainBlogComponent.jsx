"use client"
import { BlogDataContext } from "@/context/BlogData"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"

const MainBlogComponent = ({blogData}) => {
    const {categoryData,GetCategoryData,GetBlogData,multipleBlogData,setmultipleBlogData} = useContext(BlogDataContext);

    const [blogsData,setBlogsData] = useState([]);
    const [initialBlog,setInitialBlog] = useState(4);


    useEffect(()=>{
        GetCategoryData();
        GetBlogData();
    },[]);

    useEffect(()=>{
        const newArray = multipleBlogData.slice(1,initialBlog);
        setBlogsData(newArray);
      },[multipleBlogData,initialBlog]);

    const getDate = (createdAt)=>{
        const newDate = new Date(createdAt).toLocaleDateString();
        return newDate;
    }   

   return (
      <>
        <div className="mainContainer w-[100%] overflow-hidden ">
            <div className="innerContainer flex lg:flex-row gap-[2rem] w-[100%] xl:px-[10rem] py-[2rem] lg:px-[5rem] xs:flex-col md:px-[5rem] sm:px-[3rem] xs:px-[1rem]">
                <div className="left lg:w-[60%] xs:w-[100%]">
                    <div className="imageContainer w-[100%] h-[25rem] bg-[#949393]">
                        {blogData.thumbnail && 
                        <Image src={blogData.thumbnail} width={100} height={100} alt={blogData.thumbnail} className="w-[100%] h-[25rem]"/>}
                    </div>
                    <div className="headingContainer">
                        <h2 className="heading text-[#0E2D5B] font-bold text-[2rem]">{blogData.heading}</h2>
                    </div>
                    <div className="descriptionContainer" dangerouslySetInnerHTML={{__html:blogData.description}}>
                        
                    </div>

                </div>
                <div className="right lg:w-[30%] flex justify-center flex-col gap-[2rem] xs:w-[100%]">
                    
                    {/* Search box */}
                    <div className="flex items-center  w-[100%] h-[4rem] max-w-[100%] sm:max-w-[100%] md:max-w-[100%] bg-[#001F61] rounded-md gap-1 p-1 sm:p-2">
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

                    {/* <div className="categoryContainer">
                        <p className="heading text-[#001F61] text-[1.5rem] font-normal">Categories</p>
                        <div className="my-7 flex flex-wrap justify-center gap-x-5 gap-y-2 px-4">
                            {categoryData && 
                                categoryData.map((data,index)=><button
                                key={index}
                                className="bg-white border border-[#0E2D5B] hover:text-white hover:bg-[#0E2D5B] text-[#0E2D5B] px-5 py-2 rounded-md w-full sm:w-auto"
                                onClick={()=>{setmultipleBlogData(originalData)}}>{data.name}</button>
                            )}

                        </div>
                    </div> */}


                    <div className="recentBlog w-[100%] flex flex-col gap-[2rem]">
                        <p className="recent text-[#001F61] text-[1.5rem] font-normal">Recent Blogs</p>
                        <div className="blogCards flex flex-col md:gap-[5rem] xs:gap-[2rem] mt-[2rem]">
                        {multipleBlogData &&
                            blogsData.map((data)=>{
                                return <Link key={data._id} href={`/blogs/${data.heading}`}>
                                <div  className="flex  sm:flex-row gap-4 sm:items-center bg-[#ffffff] h-[10rem] px-[1rem] rounded-[1rem]">
                                    <div className="w-full h-[10rem] sm:w-1/3">
                                    <Image
                                        src={data.thumbnail}
                                        className="md:w-full h-[10rem]   object-fill rounded-md"
                                        height={200}
                                        width={200}
                                        alt=""
                                    />
                                    </div>
                                    <div className="w-full sm:w-2/3 text-center sm:text-left">
                                    <span className="text-gray-700 text-xs sm:text-sm">{getDate(data.createdAt)}</span>
                                    <h3 className="text-base sm:text-xl md:text-lg text-[#0E2D5B] font-bold">
                                        {data.heading}
                                    </h3>
                                    
                                    <div dangerouslySetInnerHTML={{ __html:data.description.slice(0,40)}} />
                                    
                                    </div>
                                </div></Link>
                        })
                        }
                        </div>
                    </div>

                </div>

            </div>
        </div>
      </>
   )
}

export default MainBlogComponent