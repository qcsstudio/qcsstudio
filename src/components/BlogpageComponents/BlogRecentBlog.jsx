"use client"
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { BlogDataContext } from '@/context/BlogData';
import Link from 'next/link';
import Loader from '../Loader';

const BlogRecentBlog = () => {

  const { multipleBlogData, GetBlogData, DeleteBlog, categoryData, GetCategoryData,       showBlogsDataLoader } = useContext(BlogDataContext);
  const [blogData, setBlogData] = useState([]);
  const [initialBlog, setInitialBlog] = useState(4);

  useEffect(() => {
    GetBlogData();
  }, []);

  useEffect(() => {
    const newArray = multipleBlogData.slice(1, initialBlog);
    setBlogData(newArray);
  }, [multipleBlogData, initialBlog]);

  const getDate = (createdAt) => {
    const newDate = new Date(createdAt).toLocaleDateString();
    return newDate;
  }

  

  return (
    <div className="relative px-4 sm:px-8 md:px-16">
      <Image
        src="/images/recentsblogsbg2.png"
        className="right-0 absolute hidden sm:block"
        height={200}
        width={200}
        alt=""
      />
      <Image
        src="/images/recentsBlogsbg1.png"
        className="absolute left-0 hidden sm:block"
        height={120}
        width={120}
        alt=""
      />
      {      showBlogsDataLoader  ? <Loader/> :
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 text-[#0E2D5B] mt-10 sm:mt-20">
          RECENT BLOG POSTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Large Image Blog Post */}
          {multipleBlogData && <Link href={`/blogs/${multipleBlogData[0]?.heading}`}>

            <div className="flex flex-col  text-center md:text-left">
              {multipleBlogData[0]?.thumbnail &&
                <Image
                  src={multipleBlogData[0]?.thumbnail}
                  className="w-full object-cover rounded-md"
                  height={500}
                  width={500}
                  alt="Head"
                />}
              <span className="text-gray-700 text-xs sm:text-sm">{multipleBlogData[0]?.createdAt && getDate(multipleBlogData[0]?.createdAt)}</span>
              <h3 className="text-base sm:text-xl md:text-2xl text-[#0E2D5B] font-bold">
                {multipleBlogData[0]?.heading}
              </h3>
              <div className="text-[#0E2D5B] font-normal leading-[20px] text-xs sm:text-sm md:text-base" dangerouslySetInnerHTML={{ __html: multipleBlogData[0]?.description.substring(0, 10) }}>

              </div>
            </div></Link>
          }

          <div className="flex flex-col gap-6">
            {/* Blog Post 1 */}
            {multipleBlogData ?
              blogData.map((data) => {
                return <Link key={data._id} href={`/blogs/${data.heading}`}>
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                    <div className="w-full sm:w-1/3">
                      <Image
                        src={data.thumbnail}
                        className="w-full object-cover rounded-md"
                        height={200}
                        width={200}
                        alt=""
                      />
                    </div>
                    <div className="w-full sm:w-2/3 text-center sm:text-left">
                      <span className="text-gray-700 text-xs sm:text-sm">{getDate(data.createdAt)}</span>
                      <h3 className="text-base sm:text-xl md:text-lg text-[#0E2D5B] font-bold">
                      {data.heading.replace(/_/g, " ").split(' ').map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')}
                      </h3>

                      <div className='bg-[#ffffff]' dangerouslySetInnerHTML={{ __html: data.description.slice(0, 40) }} />

                    </div>
                  </div></Link>
              }) : <Loader />
            }


          </div>

        </div>
      </div>}
      <div className="flex items-end justify-end">
        <Image
          src="/images/recentsblogsbg3.png"
          className="absolute hidden sm:block"
          height={100}
          width={100}
          alt=""
        />
      </div>
            {multipleBlogData.length > 4 ? 
      (initialBlog < multipleBlogData.length) ? <div className="flex justify-center my-16">
        <button className="bg-white border border-[#0E2D5B] hover:text-white hover:bg-[#0E2D5B] text-[#0E2D5B] px-6 py-2 rounded-md text-sm sm:text-base" onClick={() => setInitialBlog(initialBlog + 3)}>
          LOAD MORE
        </button>
      </div> : <div className="flex justify-center my-16">
        <button className="bg-white border border-[#0E2D5B] hover:text-white hover:bg-[#0E2D5B] text-[#0E2D5B] px-6 py-2 rounded-md text-sm sm:text-base" onClick={() => setInitialBlog(4)}>
          LOAD LESS
        </button>
      </div>
      :<div className="w-[100%] my-[5rem]" ></div>}
    </div>
  );
};

export default BlogRecentBlog;
