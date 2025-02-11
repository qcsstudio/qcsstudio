"use client"; // Ensure this is a Client Component

import { BlogDataContext } from '@/context/BlogData';
import { useParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MainBlogComponent from './MainBlogComponent';

const BlogSinglePage = () => {
    const {GetSingleBlogData,setblogData,blogData} = useContext(BlogDataContext);

    const params = useParams();
    const slug = params.slug;

    useEffect(()=>{
        GetSingleBlogData(slug);
    },[slug]);

    console.log(blogData);

   return (
      <>
        <Navbar/>
        <MainBlogComponent blogData={blogData}/>
        <Footer/>
      </>
   )
}

export default BlogSinglePage