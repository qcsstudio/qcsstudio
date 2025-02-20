"use client"
import SearchBarContentContainer from "@/containers/SerachBarContentContainer/SerachBarContentContainer"
import { BlogDataContext } from "@/context/BlogData"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import SearchBar from "../QuizComponents/SearchBar"
import Loader from "../Loader"

const MainBlogComponent = ({blogData}) => {
    const {categoryData,GetCategoryData,GetBlogData,multipleBlogData,setmultipleBlogData,showBlogsDataLoader} = useContext(BlogDataContext);

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
            {showBlogsDataLoader ? <Loader/>:
            <div className="innerContainer flex items-start lg:flex-row gap-[2rem] w-[100%] xl:px-[10rem] py-[2rem] lg:px-[5rem] xs:flex-col md:px-[5rem] sm:px-[3rem] xs:px-[1rem]">
                
                <div className="left lg:w-[60%] xs:w-[100%]">
                    <div className="imageContainer w-[100%] h-[25rem] bg-[#949393]">
                        {blogData.thumbnail && 
                        <Image src={blogData.thumbnail} width={1024} height={100} alt={blogData.thumbnail} className="w-[100%] h-[25rem]"/>}
                    </div>
                    <div className="headingContainer">
                        <h2 className="heading text-[#0E2D5B] font-bold text-[2rem]">  {blogData.heading ? blogData.heading.replace(/_/g, " ").split(' ').map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ') : "Untitled"}
                        </h2>
                    </div>
                    <div className="descriptionContainer" dangerouslySetInnerHTML={{__html:blogData.description}}>
                        
                    </div>

                </div>
                <div className="right lg:w-[35%] flex justify-center flex-col gap-[2rem] xs:w-[100%]">
                    
                    
                    <SearchBar color={"#001F61"}/>

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
                        <div className="blogCards flex w-[100%] flex-col md:gap-[5rem] xs:gap-[2rem] mt-[2rem]">
                        {multipleBlogData &&
                            blogsData.map((data)=>{
                                return <Link key={data._id} href={`/blogs/${data.heading}`}>
                                <div  className="flex w-[100%] sm:flex-row gap-4 sm:items-center bg-[#ffffff] h-[10rem] px-[1rem] rounded-[1rem]">
                                    <div className=" h-[10rem]  w-[60%]">
                                    <Image
                                        src={data.thumbnail}
                                        className="md:w-full h-[100%]   object-cover rounded-md"
                                        height={200}
                                        width={1024}
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

            </div>}
        </div>
      </>
   )
}

export default MainBlogComponent